"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClassificationError extends Error {
    constructor(organismName, message, ogError) {
        super(message);
        this.organismName = organismName;
        this.ogError = ogError;
        this.name = "ClassificationError";
    }
    getDetails() {
        return `[${this.name}] ${this.message} (Organismo: ${this.organismName})`;
    }
}
exports.default = ClassificationError;
