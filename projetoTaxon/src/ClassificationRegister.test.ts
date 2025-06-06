import ClassificationRegister from "./view/ClassificationRegister";
import TaxonomyController from "./controller/TaxonomyController";
import Organism from "./model/Organism";
import Taxon from "./model/Taxon";
import { TaxonomicRank } from "./model/TaxonomicRank";

const mockController = {
    addClassification: jest.fn()
};

describe('Classification Register - Tratamento de Exceções', () => {
    let register: ClassificationRegister;
    let organism: Organism;
    let taxon: Taxon;
    let consoleErrorSpy: jest.SpyInstance;
    let consoleLogSpy: jest.SpyInstance;

    beforeEach(() => {
        jest.clearAllMocks();

        register = new ClassificationRegister(mockController as unknown as jest.Mocked<TaxonomyController>);
        organism = new Organism("Homo sapiens");
        taxon = new Taxon("Hominidae", TaxonomicRank.FAMILY);

        consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
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

        expect(consoleErrorSpy).toHaveBeenCalledWith(
            `Falha ao classificar ${organism.getScientificName()}:`,
            error.message
        );
    });

    it('deve ter log de erro para táxon inválido', () => {
        const invalidTaxon = null as unknown as Taxon;

        register.classifyOrganism(organism, invalidTaxon);

        expect(consoleErrorSpy).toHaveBeenCalledWith(
            expect.stringContaining(organism.getScientificName()),
            expect.stringContaining("Não é possível ler propriedades de null")
        );
    });

    it('deve lidar com erros que não são do tipo Error', () => {
        mockController.addClassification.mockImplementation(() => {
            throw "Erro deonhecido";
        });

        register.classifyOrganism(organism, taxon);

        expect(consoleErrorSpy).toHaveBeenCalledWith(
            expect.stringContaining(organism.getScientificName()),
            "Erro desconhecido"
        );
    });

    it('deve logar sucesso quando a clasificação for bem-sucedida', () => {
        mockController.addClassification.mockImplementation(() => {});

        register.classifyOrganism(organism, taxon);

        expect(consoleLogSpy).toHaveBeenCalledWith(
            expect.stringContaining("Classificação Registrada")
        );
    })
});