/*
  La carte du monde, ecran d'accueil du mode relie.

  Les contours viennent de world-atlas (Natural Earth 1:50m, domaine public).
  Chaque pays est projete une fois en Path2D, dans un repere fixe de
  LARG x HAUT ; la camera (k, x, y) ne fait que le deplacer et le zoomer.
*/
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import monde from "world-atlas/countries-50m.json";
import codes from "i18n-iso-countries";
import fr from "i18n-iso-countries/langs/fr.json";
import { statutPays, habitantsDe } from "./pays.js";

codes.registerLocale(fr);

const LARG = 2000, HAUT = 1040;
const projection = geoNaturalEarth1().fitExtent([[10, 10], [LARG - 10, HAUT - 10]], { type: "Sphere" });
const chemin = geoPath(projection);
const SPHERE = new Path2D(chemin({ type: "Sphere" }));

const PAYS = feature(monde, monde.objects.countries).features.map(f => {
  const iso3 = f.id ? codes.numericToAlpha3(f.id) || null : null;
  const [[x0, y0], [x1, y1]] = chemin.bounds(f);
  const [cx, cy] = chemin.centroid(f);
  return {
    iso3,
    nom: (iso3 && codes.getName(iso3, "fr")) || f.properties.name,
    chemin: new Path2D(chemin(f)),
    boite: [x0, y0, x1, y1],
    centre: [cx, cy],
    statut: iso3 ? statutPays(iso3) : "bientot",
  };
});

export const NOMBRE_PAYS = PAYS.length;
export const nomDuPays = iso3 => (PAYS.find(p => p.iso3 === iso3) || {}).nom || iso3;

const TEINTES = {
  parle: { fond: "#5E8C5A", survol: "#7FB477", trait: "#CFE8B8" },
  habite: { fond: "#4E6B57", survol: "#6E957A", trait: "#9CC7A6" },
  bientot: { fond: "#2B3547", survol: "#3A465C", trait: "#3D4A62" },
};

