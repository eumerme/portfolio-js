const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");
const modal = document.querySelector(".modal");
const ACTIVE = "active";
const CLOSE_ICON = "bx-x";

// Função para alternar a classe "active" em elementos
function toggleActive(element, _class) {
	element.classList.toggle(_class);
}

// Alterna o estado do menu (aberto/fechado) ao clicar no ícone de menu
menuIcon.addEventListener("click", () => {
	toggleActive(menuIcon, CLOSE_ICON);
	toggleActive(navbar, ACTIVE);
	toggleActive(header, ACTIVE);
	toggleActive(modal, ACTIVE);
});

// Fecha o menu se o usuário clicar fora da navbar
document.addEventListener("click", function (event) {
	const isInsideNavbar = navbar.contains(event.target);
	const isInsideMenuIcon = menuIcon.contains(event.target);

	if (!isInsideNavbar && !isInsideMenuIcon) {
		toggleActive(menuIcon, CLOSE_ICON);
		toggleActive(navbar, ACTIVE);
		toggleActive(header, ACTIVE);
		toggleActive(modal, ACTIVE);
	}
});
