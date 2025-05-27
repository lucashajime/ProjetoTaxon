"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataBase {
    constructor() {
        this.taxonDB = [];
        this.organisms = [];
        this.classifications = [];
    }
    saveTaxon(taxon) {
        this.addNewTaxon(taxon);
    }
    static getInstance() {
        if (!DataBase.instance) {
            DataBase.instance = new DataBase();
        }
        return DataBase.instance;
    }
    addNewTaxon(taxon) {
        this.taxonDB.push(taxon);
    }
    addOrganism(organism) {
        this.organisms.push(organism);
    }
    addClassification(classification) {
        console.log(`Adicionando classificação: 
            Organismo: ${classification.getOrganism().getScientificName()}
            Táxon: ${classification.getTaxon().getName()}
            `);
        this.classifications.push(classification);
        console.log(`Classificação salva: ${classification.getOrganism().getScientificName()} → ${classification.getTaxon().getName()}`);
    }
    listOrganisms() {
        return this.organisms.map((org, index) => `${index + 1}. ${org.getScientificName()}`).join("\n");
    }
    listTaxa() {
        return this.taxonDB.map((taxon, index) => `${index + 1}. ${taxon.getName()} (${taxon.rank.getRank()})`).join("\n");
    }
    getOrganismById(id) {
        return this.organisms[id - 1];
    }
    getTaxonById(id) {
        return this.taxonDB[id - 1];
    }
    listAllClassifications() {
        if (this.classifications.length === 0) {
            return "Nenhuma classificação registrada.";
        }
        return this.classifications.map((classification, index) => {
            try {
                return `${index + 1}. ${classification.toString()}`;
            }
            catch (error) {
                console.error(`Erro ao exibir classificação ${index}:`, error);
                return `${index + 1}. [CLASSIFICAÇÃO INVÁLIDA]`;
            }
        }).join("\n");
    }
}
exports.default = DataBase;
