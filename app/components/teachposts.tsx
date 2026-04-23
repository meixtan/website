import { getTeachPosts } from 'app/utils'
import Link from 'next/link'

type TeachingPostsProps = {
    subject: string
}

export function TeachingPosts({ subject }: TeachingPostsProps) {
  let allPosts = getTeachPosts()

  return (
    <div>
      {allPosts
        .filter((a) => a.metadata.subject == subject)
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <li key={post.slug} className="list-inside">
            <Link
              className="text-neutral-900 dark:text-neutral-100 tracking-tight underline"
              href={`/teaching/${post.slug}`}
            >
              {post.metadata.title}
            </Link>
          </li>
        ))}
    </div>
  )
}
