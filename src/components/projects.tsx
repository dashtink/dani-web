const thumbGradients = [
  'linear-gradient(135deg,#123420,#0a0f0c)',
  'linear-gradient(135deg,#0f3d24,#0a0f0c)',
  'linear-gradient(135deg,#1a4d2c,#0a0f0c)',
]

const projects = [
  {
    id: 'placeholder-1',
    name: 'Project name TBD',
    description:
      'A short description of what this project is and why I built it will go here.',
    href: 'https://github.com/dashtink',
  },
  {
    id: 'placeholder-2',
    name: 'Project name TBD',
    description:
      'A short description of what this project is and why I built it will go here.',
    href: 'https://github.com/dashtink',
  },
  {
    id: 'placeholder-3',
    name: 'Project name TBD',
    description:
      'A short description of what this project is and why I built it will go here.',
    href: 'https://github.com/dashtink',
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
            an itch or learn something new. This section is a work in
            progress — check back for real ones soon.
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
                    PLACEHOLDER
                  </span>
                  <h3 className="mt-3.5 text-[17px] font-semibold text-text-primary">
                    {project.name}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-text-tertiary">
                    {project.description}
                  </p>
                </div>
                <p className="mt-4 text-[13.5px] font-semibold text-text-quote">
                  View on GitHub →
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
