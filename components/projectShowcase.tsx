import React from 'react'

export type Project = {
  title: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  link: string
}

export default function ProjectShowcase({ project }: { project: Project }) {
  return (
    <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full md:w-56 h-40 object-cover rounded-md border"
        />

        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-2">{project.title}</h1>
          <p className="text-muted-foreground mb-3">{project.description}</p>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{project.longDescription}</p>

          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700"
            >
              Live Preview
            </a>
            <a
              href={project.image}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 border rounded hover:bg-gray-50"
            >
              Open Image
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
