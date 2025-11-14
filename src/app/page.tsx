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
  Compass,
  Target,
  Network,
  Wrench,
  RefreshCw,
  Heart,
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
      <Gradient className="absolute inset-0" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
              <p className="text-base/7 font-semibold text-black">Senior Product Marketing - AI/ML, Data - B2B SaaS</p>
              <h1 className="mt-2 text-5xl font-regular tracking-tight text-pretty text-black sm:text-7xl">
              I Make Complex Products Resonate From Zero-To-Scale.
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-black sm:max-w-md sm:text-xl/8 lg:max-w-none">
              From positioning and GTM strategy to launch execution and sales enablement, I've built the product marketing function at startups through acquisition. 
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
                  href="https://drive.google.com/drive/folders/1Mam7Y41ectGjrYIw-x3pCxK2nwlJB2NV?usp=sharing"
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


function WallarooExample() {
  return (
    <div className="overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32" id="selected-work">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pt-4 lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-black">Senior Marketing Marketing | AI & MLOps</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
                Wallaroo AI
              </p>
              <p className="mt-6 text-lg/8 text-black">
                I joined Wallaroo after a failed marketing motion, my task was to rebuild our marketing engine with near-zero budget. We eliminated $100K in unnecessary expenses, refocused all channels around a unified narrative and drove new qualified inbound pipeline. We refreshed their positioning to target their full buying committee with cohesive brand identity.
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
    <div className="overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pt-4 lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-black">Senior Product Marketing Manager | Sales Tech</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
                LeadIQ
              </p>
              <p className="mt-6 text-lg/8 text-black">
                At LeadIQ I rebooted PMM function during company pivot. WE refreshed company-wide positioning and messaging, set new strategic direction around buying signals, rebuilt GTM framework for product launches. The outcome was a unified narrative across multiple product offerings in crowded market.
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
              <h2 className="text-base/7 font-semibold text-black"> Senior Product Marketing Manager, Lead | Data Governance</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
                CastorDoc
              </p>
              <p className="mt-6 text-lg/8 text-black">
                I joined CastorDoc, a French startup, as a part of their US expansion team as their first Product Marketer. My focus was building the Product Marketing function from scratch and establishing a foundational GTM framework with Product team across 9-hour time difference. We created core positioning and messaging, co-led complete rebrand, built first PMM metrics dashboard and win/loss analysis process.
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
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pt-4 lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-black">Product Marketing Manager | Data Analytics</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
                Mode Analytics 
              </p>
              <p className="mt-6 text-lg/8 text-black">
                At Mode, spearheaded their flagship product launch alongside an integrated campaign with their rebrand. For this launch and others we developed personas and segmentation that guided targeted messaging and informed sales strategy. Created sales enablement materials and competitive positioning that supported acquisition readiness.
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

function QuickSummary() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div>
          <p className="text-base/7 font-semibold text-black">The TLDR</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">A Bit About Me</h2>
          <p className="mt-8 text-lg/8 text-black">
          I've spent 10+ years at technical B2B startups—AI/ML, data infrastructure, sales tech, no-code platforms. I do product marketing, I've built the function from scratch at companies that got acquired, and I'm good at making complex products make sense when resources are tight. I live in Seattle with my wife and three kids. When I'm not product marketing, I'm usually exploring the Pacific Northwest, playing Minecraft with my kids, or tinkering with the latest hobby I've collected.
          </p>
        </div>
        <div className="mt-24">
          <LogoCloud />
        </div>
      </div>
    </div>
  )
}

function WhatICareAbout() {
  const features = [
    {
      name: 'Create Order, Stay Flexible',
      description: 'Ambiguity is part of the job. The key is finding a path forward and not being afraid to adjust when things change. Staying situationally aware and adapting as you go is what actually moves things forward.',
      icon: Compass,
    },
    {
      name: 'Less Ego, More Impact',
      description: 'My focus is on what will make the most impact right now. Is it 10,000-foot strategy or finishing a slide deck for a critical sales call? Good work means going wherever you need to go to move the needle, regardless of what the task looks like.',
      icon: Target,
    },
    {
      name: 'Cross-Collaboration, Not Silos',
      description: 'The best outcomes happen when product, engineering, sales, and marketing work together. Being the translator and connector between teams isn\'t extra work—it\'s how you get anything meaningful done. Working in a silo kills momentum.',
      icon: Network,
    },
    {
      name: 'Know What\'s Under The Hood',
      description: 'Product in Product Marketing, is critical. Understanding how products actually work enables real conversations with technical teams and ultimately clearer GTM motions. You don\'t need to build it, but you should understand it well enough to represent it honestly.',
      icon: Wrench,
    },
    {
      name: 'Always Be Iterating',
      description: 'Perfect doesn\'t exist, and waiting for it wastes time. Staying directionally correct and always iterating toward the goal is what works. Plant your flag, set a baseline, measure against it, and get 1% better every day. Progress compounds.',
      icon: RefreshCw,
    },
    {
      name: 'Authenticity Is Key',
      description: 'Keeping it real matters, especially in the age of AI. Whether it\'s team communication, product launches, or content, people can tell when something\'s genuine versus generated. Authenticity builds trust and keeps us human.',
      icon: Heart,
    },
  ]

  return (
    <div className="relative py-24 sm:py-32" id="what-i-care-about">
      <Gradient className="absolute inset-0" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base/7 font-semibold text-black">My Philosophy</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
          Principles That Guide My Work
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-black sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="block mb-2 text-lg font-semibold text-black">
                <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-black" />
                {feature.name}
              </dt>
              <dd className="block">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <QuickSummary />
      <WhatICareAbout />
      <main>
        <CastorDocExample />
        <WallarooExample />
        <Testimonials />
        <ModeExample />
        <LeadIQExample />
        <ContentAndThoughtLeadership />
      </main>
      <Footer />
    </div>
  )
}
