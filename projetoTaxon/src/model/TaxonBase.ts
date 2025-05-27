import ClassificationRank from "./ClassificationRank";

export abstract class TaxonBase {
    constructor(
        public name: string, 
        public rank: ClassificationRank) {
    }
  
    public abstract getRank(): ClassificationRank;
    public abstract getDetails(): string;
}