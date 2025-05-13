"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClassificationRank_1 = __importDefault(require("./ClassificationRank"));
const FossilRank_1 = __importDefault(require("./FossilRank"));
const TaxonomicRank_1 = require("./TaxonomicRank");
class Taxon {
    constructor() {
        this.rank = new ClassificationRank_1.default();
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }
    setAsFossil(rankInput, period) {
        const rank = this.convertToFossilRank(rankInput);
        if (!rank) {
            throw new Error("Categoria fóssil inválida. Use Família, Gênero ou Espécie.");
        }
        this.fossilRank = new FossilRank_1.default(rank, period);
        this.fossilRank.validateRank(rank);
    }
    convertToFossilRank(rankInput) {
        const formattedInput = rankInput.charAt(0).toUpperCase() + rankInput.slice(1).toLowerCase();
        for (const [key, value] of Object.entries(TaxonomicRank_1.ValidFossil)) {
            if (value === formattedInput) {
                return value;
            }
        }
        return undefined;
    }
    isFossil() {
        return !!this.fossilRank;
    }
    getRank() {
        return this.fossilRank || this.rank;
    }
}
exports.default = Taxon;
