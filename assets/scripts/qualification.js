import { sectionHeader } from "./sectionHeader.js";

const data = {
	education: [
		{
			date: "2023 - presente",
			title: "Análise e Desenvolvimento de Sistemas - UNINTER",
		},
		{
			date: "2022 - 2023",
			title: "Desenvolvimento Web Fullstack - Driven Education",
		},
		{
			date: "2016-2021",
			title: "Licenciatura em Química - UFRRJ",
		},
	],
	experience: [
		{
			date: "2023 - presente",
			title: "Estagiária de Desenvolvimento de Software - Investtools",
		},
		{
			date: "2023 - 2023",
			title: "Desenvolvedora Backend Júnior - Toraline",
		},
	],
};

function generateQualificationColumn(data, title) {
	return `
    <h3 class="title">${title}</h3>
    <div class="qualification-bx">
      ${data
				.map(
					({ date, title }) => `
          <div class="qualification-content">
            <div class="content">
              <div class="year">
                <i class="bx bxs-calendar"></i>
                ${date}
              </div>
              <h3>${title}</h3>
            </div>
          </div>
        `
				)
				.join("")}
    </div>
  `;
}

// função para renderizar a seção qualificações
export function renderQualificationSection() {
	const qualification = document.getElementById("qualification");

	const educationHTML = generateQualificationColumn(data.education, "Educação");
	const experienceHTML = generateQualificationColumn(data.experience, "Experiência");

	return (qualification.innerHTML = `
    ${sectionHeader("Minha jornada", "Qualificações")}
    <div class="container">
      <div class="qualification-row">
        <div class="qualification-column left">
          ${educationHTML}
        </div>
        <div class="qualification-column right">
          ${experienceHTML}
        </div>
      </div>
    </div>
  `);
}
