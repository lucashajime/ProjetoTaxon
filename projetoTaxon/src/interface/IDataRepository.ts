import Classification from "../model/Classification";
import Organism from "../model/Organism";
import Taxon from "../model/Taxon";

export interface IDataRepository {
    saveTaxon(taxon: Taxon): void;
    addNewTaxon(taxon: Taxon): void;
    addOrganism(organism: Organism): void;
    addClassification(classification: Classification): void;
    listAllClassifications(): string;
    listOrganisms(): string;
    listTaxa(): string;
    getOrganismById(id: number): Organism | undefined;
    getTaxonById(id: number): Taxon | undefined;
}