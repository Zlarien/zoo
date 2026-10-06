import { ZOO } from "./zoo.js";
import { dessinerDecorRealiste } from "./decors.js";
/*
  Les terrains du monde.

  Un terrain, c'est trois choses : une palette, un decor dessine en code, et la
  liste des entites qui y vivent. Aucune image, aucun asset : tout se genere,
  donc un terrain de plus coute une entree dans ce fichier.

  Le decor se dessine derriere les entites, jamais par dessus. Chaque fonction
  recoit le contexte, la largeur, la hauteur et le temps en millisecondes.
*/

(function () {
"use strict";

/* Qui vit ou. Une entite absente de cette table atterrit dans "lisiere". */
const APPARTENANCE = {
  savane: ["elephante", "guepard"],
  banquise: ["manchot-empereur"],
  foret: ["corbeau", "abeille-domestique-vrille", "braise-vampire-commune"],
  "eaux-douces": ["axolotl", "tardigrade"],
  recif: ["poulpe", "poulpe-mimetique", "coelacanthe"],
  tropiques: ["durian", "acai", "fruit-baobab", "mangoustan", "vanille"],
  vergers: ["orange-sanguine-sicile"],
  archipels: ["islande", "japon", "nouvelle-zelande"],
};

/* ------------------------------------------------------------- les decors */

/* Un ciel commun a tous, seule la palette change. Renvoie la ligne de sol. */
function ciel(ctx, w, h, haut, bas) {
  const s = h * 0.74;
  const g = ctx.createLinearGradient(0, 0, 0, s);
  g.addColorStop(0, haut);
  g.addColorStop(1, bas);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, s);
  return s;
}

function sol(ctx, w, h, s, a, b, accent) {
  const gs = ctx.createLinearGradient(0, s, 0, h);
  gs.addColorStop(0, a);
  gs.addColorStop(1, b);
  ctx.fillStyle = gs;
  ctx.fillRect(0, s, w, h - s);
  const gl = ctx.createLinearGradient(0, 0, w, 0);
  gl.addColorStop(0, "rgba(68,58,122,.15)");
  gl.addColorStop(0.5, accent);
  gl.addColorStop(1, "rgba(68,58,122,.15)");
  ctx.strokeStyle = gl;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, s);
  ctx.lineTo(w, s);
  ctx.stroke();
}

/* Deux bandes de brume basses et pales. Une premiere version plus opaque
   ecrasait les animaux : la brume se devine, elle ne se voit pas. */