export function creerCarte({ onEntrer, onBientot }) {
  const cam = { k: 1, x: 0, y: 0 };
  let kMin = 1;
  let survole = null;
  let vol = null; // animation de camera vers un pays
  let w0 = 0, h0 = 0;
  const nuages = Array.from({ length: 7 }, (_, i) => ({
    x: Math.random() * LARG, y: 120 + Math.random() * (HAUT - 240),
    rx: 120 + Math.random() * 160, ry: 30 + Math.random() * 30, v: 6 + Math.random() * 8 + i,
  }));
  let precedent = null;

  function cadrer(w, h) {
    // de la place en haut pour le titre, en bas pour l'indice
    kMin = Math.min(w / LARG, (h - 70) / HAUT) * 0.98;
    // en portrait, la carte entiere est minuscule : on part un peu zoome, on glisse pour explorer
    cam.k = h > w * 1.2 ? kMin * 1.9 : kMin;
    cam.x = (w - LARG * cam.k) / 2;
    cam.y = (h - HAUT * cam.k) / 2 + 14;
  }

  function borner(w, h) {
    cam.k = Math.max(kMin, Math.min(kMin * 14, cam.k));
    const lw = LARG * cam.k, lh = HAUT * cam.k;
    cam.x = lw < w ? (w - lw) / 2 : Math.min(0, Math.max(w - lw, cam.x));
    cam.y = lh < h ? (h - lh) / 2 + 14 : Math.min(60, Math.max(h - lh - 40, cam.y));
  }

  const versMonde = (mx, my) => [(mx - cam.x) / cam.k, (my - cam.y) / cam.k];

  function paysSous(ctx, mx, my) {
    const [wx, wy] = versMonde(mx, my);
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    let trouve = null;
    for (const p of PAYS) {
      const [x0, y0, x1, y1] = p.boite;
      if (wx < x0 || wx > x1 || wy < y0 || wy > y1) continue;
      if (ctx.isPointInPath(p.chemin, wx, wy)) { trouve = p; break; }
    }
    ctx.restore();
    return trouve;
  }

  function envolerVers(p, w, h) {
    const [x0, y0, x1, y1] = p.boite;
    const k = Math.min(kMin * 9, Math.min(w / (x1 - x0), h / (y1 - y0)) * 0.55);
    const cible = { k, x: w / 2 - ((x0 + x1) / 2) * k, y: h / 2 - ((y0 + y1) / 2) * k };
    vol = { depart: { ...cam }, cible, debut: null, duree: 950, p };
  }

  return {
    dessiner(ctx, w, h, t) {
      if (w !== w0 || h !== h0) { cadrer(w, h); w0 = w; h0 = h; }
      const dt = precedent === null ? 16 : Math.min(64, t - precedent);
      precedent = t;

      if (vol) {
        if (vol.debut === null) vol.debut = t;
        const u = Math.min(1, (t - vol.debut) / vol.duree);
        const e = u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;
        cam.k = vol.depart.k + (vol.cible.k - vol.depart.k) * e;
        cam.x = vol.depart.x + (vol.cible.x - vol.depart.x) * e;
        cam.y = vol.depart.y + (vol.cible.y - vol.depart.y) * e;
        if (u >= 1) { const p = vol.p; vol = null; w0 = 0; onEntrer(p.iso3); }
      }

      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "#070B18");
      g.addColorStop(1, "#04060D");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      ctx.save();
      ctx.translate(cam.x, cam.y);
      ctx.scale(cam.k, cam.k);

      const o = ctx.createRadialGradient(LARG / 2, HAUT / 2, 100, LARG / 2, HAUT / 2, LARG * 0.6);
      o.addColorStop(0, "#10223F");
      o.addColorStop(1, "#0A1528");
      ctx.fillStyle = o;
      ctx.fill(SPHERE);

      const fin = 1 / cam.k;
      for (const p of PAYS) {
        const tt = TEINTES[p.statut];
        ctx.fillStyle = p === survole ? tt.survol : tt.fond;
        ctx.fill(p.chemin);
        ctx.strokeStyle = p === survole ? "#F4F1FB" : tt.trait;
        ctx.lineWidth = (p === survole ? 1.6 : 0.6) * fin;
        ctx.stroke(p.chemin);
      }

      // les pays ou l'on peut entrer pulsent doucement
      const pulse = 0.5 + 0.5 * Math.sin(t * 0.0025);
      for (const p of PAYS) {
        if (p.statut === "bientot") continue;
        const [cx, cy] = p.centre;
        ctx.beginPath();
        ctx.arc(cx, cy, (5 + pulse * 7) * fin, 0, Math.PI * 2);
        ctx.strokeStyle = p.statut === "parle" ? `rgba(232,192,90,${0.8 - pulse * 0.6})` : `rgba(160,220,180,${0.7 - pulse * 0.5})`;
        ctx.lineWidth = 1.6 * fin;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cx, cy, 3 * fin, 0, Math.PI * 2);
        ctx.fillStyle = p.statut === "parle" ? "#E8C05A" : "#A0DCB4";
        ctx.fill();
      }

      // nuages qui derivent
      ctx.save();
      ctx.clip(SPHERE);
      for (const n of nuages) {
        n.x += n.v * dt / 1000;
        if (n.x - n.rx > LARG) n.x = -n.rx;
        ctx.fillStyle = "rgba(220,230,255,0.035)";
        ctx.beginPath();
        ctx.ellipse(n.x, n.y, n.rx, n.ry, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // noms des pays ou il se passe quelque chose
      ctx.textAlign = "center";
      for (const p of PAYS) {
        if (p.statut === "bientot" && p !== survole) continue;
        const [cx, cy] = p.centre;
        ctx.font = `600 ${12 * fin}px 'Space Grotesk', system-ui, sans-serif`;
        ctx.fillStyle = p.statut === "bientot" ? "rgba(201,194,222,.8)" : "#F4F1FB";
        ctx.fillText(p.nom, cx, cy - 12 * fin);
      }
      ctx.restore();

      // bulle d'information sur le pays survole
      if (survole && !vol) {
        const n = survole.iso3 ? habitantsDe(survole.iso3).length : 0;
        const ligne = survole.statut === "parle"
          ? `Il vous parle${n ? `, et ${n} habitant${n > 1 ? "s" : ""} aussi` : ""}. Cliquez pour entrer.`
          : survole.statut === "habite"
            ? `${n} habitant${n > 1 ? "s" : ""} vous attend${n > 1 ? "ent" : ""}. Cliquez pour entrer.`
            : "Bientôt : ce pays n'a pas encore sa fiche.";
        const [cx, cy] = survole.centre;
        const sx = cam.x + cx * cam.k, sy = cam.y + cy * cam.k;
        ctx.font = "13px 'Space Grotesk', system-ui, sans-serif";
        const lg = Math.max(ctx.measureText(ligne).width, ctx.measureText(survole.nom).width) + 28;
        const bx = Math.min(w - lg - 10, Math.max(10, sx - lg / 2));
        const by = Math.min(h - 70, Math.max(80, sy + 18));
        ctx.fillStyle = "rgba(13,11,28,.92)";
        ctx.strokeStyle = "#443A7A";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(bx, by, lg, 52, 6);
        ctx.fill();
        ctx.stroke();
        ctx.textAlign = "left";
        ctx.fillStyle = "#F4F1FB";
        ctx.font = "600 14px 'Space Grotesk', system-ui, sans-serif";
        ctx.fillText(survole.nom, bx + 14, by + 21);
        ctx.fillStyle = "#C9C2DE";
        ctx.font = "12.5px 'Space Grotesk', system-ui, sans-serif";
        ctx.fillText(ligne, bx + 14, by + 40);
      }
    },

    survoler(ctx, mx, my) {
      if (vol) return false;
      survole = paysSous(ctx, mx, my);
      return !!survole;
    },

    cliquer(ctx, mx, my, w, h) {
      if (vol) return;
      const p = paysSous(ctx, mx, my);
      if (!p) return;
      if (p.statut === "bientot") { onBientot(p.nom); return; }
      survole = null;
      envolerVers(p, w, h);
    },

    glisser(dx, dy, w, h) {
      if (vol) return;
      cam.x += dx; cam.y += dy;
      borner(w, h);
    },

    zoomer(facteur, mx, my, w, h) {
      if (vol) return;
      const [wx, wy] = versMonde(mx, my);
      cam.k = Math.max(kMin, Math.min(kMin * 14, cam.k * facteur));
      cam.x = mx - wx * cam.k;
      cam.y = my - wy * cam.k;
      borner(w, h);
    },
  };
}
