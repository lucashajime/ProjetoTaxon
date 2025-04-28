import ClassificationRank from "./ClassificationRank";

export default class FossilRank extends ClassificationRank {
    private geologicalPeriod: string;

    constructor(rank: string, period: string) {
        super();
        this.setRank(rank);
        this.geologicalPeriod = period;
    }


    /*Sobrescrita*/
    public override validateRank(rank: string): void {
        super.validateRank(rank);

        if (!["Espécie", "Gênero", "Família"].includes(rank)) {
            throw new Error(`A categoria "${rank}" de fóssil é inválida. Use Família, Gênero ou Espécie.`);
        }
    }

    public getPeriod(): string {
        return this.geologicalPeriod;
    }
}