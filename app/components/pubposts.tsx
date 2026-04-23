import { getPubPosts } from 'app/utils'
import Link from 'next/link'
import Chiclet from './chiclet'

export function PublicationPosts() {
  let allPosts = getPubPosts()

  return (
    <div>
      {allPosts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
            <div key={post.slug} className="flex flex-col space-y-1 mb-4">
            <Link href={`/publications/${post.slug}`}>
              <p className="text-neutral-900 dark:text-neutral-100 hover:underline">
                {post.metadata.title}
              </p>
            </Link>
        
            <div className="flex flex-wrap gap-2">
              <Chiclet text="PDF" href={post.metadata.pdf} />
              {post.metadata.slides && (
                <Chiclet text="Slides" href={post.metadata.slides} />
              )}
              {post.metadata.codeData && (
                <Chiclet text="Code" href={post.metadata.codeData} />
              )}
              {post.metadata.models && (
                <Chiclet text="Models" href={post.metadata.models} />
              )}
              {post.metadata.supplement && (
                <Chiclet text="Supplemental Materials" href={post.metadata.supplement} />
              )}
              {post.metadata.press?.map(({ name, link }) => (
                <Chiclet key={link} text={name} href={link} />
              ))}
              {post.metadata.awards && [post.metadata.awards].flat().map((award) => (
                <span key={award} className="inline-block px-2 py-1 rounded-md border border-gray-200 text-gray-600 text-xs font-medium dark:text-neutral-100">{award}</span>))}
            </div>
            <p className="mt-2 text-neutral-700 dark:text-neutral-100 text-sm tracking-tight">
            {post.metadata.authors.map((author, idx) => (
                <span key={idx} className={author === "Mei Tan" ? "font-medium" : ""}>
                {author}{idx < post.metadata.authors.length - 1 ? ", " : ""}
                </span>
            ))}
            </p>
            
            <p className="text-neutral-600 text-sm italic dark:text-neutral-100 tracking-tight">
                {post.metadata.venues.join(', ')}
            </p>
          </div>
        ))}
    </div>
  )
}
