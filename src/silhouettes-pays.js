/*
  Les cartes des pays qui n'ont pas de dessin fait main (l'Islande, le Japon et
  la Nouvelle-Zelande en ont un dans silhouettes.js). Elles sont tracees depuis
  les vrais contours de Natural Earth 1:50m, les memes que la carte du monde :
  un pays ajoute a les donnees a sa bonne forme, sans rien dessiner.
*/
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import monde from "world-atlas/countries-50m.json";
import codes from "i18n-iso-countries";
import { ZOO } from "./zoo.js";
import "./silhouettes.js";
import "./monde-documentaire.js";

const FORMES = feature(monde, monde.objects.countries).features;
const chemins = new Map();

/* En centiemes de r : x dans [-135, 135], le bas de la carte vers +120. */
function cheminDe(iso3) {
  if (chemins.has(iso3)) return chemins.get(iso3);
  const f = FORMES.find(x => x.id && codes.numericToAlpha3(x.id) === iso3);
  let c = null;
  if (f) {
    const proj = geoMercator().fitExtent([[-135, -105], [135, 120]], f);
    c = new Path2D(geoPath(proj)(f));
  }
  chemins.set(iso3, c);
  return c;
}

/* Des terres a la couleur de leur paysage : l'aride reste ocre. */
const TEINTES = {
  BWA: ["#C8AA72", "#9B7D4B"],
  MEX: ["#B2A871", "#7F8A56"],
};
const VERT = ["#8AAE72", "#5C7F4E"];

function dessinerCarte(iso3) {
  return function (ctx, r) {
    const p = cheminDe(iso3);
    if (!p) return;
    const trait = ctx.strokeStyle, lw = ctx.lineWidth;
    const [haut, bas] = TEINTES[iso3] || VERT;
    ctx.save();
    ctx.scale(r / 100, r / 100);
    const g = ctx.createLinearGradient(0, -105, 0, 120);
    g.addColorStop(0, haut);
    g.addColorStop(1, bas);
    ctx.fillStyle = g;
    ctx.fill(p);
    // un peu de relief : la lumiere vient d'en haut a gauche
    ctx.save();
    ctx.clip(p);
    const l = ctx.createRadialGradient(-60, -70, 10, -40, -40, 190);
    l.addColorStop(0, "rgba(255,248,220,0.22)");
    l.addColorStop(1, "rgba(0,0,0,0.18)");
    ctx.fillStyle = l;
    ctx.fillRect(-150, -130, 300, 270);
    ctx.restore();
    ctx.strokeStyle = trait;
    ctx.lineWidth = (lw * 100) / r;
    ctx.lineJoin = "round";
    ctx.stroke(p);
    ctx.restore();
  };
}

const automatiques = new Map();
for (const a of ZOO.ANIMAUX || []) {
  if (a.iso3 && !(a.id in ZOO.POSITION_YEUX)) {
    automatiques.set(a.id, dessinerCarte(a.iso3));
    ZOO.POSITION_YEUX[a.id] = { aucun: true };
  }
}

const dessinFaitMain = ZOO.dessinerSilhouette;
ZOO.dessinerSilhouette = function (ctx, id, r, vif, t) {
  const auto = automatiques.get(id);
  if (auto) auto(ctx, r, vif, t);
  else dessinFaitMain(ctx, id, r, vif, t);
};
