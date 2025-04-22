import ClassificationRank from "./ClassificationRank";

export default class Taxon {
    private name!: string;
    private description!: string;
    public rank: ClassificationRank = new ClassificationRank();
    
    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getRank(): ClassificationRank {
        return this.rank;
    }
}