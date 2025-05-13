import PromptSync from "prompt-sync";
import TaxonomyController from "../controller/TaxonomyController";
import Taxon from "../model/Taxon";
import { TaxonomicRank, ValidFossil } from "../model/TaxonomicRank";

export default class TaxonRegister {
    private prompt = PromptSync();

    constructor(private controller: TaxonomyController) {}

    private showRankOptions(): void {
        console.log("\nCategorias taxonômicas disponíveis:");
        Object.values(TaxonomicRank).forEach((rank, index) => {
            console.log(`${index + 1}. ${rank}`);
        });
    }

    private showFossilRankOptions(): void {
        console.log("\nCategorias para fósseis:");
        Object.values(ValidFossil).forEach((rank, index) => {
            console.log(`${index + 1}. ${rank}`);
        });
    }

    private getRankFromInput(input: string): TaxonomicRank | undefined {
        const index = parseInt(input) - 1;
        const ranks = Object.values(TaxonomicRank);
        return ranks[index];
    }

    private getFossilRankFromInput(input: string): ValidFossil | undefined {
        const index = parseInt(input) - 1;
        const ranks = Object.values(ValidFossil);
        return ranks[index];
    }
    
    public addTaxon() {
        const taxon = this.controller.getNewTaxon();
        const name = this.prompt("\nNome do táxon (ex: Homminidae):");

        this.showRankOptions();
        const rankInput = this.prompt("Selecione a categoria:");
        const rank = this.getRankFromInput(rankInput);

        if (!rank) {
            console.log("Categoria inválida!");
            return taxon;
        }

        const isFossil = this.prompt("É um fóssil? (S/N): ").toUpperCase() === 'S';

        taxon.setName(name);
        taxon.getRank().setRank(rank);

        if (isFossil) {
            this.showFossilRankOptions();
            const fossilRankInput = this.prompt("Selecione a categoria para fóssil (número): ");
            const fossilRank = this.getFossilRankFromInput(fossilRankInput);
            
            if (!fossilRank) {
                console.log("Categoria para fóssil inválida!");
                return taxon;
            }

            const period = this.prompt("Período geológico (ex: Cretáceo): ");
            taxon.setAsFossil(fossilRank, period);
        }

        this.controller.db.addNewTaxon(taxon);
        console.log(`Táxon ${name} (${rank}) ${isFossil ? '[Fóssil]' : ''} cadastrado.`);
        return taxon;
    }
}

