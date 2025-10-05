import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { BentoCard } from '@/components/bento-card'
import { Heading, Lead, Subheading } from '@/components/text'
import { Keyboard } from '@/components/keyboard'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { ContentAndThoughtLeadership } from '@/components/content-thought-leadership'
import {
  BookOpen,
  Users,
  Code,
  Search,
  MessageSquare,
  TrendingUp,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Senior product marketer with 10+ years helping technical B2B companies translate what they\'ve built into narratives that resonate. Three acquisitions. Track record across AI/ML, data platforms, developer tools, and SaaS.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className="text-5xl font-regular tracking-tight text-pretty text-black sm:text-7xl">
                I Build Marketing That Makes Complex Products Make Sense
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-black sm:max-w-md sm:text-xl/8 lg:max-w-none">
                Senior product marketer with 10+ years helping technical B2B companies translate what they've built into narratives that resonate. Three acquisitions. Track record across AI/ML, data platforms, developer tools, and SaaS—anywhere the technology is complex and the story matters.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="https://cal.com/dani-kellogg/30min"
                  target="_blank"
                  className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                  Let's Talk
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-black hover:text-gray-700"
                >
                  Download Resume <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-black hover:text-gray-700"
                >
                  View Work <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
                <div className="relative">
                  <img
                    alt=""
                    src="/dani-3.png"
                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <img
                    alt=""
                    src="/dani-2.png"
                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
                <div className="relative">
                  <img
                    alt=""
                    src="/dani-4.png"
                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1613525850352-52de526e2336?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHNlYXR0bGV8ZW58MHx8MHx8fDA%3D"
                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
                <div className="relative">
                  <img
                    alt=""
                    src="/dani-1.png"
                    className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden" id="what-i-do">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          What I Do
        </Heading>
        <p className="mt-6 max-w-3xl text-lg/7 text-black">
          I've spent the last decade building marketing at technical companies—from employee #3 at Knack through Series C at Mode Analytics. I love the early stage when nothing exists yet, but I also know how to come into something that's broken and fix it, or take something good and scale it.
        </p>
        <p className="mt-6 max-w-3xl text-lg/7 text-black">
          I'm technical enough to hold my own in product conversations (I code, I understand infrastructure, I actually read the docs), but I lead with curiosity, not ego. I ask a lot of questions. I get into the weeds. I care about understanding how things actually work so I can explain why they matter.
        </p>
        <p className="mt-6 max-w-3xl text-lg/7 text-black">
          I've worked across AI/ML infrastructure, data analytics, developer tools, no-code platforms, and sales tech. What they all have in common: products that are hard to explain and teams that need someone who gets it.
        </p>
        <p className="mt-6 max-w-3xl text-lg/7 text-black">
          Most recently, I've been running ProductColab while figuring out what's next. Here's what I know: I miss being part of a team. I miss going deep on a single product and brand instead of rotating through client work. I want to find a company I can grow with—somewhere I can build something that lasts.
        </p>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-144 sm:h-auto sm:w-304"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container id="what-i-bring">
      <Subheading>What I Bring</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Builder Who Thrives in Ambiguity
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Experience"
          title="Builder Who Thrives in Ambiguity"
          description="I've built marketing functions from scratch at multiple startups, including three that achieved acquisitions. I know how to operate when there's no playbook and no perfect information. But I also know how to come into something broken and fix it, or take something good and scale it."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-center" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Technical"
          title="Technical Depth Meets Curiosity"
          description="I understand how products work because I take the time to learn. I build apps with Next.js, experiment with AI workflows using n8n, understand Docker and deployment, and constantly ask 'how does this actually work?' This isn't about being the most technical marketer—it's about earning credibility with Product and Engineering teams so we can collaborate as peers."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-left" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Results"
          title="Outcomes Over Activity"
          description="I track what matters: pipeline, conversion rates, sales cycle length, win/loss patterns. I've doubled pipeline growth, improved demo-to-close rates, shortened enterprise sales cycles, and created materials that teams actually use."
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="AI-Augmented"
          title="AI-Augmented in Practice"
          description="I believe small teams should operate like bigger ones. I experiment with AI tools not because it's trendy, but because it works. I build workflows that cut content creation time, automate repetitive work, and free up humans to focus on strategy and creativity. I understand AI as an accelerator, not a replacement for judgment."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Impact"
          title="Recent Example"
          description="At Wallaroo AI, I rebuilt their marketing engine with near-zero budget after a failed prior marketing motion. Cut spend by $100K while driving qualified pipeline and establishing cohesive brand positioning."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function WallarooExample() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32" id="selected-work">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pt-4 lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">AI & MLOps</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
                Wallaroo AI — Head of Marketing (Fractional)
              </p>
              <p className="mt-6 text-lg/8 text-black">
                Rebuilt marketing engine with near-zero budget after failed prior marketing motion. Eliminated $100K in unnecessary expenses, refocused all channels around unified narrative, drove new qualified inbound pipeline. Positioned them as leader in AI software market with cohesive brand identity.
              </p>
              <figure className="mt-16 border-l border-gray-200 pl-8 text-black">
                <blockquote className="text-base/7">
                  <p>
                    "Partnering with Dani was a game-changer. She expertly rebooted our marketing, branding, and positioned Wallaroo.AI as a leader in the AI software market."
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4 text-sm/6">
                  <div>
                    <span className="font-semibold text-black">Stephen Spellicy</span> –{' '}
                    <span className="text-gray-600">COO</span>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <img
            alt="Wallaroo AI dashboard"
            src="/screenshots/wallaroo-recent.png"
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:ml-0 object-cover"
          />
        </div>
      </div>
    </div>
  )
}

