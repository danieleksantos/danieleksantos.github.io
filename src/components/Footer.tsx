import { ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className="py-12 px-4 border-t border-purple-200 dark:border-purple-500 bg-gray-100 dark:bg-gray-950 transition-colors duration-500"
      aria-label="Rodapé"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left space-y-2">
          <p
            className="text-gray-900 dark:text-white font-black tracking-tighter text-xl"
            aria-label="Daniele K. Santos"
          >
            Daniele K
            <span className="text-purple-600" aria-hidden="true">
              .
            </span>{' '}
            Santos
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-xs font-medium tracking-wide">
            © {currentYear} • Built with React & Tailwind.
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-purple-600/50 dark:text-gray-500"
          role="list"
          aria-label="Valores"
        >
          <span role="listitem">Iterate</span>
          <span
            className="text-gray-500 dark:text-purple-500"
            aria-hidden="true"
          >
            •
          </span>
          <span role="listitem">Improve</span>
          <span
            className="text-gray-500 dark:text-purple-500"
            aria-hidden="true"
          >
            •
          </span>
          <span role="listitem">Include</span>
        </div>

        <button
          onClick={scrollToTop}
          className="group flex items-center gap-4 text-[10px] font-black tracking-[0.2em] text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all uppercase cursor-pointer focus-visible:outline-2 focus-visible:outline-purple-600 rounded-lg p-2"
          aria-label="Voltar ao topo da página"
        >
          Back to top
          <div
            className="flex items-center justify-center w-10 h-10 border border-gray-100 dark:border-gray-900 rounded-full group-hover:border-purple-600 group-hover:-translate-y-1 transition-all duration-300"
            aria-hidden="true"
          >
            <ArrowUp className="w-4 h-4" />
          </div>
        </button>
      </div>
    </footer>
  )
}

export default Footer
