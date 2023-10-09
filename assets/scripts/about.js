import { sectionHeader } from "./sectionHeader.js";

// função para renderizar a seção sobre mim
export function renderAboutSection() {
	const about = document.getElementById("about");

	return (about.innerHTML = `
    ${sectionHeader("Conheça", "Sobre mim")}
    <div class="container">
      <div class="about-content">
        <div class="about-wrapper">
          <div class="about-img">
            <img src="./assets/files/images/profile.jpeg" alt="profile pic" />
          </div>
          <div class="bx-btn">
            <a href="./assets/files/cv.pdf" class="btn" download>Download CV</a>
          </div>
        </div>
        <p>
          Olá! Eu sou Thaís, desenvolvedora web fullstack apaixonada por tecnologia e educação.
          <br /><br />
          Minha formação na Driven Education me capacitou a criar soluções inovadoras usando as principais tecnologias
          do mercado. E como estou sempre em busca de novos aprendizados e desafios, atualmente também estou cursando
          Análise e Desenvolvimento de Sistemas para ampliar ainda mais minha base de conhecimento.
          <br /><br />
          Essa jornada começou quando decidi mudar da minha primeira área de formação (Licenciatura em Química) para a
          área de Tecnologia, motivada pelas possibilidades das tecnologias da informação e comunicação no setor
          educacional. Foi uma decisão desafiadora, mas também muito gratificante.
          <br /><br />
          Hoje, estou focada em aprimorar minhas habilidades e explorar novas tecnologias. Além disso, estou
          familiarizada com as melhores práticas de desenvolvimento, como Clean Code, CI/CD e metodologias ágeis.
          <br /><br />
          Se você quiser saber mais sobre o meu trabalho ou trocar uma ideia, fique à vontade para entrar em contato
          comigo e/ou baixar meu currículo!
        </p>
      </div>
    </div>
  `);
}
