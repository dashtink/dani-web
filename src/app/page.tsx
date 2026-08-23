import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Testimonials } from '@/components/testimonials'
import { LogoCloud } from '@/components/logo-cloud'
import {
  Compass,
  Target,
  Network,
  Wrench,
  RefreshCw,
  Heart,
} from 'lucide-react'

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-0" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
              <p className="text-base/7 font-semibold text-black">Product Marketing · Seattle</p>
              <h1 className="mt-2 text-5xl font-regular tracking-tight text-pretty text-black sm:text-7xl">
              I Like Turning Complicated Things Into Stories That Land.
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-black sm:max-w-md sm:text-xl/8 lg:max-w-none">
              For 10+ years I’ve done product marketing at technical B2B startups—AI/ML, data infrastructure, sales tech. These days that same instinct shows up in what I write and the side projects I can’t leave alone.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#career-highlights"
                  className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                  See My Work
                </a>
                <a
                  href="https://supercrisp.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold leading-6 text-black hover:text-gray-700"
                >
                  Read My Writing <span aria-hidden="true">→</span>
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

type WorkHighlightData = {
  id: string
  eyebrow: string
  company: string
  description: string
  quote: string
  quoteName: string
  quoteTitle: string
  image: string
  imageAlt: string
}

const workHighlights: WorkHighlightData[] = [
  {
    id: 'qualtrics',
    eyebrow: 'Senior Product Marketing Manager | Enterprise Experience Intelligence',
    company: 'Qualtrics',
    description:
      "At Qualtrics, I owned go-to-market for Voice of Customer, PLG/Maturity, and mid-market segment strategy within Enterprise Experience Intelligence. I built the company's first structured ICP framework for the mid-market segment from 43 customer interviews, and redesigned the cross-functional product-launch process now used as the company-wide template for multi-feature launches. I was also selected to lead field enablement content for the company's largest platform launch of the year, translating in-flight product strategy into training material used by teams across the org.",
    quote:
      '"Dani is one of the most AI-literate people I\'ve worked with... her curiosity, tenacity, and desire to build is infectious, and makes others want to level up alongside her."',
    quoteName: 'Arielle Jendruh',
    quoteTitle: 'Market Intelligence Leader, Qualtrics',
    image: '/screenshots/qualtrics-web.png',
    imageAlt: 'Qualtrics platform',
  },
  {
    id: 'castordoc',
    eyebrow: 'Senior Product Marketing Manager, Lead | Data Governance',
    company: 'CastorDoc',
    description:
      "I joined CastorDoc, a French startup, as part of their US expansion and their first product marketer. I built the PMM function from scratch and set up a GTM rhythm with the product team across a 9-hour time difference—core positioning and messaging, a full rebrand, and the company's first PMM metrics dashboard and win/loss process.",
    quote:
      '"She established rhythms and processes with the product team, defined our GTM and launch process, and owned company positioning as the company pivoted strategy in a competitive market."',
    quoteName: 'Marcela Heywood',
    quoteTitle: 'Head of Marketing',
    image: '/screenshots/castordoc-recent.png',
    imageAlt: 'CastorDoc interface',
  },
  {
    id: 'wallaroo',
    eyebrow: 'Senior Product Marketing | AI & MLOps',
    company: 'Wallaroo AI',
    description:
      "I joined Wallaroo after a marketing motion that hadn't landed, with a mandate to rebuild the function on close to zero budget. We cut $100K in unnecessary spend, refocused every channel around one narrative, and turned that into real qualified pipeline—plus a positioning refresh built to speak to the whole buying committee with a more cohesive brand.",
    quote:
      '"Partnering with Dani was a game-changer. She expertly rebooted our marketing, branding, and positioned Wallaroo.AI as a leader in the AI software market."',
    quoteName: 'Stephen Spellicy',
    quoteTitle: 'COO',
    image: '/screenshots/wallaroo-recent.png',
    imageAlt: 'Wallaroo AI dashboard',
  },
  {
    id: 'mode',
    eyebrow: 'Product Marketing Manager | Data Analytics',
    company: 'Mode Analytics',
    description:
      "At Mode I led the flagship product launch alongside a company rebrand, building the personas and segmentation that shaped messaging and sales strategy for the launches that followed. The sales enablement and competitive positioning work from that stretch carried through to the company's eventual acquisition.",
    quote:
      '"Her strong background in product combined with her project management skills and ability to ramp up incredibly quickly in ambiguous environments made her a fantastic asset."',
    quoteName: 'Katie Paxson Flynn',
    quoteTitle: 'Director of PMM',
    image: '/screenshots/app.png',
    imageAlt: 'Mode Analytics dashboard',
  },
  {
    id: 'leadiq',
    eyebrow: 'Senior Product Marketing Manager | Sales Tech',
    company: 'LeadIQ',
    description:
      'At LeadIQ I rebuilt the PMM function during a company pivot—new positioning and messaging company-wide, a new strategic direction built around buying signals, and a GTM framework for product launches that held up across multiple product lines in a crowded market.',
    quote:
      '"Dani transformed our product marketing at LeadIQ and rebooted the motion from the ground up... significantly improving our market strategy in a crowded space."',
    quoteName: 'Joerg Koehler',
    quoteTitle: 'VP Marketing',
    image: '/screenshots/leadiq-recent.png',
    imageAlt: 'LeadIQ platform',
  },
]

