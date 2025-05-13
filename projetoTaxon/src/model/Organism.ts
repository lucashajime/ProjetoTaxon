import { OrganismType } from "./TaxonomicRank";

export default class Organism {
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
}