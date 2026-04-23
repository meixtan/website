import ProfilePanel from 'app/components/aside'
import { CustomMDX } from 'app/components/mdx'
import Seo from 'app/components/seo'
import { baseUrl } from 'app/sitemap'
import { getTeachPosts } from 'app/utils'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

export async function generateStaticParams() {
  let posts = getTeachPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }:{params: Promise<{ slug: string }>}): Promise<Metadata> {
  const { slug } = await params
  let post = getTeachPosts().find((post) => post.slug === slug)
  if (!post) return {}

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let images = image ? [{ url: image }] : undefined

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/teaching/${post.slug}`,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
  }
}

export default function TeachingResource({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params)
  let post = getTeachPosts().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
        <ProfilePanel />
        <div>
          <Seo 
            slug={slug}
            title={post.metadata.title}
            summary={post.metadata.summary}
            sitePath='teaching'
            schemaType='LearningResource'
          />
          <h1 className="title text-xl tracking-tighter">
            {post.metadata.title}
          </h1>
          <div className="flex justify-between items-center mt-2 mb-8 text-sm">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {post.metadata.summary}
            </p>
          </div>
          <article className="prose">
            <CustomMDX source={post.content} />
          </article>
        </div>
      </div>
    </section>
  )
}
