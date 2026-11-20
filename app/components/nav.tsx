import Link from 'next/link'

const navItems: Record<string, { name: string; static?: boolean }> = {
  '/': {
    name: 'home',
  },
  '/publications': {
    name: 'publications',
  },
  '/teaching': {
    name: 'teaching',
  },
  // a static page in public/ (built by elicitation/build.py), so it gets a plain link, not a Next route;
  // it opens in a new tab so the site stays open behind it
  '/elicitation/': {
    name: 'elicitation map',
    static: true,
  },
  // '/blog': {
  //   name: 'blog',
  // },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name, static: isStatic }]) => {
              const Tag = isStatic ? 'a' : Link
              return (
                <Tag
                  key={path}
                  href={path}
                  {...(isStatic && { target: '_blank', rel: 'noopener' })}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Tag>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
