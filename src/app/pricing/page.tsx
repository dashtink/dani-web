import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon,
  MinusIcon,
} from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'What you get when you hire Dani Kellogg. Product marketing functions built from scratch, technical credibility, and AI-augmented workflows for technical B2B SaaS companies.',
}

const tiers = [
  {
    name: 'Fractional PMM' as const,
    slug: 'fractional',
    description: 'Part-time product marketing leadership for growing teams.',
    priceMonthly: 'Custom',
    href: '#contact',
    highlights: [
      { description: '10-20 hours per week' },
      { description: 'Strategic positioning & messaging' },
      { description: 'Sales enablement materials' },
      { description: 'Launch planning & execution' },
      { description: 'Cross-functional collaboration' },
    ],
    features: [
      { section: 'Core Services', name: 'Positioning & Messaging', value: true },
      { section: 'Core Services', name: 'Sales Enablement', value: true },
      { section: 'Core Services', name: 'Product Launches', value: true },
      { section: 'Core Services', name: 'Competitive Analysis', value: true },
      { section: 'Core Services', name: 'Win/Loss Analysis', value: true },
      { section: 'AI Integration', name: 'AI-Augmented Workflows', value: true },
      { section: 'AI Integration', name: 'Content Generation Systems', value: true },
      { section: 'AI Integration', name: 'Automated Research', value: true },
      { section: 'AI Integration', name: 'Performance Analytics', value: true },
      { section: 'Support', name: 'Direct access to Dani', value: true },
      { section: 'Support', name: 'Team training & mentoring', value: true },
      { section: 'Support', name: 'Strategic planning sessions', value: true },
    ],
  },
  {
    name: 'Head of Marketing' as const,
    slug: 'head-of-marketing',
    description: 'Full-time marketing leadership for scaling companies.',
    priceMonthly: 'Full-time',
    href: '#contact',
    highlights: [
      { description: 'Full-time marketing leadership' },
      { description: 'Complete marketing function build' },
      { description: 'Team building & management' },
      { description: 'Integrated campaign strategy' },
      { description: 'Revenue attribution & optimization' },
    ],
    features: [
      { section: 'Leadership', name: 'Marketing Strategy', value: true },
      { section: 'Leadership', name: 'Team Building', value: true },
      { section: 'Leadership', name: 'Budget Management', value: true },
      { section: 'Leadership', name: 'Cross-functional Alignment', value: true },
      { section: 'Leadership', name: 'Executive Reporting', value: true },
      { section: 'Execution', name: 'Campaign Development', value: true },
      { section: 'Execution', name: 'Content Strategy', value: true },
      { section: 'Execution', name: 'Demand Generation', value: true },
      { section: 'Execution', name: 'Brand Development', value: true },
      { section: 'Support', name: 'Board presentations', value: true },
      { section: 'Support', name: 'Investor relations', value: true },
      { section: 'Support', name: 'Strategic partnerships', value: true },
    ],
  },
  {
    name: 'Marketing Consultant' as const,
    slug: 'consultant',
    description: 'Project-based marketing strategy and execution.',
    priceMonthly: 'Project-based',
    href: '#contact',
    highlights: [
      { description: 'Specific project focus' },
      { description: 'Rapid deployment & execution' },
      { description: 'Technical product expertise' },
      { description: 'AI workflow implementation' },
      { description: 'Measurable outcomes' },
    ],
    features: [
      { section: 'Projects', name: 'Positioning Overhaul', value: true },
      { section: 'Projects', name: 'Launch Strategy', value: true },
      { section: 'Projects', name: 'Sales Deck Creation', value: true },
      { section: 'Projects', name: 'Competitive Analysis', value: true },
      { section: 'Projects', name: 'GTM Framework', value: true },
      { section: 'AI Implementation', name: 'Workflow Automation', value: true },
      { section: 'AI Implementation', name: 'Content Systems', value: true },
      { section: 'AI Implementation', name: 'Research Automation', value: true },
      { section: 'AI Implementation', name: 'Performance Optimization', value: true },
      { section: 'Support', name: 'Project management', value: true },
      { section: 'Support', name: 'Stakeholder alignment', value: true },
      { section: 'Support', name: 'Knowledge transfer', value: true },
    ],
  },
]

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">What You Actually Get</Heading>
      <Lead className="mt-6 max-w-3xl">
        I'm not your typical marketing consultant. I've been early at companies that got acquired, which means I learned everything by doing it. When you hire me, you're getting someone who's actually built marketing functions from scratch, not just someone who's read about it.
      </Lead>
    </Container>
  )
}

