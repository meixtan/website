import { getNewsContent } from 'app/utils'
import { CustomMDX } from './mdx'

function stripMarkdownComments(content: string) {
  return content.replace(/<!--[\s\S]*?-->/g, '').trim()
}

export function News() {
  let content = stripMarkdownComments(getNewsContent())

  if (!content) {
    return null
  }

  return (
    <section className="my-8">
      <h1 className="mb-2 text-lg font-md">News</h1>
      <article className="prose">
        <CustomMDX source={content} />
      </article>
    </section>
  )
}
