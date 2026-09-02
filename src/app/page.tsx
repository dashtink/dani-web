import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Testimonials } from '@/components/testimonials'
import { LogoCloud } from '@/components/logo-cloud'
import { Writing } from '@/components/writing'
import { Projects } from '@/components/projects'
import { Button } from '@/components/button'

// Stat bar hidden for now -- restore this array and the grid below in Hero to bring it back.
// const stats = [
//   { value: '10+', label: 'years in PMM' },
//   { value: '4', label: 'startups built 0→1' },
//   { value: '2', label: 'acquisitions' },
//   { value: 'AI/ML', label: '+ data infra focus' },
// ]

function Hero() {
  return (
    <div className="relative bg-[radial-gradient(rgba(78,207,108,0.16)_1px,transparent_1px)] [background-size:22px_22px]">
      <Container className="relative">
        <Navbar />
        <div className="py-[clamp(56px,8vw,96px)] lg:flex lg:items-start lg:gap-11">
          <div className="max-w-xl lg:flex-1">
            <div className="inline-flex items-center gap-2 rounded border border-[rgba(78,207,108,0.4)] bg-[rgba(78,207,108,0.08)] px-3 py-1.5">
              <span className="size-1.5 rounded-full bg-accent-green" aria-hidden="true" />
              <span className="font-mono text-[12.5px] text-[#8fe6a2]">
                product_marketing / seattle
              </span>
            </div>
            <h1 className="mt-5 text-5xl font-bold tracking-tight text-pretty text-text-primary sm:text-7xl">
              I Like Turning Complicated Things Into Stories That Land.
            </h1>
            <p className="mt-6 max-w-lg text-lg/[1.6] text-text-secondary">
              For 10+ years I’ve done product marketing at technical B2B startups—AI/ML, data infrastructure, sales tech. These days that same instinct shows up in what I write and the side projects I can’t leave alone.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#career-highlights">See My Work</Button>
              <a
                href="#writing"
                className="rounded-md border border-border-strong px-[22px] py-3 text-[15px] font-semibold text-text-primary hover:bg-white/5"
              >
                Read My Writing <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mx-auto mt-10 w-full max-w-md overflow-hidden rounded-xl border border-border-strong lg:mx-0 lg:mt-0 lg:w-[440px] lg:max-w-none lg:flex-none xl:w-[520px]">
            <img
              alt=""
              src="/dani-3.jpg"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
        </div>

        {/* Stat bar hidden for now -- see commented-out `stats` array above */}
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
      "At Qualtrics, I owned product marketing for Voice of Customer, and led segment strategy for low-maturity and mid-market customers within their Customer Experience product suite. I built a structured ICP framework for the mid-market segment, informed by customer and market interviews, win-loss analysis, and feedback loops across sales and field teams. I led competitive intelligence for mid-market and built scalable systems and templates that optimized the cross-functional product-launch process for multi-feature launches. I was the lead PMM on the company's largest Customer Experience launch of the year, coordinating with Product and downstream GTM teams and translating in-flight product strategy into training material used across the org.",
    quote:
      '"She is never afraid to ask the hard question, challenge conventional thinking, or dig several layers deeper to understand the product, customer, or problem."',
    quoteName: 'Nicole Caven',
    quoteTitle: 'Senior Product Marketing & Go-to-Market Leader, Qualtrics',
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
}: WorkHighlightData) {
  return (
    <div className="py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-11 px-6 lg:grid-cols-2 lg:items-start lg:px-8">
        <div>
          <h3 className="font-mono text-[13px] font-medium text-accent-green">{eyebrow}</h3>
          <p className="mt-2.5 text-3xl font-semibold tracking-tight text-pretty text-text-primary sm:text-4xl">
            {company}
          </p>
          <p className="mt-4 text-base/[1.65] text-text-secondary">{description}</p>
          <figure className="mt-7 border-l-2 border-accent-green pl-5">
            <blockquote className="text-[15px]/[1.6] text-text-quote">{quote}</blockquote>
            <figcaption className="mt-3.5 text-[13.5px]">
              <span className="font-bold text-text-primary">{quoteName}</span>{' '}
              – <span className="text-text-tertiary">{quoteTitle}</span>
            </figcaption>
          </figure>
        </div>
        <img
          alt={imageAlt}
          src={image}
          width={2432}
          height={1442}
          className="aspect-[16/10] w-full rounded-[10px] border border-border-default object-cover"
        />
      </div>
    </div>
  )
}

function WorkHighlights() {
  return (
    <div id="career-highlights" className="border-t border-border-soft bg-bg-panel">
      <div className="mx-auto max-w-7xl px-6 pt-16 sm:pt-20 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base/7 font-semibold text-accent-green">{'// work'}</h2>
          <p className="mt-3 text-4xl font-semibold tracking-tight text-pretty text-text-primary sm:text-5xl">
            Where I’ve Made An Impact
          </p>
        </div>
      </div>
      {workHighlights.map((highlight) => (
        <WorkHighlight key={highlight.id} {...highlight} />
      ))}
    </div>
  )
}