function LeadIQExample() {
  return (
    <div className="overflow-hidden bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pt-4 lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Sales Tech</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
                LeadIQ — Head of Product Marketing (Fractional)
              </p>
              <p className="mt-6 text-lg/8 text-black">
                Rebooted PMM function during company pivot. Refreshed company-wide positioning and messaging, set new strategic direction around buying signals, rebuilt GTM framework for product launches. Created unified narrative across multiple product offerings in crowded market.
              </p>
              <figure className="mt-16 border-l border-gray-200 pl-8 text-black">
                <blockquote className="text-base/7">
                  <p>
                    "Dani transformed our product marketing at LeadIQ and rebooted the motion from the ground up... significantly improving our market strategy in a crowded space."
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4 text-sm/6">
                  <div>
                    <span className="font-semibold text-black">Joerg Koehler</span> –{' '}
                    <span className="text-gray-600">VP Marketing</span>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <img
            alt="LeadIQ platform"
            src="/screenshots/leadiq-recent.png"
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:ml-0 object-cover"
          />
        </div>
      </div>
    </div>
  )
}

function CastorDocExample() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pt-4 lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Data Governance</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
                CastorDoc — Founding Product Marketing Lead
              </p>
              <p className="mt-6 text-lg/8 text-black">
                Built Product Marketing function from scratch for French startup entering US market. Established foundational GTM framework with Product team across 9-hour time difference, created core positioning and messaging, co-led complete rebrand, built first PMM metrics dashboard and win/loss analysis process.
              </p>
              <figure className="mt-16 border-l border-gray-200 pl-8 text-black">
                <blockquote className="text-base/7">
                  <p>
                    "She established rhythms and processes with the product team, defined our GTM and launch process, and owned company positioning as the company pivoted strategy in a competitive market."
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4 text-sm/6">
                  <div>
                    <span className="font-semibold text-black">Marcela Heywood</span> –{' '}
                    <span className="text-gray-600">Head of Marketing</span>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <img
            alt="CastorDoc interface"
            src="/screenshots/castordoc-recent.png"
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:ml-0 object-cover"
          />
        </div>
      </div>
    </div>
  )
}


function WhatICareAbout() {
  const features = [
    {
      name: 'Story comes first',
      description: 'You can build the most sophisticated marketing infrastructure in the world, but if you\'re telling the wrong story, none of it matters. Finding that message that makes someone stop and think "this is exactly what I need"—that\'s the work.',
      icon: BookOpen,
    },
    {
      name: 'Marketing doesn\'t happen in a vacuum',
      description: 'The best positioning comes from actually understanding what Product is building and why, and from hearing what Sales is experiencing in the field. Cross-functional collaboration isn\'t a nice-to-have, it\'s how good work gets done.',
      icon: Users,
    },
    {
      name: 'Technical credibility earns trust',
      description: 'Too many product marketers treat "technical" like a foreign language they need translated. If you\'re marketing a technical product, do the work to understand it. You don\'t need to build it, but you should understand it well enough to represent it honestly.',
      icon: Code,
    },
    {
      name: 'Curiosity over assumptions',
      description: 'The best insights come from constantly asking "how does this actually work?" and "why does this matter?" I stay curious about products, customers, markets, and tools—because the moment you stop asking questions is when your marketing becomes generic.',
      icon: Search,
    },
    {
      name: 'Clear beats clever',
      description: 'I\'d rather write something that\'s immediately understandable than something that sounds impressive but says nothing. Good marketing uses plain language to explain complex ideas, not jargon to obscure simple ones.',
      icon: MessageSquare,
    },
    {
      name: 'Sustainable growth beats hypergrowth',
      description: 'I\'ve watched companies scale too fast, burn out their teams, and lose what made them interesting. Building for the long term with strong fundamentals matters more than chasing the next funding round.',
      icon: TrendingUp,
    },
  ]

  return (
    <div className="bg-white py-24 sm:py-32" id="what-i-care-about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base/7 font-semibold text-indigo-600">My principles</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
            The values that drive my work
          </p>
          <p className="mt-6 text-lg/8 text-black">
            I'm looking for companies and teams that align with what matters most to me in my career and work.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-black sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-black">
                <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-24">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        <WallarooExample />
        <LeadIQExample />
        <CastorDocExample />
        <WhatICareAbout />
        <ContentAndThoughtLeadership />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
