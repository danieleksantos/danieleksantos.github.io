import React from 'react'
import {
  ExternalLink,
  Github,
  Layers,
  LayoutGrid,
  Code2,
  Globe,
} from 'lucide-react'
import type { Project } from '../types/index'

interface ProjectCardProps {
  project: Project
}

const CATEGORY_CONFIG: Record<
  string,
  { icon: React.ReactNode; styles: string }
> = {
  fullstack: {
    icon: <Layers size={14} />,
    styles:
      'bg-purple-100/90 text-purple-700 border-purple-200 dark:bg-purple-900/80 dark:text-purple-300 dark:border-purple-800',
  },
  frontend: {
    icon: <LayoutGrid size={14} />,
    styles:
      'bg-blue-100/90 text-blue-700 border-blue-200 dark:bg-blue-900/80 dark:text-blue-300 dark:border-blue-800',
  },
  backend: {
    icon: <Code2 size={14} />,
    styles:
      'bg-emerald-100/90 text-emerald-700 border-emerald-200 dark:bg-emerald-900/80 dark:text-emerald-300 dark:border-emerald-800',
  },
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const config = CATEGORY_CONFIG[project.category.toLowerCase()] || {
    icon: <Globe size={14} />,
    styles:
      'bg-gray-100/90 text-gray-700 border-gray-200 dark:bg-gray-900/80 dark:text-gray-300 dark:border-gray-800',
  }

  return (
    <article className="group flex flex-col h-full rounded-3xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-purple-500/50 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-purple-500/10">
      {/* Container da Imagem com Badge */}
      <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-900">
        <img
          src={project.image}
          alt={`Screenshot do projeto ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Badge de Categoria Posicionado */}
        <div className="absolute top-4 right-4 z-10">
          <span
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md border shadow-sm transition-all duration-500 ${config.styles}`}
          >
            {config.icon}
            {project.category}
          </span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="flex flex-col flex-grow p-6">
        <header>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
        </header>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
          {project.description}
        </p>

        {/* Tags de Tecnologia */}
        <div className="flex flex-wrap gap-1.5 mb-8 mt-auto">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[10px] font-semibold bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-500 dark:text-gray-400 transition-colors group-hover:border-purple-200 dark:group-hover:border-purple-900"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botões */}
        <div className="flex items-center gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver demonstração ao vivo do projeto ${project.title}`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold transition-all active:scale-95 shadow-lg shadow-purple-500/20 uppercase tracking-wider"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Demo</span>
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver código fonte do projeto ${project.title} no GitHub`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-200 dark:bg-gray-700 hover:bg-purple-50 dark:hover:bg-gray-600 text-purple-600 dark:text-white border border-purple-200 dark:border-gray-600 rounded-xl text-xs font-bold transition-all active:scale-95 shadow-sm uppercase tracking-wider"
          >
            <Github className="w-4 h-4" />
            <span>Github</span>
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
