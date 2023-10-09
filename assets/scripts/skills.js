import { sectionHeader } from "./sectionHeader.js";

const data = [
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
		alt: "javascript icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
		alt: "react icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
		alt: "node icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
		alt: "mongodb icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
		alt: "postgresql icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
		alt: "mysql icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
		alt: "redis icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
		alt: "typescript icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
		alt: "jest icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg",
		alt: "docker icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
		alt: "aws icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg",
		alt: "ruby icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg",
		alt: "rails icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grails/grails-plain.svg",
		alt: "grails icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/groovy/groovy-original.svg",
		alt: "groovy icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
		alt: "html icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
		alt: "css icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
		alt: "express icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
		alt: "git icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg",
		alt: "heroku icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
		alt: "vscode icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
		alt: "figma icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
		alt: "jira icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
		alt: "bitbucket icon",
	},
	{
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
		alt: "github icon",
	},
];

// função para renderizar a seção habilidades
export function renderSkillsSection() {
	const skills = document.getElementById("skills");
	const imagesHTML = data.map(({ url, alt }) => `<img src="${url}" alt="${alt}" />`).join("");

	return (skills.innerHTML = `
    ${sectionHeader("Meu nível técnico", "Linguagens & Tecnologias")}
    <div class="container skills-content">
      <div class="tech">
        ${imagesHTML}
      </div>
      <div class="title">
        Níveis
        <h2>Básico</h2>
        e
        <h2>Médio</h2>
      </div>
    </div>
  `);
}
