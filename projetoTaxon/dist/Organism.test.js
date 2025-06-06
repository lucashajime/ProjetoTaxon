"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Organism_1 = __importDefault(require("./model/Organism"));
const Taxon_1 = __importDefault(require("./model/Taxon"));
const TaxonomicRank_1 = require("./model/TaxonomicRank");
describe('Classe Organism', () => {
    it('deve implementar IClassifiable corretamente', () => {
        const organism = new Organism_1.default("Homo sapiens");
        const taxon = new Taxon_1.default("Hominidae", TaxonomicRank_1.TaxonomicRank.FAMILY);
        expect(organism).toHaveProperty('classify');
        expect(typeof organism.classify).toBe('function');
        expect(organism.getScientificName()).toBe('Homo sapiens');
        // Testa se o método classify executa sem erros
        expect(() => organism.classify(taxon)).not.toThrow();
    });
});
