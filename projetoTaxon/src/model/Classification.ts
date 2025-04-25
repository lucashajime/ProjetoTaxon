import Taxon from "./Taxon";
import Organism from "./Organism";

export default class Classification {
    constructor(
        private taxon: Taxon,
        private organism: Organism
    ) {}

    public getTaxon(): Taxon {
        return this.taxon;
    }

    public setTaxon(taxon: Taxon): void {
        this.taxon = taxon;
    }

    public getOrganism(): Organism {
        return this.organism;
    }

    public setOrganism(organism: Organism): void {
        this.organism = organism;
    }
}