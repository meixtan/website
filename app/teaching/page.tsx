import ProfilePanel from 'app/components/aside'
import { TeachingPosts } from 'app/components/teachposts'

export const metadata = {
  title: 'Teaching',
  description: 'Teaching resources and workshops.',
}

export default function Page() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
        <ProfilePanel />
        <div>
          <h1 className="mb-2 text-lg font-md">
            Teaching
          </h1>
          <p className="mb-4">
            I'm not a trained teacher, but I love it. Over the years, I've had the chance to design lessons, projects, and workshops that I hope can be helpful resources.
          </p>
          <p className="mb-2 font-md">
            AI Literacy Workshops
          </p>
          <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
            I work with teachers a lot in my research, and naturally, we end up talking about AI. At teacher summits and conferences, I've had the chance to lead AI literacy workshops.
            I love explaining this LLM moment we're living in. Honestly, I find myself doing this even while sitting at Starbucks.
          </p>
          <TeachingPosts
            subject={"AI Lit"}
          />
          <p className="mb-2 font-md mt-4">
            NLP in Education
          </p>
          <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
            I TA Dora's class Empowering Teachers with Language Technology. 
            I get to guest lecture, mentor students, and (best of all) design assignments. Our students are mostly computer science undergrads, with a few from the School of Education, so it’s a great mix of skills and perspectives.
          </p>
          <TeachingPosts
            subject={"ETLT"}
          />
          <p className="mb-2 font-md mt-4">
            Introduction to Computer Science
          </p>
          <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
          I taught this high school elective through TEALS. The curriculum was based on BJC, but I was trusted to redesign it from scratch. 
          Years later, I’m still very opinionated about CS pedagogy, and I still think up projects for fun.
          </p>
          <TeachingPosts
            subject={"CSP"}
          />
          </div>
      </div>
    </section>
  )
}
