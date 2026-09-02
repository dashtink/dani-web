'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Link } from './link'
import { Logo } from './logo'

const links = [
  { href: '#about', label: 'about' },
  { href: '#career-highlights', label: 'work' },
  { href: '#what-i-care-about', label: 'principles' },
  { href: '#writing', label: 'writing & speaking' },
  { href: '#testimonials', label: 'testimonials' },
  { href: '#projects', label: 'projects' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden flex-wrap items-center gap-x-[clamp(14px,2vw,26px)] gap-y-2 font-mono text-[12.5px] text-text-tertiary lg:flex">
      {links.map(({ href, label }) => (
        <Link key={href} href={href} className="text-text-tertiary hover:text-text-primary">
          {label}
        </Link>
      ))}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg text-text-primary data-hover:bg-white/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="border-t border-border-soft lg:hidden">
      <div className="flex flex-col gap-6 px-6 py-6 font-mono text-sm text-text-tertiary">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <Link href={href} className="text-text-tertiary hover:text-text-primary">
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  return (
    <Disclosure as="header">
      <div className="flex items-center justify-between gap-4 border-b border-border-soft py-[clamp(24px,3vw,32px)]">
        <div className="flex items-center gap-6">
          <Link href="/" title="Home">
            <Logo />
          </Link>
          {banner && (
            <div className="hidden items-center lg:flex">{banner}</div>
          )}
        </div>
        <DesktopNav />
        <MobileNavButton />
      </div>
      <MobileNav />
    </Disclosure>
  )
}