function PricingCards() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
        <LogoCloud className="mt-24" />
      </Container>
    </div>
  )
}

function PricingCard({ tier }: { tier: (typeof tiers)[number] }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-medium text-gray-950">
              {tier.priceMonthly}
            </div>
            <div className="text-sm/5 text-gray-950/75">
              <p>Engagement</p>
              <p>Model</p>
            </div>
          </div>
          <div className="mt-8">
            <Button href={tier.href}>Let's Talk</Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              What you get:
            </h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function PricingTable({
  selectedTier,
}: {
  selectedTier: (typeof tiers)[number]
}) {
  return (
    <Container className="py-24">
      <table className="w-full text-left">
        <caption className="sr-only">Pricing plan comparison</caption>
        <colgroup>
          <col className="w-3/5 sm:w-2/5" />
          <col
            data-selected={selectedTier === tiers[0] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[1] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[2] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
        </colgroup>
        <thead>
          <tr className="max-sm:hidden">
            <td className="p-0" />
            {tiers.map((tier) => (
              <th
                key={tier.slug}
                scope="col"
                data-selected={selectedTier === tier ? true : undefined}
                className="p-0 data-selected:table-cell max-sm:hidden"
              >
                <Subheading as="div">{tier.name}</Subheading>
              </th>
            ))}
          </tr>
          <tr className="sm:hidden">
            <td className="p-0">
              <div className="relative inline-block">
                <Menu>
                  <MenuButton className="flex items-center justify-between gap-2 font-medium">
                    {selectedTier.name}
                    <ChevronUpDownIcon className="size-4 fill-gray-900" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-(--button-width) rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <Link
                          scroll={false}
                          href={`/pricing?tier=${tier.slug}`}
                          data-selected={
                            tier === selectedTier ? true : undefined
                          }
                          className="group flex items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-200"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-selected:block" />
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronUpDownIcon className="size-4 fill-gray-900" />
                </div>
              </div>
            </td>
            <td colSpan={3} className="p-0 text-right">
              <Button variant="outline" href={selectedTier.href}>
                Get started
              </Button>
            </td>
          </tr>
          <tr className="max-sm:hidden">
            <th className="p-0" scope="row">
              <span className="sr-only">Get started</span>
            </th>
            {tiers.map((tier) => (
              <td
                key={tier.slug}
                data-selected={selectedTier === tier ? true : undefined}
                className="px-0 pt-4 pb-0 data-selected:table-cell max-sm:hidden"
              >
                <Button variant="outline" href={tier.href}>
                  Get started
                </Button>
              </td>
            ))}
          </tr>
        </thead>
        {[...new Set(tiers[0].features.map(({ section }) => section))].map(
          (section) => (
            <tbody key={section} className="group">
              <tr>
                <th
                  scope="colgroup"
                  colSpan={4}
                  className="px-0 pt-10 pb-0 group-first-of-type:pt-5"
                >
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                    {section}
                  </div>
                </th>
              </tr>
              {tiers[0].features
                .filter((feature) => feature.section === section)
                .map(({ name }) => (
                  <tr
                    key={name}
                    className="border-b border-gray-100 last:border-none"
                  >
                    <th
                      scope="row"
                      className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                    >
                      {name}
                    </th>
                    {tiers.map((tier) => {
                      let value = tier.features.find(
                        (feature) =>
                          feature.section === section && feature.name === name,
                      )?.value

                      return (
                        <td
                          key={tier.slug}
                          data-selected={
                            selectedTier === tier ? true : undefined
                          }
                          className="p-4 data-selected:table-cell max-sm:hidden"
                        >
                          {value === true ? (
                            <>
                              <CheckIcon className="size-4 fill-green-600" />
                              <span className="sr-only">
                                Included in {tier.name}
                              </span>
                            </>
                          ) : value === false || value === undefined ? (
                            <>
                              <MinusIcon className="size-4 fill-gray-400" />
                              <span className="sr-only">
                                Not included in {tier.name}
                              </span>
                            </>
                          ) : (
                            <div className="text-sm/6">{value}</div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
            </tbody>
          ),
        )}
      </table>
    </Container>
  )
}

function FeatureItem({
  description,
  disabled = false,
}: {
  description: string
  disabled?: boolean
}) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-disabled:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-3.75 shrink-0 fill-gray-950/25" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

function PlusIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}

function Testimonial() {
  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-72 pb-24 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
          <div className="-mt-96 lg:-mt-52">
            <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src="/testimonials/tina-yards.jpg"
                    className="aspect-3/4 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
            <figure className="mx-auto flex max-w-xl flex-col gap-16 max-lg:text-center">
              <blockquote>
                <p className="relative text-3xl tracking-tight text-white before:absolute before:-translate-x-full before:content-['"'] after:absolute after:content-['"'] lg:text-4xl">
                  Partnering with Dani Kellogg was a game-changer. She expertly rebooted our marketing, branding, and positioned Wallaroo.AI as a leader in the AI software market.
                </p>
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm/6 font-medium text-white">Stephen Spellicy</p>
                <p className="text-sm/6 font-medium">
                  <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
                    COO, Wallaroo.AI
                  </span>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FrequentlyAskedQuestions() {
  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center">
          Frequently asked questions
        </Subheading>
        <Heading as="div" className="mt-2 text-center">
          Your questions answered.
        </Heading>
        <div className="mx-auto mt-16 mb-32 max-w-xl space-y-12">
          <dl>
            <dt className="text-sm font-semibold">
              What makes you different from other product marketers?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              I'm technical enough to hold my own in product and engineering conversations—I've built apps using Next.js, understand backend architecture, and can talk about Docker containers without sounding like I'm reading from a script. I also have proven zero-to-scale experience, having built marketing functions at companies that were acquired shortly after I joined.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              How do you approach AI integration in marketing?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              I believe in being AI-augmented: using tools to handle the repetitive work so humans can focus on strategy, creativity, and judgment. I've built content systems that go from Google Sheets tracking to AI-generated long-form blogs to social distribution—cutting creation time for teams by hours weekly. I use tools like n8n for agentic workflows and implement AI with governance, not blindly.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              What types of companies do you work with?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              I work with Series A through Series C technical B2B SaaS companies (30-500 employees) working on AI/ML infrastructure, data platforms & analytics, developer tools, cloud infrastructure, and security. I also work with seed-stage technical startups building their first marketing function.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              How do you measure success in your engagements?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              I track what matters: pipeline growth, conversion rates, sales cycle length, and time-to-market for launches. At Wallaroo AI, I reduced spend by ~$100K while driving new inbound pipeline. I've doubled pipeline growth, improved sales conversion rates, and created sales enablement materials that teams actually use.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              What's your approach to working with technical teams?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              I do the work to understand how your product actually works, not just what it does. I sit in on product reviews, ask technical questions, and read documentation. This means positioning that reflects your real differentiation, sales materials that engineering teams respect, and marketing that doesn't make technical prospects cringe.
            </dd>
          </dl>
        </div>
      </section>
    </Container>
  )
}

export default async function Pricing({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  let params = await searchParams
  let tier =
    typeof params.tier === 'string'
      ? tiers.find(({ slug }) => slug === params.tier)!
      : tiers[0]

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PricingCards />
      <PricingTable selectedTier={tier} />
      <Testimonial />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  )
}
