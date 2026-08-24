import { Container } from './container'

const testimonials = [
  {
    name: 'Arielle Jendruh',
    title: 'Market Intelligence Leader, Qualtrics',
    quote:
      "Dani is one of the most AI-literate people I've worked with -- she can go deeply technical but also knows how to translate that for people who don't live in that world, and she does it without ever making anyone feel behind. On the contrary, her curiosity, tenacity, and desire to build is infectious, and makes others want to level up alongside her. Recently, over a single weekend, Dani built herself an entire personal knowledge system -- a mix of markdown tools, Claude, and integrations -- to have an ever-growing AI brain she could pull from anytime. Dani doesn't just talk about ideas; she goes and builds them. She's also a genuinely collaborative, generous person who I felt lucky to work with.",
  },
  {
    name: 'Xavier de Boisredon',
    title: 'Co-Founder & COO at CastorDoc (now Catalog by Coalesce)',
    quote:
      'Dani is smart, professional & dedicated. Whether presenting to stakeholders, conducting customer interviews, or crafting marketing materials, Dani\'s communication skills are impeccable. Dani is a versatile marketer and adapts really well to any challenge she has to overcome.',
  },
  {
    name: 'Katie Paxson Flynn',
    title: 'Director of Product Marketing, Thoughtspot (formerly Mode)',
    quote:
      'Dani was one of the first people I hired when building out the product marketing team at Mode. Her strong background in product and product education combined with her project management and organizational skills made her a fantastic asset.',
  },
  {
    name: 'Samantha Ferguson',
    title: 'Staff Product Designer @ dbt Labs (formerly Mode)',
    quote:
      'From synthesis of initial customer feedback to the iterative improvements on Alpha and Beta programs, Dani consistently found ways to enhance our internal operations, keep us customer-focused, and maintain forward momentum. Her diverse skills make her a tremendous asset to any organization.',
  },
  {
    name: 'Tristan Mayer',
    title: 'Co-Founder & CEO at CastorDoc (now Catalog by Coalesce)',
    quote: 'Dani has been amazing to work with. She has been a great pedagogue when it comes to explaining the complexity of the data ecosystem to our clients, prospects and partners. She is a very talented and reliable builder.',
  },
  {
    name: 'Nic Galluzzo',
    title: 'Co-Founder @ ProductColab (formerly Knack & Mode)',
    quote:
      'Dani is an exemplary human being. We worked together for over 7 years in 2 different companies, and in both roles they always brought a charismatic and creative perspective to any conversation. Dani is also a builder by heart.',
  },
  {
    name: 'Jessica Schimm',
    title: 'Content Team Lead at Hex (formerly Mode)',
    quote:
      'Dani was a pleasure to work with. She came prepared to every meeting, kept large groups focused on the goals at hand, and always brought a product marketing lens to the table. She understood the data science audience well and was a total team player, who always brought good energy in Mode\'s fast-paced environment.',
  },
  {
    name: 'Brooks Chambers',
    title: 'Brand leader and Creative Director (formerly Mode)',
    quote:
      'Dani is an extremely talented marketer who can handle anything you throw at them. They\'re thoughtful in their approach and do a great job of bringing even the most granular product details to bear on the broader story you\'re trying to tell in market. I\'d jump at the chance to work with them again!',
  },
  {
    name: 'Tim Hinds',
    title: 'Tech Product Marketing Leader',
    quote:
      'Dani\'s an incredibly resourceful and effective product marketer of technical products. Having worked at startups for so long, Dani can actually execute on everything from strategy and research to content and design. Truly a fullstack product marketer.',
  },
]

export function Testimonials() {
  return (
    <div
      className="relative overflow-hidden border-t border-border-soft bg-[radial-gradient(rgba(78,207,108,0.14)_1px,transparent_1px)] py-20 [background-size:22px_22px]"
      id="testimonials"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base/7 font-semibold text-accent-green">
            {'// testimonials'}
          </h2>
          <p className="mt-3 text-4xl font-semibold tracking-tight text-pretty text-text-primary sm:text-5xl">
            Kind Words From People I’ve Worked With
          </p>
        </div>
      </Container>
      <div
        className={[
          'mt-10 flex gap-5 overflow-x-auto px-(--scroll-padding) pt-1 pb-4',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory scroll-smooth',
          '[--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]',
        ].join(' ')}
      >
        {testimonials.map(({ name, title, quote }) => (
          <div
            key={name}
            className="flex min-h-[270px] w-80 shrink-0 snap-start flex-col justify-between rounded-xl border border-border-default bg-bg-panel p-7"
          >
            <p className="text-base/[1.55] text-text-quote">&quot;{quote}&quot;</p>
            <div className="mt-5 border-t border-border-default pt-4.5">
              <p className="text-[13.5px] font-bold text-text-primary">{name}</p>
              <p className="mt-0.5 text-[12.5px] text-text-tertiary">{title}</p>
            </div>
          </div>
        ))}
        <div className="w-2 shrink-0" aria-hidden="true" />
      </div>
    </div>
  )
}
