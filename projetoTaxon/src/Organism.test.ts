import Organism from "./model/Organism";
import Taxon from "./model/Taxon";
import { TaxonomicRank } from "./model/TaxonomicRank";

describe('Classe Organism', () => {
    it('deve implementar IClassifiable corretamente', () => {
        const organism = new Organism("Homo sapiens");
        const taxon = new Taxon("Hominidae", TaxonomicRank.FAMILY);
        
        expect(organism).toHaveProperty('classify');
       
        expect(typeof organism.classify).toBe('function');
        expect(organism.getScientificName()).toBe('Homo sapiens');
        
        // Testa se o método classify executa sem erros
        expect(() => organism.classify(taxon)).not.toThrow();
    });
});