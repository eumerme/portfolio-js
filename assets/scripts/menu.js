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

function toglleMenu() {
	toggleActive(menuIcon, CLOSE_ICON);
	toggleActive(navbar, ACTIVE);
	toggleActive(header, ACTIVE);
	toggleActive(modal, ACTIVE);
}

// Alterna o estado do menu (aberto/fechado) ao clicar no ícone de menu
menuIcon.addEventListener("click", () => toglleMenu());

// Fecha o menu se o usuário clicar fora do model do menu ou em algum link
document.addEventListener("click", function (event) {
	const isMenuIcon = event.target === menuIcon;
	if (!isMenuIcon) {
		const isInsideModal = modal.contains(event.target);
		const isInsideHeader = header.contains(event.target);
		if (isInsideModal || isInsideHeader) toglleMenu();
	}
});
