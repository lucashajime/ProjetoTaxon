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
    toString() {
        const org = this.organism;
        const taxon = this.taxon;
        const fossilTag = taxon.isFossil() ? " [fóssil]" : "";
        const typeTag = org.getType() ? ` (${org.getType()})` : '';
        return `${org.getScientificName()}${typeTag} → ${taxon.getName()} (${taxon.getRank().getRank()})${fossilTag}`;
    }
}
exports.default = Classification;
