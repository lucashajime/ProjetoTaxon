import TaxonomyController from "./controller/TaxonomyController";
import DataBase from "./db/DataBase";
import OrganismRegister from "./view/OrganismRegister";
import TaxonRegister from "./view/TaxonRegister";
import ClassificationRegister from "./view/ClassificationRegister";
import MainScreen from "./view/MainScreen";

const db = DataBase.getInstance();
const controller = new TaxonomyController(db);

const organismRegister = new OrganismRegister(controller);
const taxonRegister = new TaxonRegister(controller);
const classificationRegister = new ClassificationRegister(controller);

new MainScreen(
    controller,
    organismRegister,
    taxonRegister,
    classificationRegister
);