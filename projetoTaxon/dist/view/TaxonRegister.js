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
    showRankOptions() {
        console.log("\nCategorias taxonômicas disponíveis:");
        Object.values(TaxonomicRank_1.TaxonomicRank).forEach((rank, index) => {
            console.log(`${index + 1}. ${rank}`);
        });
    }
    showFossilRankOptions() {
        console.log("\nCategorias para fósseis:");
        Object.values(TaxonomicRank_1.ValidFossil).forEach((rank, index) => {
            console.log(`${index + 1}. ${rank}`);
        });
    }
    getRankFromInput(input) {
        const index = parseInt(input) - 1;
        const ranks = Object.values(TaxonomicRank_1.TaxonomicRank);
        return ranks[index];
    }
    getFossilRankFromInput(input) {
        const index = parseInt(input) - 1;
        const ranks = Object.values(TaxonomicRank_1.ValidFossil);
        return ranks[index];
    }
    addTaxon() {
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
exports.default = TaxonRegister;
