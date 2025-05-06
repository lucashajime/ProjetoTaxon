import PromptSync from 'prompt-sync';
import TaxonomyController from '../controller/TaxonomyController';
import TaxonRegister from './TaxonRegister';
import OrganismRegister from './OrganismRegister';
import ClassificationRegister from './ClassificationRegister';

export default class MainScreen {
    private prompt = PromptSync();
    private controller: TaxonomyController;
    private taxonRegister: TaxonRegister;
    private organismRegister: OrganismRegister;
    private classificationRegister: ClassificationRegister;

    constructor(controller: TaxonomyController) {
        this.controller = controller;
        this.taxonRegister = new TaxonRegister(controller);
        this.organismRegister = new OrganismRegister(controller);
        this.classificationRegister = new ClassificationRegister(controller);
        this.mainMenu();
    }

    public mainMenu(): void {
        let running = true;
        while (running) {
            /* console.clear(); */

            console.log("\n=== Sistema de Classificação Taxonômica ===");
            console.log("1. Cadastrar Organismo");
            console.log("2. Listar Classificações");
            console.log("3. Sair");

            const choiceInput = this.prompt("\nOpção: ");
            const choice = parseInt(choiceInput);

            switch (choice) {
                case 1:
                    this.registerCompleteOrganism();
                    break;
                case 2:
                    console.log("\n=== Classificações Registradas ===")
                    console.log(this.controller.listClassifications());
                    break;
                case 3:
                    running = false;
                    break;
                default:
                    console.log("Opção inválida!");
            }
        }
    }

    private registerCompleteOrganism(): void {
        const organism = this.organismRegister.addOrganism();
        const taxon = this.taxonRegister.addTaxon();
        this.classificationRegister.classifyOrganism(organism, taxon);
    }
}