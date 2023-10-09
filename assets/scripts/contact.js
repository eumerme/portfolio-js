import { sectionHeader } from "./sectionHeader.js";

// Função auxiliar para gerar o bloco de informações de contato
function generateContactInfo() {
	return `
    <div class="mailto">
      <i class="bx bx-mail-send"></i>
      <h4>thaisnl.dev@gmail.com</h4>
      <a href="mailto:thaisnl.dev@gmail.com" target="_blank" rel="noreferrer">
        Mande uma mensagem direto clicando aqui!
      </a>

      <div class="home-social-media">
        <a href="https://github.com/eumerme" target="_blank">
          <i class="bx bxl-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/euthaislopes/" target="_blank">
          <i class="bx bxl-linkedin"></i>
        </a>
      </div>
    </div>
  `;
}

// Função auxiliar para gerar o formulário de contato
function generateContactForm() {
	return `
    <form action="#">
      <div class="form-field">
        <label>Nome</label>
        <input type="text" required />
        <span class="focus"></span>
      </div>

      <div class="form-field">
        <label>Email</label>
        <input type="text" required />
        <span class="focus"></span>
      </div>

      <div class="form-field">
        <label>Mensagem</label>
        <textarea name="" id="" cols="30" rows="7" required></textarea>
        <span class="focus"></span>
      </div>

      <div class="bx-btn btn">
        <button type="submit" class="btn">Enviar</button>
      </div>
    </form>
  `;
}

// Função para renderizar a seção de contato
export function renderContactSection() {
	const contact = document.getElementById("contact");

	const contactInfoHTML = generateContactInfo();
	const contactFormHTML = generateContactForm();

	return (contact.innerHTML = `
    ${sectionHeader("Entre em contato", "Vamos conversar")}
    <div class="container contact-content">
      ${contactInfoHTML}
      ${contactFormHTML}
    </div>
  `);
}
