/*
  Une scene : un decor, des particules d'ambiance, et des entites vivantes.
  Le meme code sert au Zoo, au Verger et a l'interieur d'un pays.
*/
import { ZOO } from "./zoo.js";
import "./silhouettes.js";
import "./silhouettes-pays.js";
import "./terrains.js";
import { creerVie } from "./vie.js";

/* Place les entites sur la largeur de la scene, en quinconce. */
function disposer(liste) {
  const n = liste.length;
  return liste.map((a, i) => Object.assign({}, a, {
    x: n === 1 ? 0.5 : 0.18 + (i / (n - 1)) * 0.64,
    y: 0.56 + (i % 2) * 0.09,
  }));
}

/* ------------------------------------------------ particules d'ambiance */
const AMBIANCES = {
  savane: { n: 34, couleur: "232,190,130", taille: [0.6, 1.6], vx: 0.012, vy: -0.002, haut: 0.35, bas: 0.8 },
  banquise: { n: 70, couleur: "235,245,255", taille: [0.8, 2.2], vx: 0.004, vy: 0.02, haut: 0, bas: 1 },
  foret: { n: 26, couleur: "190,255,150", taille: [1, 2.2], vx: 0.004, vy: -0.003, haut: 0.3, bas: 0.75, luciole: true },
  "eaux-douces": { n: 30, couleur: "190,240,240", taille: [1, 3], vx: 0.001, vy: -0.018, haut: 0.1, bas: 0.95, bulle: true },
  recif: { n: 40, couleur: "200,210,255", taille: [1, 3.2], vx: 0.002, vy: -0.02, haut: 0.05, bas: 0.95, bulle: true },
  tropiques: { n: 30, couleur: "255,230,140", taille: [0.8, 2], vx: 0.005, vy: -0.004, haut: 0.3, bas: 0.8, luciole: true },
  vergers: { n: 22, couleur: "255,190,200", taille: [1.2, 2.6], vx: 0.01, vy: 0.008, haut: 0, bas: 0.8 },
  archipels: { n: 40, couleur: "220,230,255", taille: [0.6, 1.8], vx: 0.006, vy: 0.004, haut: 0, bas: 0.7 },
  lisiere: { n: 20, couleur: "200,190,255", taille: [0.6, 1.6], vx: 0.004, vy: -0.002, haut: 0.2, bas: 0.8 },
};

