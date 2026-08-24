import { clsx } from 'clsx'

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        className,
        'inline-flex items-center gap-2.5 font-mono text-base font-semibold tracking-tight text-text-primary',
      )}
    >
      <span className="size-2.5 rounded-[2px] bg-accent-green" aria-hidden="true" />
      dani_kellogg
    </span>
  )
}
