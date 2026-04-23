type ChicletProps = {
  href: string
  text: string
}

export default function Chiclet({ href, text }: ChicletProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-2 py-1 rounded-md bg-gray-100 text-gray-700 text-xs hover:bg-gray-200 transition"
    >
      {text}
    </a>
  )
}
