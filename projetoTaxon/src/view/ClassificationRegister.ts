import PromptSync from "prompt-sync";
import TaxonomyController from "../controller/TaxonomyController";
import Classification from "../model/Classification";
import Organism from "../model/Organism";
import Taxon from "../model/Taxon";

export default class ClassificationRegister {
    private prompt = PromptSync();
    private controller: TaxonomyController;

    constructor(controller: TaxonomyController) {
        this.controller = controller;
    }

    public classifyOrganism(organism: Organism, taxon: Taxon): void {
        try {
            const classification = new Classification(taxon, organism);
            this.controller.db.addClassification(classification);

            console.log("✅ Classificação registrada: " + 
                `${organism.getScientificName()} → ${taxon.getName()}` +
                `${taxon.isFossil() ? ' [fóssil]' : ''}`
            );
        } catch (error) {
            console.log("Erro na classificação: ");
        }
    }
}