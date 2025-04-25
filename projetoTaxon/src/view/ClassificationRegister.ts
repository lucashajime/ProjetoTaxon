import PromptSync from "prompt-sync";
import TaxonomyController from "../controller/TaxonomyController";
import Classification from "../model/Classification";

export default class ClassificationRegister {
    private prompt = PromptSync();
    private controller: TaxonomyController;

    constructor(controller: TaxonomyController) {
        this.controller = controller;
    }

    public classifyOrganism(): void {
        console.log("\n=== Classificar Organismo ===");

        console.log("Organismos disponíveis: ", this.controller.db.listOrganisms());
        console.log("Táxons disponíveis: ", this.controller.db.listTaxa());

        const organismId = parseInt(this.prompt("ID do organismo: "));
        const taxonId = parseInt(this.prompt("ID do táxon: "));

        const organism = this.controller.db.getOrganismById(organismId);
        const taxon = this.controller.db.getTaxonById(taxonId);

        if (organism && taxon) {
            const classification = new Classification(taxon, organism);
            this.controller.db.addClassification(classification);
            console.log("Classificação registrada.");
        } else {
            console.log("IDs inválidos.");
        }
    }
}