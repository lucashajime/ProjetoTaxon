"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class MainScreen {
    constructor(controller, organismRegister, taxonRegister, classificationRegister) {
        this.controller = controller;
        this.organismRegister = organismRegister;
        this.taxonRegister = taxonRegister;
        this.classificationRegister = classificationRegister;
        this.prompt = (0, prompt_sync_1.default)();
        this.mainMenu();
    }
    mainMenu() {
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
                    console.log("\n=== Classificações Registradas ===");
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
    registerCompleteOrganism() {
        const organism = this.organismRegister.addOrganism();
        const taxon = this.taxonRegister.addTaxon();
        this.classificationRegister.classifyOrganism(organism, taxon);
    }
}
exports.default = MainScreen;