function AboutMe() {
  return (
    <div className="border-t border-border-soft bg-bg-panel py-20 sm:py-28" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div>
          <p className="text-base/7 font-semibold text-accent-green">{'// about'}</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-pretty text-text-primary sm:text-5xl">
            A Bit About Me
          </h2>
          <p className="mt-5 max-w-3xl text-[17px]/[1.7] text-text-secondary">
            I’ve spent the last 10+ years in product marketing at technical B2B startups—AI/ML, data infrastructure, sales tech, no-code platforms. I’ve built the function from scratch a few times over, at a couple of companies that ended up getting acquired. These days I’m doing that same work at my current company, and using this space for everything else: writing, side projects, and whatever’s currently got my attention. I live in Seattle with my wife and three kids. When I’m not at a keyboard, I’m usually exploring the Pacific Northwest, playing Minecraft with my kids, or tinkering with whatever hobby I’ve picked up this month.
          </p>
        </div>
        <div className="mt-12 border-t border-border-soft pt-9">
          <LogoCloud />
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    name: 'Create Order, Stay Flexible',
    description: 'Ambiguity is part of the job. The key is finding a path forward and not being afraid to adjust when things change. Staying situationally aware and adapting as you go is what actually moves things forward.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22">
        <circle cx="12" cy="12" r="9" fill="none" stroke="#4ecf6c" strokeWidth="1.6" />
        <path d="M15.5 8.5L13 13L8.5 15.5L11 11L15.5 8.5Z" fill="none" stroke="#4ecf6c" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Less Ego, More Impact',
    description: 'My focus is on what will make the most impact right now. Is it 10,000-foot strategy or finishing a slide deck for a critical sales call? Good work means going wherever you need to go to move the needle, regardless of what the task looks like.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22">
        <circle cx="12" cy="12" r="9" fill="none" stroke="#4ecf6c" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="5" fill="none" stroke="#4ecf6c" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="1.6" fill="#4ecf6c" />
      </svg>
    ),
  },
  {
    name: 'Cross-Collaboration, Not Silos',
    description: 'The best outcomes happen when product, engineering, sales, and marketing work together. Being the translator and connector between teams isn\'t extra work—it\'s how you get anything meaningful done. Working in a silo kills momentum.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22">
        <circle cx="6" cy="7" r="2" fill="none" stroke="#4ecf6c" strokeWidth="1.5" />
        <circle cx="18" cy="7" r="2" fill="none" stroke="#4ecf6c" strokeWidth="1.5" />
        <circle cx="12" cy="18" r="2" fill="none" stroke="#4ecf6c" strokeWidth="1.5" />
        <path d="M7.7 8.4L11 16.3M16.3 8.4L13 16.3M8 7H16" stroke="#4ecf6c" strokeWidth="1.3" fill="none" />
      </svg>
    ),
  },
  {
    name: 'Know What\'s Under The Hood',
    description: 'Product in Product Marketing, is critical. Understanding how products actually work enables real conversations with technical teams and ultimately clearer GTM motions. You don\'t need to build it, but you should understand it well enough to represent it honestly.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22">
        <path fill="#4ecf6c" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.5-3.5a6 6 0 01-7.8 7.8l-6.7 6.7a2.1 2.1 0 01-3-3l6.7-6.7a6 6 0 017.8-7.8l-3.5 3.5z" />
      </svg>
    ),
  },
  {
    name: 'Always Be Iterating',
    description: 'Perfect doesn\'t exist, and waiting for it wastes time. Staying directionally correct and always iterating toward the goal is what works. Plant your flag, set a baseline, measure against it, and get 1% better every day. Progress compounds.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22">
        <path d="M4 12a8 8 0 0114-5.3M20 4v5h-5" fill="none" stroke="#4ecf6c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 12a8 8 0 01-14 5.3M4 20v-5h5" fill="none" stroke="#4ecf6c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Authenticity Is Key',
    description: 'Keeping it real matters, especially in the age of AI. Whether it\'s team communication, product launches, or content, people can tell when something\'s genuine versus generated. Authenticity builds trust and keeps us human.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22">
        <path fill="#4ecf6c" d="M12 20.5s-6.2-4-8.6-7.6C1.8 10.2 2.8 6.9 5.6 6c1.9-.6 3.5.3 4.9 1.8 1.3-1.5 3-2.4 4.9-1.8 2.8.9 3.8 4.2 2.2 6.9C18.2 16.5 12 20.5 12 20.5z" />
      </svg>
    ),
  },
]

function WhatICareAbout() {
  return (
    <div className="bg-bg-base py-20 sm:py-28" id="what-i-care-about">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base/7 font-semibold text-accent-green">{'// principles'}</h2>
          <p className="mt-3 text-4xl font-semibold tracking-tight text-pretty text-text-primary sm:text-5xl">
            Principles That Guide My Work
          </p>
        </div>
        <div className="mt-9 grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-border-soft bg-border-soft sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="bg-bg-panel p-7">
              {feature.icon}
              <h3 className="mt-4 text-[17px] font-semibold text-text-primary">
                {feature.name}
              </h3>
              <p className="mt-2.5 text-[14.5px]/[1.6] text-text-tertiary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden bg-bg-base">
      <Hero />
      <AboutMe />
      <WhatICareAbout />
      <main>
        <WorkHighlights />
        <Testimonials />
        <Writing />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
