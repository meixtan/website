import { baseUrl } from "app/sitemap"

type ContentMeta = {
    slug: string
    title: string
    summary: string
    sitePath: string
    schemaType: 'BlogPosting' | 'ScholarlyArticle' | 'LearningResource' | 'WebPage'
    publishedAt?: string
    image?: string
}

export default function Seo({slug, title, summary, sitePath, schemaType, publishedAt, image}: ContentMeta) {
    return (
        <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': schemaType,
            headline: title,
            datePublished: publishedAt,
            dateModified: publishedAt,
            description: summary,
            image: image ? `${baseUrl}${image}` : undefined,
            url: `${baseUrl}/${sitePath}/${slug}`,
            author: {
              '@type': 'Mei Tan',
              name: 'My Portfolio',
            },
          }),
        }}
      />
    )
  }
