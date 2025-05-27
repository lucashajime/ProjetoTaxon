import PromptSync from "prompt-sync";
import TaxonomyController from "../controller/TaxonomyController";
import Organism from "../model/Organism";
import { OrganismType } from "../model/TaxonomicRank";

export default class OrganismRegister {
    private prompt = PromptSync();

    constructor(private controller: TaxonomyController) {}

    private showOrganismTypes(): void {
        console.log("\nTipos de organismos disponíveis:");
        Object.values(OrganismType).forEach((type, index) => {
            console.log(`${index + 1}. ${type}`);
        });
    }

    private getTypeFromInput(input: string): OrganismType | undefined {
        const index = parseInt(input) - 1;
        const types = Object.values(OrganismType);
        return types[index];
    }

    public addOrganism(): Organism {
        console.log("\n=== Cadastro de Organismo ===");
        const scientificName = this.prompt("Nome científico: ");
        
        this.showOrganismTypes();
        const typeInput = this.prompt("Selecione o tipo (número): ");
        const type = this.getTypeFromInput(typeInput);

        if (!type) {
            console.log("Tipo inválido!");
            return new Organism(scientificName);
        }

        const organism = new Organism(scientificName, type);
        this.controller.addOrganism(organism);

        console.log(`Organismo "${scientificName}" (${type}) cadastrado!`);
        return organism;
    }
}