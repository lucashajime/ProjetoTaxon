import ClassificationRank from "./ClassificationRank";
import { TaxonomicRank, ValidFossil } from "./TaxonomicRank";

export default class FossilRank extends ClassificationRank {
    private geologicalPeriod: string;

    constructor(rank: ValidFossil, period: string) {
        super();
        super.setRank(rank);
        this.geologicalPeriod = period;
    }


    /*Sobrescrita*/
    public validateRank(rank: ValidFossil): void {
        if (!Object.values(ValidFossil).includes(rank)) {
            throw new Error(`A categoria "${rank}" de fóssil é inválida. Use Família, Gênero ou Espécie.`);
        }
    }

    public getRank(): ValidFossil {
        return super.getRank() as ValidFossil;
    }

    public getPeriod(): string {
        return this.geologicalPeriod;
    }
}