import { useState } from 'react'
import projectsDataRaw from '../data/projects.json'
import ProjectCard from './ProjectCard'
import type { Project } from '../types'

const projectsData = projectsDataRaw as Project[]

const PROJECTS_PER_PAGE = 6

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(projectsData.length / PROJECTS_PER_PAGE)
  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE

  const currentProjects = projectsData.slice(
    indexOfFirstProject,
    indexOfLastProject,
  )

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    const section = document.getElementById('projects')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="projects"
      className="py-15 bg-gray-50/50 dark:bg-gray-900/50 transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight mb-4">
            Projetos
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {totalPages > 1 && (
          <nav
            className="flex justify-center items-center gap-2 mt-16"
            aria-label="Navegação de projetos"
          >
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-purple-200 dark:border-gray-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-purple-50 dark:hover:bg-gray-800 transition-colors text-purple-600 dark:text-purple-400 font-bold text-xs uppercase tracking-widest cursor-pointer"
            >
              Anterior
            </button>

            <div className="flex gap-1 mx-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => paginate(pageNum)}
                    aria-current={currentPage === pageNum ? 'page' : undefined}
                    className={`w-10 h-10 rounded-xl font-bold transition-all duration-300 cursor-pointer ${
                      currentPage === pageNum
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                        : 'text-gray-500 hover:bg-purple-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {pageNum}
                  </button>
                ),
              )}
            </div>

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-purple-200 dark:border-gray-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-purple-50 dark:hover:bg-gray-800 transition-colors text-purple-600 dark:text-purple-400 font-bold text-xs uppercase tracking-widest cursor-pointer"
            >
              Próximo
            </button>
          </nav>
        )}
      </div>
    </section>
  )
}

export default Projects
