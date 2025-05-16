import PromptSync from "prompt-sync";
import TaxonomyController from "../controller/TaxonomyController";
import Taxon from "../model/Taxon";
import { TaxonomicRank, ValidFossil } from "../model/TaxonomicRank";

export default class TaxonRegister {
    private prompt = PromptSync();

    constructor(private controller: TaxonomyController) {}

    private showTaxonomicRanks(options: TaxonomicRank[]): void {
        console.log("\nCategorias taxonômicas disponíveis:");
        options.forEach((rank, index) => {
            console.log(`${index + 1}. ${rank}`);
        });
    }
    
    public addTaxon() {
        const taxon = this.controller.getNewTaxon();
        const name = this.prompt("\nNome do táxon (ex: Homminidae):");
        const isFossil = this.prompt("É um fóssil? (S/N): ").toUpperCase() === 'S';

        let rank: TaxonomicRank;

        if (isFossil) {
            this.showTaxonomicRanks(Object.values(ValidFossil));
            const fossilRankInput = this.prompt("Selecione a categoria para fóssil (número): ");
            rank = Object.values(ValidFossil)[parseInt(fossilRankInput) - 1];

            const period = this.prompt("Período geológico (ex: Cretáceo): ");
            taxon.setAsFossil(rank, period);
        } else {
            this.showTaxonomicRanks(Object.values(TaxonomicRank));
            const rankInput = this.prompt("Selecione a categoria (número): ");
            rank = Object.values(TaxonomicRank)[parseInt(rankInput) - 1];
        }

        if (!rank) {
            console.log("Categoria inválida!");
            return taxon;
        }

        taxon.setName(name);
        taxon.getRank().setRank(rank);

        this.controller.db.addNewTaxon(taxon);
        console.log(`Táxon ${name} (${rank}) ${isFossil ? '[Fóssil]' : ''} cadastrado.`);
        return taxon;
    }
}

