'use client'

import * as Headless from '@headlessui/react'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx'
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import useMeasure, { type RectReadOnly } from 'react-use-measure'
import { Container } from './container'
import { Link } from './link'
import { Heading, Subheading } from './text'

const testimonials = [
  {
    img: '/testimonials/tina-yards.jpg',
    name: 'Stephen Spellicy',
    title: 'COO, Wallaroo.AI',
    quote:
      'Partnering with Dani Kellogg was a game-changer. She expertly rebooted our marketing, branding, and positioned Wallaroo.AI as a leader in the AI software market. Her strategic insight and execution made a remarkable impact on our growth and market presence.',
  },
  {
    img: '/testimonials/conor-neville.jpg',
    name: 'Joerg Koehler',
    title: 'VP Marketing, LeadIQ',
    quote:
      'Dani Kellogg transformed our product marketing at LeadIQ and rebooted the motion from the ground up. As our fractional Head of PMM, she not only revamped our GTM strategy and positioning but also rebuilt crucial bridges across teams.',
  },
  {
    img: '/testimonials/amy-chase.jpg',
    name: 'Marcela Heywood',
    title: 'Head of Marketing, CastorDoc',
    quote:
      'Dani was a stellar addition to my team at CastorDoc. She was our first product marketer and settled into a very challenging role quickly. She established rhythms and processes with the product team across a 9hr time difference.',
  },
  {
    img: '/testimonials/veronica-winton.jpg',
    name: 'Katie Paxson Flynn',
    title: 'Director of Product Marketing, Thoughtspot',
    quote:
      'Dani was one of the first people I hired when building out the product marketing team at Mode. Her strong background in product and product education combined with her project management and organizational skills made her a fantastic asset.',
  },
  {
    img: '/testimonials/dillon-lenora.jpg',
    name: 'Tristan Mayer',
    title: 'Co-Founder & CEO at CastorDoc',
    quote: 'Dani has been amazing to work with. She has been a great pedagogue when it comes to explaining the complexity of the data ecosystem to our clients, prospects and partners. She is a very talented and reliable builder.',
  },
  {
    img: '/testimonials/harriet-arron.jpg',
    name: 'Nic Galluzzo',
    title: 'Co-Founder @ ProductColab',
    quote:
      'Dani is an exemplary human being. We worked together for over 7 years in 2 different companies, and in both roles they always brought a charismatic and creative perspective to any conversation. Dani is also a builder by heart.',
  },
]

function TestimonialCard({
  name,
  title,
  img,
  children,
  bounds,
  scrollX,
  ...props
}: {
  img: string
  name: string
  title: string
  children: React.ReactNode
  bounds: RectReadOnly
  scrollX: MotionValue<number>
} & HTMLMotionProps<'div'>) {
  let ref = useRef<HTMLDivElement | null>(null)

  let computeOpacity = useCallback(() => {
    let element = ref.current
    if (!element || bounds.width === 0) return 1

    let rect = element.getBoundingClientRect()

    if (rect.left < bounds.left) {
      let diff = bounds.left - rect.left
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else if (rect.right > bounds.right) {
      let diff = rect.right - bounds.right
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else {
      return 1
    }
  }, [ref, bounds.width, bounds.left, bounds.right])

  let opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  })

  useLayoutEffect(() => {
    opacity.set(computeOpacity())
  }, [computeOpacity, opacity])

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity())
  })

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      {...props}
      className="relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96"
    >
      <div className="absolute inset-x-0 top-0 aspect-square w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-[calc(7/16*100%)] ring-1 ring-gray-950/10 ring-inset sm:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white">
            <span aria-hidden="true" className="absolute -translate-x-full">
              “
            </span>
            {children}
            <span aria-hidden="true" className="absolute">
              ”
            </span>
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">{name}</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
              {title}
            </span>
          </p>
        </figcaption>
      </figure>
    </motion.div>
  )
}

function CallToAction() {
  return (
    <div>
        <p className="max-w-sm text-sm/6 text-gray-600">
          Ready to work together? Let's talk about how I can help your technical company find its voice and actually connect with the right people.
        </p>
      <div className="mt-2">
        <Link
          href="https://cal.com/dani-kellogg/30min"
          target="_blank"
          className="inline-flex items-center gap-2 text-sm/6 font-medium text-pink-600"
        >
          Let's Chat
          <ArrowLongRightIcon className="size-5" />
        </Link>
      </div>
    </div>
  )
}

export function Testimonials() {
  let scrollRef = useRef<HTMLDivElement | null>(null)
  let { scrollX } = useScroll({ container: scrollRef })
  let [setReferenceWindowRef, bounds] = useMeasure()
  let [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollX, 'change', (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current!.children[0].clientWidth))
  })

  function scrollTo(index: number) {
    let gap = 32
    let width = (scrollRef.current!.children[0] as HTMLElement).offsetWidth
    scrollRef.current!.scrollTo({ left: (width + gap) * index })
  }

  return (
    <div className="overflow-hidden py-32">
      <Container>
        <div ref={setReferenceWindowRef}>
        <Subheading>Testimonials</Subheading>
        <Heading as="h3" className="mt-2">
          What clients say about working with me.
        </Heading>
        </div>
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          'mt-16 flex gap-8 px-(--scroll-padding)',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          '[--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]',
        ])}
      >
        {testimonials.map(({ img, name, title, quote }, testimonialIndex) => (
          <TestimonialCard
            key={testimonialIndex}
            name={name}
            title={title}
            img={img}
            bounds={bounds}
            scrollX={scrollX}
            onClick={() => scrollTo(testimonialIndex)}
          >
            {quote}
          </TestimonialCard>
        ))}
        <div className="w-2xl shrink-0 sm:w-216" />
      </div>
      <Container className="mt-16">
        <div className="flex justify-between">
          <CallToAction />
          <div className="hidden sm:flex sm:gap-2">
            {testimonials.map(({ name }, testimonialIndex) => (
              <Headless.Button
                key={testimonialIndex}
                onClick={() => scrollTo(testimonialIndex)}
                data-active={
                  activeIndex === testimonialIndex ? true : undefined
                }
                aria-label={`Scroll to testimonial from ${name}`}
                className={clsx(
                  'size-2.5 rounded-full border border-transparent bg-gray-300 transition',
                  'data-active:bg-gray-400 data-hover:bg-gray-400',
                  'forced-colors:data-active:bg-[Highlight] forced-colors:data-focus:outline-offset-4',
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
