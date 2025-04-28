import PromptSync from "prompt-sync";
import TaxonomyController from "../controller/TaxonomyController";
import Taxon from "../model/Taxon";

export default class TaxonRegister {
    private prompt = PromptSync();
    private controller: TaxonomyController;

    constructor(controller: TaxonomyController) {
        this.controller = controller;
    }

    public addTaxon() {
        const taxon = this.controller.getNewTaxon();
        const name = this.prompt("\nNome do táxon (ex: Homminidae):");
        const rank = this.prompt("Categoria (ex: Espécie):");
        const isFossil = this.prompt("É um fóssil? (S/N): ").toUpperCase() === 'S';

        taxon.setName(name);
        taxon.getRank().setRank(rank);

        if (isFossil) {
            const period = this.prompt("Período geológico (ex: Cretáceo): ");
            taxon.setAsFossil(rank, period);
        } else {
            taxon.getRank().setRank(rank);
        }

        this.controller.db.addNewTaxon(taxon);
        console.log(`Táxon ${name} (${rank}) ${isFossil ? '[Fóssil]' : ''} cadastrado.`);
    }
}

