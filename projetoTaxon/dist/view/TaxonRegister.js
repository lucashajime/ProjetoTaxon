"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class TaxonRegister {
    constructor(controller) {
        this.prompt = (0, prompt_sync_1.default)();
        this.controller = controller;
    }
    addTaxon() {
        const taxon = this.controller.getNewTaxon();
        const name = this.prompt("\nNome do táxon (ex: Felis catus):");
        const rank = this.prompt("Categoria (ex: Espécie):");
        taxon.setName(name);
        taxon.getRank().setRank(rank);
        this.controller.db.addNewTaxon(taxon);
        console.log(`Táxon ${name} (${rank}) cadastrado!`);
    }
}
exports.default = TaxonRegister;
