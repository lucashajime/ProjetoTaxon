import Taxon from "../model/Taxon";

export interface IClassifiable {
    getScientificName(): string;
    classify(taxon: Taxon): void;
}