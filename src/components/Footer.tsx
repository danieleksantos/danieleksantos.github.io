import { ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 px-4 border-t border-purple-200 dark:border-purple-500 bg-gray-100 dark:bg-gray-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3">
            <span className="text-lg font-black tracking-tighter text-gray-900 dark:text-white">
              Daniele K Santos<span className="text-purple-600">.</span>
            </span>
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
            © {currentYear} • Designed & Coded by me
          </p>
        </div>

        <div className="hidden lg:block">
          <p className="text-[10px] font-medium text-purple-400 dark:text-gray-700 uppercase tracking-[0.3em]">
            Focus • Consistency • Accessibility
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="group flex items-center gap-4 text-[10px] font-black tracking-[0.2em] text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all uppercase cursor-pointer"
          aria-label="Voltar ao topo"
        >
          Back to top
          <div className="flex items-center justify-center w-10 h-10 border border-gray-100 dark:border-gray-900 rounded-full group-hover:border-purple-500/50 group-hover:-translate-y-1 transition-all duration-300">
            <ArrowUp className="w-4 h-4" />
          </div>
        </button>
      </div>
    </footer>
  )
}

export default Footer
