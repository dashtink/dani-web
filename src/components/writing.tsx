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
    imageUrl:
      'https://cdn.prod.website-files.com/60db260c5412535a6e45aa17/67d9b1042d14f330463578a9_655e6cc7ea625d500a1bd556_salesloft%2520partnership.avif',
    company: 'LeadIQ',
    label: 'Product Blog',
  },
  {
    id: 2,
    title: 'Introducing CastorDoc AI 2.0',
    href: 'https://www.castordoc.com/blog/introducing-castordoc-ai-2-0',
    imageUrl:
      'https://cdn.prod.website-files.com/644bb0d49c07b5dc9232d6f0/647f38fb0711004fa8acf0f4_Metadata%20-%20Introducing%20Castor%20AI%202.0.png',
    company: 'CastorDoc',
    label: 'Product Blog',
  },
  {
    id: 3,
    title: 'Video: Building Technical Product Marketing Teams',
    href: 'https://www.youtube.com/watch?v=Vg4f695fvU8',
    imageUrl: 'https://i.ytimg.com/vi/Vg4f695fvU8/maxresdefault.jpg',
    company: 'YouTube',
    label: 'PMA Summit Speaker',
  },
]

export function Writing() {
  return (
    <div className="bg-white py-24 sm:py-32" id="writing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base/7 font-semibold text-black">Writing</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
            Notes on Product Marketing & Whatever Else
          </p>
          <p className="mt-6 text-lg/8 text-black">
            I write on Substack about product marketing, technical B2B, and
            whatever else has my attention. New posts will show up here as
            they’re published.
          </p>
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h3 className="text-lg font-semibold text-black">
              Latest from Substack
            </h3>
            <a
              href="https://supercrisp.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-black hover:text-gray-700"
            >
              Read on Substack <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {substackPlaceholders.map((post) => (
              <div
                key={post.id}
                className="flex flex-col justify-center rounded-2xl border-2 border-dashed border-gray-200 px-8 py-10 text-center"
              >
                <p className="text-sm/6 font-semibold text-gray-400">
                  Coming soon
                </p>
                <p className="mt-2 text-base font-medium text-gray-400">
                  {post.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-lg font-semibold text-black">
            Past Writing & Speaking
          </h3>
          <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pastWriting.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex aspect-4/3 flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8"
              >
                <img
                  alt=""
                  src={post.imageUrl}
                  className="absolute inset-0 -z-10 size-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl inset-ring inset-ring-gray-900/10" />

                <p className="mb-2 text-sm/6 font-semibold text-gray-300">
                  {post.label}
                </p>
                <h3 className="text-lg/6 font-semibold text-white">
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
