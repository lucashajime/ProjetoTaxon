"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Organism {
    constructor(scientificName, type) {
        this.scientificName = scientificName;
        this.type = type;
    }
    getScientificName() {
        return this.scientificName;
    }
    setScientificName(name) {
        this.scientificName = name;
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    classify(taxon) {
        console.log(`${this.scientificName} classificado como ${taxon.getName()}`);
    }
}
exports.default = Organism;
