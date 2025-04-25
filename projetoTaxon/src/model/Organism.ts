export default class Organism {
    constructor(
        private scientificName: string
    ) {}


    public getScientificName(): string {
        return this.scientificName;
    }

    public setScientificName(name: string): void {
        this.scientificName = name;
    }
}