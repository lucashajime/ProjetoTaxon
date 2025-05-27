"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Taxon_1 = __importDefault(require("../model/Taxon"));
const TaxonomicRank_1 = require("../model/TaxonomicRank");
class TaxonomyController {
    constructor(repository) {
        this.repository = repository;
    }
    getNewTaxon() {
        return new Taxon_1.default("Novo Táxon", TaxonomicRank_1.TaxonomicRank.SPECIES);
    }
    listClassifications() {
        return this.repository.listAllClassifications();
    }
    addClassification(classification) {
        this.repository.addClassification(classification);
    }
    addOrganism(organism) {
        this.repository.addOrganism(organism);
    }
    addTaxon(taxon) {
        this.repository.addNewTaxon(taxon);
    }
}
exports.default = TaxonomyController;
