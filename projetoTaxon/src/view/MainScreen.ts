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

            console.log("1. Cadastrar Táxon");
            console.log("2. Cadastrar Organismo");
            console.log("3. Classificar Organismo");
            console.log("4. Listar Classificações");
            console.log("5. Sair");

            const choiceInput = this.prompt("\nOpção: ");
            const choice = parseInt(choiceInput);

            switch (choice) {
                case 1:
                    this.taxonRegister.addTaxon();
                    break;
                case 2:
                    this.organismRegister.addOrganism();
                    break;
                case 3:
                    this.classificationRegister.classifyOrganism();
                    break;
                case 4:
                    console.log("\n=== Classificações Registradas ===")
                    console.log(this.controller.listClassifications());
                    break;
                case 5:
                    running = false;
                    break;
                default:
                    console.log("Opção inválida!");
            }
        }
    }
}