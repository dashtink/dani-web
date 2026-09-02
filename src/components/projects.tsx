const thumbGradients = [
  'linear-gradient(135deg,#123420,#0a0f0c)',
  'linear-gradient(135deg,#0f3d24,#0a0f0c)',
  'linear-gradient(135deg,#1a4d2c,#0a0f0c)',
]

const projects = [
  {
    id: 'contextos',
    name: 'ContextOS',
    description:
      'A persistent-memory system that turns Claude into a chief of staff across sessions — a plain-text vault plus behavior rituals so context survives between conversations instead of getting re-explained every time.',
    href: 'https://github.com/dashtink/contextos',
    tag: 'GITHUB',
    cta: 'View on GitHub',
  },
  {
    id: 'dogear',
    name: 'DogEar',
    description:
      'A self-hosted personal library catalog — scan ISBNs to add books, track which shelf they live on, and manage lending, all running on your own server.',
    href: 'https://github.com/dashtink/dogear',
    tag: 'GITHUB',
    cta: 'View on GitHub',
  },
  {
    id: 'status-food',
    name: 'Status.Food',
    description:
      'A live tracker for FDA and USDA food recalls, organized by risk level and category so you can quickly check whether something in your fridge was recalled.',
    href: 'https://statusdotfood-z7f9.vercel.app/',
    tag: 'LIVE',
    cta: 'View Project',
  },
]

export function Projects() {
  return (
    <div className="bg-bg-base py-20 sm:py-28" id="projects">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base/7 font-semibold text-accent-green">{'// projects'}</h2>
          <p className="mt-3 text-4xl font-semibold tracking-tight text-pretty text-text-primary sm:text-5xl">
            Small Things I’ve Built
          </p>
          <p className="mt-4 text-lg/8 text-text-secondary">
            Side projects and experiments, mostly things I built to scratch
            an itch or learn something new.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[210px] flex-col overflow-hidden rounded-xl border border-border-default bg-bg-panel hover:border-border-strong"
            >
              <div
                className="aspect-video bg-[radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)]"
                style={{
                  backgroundImage: `radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), ${thumbGradients[index % thumbGradients.length]}`,
                  backgroundSize: '22px 22px, 100% 100%',
                }}
              />
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <span className="inline-block rounded border border-[rgba(78,207,108,0.35)] px-2.5 py-[3px] font-mono text-[11px] font-medium text-accent-green">
                    {project.tag}
                  </span>
                  <h3 className="mt-3.5 text-[17px] font-semibold text-text-primary">
                    {project.name}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-text-tertiary">
                    {project.description}
                  </p>
                </div>
                <p className="mt-4 text-[13.5px] font-semibold text-text-quote">
                  {project.cta} →
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
