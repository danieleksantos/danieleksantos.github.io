<div align="center">
  <img src="https://github.com/user-attachments/assets/6a635d68-274b-411c-b135-46af3b6c6fea" alt="Portfolio Daniele K. Santos" width="60"/>

  # Daniele K. Santos - Portfolio

  <p>
<strong>Desenvolvedora FullStack</strong>  </p>

<p>
    <img src="https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind">
  <img src="https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux">
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
</p>
</div>


## Live Demo

Acesse o portfólio online:  
👉 **[danieleksantos.vercel.app](https://danieleksantos.vercel.app)**


## Decisões Técnicas e Arquitetura

Este repositório serve como documentação viva das minhas competências técnicas. Abaixo, detalho algumas das práticas aplicadas:

### 1. Estado Global com Redux Toolkit
Utilizei o **Redux Toolkit** para gerenciar o estado global da aplicação, especificamente para o controle do tema (Dark/Light Mode). Esta decisão garante que a preferência do usuário seja propagada de forma consistente por todos os componentes, evitando o *prop drilling* e facilitando a manutenção.

### 2. Acessibilidade (A11y) como Prioridade
O projeto foi construído pensando em inclusão:
- **Navegação Semântica:** Uso rigoroso de tags HTML5 (`<header>`, `<main>`, `<section>`, `<nav>`).
- **Atributos ARIA:** Implementação de `aria-expanded` para menus, `aria-label` para elementos interativos e `aria-pressed` para o toggle de tema.
- **Gerenciamento de Foco:** Navegação por teclado otimizada e controle de foco no menu mobile.

### 3. UI/UX e Performance
- **Sticky Navbar:** Implementação de um cabeçalho fixo com efeito *backdrop-blur*.
- **Scroll Suave Compensado:** Lógica customizada para que a rolagem âncora considere a altura da Navbar, garantindo que o título da seção nunca seja sobreposto.
- **Otimização:** Bundle otimizado e carregamento eficiente de recursos via Vercel.

## Estrutura de Pastas (Arquitetura Modular)

Seguindo padrões de **Clean Code**, a estrutura do projeto é organizada por responsabilidades:

```text
src/
├── components/   # Componentes atômicos e reutilizáveis (Hero, Navbar, ProjectCard)
├── data/         # Arquivos JSON para consumo de dados dinâmicos
├── store/        # Configuração do Redux (Slices e Hooks customizados)
├── types/        # Definições de interfaces e tipos TypeScript
├── App.tsx       # Componente principal e orquestração de layout
└── main.tsx      # Ponto de entrada da aplicação
```

## Boas Práticas Aplicadas
- SOLID: Princípio de Responsabilidade Única (SRP) aplicado na extração de componentes.
- TypeScript: Tipagem estrita para reduzir bugs em tempo de execução e melhorar a experiência de desenvolvimento.
- Mobile-First: Design responsivo fluido utilizando utilitários do Tailwind CSS.

<br />

## Preview
<p align="center">
<img src="https://github.com/user-attachments/assets/5873305c-77b1-45dc-aab9-8a570d845960" alt="Desktop Preview" width="750" />
</p>

<p align="center">
<img src="https://github.com/user-attachments/assets/258eabee-b0d1-4cea-8d76-dc8cc67e0155" alt="Mobile Light Mode" width="220" />
&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://github.com/user-attachments/assets/c7a482ad-4a21-4f77-b4c9-7fcb214f3f50" alt="Mobile Dark Mode" width="220" />
</p>

<br />
<hr />

<div align="center">
<p>Desenvolvido por <strong> Daniele K. Santos</strong></p>

<p>
<a href="https://www.linkedin.com/in/danieleksantos/">
<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>
</div>
