interface Skill {
  name: string
  icon: string
}

interface SkillCategory {
  title: string
  skills: Skill[]
  isPrimary?: boolean
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Primary Stack',
      isPrimary: true,
      skills: [
        { name: 'React', icon: 'react' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'Node.js', icon: 'nodedotjs' },
        { name: 'PostgreSQL', icon: 'postgresql' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'Next.js', icon: 'nextdotjs' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'Tailwind CSS', icon: 'tailwindcss' },
        { name: 'Material UI', icon: 'mui' },
        { name: 'Bootstrap', icon: 'bootstrap' },
        { name: 'Axios', icon: 'axios' },
      ],
    },
    {
      title: 'Backend & API',
      skills: [
        { name: 'Express', icon: 'express' },
        { name: 'Prisma', icon: 'prisma' },
        { name: 'Zod', icon: 'zod' },
        { name: 'Swagger', icon: 'swagger' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'MongoDB', icon: 'mongodb' },
        { name: 'SQL', icon: 'sqlite' },
      ],
    },
    {
      title: 'Tools & Code Quality',
      skills: [
        { name: 'Docker', icon: 'docker' },
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
        { name: 'Vercel', icon: 'vercel' },
        { name: 'Render', icon: 'render' },
        { name: 'Vite', icon: 'vite' },
        { name: 'ESLint', icon: 'eslint' },
        { name: 'Prettier', icon: 'prettier' },
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="py-12 px-6 bg-white dark:bg-gray-950 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter">
            Stack <span className="text-purple-600">&</span> Tools
            <span className="text-purple-600">.</span>
          </h2>
        </header>

        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3
                className={`font-black uppercase tracking-[0.3em] mb-8 ${
                  category.isPrimary
                    ? 'text-purple-600 text-xs'
                    : 'text-gray-600 dark:text-gray-300 text-[10px]'
                }`}
              >
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-x-8 gap-y-6 md:gap-x-20">
                {category.skills.map((skill) => {
                  const needsInversion = [
                    'nextdotjs',
                    'express',
                    'github',
                    'vercel',
                    'render',
                  ].includes(skill.icon)

                  return (
                    <div
                      key={`${category.title}-${skill.name}`}
                      className="group flex items-center gap-3 transition-all duration-300 md:hover:-translate-y-1"
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${skill.icon}`}
                        alt=""
                        className={`
                          transition-all duration-500
                          /* Mobile: Full color */
                          grayscale-0 opacity-100 
                          /* Desktop: Hover effects */
                          md:grayscale md:opacity-40 md:group-hover:grayscale-0 md:group-hover:opacity-100
                          
                          /* Dark Mode Inversion logic */
                          ${needsInversion ? 'dark:invert dark:brightness-200' : ''}

                          ${category.isPrimary ? 'w-8 h-8' : 'w-5 h-5'}
                        `}
                      />
                      <span
                        className={`
                          font-bold tracking-tight transition-colors whitespace-nowrap
                          ${
                            category.isPrimary
                              ? 'text-lg md:text-xl text-gray-900 dark:text-white'
                              : 'text-sm text-gray-500 dark:text-gray-400 md:group-hover:text-gray-900 md:dark:group-hover:text-white'
                          }
                        `}
                      >
                        {skill.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