function creerParticules(decor, lent) {
  const a = AMBIANCES[decor] || AMBIANCES.lisiere;
  const liste = [];
  for (let i = 0; i < a.n; i++) {
    liste.push({
      x: Math.random(), y: a.haut + Math.random() * (a.bas - a.haut),
      t: a.taille[0] + Math.random() * (a.taille[1] - a.taille[0]),
      p: Math.random() * 10, v: 0.6 + Math.random() * 0.8,
    });
  }
  return {
    avancer(dt) {
      const s = (Math.min(dt, 64) / 1000) * (lent ? 0.6 : 1);
      for (const q of liste) {
        q.x += a.vx * q.v * s + Math.sin(q.p + q.y * 9) * 0.0006;
        q.y += a.vy * q.v * s;
        q.p += s;
        if (q.x > 1.02) q.x = -0.02; if (q.x < -0.02) q.x = 1.02;
        if (q.y > a.bas) q.y = a.haut; if (q.y < a.haut) q.y = a.bas;
      }
    },
    dessiner(ctx, w, h) {
      for (const q of liste) {
        let alpha = 0.35;
        if (a.luciole) alpha = 0.15 + 0.75 * Math.max(0, Math.sin(q.p * 1.3));
        ctx.beginPath();
        ctx.arc(q.x * w, q.y * h, q.t, 0, Math.PI * 2);
        if (a.bulle) {
          ctx.strokeStyle = `rgba(${a.couleur},${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        } else {
          ctx.fillStyle = `rgba(${a.couleur},${alpha})`;
          ctx.fill();
        }
      }
    },
  };
}

/* --------------------------------------------------------------- scene */
export function creerScene(entitesBrutes, decor) {
  const lent = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const entites = disposer(entitesBrutes);
  const vie = creerVie(entites, lent);
  const particules = creerParticules(decor, lent);
  let survole = null;
  let precedent = null;

  function boite(a, w, h, t) {
    const p = vie.pose(a, t);
    // la carte d'un pays est le sujet de sa scene : elle passe devant, en grand
    const echelle = a.type === "pays" ? 2.1 : 1;
    const r = 34 * (a.taille || 1) * echelle * Math.min(1.25, Math.max(0.8, w / 1200));
    return { x: p.x * w, y: (a.y + p.dyEcran) * h, r, p };
  }

  function dessinerEntite(ctx, a, w, h, t, actif) {
    const { x, y, r, p } = boite(a, w, h, t);
    const vif = actif || survole === a.id;

    ctx.save();
    ctx.translate(x, y);

    const halo = ctx.createRadialGradient(0, 0, r * 0.4, 0, 0, r * 2.5);
    halo.addColorStop(0, a.accent + (vif ? "3A" : "14"));
    halo.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = halo;
    ctx.beginPath();
    ctx.arc(0, 0, r * 2.5, 0, Math.PI * 2);
    ctx.fill();

    // ombre de contact, qui reste au sol quand l'entite saute ou vole
    const vol = p.dyEcran < 0 ? 0.55 : 1;
    const base = r * 1.32 - p.dyEcran * h;
    const og = ctx.createRadialGradient(0, base, 0, 0, base, r * 1.15);
    og.addColorStop(0, `rgba(0,0,0,${0.5 * vol})`);
    og.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = og;
    ctx.beginPath();
    ctx.ellipse(0, base, r * 1.15 * vol, r * 0.22 * vol, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.translate(0, p.dy * r);
    ctx.rotate(p.angle);
    // l'entite dont on lit la fiche se tourne vers le panneau, a droite
    ctx.scale(actif ? 1 : p.dir, 1);

    ctx.fillStyle = a.couleur;
    ctx.strokeStyle = vif ? a.accent : "#443A7A";
    ctx.lineWidth = vif ? 2 : 1.2;
    ctx.lineJoin = "round";
    ZOO.dessinerSilhouette(ctx, a.id, r, vif, t);

    const oeil = ZOO.POSITION_YEUX[a.id] || ZOO.POSITION_YEUX_DEFAUT;
    const cl = Math.abs(Math.sin(t * 0.0009 + a.y * 5)) > 0.985 ? 0.12 : 1;
    ctx.fillStyle = oeil.couleur || a.accent;
    for (const cote of oeil.aucun ? [] : oeil.ecart > 0 ? [-1, 1] : [1]) {
      ctx.beginPath();
      ctx.ellipse(r * (oeil.x + cote * oeil.ecart), r * oeil.y, r * oeil.taille, r * oeil.taille * cl, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    ctx.fillStyle = vif ? "#F4F1FB" : "#A39BBE";
    ctx.font = "500 13px 'Space Grotesk', system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(a.nom, x, y + r * 1.9 - p.dyEcran * h);
    if (survole === a.id && !actif) {
      ctx.fillStyle = "#C9C2DE";
      ctx.font = "12px 'Space Grotesk', system-ui, sans-serif";
      ctx.fillText(a.accroche, x, y + r * 2.35 - p.dyEcran * h);
    }
  }

  return {
    entites,
    decor,
    dessiner(ctx, w, h, t, actifId) {
      const dt = precedent === null ? 16 : t - precedent;
      precedent = t;
      vie.avancer(dt, actifId);
      particules.avancer(dt);
      ZOO.dessinerDecor(ctx, decor, w, h, t);
      particules.dessiner(ctx, w, h);
      // les plus hautes a l'ecran sont les plus lointaines : dessinees d'abord
      const ordre = entites.slice().sort((a, b) => a.y - b.y);
      for (const a of ordre) dessinerEntite(ctx, a, w, h, t, actifId === a.id);
    },
    sous(mx, my, w, h, t) {
      for (const a of entites.slice().sort((a, b) => b.y - a.y)) {
        const { x, y, r } = boite(a, w, h, t);
        if (Math.hypot(mx - x, my - y) < r * 1.35) return a;
      }
      return null;
    },
    survoler(id) { survole = id; },
  };
}
