"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Classification_1 = __importDefault(require("../model/Classification"));
const ClassificationError_1 = __importDefault(require("../model/ClassificationError"));
class ClassificationRegister {
    constructor(controller) {
        this.controller = controller;
        this.prompt = (0, prompt_sync_1.default)();
    }
    classifyOrganism(organism, taxon) {
        try {
            if (!organism || !taxon) {
                throw new ClassificationError_1.default((organism === null || organism === void 0 ? void 0 : organism.getScientificName()) || 'Desconhecido', "Organismo e táxon são obriatórios para classificação");
            }
            if (!organism.getScientificName()) {
                throw new ClassificationError_1.default('Desconhecido', "Organismo deve ter um nome científico válido");
            }
            if (!taxon.getName()) {
                throw new ClassificationError_1.default(organism.getScientificName(), "Táxon deve ter um nome válido");
            }
            const classification = new Classification_1.default(taxon, organism);
            this.controller.addClassification(classification);
            console.log(" Classificação registrada: " +
                `${organism.getScientificName()} → ${taxon.getName()}` +
                `${taxon.isFossil() ? ' [fóssil]' : ''}`);
        }
        catch (error) {
            if (error instanceof ClassificationError_1.default) {
                console.error(error.getDetails());
                throw error;
            }
            else {
                const errorMessage = error instanceof Error ? error.message : String(error);
                const classificationError = new ClassificationError_1.default((organism === null || organism === void 0 ? void 0 : organism.getScientificName()) || 'Desconhecido', `Erro inesperado: ${errorMessage}`, error);
                console.error(classificationError.getDetails());
                throw classificationError;
            }
        }
    }
}
exports.default = ClassificationRegister;
