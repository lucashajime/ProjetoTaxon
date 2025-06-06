import PromptSync from "prompt-sync";
import TaxonomyController from "../controller/TaxonomyController";
import Classification from "../model/Classification";
import Organism from "../model/Organism";
import Taxon from "../model/Taxon";

export default class ClassificationRegister {
    private prompt = PromptSync();

    constructor(private controller: TaxonomyController) {
    }

    public classifyOrganism(organism: Organism, taxon: Taxon): void {
        try {
            const classification = new Classification(taxon, organism);
            this.controller.addClassification(classification);

            console.log("✅ Classificação registrada: " + 
                `${organism.getScientificName()} → ${taxon.getName()}` +
                `${taxon.isFossil() ? ' [fóssil]' : ''}`
            );
        } catch (error) {
            console.log(`Falha ao classificar ${organism.getScientificName()}:`, 
            error instanceof Error ? error.message : String(error)
            );
        }
    }
}