interface Skill {
  name: string
  icon: string
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: 'react' },
        { name: 'Next.js', icon: 'nextdotjs' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'Tailwind CSS', icon: 'tailwindcss' },
        { name: 'Material UI', icon: 'mui' },
        { name: 'Bootstrap', icon: 'bootstrap' },
        { name: 'JavaScript', icon: 'javascript' },
      ],
    },
    {
      title: 'Backend & DB',
      skills: [
        { name: 'Node.js', icon: 'nodedotjs' },
        { name: 'Express', icon: 'express' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'MongoDB', icon: 'mongodb' },
        { name: 'SQL', icon: 'sqlite' },
        { name: 'Prisma', icon: 'prisma' },
        { name: 'Axios', icon: 'axios' },
      ],
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', icon: 'docker' },
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
        { name: 'Vercel', icon: 'vercel' },
        { name: 'Render', icon: 'render' },
        { name: 'Vite', icon: 'vite' },
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="py-15 px-4 bg-white dark:bg-gray-950 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Minha{' '}
            <span className="text-purple-600 dark:text-purple-400">Stack</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-balance font-medium">
            Ferramentas e tecnologias que utilizo para transformar ideias em
            produtos digitais de alta performance.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="flex flex-col">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400 mb-8 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-purple-600/30" />
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-purple-500/50 bg-gray-200 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10"
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${skill.icon}`}
                      alt=""
                      className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
                    />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
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
