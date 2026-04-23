// import { getBlogPosts } from 'app/utils'

export const baseUrl = 'https://meixtan.com'
export const dynamic = 'force-static'

export default async function sitemap() {
  // let blogs = getBlogPosts().map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.metadata.publishedAt,
  // }))

  let routes = ['', '/publications', '/teaching'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  // return [...routes, ...blogs]
  return routes
}
