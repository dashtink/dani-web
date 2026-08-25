import { clsx } from 'clsx'

const logoClassName = 'h-7 max-sm:mx-auto invert grayscale opacity-55'
// Already a white/monochrome mark, so it doesn't need the invert treatment the colored logos do.
const whiteLogoClassName = 'h-7 max-sm:mx-auto opacity-55'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex flex-wrap justify-between gap-x-6 gap-y-4 max-sm:mx-auto max-sm:max-w-md max-sm:justify-evenly',
      )}
    >
      <img alt="Knack" src="/logo-cloud/knack.svg" className={logoClassName} />
      <img alt="Mode" src="/logo-cloud/mode.svg" className={logoClassName} />
      <img alt="CastorDoc" src="/logo-cloud/castordoc.svg" className={logoClassName} />
      <img alt="LeadIQ" src="/logo-cloud/leadiq.svg" className={logoClassName} />
      <img alt="Wallaroo" src="/logo-cloud/wallaroo.svg" className={logoClassName} />
      <img alt="Qualtrics" src="/logo-cloud/qualtrics.svg" className={whiteLogoClassName} />
    </div>
  )
}
