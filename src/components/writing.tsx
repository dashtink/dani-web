const substackPlaceholders = [
  {
    id: 'placeholder-1',
    title: 'Post title coming soon',
    blurb: 'A new post will show up here once it is published.',
  },
  {
    id: 'placeholder-2',
    title: 'Post title coming soon',
    blurb: 'A new post will show up here once it is published.',
  },
  {
    id: 'placeholder-3',
    title: 'Post title coming soon',
    blurb: 'A new post will show up here once it is published.',
  },
]

const pastWriting = [
  {
    id: 1,
    title: 'Track job change signals with AI using our new Salesloft Rhythm integration',
    href: 'https://leadiq.com/blog/track-job-change-signals-with-ai-using-our-new-salesloft-rhythm-integration',
    company: 'LeadIQ',
    label: 'PRODUCT_BLOG',
  },
  {
    id: 2,
    title: 'Introducing CastorDoc AI 2.0',
    href: 'https://www.castordoc.com/blog/introducing-castordoc-ai-2-0',
    company: 'CastorDoc',
    label: 'PRODUCT_BLOG',
  },
  {
    id: 3,
    title: 'Video: Building Technical Product Marketing Teams',
    href: 'https://www.youtube.com/watch?v=Vg4f695fvU8',
    company: 'YouTube',
    label: 'PMA_SUMMIT_SPEAKER',
  },
]

function TagChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded border border-[rgba(78,207,108,0.35)] px-2.5 py-[3px] font-mono text-[11px] font-medium text-accent-green">
      {children}
    </span>
  )
}

export function Writing() {
  return (
    <div className="border-t border-border-soft bg-bg-panel py-20 sm:py-28" id="writing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base/7 font-semibold text-accent-green">{'// writing'}</h2>
          <p className="mt-3 text-4xl font-semibold tracking-tight text-pretty text-text-primary sm:text-5xl">
            Notes on Product Marketing & Whatever Else
          </p>
          <p className="mt-4 text-lg/8 text-text-secondary">
            I write on Substack about product marketing, technical B2B, and
            whatever else has my attention. New posts will show up here as
            they’re published.
          </p>
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h3 className="text-lg font-semibold text-text-primary">
              Latest from Substack
            </h3>
            <a
              href="https://supercrisp.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13.5px] font-semibold text-accent-green hover:text-[#7fe89a]"
            >
              Read on Substack <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="mt-5 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {substackPlaceholders.map((post) => (
              <div
                key={post.id}
                className="flex min-h-[210px] flex-col overflow-hidden rounded-xl border border-border-default bg-bg-base"
              >
                <div className="aspect-video bg-[radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,#4ecf6c,#0f7a45)] [background-size:22px_22px,100%_100%]" />
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <TagChip>COMING_SOON</TagChip>
                    <h4 className="mt-3.5 text-[16.5px] font-semibold text-text-primary">
                      {post.title}
                    </h4>
                    <p className="mt-2.5 text-[13.5px] text-text-tertiary">{post.blurb}</p>
                  </div>
                  <p className="mt-4 text-[13.5px] font-semibold text-text-quote">
                    Read on Substack →
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-lg font-semibold text-text-primary">
            Past Writing & Speaking
          </h3>
          <div className="mt-5 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pastWriting.map((post) => (
              <a
                key={post.id}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[170px] flex-col justify-between rounded-xl border border-border-default bg-bg-base p-6 hover:border-border-strong"
              >
                <div>
                  <TagChip>{post.label}</TagChip>
                  <h4 className="mt-3 text-base font-semibold text-text-primary">
                    {post.title}
                  </h4>
                </div>
                <p className="mt-4 text-[13px] font-semibold text-text-quote">
                  {post.company} →
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
