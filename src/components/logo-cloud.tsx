import { clsx } from 'clsx'

const logos = [
  { alt: 'Knack', src: '/logo-cloud/knack.svg' },
  { alt: 'Mode', src: '/logo-cloud/mode.svg' },
  { alt: 'CastorDoc', src: '/logo-cloud/castordoc.svg' },
  { alt: 'LeadIQ', src: '/logo-cloud/leadiq.svg' },
  { alt: 'Wallaroo', src: '/logo-cloud/wallaroo.svg' },
  { alt: 'Qualtrics', src: '/logo-cloud/qualtrics.svg' },
]

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'grid grid-cols-3 items-center justify-items-center gap-x-6 gap-y-8 sm:flex sm:flex-wrap sm:justify-between sm:gap-y-4',
      )}
    >
      {logos.map((logo) => (
        <div key={logo.alt} className="flex h-8 w-24 items-center justify-center sm:w-auto">
          <img
            alt={logo.alt}
            src={logo.src}
            className="max-h-8 max-w-full object-contain brightness-0 invert opacity-80"
          />
        </div>
      ))}
    </div>
  )
}
