const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");
const modal = document.querySelector(".modal");
const ACTIVE = "active";
const CLOSE_ICON = "bx-x";

// Função para alternar a classe "active" em elementos
function toglleMenu() {
	const isModalOpen = modal.classList.contains("modal") && modal.classList.contains(ACTIVE);
	if (!isModalOpen) {
		modal.classList.add(ACTIVE);
	} else {
		//atrasa a transição ao fechar o modal
		modal.style.transition = "0.8s all ease-in-out";
		modal.style.transform = "translateY(-100%)";
		modal.style.opacity = "0";
		setTimeout(() => {
			modal.classList.remove(ACTIVE);
			modal.style.transform = "translateY(0)";
			modal.style.opacity = "1";
		}, 800);
	}

	menuIcon.classList.toggle(CLOSE_ICON);
	navbar.classList.toggle(ACTIVE);
	header.classList.toggle(ACTIVE);
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
