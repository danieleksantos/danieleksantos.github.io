import { useState, useRef, useMemo } from 'react'
import { ChevronLeft, ChevronRight, SearchX } from 'lucide-react'
import projectsDataRaw from '../data/projects.json'
import ProjectCard from './ProjectCard'
import SearchInput from './SearchInput'
import type { Project } from '../types'

const projectsData = projectsDataRaw as Project[]
const PROJECTS_PER_PAGE = 3

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  const filteredProjects = useMemo(() => {
    const query = searchTerm.toLowerCase().trim()
    if (!query) return projectsData

    return projectsData.filter((project) => {
      const inTitle = project.title.toLowerCase().includes(query)
      const inCategory = project.category.toLowerCase().includes(query)
      const inTech = project.technologies.some((t) =>
        t.toLowerCase().includes(query),
      )
      return inTitle || inCategory || inTech
    })
  }, [searchTerm])

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  const safePage = Math.min(currentPage, Math.max(1, totalPages))

  const indexOfLastProject = safePage * PROJECTS_PER_PAGE
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  )

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    setCurrentPage(1)
  }

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    setTimeout(() => {
      if (sectionRef.current) {
        const yOffset = -80
        const elementTop = sectionRef.current.getBoundingClientRect().top
        const y = elementTop + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
        titleRef.current?.focus({ preventScroll: true })
      }
    }, 100)
  }

  return (
    <main
      id="projects"
      ref={sectionRef}
      className="pb-14 pt-5 bg-white dark:bg-gray-950 transition-colors duration-500"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <h2
              id="projects-heading"
              ref={titleRef}
              tabIndex={-1}
              className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter outline-none"
            >
              Projetos<span className="text-purple-600">.</span>
            </h2>
          </div>

          <SearchInput searchTerm={searchTerm} onSearchChange={handleSearch} />
        </header>

        <div
          className="flex flex-col gap-24 md:gap-32"
          aria-live="polite"
          role="region"
          aria-label={`Mostrando ${filteredProjects.length} projetos`}
        >
          {currentProjects.length > 0 ? (
            currentProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-full mb-6">
                <SearchX size={48} className="text-purple-600/50" />
              </div>
              <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                Nenhum projeto encontrado
              </h4>
              <p className="text-gray-500 dark:text-gray-400 max-w-sm font-medium">
                Não encontramos resultados para "{searchTerm}". Tente buscar por
                tecnologias como React, Node ou a categoria do projeto.
              </p>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <nav
            className="flex justify-center items-center gap-1 sm:gap-2 mt-20"
            aria-label="Navegação entre páginas"
          >
            <button
              onClick={() => paginate(safePage - 1)}
              disabled={safePage === 1}
              className="flex items-center gap-1 px-3 sm:px-5 py-2.5 rounded-xl disabled:opacity-20 disabled:cursor-not-allowed transition-all font-black text-[10px] uppercase tracking-[0.2em] bg-gray-100/50 dark:bg-gray-700 text-purple-600 dark:text-white border border-purple-200 dark:border-purple-400 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 hover:border-purple-600 dark:hover:border-purple-700"
            >
              <ChevronLeft size={14} />
              <span className="hidden sm:block">Anterior</span>
            </button>

            <div className="flex gap-1 sm:gap-2 mx-1 sm:mx-4" role="group">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => paginate(pageNum)}
                    aria-current={safePage === pageNum ? 'page' : undefined}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl font-black text-xs transition-all duration-300 cursor-pointer ${
                      safePage === pageNum
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                        : 'bg-gray-100/50 dark:bg-gray-700 text-purple-600 dark:text-white border border-purple-200 dark:border-purple-400 dark:hover:border-purple-700 hover:bg-gray-200 dark:hover:bg-gray-600 hover:border-purple-600'
                    }`}
                  >
                    {String(pageNum).padStart(2, '0')}
                  </button>
                ),
              )}
            </div>

            <button
              onClick={() => paginate(safePage + 1)}
              disabled={safePage === totalPages}
              className="flex items-center gap-1 px-3 sm:px-5 py-2.5 rounded-xl disabled:opacity-20 disabled:cursor-not-allowed transition-all font-black text-[10px] uppercase tracking-[0.2em] bg-gray-100/50 dark:bg-gray-700 text-purple-600 dark:text-white border border-purple-200 dark:border-purple-400 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 hover:border-purple-600 dark:hover:border-purple-700"
            >
              <span className="hidden sm:block">Próximo</span>
              <ChevronRight size={14} />
            </button>
          </nav>
        )}
      </div>
    </main>
  )
}

export default Projects
