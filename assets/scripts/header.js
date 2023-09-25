const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");
const NAV_HEIGHT = 80;

// Função para adicionar a classe "active" ao link de navegação correspondente à seção visível
function setActiveLink() {
	const fromTop = window.scrollY + NAV_HEIGHT;

	sections.forEach((section) => {
		const offsetTop = section.offsetTop;
		const offsetHeight = section.offsetHeight;
		const isSectionAboveViewport = offsetTop <= fromTop;
		const isSectionBelowViewport = offsetTop + offsetHeight > fromTop;

		if (isSectionAboveViewport && isSectionBelowViewport) {
			const id = section.getAttribute("id");

			navLinks.forEach((link) => {
				link.classList.remove("active");

				const isLinkForCurrentSection = link.getAttribute("href").slice(1) === id;
				if (isLinkForCurrentSection) link.classList.add("active");
			});
		}
	});
}

// Função para atualizar a cor de fundo da barra de navegação
function updateHeaderBackground() {
	const header = document.querySelector(".header");
	const hasScrolledPastHeader = window.scrollY >= NAV_HEIGHT;
	header.classList.toggle("sticky", hasScrolledPastHeader);
}

// Chama as funções quando a página é carregada e quando ocorre uma rolagem
window.addEventListener("load", setActiveLink);
window.addEventListener("scroll", () => {
	setActiveLink();
	updateHeaderBackground();
});