function WorkHighlight({
  eyebrow,
  company,
  description,
  quote,
  quoteName,
  quoteTitle,
  image,
  imageAlt,
  muted,
}: WorkHighlightData & { muted: boolean }) {
  return (
    <div
      className={`overflow-hidden py-24 sm:py-32 ${muted ? 'bg-gradient-to-b from-white to-gray-50' : 'bg-white'}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pt-4 lg:pr-4">
            <div className="lg:max-w-lg">
              <h3 className="text-base/7 font-semibold text-black">{eyebrow}</h3>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
                {company}
              </p>
              <p className="mt-6 text-lg/8 text-black">{description}</p>
              <figure className="mt-16 border-l border-gray-200 pl-8 text-black">
                <blockquote className="text-base/7">
                  <p>{quote}</p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4 text-sm/6">
                  <div>
                    <span className="font-semibold text-black">{quoteName}</span> –{' '}
                    <span className="text-gray-600">{quoteTitle}</span>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <img
            alt={imageAlt}
            src={image}
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:ml-0 object-cover"
          />
        </div>
      </div>
    </div>
  )
}

function WorkHighlights() {
  return (
    <div id="career-highlights">
      <div className="mx-auto max-w-7xl px-6 pt-24 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base/7 font-semibold text-black">Career Highlights</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
            Where I’ve Made An Impact
          </p>
        </div>
      </div>
      {workHighlights.map((highlight, index) => (
        <WorkHighlight key={highlight.id} {...highlight} muted={index % 2 === 1} />
      ))}
    </div>
  )
}

function AboutMe() {
  return (
    <div className="bg-white py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div>
          <p className="text-base/7 font-semibold text-black">The TLDR</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">A Bit About Me</h2>
          <p className="mt-8 text-lg/8 text-black">
          I’ve spent the last 10+ years in product marketing at technical B2B startups—AI/ML, data infrastructure, sales tech, no-code platforms. I’ve built the function from scratch a few times over, at a couple of companies that ended up getting acquired. These days I’m doing that same work at my current company, and using this space for everything else: writing, side projects, and whatever’s currently got my attention. I live in Seattle with my wife and three kids. When I’m not at a keyboard, I’m usually exploring the Pacific Northwest, playing Minecraft with my kids, or tinkering with whatever hobby I’ve picked up this month.
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
      <AboutMe />
      <WhatICareAbout />
      <main>
        <WorkHighlights />
        <Testimonials />
        {/* Writing and Projects sections are hidden until Substack and real project pages are ready */}
      </main>
      <Footer />
    </div>
  )
}
