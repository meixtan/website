"""Build the knowledge elicitation map served at meixtan.com/elicitation/.

Usage:  python3 elicitation/build.py
Parses knowledge_elicitation_taxonomy.md into a JSON tree, inlines it into template.html,
and writes public/elicitation/index.html (Next copies public/ as-is).
Illustrations live only in public/elicitation/images/:
  studies/<first-author>.jpg (or <author>-<year>.jpg) sits beside that study's example;
  methods/<method-id>.jpg is the method's own illustration.
"""
import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SRC = ROOT / "knowledge_elicitation_taxonomy.md"
TEMPLATE = ROOT / "template.html"
OUT_DIR = ROOT.parent / "public" / "elicitation"
OUT = OUT_DIR / "index.html"
IMAGES = OUT_DIR / "images"

FIELD_RE = re.compile(r"^\*\*([^*]+?):\*\*\s*(.*)$")
REFS_RE = re.compile(r"^\*\*References?\*\*\s*$")
URL_RE = re.compile(r"(https?://[^\s<]+?)([.,;)]?)(?=\s|$)")


def inline(text: str) -> str:
    """Convert a line of markdown (bold, italics, bare URLs) to HTML."""
    t = html.escape(text.strip(), quote=False)
    t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"\*(.+?)\*", r"<em>\1</em>", t)
    t = URL_RE.sub(r'<a href="\1" target="_blank" rel="noopener">\1</a>\2', t)
    return t


def slug(name: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")


def new_node(name, level):
    return {"name": name, "level": level, "desc": "", "fields": [], "paras": [], "refs": [], "children": []}


def parse(md: str):
    prose = []  # H1 sections: the first is the page title + intro, the rest render after the tree
    refs_node = new_node("References", 1)
    overview = new_node("", 1)
    categories = []
    stack = {}  # level -> current node
    cur = overview
    field = None
    in_refs = False

    for raw in md.splitlines():
        line = raw.rstrip()
        s = line.strip()
        m = re.match(r"^(#{1,5})\s+(.*)$", s)
        if m:
            level, name = len(m.group(1)), m.group(2).strip()
            field, in_refs = None, False
            if level == 1:
                cur = new_node(name, 1)
                prose.append(cur)
                continue
            node = new_node(name, level)
            if level == 2 and (name.lower().startswith("references") or name.lower().startswith("background")):
                # references for the overview: every bullet or paragraph is one reference
                cur, in_refs, stack = refs_node, True, {}
                continue
            elif level == 2:
                categories.append(node)
                stack = {2: node}
            else:
                parent = stack.get(level - 1)
                if parent is None:
                    raise ValueError(f"Heading without parent: {name}")
                parent["children"].append(node)
                stack[level] = node
                for deeper in [k for k in stack if k > level]:
                    del stack[deeper]
            cur = node
            continue
        if not s or s == "---":
            continue
        if REFS_RE.match(s):
            in_refs, field = True, None
            continue
        if in_refs and s.startswith("- "):
            cur["refs"].append(inline(s[2:]))
            continue
        if in_refs and cur is refs_node:
            cur["refs"].append(inline(s))
            continue
        fm = FIELD_RE.match(s)
        if fm:
            in_refs = False
            label, value = fm.group(1).strip(), fm.group(2).strip()
            if label in ("Tradition", "Traditions"):
                cur["traditions"] = [t.strip() for t in value.split(";") if t.strip()]
                field = None
                continue
            field = {"label": label, "paras": [inline(value)] if value else []}
            cur["fields"].append(field)
            continue
        if re.match(r"^\*[^*].*\*$", s) and not cur["desc"] and not cur["fields"] and cur["level"] in (2, 3):
            cur["desc"] = inline(s[1:-1])
            continue
        if field is not None:
            sub = re.match(r"^\*\*([^*]+?)\.\*\*\s", s)
            if sub and cur["level"] >= 4:
                # bold run-in paragraph ("**Likert scale.** ...") marks a subtype of the method
                cur.setdefault("subtypes", []).append(sub.group(1).strip())
            field["paras"].append(inline(s))
        else:
            cur["paras"].append(inline(s))

    # ids for methods / variants
    seen = set()

    def walk(node, path):
        node["path"] = path
        if node["level"] >= 4:
            sid = slug(node["name"])
            while sid in seen:
                sid += "-2"
            seen.add(sid)
            node["id"] = sid
            node["hasContent"] = bool(node["fields"] or node["refs"] or node.get("traditions"))
            # the method's own illustration
            for ext in ("jpg", "png", "webp"):
                if (IMAGES / "methods" / f"{sid}.{ext}").exists():
                    node["image"] = f"images/methods/{sid}.{ext}"
                    break
            # study illustrations: images/studies/<first author>.jpg, shown above the example it depicts
            for f in node["fields"]:
                if not re.match(r"^Examples?$", f["label"]):
                    continue
                for pi, para in enumerate(f["paras"]):
                    text = re.sub(r"<[^>]+>", "", para)
                    author = re.match(r"([A-Za-z\u00C0-\u017F'-]+)", text)
                    if not author:
                        continue
                    # <author>-<year>.jpg tells apart two studies by the same first author; else <author>.jpg
                    year = re.search(r"\((\d{4})\)", text[:120])
                    names = ([f"{author.group(1).lower()}-{year.group(1)}"] if year else []) + [author.group(1).lower()]
                    img = next((IMAGES / "studies" / f"{n}.jpg" for n in names
                                if (IMAGES / "studies" / f"{n}.jpg").exists()), None)
                    if img:
                        cite = re.match(r"^(.{0,80}?\(\d{4}\))", text)
                        f.setdefault("images", []).append({
                            "src": f"images/studies/{img.name}",
                            "caption": cite.group(1) if cite else author.group(1),
                            "para": pi,
                        })
        for c in node["children"]:
            walk(c, path + [node["name"]])
        if not node["children"]:
            del node["children"]

    for c in categories:
        walk(c, [])

    trads = []

    def collect(node):
        for t in node.get("traditions", []):
            if t not in trads:
                trads.append(t)
        for c in node.get("children", []):
            collect(c)

    for c in categories:
        collect(c)

    categories = [c for c in categories if c.get("children")]
    return {
        "title": prose[0]["name"] if prose else "Knowledge Elicitation Map",
        "intro": prose[0]["paras"] if prose else [],
        "sections": [{"name": n["name"], "id": slug(n["name"]), "paras": n["paras"]} for n in prose[1:]],
        "refs": refs_node["refs"],
        "categories": categories,
        "traditions": trads,
    }


def main():
    data = parse(SRC.read_text(encoding="utf-8"))
    payload = json.dumps(data, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/")
    page = TEMPLATE.read_text(encoding="utf-8").replace("/*__DATA__*/null", payload)
    OUT.write_text(page, encoding="utf-8")
    n = sum(1 for _ in re.finditer(r'"hasContent":true', payload))
    print(f"Wrote {OUT} — {n} methods, {len(data['traditions'])} traditions, {len(page)//1024} KB")


if __name__ == "__main__":
    main()
