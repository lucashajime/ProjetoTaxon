export default class Organism {
    private scientificName!: string;

    public getScientificName(): string {
        return this.scientificName;
    }

    public setScientificName(name: string): void {
        this.scientificName = name;
    }
}