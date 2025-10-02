import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Dani Kellogg, senior product marketing leader for technical B2B SaaS companies. Builder with zero-to-scale experience, technical credibility, and AI-augmented approach.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Hi, I'm Dani</Heading>
      <Lead className="mt-6 max-w-3xl">
        I'm a product marketing leader who's been lucky enough to work with some incredible technical teams. I help AI/ML, data infrastructure, and developer tool companies translate their complex products into stories that actually resonate with buyers—without losing what makes them interesting.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">What I Care About</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            I want to work on products that actually push things forward, not just incremental SaaS tools that solve problems people don't have. I'm drawn to companies working on infrastructure, AI, and complex developer tools—the stuff that makes the future possible.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            I care about sustainability and building things that last. I've seen too many companies chase growth at all costs and burn out their teams. I'm interested in companies with strong product-market fit that are building for the long term, not just the next funding round.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>Track Record</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Companies Acquired</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={2} end={3} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Years Experience</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={10} end={12} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Marketing Functions Built</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={4} end={6} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">Pipeline Growth</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={100} end={200} />%
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function Person({
  name,
  description,
  img,
}: {
  name: string
  description: string
  img: string
}) {
  return (
    <li className="flex items-center gap-4">
      <img alt="" src={img} className="size-12 rounded-full" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

function Team() {
  return (
    <Container className="mt-32">
      <Subheading>My Story</Subheading>
      <Heading as="h3" className="mt-2">
        How I got here (the scenic route).
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        I've been lucky enough to be early at three companies that got acquired (Knack, Mode Analytics, CastorDoc). I joined Knack as employee #3, which means I learned everything by doing it—from building our first sales deck to figuring out how to talk about a no-code platform when "no-code" wasn't even a category yet.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
            My background took the scenic route. I started with a master's in Library & Information Sciences (basically, I'm trained to organize complex information systems and make them accessible), then fell into product marketing at technical companies. Turns out, understanding how people search for and process information is useful when you're trying to explain AI infrastructure or data analytics to prospects who don't have time for fluff.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            I'm technical enough to hold my own in product and engineering conversations—I've built apps I wish I had for myself using Next.js, understand backend architecture, and can talk about Docker containers without sounding like I'm reading from a script. With tools like Cursor, I'm graduating from vibe coder to real coder, which gives me genuine credibility when talking about technical products.
          </p>
          <div className="mt-6">
            <Button className="w-full sm:w-auto" href="#contact">
              Let's Talk
            </Button>
          </div>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt=""
              src="/company/5.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
      <Subheading as="h3" className="mt-24">
        My Values
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Authentic Communication"
          description="Over corporate polish"
          img="/team/michael-foster.jpg"
        />
        <Person
          name="Constant Curiosity"
          description="Always asking 'how does this work?'"
          img="/team/dries-vincent.jpg"
        />
        <Person
          name="Builder Mindset"
          description="Creating things that don't exist yet"
          img="/team/celeste-vandermark.jpg"
        />
        <Person
          name="Cross-functional Collaboration"
          description="Marketing doesn't happen in a vacuum"
          img="/team/courtney-henry.jpg"
        />
        <Person
          name="Technical Credibility"
          description="Understanding how things actually work"
          img="/team/marcus-eldridge.jpg"
        />
        <Person
          name="AI-Augmented, Human-Driven"
          description="Using tools to accelerate human creativity"
          img="/team/whitney-francis.jpg"
        />
      </ul>
    </Container>
  )
}

function Investors() {
  return (
    <Container className="mt-32">
      <Subheading>Personal Life</Subheading>
      <Heading as="h3" className="mt-2">
        Who I am outside of work.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        I'm based in Seattle with my wife and three kids (6-year-old twins and an 11-month-old daughter). Most of my "free" time is spent wrangling my kids, but when I'm not, I'm a serial hobby dabbler who loves exploring new interests—from writing and reading to baking and running a home server.
      </Lead>
      <Subheading as="h3" className="mt-24">
        What I'm Looking For
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <h4 className="text-lg font-medium">The Company</h4>
          <p className="mt-4 text-sm/6 text-gray-600">
            I want to work at a company that's future-forward enough to understand that we're living in a moment of massive technological shift. A company that gets that systems and context are everything now, and that if you understand that, you can exponentially accelerate.
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            I'm particularly drawn to AI/ML infrastructure companies, data platforms working on hard technical problems, developer tools that actually push things forward, and teams with strong product-market fit building for the long term.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-medium">The Role</h4>
          <p className="mt-4 text-sm/6 text-gray-600">
            I'm exploring senior product marketing roles and head of marketing positions at technical companies. Strong preference for zero-to-one environments building marketing functions from scratch, but also open to companies that need someone to come in and rebuild or scale what exists.
          </p>
          <p className="mt-4 text-sm/6 text-gray-600">
            I'm senior enough to set direction and mentor others, but I don't need a team of five people to get things done. I'm comfortable rolling up my sleeves as an individual contributor or strategizing with the CEO at 10,000 feet.
          </p>
        </div>
      </div>
    </Container>
  )
}

function Testimonial() {
  return (
    <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl sm:aspect-5/4 lg:aspect-3/4">
      <img
        alt=""
        src="/testimonials/veronica-winton.jpg"
        className="absolute inset-0 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-10% to-75% ring-1 ring-gray-950/10 ring-inset lg:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white before:absolute before:-translate-x-full before:content-['"'] after:absolute after:content-['"']">
            Dani Kellogg transformed our product marketing at LeadIQ and rebooted the motion from the ground up. Her work created a unified and actionable narrative across our products, significantly improving our market strategy in a crowded space.
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">Joerg Koehler</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
              VP Marketing, LeadIQ
            </span>
          </p>
        </figcaption>
      </figure>
    </div>
  )
}

function Careers() {
  return (
    <Container className="my-32">
      <Subheading>Let's Talk</Subheading>
      <Heading as="h3" className="mt-2">
        Ready to build something together?
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Currently running ProductColab, helping early-stage companies find their voice and build marketing functions from scratch. I love this work, but I find myself missing something: going deep with a team and immersing myself in a single product and brand.
      </Lead>
      <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
        <div className="lg:max-w-2xl">
          <Subheading as="h3">Get in Touch</Subheading>
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="text-lg font-medium">Schedule a call</h4>
              <p className="mt-2 text-sm/6 text-gray-600">
                Book time on my calendar to discuss your marketing challenges and how I can help.
              </p>
              <Button className="mt-4" href="#">
                Schedule Call
              </Button>
            </div>
            <div>
              <h4 className="text-lg font-medium">Direct Contact</h4>
              <p className="mt-2 text-sm/6 text-gray-600">
                Text or Call: 757-803-7897<br />
                Email: dashkellogg@gmail.com
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium">Connect on LinkedIn</h4>
              <p className="mt-2 text-sm/6 text-gray-600">
                Follow my latest thoughts on product marketing and technical B2B SaaS.
              </p>
              <Button variant="outline" className="mt-4" href="https://linkedin.com/in/dashkellogg">
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
        <Testimonial />
      </div>
    </Container>
  )
}

export default function Company() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Team />
      <Investors />
      <Careers />
      <Footer />
    </main>
  )
}
