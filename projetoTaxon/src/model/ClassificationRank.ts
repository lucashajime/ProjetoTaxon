export default class ClassificationRank {
    private rank!: string;
    private level!: number;

    public setRank(name: string, level?: number): void {
        this.rank = name;
        if (level) this.level = level;
    }

    public getRank(): string {
        return this.rank;
    }

    /* Sobrecarga */
    public validateRank(rank: string): void;
    public validateRank(rank: string, level: number): void;
    public validateRank(rank: string, level?: number): void {
        if (!["Domínio", "Reino", "Filo", "Classe", "Ordem", "Família", "Gênero", "Espécie"].includes(rank)) {
            throw new Error("Categoria taxonômica inválida!");
        }
        if (level && (level < 1 || level > 8)) {
            throw new Error("Nível hierárquico deve ser entre 1 (Domínio) e 8 (Espécie)!");
        }
    }
}