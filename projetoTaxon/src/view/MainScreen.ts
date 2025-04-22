import PromptSync from 'prompt-sync';
import TaxonomyController from '../controller/TaxonomyController';
import TaxonRegister from './TaxonRegister';

export default class MainScreen {
    private prompt = PromptSync();
    private controller: TaxonomyController;
    private taxonRegister: TaxonRegister;

    constructor(controller: TaxonomyController) {
        this.controller = controller;
        this.taxonRegister = new TaxonRegister(controller);
        this.mainMenu();
    }

    public mainMenu(): void {
        let running = true;
        while (running) {
            console.log("\n=== Sistema de Classificação Taxonômica ===");

            const choice = parseInt(this.prompt(
                "Menu Taxonômico:\n" +
                "1. Cadastrar Táxon\n" +
                "2. Cadastrar Organismo\n" +
                "3. Classificar Organismo\n" +
                "4. Listar Classificações\n" +
                "5. Sair"
            ));

            switch (choice) {
                case 1:
                    this.taxonRegister.addTaxon();
                    break;
                case 2:
                    // Implementar cadastro de organismo
                    break;
                case 3:
                    // Implementar classificação
                    break;
                case 4:
                    console.log(this.controller.db.listAllClassifications());
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