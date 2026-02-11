import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'

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
            <span className="text-lg font-black tracking-tighter dark:tracking-wide text-gray-900 dark:text-white">
              Daniele K Santos<span className="text-purple-600">.</span>
            </span>
            <span className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              Software Development
            </span>
          </div>
          <p className="text-[10px] font-medium text-gray-400 uppercase tracking-[0.2em]">
            © {currentYear} • Built with Passion & Clean Code
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/danieleksantos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/danieleksantos/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:danieleksantos@gmail.com"
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="group flex items-center gap-3 text-[10px] font-black tracking-[0.2em] text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all uppercase cursor-pointer"
          aria-label="Voltar ao topo"
        >
          Back to top
          <div className="p-2.5 bg-gray-50 dark:bg-gray-900 rounded-full group-hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <ArrowUp className="w-4 h-4" />
          </div>
        </button>
      </div>
    </footer>
  )
}

export default Footer
