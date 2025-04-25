"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Classification {
    constructor(taxon, organism) {
        this.taxon = taxon;
        this.organism = organism;
    }
    getTaxon() {
        return this.taxon;
    }
    setTaxon(taxon) {
        this.taxon = taxon;
    }
    getOrganism() {
        return this.organism;
    }
    setOrganism(organism) {
        this.organism = organism;
    }
}
exports.default = Classification;
