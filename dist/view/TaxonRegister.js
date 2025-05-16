"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const TaxonomicRank_1 = require("../model/TaxonomicRank");
class TaxonRegister {
    constructor(controller) {
        this.controller = controller;
        this.prompt = (0, prompt_sync_1.default)();
    }
    showTaxonomicRanks(options) {
        console.log("\nCategorias taxonômicas disponíveis:");
        options.forEach((rank, index) => {
            console.log(`${index + 1}. ${rank}`);
        });
    }
    addTaxon() {
        const taxon = this.controller.getNewTaxon();
        const name = this.prompt("\nNome do táxon (ex: Homminidae):");
        const isFossil = this.prompt("É um fóssil? (S/N): ").toUpperCase() === 'S';
        let rank;
        if (isFossil) {
            this.showTaxonomicRanks(Object.values(TaxonomicRank_1.ValidFossil));
            const fossilRankInput = this.prompt("Selecione a categoria para fóssil (número): ");
            rank = Object.values(TaxonomicRank_1.ValidFossil)[parseInt(fossilRankInput) - 1];
            const period = this.prompt("Período geológico (ex: Cretáceo): ");
            taxon.setAsFossil(rank, period);
        }
        else {
            this.showTaxonomicRanks(Object.values(TaxonomicRank_1.TaxonomicRank));
            const rankInput = this.prompt("Selecione a categoria (número): ");
            rank = Object.values(TaxonomicRank_1.TaxonomicRank)[parseInt(rankInput) - 1];
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
exports.default = TaxonRegister;
