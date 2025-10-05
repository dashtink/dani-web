'use client'

export function ContentAndThoughtLeadership() {
  const posts = [
    {
      id: 1,
      title: 'Track job change signals with AI using our new Salesloft Rhythm integration',
      href: 'https://leadiq.com/blog/track-job-change-signals-with-ai-using-our-new-salesloft-rhythm-integration',
      description: 'How LeadIQ leverages AI to help sales teams identify and act on job change signals through Salesloft integration.',
      imageUrl: 'https://cdn.prod.website-files.com/60db260c5412535a6e45aa17/67d9b1042d14f330463578a9_655e6cc7ea625d500a1bd556_salesloft%2520partnership.avif',
      date: 'Mar 15, 2024',
      datetime: '2024-03-15',
      company: 'LeadIQ',
    },
    {
      id: 2,
      title: 'Introducing CastorDoc AI 2.0',
      href: 'https://www.castordoc.com/blog/introducing-castordoc-ai-2-0',
      description: 'The next evolution of AI-powered data documentation and cataloging for modern data teams.',
      imageUrl: 'https://cdn.prod.website-files.com/644bb0d49c07b5dc9232d6f0/647f38fb0711004fa8acf0f4_Metadata%20-%20Introducing%20Castor%20AI%202.0.png',
      date: 'Feb 8, 2024',
      datetime: '2024-02-08',
      company: 'CastorDoc',
    },
    {
      id: 3,
      title: 'Strategic Foundations for Product Teams',
      href: 'https://learn.productcolab.com/strategic-foundations/',
      description: 'A comprehensive guide to building strategic foundations that enable product teams to scale effectively.',
      imageUrl: 'https://learn.productcolab.com/content/images/2025/07/119.png',
      date: 'Jan 20, 2024',
      datetime: '2024-01-20',
      company: 'ProductColab',
    },
    {
      id: 4,
      title: 'AI: The Age of Synthesis',
      href: 'https://www.aiacceleratorinstitute.com/ai-the-age-of-synthesis/',
      description: 'Exploring how AI is transforming the way we synthesize information and make decisions in the modern workplace.',
      imageUrl: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDEwfHxBSSUyMGRhdGF8ZW58MHx8fHwxNjg4NTU5MzgxfDA&ixlib=rb-4.0.3&q=80&w=2000',
      date: 'Dec 10, 2023',
      datetime: '2023-12-10',
      company: 'AI Accelerator Institute',
    },
    {
      id: 5,
      title: 'Why Transparent Async Communication',
      href: 'https://learn.productcolab.com/why-transparent-async-communication/',
      description: 'Building effective remote and hybrid teams through transparent asynchronous communication practices.',
      imageUrl: 'https://learn.productcolab.com/content/images/2025/07/22.png',
      date: 'Nov 25, 2023',
      datetime: '2023-11-25',
      company: 'ProductColab',
    },
    {
      id: 6,
      title: 'The Pros and Cons of Product Launch',
      href: 'https://learn.productcolab.com/the-pros-and-cons-of-product-launch/',
      description: 'A strategic analysis of product launch approaches and their trade-offs for different types of products and markets.',
      imageUrl: 'https://learn.productcolab.com/content/images/2025/07/19-5.png',
      date: 'Nov 10, 2023',
      datetime: '2023-11-10',
      company: 'ProductColab',
    },
    {
      id: 7,
      title: 'This is Fine: A Survival Guide',
      href: 'https://learn.productcolab.com/this-is-fine-a-survival-guide-to/',
      description: 'A practical guide to navigating challenging situations in product development and team management.',
      imageUrl: 'https://learn.productcolab.com/content/images/2025/08/this-is-fine.png',
      date: 'Oct 15, 2023',
      datetime: '2023-10-15',
      company: 'ProductColab',
    },
    {
      id: 8,
      title: 'Podcast: Product Marketing in the AI Era',
      href: 'https://open.spotify.com/episode/23fVl5D8bqBhht9cB0zEhr?go=1&sp_cid=1dea54824b7b504fb50e320ebf13bc0b&utm_source=embed_player_v&utm_medium=desktop',
      description: 'Discussing how AI is transforming product marketing and what it means for technical B2B companies.',
      imageUrl: '/screenshots/podcast.png',
      date: 'Sep 20, 2023',
      datetime: '2023-09-20',
      company: 'Spotify',
    },
    {
      id: 9,
      title: 'Video: Building Technical Product Marketing Teams',
      href: 'https://www.youtube.com/watch?v=Vg4f695fvU8',
      description: 'A deep dive into what it takes to build and scale product marketing teams for technical products.',
      imageUrl: 'https://i.ytimg.com/vi/Vg4f695fvU8/maxresdefault.jpg',
      date: 'Aug 10, 2023',
      datetime: '2023-08-10',
      company: 'YouTube',
    },
  ]

  return (
    <div className="bg-white py-24 sm:py-32" id="content-thought-leadership">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base/7 font-semibold text-indigo-600">Content & Thought Leadership</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
          Speaking, writing, and sharing what I've learned
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
            >
              <img alt="" src={post.imageUrl} className="absolute inset-0 -z-10 size-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl inset-ring inset-ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                <time dateTime={post.datetime} className="mr-8">
                  {post.date}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 size-0.5 flex-none fill-white/50">
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    {post.company}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg/6 font-semibold text-white">
                <a href={post.href} target="_blank" rel="noopener noreferrer">
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
