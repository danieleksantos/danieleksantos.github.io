import {
  Mail,
  Linkedin,
  Github,
  MessageSquare,
  Send,
  ArrowUp,
} from 'lucide-react'

const Contact = () => {
  // Centralizamos os dados para facilitar manutenção (Clean Code)
  const socialLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'danieleksantos@gmail.com',
      href: 'mailto:danieleksantos@gmail.com',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'in/danieleksantos',
      href: 'https://www.linkedin.com/in/danieleksantos/',
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'github.com/danieleksantos',
      href: 'https://github.com/danieleksantos',
      color: 'from-gray-800 to-gray-600 dark:from-gray-700 dark:to-gray-500',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      label: 'WhatsApp',
      value: '+55 16 98203-8845',
      href: 'https://wa.me/5516982038845',
      color: 'from-green-600 to-green-400',
    },
  ]

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Vamos{' '}
            <span className="text-purple-600 dark:text-purple-400">
              Conversar
            </span>
            ?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Seja para um projeto novo, uma dúvida técnica ou apenas para trocar
            figurinhas sobre desenvolvimento, sinta-se à vontade para me chamar!
          </p>
        </header>

        {/* Contact Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {socialLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 rounded-3xl bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/5 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Floating Send Icon */}
              <div className="absolute top-8 right-8 text-gray-300 dark:text-gray-600 group-hover:text-purple-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <Send className="w-5 h-5" />
              </div>

              {/* Icon Container with dynamic gradient */}
              <div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${link.color} text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
              >
                {link.icon}
              </div>

              <div>
                <h3 className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-[0.2em] mb-2">
                  {link.label}
                </h3>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 break-all group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA "Call to Action" Card */}
        <div className="relative overflow-hidden p-10 rounded-[2.5rem] bg-gray-900 dark:bg-purple-900/20 text-center border border-gray-800 dark:border-purple-500/30">
          {/* Decorative background elements */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Pronta para colaborar!
            </h3>
            <p className="mb-10 text-gray-400 dark:text-purple-100/70 text-lg max-w-lg mx-auto leading-relaxed">
              Busco oportunidades como{' '}
              <span className="text-white font-medium">
                Desenvolvedora Full Stack
              </span>{' '}
              onde eu possa aplicar boas práticas e evoluir constantemente.
            </p>
            <a
              href="mailto:danieleksantos@gmail.com"
              className="inline-flex items-center gap-3 px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-purple-600/20 focus:ring-4 focus:ring-purple-500/40"
            >
              <Mail className="w-5 h-5" />
              <span>Enviar Email Agora</span>
            </a>
          </div>
        </div>

        {/* Footer Refinado */}
        <footer className="mt-24 pt-10 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-gray-900 dark:text-white font-bold text-lg mb-1">
                Daniele Karina
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} • Feito com{' '}
                <span className="text-purple-500">React</span>,{' '}
                <span className="text-blue-500">TS</span> e{' '}
                <span className="text-cyan-500">Tailwind</span>
              </p>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex flex-col items-center gap-2 text-xs font-bold text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all uppercase tracking-widest"
              aria-label="Voltar ao topo"
            >
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-full group-hover:shadow-lg group-hover:-translate-y-1 transition-all">
                <ArrowUp className="w-5 h-5" />
              </div>
              Voltar ao topo
            </button>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Contact
