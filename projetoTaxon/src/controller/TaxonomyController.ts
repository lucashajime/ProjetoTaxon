import DataBase from "../db/DataBase";
import Taxon from "../model/Taxon";
import MainScreen from "../view/MainScreen";

export default class TaxonomyController {
    constructor(public db: DataBase) {}

    public getNewTaxon(): Taxon {
        return new Taxon();
    }

    public listClassifications(): string {
        return this.db.listAllClassifications();
    }
}