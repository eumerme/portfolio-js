import { renderAboutSection } from "./about.js";
import { renderContactSection } from "./contact.js";
import { renderPortfolioSection } from "./portfolio.js";
import { renderQualificationSection } from "./qualification.js";
import { renderSkillsSection } from "./skills.js";

(function render() {
	renderAboutSection();
	renderPortfolioSection();
	renderQualificationSection();
	renderSkillsSection();
	renderContactSection();
})();
