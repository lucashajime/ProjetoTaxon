"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataBase_1 = __importDefault(require("../db/DataBase"));
const Taxon_1 = __importDefault(require("../model/Taxon"));
const MainScreen_1 = __importDefault(require("../view/MainScreen"));
class TaxonomyController {
    constructor() {
        this.db = new DataBase_1.default();
        new MainScreen_1.default(this);
    }
    getNewTaxon() {
        return new Taxon_1.default();
    }
}
exports.default = TaxonomyController;
