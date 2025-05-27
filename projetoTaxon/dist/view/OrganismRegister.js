"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Organism_1 = __importDefault(require("../model/Organism"));
const TaxonomicRank_1 = require("../model/TaxonomicRank");
class OrganismRegister {
    constructor(controller) {
        this.controller = controller;
        this.prompt = (0, prompt_sync_1.default)();
    }
    showOrganismTypes() {
        console.log("\nTipos de organismos disponíveis:");
        Object.values(TaxonomicRank_1.OrganismType).forEach((type, index) => {
            console.log(`${index + 1}. ${type}`);
        });
    }
    getTypeFromInput(input) {
        const index = parseInt(input) - 1;
        const types = Object.values(TaxonomicRank_1.OrganismType);
        return types[index];
    }
    addOrganism() {
        console.log("\n=== Cadastro de Organismo ===");
        const scientificName = this.prompt("Nome científico: ");
        this.showOrganismTypes();
        const typeInput = this.prompt("Selecione o tipo (número): ");
        const type = this.getTypeFromInput(typeInput);
        if (!type) {
            console.log("Tipo inválido!");
            return new Organism_1.default(scientificName);
        }
        const organism = new Organism_1.default(scientificName, type);
        this.controller.addOrganism(organism);
        console.log(`Organismo "${scientificName}" (${type}) cadastrado!`);
        return organism;
    }
}
exports.default = OrganismRegister;
