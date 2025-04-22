import MainScreen from "./view/MainScreen";
import TaxonomyController from "./controller/TaxonomyController";

const controller = new TaxonomyController();
new MainScreen(controller);