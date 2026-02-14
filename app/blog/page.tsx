"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

type GhostPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  feature_image: string
  published_at: string
  reading_time: number
  primary_tag?: { name: string }
  primary_author?: { name: string }
}

export default function BlogPage() {
  const [posts, setPosts] = useState<GhostPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_GHOST_API_URL}/ghost/api/content/posts/?key=${process.env.NEXT_PUBLIC_GHOST_CONTENT_KEY}&include=tags,authors&limit=7`
        )
        const data = await res.json()
        setPosts(data.posts || [])
      } catch (error) {
        console.error("Failed to load Ghost posts", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return <div className="pt-40 text-center">Loading blogs...</div>
  }

  if (!posts.length) {
    return <div className="pt-40 text-center">No blog posts found.</div>
  }

  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
        <div className="container mx-auto px-4">

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              IHS <span className="text-brand-orange">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Insights, best practices, and industry trends in healthcare revenue cycle management.
            </p>
          </div>

          {/* Featured */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="border-2 border-brand-orange/40 overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={featured.feature_image || "/placeholder.svg"}
                    alt={featured.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-brand-orange text-white">Featured</Badge>
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-3">
                    {featured.primary_tag?.name || "Blog"}
                  </Badge>

                  <h2 className="text-3xl font-bold mb-4">{featured.title}</h2>
                  <p className="text-muted-foreground mb-6">{featured.excerpt}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featured.primary_author?.name}
                    </div>

                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featured.published_at).toLocaleDateString()}
                    </div>

                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featured.reading_time} min read
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featured.slug}`}
                    className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-orange font-semibold"
                  >
                    Read Full Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* All Posts */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Latest <span className="text-brand-orange">Articles</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {rest.map((post) => (
                <Card key={post.id} className="group overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={post.feature_image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition"
                    />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-brand-blue">
                      {post.primary_tag?.name}
                    </Badge>
                  </div>

                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-orange font-semibold text-sm"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </main>

      <SiteFooter />
    </>
  )
}
