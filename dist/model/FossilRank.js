"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClassificationRank_1 = __importDefault(require("./ClassificationRank"));
const TaxonomicRank_1 = require("./TaxonomicRank");
class FossilRank extends ClassificationRank_1.default {
    constructor(rank, period) {
        super();
        super.setRank(rank);
        this.geologicalPeriod = period;
    }
    /*Sobrescrita*/
    validateRank(rank) {
        if (!Object.values(TaxonomicRank_1.ValidFossil).includes(rank)) {
            throw new Error(`A categoria "${rank}" de fóssil é inválida. Use Família, Gênero ou Espécie.`);
        }
    }
    getRank() {
        return super.getRank();
    }
    getPeriod() {
        return this.geologicalPeriod;
    }
}
exports.default = FossilRank;
