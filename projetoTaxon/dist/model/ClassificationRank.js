"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClassificationRank {
    setRank(name, level) {
        this.rank = name;
        if (level)
            this.level = level;
    }
    getRank() {
        return this.rank;
    }
    validateRank(rank, level) {
        if (!["Domínio", "Reino", "Filo", "Classe", "Ordem", "Família", "Gênero", "Espécie"].includes(rank)) {
            throw new Error("Categoria taxonômica inválida!");
        }
        if (level && (level < 1 || level > 8)) {
            throw new Error("Nível hierárquico deve ser entre 1 (Domínio) e 8 (Espécie)!");
        }
    }
}
exports.default = ClassificationRank;
