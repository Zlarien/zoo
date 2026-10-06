/*
  Le lien entre la carte du monde et les entites.

  Un pays a trois etats sur la carte :
  - parle   : il a sa propre fiche sourcee, on peut lui parler ;
  - habite  : pas encore de fiche, mais des animaux ou des fruits y vivent ;
  - bientot : rien d'ecrit pour l'instant.

  Le rattachement d'une entite a un pays (champ `pays`) doit s'appuyer sur un
  fait deja source dans sa fiche : jamais un rattachement de culture generale.
*/
import { ZOO } from "./zoo.js";
import "./animaux.js";
import "./monde-documentaire.js";

export const genre = a => a.type === "fruit" ? "fruit" : a.type === "pays" ? "pays" : "animal";

export function ficheDuPays(iso3) {
  return (ZOO.ANIMAUX || []).find(a => a.iso3 === iso3) || null;
}

export function habitantsDe(iso3) {
  return (ZOO.ANIMAUX || []).filter(a => (a.pays || []).includes(iso3));
}

export function statutPays(iso3) {
  if (ficheDuPays(iso3)) return "parle";
  if (habitantsDe(iso3).length) return "habite";
  return "bientot";
}

/* Tous les codes pays references par le monde, fiches et habitants. */
export function paysReferences() {
  const s = new Set();
  for (const a of ZOO.ANIMAUX || []) {
    if (a.iso3) s.add(a.iso3);
    for (const p of a.pays || []) s.add(p);
  }
  return [...s];
}

/* Le decor d'un pays, pris parmi les terrains existants. */
export const DECOR_PAYS = {
  ISL: "islande",
  JPN: "japon",
  NZL: "archipels",
  MEX: "eaux-douces",
  IDN: "recif",
  MYS: "tropiques",
  BRA: "tropiques",
  ITA: "vergers",
  BWA: "savane",
  DNK: "foret",
  COM: "comores",
};
export const decorDuPays = iso3 => DECOR_PAYS[iso3] || "archipels";

/* Ce qu'on voit dans la scene d'un pays : sa fiche d'abord, puis ses habitants. */
export function scenePays(iso3) {
  const fiche = ficheDuPays(iso3);
  return (fiche ? [fiche] : []).concat(habitantsDe(iso3));
}

/* Les terrains de chaque mode, et les entites qui y sont montrees. */
export const TERRAINS_ZOO = ["savane", "foret", "eaux-douces", "recif", "banquise"];
export const TERRAINS_VERGER = ["tropiques", "vergers"];

export function entitesDuMode(mode, terrain) {
  const voulu = mode === "verger" ? "fruit" : "animal";
  return (ZOO.ANIMAUX || []).filter(a => genre(a) === voulu && ZOO.terrainDe(a.id) === terrain);
}
