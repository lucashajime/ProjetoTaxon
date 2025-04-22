"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const TaxonRegister_1 = __importDefault(require("./TaxonRegister"));
class MainScreen {
    constructor(controller) {
        this.prompt = (0, prompt_sync_1.default)();
        this.controller = controller;
        this.taxonRegister = new TaxonRegister_1.default(controller);
        this.mainMenu();
    }
    mainMenu() {
        let running = true;
        while (running) {
            const choice = parseInt(this.prompt("Menu Taxonômico:\n" +
                "1. Cadastrar Táxon\n" +
                "2. Cadastrar Organismo\n" +
                "3. Classificar Organismo\n" +
                "4. Listar Classificações\n" +
                "5. Sair"));
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
exports.default = MainScreen;