function brume(ctx, w, h, t, teinte, bandes) {
  for (const b of bandes) {
    ctx.fillStyle = teinte(b.a);
    const dec = (t * b.v) % (w + 500) - 250;
    for (let k = -1; k < 4; k++) {
      ctx.beginPath();
      ctx.ellipse(dec + k * (w * 0.45), h * b.y, w * 0.26, h * b.h, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

const DECORS = {
  savane(ctx, w, h, t) {
    const s = ciel(ctx, w, h, "#16101F", "#2A1B24");
    // acacias lointains : une verticale et un chapeau plat
    for (let k = 0; k < 9; k++) {
      const x = (k / 8) * w + Math.sin(k * 3.1) * 30;
      const ht = h * (0.06 + 0.03 * Math.abs(Math.sin(k * 2.3)));
      ctx.strokeStyle = "rgba(70,48,58,.65)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(x, s);
      ctx.lineTo(x, s - ht);
      ctx.stroke();
      ctx.fillStyle = "rgba(70,48,58,.5)";
      ctx.beginPath();
      ctx.ellipse(x, s - ht, ht * 0.85, ht * 0.22, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    brume(ctx, w, h, t, a => `rgba(214,120,60,${a})`,
      [{ y: 0.695, h: 0.022, a: 0.035, v: 0.000045 }, { y: 0.73, h: 0.016, a: 0.04, v: 0.00009 }]);
    sol(ctx, w, h, s, "#241722", "#0C0710", "rgba(224,160,96,.45)");
  },

  banquise(ctx, w, h, t) {
    const s = ciel(ctx, w, h, "#070C1A", "#0E1A2E");
    for (let k = 0; k < 11; k++) {
      const x = (k / 10) * w + Math.sin(k * 5.7) * 24;
      const lg = w * (0.04 + 0.03 * Math.abs(Math.cos(k * 1.9)));
      const ht = h * (0.03 + 0.025 * Math.abs(Math.sin(k * 2.7)));
      ctx.fillStyle = "rgba(150,190,235,.10)";
      ctx.beginPath();
      ctx.moveTo(x - lg, s);
      ctx.lineTo(x - lg * 0.55, s - ht);
      ctx.lineTo(x + lg * 0.5, s - ht * 0.8);
      ctx.lineTo(x + lg, s);
      ctx.closePath();
      ctx.fill();
    }
    brume(ctx, w, h, t, a => `rgba(180,215,255,${a})`,
      [{ y: 0.7, h: 0.02, a: 0.05, v: 0.00003 }, { y: 0.735, h: 0.014, a: 0.06, v: 0.00007 }]);
    sol(ctx, w, h, s, "#132437", "#050810", "rgba(168,214,255,.5)");
  },

  foret(ctx, w, h, t) {
    const s = ciel(ctx, w, h, "#070E0C", "#0E1A16");
    // troncs : trois plans de plus en plus proches et opaques
    const plans = [{ n: 22, a: 0.16, l: 2, hy: 0.16 }, { n: 13, a: 0.24, l: 4, hy: 0.24 }, { n: 7, a: 0.34, l: 8, hy: 0.34 }];
    for (const p of plans) {
      ctx.strokeStyle = `rgba(24,54,42,${p.a})`;
      ctx.lineWidth = p.l;
      for (let k = 0; k < p.n; k++) {
        const x = ((k + 0.5) / p.n) * w + Math.sin(k * 7.3 + p.n) * 18;
        ctx.beginPath();
        ctx.moveTo(x, s);
        ctx.lineTo(x + Math.sin(k) * 6, s - h * p.hy);
        ctx.stroke();
      }
    }
    brume(ctx, w, h, t, a => `rgba(120,230,170,${a})`,
      [{ y: 0.69, h: 0.024, a: 0.028, v: 0.00004 }, { y: 0.73, h: 0.016, a: 0.034, v: 0.00008 }]);
    sol(ctx, w, h, s, "#0F1D18", "#050A08", "rgba(123,224,184,.42)");
  },

  "eaux-douces"(ctx, w, h, t) {
    const s = ciel(ctx, w, h, "#0A1418", "#122A2E");
    // rais de lumiere qui descendent, decales lentement
    for (let k = 0; k < 7; k++) {
      const x = ((k + 0.5) / 7) * w + Math.sin(t * 0.00012 + k) * 30;
      const g = ctx.createLinearGradient(x, 0, x + 40, s);
      g.addColorStop(0, "rgba(140,225,220,.055)");
      g.addColorStop(1, "rgba(140,225,220,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(x - 22, 0);
      ctx.lineTo(x + 22, 0);
      ctx.lineTo(x + 70, s);
      ctx.lineTo(x + 16, s);
      ctx.closePath();
      ctx.fill();
    }
    brume(ctx, w, h, t, a => `rgba(110,220,215,${a})`,
      [{ y: 0.7, h: 0.02, a: 0.03, v: 0.00005 }, { y: 0.735, h: 0.015, a: 0.036, v: 0.0001 }]);
    sol(ctx, w, h, s, "#0F2529", "#04090B", "rgba(126,226,220,.45)");
  },

  recif(ctx, w, h, t) {
    const s = ciel(ctx, w, h, "#0A0A1E", "#141034");
    // coraux : des colonnes bosselees, silhouettes seulement
    for (let k = 0; k < 14; k++) {
      const x = (k / 13) * w + Math.sin(k * 4.1) * 20;
      const ht = h * (0.035 + 0.04 * Math.abs(Math.sin(k * 1.6)));
      ctx.fillStyle = "rgba(90,50,140,.22)";
      ctx.beginPath();
      ctx.moveTo(x, s);
      for (let j = 0; j <= 6; j++) ctx.lineTo(x - 10 + Math.sin(j * 2.2 + k) * 9, s - ht * (j / 6));
      for (let j = 6; j >= 0; j--) ctx.lineTo(x + 10 + Math.cos(j * 1.9 + k) * 9, s - ht * (j / 6));
      ctx.closePath();
      ctx.fill();
    }
    brume(ctx, w, h, t, a => `rgba(160,110,240,${a})`,
      [{ y: 0.695, h: 0.022, a: 0.032, v: 0.00006 }, { y: 0.73, h: 0.016, a: 0.04, v: 0.00011 }]);
    sol(ctx, w, h, s, "#151038", "#05040E", "rgba(176,146,240,.45)");
  },

  tropiques(ctx, w, h, t) {
    const s = ciel(ctx, w, h, "#0F0E08", "#231C0E");
    // canopee : des arcs larges qui se chevauchent
    for (let k = 0; k < 12; k++) {
      const x = (k / 11) * w + Math.sin(k * 2.9) * 26;
      const ht = h * (0.05 + 0.045 * Math.abs(Math.cos(k * 1.4)));
      ctx.fillStyle = "rgba(96,84,26,.28)";
      ctx.beginPath();
      ctx.ellipse(x, s - ht, w * 0.07, ht, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(96,84,26,.45)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, s);
      ctx.lineTo(x, s - ht);
      ctx.stroke();
    }
    brume(ctx, w, h, t, a => `rgba(232,192,90,${a})`,
      [{ y: 0.695, h: 0.022, a: 0.035, v: 0.00005 }, { y: 0.73, h: 0.016, a: 0.042, v: 0.0001 }]);
    sol(ctx, w, h, s, "#1E1A0C", "#0A0805", "rgba(232,192,90,.45)");
  },

  vergers(ctx, w, h, t) {
    const s = ciel(ctx, w, h, "#180E10", "#2E1A18");
    // rangees d'arbres taillees, alignees : c'est ce qui fait un verger
    for (let rang = 0; rang < 3; rang++) {
      const n = 8 + rang * 4;
      const y = s - h * (0.09 - rang * 0.028);
      for (let k = 0; k < n; k++) {
        const x = ((k + 0.5) / n) * w;
        ctx.fillStyle = `rgba(120,54,44,${0.16 + rang * 0.07})`;
        ctx.beginPath();
        ctx.ellipse(x, y, w * 0.018, h * (0.022 - rang * 0.004), 0, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    brume(ctx, w, h, t, a => `rgba(255,138,91,${a})`,
      [{ y: 0.7, h: 0.02, a: 0.03, v: 0.00004 }, { y: 0.735, h: 0.015, a: 0.038, v: 0.00009 }]);
    sol(ctx, w, h, s, "#281618", "#0B0607", "rgba(255,138,91,.45)");
  },

  archipels(ctx, w, h, t) {
    const s = ciel(ctx, w, h, "#080C16", "#101A2C");
    // iles : des dos arrondis poses sur l'horizon, de tailles inegales
    for (let k = 0; k < 8; k++) {
      const x = (k / 7) * w + Math.sin(k * 3.7) * 40;
      const lg = w * (0.05 + 0.05 * Math.abs(Math.sin(k * 2.1)));
      const ht = h * (0.02 + 0.035 * Math.abs(Math.cos(k * 1.3)));
      ctx.fillStyle = "rgba(70,96,150,.20)";
      ctx.beginPath();
      ctx.ellipse(x, s, lg, ht, 0, Math.PI, 0);
      ctx.fill();
    }
    brume(ctx, w, h, t, a => `rgba(143,184,255,${a})`,
      [{ y: 0.7, h: 0.02, a: 0.035, v: 0.00003 }, { y: 0.735, h: 0.015, a: 0.042, v: 0.00008 }]);
    sol(ctx, w, h, s, "#121C2E", "#04060C", "rgba(143,184,255,.48)");
  },

  lisiere(ctx, w, h, t) {
    const s = ciel(ctx, w, h, "#0A0818", "#100C24");
    ctx.strokeStyle = "rgba(46,37,87,.55)";
    ctx.lineWidth = 1;
    for (let k = 0; k < 26; k++) {
      const x = (k / 25) * w;
      ctx.beginPath();
      ctx.moveTo(x, s);
      ctx.lineTo(x, s - h * (0.05 + 0.02 * Math.sin(k * 1.7)));
      ctx.stroke();
    }
    brume(ctx, w, h, t, a => `rgba(140,110,230,${a})`,
      [{ y: 0.695, h: 0.022, a: 0.03, v: 0.000045 }, { y: 0.73, h: 0.016, a: 0.038, v: 0.00009 }]);
    sol(ctx, w, h, s, "#120E28", "#06050E", "rgba(176,146,240,.45)");
  },
};

const TERRAINS = [
  { id: "savane",      nom: "Savane",      accent: "#E0A060" },
  { id: "foret",       nom: "Foret",       accent: "#7BE0B8" },
  { id: "eaux-douces", nom: "Eaux douces", accent: "#7EE2DC" },
  { id: "recif",       nom: "Recif",       accent: "#B092F0" },
  { id: "banquise",    nom: "Banquise",    accent: "#A8D6FF" },
  { id: "tropiques",   nom: "Tropiques",   accent: "#E8C05A" },
  { id: "vergers",     nom: "Vergers",     accent: "#FF8A5B" },
  { id: "archipels",   nom: "Archipels",   accent: "#8FB8FF" },
  { id: "islande",     nom: "Islande",     accent: "#9FE0C8" },
  { id: "japon",       nom: "Japon",       accent: "#F2A7B8" },
  { id: "comores",     nom: "Comores",     accent: "#7FD6C2" },
  { id: "lisiere",     nom: "Lisiere",     accent: "#C9C2DE" },
];

/* Index inverse, calcule une fois. */
const OU = {};
for (const terrain of Object.keys(APPARTENANCE)) {
  for (const id of APPARTENANCE[terrain]) OU[id] = terrain;
}

ZOO.TERRAINS = TERRAINS;
ZOO.terrainDe = id => OU[id] || "lisiere";
ZOO.dessinerDecor = function (ctx, terrain, w, h, t) {
  if (dessinerDecorRealiste(ctx, terrain, w, h, t)) return;
  (DECORS[terrain] || DECORS.lisiere)(ctx, w, h, t);
};

/* Les entites d'un terrain, replacees a l'ecran pour qu'elles ne s'empilent
   pas : la position ecrite dans la fiche vaut pour le monde entier, celle-ci
   vaut pour le terrain courant. */
ZOO.entitesDe = function (terrain) {
  const l = (ZOO.ANIMAUX || []).filter(a => ZOO.terrainDe(a.id) === terrain);
  const n = l.length;
  return l.map((a, i) => Object.assign({}, a, {
    x: n === 1 ? 0.5 : 0.22 + (i / (n - 1)) * 0.56,
    y: 0.56 + (i % 2) * 0.09,
  }));
};
})();
