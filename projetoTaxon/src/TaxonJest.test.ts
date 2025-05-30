import Taxon from "./model/Taxon";
import { TaxonomicRank, ValidFossil } from "../src/model/TaxonomicRank";
import ClassificationRank from "../src/model/ClassificationRank";

describe('Classe Taxon', () => {
    let taxon: Taxon;

    beforeEach(() => {
        taxon = new Taxon("Novo Táxon", TaxonomicRank.SPECIES);
    });

    // Teste 1: Criação básica
    it('deve criar um táxon com nome e rank padrão', () => {
        expect(taxon.getName()).toBe("Novo Táxon");
        expect(taxon.getRank().getRank()).toBe(TaxonomicRank.SPECIES);
    });

    // Teste 2: Táxon não-fóssil
    it('deve configurar um táxon não-fóssil corretamente', () => {
        taxon.setName('Canis lupus');
        taxon.getRank().setRank(TaxonomicRank.SPECIES);
        
        expect(taxon.getName()).toBe('Canis lupus');
        expect(taxon.isFossil()).toBe(false);
        expect(taxon.getDetails()).toContain('Canis lupus (Espécie)');
    });

    // Teste 3: Táxon fóssil
    it('deve configurar um táxon fóssil corretamente', () => {
        taxon.setAsFossil("Família", 'Cretáceo');
        
        expect(taxon.isFossil()).toBe(true);
        expect(taxon.getRank().getRank()).toBe(ValidFossil.FAMILY);
        expect(taxon.getDetails()).toContain('[Fóssil]');
    });

    // Teste 4: Validação de fóssil
    it('deve lançar erro para categoria fóssil inválida', () => {
        expect(() => {
            taxon.setAsFossil("Domínio", 'Jurássico');
        }).toThrow('Categoria fóssil inválida');
    });
});