/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // `next dev` doesn't serve public/elicitation/index.html at /elicitation/ (GitHub Pages does),
  // so map it here for local testing only; static export doesn't support rewrites anyway.
  ...(process.env.NODE_ENV === 'development' && {
    async rewrites() {
      return [{ source: '/elicitation/', destination: '/elicitation/index.html' }]
    },
  }),
}

export default nextConfig
