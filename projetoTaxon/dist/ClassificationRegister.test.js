"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClassificationRegister_1 = __importDefault(require("./view/ClassificationRegister"));
const Organism_1 = __importDefault(require("./model/Organism"));
const Taxon_1 = __importDefault(require("./model/Taxon"));
const TaxonomicRank_1 = require("./model/TaxonomicRank");
const mockController = {
    addClassification: jest.fn()
};
describe('Classification Register - Tratamento de Exceções', () => {
    let register;
    let organism;
    let taxon;
    let consoleErrorSpy;
    let consoleLogSpy;
    beforeEach(() => {
        jest.clearAllMocks();
        register = new ClassificationRegister_1.default(mockController);
        organism = new Organism_1.default("Homo sapiens");
        taxon = new Taxon_1.default("Hominidae", TaxonomicRank_1.TaxonomicRank.FAMILY);
        consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
    });
    afterEach(() => {
        consoleErrorSpy.mockRestore();
        consoleLogSpy.mockRestore();
    });
    it('deve ter o log de erro quando a classificação falhar', () => {
        const error = new Error("Falha no banco de dados");
        mockController.addClassification.mockImplementation(() => {
            throw error;
        });
        register.classifyOrganism(organism, taxon);
        expect(consoleErrorSpy).toHaveBeenCalledWith(`Falha ao classificar ${organism.getScientificName()}:`, error.message);
    });
    it('deve ter log de erro para táxon inválido', () => {
        const invalidTaxon = null;
        register.classifyOrganism(organism, invalidTaxon);
        expect(consoleErrorSpy).toHaveBeenCalledWith(expect.stringContaining(organism.getScientificName()), expect.stringContaining("Não é possível ler propriedades de null"));
    });
    it('deve lidar com erros que não são do tipo Error', () => {
        mockController.addClassification.mockImplementation(() => {
            throw "Erro deonhecido";
        });
        register.classifyOrganism(organism, taxon);
        expect(consoleErrorSpy).toHaveBeenCalledWith(expect.stringContaining(organism.getScientificName()), "Erro desconhecido");
    });
    it('deve logar sucesso quando a clasificação for bem-sucedida', () => {
        mockController.addClassification.mockImplementation(() => { });
        register.classifyOrganism(organism, taxon);
        expect(consoleLogSpy).toHaveBeenCalledWith(expect.stringContaining("Classificação Registrada"));
    });
});
