"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Taxon_1 = __importDefault(require("../model/Taxon"));
class TaxonomyController {
    constructor(db) {
        this.db = db;
    }
    getNewTaxon() {
        return new Taxon_1.default();
    }
    listClassifications() {
        return this.db.listAllClassifications();
    }
}
exports.default = TaxonomyController;
