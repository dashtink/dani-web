import { Button } from './button'
import { Container } from './container'
import { Link } from './link'
import { Logo } from './logo'

function CallToAction() {
  return (
    <div className="pt-20 pb-14 text-center sm:pt-24">
      <h2 className="text-4xl font-semibold tracking-tight text-pretty text-text-primary sm:text-5xl">
        Connect With Me
      </h2>
      <p className="mx-auto mt-5 max-w-md text-lg/8 text-text-secondary">
        Always happy to talk product marketing, trade notes on a side project, or just catch up.
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-5 sm:flex-row">
        <Button href="https://cal.com/dani-kellogg/30min" target="_blank">
          Let’s Chat
        </Button>
        <a
          href="https://linkedin.com/in/dashkellogg"
          target="_blank"
          className="text-[15px] font-semibold text-text-primary hover:text-accent-green"
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  )
}

function SitemapHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-mono text-[11.5px] font-medium tracking-[0.04em] text-text-quaternary uppercase">
      {children}
    </h3>
  )
}

function SitemapLinks({ children }: { children: React.ReactNode }) {
  return <div className="mt-4 flex flex-col gap-[11px]">{children}</div>
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      {...props}
      className="text-[13.5px] font-semibold text-text-quote hover:text-accent-green"
    />
  )
}

function Sitemap() {
  return (
    <>
      <div>
        <SitemapHeading>Explore</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="#about">About</SitemapLink>
          <SitemapLink href="#career-highlights">Career Highlights</SitemapLink>
          <SitemapLink href="#what-i-care-about">What I Care About</SitemapLink>
          <SitemapLink href="#writing">Writing</SitemapLink>
          <SitemapLink href="#testimonials">What People Say</SitemapLink>
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
        <SitemapHeading>Elsewhere</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="https://github.com/dashtink" target="_blank">GitHub</SitemapLink>
          <SitemapLink href="https://supercrisp.substack.com/" target="_blank">Substack</SitemapLink>
          <SitemapLink href="https://drive.google.com/drive/folders/1Mam7Y41ectGjrYIw-x3pCxK2nwlJB2NV?usp=sharing" target="_blank">Resume</SitemapLink>
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

function SocialIconSubstack(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M1.5 2h13v2h-13V2zm0 3.2h13V7H8.4L1.5 11V5.2zm0 7.4l6.9-4H14.5v1.4H8.4l-6.9 4v-1.4z" />
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
        className="text-text-quote hover:text-accent-green"
      >
        <SocialIconGitHub className="size-[17px]" />
      </Link>
      <Link
        href="https://linkedin.com/in/dashkellogg"
        target="_blank"
        aria-label="Connect with Dani on LinkedIn"
        className="text-text-quote hover:text-accent-green"
      >
        <SocialIconLinkedIn className="size-[17px]" />
      </Link>
      <Link
        href="https://supercrisp.substack.com/"
        target="_blank"
        aria-label="Read Dani's Substack"
        className="text-text-quote hover:text-accent-green"
      >
        <SocialIconSubstack className="size-[17px]" />
      </Link>
    </>
  )
}

function Copyright() {
  return (
    <p className="font-mono text-[12.5px] text-text-quaternary">
      &copy; {new Date().getFullYear()} Dani Kellogg. All rights reserved.
    </p>
  )
}

export function Footer() {
  return (
    <footer className="relative border-t border-border-soft bg-[radial-gradient(rgba(78,207,108,0.14)_1px,transparent_1px)] [background-size:22px_22px]">
      <Container>
        <CallToAction />
        <div className="grid grid-cols-1 gap-9 border-t border-border-soft py-11 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3.5 text-[13.5px] leading-relaxed text-text-tertiary">
              I’m based in Seattle with my wife and three kids. I’m a tinkerer at heart, whether that’s building AI agents, creative writing or sourdough fermentation.
            </p>
          </div>
          <Sitemap />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border-soft py-6">
          <Copyright />
          <div className="flex gap-5">
            <SocialLinks />
          </div>
        </div>
      </Container>
    </footer>
  )
}
