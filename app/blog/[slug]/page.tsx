import { notFound } from "next/navigation"

export const dynamic = "force-dynamic"

const GHOST_URL = process.env.NEXT_PUBLIC_GHOST_API_URL!
const GHOST_KEY = process.env.NEXT_PUBLIC_GHOST_CONTENT_KEY!

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPost({ params }: PageProps) {
  try {
    // ✅ IMPORTANT FIX
    const { slug } = await params

    const safeSlug = encodeURIComponent(slug)

    const url = `${GHOST_URL}/ghost/api/content/posts/slug/${safeSlug}/?key=${GHOST_KEY}`

    console.log("Fetching:", url)

    const res = await fetch(url, {
      cache: "no-store",
    })

    if (!res.ok) {
      console.error("Ghost API failed:", res.status, res.statusText)
      return notFound()
    }

    const data = await res.json()
    const post = data?.posts?.[0]

    if (!post) return notFound()

    return (
      <main className="container mx-auto pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </main>
    )
  } catch (error) {
    console.error("Ghost fetch crashed:", error)
    return notFound()
  }
}
