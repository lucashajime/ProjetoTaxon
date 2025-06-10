import Organism from "./Organism";
import Taxon from "./Taxon";

export default class MyError extends Error {

    constructor (s: string) {
        super(s);
    }

    public sError(organism: Organism, taxon: Taxon) {
        if(!organism || !taxon) {
            throw new Error("Informe valores para Organismo e Táxon");
        }
    }
}