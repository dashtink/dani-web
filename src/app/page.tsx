import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { BentoCard } from '@/components/bento-card'
import { Heading, Lead, Subheading } from '@/components/text'
import { Keyboard } from '@/components/keyboard'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
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
  title: 'Dani Kellogg - Product Marketing Leader for Technical B2B SaaS',
  description:
    'Senior product marketer with 10+ years helping technical B2B companies translate what they\'ve built into narratives that resonate. Track record across AI/ML, data platforms, and SaaS—anywhere the technology is complex and the story matters.',
  openGraph: {
    title: 'Dani Kellogg - Product Marketing Leader for Technical B2B SaaS',
    description: 'Senior product marketer with 10+ years helping technical B2B companies translate what they\'ve built into narratives that resonate. Track record across AI/ML, data platforms, and SaaS.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dani Kellogg - Product Marketing Leader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dani Kellogg - Product Marketing Leader for Technical B2B SaaS',
    description: 'Senior product marketer with 10+ years helping technical B2B companies translate what they\'ve built into narratives that resonate.',
    images: ['/og-image.png'],
  },
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
                Senior product marketer with 10+ years helping technical B2B companies translate what they've built into narratives that resonate. Track record across AI/ML, data platforms, and SaaS—anywhere the technology is complex and the story matters.
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
                  href="https://docs.google.com/document/d/1vuED0TOKB_NvF8h-PyLJ0DAY0JFSa0_P0oM_Pmgg-q0/edit?usp=sharing"
                  target="_blank"
                  className="text-sm font-semibold leading-6 text-black hover:text-gray-700"
                >
                  Download Resume <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#selected-work"
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


function BentoSection() {
  return (
    <Container id="what-i-bring">
      <Subheading>What I Bring</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        The capabilities that make me effective
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Startup Builder"
          title="Builder Who Thrives in Ambiguity"
          description="I've built marketing functions from scratch at multiple startups, including two that reached acquisition shortly after I left. I know how to operate when there's no playbook and no perfect information. But I also know how to come into something broken and fix it, or take something good and scale it. At Wallaroo AI, I rebuilt their marketing engine with near-zero budget after a failed prior marketing motion. Cut spend by $100K while driving qualified pipeline and establishing cohesive brand positioning."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-center" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Hands-On Leader"
          title="Hands-On Leader Who Drives Results"
          description="I'm not just a strategist—I get into the weeds. Whether that's leading all marketing at Wallaroo AI, refreshing positioning at LeadIQ, or building GTM frameworks at CastorDoc, I balance strategic thinking with tactical execution. I track what matters: pipeline, conversion rates, sales cycle length. I've created sales enablement materials that teams actually use and built frameworks that improve how cross-functional teams work together."
          graphic={
            <div className="absolute inset-0 bg-cover bg-bottom bg-[url(/screenshots/ahrefs-health.png)] bg-left" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Technical Credibility"
          title="Technical Credibility in Practice"
          description="I understand how products work because I take the time to learn. I build apps with Next.js, experiment with AI workflows using n8n, understand Docker and deployment. This isn't about being the most technical marketer—it's about earning credibility with Product and Engineering teams so we can collaborate as peers. Engineering teams respect positioning that reflects real capabilities. Sales teams trust enablement that doesn't oversimplify."
          graphic={
            <div className="absolute inset-0 bg-cover bg-top-left bg-[url(/screenshots/website-code-2.png)] bg-left" />
          }
          fade={['bottom']}
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="AI-Augmented"
          title="AI-Augmented Operator"
          description="I believe small teams should operate like bigger ones. I experiment with AI tools not because it's trendy, but because it works. I build workflows that cut content creation time, automate repetitive work, and free up humans to focus on strategy and creativity. I understand AI as an accelerator, not a replacement for judgment."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Company Stages"
          title="Adaptable Across Company Stages"
          description="I've built marketing at companies from employee #3 (Knack) through Series C (Mode Analytics) and everything in between. I know how to operate with no budget and no team, and I also know when to bring in specialists and how to structure teams that scale. I'm not precious about doing things 'the right way'—I care about doing what works for the stage you're at."
          graphic={
            <div className="absolute inset-0 bg-cover bg-[url(/screenshots/datasets.png)] bg-left" />
          }
          fade={['bottom']}
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
              <h2 className="text-base/7 font-semibold text-indigo-600">Series A | AI & MLOps</h2>
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
              <h2 className="text-base/7 font-semibold text-indigo-600">Series B | Sales Tech</h2>
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
              <h2 className="text-base/7 font-semibold text-indigo-600">Series A | Data Governance</h2>
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

function ModeExample() {
  return (
    <div className="overflow-hidden bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pt-4 lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Series C | Data Analytics</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
                Mode Analytics — Product Marketing Manager
              </p>
              <p className="mt-6 text-lg/8 text-black">
                Led multiple Tier 1 product launches during company repositioning toward business users. Spearheaded flagship Datasets launch, developed personas and segmentation that guided targeted messaging and informed sales strategy. Created sales enablement materials and competitive positioning that supported acquisition readiness. Coordinated integrated campaign launching rebrand and product simultaneously.
              </p>
              <figure className="mt-16 border-l border-gray-200 pl-8 text-black">
                <blockquote className="text-base/7">
                  <p>
                    "Her strong background in product combined with her project management skills and ability to ramp up incredibly quickly in ambiguous environments made her a fantastic asset."
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4 text-sm/6">
                  <div>
                    <span className="font-semibold text-black">Katie Paxson Flynn</span> –{' '}
                    <span className="text-gray-600">Director of PMM</span>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <img
            alt="Mode Analytics dashboard"
            src="/screenshots/app.png"
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
          <h2 className="text-base/7 font-semibold text-indigo-600">What I Care About</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
            The values that drive my work
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
          <BentoSection />
        </div>
        <WallarooExample />
        <LeadIQExample />
        <CastorDocExample />
        <ModeExample />
        <WhatICareAbout />
        <ContentAndThoughtLeadership />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
