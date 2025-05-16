import FossilRank from "./model/FossilRank";
import Taxon from "./model/Taxon";
import { TaxonomicRank, ValidFossil } from "./model/TaxonomicRank";

describe('Classe Taxon', () => {
    let taxon: Taxon;

    beforeEach(() => {
        taxon = new Taxon();
    });

    it('deve aceitar um táxon não-fóssil', () => {
        taxon.setName('Canis lupus');
        taxon.getRank().setRank(TaxonomicRank.SPECIES);
        
        expect(taxon.getName()).toBe('Canis lupus');
        expect(taxon.getRank().getRank()).toBe(TaxonomicRank.SPECIES);
        expect(taxon.isFossil()).toBe(false);
    });

    it('deve aceitar um táxon fóssil com período geológico', () => {
        taxon.setAsFossil(ValidFossil.FAMILY, 'Cretáceo');

        expect(taxon.isFossil()).toBe(true);
        expect(taxon.getRank().getRank()).toBe(ValidFossil.FAMILY);
    });

    it('deve lançar erro para categoria fóssil inválida (ex: Domínio', () => {
        expect(() => {
            taxon.setAsFossil(TaxonomicRank.DOMAIN as any, 'Jurássico');
        }).toThrow('Categoria fóssil inválida');
    });
});