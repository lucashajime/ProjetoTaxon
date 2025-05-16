"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganismType = exports.ValidFossil = exports.TaxonomicRank = void 0;
var TaxonomicRank;
(function (TaxonomicRank) {
    TaxonomicRank["DOMAIN"] = "Dom\u00EDnio";
    TaxonomicRank["KINGDOM"] = "Reino";
    TaxonomicRank["PHYLUM"] = "Filo";
    TaxonomicRank["CLASS"] = "Classe";
    TaxonomicRank["ORDER"] = "Ordem";
    TaxonomicRank["FAMILY"] = "Fam\u00EDlia";
    TaxonomicRank["GENUS"] = "G\u00EAnero";
    TaxonomicRank["SPECIES"] = "Esp\u00E9cie";
})(TaxonomicRank || (exports.TaxonomicRank = TaxonomicRank = {}));
exports.ValidFossil = {
    FAMILY: TaxonomicRank.FAMILY,
    GENUS: TaxonomicRank.GENUS,
    SPECIES: TaxonomicRank.SPECIES
};
var OrganismType;
(function (OrganismType) {
    OrganismType["ANIMAL"] = "Animal";
    OrganismType["PLANT"] = "Planta";
    OrganismType["FUNGUS"] = "Fungo";
    OrganismType["BACTERIA"] = "Bact\u00E9ria";
    OrganismType["ARCHAEON"] = "Arquea";
    OrganismType["PROTIST"] = "Protista";
    OrganismType["VIRUS"] = "V\u00EDrus";
})(OrganismType || (exports.OrganismType = OrganismType = {}));
