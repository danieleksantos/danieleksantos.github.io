import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react'

const Contact = () => {
  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      href: 'mailto:danieleksantos@gmail.com',
      color: 'hover:bg-red-500 hover:text-white',
      textColor: 'group-hover:text-red-500',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/danieleksantos/',
      color: 'hover:bg-blue-600 hover:text-white',
      textColor: 'group-hover:text-blue-600',
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: 'https://github.com/danieleksantos',
      color:
        'hover:bg-gray-900 dark:hover:bg-white dark:hover:text-black hover:text-white',
      textColor: 'group-hover:text-gray-900 dark:group-hover:text-white',
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      label: 'WhatsApp',
      href: 'https://wa.me/5516982038845',
      color: 'hover:bg-green-500 hover:text-white',
      textColor: 'group-hover:text-green-500',
    },
  ]

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-white dark:bg-gray-950 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter">
              Dúvidas ou projetos? <br />
              <span className="text-purple-600 dark:text-purple-400">
                Entre em contato.
              </span>
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-[280px] leading-relaxed font-medium">
            Estou aberta a novas oportunidades e conexões no mundo tech.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-gray-100 dark:bg-gray-900 border border-purple-200 dark:border-gray-800 hover:border-purple-600 dark:hover:border-purple-800 transition-all duration-300"
            >
              <div
                className={`p-4 rounded-xl bg-white dark:bg-gray-800 text-gray-400 shadow-sm transition-all duration-300 ${link.color}`}
              >
                {link.icon}
              </div>
              <div className="text-center">
                <span
                  className={`text-xs font-bold uppercase tracking-widest text-gray-400 transition-colors ${link.textColor}`}
                >
                  {link.label}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
