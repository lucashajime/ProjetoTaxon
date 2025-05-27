import Taxon from "../model/Taxon";
import { IDataRepository } from "../interface/IDataRepository";
import { TaxonomicRank } from "../model/TaxonomicRank";
import Classification from "../model/Classification";
import Organism from "../model/Organism";

export default class TaxonomyController {
    constructor(public repository: IDataRepository) {}

    public getNewTaxon(): Taxon {
        return new Taxon("Novo Táxon", TaxonomicRank.SPECIES);
    }

    public listClassifications(): string {
        return this.repository.listAllClassifications();
    }

    public addClassification(classification: Classification): void {
        this.repository.addClassification(classification);
    }

    public addOrganism(organism: Organism): void {
        this.repository.addOrganism(organism);
    }

    public addTaxon(taxon: Taxon): void {
        this.repository.addNewTaxon(taxon);
    }
}