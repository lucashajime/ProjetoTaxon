"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const TaxonRegister_1 = __importDefault(require("./TaxonRegister"));
const OrganismRegister_1 = __importDefault(require("./OrganismRegister"));
const ClassificationRegister_1 = __importDefault(require("./ClassificationRegister"));
class MainScreen {
    constructor(controller) {
        this.prompt = (0, prompt_sync_1.default)();
        this.controller = controller;
        this.taxonRegister = new TaxonRegister_1.default(controller);
        this.organismRegister = new OrganismRegister_1.default(controller);
        this.classificationRegister = new ClassificationRegister_1.default(controller);
        this.mainMenu();
    }
    mainMenu() {
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
                    /* console.log("\n=== DEBUG: Estado do Banco ===");
                    console.log("Organismos:", this.controller.db['organisms'].length);
                    console.log("Táxons:", this.controller.db['taxonDB'].length);
                    console.log("Classificações:", this.controller.db['classifications'].length); */
                    console.log("\n=== Classificações Registradas ===");
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
exports.default = MainScreen;
