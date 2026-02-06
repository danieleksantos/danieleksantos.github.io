import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Hotel Hub',
      description:
        'Sistema completo de gestão hoteleira com autenticação JWT, gerenciamento de reservas e dashboard administrativo.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Tailwind'],
      image: '/images/hotel-hub-mockup.png',
      github: 'https://github.com/danieleksantos/hotel-hub',
      demo: 'https://hotel-hub-seven.vercel.app',
      featured: true,
    },
    {
      id: 2,
      title: 'DevSocial',
      description:
        'Rede social para desenvolvedores com feed de postagens, sistema de likes, comentários e perfis personalizados.',
      tech: ['React', 'Express', 'PostgreSQL', 'JWT', 'Zod'],
      image: '/images/GrowTwitter-mockup.png',
      github: 'https://github.com/danieleksantos/grow-twitter',
      demo: 'https://grow-twitter.vercel.app/',
      featured: true,
    },
    {
      id: 3,
      title: 'Buscar Patas',
      description:
        'Aplicação moderna e responsiva que facilita o cadastro de pets e adotantes e otimiza a conexão entre eles. A aplicação também conta com painel administrativo de gerenciamento e dashboard com contagem de cadastros, pets e adoções.',
      tech: ['React', 'TypeScript', 'Tailwind'],
      image: '/images/buscar-patas-mockup.png',
      github:
        'https://github.com/danieleksantos/BuscarPatas-sistema-de-adocao-de-pets',
      demo: 'https://buscar-patas-sistema-de-adocao-de-p.vercel.app/',
      featured: true,
    },
    {
      id: 4,
      title: 'GrowTravel',
      description:
        'Landing page otimizada para agência de turismo com 100% no Lighthouse em todas as métricas.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: '/images/growTravel-mockup.png',
      github: 'https://github.com/danieleksantos/growtravel',
      demo: 'https://growtravel-nu.vercel.app',
      featured: false,
    },
    {
      id: 5,
      title: 'Nikel',
      description:
        'Aplicação de controle financeiro pessoal com gestão de receitas, despesas e investimentos.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: '/images/nikel-mockup.png',
      github: 'https://github.com/danieleksantos/Nikel-Controle-Financeiro',
      demo: 'https://danieleksantos.github.io/Nikel-Controle-Financeiro/',
      featured: false,
    },
    {
      id: 6,
      title: 'Coffee Shop',
      description:
        'Landing page responsiva para cafeteria com design moderno e Bootstrap.',
      tech: ['HTML', 'CSS', 'Bootstrap'],
      image: '/images/coffee-shop-cell-mockup.png',
      github:
        'https://github.com/danieleksantos/Landing-Page__CSS-CoffeeShop-BOOTSTRAP',
      demo: 'https://danieleksantos.github.io/Landing-Page__CSS-CoffeeShop-BOOTSTRAP/',
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <div className="section-header">
          <h2 className="section-title">Projetos em Destaque</h2>
          <p className="section-subtitle">
            Seleção de trabalhos que demonstram minhas habilidades técnicas
          </p>
        </div>

        {/* Featured Projects - Large Cards */}
        <div className="projects__featured">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="project-card project-card--featured"
            >
              <div className="project-card__image">
                <img src={project.image} alt={project.title} />
                <div className="project-card__overlay">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">
                  {project.description}
                </p>

                <div className="project-card__tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Other Projects - Compact Grid */}
        <div className="projects__grid">
          {otherProjects.map((project) => (
            <article
              key={project.id}
              className="project-card project-card--compact"
            >
              <div className="project-card__compact-header">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2V3zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7V3z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="project-card__links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>

              <div className="project-card__tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag tech-tag--small">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="projects__footer">
          <a
            href="https://github.com/danieleksantos?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary"
          >
            Ver todos os projetos no GitHub
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
