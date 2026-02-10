import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../types/index'

interface ProjectCardProps {
  project: Project
  categoryStyle: {
    icon: React.ReactNode
    color: string
  }
}

const ProjectCard = ({ project, categoryStyle }: ProjectCardProps) => {
  return (
    <article className="group flex flex-col h-full rounded-3xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-purple-500 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-purple-500/5">
      {/* Container da Imagem */}
      <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-900">
        <img
          src={project.image}
          alt={`Screenshot do projeto ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-60" />
      </div>

      <div className="flex flex-col flex-grow p-6">
        {/* Categoria */}
        <div className="flex items-center gap-2 mb-4">
          <span
            className={`flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${categoryStyle.color}`}
          >
            {categoryStyle.icon}
            {project.category}
          </span>
        </div>

        {/* Título e Descrição */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Tags de Tecnologia */}
        <div className="flex flex-wrap gap-1.5 mb-8 mt-auto">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[10px] font-medium bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-500 dark:text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botões com Pesos Iguais */}
        <div className="flex items-center gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold transition-all active:scale-95 shadow-lg shadow-purple-500/20 uppercase"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Demo</span>
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-purple-300 dark:hover:bg-gray-600 text-purple-600 dark:text-white border border-purple-400 dark:border-gray-600 rounded-xl text-xs font-bold transition-all active:scale-95 shadow-sm uppercase"
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
