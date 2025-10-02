import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Blog Post',
  description: 'Insights on product marketing and technical B2B SaaS.',
}

// Mock blog post data - you can replace this with real content later
const blogPosts = {
  "building-product-marketing-functions": {
    title: "Building Product Marketing Functions That Actually Scale",
    content: `
      <p>When you're building a product marketing function from scratch, it's easy to get overwhelmed by all the things you could be doing. But the key is to focus on the foundational frameworks that will actually scale with your company.</p>
      
      <p>I've learned this the hard way, having built marketing functions at multiple companies, including two that were acquired shortly after I joined. Here's what I've learned about creating systems that actually work:</p>
      
      <h2>Start with Positioning</h2>
      <p>Before you can create any marketing materials, you need to know what you're actually selling. Not just what your product does, but why it matters and how it's different from everything else out there.</p>
      
      <p>This isn't just a one-time exercise. Your positioning should evolve as your product and market mature. But having a clear foundation makes everything else easier.</p>
      
      <h2>Build Systems, Not Just Campaigns</h2>
      <p>Anyone can run a one-off campaign. The real value comes from building systems that can scale. This means creating templates, processes, and workflows that your team can use again and again.</p>
      
      <p>I'm particularly interested in AI-augmented workflows that can help small teams punch above their weight. The key is using tools to handle the repetitive work so humans can focus on strategy and creativity.</p>
      
      <h2>Measure What Matters</h2>
      <p>Track pipeline growth, conversion rates, and sales cycle length. But also track the things that lead to those outcomes: sales enablement usage, content engagement, and team efficiency.</p>
      
      <p>The goal isn't just to hit your numbers—it's to build a marketing function that can grow with your company without burning out your team.</p>
    `,
    date: "2024-01-15",
    category: "Product Marketing"
  },
  "translating-technical-products": {
    title: "Translating Complex Technical Products into Market Narratives",
    content: `
      <p>One of the biggest challenges in technical B2B SaaS is explaining complex products to non-technical buyers without losing credibility with your engineering team.</p>
      
      <p>I've spent years working on this problem, and here's what I've learned:</p>
      
      <h2>Understand the Technology Deeply</h2>
      <p>You can't translate what you don't understand. I've built apps using Next.js, worked with Docker containers, and understand compliance requirements like PII and HIPAA. This technical credibility is essential when working with engineering teams.</p>
      
      <h2>Find the Human Story</h2>
      <p>Every technical product solves a human problem. Your job is to find that story and tell it in a way that resonates with buyers while maintaining technical accuracy.</p>
      
      <h2>Use Analogies Carefully</h2>
      <p>Analogies can help, but they can also oversimplify. The key is finding the right level of abstraction that makes the complex understandable without being reductive.</p>
    `,
    date: "2024-01-10",
    category: "Technical Marketing"
  },
  "ai-augmented-marketing": {
    title: "AI-Augmented Marketing: Using Tools to Accelerate Human Creativity",
    content: `
      <p>I believe in being AI-augmented: using tools to handle the repetitive work so humans can focus on strategy, creativity, and judgment.</p>
      
      <p>Here's how I approach AI integration in marketing:</p>
      
      <h2>Start with the Workflow</h2>
      <p>Don't just add AI tools randomly. Look at your existing workflows and identify where AI can make the biggest impact. I've built content systems that go from Google Sheets tracking to AI-generated long-form blogs to social distribution.</p>
      
      <h2>Maintain Human Judgment</h2>
      <p>AI is great for generating content, but humans are still needed for strategy, editing, and quality control. The goal is to accelerate human creativity, not replace it.</p>
      
      <h2>Build Systems That Scale</h2>
      <p>I use tools like n8n for building agentic workflows and implement AI with governance, not blindly. The key is creating systems that can scale without creating technical debt.</p>
    `,
    date: "2024-01-05",
    category: "AI & Automation"
  }
}

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = params
  const post = blogPosts[slug as keyof typeof blogPosts]
  
  if (!post) {
    notFound()
  }

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <div className="mt-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm/6 font-medium text-gray-950 data-hover:text-gray-950/75"
          >
            <ChevronLeftIcon className="size-4" />
            Back to blog
          </Link>
        </div>
        <article className="mt-8 max-w-3xl">
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
          <Heading as="h1" className="mt-4">
            {post.title}
          </Heading>
          <div 
            className="mt-8 prose prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </Container>
      <Footer />
    </main>
  )
}