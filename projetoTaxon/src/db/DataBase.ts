import Taxon from "../model/Taxon";
import Classification from "../model/Classification";

export default class DataBase {
    private taxonDB: Taxon[] = [];
    private classifications: Classification[] = [];

    public addNewTaxon(taxon: Taxon): void {
        this.taxonDB.push(taxon);
    }

    public addClassification(classification: Classification) {
        this.classifications.push(classification);
    }

    public listAllClassifications(): string {
        return this.classifications.map(c => 
            `${c.getOrganism().getScientificName()} → ${c.getTaxon().getName()}`
        ).join("\n");
    }
}