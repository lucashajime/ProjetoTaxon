"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Taxon_1 = __importDefault(require("./model/Taxon"));
const TaxonomicRank_1 = require("../src/model/TaxonomicRank");
describe('Classe Taxon', () => {
    let taxon;
    beforeEach(() => {
        taxon = new Taxon_1.default("Novo Táxon", TaxonomicRank_1.TaxonomicRank.SPECIES);
    });
    // Teste 1: Criação básica
    it('deve criar um táxon com nome e rank padrão', () => {
        expect(taxon.getName()).toBe("Novo Táxon");
        expect(taxon.getRank().getRank()).toBe(TaxonomicRank_1.TaxonomicRank.SPECIES);
    });
    // Teste 2: Táxon não-fóssil
    it('deve configurar um táxon não-fóssil corretamente', () => {
        taxon.setName('Canis lupus');
        taxon.getRank().setRank(TaxonomicRank_1.TaxonomicRank.SPECIES);
        expect(taxon.getName()).toBe('Canis lupus');
        expect(taxon.isFossil()).toBe(false);
        expect(taxon.getDetails()).toContain('Canis lupus (Espécie)');
    });
    // Teste 3: Táxon fóssil
    it('deve configurar um táxon fóssil corretamente', () => {
        taxon.setAsFossil("Família", 'Cretáceo');
        expect(taxon.isFossil()).toBe(true);
        expect(taxon.getRank().getRank()).toBe(TaxonomicRank_1.ValidFossil.FAMILY);
        expect(taxon.getDetails()).toContain('[Fóssil]');
    });
    // Teste 4: Validação de fóssil
    it('deve lançar erro para categoria fóssil inválida', () => {
        expect(() => {
            taxon.setAsFossil("Domínio", 'Jurássico');
        }).toThrow('Categoria fóssil inválida');
    });
});
