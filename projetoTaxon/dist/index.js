"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MainScreen_1 = __importDefault(require("./view/MainScreen"));
const TaxonomyController_1 = __importDefault(require("./controller/TaxonomyController"));
const controller = new TaxonomyController_1.default();
new MainScreen_1.default(controller);
