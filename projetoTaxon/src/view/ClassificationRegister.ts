import PromptSync from "prompt-sync";
import TaxonomyController from "../controller/TaxonomyController";
import Classification from "../model/Classification";
import Organism from "../model/Organism";
import Taxon from "../model/Taxon";
import ClassificationError from "../model/ClassificationError";

export default class ClassificationRegister {
    private prompt = PromptSync();

    constructor(private controller: TaxonomyController) {
    }

    public classifyOrganism(organism: Organism, taxon: Taxon): void {
        try {
            if (!organism || !taxon) {
                throw new ClassificationError(
                    organism?.getScientificName() || 'Desconhecido',
                    "Organismo e táxon são obriatórios para classificação"
                );
            }

            if (!organism.getScientificName()) {
                throw new ClassificationError(
                    'Desconhecido',
                    "Organismo deve ter um nome científico válido"
                );
            }

            if (!taxon.getName()) {
                throw new ClassificationError(
                    organism.getScientificName(),
                    "Táxon deve ter um nome válido"
                );
            }

            const classification = new Classification(taxon, organism);
            this.controller.addClassification(classification);
            
            console.log(" Classificação registrada: " + 
                `${organism.getScientificName()} → ${taxon.getName()}` +
                `${taxon.isFossil() ? ' [fóssil]' : ''}`
            );
            
        } catch (error) {
            if (error instanceof ClassificationError) {
                console.error(error.getDetails());
                throw error;
            } else {
                const errorMessage = error instanceof Error ? error.message: String(error);
                const classificationError = new ClassificationError(
                    organism?.getScientificName() || 'Desconhecido',
                    `Erro inesperado: ${errorMessage}`,
                    error
                );
                console.error(classificationError.getDetails());
                throw classificationError;
            }
        }
    }
}