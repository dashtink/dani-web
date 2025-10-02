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
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Senior product marketing leader for technical B2B SaaS companies. I build marketing functions from scratch and translate complex technical products into market narratives that resonate.',
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
              <h1 className="text-5xl font-regular tracking-tight text-pretty text-gray-900 sm:text-7xl">
                <span className='font-bold'>Hi, I'm Dani.</span> Tech Marketer, Product Storyteller, Serial Hobby Dabbler.
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                I help AI/ML, data infrastructure, and developer tool companies translate their complex products into stories that actually resonate with buyers—without losing what makes them interesting.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="https://cal.com/dani-kellogg/30min"
                  target="_blank"
                  className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                  Let's Chat
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
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          Your Product
        </Heading>
        <p className="mt-6 max-w-3xl text-lg/7 text-gray-600">
          When you hire me, you're not getting a contractor for random projects. You're getting a productized marketing function with known outcomes. I build marketing from zero to scale at technical B2B SaaS companies. I come in early—often as the first marketing hire or first PMM—establish the foundational frameworks for positioning, messaging, and GTM, and get companies ready to scale.
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
    <Container>
      <Subheading>Core Capabilities</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Builder with Zero-to-Scale Experience
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Experience"
          title="Zero-to-Scale Builder"
          description="I've built marketing functions from scratch at multiple companies, including two that were acquired shortly after I joined. I joined Knack as employee #3 and helped scale from 5 to 35 people. I know how to operate when there's no playbook, no budget, and no existing infrastructure."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-center" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Technical"
          title="Constantly Curious & Technically Credible"
          description="I understand complex technical products because I've taken the time to actually learn how they work. I've built apps using Next.js, worked with Docker containers, and understand compliance requirements like PII and HIPAA. I genuinely love getting into the weeds."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-left" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Results"
          title="Hands-On Leader Who Drives Results"
          description="I'm not just a strategist—I'm someone who gets into the weeds and drives actual results. I've doubled pipeline growth, improved sales conversion rates, reduced marketing spend while maintaining impact, and created sales enablement materials that teams actually use."
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="AI-Augmented"
          title="AI-Augmented, Human-Driven"
          description="I use AI tools to work more efficiently and experiment with new approaches, but I never lose sight of the human judgment that makes marketing effective. I'm constantly curious about how things work and genuinely enjoy diving deep into technical details."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Impact"
          title="Measurable Impact & Sustainable Growth"
          description="I track what matters (pipeline, conversion rates, sales cycle length), iterate based on data, and build frameworks that scale without creating unnecessary process. I care about sustainability and building things that last, not just chasing growth at all costs."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Problems I Actually Solve</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          The Stuff That Keeps You Up at Night
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Complexity"
            title="Your product is too complex for most marketers"
            description="I get it. Your product is amazing, but explaining it to buyers feels impossible. I actually understand the technology, so I can translate it without dumbing it down or making your engineering team cringe."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Articulation"
            title="You know it's great, but can't explain why"
            description="You've built something incredible, but when you try to explain it to investors or customers, it falls flat. I help you find the story that makes people go 'oh, I get it now.'"
            graphic={<LogoTimeline />}
            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Sales Enablement"
            title="Your sales team is winging it"
            description="Your sales team is smart, but they're making up the pitch as they go. I create materials they actually want to use and messaging that actually works. No more generic sales decks."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Infrastructure"
            title="You're starting from zero"
            description="You need everything: positioning, messaging, launch plans, sales decks. I've been there. I build the foundational frameworks that actually work, not the ones that look good in presentations."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
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
        {/* <DarkBentoSection /> */}
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
