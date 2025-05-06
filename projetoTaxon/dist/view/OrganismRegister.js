"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Organism_1 = __importDefault(require("../model/Organism"));
class OrganismRegister {
    constructor(controller) {
        this.prompt = (0, prompt_sync_1.default)();
        this.controller = controller;
    }
    addOrganism() {
        console.log("\n=== Cadastro de Organismo ===");
        const scientificName = this.prompt("Nome científico: ");
        const organism = new Organism_1.default(scientificName);
        this.controller.db.addOrganism(organism);
        console.log(`Organismo "${scientificName}" cadastrado!`);
        return organism;
    }
}
exports.default = OrganismRegister;
