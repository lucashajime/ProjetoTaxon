"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class TaxonRegister {
    constructor(controller) {
        this.controller = controller;
        this.prompt = (0, prompt_sync_1.default)();
    }
    addTaxon() {
        const taxon = this.controller.getNewTaxon();
        const name = this.prompt("\nNome do táxon (ex: Homminidae):");
        const rank = this.prompt("Categoria (ex: Espécie):");
        const isFossil = this.prompt("É um fóssil? (S/N): ").toUpperCase() === 'S';
        taxon.setName(name);
        taxon.getRank().setRank(rank);
        if (isFossil) {
            const period = this.prompt("Período geológico (ex: Cretáceo): ");
            taxon.setAsFossil(rank, period);
        }
        else {
            taxon.getRank().setRank(rank);
        }
        this.controller.db.addNewTaxon(taxon);
        console.log(`Táxon ${name} (${rank}) ${isFossil ? '[Fóssil]' : ''} cadastrado.`);
        return taxon;
    }
}
exports.default = TaxonRegister;
