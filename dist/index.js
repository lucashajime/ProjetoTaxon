"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TaxonomyController_1 = __importDefault(require("./controller/TaxonomyController"));
const DataBase_1 = __importDefault(require("./db/DataBase"));
const OrganismRegister_1 = __importDefault(require("./view/OrganismRegister"));
const TaxonRegister_1 = __importDefault(require("./view/TaxonRegister"));
const ClassificationRegister_1 = __importDefault(require("./view/ClassificationRegister"));
const MainScreen_1 = __importDefault(require("./view/MainScreen"));
const db = DataBase_1.default.getInstance();
const controller = new TaxonomyController_1.default(db);
const organismRegister = new OrganismRegister_1.default(controller);
const taxonRegister = new TaxonRegister_1.default(controller);
const classificationRegister = new ClassificationRegister_1.default(controller);
new MainScreen_1.default(controller, organismRegister, taxonRegister, classificationRegister);
