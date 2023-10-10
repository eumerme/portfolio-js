import { sectionHeader } from "./sectionHeader.js";

const data = [
	{
		url: "https://github.com/eumerme/projeto17-linkr-front",
		title: "Linkr",
		image: "./assets/files/images/linkr.png",
		alt: "linkr app",
	},
	{
		url: "https://github.com/eumerme/projeto13-mywallet-front",
		title: "My Wallet",
		image: "./assets/files/images/mywallet.png",
		alt: "mywallet app",
	},
	{
		url: "https://github.com/eumerme/projeto10-trackit",
		title: "Track it",
		image: "./assets/files/images/trackit.png",
		alt: "trackit app",
	},
	{
		url: "https://github.com/eumerme/projeto5-batepapouol",
		title: "Bate papo Uol",
		image: "./assets/files/images/batepapouol.png",
		alt: "batepapouol app",
	},
	{
		url: "https://github.com/eumerme/projeto8-zaprecall",
		title: "ZapRecall",
		image: "./assets/files/images/zaprecall.png",
		alt: "zaprecall app",
	},
	{
		url: "https://github.com/eumerme/projeto4-parrotscardgame",
		title: "Parrots Card Game",
		image: "./assets/files/images/parrotscard.png",
		alt: "parrots card game app",
	},
];

function generatePortfolioDiv() {
	return data
		.map(
			({ title, url, image, alt }) => `
          <div class="bx-portfolio">
            <img src=${image} alt=${alt} />
            <div class="layer-portfolio">
              <h4>${title}</h4>
              <a href=${url} target="_blank">
                <i class="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        `
		)
		.join("");
}

// função para renderizar a seção portfólio
export function renderPortfolioSection() {
	const portfolio = document.getElementById("portfolio");

	return (portfolio.innerHTML = `
    ${sectionHeader("Trabalhos recentes", "Portfólio")}
    <div class="container">
			<div class="portfolio-content">
				${generatePortfolioDiv()}
			</div>
    </div>
  `);
}
