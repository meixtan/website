import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

type PubMetadata = {
  title: string
  publishedAt: string
  summary: string
  venues: string[]
  authors: string[]
  pdf: string
  slides?: string
  models?: string
  codeData?: string
  supplement?: string
  press?: { name: string; link: string }[]
  image?: string
}

type BlogMetadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

export type TeachingSubject = "AI Lit" | "ETLT" | "CSP"

type TeachMetadata = {
  title: string
  publishedAt: string
  subject: TeachingSubject
  summary: string
  image?: string
}

function parseFrontmatter<T>(fileContent: string): { metadata: T; content: string } {
  const { data: metadata, content } = matter(fileContent)
  return { metadata: metadata as T, content }
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile<T>(filePath): { metadata: T; content: string } {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter<T>(rawContent)
}

function getMDXData<T>(dir): { metadata: T; content: string; slug: string }[] {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile<T>(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getPosts<T>(page: string): { metadata: T; content: string; slug: string }[] {
  return getMDXData<T>(path.join(process.cwd(), 'app', page, 'posts'))
}

export function getTeachPosts() {
  return getPosts<TeachMetadata>("teaching")
}

export function getPubPosts() {
  return getPosts<PubMetadata>('publications')
}

export function getBlogPosts() {
  return getPosts<BlogMetadata>('blog')
}

export function getNewsContent() {
  let filePath = path.join(process.cwd(), 'app', 'news.md')

  if (!fs.existsSync(filePath)) {
    return ''
  }

  return fs.readFileSync(filePath, 'utf-8')
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
