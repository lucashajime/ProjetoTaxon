"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClassificationRank_1 = __importDefault(require("./ClassificationRank"));
const FossilRank_1 = __importDefault(require("./FossilRank"));
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
    setAsFossil(rank, period) {
        this.fossilRank = new FossilRank_1.default(rank, period);
        this.fossilRank.validateRank(rank);
    }
    isFossil() {
        return !!this.fossilRank;
    }
    getRank() {
        return this.fossilRank || this.rank;
    }
}
exports.default = Taxon;
