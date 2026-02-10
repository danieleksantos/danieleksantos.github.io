import type { SkillCategory } from '../types/index'

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 80 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'JWT', level: 85 },
        { name: 'Prisma', level: 75 },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Vercel', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'Redux', level: 80 },
        { name: 'Vite', level: 85 },
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="py-24 px-4 bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-purple-900/10 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header com ênfase visual */}
        <header className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Stack{' '}
            <span className="text-purple-600 dark:text-purple-400">
              Técnica
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Minha caixa de ferramentas evolui constantemente. Atualmente, foco
            em ecossistemas baseados em
            <span className="font-semibold text-gray-900 dark:text-gray-200">
              {' '}
              TypeScript
            </span>{' '}
            e soluções em nuvem.
          </p>
        </header>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group p-8 rounded-3xl bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-purple-500/5 animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.15}s` }}
            >
              {/* Category Title com indicador dinâmico */}
              <div className="flex items-center gap-4 mb-10">
                <div className="relative">
                  <div className="w-1.5 h-8 bg-purple-600 dark:bg-purple-400 rounded-full group-hover:h-10 transition-all duration-300" />
                  <div className="absolute top-0 left-0 w-1.5 h-8 bg-purple-400 dark:bg-purple-600 rounded-full blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-7">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group/skill space-y-3">
                    {/* Skill Name & Level */}
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300 group-hover/skill:text-purple-600 dark:group-hover/skill:text-purple-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono font-bold text-purple-600/70 dark:text-purple-400/70 bg-purple-50 dark:bg-purple-900/30 px-2 py-0.5 rounded">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-2.5 bg-gray-100 dark:bg-gray-700/50 rounded-full overflow-hidden p-0.5 border border-gray-200/50 dark:border-gray-600/30">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 dark:from-purple-500 dark:via-purple-400 dark:to-purple-300 rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(147,51,234,0.3)]"
                        style={{ width: `${skill.level}%` }}
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action ou Nota de Rodapé */}
        <div className="mt-20 p-8 rounded-2xl bg-gray-50/50 dark:bg-gray-800/30 border border-dashed border-gray-300 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            "A tecnologia é apenas uma ferramenta. O foco principal é sempre
            resolver problemas reais com
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              {' '}
              arquitetura sólida{' '}
            </span>{' '}
            e
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              {' '}
              código limpo
            </span>
            ."
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
