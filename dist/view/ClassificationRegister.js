"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Classification_1 = __importDefault(require("../model/Classification"));
class ClassificationRegister {
    constructor(controller) {
        this.controller = controller;
        this.prompt = (0, prompt_sync_1.default)();
    }
    classifyOrganism(organism, taxon) {
        try {
            const classification = new Classification_1.default(taxon, organism);
            this.controller.db.addClassification(classification);
            console.log("✅ Classificação registrada: " +
                `${organism.getScientificName()} → ${taxon.getName()}` +
                `${taxon.isFossil() ? ' [fóssil]' : ''}`);
        }
        catch (error) {
            console.log("Erro na classificação: ");
        }
    }
}
exports.default = ClassificationRegister;
