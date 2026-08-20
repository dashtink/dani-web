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
    <div className="bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32" id="projects">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base/7 font-semibold text-black">Projects</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
            Small Things I’ve Built
          </p>
          <p className="mt-6 text-lg/8 text-black">
            Side projects and experiments, mostly things I built to scratch
            an itch or learn something new. This section is a work in
            progress — check back for real ones soon.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-950/10 transition hover:shadow-md"
            >
              <div>
                <h3 className="text-lg font-semibold text-black">
                  {project.name}
                </h3>
                <p className="mt-2 text-base/7 text-gray-600">
                  {project.description}
                </p>
              </div>
              <p className="mt-6 text-sm font-semibold text-black">
                View on GitHub <span aria-hidden="true">→</span>
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
