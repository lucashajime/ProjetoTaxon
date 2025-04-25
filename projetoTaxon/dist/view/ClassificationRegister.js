"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Classification_1 = __importDefault(require("../model/Classification"));
class ClassificationRegister {
    constructor(controller) {
        this.prompt = (0, prompt_sync_1.default)();
        this.controller = controller;
    }
    classifyOrganism() {
        console.log("\n=== Classificar Organismo ===");
        console.log("Organismos disponíveis: ", this.controller.db.listOrganisms());
        console.log("Táxons disponíveis: ", this.controller.db.listTaxa());
        const organismId = parseInt(this.prompt("ID do organismo: "));
        const taxonId = parseInt(this.prompt("ID do táxon: "));
        const organism = this.controller.db.getOrganismById(organismId);
        const taxon = this.controller.db.getTaxonById(taxonId);
        if (organism && taxon) {
            const classification = new Classification_1.default(taxon, organism);
            this.controller.db.addClassification(classification);
            console.log("Classificação registrada.");
        }
        else {
            console.log("IDs inválidos.");
        }
    }
}
exports.default = ClassificationRegister;
