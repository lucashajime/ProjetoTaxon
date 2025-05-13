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

    public toString(): string {
        const org = this.organism;
        const taxon = this.taxon;
        const fossilTag = taxon.isFossil() ? " [fóssil]" : "";
        const typeTag = org.getType() ? ` (${org.getType()})` : '';
        
        return `${org.getScientificName()}${typeTag} → ${taxon.getName()} (${taxon.getRank().getRank()})${fossilTag}`;
    }
}