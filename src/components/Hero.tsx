import { MapPin, ChevronDown } from 'lucide-react'
import VSCodeWindow from './VSCodeWindow'

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="flex items-center justify-center px-6 pt-20 pb-10 bg-white dark:bg-gray-950 transition-colors duration-500 min-h-screen overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <header>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter leading-tight">
                Daniele K Santos<span className="text-purple-600">.</span>
              </h1>
              <h2 className="text-xl font-bold text-gray-400 dark:text-gray-500 mt-2 tracking-tight">
                Desenvolvedora FullStack{' '}
                <span className="font-light">| Foco em Front-End</span>
              </h2>
            </header>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-black rounded-2xl shadow-xl shadow-purple-500/20 transition-all active:scale-95 text-sm uppercase tracking-widest cursor-pointer"
              >
                Projetos
              </button>
              <a
                href="#contact"
                className="px-8 py-4 border-1 border-purple-200 dark:border-purple-600 text-purple-600 dark:text-white font-black rounded-2xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all text-sm uppercase tracking-widest"
              >
                Contato
              </a>
            </div>

            <div className="flex flex-col gap-3 border-t border-gray-100 dark:border-gray-900 pt-6">
              <div className="flex items-center gap-3 text-sm text-gray-500 italic">
                <MapPin size={16} className="text-purple-500" />
                Piracicaba, São Paulo
              </div>
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                  Disponível para novos desafios
                </span>
              </div>
            </div>
          </div>

          <div className="h-[380px] w-full flex items-center justify-center">
            <div className="h-full w-full animate-none lg:animate-hero-spin will-change-transform">
              <div className="h-full w-full rounded-xl shadow-2xl shadow-gray-300/40 dark:shadow-neon transition-shadow duration-500 overflow-hidden">
                <VSCodeWindow fileName="App.tsx">
                  <div className="h-full overflow-y-auto pr-2 font-mono text-[12px] md:text-[13px] leading-relaxed custom-scrollbar">
                    <p>
                      <span className="text-[#569cd6]">interface</span>{' '}
                      <span className="text-[#4ec9b0]">Developer</span> {'{'}
                    </p>
                    <div className="pl-6 text-[#9cdcfe]">
                      <p>
                        name: <span className="text-[#4ec9b0]">string</span>;
                      </p>
                      <p>
                        role: <span className="text-[#4ec9b0]">string</span>;
                      </p>
                      <p>
                        primaryFocus:{' '}
                        <span className="text-[#4ec9b0]">string</span>;
                      </p>
                      <p>
                        stack: <span className="text-[#4ec9b0]">string</span>[];
                      </p>
                      <p>
                        principles:{' '}
                        <span className="text-[#4ec9b0]">string</span>[];
                      </p>
                      <p>
                        accessibilityFirst:{' '}
                        <span className="text-[#4ec9b0]">boolean</span>;
                      </p>
                      <p>
                        growthMindset:{' '}
                        <span className="text-[#4ec9b0]">boolean</span>;
                      </p>
                      <p>
                        goal: <span className="text-[#4ec9b0]">string</span>;
                      </p>
                    </div>
                    <p>{'}'}</p>
                    <br />
                    <p>
                      <span className="text-[#569cd6]">const</span>{' '}
                      <span className="text-[#9cdcfe]">portfolio</span>:{' '}
                      <span className="text-[#4ec9b0]">Developer</span> = {'{'}
                    </p>
                    <div className="pl-6 space-y-1">
                      <p>
                        <span className="text-[#9cdcfe]">name</span>:{' '}
                        <span className="text-[#ce9178]">
                          "Daniele K. Santos"
                        </span>
                        ,
                      </p>
                      <p>
                        <span className="text-[#9cdcfe]">role</span>:{' '}
                        <span className="text-[#ce9178]">
                          "Fullstack Developer"
                        </span>
                        ,
                      </p>
                      <p>
                        <span className="text-[#9cdcfe]">primaryFocus</span>:{' '}
                        <span className="text-[#ce9178]">"Front-End"</span>,
                      </p>
                      <p>
                        <span className="text-[#9cdcfe]">stack</span>: [
                        <span className="text-[#ce9178]">"React"</span>,{' '}
                        <span className="text-[#ce9178]">"TypeScript"</span>,{' '}
                        <span className="text-[#ce9178]">"Node.js"</span>],
                      </p>
                      <p>
                        <span className="text-[#9cdcfe]">principles</span>: [
                        <span className="text-[#ce9178]">"Clean Code"</span>,{' '}
                        <span className="text-[#ce9178]">"SOLID"</span>,{' '}
                        <span className="text-[#ce9178]">"A11y"</span>],
                      </p>
                      <p>
                        <span className="text-[#9cdcfe]">
                          accessibilityFirst
                        </span>
                        : <span className="text-[#569cd6]">true</span>,
                      </p>
                      <p>
                        <span className="text-[#9cdcfe]">growthMindset</span>:{' '}
                        <span className="text-[#569cd6]">true</span>,
                      </p>
                      <p>
                        <span className="text-[#9cdcfe]">goal</span>:{' '}
                        <span className="text-[#ce9178]">
                          "Building accessible, scalable, and user-centered web
                          applications."
                        </span>
                      </p>
                    </div>
                    <p>{'}'};</p>
                  </div>
                </VSCodeWindow>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12 animate-bounce">
          <button
            onClick={scrollToProjects}
            className="text-gray-300 dark:text-gray-700 hover:text-purple-500 transition-colors cursor-pointer"
            aria-label="Rolar para projetos"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
