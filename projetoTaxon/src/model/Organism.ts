import { IClassifiable } from "../interface/IClassifiable";
import Taxon from "./Taxon";
import { OrganismType } from "./TaxonomicRank";

export default class Organism implements IClassifiable{
    constructor(
        private scientificName: string,
        private type?: OrganismType
    ) {}


    public getScientificName(): string {
        return this.scientificName;
    }

    public setScientificName(name: string): void {
        this.scientificName = name;
    }

     public getType(): OrganismType | undefined {
        return this.type;
    }

    public setType(type: OrganismType): void {
        this.type = type;
    }

    public classify(taxon: Taxon): void {
        console.log(`${this.scientificName} classificado como ${taxon.getName()}`);
    }
}