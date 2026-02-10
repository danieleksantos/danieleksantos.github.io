import { MapPin, Circle, ChevronDown } from 'lucide-react'

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="flex items-center justify-center px-6 pt-20 pb-10 bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-purple-900/20 transition-colors duration-500">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <p className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-2 tracking-widest uppercase">
              Olá, eu sou
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Daniele K Santos
              <span className="inline-block w-1 h-12 md:h-16 bg-purple-600 dark:bg-purple-400 ml-2 animate-pulse" />
            </h1>

            <h2 className="text-2xl md:text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
              Desenvolvedora Web - Frontend
            </h2>

            <div className="flex flex-wrap gap-4 mb-10 pt-6">
              <button
                onClick={scrollToProjects}
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Ver Projetos
              </button>
              <a
                href="#contact"
                className="px-8 py-3 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 font-bold rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-purple-600 dark:border-purple-400/50"
              >
                Contato
              </a>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-default">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Piracicaba, SP</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">
                <Circle className="w-2 h-2 fill-green-500 text-green-500 animate-pulse" />
                <span className="text-sm font-medium">
                  Disponível para projetos
                </span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 dark:opacity-40 group-hover:opacity-100 transition duration-1000"></div>

            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-gray-400">
                  developer.ts
                </span>
              </div>

              <div className="p-8 font-mono text-sm sm:text-base leading-relaxed">
                <div className="space-y-1">
                  <p>
                    <span className="text-pink-500 dark:text-pink-400 italic pr-2">
                      const
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold pr-2">
                      developer
                    </span>
                    <span className="text-gray-400 pr-1">=</span>
                    <span className="text-gray-400">{'{'}</span>
                  </p>

                  <div className="pl-6 space-y-1 border-l border-gray-100 dark:border-gray-800 ml-1">
                    <p>
                      <span className="text-blue-500 dark:text-blue-400">
                        name:
                      </span>
                      <span className="text-green-600 dark:text-green-400">
                        'Daniele K Santos'
                      </span>
                      ,
                    </p>
                    <p>
                      <span className="text-blue-500 dark:text-blue-400">
                        role:
                      </span>
                      <span className="text-green-600 dark:text-green-400">
                        'Desenvolvedora Web'
                      </span>
                      ,
                    </p>
                    <p>
                      <span className="text-blue-500 dark:text-blue-400">
                        tech:
                      </span>
                      <span className="text-gray-400">[</span>
                      <span className="text-orange-500 dark:text-orange-400">
                        'React.js'
                      </span>
                      ,
                      <span className="text-orange-500 dark:text-orange-400">
                        'Node.js'
                      </span>
                      ,
                      <span className="text-orange-500 dark:text-orange-400">
                        'Typescript'
                      </span>
                      <span className="text-gray-400">]</span>,
                    </p>
                    <p>
                      <span className="text-blue-500 dark:text-blue-400">
                        cleanCode:
                      </span>
                      <span className="text-pink-500 dark:text-pink-400">
                        true
                      </span>
                    </p>
                  </div>

                  <p className="text-gray-400">{'}'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 animate-bounce">
          <button
            onClick={scrollToProjects}
            aria-label="Rolar para baixo"
            className="text-purple-600 dark:text-purple-400 hover:text-purple-700 transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
