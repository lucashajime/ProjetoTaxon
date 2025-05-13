import { TaxonomicRank } from "./TaxonomicRank";

export default class ClassificationRank {
    private rank!: TaxonomicRank;
    private level!: number;

    public setRank(name: TaxonomicRank, level?: number): void {
        this.validateRank(name);
        this.rank = name;
        if (level) this.level = level;
    }

    public getRank(): TaxonomicRank {
        return this.rank;
    }

    /* Sobrecarga */
    public validateRank(rank: TaxonomicRank): void;
    public validateRank(rank: TaxonomicRank, level: number): void;
    public validateRank(rank: TaxonomicRank, level?: number): void {
        if (!Object.values(TaxonomicRank).includes(rank)) {
            throw new Error("Categoria taxonômica inválida!");
        }
        if (level && (level < 1 || level > 8)) {
            throw new Error("Nível hierárquico deve ser entre 1 (Domínio) e 8 (Espécie)!");
        }
    }
}