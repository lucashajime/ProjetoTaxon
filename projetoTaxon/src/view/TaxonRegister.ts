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
        const name = this.prompt("\nNome do táxon (ex: Felis catus):");
        const rank = this.prompt("Categoria (ex: Espécie):");

        taxon.setName(name);
        taxon.getRank().setRank(rank);

        this.controller.db.addNewTaxon(taxon);
        console.log(`Táxon ${name} (${rank}) cadastrado!`);
    }
}

