import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import projectsDataRaw from '../data/projects.json'
import ProjectCard from './ProjectCard'
import type { Project } from '../types'

const projectsData = projectsDataRaw as Project[]
const PROJECTS_PER_PAGE = 3

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const sectionRef = useRef<HTMLElement>(null)

  const totalPages = Math.ceil(projectsData.length / PROJECTS_PER_PAGE)
  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE

  const currentProjects = projectsData.slice(
    indexOfFirstProject,
    indexOfLastProject,
  )

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)

    setTimeout(() => {
      if (sectionRef.current) {
        const yOffset = -20
        const y =
          sectionRef.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset

        window.scrollTo({
          top: y,
          behavior: 'smooth',
        })
      }
    }, 50)
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="pb-14 pt-5 bg-white dark:bg-gray-950 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter">
            Projetos<span className="text-purple-600">.</span>
          </h2>
        </header>

        <div className="flex flex-col gap-24 md:gap-32">
          {currentProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {totalPages > 1 && (
          <nav
            className="flex justify-center items-center gap-1 sm:gap-2 mt-20"
            aria-label="Navegação de projetos"
          >
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-3 sm:px-5 py-2.5 rounded-xl disabled:opacity-20 disabled:cursor-not-allowed transition-all font-black text-[10px] uppercase tracking-[0.2em] cursor-pointer bg-gray-100/50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border border-purple-200 hover:border-purple-600 dark:border-purple-400 dark:hover:border-purple-700 text-purple-600 dark:text-white"
            >
              <ChevronLeft size={14} />
              <span className="hidden sm:block">Anterior</span>
            </button>

            <div className="flex gap-1 sm:gap-2 mx-1 sm:mx-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => paginate(pageNum)}
                    aria-current={currentPage === pageNum ? 'page' : undefined}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl font-black text-xs transition-all duration-300 cursor-pointer ${
                      currentPage === pageNum
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30 border-none'
                        : 'bg-gray-100/50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border border-purple-200 hover:border-purple-600 dark:border-purple-400 dark:hover:border-purple-700 text-purple-600 dark:text-white'
                    }`}
                  >
                    {String(pageNum).padStart(2, '0')}
                  </button>
                ),
              )}
            </div>

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-3 sm:px-5 py-2.5 rounded-xl disabled:opacity-20 disabled:cursor-not-allowed transition-all text-[10px] uppercase tracking-[0.2em] cursor-pointer bg-gray-100/50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border border-purple-200 hover:border-purple-600 dark:border-purple-400 dark:hover:border-purple-700 text-purple-600 dark:text-white font-black"
            >
              <span className="hidden sm:block">Próximo</span>
              <ChevronRight size={14} />
            </button>
          </nav>
        )}
      </div>
    </section>
  )
}

export default Projects
