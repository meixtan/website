import { RoundedImage } from "./mdx";


export default function ProfilePanel() {
    return (
        <aside className="flex flex-col items-center text-center md:items-start md:text-left mb-8">
        <div className="relative h-28 w-28 overflow-hidden rounded-full ring-1 ring-gray-200">
          <RoundedImage
            src="/sunflowers.png"
            alt="Portrait photo"
            fill
            sizes="112px"
            className="object-cover"
            priority
          />
        </div>

        <h2 className="mt-8 text-xl font-semibold tracking-tight">Mei Tan</h2>

        <p
          className="mt-4 text-sm text-gray-600 dark:text-neutral-100 hover:text-gray-900"
        >
          mxtan at stanford dot edu
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start">
          <a
            href="https://www.linkedin.com/in/meiflwr"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-neutral-100"
          >
            LinkedIn
          </a>
          <a
            href="https://huggingface.co/meiflwr"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-neutral-100"
          >
            HuggingFace
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-neutral-100"
          >
            CV
          </a>
        </div>
      </aside>
    )
  }
