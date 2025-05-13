export enum TaxonomicRank {
    DOMAIN = "Domínio",
    KINGDOM = "Reino",
    PHYLUM = "Filo",
    CLASS = "Classe",
    ORDER = "Ordem",
    FAMILY = "Família",
    GENUS = "Gênero",
    SPECIES = "Espécie"
}

export const ValidFossil = {
    FAMILY: TaxonomicRank.FAMILY,
    GENUS: TaxonomicRank.GENUS,
    SPECIES: TaxonomicRank.SPECIES
} as const;

export type ValidFossil = typeof ValidFossil[keyof typeof ValidFossil];

export enum OrganismType {
    ANIMAL = "Animal",
    PLANT = "Planta",
    FUNGUS = "Fungo",
    BACTERIA = "Bactéria",
    ARCHAEON = "Arquea",
    PROTIST = "Protista",
    VIRUS = "Vírus"
}