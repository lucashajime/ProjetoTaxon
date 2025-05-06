import PromptSync from "prompt-sync";
import TaxonomyController from "../controller/TaxonomyController";
import Organism from "../model/Organism";

export default class OrganismRegister {
    private prompt = PromptSync();
    private controller: TaxonomyController;

    constructor(controller: TaxonomyController) {
        this.controller = controller;
    }

    public addOrganism(): Organism {
        console.log("\n=== Cadastro de Organismo ===");
        const scientificName = this.prompt("Nome científico: ");

        const organism = new Organism(scientificName);
        this.controller.db.addOrganism(organism);

        console.log(`Organismo "${scientificName}" cadastrado!`);
        return organism;
    }
}