"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClassificationRank_1 = __importDefault(require("./ClassificationRank"));
class FossilRank extends ClassificationRank_1.default {
    constructor(rank, period) {
        super();
        this.setRank(rank);
        this.geologicalPeriod = period;
    }
    validateRank(rank) {
        super.validateRank(rank);
        if (!["Espécie", "Gênero", "Família"].includes(rank)) {
            throw new Error(`A categoria "${rank}" de fóssil é inválida. Use Família, Gênero ou Espécie.`);
        }
    }
    getPeriod() {
        return this.geologicalPeriod;
    }
}
exports.default = FossilRank;
