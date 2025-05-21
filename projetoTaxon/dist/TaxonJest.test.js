"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Taxon_1 = __importDefault(require("./model/Taxon"));
const TaxonomicRank_1 = require("./model/TaxonomicRank");
describe('Classe Taxon', () => {
    let taxon;
    beforeEach(() => {
        taxon = new Taxon_1.default();
    });
    it('deve aceitar um táxon não-fóssil', () => {
        taxon.setName('Canis lupus');
        taxon.getRank().setRank(TaxonomicRank_1.TaxonomicRank.SPECIES);
        expect(taxon.getName()).toBe('Canis lupus');
        expect(taxon.getRank().getRank()).toBe(TaxonomicRank_1.TaxonomicRank.SPECIES);
        expect(taxon.isFossil()).toBe(false);
    });
    it('deve aceitar um táxon fóssil com período geológico', () => {
        taxon.setAsFossil(TaxonomicRank_1.ValidFossil.FAMILY, 'Cretáceo');
        expect(taxon.isFossil()).toBe(true);
        expect(taxon.getRank().getRank()).toBe(TaxonomicRank_1.ValidFossil.FAMILY);
    });
    it('deve lançar erro para categoria fóssil inválida (ex: Domínio', () => {
        expect(() => {
            taxon.setAsFossil(TaxonomicRank_1.TaxonomicRank.DOMAIN, 'Jurássico');
        }).toThrow('Categoria fóssil inválida');
    });
});
