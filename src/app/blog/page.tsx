import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on building marketing functions from scratch, translating complex technical products into market narratives, and leveraging AI-augmented workflows for technical B2B SaaS companies.',
}

// Mock blog posts for now - you can replace these with real content later
const blogPosts = [
  {
    title: "Building Product Marketing Functions That Actually Scale",
    excerpt: "How to establish foundational frameworks for positioning, messaging, and GTM that grow with your company.",
    date: "2024-01-15",
    slug: "building-product-marketing-functions",
    category: "Product Marketing"
  },
  {
    title: "Translating Complex Technical Products into Market Narratives",
    excerpt: "The art of making AI infrastructure and developer tools accessible to non-technical buyers without losing credibility.",
    date: "2024-01-10",
    slug: "translating-technical-products",
    category: "Technical Marketing"
  },
  {
    title: "AI-Augmented Marketing: Using Tools to Accelerate Human Creativity",
    excerpt: "How to implement AI workflows that cut content creation time by hours while maintaining authentic human judgment.",
    date: "2024-01-05",
    slug: "ai-augmented-marketing",
    category: "AI & Automation"
  }
]

function BlogPost({ post }: { post: typeof blogPosts[0] }) {
  return (
    <article className="group">
      <div className="flex items-center gap-4 text-sm/6 text-gray-500">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <span>•</span>
        <span>{post.category}</span>
      </div>
      <h2 className="mt-4 text-xl font-medium tracking-tight group-data-hover:text-gray-950/75">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className="mt-4 text-sm/6 text-gray-600">{post.excerpt}</p>
    </article>
  )
}

export default function Blog() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Subheading className="mt-16">Blog</Subheading>
        <Heading as="h1" className="mt-2">
          Thoughts on Product Marketing & Technical B2B SaaS
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          Insights on building marketing functions from scratch, translating complex technical products into market narratives, and leveraging AI-augmented workflows for technical B2B SaaS companies.
        </Lead>
      </Container>
      <Container className="mt-16 pb-24">
        <div className="space-y-16">
          {blogPosts.map((post) => (
            <BlogPost key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-sm/6 text-gray-600">
            More posts coming soon. Follow me on{' '}
            <Link href="https://linkedin.com/in/dashkellogg" className="font-medium text-gray-950">
              LinkedIn
            </Link>{' '}
            for the latest insights.
          </p>
        </div>
      </Container>
      <Footer />
    </main>
  )
}