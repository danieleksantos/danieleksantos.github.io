import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__greeting">Olá, eu sou</p>
          <h1 className="hero__name">
            Daniele K Santos
            <span className="hero__cursor"></span>
          </h1>
          <h2 className="hero__role">Desenvolvedora Web | Front-end </h2>
          <p className="hero__description">
            Especializada em criar experiências web modernas e escaláveis com
            React, Node.js e PostgreSQL
          </p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              Ver Projetos
            </a>
            <a href="#contact" className="btn btn--secondary">
              Contato
            </a>
          </div>

          <div className="hero__info">
            <div className="hero__info-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  fill="currentColor"
                />
              </svg>
              <span>Piracicaba, SP</span>
            </div>
            <div className="hero__info-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="10" cy="10" r="3" fill="#10b981" />
              </svg>
              <span>Disponível para projetos</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card">
            <div className="card__header">
              <div className="card__dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="card__content">
              <div className="code-line">
                <span className="code-keyword">const</span>
                <span className="code-variable"> developer</span>
                <span className="code-operator"> = </span>
                <span className="code-bracket">{'{'}</span>
              </div>
              <div className="code-line code-indent">
                <span className="code-property">name:</span>
                <span className="code-string">"Daniele"</span>
                <span className="code-operator">,</span>
              </div>
              <div className="code-line code-indent">
                <span className="code-property">skills:</span>
                <span className="code-bracket">[</span>
                <span className="code-string">"React"</span>
                <span className="code-operator">, </span>
                <span className="code-string">"Node"</span>
                <span className="code-bracket">]</span>
                <span className="code-operator">,</span>
              </div>
              <div className="code-line code-indent">
                <span className="code-property">passion:</span>
                <span className="code-string">
                  "build web responsive applications"
                </span>
              </div>
              <div className="code-line">
                <span className="code-bracket">{'}'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
