import ProfilePanel from 'app/components/aside'
import { PublicationPosts } from 'app/components/pubposts'

export const metadata = {
  title: 'Publications',
  description: 'Selected publications.',
}

export default function Page() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
        <ProfilePanel />
        <div>
        <h1 className="mb-2 text-lg font-md">
          Selected Publications
        </h1>
        <p className="mb-4">
          Academic publishing is a beasty production. On my little corner of the internet, I hope to reflect on what I learned as a researcher, technologist, and human. See the full list on{' '} 
          <a
              href="https://scholar.google.com/citations?user=oHJUrEMAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-gray-300 underline-offset-4 hover:decoration-gray-600"
            >
              Google Scholar
            </a>. 
        </p>
          <PublicationPosts />
        </div>
      </div>
    </section>
  )
}
