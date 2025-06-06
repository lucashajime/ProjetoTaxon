import ClassificationRank from "./ClassificationRank";
import FossilRank from "./FossilRank";
import { TaxonBase } from "./TaxonBase";
import { TaxonomicRank, ValidFossil } from "./TaxonomicRank";

export default class Taxon extends TaxonBase{
    private description!: string;
    private fossilRank?: FossilRank;

    constructor(name: string = "Novo Táxon", rank: TaxonomicRank = TaxonomicRank.SPECIES) {
        super(name, new ClassificationRank());
        this.rank.setRank(rank);
    }

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

    public setAsFossil(rankInput: string, period: string): void {
        const rank = this.convertToFossilRank(rankInput);
        if (!rank) {
            throw new Error("Categoria fóssil inválida. Use Família, Gênero ou Espécie.");
        }

        this.fossilRank = new FossilRank(rank, period);
        this.fossilRank.validateRank(rank);
    }

    private convertToFossilRank(rankInput: string): ValidFossil | undefined {
        const formattedInput = rankInput.charAt(0).toUpperCase() + rankInput.slice(1).toLowerCase();
        
        for (const [key, value] of Object.entries(ValidFossil)) {
            if (value === formattedInput) {
                return value as ValidFossil;
            }
        }
        return undefined;
    }

    public isFossil(): boolean {
        return !!this.fossilRank;
    }

    public getRank(): ClassificationRank {
        return this.fossilRank || this.rank;
    }

    public getDetails(): string {
        return `${this.name} (${this.getRank().getRank()})` + 
               `${this.isFossil() ? ' [Fóssil]' : ''}`;
    }
}