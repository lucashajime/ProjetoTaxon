import ClassificationRank from "./ClassificationRank";

export default class FossilRank extends ClassificationRank {
    private geologicalPeriod: string;

    constructor(rank: string, period: string) {
        super();
        this.setRank(rank);
        this.geologicalPeriod = period;
    }

    public override validateRank(rank: string): void {
        super.validateRank(rank);

        if (!["Espécie", "Gênero", "Família"].includes(rank)) {
            throw new Error("Categoria de fóssil inválida. Use Família, Gênero ou Espécie.");
        }
    }

    public getPeriod(): string {
        return this.geologicalPeriod;
    }
}