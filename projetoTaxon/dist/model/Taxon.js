"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClassificationRank_1 = __importDefault(require("./ClassificationRank"));
const FossilRank_1 = __importDefault(require("./FossilRank"));
const TaxonBase_1 = require("./TaxonBase");
const TaxonomicRank_1 = require("./TaxonomicRank");
class Taxon extends TaxonBase_1.TaxonBase {
    constructor(name = "Novo Táxon", rank = TaxonomicRank_1.TaxonomicRank.SPECIES) {
        super(name, new ClassificationRank_1.default());
        this.rank.setRank(rank);
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
    getDetails() {
        return `${this.name} (${this.getRank().getRank()})` +
            `${this.isFossil() ? ' [Fóssil]' : ''}`;
    }
}
exports.default = Taxon;
