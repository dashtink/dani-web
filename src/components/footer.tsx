import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import { Button } from './button'
import { Container } from './container'
import { Gradient } from './gradient'
import { Link } from './link'
import { Logo } from './logo'
import { Subheading } from './text'

function CallToAction() {
  return (
    <div className="relative pt-20 pb-16 text-center sm:py-24">
      <hgroup>
        <Subheading>Let's Talk</Subheading>
        <p className="mt-6 text-3xl font-medium tracking-tight text-black sm:text-5xl">
          Let's connect
          <br />
          and start a conversation.
        </p>
      </hgroup>
      <p className="mx-auto mt-6 max-w-lg text-sm/6 text-black">
        I'm exploring senior product marketing and Head of Marketing roles at B2B companies where the product actually matters. Whether you're hiring, want to connect on LinkedIn, or just want to chat about product marketing—I'd love to hear from you.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button className="w-full sm:w-auto" href="https://cal.com/dani-kellogg/30min" target="_blank">
          Let's Chat
        </Button>
        <a
          href="https://linkedin.com/in/dashkellogg"
          target="_blank"
          className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-gray-700 transition-colors"
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  )
}

function SitemapHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm/6 font-medium text-black/50">{children}</h3>
}

function SitemapLinks({ children }: { children: React.ReactNode }) {
  return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <li>
      <Link
        {...props}
        className="font-medium text-black data-hover:text-black/75"
      />
    </li>
  )
}

function Sitemap() {
  return (
    <>
      <div>
        <SitemapHeading>Explore</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="#what-i-bring">What I Bring</SitemapLink>
          <SitemapLink href="#selected-work">Selected Work</SitemapLink>
          <SitemapLink href="#what-i-care-about">What I Care About</SitemapLink>
          <SitemapLink href="#content-thought-leadership">Content</SitemapLink>
          <SitemapLink href="#testimonials">References</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Contact</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="mailto:dashkellogg@gmail.com">Email</SitemapLink>
          <SitemapLink href="tel:757-803-7897">Phone</SitemapLink>
          <SitemapLink href="https://linkedin.com/in/dashkellogg">LinkedIn</SitemapLink>
          <SitemapLink href="https://cal.com/dani-kellogg/30min" target="_blank">Schedule a Call</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>Resources</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="https://github.com/dashtink" target="_blank">GitHub</SitemapLink>
          <SitemapLink href="https://docs.google.com/document/d/1vuED0TOKB_NvF8h-PyLJ0DAY0JFSa0_P0oM_Pmgg-q0/edit?usp=sharing" target="_blank">Resume</SitemapLink>
        </SitemapLinks>
      </div>
    </>
  )
}


function SocialIconLinkedIn(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  )
}

function SocialIconGitHub(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://github.com/dashtink"
        target="_blank"
        aria-label="View Dani's GitHub profile"
        className="text-black data-hover:text-black/75"
      >
        <SocialIconGitHub className="size-4" />
      </Link>
      <Link
        href="https://linkedin.com/in/dashkellogg"
        target="_blank"
        aria-label="Connect with Dani on LinkedIn"
        className="text-black data-hover:text-black/75"
      >
        <SocialIconLinkedIn className="size-4" />
      </Link>
    </>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-black">
      &copy; {new Date().getFullYear()} Dani Kellogg. All rights reserved.
    </div>
  )
}

export function Footer() {
  return (
    <footer>
      <Gradient className="relative">
        <div className="absolute inset-2 rounded-4xl bg-white/80" />
        <Container>
          <CallToAction />
          <PlusGrid className="pb-16">
            <PlusGridRow>
              <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
                <div className="col-span-2 flex">
                  <PlusGridItem className="pt-6 lg:pb-6">
                    <Logo className="h-9" />
                    <p className="mt-4 max-w-sm text-sm/6 text-black">
                      I'm based in Seattle with my wife and three kids. I love learning how things work, whether that's Agentic AI, creative writing or sourdough fermentation.
                    </p>
                  </PlusGridItem>
                </div>
                <div className="col-span-2 flex justify-end lg:col-span-4 lg:pt-6">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-3">
                    <Sitemap />
                  </div>
                </div>
              </div>
            </PlusGridRow>
            <PlusGridRow className="flex justify-between">
              <div>
                <PlusGridItem className="py-3">
                  <Copyright />
                </PlusGridItem>
              </div>
              <div className="flex">
                <PlusGridItem className="flex items-center gap-8 py-3">
                  <SocialLinks />
                </PlusGridItem>
              </div>
            </PlusGridRow>
          </PlusGrid>
        </Container>
      </Gradient>
    </footer>
  )
}
