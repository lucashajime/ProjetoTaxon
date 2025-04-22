"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataBase {
    constructor() {
        this.taxonDB = [];
        this.classifications = [];
    }
    addNewTaxon(taxon) {
        this.taxonDB.push(taxon);
    }
    addClassification(classification) {
        this.classifications.push(classification);
    }
    listAllClassifications() {
        return this.classifications.map(c => `${c.getOrganism().getScientificName()} → ${c.getTaxon().getName()}`).join("\n");
    }
}
exports.default = DataBase;
