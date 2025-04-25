import DataBase from "../db/DataBase";
import Taxon from "../model/Taxon";
import MainScreen from "../view/MainScreen";

export default class TaxonomyController {
    public db: DataBase = DataBase.getInstance();

    constructor() {
        new MainScreen(this);
    }

    public getNewTaxon(): Taxon {
        return new Taxon();
    }

    public listClassifications(): string {
        return this.db.listAllClassifications();
    }
}