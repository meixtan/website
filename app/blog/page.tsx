import ProfilePanel from 'app/components/aside'
import { BlogPosts } from 'app/components/blogposts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
        <ProfilePanel />
        <div>
          <h1 className="mb-2 text-lg font-md">
            Blog
          </h1>
          <BlogPosts />
        </div>
      </div>
    </section>
  )
}
