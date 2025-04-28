import ClassificationRank from "./ClassificationRank";
import FossilRank from "./FossilRank";

export default class Taxon {
    private name!: string;
    private description!: string;
    private fossilRank?: FossilRank;
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

    public setAsFossil(rank: string, period: string): void {
        this.fossilRank = new FossilRank(rank, period);
        this.fossilRank.validateRank(rank);
    }

    public isFossil(): boolean {
        return !!this.fossilRank;
    }

    public getRank(): ClassificationRank {
        return this.fossilRank || this.rank;
    }
}