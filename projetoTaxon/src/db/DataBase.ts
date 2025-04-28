import Taxon from "../model/Taxon";
import Classification from "../model/Classification";
import Organism from "../model/Organism";

export default class DataBase {
    private static instance: DataBase;
    private taxonDB: Taxon[] = [];
    private organisms: Organism[] = [];
    private classifications: Classification[] = [];

    private constructor() {}

    public static getInstance(): DataBase {
        if(!DataBase.instance) {
            DataBase.instance = new DataBase();
        }
        return DataBase.instance;
    }

    public addNewTaxon(taxon: Taxon): void {
        this.taxonDB.push(taxon);
    }

    public addOrganism(organism: Organism): void {
        this.organisms.push(organism);
    }

    public addClassification(classification: Classification): void {
        console.log(`Adicionando classificação: 
            Organismo: ${classification.getOrganism().getScientificName()}
            Táxon: ${classification.getTaxon().getName()}
            `);
        
        this.classifications.push(classification);
        console.log(`Classificação salva: ${classification.getOrganism().getScientificName()} → ${classification.getTaxon().getName()}`);
    }

    public listOrganisms(): string {
        return this.organisms.map((org, index) => 
            `${index + 1}. ${org.getScientificName()}`
        ).join("\n")
    }

    public listTaxa(): string {
        return this.taxonDB.map((taxon, index) => 
            `${index + 1}. ${taxon.getName()} (${taxon.rank.getRank()})`
        ).join("\n");
    }

    public getOrganismById(id: number): Organism | undefined {
        return this.organisms[id - 1];
    }

    public getTaxonById(id: number): Taxon | undefined {
        return this.taxonDB[id - 1];
    }


    public listAllClassifications(): string {
        if (this.classifications.length === 0) {
            return "Nenhuma classificação registrada.";
        }

        return this.classifications.map((classification, index) => {
            const org = classification.getOrganism()
            const taxon = classification.getTaxon()
            const fossilTag = taxon.isFossil() ? " [fóssil]" : ""; 
            
            if (!org || !taxon) {
                console.error(`Classificação ${index} inválida!`);
                return `${index + 1}. [CLASSIFICAÇÃO INVÁLIDA]`;
            }
                
            return `${index + 1}. ${org.getScientificName()}${fossilTag} → ${taxon.getName()}`;
        }).join("\n");
    }
}