"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Organism {
    constructor(scientificName) {
        this.scientificName = scientificName;
    }
    getScientificName() {
        return this.scientificName;
    }
    setScientificName(name) {
        this.scientificName = name;
    }
}
exports.default = Organism;
