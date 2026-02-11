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
            Stack <span className="text-purple-600">&</span> Tecnologias.
          </h2>
        </header>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3
                className={`font-black uppercase tracking-[0.3em] mb-6 ${
                  category.isPrimary
                    ? 'text-purple-600 text-xs'
                    : 'text-gray-400 text-[10px]'
                }`}
              >
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-x-3 gap-y-2 md:gap-x-20">
                {category.skills.map((skill) => (
                  <div
                    key={`${category.title}-${skill.name}`}
                    className="group flex items-center gap-3 transition-all duration-300 hover:-translate-y-1"
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${skill.icon}`}
                      alt=""
                      className={`
                        transition-all duration-500 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100
                        ${category.isPrimary ? 'w-8 h-8' : 'w-5 h-5'}
                      `}
                    />
                    <span
                      className={`
                      font-bold tracking-tight transition-colors
                      ${
                        category.isPrimary
                          ? 'text-xl text-gray-900 dark:text-white'
                          : 'text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                      }
                    `}
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
