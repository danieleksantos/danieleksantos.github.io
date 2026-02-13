import {
  ExternalLink,
  Github,
  Layers,
  LayoutGrid,
  Code2,
  Globe,
} from 'lucide-react'
import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
  index: number
}

const CATEGORY_CONFIG: Record<
  string,
  { icon: React.ReactNode; styles: string }
> = {
  fullstack: {
    icon: <Layers size={14} aria-hidden="true" />,
    styles:
      'bg-purple-100/80 text-purple-700 border-purple-200 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-500/30',
  },
  frontend: {
    icon: <LayoutGrid size={14} aria-hidden="true" />,
    styles:
      'bg-blue-100/80 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-500/30',
  },
  backend: {
    icon: <Code2 size={14} aria-hidden="true" />,
    styles:
      'bg-emerald-100/80 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-500/30',
  },
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isEven = index % 2 === 0
  const config = CATEGORY_CONFIG[project.category.toLowerCase()] || {
    icon: <Globe size={14} aria-hidden="true" />,
    styles:
      'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-950/60 dark:text-gray-300 dark:border-gray-500/30',
  }

  return (
    <article
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
      aria-labelledby={`project-title-${index}`}
    >
      <div className="w-full md:w-1/2 group relative">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden="true"
          className="block relative aspect-video overflow-hidden rounded-[2rem] bg-gray-100 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 transition-all duration-500 group-hover:border-purple-500/30 group-hover:shadow-2xl group-hover:shadow-purple-500/10"
        >
          <img
            src={project.image}
            alt=""
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          <div
            className={`absolute top-6 ${isEven ? 'left-6' : 'right-6'} pointer-events-none transition-all duration-500`}
          >
            <span
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md border shadow-xl ${config.styles}`}
            >
              {config.icon}
              {project.category}
            </span>
          </div>
        </a>
      </div>

      <div
        className={`w-full md:w-1/2 flex flex-col ${isEven ? 'text-left' : 'md:text-right md:items-end'}`}
      >
        <header className="mb-4">
          <h3
            id={`project-title-${index}`}
            className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tighter hover:text-purple-600 transition-colors"
          >
            {project.title}
          </h3>
        </header>

        <p
          className={`text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8 font-medium max-w-xl ${!isEven && 'md:ml-auto'}`}
        >
          {project.description}
        </p>

        <div
          className={`flex flex-wrap gap-2 mb-10 ${!isEven && 'md:justify-end'}`}
          role="list"
          aria-label="Tecnologias utilizadas"
        >
          {project.technologies.map((tech) => (
            <span
              key={tech}
              role="listitem"
              className="px-3 py-1.5 text-[10px] font-bold bg-gray-50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-800 rounded-xl uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto`}>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Acessar projeto ${project.title}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-purple-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600"
          >
            <ExternalLink size={16} aria-hidden="true" />
            Acessar Projeto
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver código fonte do projeto ${project.title} no GitHub`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-xs active:scale-95 uppercase tracking-widest transition-all bg-gray-100/50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border border-purple-200 hover:border-purple-600 dark:border-purple-400 dark:hover:border-purple-700 text-purple-600 dark:text-white font-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600"
          >
            <Github size={16} aria-hidden="true" />
            Ver Repositório
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
