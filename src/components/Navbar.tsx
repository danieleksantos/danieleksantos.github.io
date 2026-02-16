import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Projetos', href: '#projects' },
    { name: 'Stacks', href: '#skills' },
    { name: 'Contato', href: '#contact' },
  ]

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const elem = document.getElementById(targetId)

    if (elem) {
      const offsetTop =
        elem.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-200 dark:border-purple-500 bg-gray-100/80 dark:bg-gray-900 backdrop-blur-md transition-colors duration-500">
      <nav className="max-w-6xl mx-auto px-6 md:px-0 h-16 flex justify-between items-center relative">
        <div className="flex items-center">
          <ul className="hidden md:flex gap-10" role="list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-500 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-all focus-visible:outline-2 focus-visible:outline-purple-600 rounded-md"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            className="md:hidden p-2 -ml-2 text-purple-400 dark:text-purple-700 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="flex items-center">
          <ThemeToggle />
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-100 dark:bg-gray-900 border-b border-purple-200 dark:border-purple-500 p-6 md:hidden animate-in fade-in slide-in-from-top-2">
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="block text-[10px] font-black tracking-[0.3em] uppercase text-gray-500 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
