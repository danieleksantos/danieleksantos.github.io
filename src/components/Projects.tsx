import { Code2, Database, Globe, ExternalLink } from 'lucide-react'
import ProjectCard from './ProjectCard'
import type { Project } from '../types/index'
import projectsDataRaw from '../data/projects.json'

const PROJECTS_DATA = projectsDataRaw as Project[]

const Projects = () => {
  const getCategoryStyles = (category: Project['category']) => {
    const styles = {
      fullstack: {
        icon: <Database className="w-3 h-3" />,
        color:
          'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300',
      },
      frontend: {
        icon: <Globe className="w-3 h-3" />,
        color:
          'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
      },
      backend: {
        icon: <Code2 className="w-3 h-3" />,
        color:
          'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300',
      },
    }
    return styles[category] || styles.frontend
  }

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Projetos
          </h2>
          <div className="w-20 h-1.5 bg-purple-600 mx-auto rounded-full" />
        </header>

        {/* Grid Uniforme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              categoryStyle={getCategoryStyles(project.category)}
            />
          ))}
        </div>

        <footer className="text-center mt-20">
          <a
            href="https://github.com/danieleksantos?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-50 dark:bg-gray-800 text-purple-600 dark:text-purple-400 font-bold rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 border border-transparent hover:border-purple-200 dark:hover:border-purple-900"
          >
            <span>Ver todos os repositórios</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </footer>
      </div>
    </section>
  )
}

export default Projects
