// "Latest from Substack" placeholder block hidden for now -- restore this array and the grid in Writing to bring it back.
// const substackPlaceholders = [
//   {
//     id: 'placeholder-1',
//     title: 'Post title coming soon',
//     blurb: 'A new post will show up here once it is published.',
//   },
//   {
//     id: 'placeholder-2',
//     title: 'Post title coming soon',
//     blurb: 'A new post will show up here once it is published.',
//   },
//   {
//     id: 'placeholder-3',
//     title: 'Post title coming soon',
//     blurb: 'A new post will show up here once it is published.',
//   },
// ]

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
    title: 'AI: The Age of Synthesis',
    href: 'https://www.aiacceleratorinstitute.com/ai-the-age-of-synthesis/',
    company: 'AI Accelerator Institute',
    label: 'THOUGHT_LEADERSHIP',
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
            whatever else has my attention.{' '}
            <a
              href="https://supercrisp.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-green hover:text-[#7fe89a]"
            >
              Read it here <span aria-hidden="true">→</span>
            </a>
          </p>
        </div>

        <div className="mt-12">
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
