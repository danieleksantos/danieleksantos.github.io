import { useState } from 'react'
import { Mail, Linkedin, Github, Check, Copy } from 'lucide-react'

const Contact = () => {
  const [copied, setCopied] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const email = 'danimistron@gmail.com'

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Erro ao copiar e-mail:', err)
    }
  }

  const socialLinks = [
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
      aria-labelledby="contact-title"
      className="py-12 px-6 bg-white dark:bg-gray-950 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-2">
            <h2
              id="contact-title"
              className="text-4xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tighter"
            >
              Gostaria de iniciar um novo projeto? <br />
              <span className="text-purple-600 dark:text-purple-400">
                Entre em contato
                <span className="text-gray-900 dark:text-white">.</span>
              </span>
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-[300px] leading-relaxed font-medium">
            Estou aberta a novas oportunidades e conexões no mundo tech.
          </p>
        </header>

        <div className="flex flex-wrap items-center justify-start gap-12 md:gap-20">
          <button
            onClick={handleCopyEmail}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
            className="group flex items-center gap-3 text-gray-400 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-red-500 cursor-pointer relative focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-purple-600 rounded-sm"
            aria-label={`Copiar e-mail: ${email}`}
          >
            <div
              className="transition-all duration-300 transform group-hover:scale-110"
              aria-hidden="true"
            >
              {copied ? (
                <Check className="w-6 h-6 text-purple-500 animate-in zoom-in" />
              ) : isHovered ? (
                <Copy className="w-6 h-6 animate-in fade-in slide-in-from-bottom-1" />
              ) : (
                <Mail className="w-6 h-6" />
              )}
            </div>

            <div className="flex flex-col items-start">
              <span className="text-sm font-bold uppercase tracking-[0.2em]">
                Email
              </span>
              <div
                aria-live="polite"
                className="absolute -bottom-6 left-0 h-4 min-w-[100px]"
              >
                {copied && (
                  <span className="text-[10px] font-black text-purple-500 uppercase tracking-widest animate-in fade-in slide-in-from-top-1">
                    Copiado!
                  </span>
                )}
              </div>
            </div>
          </button>

          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ir para ${link.label} (abre em nova aba)`}
              className={`group flex items-center gap-3 text-gray-400 transition-all duration-300 ease-in-out hover:-translate-y-1 ${link.hoverColor} focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-purple-600 rounded-sm`}
            >
              <div
                className="transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
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
