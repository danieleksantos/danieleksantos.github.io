import { Mail, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  const socialLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      href: 'mailto:danieleksantos@gmail.com',
      hoverColor: 'hover:text-red-500',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/danieleksantos/',
      hoverColor: 'hover:text-blue-600',
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      href: 'https://github.com/danieleksantos',
      hoverColor: 'hover:text-gray-900 dark:hover:text-white',
    },
  ]

  return (
    <section
      id="contact"
      className="py-12 px-6 bg-white dark:bg-gray-950 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter">
              Dúvidas ou projetos? <br />
              <span className="text-purple-600 dark:text-purple-400">
                Entre em contato.
              </span>
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-[300px] leading-relaxed font-medium">
            Estou aberta a novas oportunidades e conexões no mundo tech.
          </p>
        </header>

        <div className="flex flex-wrap items-center justify-start gap-12 md:gap-20">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ir para ${link.label}`}
              className={`group flex items-center gap-3 text-gray-400 transition-all duration-300 ease-in-out hover:-translate-y-1 ${link.hoverColor}`}
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {link.icon}
              </div>
              <span className="text-sm font-bold uppercase tracking-[0.2em]">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
