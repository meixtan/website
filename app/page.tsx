import ProfilePanel from './components/aside'
import { News } from './components/news'

export default function Page() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
        <ProfilePanel />
        <div>
          <p className="mb-4">
            Hello world! I am a PhD candidate at the Stanford University Graduate School of
            Education, advised by{' '}
            <a
              href="https://www.dorademszky.com/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-gray-300 underline-offset-4 hover:decoration-gray-600"
            >
              Dora Demszky
            </a>{' '}
            and{' '}
            <a
              href="https://haridecoded.com/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-gray-300 underline-offset-4 hover:decoration-gray-600"
            >
              Hari Subramonyam
            </a>
            .
          </p>
          <p className="mb-4">
          My research is about NLP in education. I study the language of educational interactions and develop systems to understand and support teaching and learning. I use education as a lens on expertise and knowledge representation, and I develop methods to inform both language modeling and learning theory.
          </p>
          <p>
          I did my undergraduate at Rice University in Computer Science and Visual and Dramatic Arts, and my master's at Stanford University in Education Data Science. I worked as a senior software engineer at{' '}
            <a
              href="https://www.microsoft.com/en-us/education"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-gray-300 underline-offset-4 hover:decoration-gray-600"
            >
              Microsoft Education
            </a>{' '}
          developing learning tools for 90M teachers and students worldwide, and I taught high school computer science with{' '} 
          <a
              href="https://www.microsoft.com/en-us/teals"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-gray-300 underline-offset-4 hover:decoration-gray-600"
            >
              TEALSK12
            </a>. 
          </p>

          <News />

        </div>
      </div>
    </section>
  )
}
