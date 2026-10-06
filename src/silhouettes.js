import { ZOO } from "./zoo.js";
/*
  Les silhouettes du monde, dessinees au canvas 2D.

  Une fonction par entite : animaux de profil ou de trois quarts, fruits
  reconnaissables, pays en vrai contour de carte. Chacune recoit un contexte
  deja translate sur l'entite, un rayon r qui sert d'unite, un booleen vif
  (survole ou actif) et le temps t en millisecondes.

  Regle du fichier : tout se dessine en fraction de r, jamais en pixels. Une
  silhouette doit rester juste a 30 px comme a 300 px. Le contour exterieur
  reprend ctx.strokeStyle, que l'appelant passe a la couleur d'accent au
  survol : c'est ce qui garde le survol visible.
*/

(function () {
"use strict";

/* ----------------------------------------------------------- corbeau */
function dessinerCorbeau(ctx, r, vif, t) {
  const trait = ctx.strokeStyle;
  const lw = ctx.lineWidth;
  const queue = Math.sin(t * 0.0009) * 0.03;
  const aile = Math.sin(t * 0.0011 + 1.3) * 0.015;
  const tete = Math.sin(t * 0.0007 + 0.4) * 0.02;
  const m = function (x, y) { ctx.moveTo(x * r, y * r); };
  const l = function (x, y) { ctx.lineTo(x * r, y * r); };
  const q = function (a, b, x, y) { ctx.quadraticCurveTo(a * r, b * r, x * r, y * r); };
  const c = function (a, b, d, e, x, y) { ctx.bezierCurveTo(a * r, b * r, d * r, e * r, x * r, y * r); };
  const fin = function (k) { return Math.max(1, r * k); };

  ctx.save();

  // branche sous les pieds
  ctx.beginPath();
  m(-1.12, 1.16); q(0, 1.12, 1.18, 1.15);
  l(1.18, 1.25); q(0, 1.22, -1.12, 1.27);
  ctx.closePath();
  ctx.fillStyle = "#5E4632";
  ctx.fill();
  ctx.strokeStyle = "#35261A";
  ctx.lineWidth = fin(0.02);
  ctx.stroke();
  ctx.beginPath();
  m(-0.8, 1.2); q(-0.4, 1.185, -0.05, 1.19);
  m(0.45, 1.19); q(0.75, 1.18, 1.0, 1.19);
  ctx.strokeStyle = "#7E624A";
  ctx.lineWidth = fin(0.012);
  ctx.stroke();

  // queue courte, arrondie, dans l'axe du dos
  ctx.save();
  ctx.translate(-r * 0.48, r * 0.35);
  ctx.rotate(queue);
  ctx.translate(r * 0.48, -r * 0.35);
  ctx.beginPath();
  m(-0.54, 0.16);
  q(-0.74, 0.52, -0.9, 0.8);
  c(-1.0, 0.98, -0.84, 1.1, -0.7, 1.0);
  q(-0.5, 0.8, -0.34, 0.5);
  ctx.closePath();
  const gq = ctx.createLinearGradient(-r * 0.5, r * 0.2, -r * 0.9, r * 1.0);
  gq.addColorStop(0, "#17171f");
  gq.addColorStop(1, "#1d1f2e");
  ctx.fillStyle = gq;
  ctx.fill();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.stroke();
  ctx.beginPath();
  m(-0.5, 0.4); q(-0.66, 0.66, -0.82, 0.9);
  m(-0.42, 0.5); q(-0.58, 0.76, -0.72, 0.96);
  ctx.strokeStyle = "rgba(96,104,190,0.38)";
  ctx.lineWidth = fin(0.014);
  ctx.stroke();
  ctx.restore();

  // pattes longues et doigts agrippes a la branche
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#1B1B22";
  ctx.lineWidth = fin(0.045);
  ctx.beginPath();
  m(0.1, 0.66); l(0.06, 1.15);
  m(0.26, 0.66); l(0.25, 1.15);
  ctx.stroke();
  ctx.lineWidth = fin(0.032);
  ctx.beginPath();
  m(0.06, 1.15); q(0.16, 1.12, 0.21, 1.19);
  m(0.06, 1.15); l(-0.06, 1.19);
  m(0.25, 1.15); q(0.35, 1.12, 0.4, 1.19);
  m(0.25, 1.15); l(0.13, 1.19);
  ctx.stroke();
  ctx.lineWidth = fin(0.012);
  ctx.strokeStyle = "rgba(120,120,135,0.45)";
  ctx.beginPath();
  m(0.085, 0.8); l(0.07, 1.1);
  m(0.245, 0.8); l(0.24, 1.1);
  ctx.stroke();

  // corps, cou et tete : une seule silhouette, plus droite
  const plume = ctx.createLinearGradient(-r * 0.5, -r * 1.1, r * 0.5, r * 0.7);
  plume.addColorStop(0, "#1c1c27");
  plume.addColorStop(0.5, "#15151c");
  plume.addColorStop(1, "#111116");
  ctx.save();
  ctx.translate(r * 0.2, -r * 0.5);
  ctx.rotate(tete * 0.4);
  ctx.translate(-r * 0.2, r * 0.5);
  ctx.beginPath();
  m(0.66, -0.9);
  q(0.56, -1.14, 0.35, -1.12);
  c(0.14, -1.1, 0.05, -0.94, 0.08, -0.78);
  q(0.07, -0.6, -0.1, -0.48);
  c(-0.32, -0.3, -0.5, -0.04, -0.56, 0.28);
  q(-0.52, 0.46, -0.38, 0.54);
  c(-0.18, 0.66, 0.05, 0.68, 0.22, 0.64);
  c(0.44, 0.58, 0.58, 0.36, 0.61, 0.04);
  c(0.64, -0.24, 0.58, -0.44, 0.48, -0.53);
  q(0.58, -0.6, 0.66, -0.68);
  ctx.closePath();
  ctx.fillStyle = plume;
  ctx.fill();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.stroke();

  // reflets bleu violet sur la nuque, le dos et le poitrail
  ctx.lineCap = "round";
  ctx.beginPath();
  m(0.3, -1.08); c(0.12, -1.04, 0.07, -0.9, 0.1, -0.76);
  m(0.04, -0.58); c(-0.2, -0.4, -0.4, -0.16, -0.48, 0.18);
  ctx.strokeStyle = "rgba(104,110,210,0.42)";
  ctx.lineWidth = fin(0.035);
  ctx.stroke();
  ctx.beginPath();
  m(0.55, -0.36); c(0.58, -0.16, 0.56, 0.1, 0.5, 0.3);
  ctx.strokeStyle = "rgba(120,100,190,0.28)";
  ctx.lineWidth = fin(0.03);
  ctx.stroke();

  // culotte : plumes qui prolongent la cuisse, meme noir que le ventre
  ctx.beginPath();
  m(-0.02, 0.4);
  q(-0.06, 0.62, 0.04, 0.72);
  q(0.08, 0.66, 0.12, 0.76);
  q(0.16, 0.68, 0.2, 0.77);
  q(0.24, 0.68, 0.29, 0.74);
  q(0.36, 0.6, 0.34, 0.42);
  q(0.16, 0.34, -0.02, 0.4);
  ctx.closePath();
  ctx.fillStyle = "#15151c";
  ctx.fill();
  ctx.beginPath();
  m(0.04, 0.72); q(0.08, 0.66, 0.12, 0.76);
  q(0.16, 0.68, 0.2, 0.77); q(0.24, 0.68, 0.29, 0.74);
  ctx.strokeStyle = "rgba(96,100,165,0.45)";
  ctx.lineWidth = fin(0.012);
  ctx.stroke();
  ctx.beginPath();
  m(0.12, 0.56); q(0.1, 0.64, 0.12, 0.7);
  m(0.22, 0.58); q(0.22, 0.66, 0.2, 0.72);
  ctx.strokeStyle = "rgba(100,104,170,0.22)";
  ctx.lineWidth = fin(0.012);
  ctx.stroke();

  // aile repliee, plus petite : le dos et le poitrail restent visibles
  ctx.save();
  ctx.translate(r * 0.3, -r * 0.28);
  ctx.rotate(aile);
  ctx.translate(-r * 0.3, r * 0.28);
  ctx.beginPath();
  m(0.32, -0.26);
  c(0.06, -0.34, -0.2, -0.16, -0.32, 0.08);
  q(-0.5, 0.36, -0.66, 0.66);
  c(-0.4, 0.54, -0.1, 0.44, 0.14, 0.28);
  q(0.42, 0.08, 0.32, -0.26);
  ctx.closePath();
  const ga = ctx.createLinearGradient(r * 0.1, -r * 0.3, -r * 0.3, r * 0.6);
  ga.addColorStop(0, "#252841");
  ga.addColorStop(0.45, "#191a26");
  ga.addColorStop(1, "#141419");
  ctx.fillStyle = ga;
  ctx.fill();
  ctx.strokeStyle = trait;
  ctx.lineWidth = Math.max(1, lw * 0.8);
  ctx.stroke();
  // couvertures et remiges, reflet bleu violet
  ctx.beginPath();
  m(0.26, -0.18); q(-0.02, -0.14, -0.26, 0.1);
  m(0.2, 0.06); q(-0.1, 0.12, -0.42, 0.36);
  m(0.06, 0.24); q(-0.24, 0.32, -0.56, 0.56);
  ctx.strokeStyle = "rgba(112,118,215,0.45)";
  ctx.lineWidth = fin(0.015);
  ctx.stroke();
  ctx.restore();
  ctx.restore();

  // tete (bec et plaque), suit le leger mouvement du corps
  ctx.save();
  ctx.translate(r * 0.2, -r * 0.5);
  ctx.rotate(tete * 0.4);
  ctx.translate(-r * 0.2, r * 0.5);

  // cercle discret autour de l'oeil pour qu'il se lise sur le noir
  ctx.beginPath();
  ctx.arc(r * 0.44, -r * 0.88, r * 0.07, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(120,124,170,0.3)";
  ctx.lineWidth = fin(0.01);
  ctx.stroke();

  // bec long et droit, noir gris
  ctx.beginPath();
  m(0.62, -0.93);
  q(0.98, -0.9, 1.36, -0.74);
  q(0.98, -0.66, 0.62, -0.7);
  ctx.closePath();
  ctx.fillStyle = "#26262d";
  ctx.fill();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.stroke();
  ctx.beginPath();
  m(0.74, -0.79); q(1.02, -0.77, 1.3, -0.745);
  ctx.strokeStyle = "#0e0e12";
  ctx.lineWidth = fin(0.014);
  ctx.stroke();
  ctx.beginPath();
  m(0.8, -0.885); q(1.06, -0.86, 1.28, -0.77);
  ctx.strokeStyle = "rgba(160,160,178,0.45)";
  ctx.stroke();

  // plaque de peau nue grisatre a la base du bec, plus discrete
  ctx.beginPath();
  m(0.56, -0.92);
  q(0.66, -0.95, 0.76, -0.9);
  q(0.73, -0.82, 0.76, -0.72);
  q(0.66, -0.64, 0.55, -0.66);
  q(0.51, -0.79, 0.56, -0.92);
  ctx.closePath();
  ctx.fillStyle = "#9E9A94";
  ctx.fill();
  ctx.strokeStyle = "#6E6A66";
  ctx.lineWidth = fin(0.01);
  ctx.stroke();
  ctx.restore();

  ctx.restore();
  return { x: 0.44, y: -0.88, ecart: 0, taille: 0.055, couleur: "#0B0B0F" };
}

/* ------------------------------------------------------------ poulpe */
function dessinerPoulpe(ctx, r, vif, t) {
  const trait = ctx.strokeStyle;
  const lw = ctx.lineWidth;
  const PI = Math.PI;
  const N = 9;

  // calcule la ligne centrale d'un bras, de la base vers la pointe
  function ligneBras(i) {
    const k = i / 7;
    const cote = k < 0.5 ? -1 : 1;
    const ext = Math.abs(k - 0.5) * 2;
    const x0 = r * (-0.34 + k * 0.68);
    const y0 = r * 0.12;
    const a0 = PI - 0.38 - k * (PI - 0.76);
    const curl = 0.7 + ext * 2.1;
    const L = r * (1.14 + (1 - ext) * 0.2);
    const pas = L / N;
    const pts = [[x0, y0]];
    let x = x0, y = y0;
    for (let s = 1; s <= N; s++) {
      const u = s / N;
      const onde = Math.sin(t * 0.0011 + i * 1.3 - u * 2.6) * 0.28 * u;
      const a = a0 - cote * curl * u * u + onde;
      x += Math.cos(a) * pas;
      y += Math.sin(a) * pas;
      pts.push([x, y]);
    }
    return pts;
  }

  // bras effile, rempli, avec un contour
  function bras(pts, couleur, dessous) {
    const n = pts.length;
    const g = [], d = [];
    for (let s = 0; s < n; s++) {
      const p = pts[s];
      const q = pts[Math.min(n - 1, s + 1)];
      const o = pts[Math.max(0, s - 1)];
      let dx = q[0] - o[0], dy = q[1] - o[1];
      const m = Math.hypot(dx, dy) || 1;
      dx /= m; dy /= m;
      const w = r * (0.15 * (1 - s / (n - 1)) + 0.012);
      g.push([p[0] - dy * w, p[1] + dx * w]);
      d.push([p[0] + dy * w, p[1] - dx * w]);
    }
    ctx.beginPath();
    ctx.moveTo(g[0][0], g[0][1]);
    for (let s = 1; s < n; s++) ctx.lineTo(g[s][0], g[s][1]);
    const pt = pts[n - 1];
    ctx.lineTo(pt[0], pt[1]);
    for (let s = n - 1; s >= 0; s--) ctx.lineTo(d[s][0], d[s][1]);
    ctx.closePath();
    ctx.fillStyle = couleur;
    ctx.fill();
    ctx.strokeStyle = trait;
    ctx.lineWidth = lw;
    ctx.stroke();

    // ventouses claires sur l'envers du bras
    if (dessous) {
      const bord = dessous < 0 ? g : d;
      ctx.fillStyle = "#F3D7C2";
      ctx.strokeStyle = "#A8583F";
      ctx.lineWidth = Math.max(1, r * 0.012);
      ctx.beginPath();
      for (let s = 2; s < n - 1; s++) {
        const p = pts[s];
        const b = bord[s];
        const cx = p[0] + (b[0] - p[0]) * 0.55;
        const cy = p[1] + (b[1] - p[1]) * 0.55;
        const rv = r * (0.052 * (1 - s / n) + 0.012);
        ctx.moveTo(cx + rv, cy);
        ctx.arc(cx, cy, rv, 0, PI * 2);
      }
      ctx.fill();
      ctx.stroke();
    }
  }

  const lignes = [];
  for (let i = 0; i < 8; i++) lignes.push(ligneBras(i));

  // membrane entre la base des bras
  ctx.beginPath();
  ctx.moveTo(-r * 0.5, r * 0.02);
  ctx.quadraticCurveTo(-r * 0.62, r * 0.36, -r * 0.3, r * 0.5);
  ctx.quadraticCurveTo(0, r * 0.62, r * 0.3, r * 0.5);
  ctx.quadraticCurveTo(r * 0.62, r * 0.36, r * 0.5, r * 0.02);
  ctx.closePath();
  ctx.fillStyle = "#9A4531";
  ctx.fill();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.stroke();

  // bras : les exterieurs derriere, les centraux devant
  const ordre = [0, 7, 1, 6, 2, 5, 3, 4];
  for (let j = 0; j < 8; j++) {
    const i = ordre[j];
    const clair = j < 2 ? "#96432F" : j < 4 ? "#A24B34" : j < 6 ? "#AE5438" : "#B95D3E";
    // les bras exterieurs se retournent : on voit leurs ventouses
    const dessous = i === 0 ? 1 : i === 7 ? -1 : i === 2 ? 1 : i === 5 ? -1 : 0;
    bras(lignes[i], clair, dessous);
  }

  // manteau en sac, qui se balance doucement
  ctx.save();
  ctx.translate(0, -r * 0.2);
  ctx.rotate(Math.sin(t * 0.0006) * 0.06);
  const gm = ctx.createLinearGradient(0, -r * 1.08, 0, 0);
  gm.addColorStop(0, "#D9805A");
  gm.addColorStop(1, "#A84E36");
  ctx.beginPath();
  ctx.moveTo(-r * 0.4, 0);
  ctx.bezierCurveTo(-r * 0.78, -r * 0.3, -r * 0.7, -r * 1.08, r * 0.02, -r * 1.08);
  ctx.bezierCurveTo(r * 0.74, -r * 1.08, r * 0.8, -r * 0.3, r * 0.4, 0);
  ctx.closePath();
  ctx.fillStyle = gm;
  ctx.fill();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.stroke();

  // marbrures du manteau
  ctx.fillStyle = "#8C3A26";
  ctx.beginPath();
  const taches = [[-0.3, -0.78, 0.07], [0.12, -0.9, 0.05], [0.32, -0.62, 0.06], [-0.12, -0.5, 0.05], [0.05, -0.28, 0.045], [-0.38, -0.36, 0.04], [0.4, -0.3, 0.04]];
  for (let k = 0; k < taches.length; k++) {
    const q = taches[k];
    ctx.moveTo(r * (q[0] + q[2]), r * q[1]);
    ctx.ellipse(r * q[0], r * q[1], r * q[2], r * q[2] * 0.7, k, 0, PI * 2);
  }
  ctx.fill();
  ctx.fillStyle = "#EFA27C";
  ctx.beginPath();
  const clairs = [[-0.12, -0.84, 0.035], [0.26, -0.8, 0.03], [-0.36, -0.58, 0.03], [0.18, -0.46, 0.03]];
  for (let k = 0; k < clairs.length; k++) {
    const q = clairs[k];
    ctx.moveTo(r * (q[0] + q[2]), r * q[1]);
    ctx.arc(r * q[0], r * q[1], r * q[2], 0, PI * 2);
  }
  ctx.fill();

  // reflet humide sur le haut du sac
  ctx.strokeStyle = "rgba(255,226,200,0.55)";
  ctx.lineWidth = Math.max(1, r * 0.035);
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(-r * 0.42, -r * 0.7);
  ctx.quadraticCurveTo(-r * 0.36, -r * 1.0, -r * 0.08, -r * 1.04);
  ctx.stroke();
  ctx.restore();

  // tete, entre le manteau et les bras
  ctx.beginPath();
  ctx.ellipse(0, -r * 0.02, r * 0.44, r * 0.26, 0, 0, PI * 2);
  ctx.fillStyle = "#B85C3E";
  ctx.fill();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.stroke();

  // bosses des yeux, saillantes sur les cotes
  for (let c = -1; c <= 1; c += 2) {
    ctx.beginPath();
    ctx.ellipse(c * r * 0.36, -r * 0.16, r * 0.17, r * 0.15, c * 0.35, 0, PI * 2);
    ctx.fillStyle = "#C96C4A";
    ctx.fill();
    ctx.strokeStyle = trait;
    ctx.lineWidth = lw;
    ctx.stroke();
    // iris dore autour de l'oeil
    ctx.beginPath();
    ctx.ellipse(c * r * 0.36, -r * 0.16, r * 0.11, r * 0.09, 0, 0, PI * 2);
    ctx.fillStyle = "#E3B45C";
    ctx.fill();
    // petite papille au-dessus de l'oeil
    ctx.beginPath();
    ctx.moveTo(c * r * 0.3, -r * 0.29);
    ctx.lineTo(c * r * 0.38, -r * 0.37);
    ctx.lineTo(c * r * 0.43, -r * 0.28);
    ctx.fillStyle = "#C96C4A";
    ctx.fill();
  }

  // siphon, petit tube sur le cote
  ctx.beginPath();
  ctx.ellipse(r * 0.14, r * 0.16, r * 0.07, r * 0.045, -0.4, 0, PI * 2);
  ctx.fillStyle = "#A04A33";
  ctx.fill();
  ctx.strokeStyle = "#7A3222";
  ctx.lineWidth = Math.max(1, r * 0.015);
  ctx.stroke();

  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
}

/* --------------------------------------------------------- elephante */
function dessinerElephante(ctx, r, vif, t) {
  const trait = ctx.strokeStyle;
  const lw = ctx.lineWidth;
  const PI = Math.PI;
  const OMBRE = "#77726A", PLI = "rgba(52,46,40,0.5)", ONGLE = "#D9D0BD";
  const fin = Math.max(1, r * 0.012);
  const balance = Math.sin(t * 0.0007) * 0.045;

  // degrade vertical commun au corps et aux pattes proches : aucune couture
  const grad = ctx.createLinearGradient(0, -r * 1.0, 0, r * 1.25);
  grad.addColorStop(0, "#B4AFA6");
  grad.addColorStop(0.55, "#99948B");
  grad.addColorStop(1, "#8A857C");

  // une patte en colonne : haut cache dans le corps, genou ou poignet, pied evase
  function patte(cx, haut, bas, w, avant, remplissage, lointaine) {
    const H = bas - haut;
    const X = f => r * (cx + f * w), Y = f => r * (haut + f * H);
    ctx.beginPath();
    // bord arriere
    ctx.moveTo(X(-0.56), Y(0));
    if (avant) {
      ctx.bezierCurveTo(X(-0.66), Y(0.2), X(-0.46), Y(0.4), X(-0.44), Y(0.72));
    } else {
      ctx.bezierCurveTo(X(-0.64), Y(0.35), X(-0.4), Y(0.6), X(-0.42), Y(0.8));
    }
    ctx.quadraticCurveTo(X(-0.46), Y(0.93), X(-0.62), r * (bas - 0.035));
    // sole arrondie
    ctx.quadraticCurveTo(X(-0.64), r * bas, X(-0.44), r * bas);
    ctx.lineTo(X(0.44), r * bas);
    ctx.quadraticCurveTo(X(0.7), r * bas, X(0.66), r * (bas - 0.04));
    // bord avant : cheville, puis genou (arriere) ou poignet (avant)
    ctx.quadraticCurveTo(X(0.45), Y(0.9), X(0.44), Y(0.78));
    if (avant) {
      ctx.bezierCurveTo(X(0.43), Y(0.68), X(0.52), Y(0.64), X(0.48), Y(0.55));
      ctx.quadraticCurveTo(X(0.44), Y(0.3), X(0.56), Y(0));
    } else {
      ctx.bezierCurveTo(X(0.42), Y(0.62), X(0.7), Y(0.54), X(0.6), Y(0.36));
      ctx.quadraticCurveTo(X(0.5), Y(0.18), X(0.52), Y(0));
    }
    ctx.fillStyle = remplissage;
    ctx.fill();
    if (lointaine) ctx.closePath();
    ctx.strokeStyle = trait;
    ctx.lineWidth = lw;
    ctx.stroke();
    // plis au genou et a la cheville, ongles a l avant du pied
    ctx.strokeStyle = PLI;
    ctx.lineWidth = fin;
    ctx.beginPath();
    const g = avant ? 0.6 : 0.5;
    ctx.moveTo(X(-0.3), Y(g));
    ctx.quadraticCurveTo(X(0.05), Y(g + 0.03), X(0.4), Y(g - 0.01));
    ctx.moveTo(X(-0.26), Y(g + 0.06));
    ctx.quadraticCurveTo(X(0.05), Y(g + 0.09), X(0.36), Y(g + 0.05));
    ctx.moveTo(X(-0.34), Y(0.9));
    ctx.quadraticCurveTo(X(0.05), Y(0.93), X(0.42), Y(0.89));
    ctx.stroke();
    ctx.fillStyle = ONGLE;
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.ellipse(X(0.02 + i * 0.2), r * (bas - 0.012), r * w * 0.075, r * w * 0.05, 0, PI, 0);
      ctx.fill();
    }
  }

  // pattes du cote lointain, plus sombres, legerement avancees (pas de marche)
  patte(-0.5, 0.15, 1.16, 0.3, false, OMBRE, true);
  patte(0.62, 0.15, 1.16, 0.29, true, OMBRE, true);

  // queue a touffe, attachee haut sur la croupe, souple et courte
  ctx.save();
  ctx.translate(-r * 1.07, -r * 0.4);
  ctx.rotate(Math.sin(t * 0.0011) * 0.1);
  ctx.lineCap = "round";
  ctx.strokeStyle = OMBRE;
  ctx.lineWidth = Math.max(1, r * 0.04);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-r * 0.1, r * 0.12, -r * 0.04, r * 0.3, -r * 0.1, r * 0.5);
  ctx.stroke();
  ctx.strokeStyle = "#3A342F";
  ctx.lineWidth = Math.max(1, r * 0.018);
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const d = (i - 2) * 0.022;
    ctx.moveTo(-r * 0.1, r * 0.47);
    ctx.quadraticCurveTo(-r * (0.1 + d * 0.6), r * 0.56, -r * (0.1 + d * 1.4), r * (0.64 - Math.abs(d)));
  }
  ctx.stroke();
  ctx.restore();

  // corps et tete : croupe, dos creuse, garrot haut, front bombe, machoire, ventre tombant
  ctx.beginPath();
  ctx.moveTo(-r * 1.08, -r * 0.36);
  ctx.bezierCurveTo(-r * 1.06, -r * 0.58, -r * 0.92, -r * 0.7, -r * 0.72, -r * 0.7);
  ctx.bezierCurveTo(-r * 0.5, -r * 0.7, -r * 0.34, -r * 0.58, -r * 0.14, -r * 0.59);
  ctx.bezierCurveTo(r * 0.06, -r * 0.6, r * 0.2, -r * 0.79, r * 0.4, -r * 0.8);
  ctx.bezierCurveTo(r * 0.56, -r * 0.8, r * 0.64, -r * 1.02, r * 0.88, -r * 1.03);
  ctx.bezierCurveTo(r * 1.08, -r * 1.04, r * 1.23, -r * 0.86, r * 1.22, -r * 0.62);
  ctx.quadraticCurveTo(r * 1.22, -r * 0.44, r * 1.2, -r * 0.3);
  ctx.quadraticCurveTo(r * 1.14, -r * 0.12, r * 1.08, -r * 0.06);
  ctx.quadraticCurveTo(r * 1.06, r * 0.07, r * 0.96, r * 0.1);
  ctx.quadraticCurveTo(r * 0.86, r * 0.14, r * 0.78, r * 0.1);
  ctx.quadraticCurveTo(r * 0.68, r * 0.16, r * 0.64, r * 0.3);
  ctx.bezierCurveTo(r * 0.5, r * 0.46, r * 0.2, r * 0.54, -r * 0.1, r * 0.5);
  ctx.bezierCurveTo(-r * 0.36, r * 0.48, -r * 0.5, r * 0.42, -r * 0.62, r * 0.34);
  ctx.bezierCurveTo(-r * 0.8, r * 0.3, -r * 0.96, r * 0.26, -r * 1.02, r * 0.18);
  ctx.bezierCurveTo(-r * 1.12, r * 0.0, -r * 1.12, -r * 0.2, -r * 1.08, -r * 0.36);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.stroke();

  // lumiere douce sur le dos, ombre sous le ventre
  ctx.save();
  ctx.globalAlpha = 0.12;
  ctx.fillStyle = "#3C3731";
  ctx.beginPath();
  ctx.ellipse(-r * 0.15, r * 0.4, r * 0.55, r * 0.12, 0.02, 0, PI * 2);
  ctx.fill();
  ctx.restore();

  // plis anatomiques : pli du flanc devant la cuisse, pli du coude
  ctx.strokeStyle = PLI;
  ctx.lineWidth = fin;
  ctx.beginPath();
  ctx.moveTo(-r * 0.58, r * 0.34);
  ctx.bezierCurveTo(-r * 0.48, r * 0.16, -r * 0.5, -r * 0.08, -r * 0.62, -r * 0.3);
  ctx.moveTo(-r * 0.2, r * 0.46);
  ctx.quadraticCurveTo(-r * 0.05, r * 0.5, r * 0.12, r * 0.47);
  ctx.stroke();

  // pattes du cote proche
  patte(-0.76, 0.05, 1.22, 0.34, false, grad, false);
  patte(0.4, 0.12, 1.22, 0.33, true, grad, false);

  // grande oreille africaine en eventail, couvre l epaule, bat lentement
  ctx.save();
  ctx.translate(r * 0.8, -r * 0.82);
  ctx.rotate(Math.sin(t * 0.0009) * 0.04);
  ctx.translate(-r * 0.8, r * 0.82);
  ctx.beginPath();
  ctx.moveTo(r * 0.82, -r * 0.9);
  ctx.bezierCurveTo(r * 0.7, -r * 1.1, r * 0.3, -r * 1.08, r * 0.12, -r * 0.9);
  ctx.bezierCurveTo(-r * 0.12, -r * 0.7, -r * 0.1, -r * 0.34, r * 0.04, -r * 0.1);
  ctx.bezierCurveTo(r * 0.13, r * 0.04, r * 0.22, r * 0.2, r * 0.3, r * 0.34);
  ctx.bezierCurveTo(r * 0.4, r * 0.26, r * 0.52, r * 0.18, r * 0.66, r * 0.14);
  ctx.bezierCurveTo(r * 0.8, r * 0.02, r * 0.74, -r * 0.45, r * 0.82, -r * 0.9);
  ctx.closePath();
  const go = ctx.createLinearGradient(r * 0.8, 0, r * 0.05, 0);
  go.addColorStop(0, "#8E8980");
  go.addColorStop(1, "#A7A299");
  ctx.fillStyle = go;
  ctx.fill();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.stroke();
  // bord avant replie et veines en eventail
  ctx.beginPath();
  ctx.moveTo(r * 0.76, -r * 0.84);
  ctx.bezierCurveTo(r * 0.7, -r * 0.5, r * 0.74, -r * 0.1, r * 0.62, r * 0.1);
  ctx.moveTo(r * 0.68, -r * 0.5);
  ctx.quadraticCurveTo(r * 0.45, -r * 0.62, r * 0.24, -r * 0.8);
  ctx.moveTo(r * 0.66, -r * 0.3);
  ctx.quadraticCurveTo(r * 0.4, -r * 0.34, r * 0.14, -r * 0.42);
  ctx.moveTo(r * 0.66, -r * 0.1);
  ctx.quadraticCurveTo(r * 0.44, -r * 0.05, r * 0.2, -r * 0.02);
  ctx.moveTo(r * 0.62, r * 0.04);
  ctx.quadraticCurveTo(r * 0.48, r * 0.12, r * 0.34, r * 0.24);
  ctx.strokeStyle = PLI;
  ctx.lineWidth = fin;
  ctx.stroke();
  ctx.restore();

  // trompe annelee : deux courbes enchainees, balancement plus fort vers le bout
  const S = [
    [[1.12, -0.42], [1.36, -0.08], [1.16 + balance * 0.5, 0.5], [1.26 + balance, 0.96]],
    [[1.26 + balance, 0.96], [1.28 + balance, 1.06], [1.35 + balance, 1.1], [1.41 + balance, 1.04]]
  ];
  const centre = [], gauche = [], droite = [];
  const NA = 12, NB = 4, TOT = NA + NB;
  for (let s = 0; s < 2; s++) {
    const P = S[s], n = s === 0 ? NA : NB;
    for (let i = s === 0 ? 0 : 1; i <= n; i++) {
      const u = i / n, a = 1 - u;
      const x = a * a * a * P[0][0] + 3 * a * a * u * P[1][0] + 3 * a * u * u * P[2][0] + u * u * u * P[3][0];
      const y = a * a * a * P[0][1] + 3 * a * a * u * P[1][1] + 3 * a * u * u * P[2][1] + u * u * u * P[3][1];
      const dx = 3 * a * a * (P[1][0] - P[0][0]) + 6 * a * u * (P[2][0] - P[1][0]) + 3 * u * u * (P[3][0] - P[2][0]);
      const dy = 3 * a * a * (P[1][1] - P[0][1]) + 6 * a * u * (P[2][1] - P[1][1]) + 3 * u * u * (P[3][1] - P[2][1]);
      const l = Math.sqrt(dx * dx + dy * dy) || 1;
      const k = centre.length / TOT;
      const demi = 0.14 - 0.088 * k;
      const nx = -dy / l * demi, ny = dx / l * demi;
      centre.push([x, y, nx, ny]);
      gauche.push([x + nx, y + ny]);
      droite.push([x - nx, y - ny]);
    }
  }
  const M = centre.length - 1;
  const bout = centre[M];
  // remplissage complet
  ctx.beginPath();
  ctx.moveTo(r * gauche[0][0], r * gauche[0][1]);
  for (let i = 1; i <= M; i++) ctx.lineTo(r * gauche[i][0], r * gauche[i][1]);
  ctx.quadraticCurveTo(r * (bout[0] + 0.05), r * (bout[1] - 0.03), r * droite[M][0], r * droite[M][1]);
  for (let i = M - 1; i >= 0; i--) ctx.lineTo(r * droite[i][0], r * droite[i][1]);
  ctx.closePath();
  ctx.fillStyle = "#A29D94";
  ctx.fill();
  // contour ouvert : il ne traverse pas le visage a la racine
  ctx.beginPath();
  ctx.moveTo(r * gauche[3][0], r * gauche[3][1]);
  for (let i = 4; i <= M; i++) ctx.lineTo(r * gauche[i][0], r * gauche[i][1]);
  ctx.quadraticCurveTo(r * (bout[0] + 0.05), r * (bout[1] - 0.03), r * droite[M][0], r * droite[M][1]);
  for (let i = M - 1; i >= 2; i--) ctx.lineTo(r * droite[i][0], r * droite[i][1]);
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.stroke();
  // anneaux, plus serres vers le bout
  ctx.strokeStyle = PLI;
  ctx.lineWidth = fin;
  ctx.beginPath();
  for (let i = 3; i < M - 1; i++) {
    for (const h of [0, 0.5]) {
      const c0 = centre[i], c1 = centre[i + 1];
      const x = c0[0] + (c1[0] - c0[0]) * h, y = c0[1] + (c1[1] - c0[1]) * h;
      const nx = c0[2] * 0.85, ny = c0[3] * 0.85;
      ctx.moveTo(r * (x + nx), r * (y + ny));
      ctx.quadraticCurveTo(r * (x + ny * 0.25), r * (y - nx * 0.25), r * (x - nx), r * (y - ny));
    }
  }
  // doigt de la trompe
  ctx.moveTo(r * bout[0], r * bout[1]);
  ctx.lineTo(r * (bout[0] + 0.04), r * (bout[1] - 0.02));
  ctx.stroke();

  // bouche et levre inferieure, sous la racine de la trompe
  ctx.strokeStyle = "rgba(40,34,30,0.7)";
  ctx.lineWidth = fin;
  ctx.beginPath();
  ctx.moveTo(r * 0.86, r * 0.06);
  ctx.quadraticCurveTo(r * 0.96, r * 0.04, r * 1.04, -r * 0.04);
  ctx.stroke();

  // defense ivoire qui sort de la levre, courbee vers l avant
  ctx.beginPath();
  ctx.moveTo(r * 1.04, -r * 0.12);
  ctx.bezierCurveTo(r * 1.08, r * 0.12, r * 1.24, r * 0.26, r * 1.45, r * 0.2);
  ctx.bezierCurveTo(r * 1.28, r * 0.18, r * 1.18, r * 0.06, r * 1.15, -r * 0.14);
  ctx.closePath();
  const gd = ctx.createLinearGradient(r * 1.05, 0, r * 1.45, 0);
  gd.addColorStop(0, "#D8CCAE");
  gd.addColorStop(1, "#F4EDDA");
  ctx.fillStyle = gd;
  ctx.fill();
  ctx.strokeStyle = "#8F8471";
  ctx.lineWidth = fin;
  ctx.stroke();
  // gencive a la base de la defense
  ctx.beginPath();
  ctx.ellipse(r * 1.1, -r * 0.12, r * 0.065, r * 0.04, 0.3, 0, PI * 2);
  ctx.fillStyle = "#8E8980";
  ctx.fill();

  // plis du visage : arcade au-dessus de l oeil, joue, racine de la trompe
  ctx.strokeStyle = PLI;
  ctx.lineWidth = fin;
  ctx.beginPath();
  ctx.moveTo(r * 0.92, -r * 0.62);
  ctx.quadraticCurveTo(r * 1.0, -r * 0.67, r * 1.08, -r * 0.6);
  ctx.moveTo(r * 0.9, -r * 0.4);
  ctx.quadraticCurveTo(r * 0.96, -r * 0.24, r * 0.92, -r * 0.08);
  ctx.moveTo(r * 1.1, -r * 0.4);
  ctx.quadraticCurveTo(r * 1.17, -r * 0.43, r * 1.23, -r * 0.38);
  ctx.moveTo(r * 1.12, -r * 0.3);
  ctx.quadraticCurveTo(r * 1.19, -r * 0.33, r * 1.26, -r * 0.27);
  ctx.stroke();

  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  return { x: 1.0, y: -0.52, ecart: 0, taille: 0.045, couleur: "#1A1410" };
}

/* ----------------------------------------------------------- axolotl */
function dessinerAxolotl(ctx, r, vif, t) {
  const trait = ctx.strokeStyle;
  const lw = Math.max(1, r * 0.028);
  const onde = Math.sin(t * 0.0011) * 0.12;

  // couleurs d'un leucistique : rose pale, branchies rouge framboise
  const PEAU = "#F4C7D0", PEAU_OMBRE = "#DE9AAB", PEAU_CLAIRE = "#FFE4E8";
  const BRANCHIE = "#D8345E", FILAMENT = "#F0668A";

  // point et tangente sur une courbe de Bezier cubique
  function bez(p, s) {
    const u = 1 - s;
    const a = u * u * u, b = 3 * u * u * s, c = 3 * u * s * s, d = s * s * s;
    const x = a * p[0] + b * p[2] + c * p[4] + d * p[6];
    const y = a * p[1] + b * p[3] + c * p[5] + d * p[7];
    const dx = 3 * u * u * (p[2] - p[0]) + 6 * u * s * (p[4] - p[2]) + 3 * s * s * (p[6] - p[4]);
    const dy = 3 * u * u * (p[3] - p[1]) + 6 * u * s * (p[5] - p[3]) + 3 * s * s * (p[7] - p[5]);
    const n = Math.hypot(dx, dy) || 1;
    return [x, y, -dy / n, dx / n];
  }

  // ruban effile le long de l'axe de la queue
  function ruban(axe, largeur, fin) {
    const N = 10, g = [], d = [];
    for (let i = 0; i <= N; i++) {
      const s = i / N;
      const q = bez(axe, s);
      const w = largeur * (1 - s * fin) * (i === N ? 0.15 : 1);
      g.push(q[0] + q[2] * w, q[1] + q[3] * w);
      d.push(q[0] - q[2] * w, q[1] - q[3] * w);
    }
    ctx.beginPath();
    ctx.moveTo(g[0] * r, g[1] * r);
    for (let i = 2; i < g.length; i += 2) ctx.lineTo(g[i] * r, g[i + 1] * r);
    for (let i = d.length - 2; i >= 0; i -= 2) ctx.lineTo(d[i] * r, d[i + 1] * r);
    ctx.closePath();
  }

  // axe de la queue : part du bassin et s'enroule vers la droite
  const axe = [0, 0.55, 0.02, 0.92, 0.3 + onde * 0.4, 1.2, 0.78 + onde, 1.1 + onde * 0.3];

  // nageoire caudale translucide, plus large que la queue
  ctx.save();
  ctx.globalAlpha = 0.7;
  ruban(axe, 0.2, 0.8);
  ctx.fillStyle = PEAU_CLAIRE;
  ctx.fill();
  ctx.lineWidth = lw;
  ctx.strokeStyle = trait;
  ctx.stroke();
  ctx.restore();

  // queue charnue
  ruban(axe, 0.12, 0.92);
  ctx.fillStyle = PEAU;
  ctx.fill();
  ctx.strokeStyle = PEAU_OMBRE;
  ctx.lineWidth = lw;
  ctx.stroke();

  // pattes : bras court, main a quatre doigts, pied a cinq orteils
  function patte(sx, ax, ay, bx, by, cx, cy, doigts, dir) {
    ctx.beginPath();
    ctx.moveTo(sx * ax * r, ay * r);
    ctx.quadraticCurveTo(sx * bx * r, by * r, sx * cx * r, cy * r);
    ctx.lineCap = "round";
    ctx.strokeStyle = trait;
    ctx.lineWidth = Math.max(2, r * 0.13);
    ctx.stroke();
    ctx.strokeStyle = PEAU;
    ctx.lineWidth = Math.max(1, r * 0.13 - lw * 2);
    ctx.stroke();
    // doigts en eventail
    ctx.beginPath();
    for (let i = 0; i < doigts; i++) {
      const a = dir + (i - (doigts - 1) / 2) * 0.42;
      ctx.moveTo(sx * cx * r, cy * r);
      ctx.lineTo(sx * (cx + Math.cos(a) * 0.11) * r, (cy + Math.sin(a) * 0.11) * r);
    }
    ctx.strokeStyle = PEAU_OMBRE;
    ctx.lineWidth = Math.max(1, r * 0.035);
    ctx.stroke();
  }
  const pas = Math.sin(t * 0.0008) * 0.03;
  for (const sx of [-1, 1]) {
    patte(sx, 0.3, -0.12, 0.6, -0.2 + pas, 0.66, 0.0, 4, -0.2);
    patte(sx, 0.28, 0.46, 0.58, 0.44 - pas, 0.62, 0.68, 5, 0.5);
  }

  // branchies : trois panaches plumeux de chaque cote, qui ondulent lentement
  const tiges = [[0.46, -0.74, -0.95, 0.5], [0.52, -0.6, -0.4, 0.56], [0.47, -0.47, 0.12, 0.48]];
  ctx.lineCap = "round";
  for (const sx of [-1, 1]) {
    for (let i = 0; i < 3; i++) {
      const tg = tiges[i];
      const a = tg[2] + Math.sin(t * 0.0014 + i * 1.3 + sx) * 0.09;
      const L = tg[3];
      const ca = Math.cos(a), sa = Math.sin(a);
      const x0 = sx * tg[0] * r, y0 = tg[1] * r;
      const x1 = x0 + sx * ca * L * r, y1 = y0 + sa * L * r;
      // filaments de part et d'autre de la tige
      ctx.beginPath();
      for (let k = 1; k <= 5; k++) {
        const f = k / 6;
        const px = x0 + (x1 - x0) * f, py = y0 + (y1 - y0) * f;
        const lf = (0.16 - f * 0.08) * r;
        for (const c of [-1, 1]) {
          const b = a + c * 1.05 + 0.25;
          ctx.moveTo(px, py);
          ctx.lineTo(px + sx * Math.cos(b) * lf, py + Math.sin(b) * lf);
        }
      }
      ctx.strokeStyle = FILAMENT;
      ctx.lineWidth = Math.max(1, r * 0.04);
      ctx.stroke();
      // tige
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.strokeStyle = BRANCHIE;
      ctx.lineWidth = Math.max(1.2, r * 0.065);
      ctx.stroke();
    }
  }

  // corps et tete en un seul contour : tete large et plate, cou, tronc
  ctx.beginPath();
  ctx.moveTo(0, -1.02 * r);
  ctx.bezierCurveTo(0.34 * r, -1.02 * r, 0.57 * r, -0.92 * r, 0.57 * r, -0.66 * r);
  ctx.bezierCurveTo(0.57 * r, -0.45 * r, 0.36 * r, -0.4 * r, 0.3 * r, -0.27 * r);
  ctx.bezierCurveTo(0.41 * r, -0.1 * r, 0.41 * r, 0.35 * r, 0.3 * r, 0.55 * r);
  ctx.bezierCurveTo(0.24 * r, 0.68 * r, 0.16 * r, 0.74 * r, 0.1 * r, 0.8 * r);
  ctx.lineTo(-0.1 * r, 0.8 * r);
  ctx.bezierCurveTo(-0.16 * r, 0.74 * r, -0.24 * r, 0.68 * r, -0.3 * r, 0.55 * r);
  ctx.bezierCurveTo(-0.41 * r, 0.35 * r, -0.41 * r, -0.1 * r, -0.3 * r, -0.27 * r);
  ctx.bezierCurveTo(-0.36 * r, -0.4 * r, -0.57 * r, -0.45 * r, -0.57 * r, -0.66 * r);
  ctx.bezierCurveTo(-0.57 * r, -0.92 * r, -0.34 * r, -1.02 * r, 0, -1.02 * r);
  ctx.closePath();
  const gr = ctx.createRadialGradient(0, -0.35 * r, r * 0.05, 0, -0.2 * r, r * 0.95);
  gr.addColorStop(0, PEAU_CLAIRE);
  gr.addColorStop(0.6, PEAU);
  gr.addColorStop(1, PEAU_OMBRE);
  ctx.fillStyle = gr;
  ctx.fill();
  ctx.strokeStyle = trait;
  ctx.lineWidth = Math.max(1, lw * 1.2);
  ctx.stroke();

  // details internes : sourire, crete dorsale, plis du cou, taches
  ctx.lineCap = "round";
  ctx.strokeStyle = "#B8667C";
  ctx.lineWidth = Math.max(1, r * 0.03);
  ctx.beginPath();
  ctx.moveTo(-0.36 * r, -0.87 * r);
  ctx.quadraticCurveTo(0, -0.74 * r, 0.36 * r, -0.87 * r);
  // plis du cou
  ctx.moveTo(-0.22 * r, -0.36 * r);
  ctx.quadraticCurveTo(0, -0.3 * r, 0.22 * r, -0.36 * r);
  ctx.stroke();

  // crete dorsale, depart de la nageoire
  ctx.save();
  ctx.globalAlpha = 0.55;
  ctx.strokeStyle = "#FFF1F3";
  ctx.lineWidth = Math.max(1, r * 0.045);
  ctx.beginPath();
  ctx.moveTo(0, -0.12 * r);
  ctx.quadraticCurveTo(0.01 * r, 0.35 * r, 0, 0.72 * r);
  ctx.stroke();
  ctx.restore();

  // quelques mouchetures sombres, typiques des leucistiques
  ctx.fillStyle = "#9C5A6C";
  const taches = [[-0.2, -0.56, 0.022], [0.24, -0.5, 0.018], [0.14, 0.12, 0.02], [-0.18, 0.3, 0.016]];
  ctx.beginPath();
  for (const s of taches) {
    ctx.moveTo((s[0] + s[2]) * r, s[1] * r);
    ctx.arc(s[0] * r, s[1] * r, s[2] * r, 0, Math.PI * 2);
  }
  ctx.fill();
}

/* -------------------------------------------------------- tardigrade */
function dessinerTardigrade(ctx, r, vif, t) {
  // Tardigrade de profil, tete a droite. Tonneau bas pose presque au sol,
  // dos en quatre bosses (segments), huit moignons coniques a griffes,
  // museau en tube avec ouverture, organes vus par transparence.
  const trait = ctx.strokeStyle;
  const lw = ctx.lineWidth;
  const PI2 = Math.PI * 2;
  const s = t * 0.0009;

  // moignon conique mou : attache (ax, ay), angle a (positif = vers l'arriere),
  // longueur L, demi-largeurs haut wh et bas wb, sens des griffes dg (+1 avant, -1 arriere)
  function patte(ax, ay, a, L, wh, wb, fond, contour, griffe, dg, pli) {
    ctx.save();
    ctx.translate(r * ax, r * ay);
    ctx.rotate(a);
    ctx.beginPath();
    ctx.moveTo(-r * wh, 0);
    ctx.bezierCurveTo(-r * wh * 1.12, r * L * 0.45, -r * wb * 1.2, r * L * 0.8, -r * wb, r * L);
    ctx.quadraticCurveTo(0, r * (L + wb * 0.45), r * wb, r * L);
    ctx.bezierCurveTo(r * wb * 1.2, r * L * 0.8, r * wh * 1.12, r * L * 0.45, r * wh, 0);
    ctx.fillStyle = fond;
    ctx.fill();
    ctx.strokeStyle = contour;
    ctx.lineWidth = lw;
    ctx.stroke();
    if (pli) {
      ctx.strokeStyle = "#B39A6E";
      ctx.lineWidth = Math.max(1, r * 0.02);
      ctx.beginPath();
      ctx.moveTo(-r * wb * 1.05, r * L * 0.58);
      ctx.quadraticCurveTo(0, r * L * 0.7, r * wb * 1.05, r * L * 0.58);
      ctx.stroke();
    }
    // trois griffes en crochet, bien sombres
    ctx.strokeStyle = griffe;
    ctx.lineWidth = Math.max(1.3, r * 0.032);
    ctx.lineCap = "round";
    ctx.beginPath();
    for (let k = 0; k < 3; k++) {
      const gx = r * (-wb * 0.6 + k * wb * 0.6);
      const gy = r * (L + wb * 0.22);
      ctx.moveTo(gx, gy);
      ctx.quadraticCurveTo(gx + dg * r * 0.015, gy + r * 0.12, gx + dg * r * 0.1, gy + r * 0.11);
    }
    ctx.stroke();
    ctx.restore();
  }

  // contour du corps : arriere arrondi, 4 bosses dorsales, tete ronde separee
  // par un cou, menton, ventre bas presque au sol
  function corps() {
    ctx.beginPath();
    ctx.moveTo(-r * 1.02, r * 0.86);
    ctx.bezierCurveTo(-r * 1.34, r * 0.74, -r * 1.4, r * 0.02, -r * 1.02, -r * 0.4);
    ctx.quadraticCurveTo(-r * 0.76, -r * 0.74, -r * 0.46, -r * 0.55);
    ctx.quadraticCurveTo(-r * 0.18, -r * 0.8, r * 0.1, -r * 0.57);
    ctx.quadraticCurveTo(r * 0.36, -r * 0.76, r * 0.6, -r * 0.5);
    ctx.quadraticCurveTo(r * 0.7, -r * 0.54, r * 0.76, -r * 0.42);
    ctx.bezierCurveTo(r * 0.9, -r * 0.6, r * 1.18, -r * 0.46, r * 1.2, -r * 0.08);
    ctx.bezierCurveTo(r * 1.23, r * 0.16, r * 1.12, r * 0.34, r * 0.96, r * 0.44);
    ctx.bezierCurveTo(r * 0.86, r * 0.66, r * 0.6, r * 0.9, r * 0.2, r * 0.92);
    ctx.bezierCurveTo(-r * 0.3, r * 0.95, -r * 0.8, r * 0.95, -r * 1.02, r * 0.86);
    ctx.closePath();
  }

  const peau = "#E3CFA3";
  const loin = "#9E8661";
  const loinC = "#6A5638";
  const griffe = "#3A2616";
  const osc = (i) => Math.sin(s + i * 1.7) * 0.07;

  // pattes du cote oppose : decalees vers l'avant, plus sombres, derriere le corps
  const xs = [0.5, -0.06, -0.62];
  for (let i = 0; i < 3; i++) {
    patte(xs[i] + 0.16, 0.76, -osc(i), 0.28, 0.19, 0.1, loin, loinC, griffe, 1, false);
  }
  patte(-0.9, 0.7, 0.5 - osc(3), 0.28, 0.17, 0.09, loin, loinC, griffe, -1, false);

  // museau en tube, sort de l'avant de la tete, legerement vers le bas
  ctx.beginPath();
  ctx.moveTo(r * 1.08, -r * 0.04);
  ctx.bezierCurveTo(r * 1.22, -r * 0.05, r * 1.34, -r * 0.02, r * 1.43, r * 0.04);
  ctx.lineTo(r * 1.43, r * 0.24);
  ctx.bezierCurveTo(r * 1.34, r * 0.28, r * 1.22, r * 0.28, r * 1.06, r * 0.26);
  ctx.closePath();
  ctx.fillStyle = "#DEC89C";
  ctx.fill();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.stroke();
  // anneaux du tube
  ctx.strokeStyle = "#AF956A";
  ctx.lineWidth = Math.max(1, r * 0.018);
  ctx.beginPath();
  ctx.moveTo(r * 1.27, -r * 0.02);
  ctx.quadraticCurveTo(r * 1.3, r * 0.12, r * 1.27, r * 0.27);
  ctx.moveTo(r * 1.36, r * 0.0);
  ctx.quadraticCurveTo(r * 1.39, r * 0.13, r * 1.36, r * 0.26);
  ctx.stroke();
  // levre et ouverture de la bouche, vues de trois quarts
  ctx.fillStyle = "#E9D6AE";
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.beginPath();
  ctx.ellipse(r * 1.44, r * 0.14, r * 0.055, r * 0.115, 0, 0, PI2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#3A2818";
  ctx.beginPath();
  ctx.ellipse(r * 1.45, r * 0.14, r * 0.028, r * 0.068, 0, 0, PI2);
  ctx.fill();

  // corps beige
  const grad = ctx.createRadialGradient(-r * 0.1, -r * 0.3, r * 0.1, 0, r * 0.1, r * 1.4);
  grad.addColorStop(0, "#F3E6C6");
  grad.addColorStop(0.55, peau);
  grad.addColorStop(1, "#BE9F70");
  corps();
  ctx.fillStyle = grad;
  ctx.fill();

  // interieur vu par transparence
  ctx.save();
  corps();
  ctx.clip();
  // bord clair, effet de peau translucide eclairee
  ctx.globalAlpha = 0.32;
  ctx.strokeStyle = "#FFF7E4";
  ctx.lineWidth = r * 0.14;
  corps();
  ctx.stroke();
  // intestin lobe, vert olive
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = "#6F6E30";
  ctx.beginPath();
  const lobes = [[0.36, 0.14, 0.2, 0.17], [0.02, 0.2, 0.24, 0.2], [-0.36, 0.16, 0.23, 0.19], [-0.72, 0.2, 0.2, 0.17], [-0.18, 0.02, 0.18, 0.13]];
  for (const l of lobes) {
    ctx.moveTo(r * (l[0] + l[2]), r * l[1]);
    ctx.ellipse(r * l[0], r * l[1], r * l[2], r * l[3], 0, 0, PI2);
  }
  ctx.fill();
  // bulbe pharyngien et stylets vers la bouche
  ctx.globalAlpha = 0.62;
  ctx.fillStyle = "#8A6E44";
  ctx.beginPath();
  ctx.ellipse(r * 0.78, r * 0.08, r * 0.13, r * 0.11, 0, 0, PI2);
  ctx.fill();
  ctx.strokeStyle = "#6E5534";
  ctx.lineWidth = Math.max(1, r * 0.018);
  ctx.beginPath();
  ctx.moveTo(r * 0.9, r * 0.06);
  ctx.lineTo(r * 1.22, r * 0.1);
  ctx.moveTo(r * 0.9, r * 0.13);
  ctx.lineTo(r * 1.22, r * 0.17);
  ctx.stroke();
  // cellules de reserve, petits disques clairs cernes
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = "#FBF1D8";
  ctx.strokeStyle = "#B8A070";
  ctx.lineWidth = Math.max(1, r * 0.012);
  ctx.beginPath();
  const cel = [[-1.05, 0.2], [-0.95, -0.12], [-0.8, 0.55], [-0.6, -0.3], [-0.52, 0.5], [-0.3, -0.42], [-0.2, 0.62], [0.05, -0.36], [0.2, 0.6], [0.28, -0.2], [0.45, 0.48], [0.5, -0.32], [-1.1, 0.5], [0.62, 0.3]];
  for (const c of cel) {
    ctx.moveTo(r * (c[0] + 0.038), r * c[1]);
    ctx.arc(r * c[0], r * c[1], r * 0.038, 0, PI2);
  }
  ctx.fill();
  ctx.stroke();
  // plis de segmentation, des creux du dos jusqu'au ventre
  ctx.globalAlpha = 0.9;
  ctx.strokeStyle = "#A98D60";
  ctx.lineWidth = Math.max(1.2, r * 0.028);
  ctx.lineCap = "round";
  ctx.beginPath();
  const segs = [-1.02, -0.46, 0.1, 0.6];
  for (const sx of segs) {
    ctx.moveTo(r * sx, -r * 0.56);
    ctx.bezierCurveTo(r * (sx + 0.1), -r * 0.2, r * (sx + 0.1), r * 0.5, r * (sx - 0.02), r * 0.98);
  }
  // cou, separation de la tete
  ctx.moveTo(r * 0.76, -r * 0.42);
  ctx.bezierCurveTo(r * 0.68, -r * 0.1, r * 0.72, r * 0.3, r * 0.92, r * 0.5);
  ctx.stroke();
  // reflet sur les bosses du dos
  ctx.globalAlpha = 0.55;
  ctx.strokeStyle = "#FFFBEF";
  ctx.lineWidth = Math.max(1, r * 0.04);
  ctx.beginPath();
  ctx.moveTo(-r * 0.86, -r * 0.5);
  ctx.quadraticCurveTo(-r * 0.74, -r * 0.6, -r * 0.6, -r * 0.54);
  ctx.moveTo(-r * 0.32, -r * 0.6);
  ctx.quadraticCurveTo(-r * 0.18, -r * 0.68, -r * 0.04, -r * 0.6);
  ctx.moveTo(r * 0.22, -r * 0.58);
  ctx.quadraticCurveTo(r * 0.36, -r * 0.64, r * 0.48, -r * 0.56);
  ctx.stroke();
  ctx.restore();

  // contour exterieur principal
  corps();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.stroke();

  // pattes du cote visible : sortent du dessous du tonneau
  for (let i = 0; i < 3; i++) {
    patte(xs[i], 0.76, osc(i), 0.31, 0.21, 0.115, peau, trait, griffe, 1, true);
  }
  // quatrieme paire, a l'arriere, courte et tournee vers l'arriere
  patte(-0.98, 0.66, 0.62 + osc(3), 0.3, 0.19, 0.1, peau, trait, griffe, -1, true);
}

/* -------------------------------------------------- manchot-empereur */
function dessinerManchot(ctx, r, vif, t) {
  const trait = ctx.strokeStyle;
  const lw = ctx.lineWidth;
  // aide : chemin en fractions de r, liste [op, ...coords]
  const trace = (pts) => {
    ctx.beginPath();
    for (const p of pts) {
      if (p[0] === "M") ctx.moveTo(r * p[1], r * p[2]);
      else if (p[0] === "L") ctx.lineTo(r * p[1], r * p[2]);
      else if (p[0] === "Q") ctx.quadraticCurveTo(r * p[1], r * p[2], r * p[3], r * p[4]);
      else ctx.bezierCurveTo(r * p[1], r * p[2], r * p[3], r * p[4], r * p[5], r * p[6]);
    }
    ctx.closePath();
  };
  const bat = Math.sin(t * 0.0009) * 0.06;
  const balance = Math.sin(t * 0.0005) * 0.018;

  ctx.save();
  // balancement lent autour des pieds
  ctx.translate(0, r * 1.2);
  ctx.rotate(balance);
  ctx.translate(0, -r * 1.2);
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  // pieds noirs, doigts vers l'avant
  ctx.fillStyle = "#2C2A30";
  ctx.lineWidth = lw;
  ctx.strokeStyle = trait;
  for (const x of [0.02, 0.32]) {
    trace([["M", x - 0.14, 1.16], ["Q", x, 1.1, x + 0.17, 1.17], ["Q", x + 0.22, 1.25, x + 0.12, 1.26],
      ["L", x - 0.12, 1.26], ["Q", x - 0.19, 1.22, x - 0.14, 1.16]]);
    ctx.fill();
    ctx.stroke();
  }

  // corps entier, dos et tete noirs a reflet bleu gris
  const gd = ctx.createLinearGradient(-r * 0.6, 0, r * 0.4, 0);
  gd.addColorStop(0, "#39414E");
  gd.addColorStop(0.55, "#252A33");
  gd.addColorStop(1, "#1B1E24");
  ctx.fillStyle = gd;
  const corps = [
    ["M", 0.1, -1.2],
    ["C", -0.18, -1.22, -0.32, -1.0, -0.3, -0.72],
    ["C", -0.3, -0.45, -0.56, -0.1, -0.58, 0.4],
    ["C", -0.6, 0.8, -0.5, 1.05, -0.3, 1.14],
    ["L", -0.44, 1.23],
    ["L", -0.1, 1.17],
    ["C", 0.2, 1.21, 0.5, 1.05, 0.58, 0.7],
    ["C", 0.68, 0.3, 0.55, -0.2, 0.36, -0.52],
    ["C", 0.3, -0.62, 0.36, -0.7, 0.37, -0.8],
    ["C", 0.4, -1.0, 0.32, -1.2, 0.1, -1.2]
  ];
  trace(corps);
  ctx.fill();

  // ventre blanc, poitrail jaune pale en haut, ombre en bas
  const gv = ctx.createLinearGradient(0, -r * 0.6, 0, r * 1.15);
  gv.addColorStop(0, "#F6D77A");
  gv.addColorStop(0.28, "#F8F2DC");
  gv.addColorStop(0.7, "#F2F3F1");
  gv.addColorStop(1, "#C9D0DA");
  ctx.fillStyle = gv;
  trace([
    ["M", 0.35, -0.6],
    ["C", 0.12, -0.5, -0.12, -0.1, -0.14, 0.45],
    ["C", -0.15, 0.85, -0.06, 1.08, 0.04, 1.18],
    ["C", 0.3, 1.16, 0.52, 1.0, 0.575, 0.7],
    ["C", 0.66, 0.3, 0.54, -0.2, 0.36, -0.52]
  ]);
  ctx.fill();

  // tache jaune orange du cou, qui descend vers le poitrail
  ctx.fillStyle = "#F2A23A";
  trace([["M", 0.0, -0.86], ["C", 0.16, -0.86, 0.22, -0.72, 0.33, -0.56],
    ["C", 0.24, -0.48, 0.12, -0.54, 0.05, -0.63], ["C", -0.03, -0.72, -0.07, -0.82, 0.0, -0.86]]);
  ctx.fill();
  ctx.fillStyle = "#F8CF62";
  trace([["M", 0.08, -0.72], ["C", 0.16, -0.7, 0.24, -0.62, 0.3, -0.56],
    ["C", 0.22, -0.52, 0.14, -0.56, 0.08, -0.62], ["C", 0.05, -0.66, 0.05, -0.7, 0.08, -0.72]]);
  ctx.fill();

  // reflet sur le dos
  ctx.strokeStyle = "#5C6778";
  ctx.lineWidth = Math.max(1, r * 0.025);
  ctx.beginPath();
  ctx.moveTo(-r * 0.24, -r * 0.62);
  ctx.bezierCurveTo(-r * 0.3, -r * 0.35, -r * 0.48, -r * 0.05, -r * 0.5, r * 0.4);
  ctx.stroke();

  // contour exterieur principal
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  trace(corps);
  ctx.stroke();

  // aileron le long du corps, bouge a peine
  ctx.save();
  ctx.translate(-r * 0.1, -r * 0.3);
  ctx.rotate(bat);
  ctx.fillStyle = "#23282F";
  trace([["M", -0.02, 0.0], ["C", -0.2, 0.3, -0.16, 0.8, 0.12, 1.06],
    ["C", 0.12, 0.7, 0.11, 0.3, 0.08, 0.02]]);
  ctx.fill();
  ctx.strokeStyle = "#56606F";
  ctx.lineWidth = Math.max(1, lw * 0.8);
  ctx.stroke();
  ctx.restore();

  // bec fin et noir, legerement arque
  ctx.fillStyle = "#15171B";
  trace([["M", 0.35, -0.97], ["Q", 0.62, -0.97, 0.86, -0.8], ["Q", 0.62, -0.85, 0.37, -0.85]]);
  ctx.fill();
  ctx.strokeStyle = trait;
  ctx.lineWidth = Math.max(1, lw * 0.8);
  ctx.stroke();
  // bande orange rose de la mandibule inferieure
  ctx.strokeStyle = "#F28A68";
  ctx.lineWidth = Math.max(1, r * 0.035);
  ctx.beginPath();
  ctx.moveTo(r * 0.42, -r * 0.865);
  ctx.quadraticCurveTo(r * 0.58, -r * 0.855, r * 0.74, -r * 0.82);
  ctx.stroke();

  ctx.restore();
}

/* -------------------------------------------- braise-vampire-commune */
function dessinerChauveSouris(ctx, r, vif, t) {
  const trait = ctx.strokeStyle;
  const lw = ctx.lineWidth;
  // respiration lente des ailes, en radians, tres discrete
  const bat = Math.sin(t * 0.0011) * 0.03;
  const P = (x, y) => [x * r, y * r];
  const W = (f) => Math.max(1, r * f);

  // contour a bord de fourrure : ellipse aux bords legerement dentes
  function fourrure(cx, cy, rx, ry, n, creux) {
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const a = (Math.PI * 2 * i) / n;
      const k = i % 2 ? creux : 1;
      const x = cx + Math.cos(a) * rx * k;
      const y = cy + Math.sin(a) * ry * k;
      if (i === 0) ctx.moveTo(x * r, y * r);
      else ctx.lineTo(x * r, y * r);
    }
    ctx.closePath();
  }

  // squelette de l'aile droite, en fraction de r
  const cou = [0.13, -0.3];
  const epaule = [0.2, -0.12];
  const coude = [0.36, -0.05];
  const poignet = [0.84, -0.62];
  const d2 = [1.04, -0.72];
  const k3 = [1.14, -0.64];
  const d3 = [1.43, -0.44];
  const k4 = [1.1, -0.22];
  const d4 = [1.36, 0.22];
  const k5 = [0.92, 0.06];
  const d5 = [0.98, 0.62];
  const cheville = [0.31, 0.98];
  const flanc = [0.16, 0.56];

  function contourAile() {
    ctx.beginPath();
    ctx.moveTo(...P(cou[0], cou[1]));
    // bord d'attaque : la membrane avant tendue du cou au poignet
    ctx.quadraticCurveTo(...P(0.5, -0.52), ...P(poignet[0], poignet[1] - 0.02));
    ctx.quadraticCurveTo(...P(0.95, -0.72), ...P(d2[0], d2[1]));
    ctx.quadraticCurveTo(...P(1.26, -0.68), ...P(d3[0], d3[1]));
    // bord de fuite festonne entre les doigts
    ctx.quadraticCurveTo(...P(1.2, -0.12), ...P(d4[0], d4[1]));
    ctx.quadraticCurveTo(...P(1.08, 0.32), ...P(d5[0], d5[1]));
    ctx.quadraticCurveTo(...P(0.58, 0.62), ...P(cheville[0], cheville[1]));
    ctx.lineTo(...P(flanc[0], flanc[1]));
    ctx.closePath();
  }

  function aile(cote) {
    ctx.save();
    ctx.scale(cote, 1);
    ctx.translate(epaule[0] * r, epaule[1] * r);
    ctx.rotate(-bat);
    ctx.translate(-epaule[0] * r, -epaule[1] * r);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // membrane, brun sombre chaud, plus claire vers le bout
    contourAile();
    const g = ctx.createRadialGradient(epaule[0] * r, epaule[1] * r, r * 0.1, epaule[0] * r, epaule[1] * r, r * 1.3);
    g.addColorStop(0, "#3C302C");
    g.addColorStop(0.6, "#54443F");
    g.addColorStop(1, "#6E5A52");
    ctx.fillStyle = g;
    ctx.fill();
    ctx.strokeStyle = trait;
    ctx.lineWidth = lw;
    ctx.stroke();

    // panneaux entre les doigts, ombres alternees
    ctx.save();
    ctx.globalAlpha = 0.26;
    ctx.fillStyle = "#1A1210";
    ctx.beginPath();
    ctx.moveTo(...P(poignet[0], poignet[1]));
    ctx.lineTo(...P(k4[0], k4[1]));
    ctx.lineTo(...P(d4[0], d4[1]));
    ctx.quadraticCurveTo(...P(1.08, 0.32), ...P(d5[0], d5[1]));
    ctx.lineTo(...P(k5[0], k5[1]));
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 0.14;
    ctx.fillStyle = "#C4A698";
    ctx.beginPath();
    ctx.moveTo(...P(poignet[0], poignet[1]));
    ctx.lineTo(...P(k3[0], k3[1]));
    ctx.lineTo(...P(d3[0], d3[1]));
    ctx.quadraticCurveTo(...P(1.2, -0.12), ...P(d4[0], d4[1]));
    ctx.lineTo(...P(k4[0], k4[1]));
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // fibres elastiques fines de la membrane, entre bras et patte
    ctx.strokeStyle = "rgba(24,16,14,0.42)";
    ctx.lineWidth = W(0.01);
    ctx.beginPath();
    for (let i = 0; i < 3; i++) {
      const f = 0.25 + i * 0.22;
      ctx.moveTo(...P(0.2 + f * 0.1, 0.1 + f * 0.6));
      ctx.quadraticCurveTo(...P(0.5 + f * 0.2, 0.18 + f * 0.3), ...P(0.62 + f * 0.34, 0.02 + f * 0.5));
    }
    ctx.stroke();

    // doigts : fins, articules, partent tous du poignet
    ctx.strokeStyle = "#937A6E";
    ctx.lineWidth = W(0.02);
    ctx.beginPath();
    ctx.moveTo(...P(poignet[0], poignet[1]));
    ctx.lineTo(...P(d2[0] - 0.02, d2[1] + 0.02));
    for (const [k, d] of [[k3, d3], [k4, d4], [k5, d5]]) {
      ctx.moveTo(...P(poignet[0], poignet[1]));
      ctx.lineTo(...P(k[0], k[1]));
      ctx.lineTo(...P(d[0], d[1]));
    }
    ctx.stroke();

    // humerus puis avant-bras, dans le bord de la membrane
    ctx.fillStyle = "#866E62";
    ctx.beginPath();
    ctx.moveTo(...P(epaule[0], epaule[1] - 0.045));
    ctx.lineTo(...P(coude[0] + 0.01, coude[1] - 0.04));
    ctx.lineTo(...P(poignet[0] + 0.022, poignet[1] + 0.015));
    ctx.lineTo(...P(poignet[0] - 0.02, poignet[1] - 0.015));
    ctx.lineTo(...P(coude[0] - 0.04, coude[1] + 0.025));
    ctx.lineTo(...P(epaule[0], epaule[1] + 0.045));
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#4E3A32";
    ctx.lineWidth = W(0.01);
    ctx.stroke();
    // coude et poignet
    ctx.fillStyle = "#866E62";
    ctx.beginPath();
    ctx.moveTo(coude[0] * r + r * 0.028, coude[1] * r);
    ctx.arc(coude[0] * r, coude[1] * r, r * 0.028, 0, Math.PI * 2);
    ctx.moveTo(poignet[0] * r + r * 0.04, poignet[1] * r);
    ctx.arc(poignet[0] * r, poignet[1] * r, r * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // pouce court et robuste, couche sur le bord d'attaque, pointe vers l'avant
    ctx.strokeStyle = "#A88A7C";
    ctx.lineWidth = W(0.04);
    ctx.beginPath();
    ctx.moveTo(...P(poignet[0], poignet[1]));
    ctx.lineTo(...P(poignet[0] - 0.07, poignet[1] - 0.07));
    ctx.lineTo(...P(poignet[0] - 0.14, poignet[1] - 0.08));
    ctx.stroke();
    // coussinet du pouce
    ctx.fillStyle = "#B89A8C";
    ctx.beginPath();
    ctx.ellipse((poignet[0] - 0.07) * r, (poignet[1] - 0.07) * r, r * 0.028, r * 0.022, -0.6, 0, Math.PI * 2);
    ctx.fill();
    // griffe courte
    ctx.strokeStyle = "#E6DCD0";
    ctx.lineWidth = W(0.016);
    ctx.beginPath();
    ctx.moveTo(...P(poignet[0] - 0.14, poignet[1] - 0.08));
    ctx.quadraticCurveTo(...P(poignet[0] - 0.19, poignet[1] - 0.085), ...P(poignet[0] - 0.19, poignet[1] - 0.045));
    ctx.stroke();
    ctx.restore();
  }
  // tout le haut du corps descend : posture accroupie, pattes repliees dessous
  const bas = 0.1;
  ctx.save();
  ctx.translate(0, bas * r);
  aile(-1);
  aile(1);
  ctx.restore();

  // pattes arriere pliees : hanche, genou releve en dehors, cheville, pied au sol
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  function pattes(ep) {
    ctx.beginPath();
    for (const c of [-1, 1]) {
      ctx.moveTo(c * r * 0.12, r * 0.76);
      ctx.quadraticCurveTo(c * r * 0.34, r * 0.7, c * r * 0.42, r * 0.84);
      ctx.quadraticCurveTo(c * r * 0.42, r * 0.98, c * r * 0.36, r * 1.07);
      ctx.lineTo(c * r * 0.4, r * 1.13);
    }
    ctx.lineWidth = ep;
    ctx.stroke();
  }
  ctx.strokeStyle = trait;
  pattes(W(0.12) + lw * 2);
  ctx.strokeStyle = "#6A574E";
  pattes(W(0.12));
  // pieds larges poses au sol
  ctx.fillStyle = "#7E665C";
  ctx.beginPath();
  for (const c of [-1, 1]) {
    ctx.moveTo(c * r * 0.48, r * 1.16);
    ctx.ellipse(c * r * 0.4, r * 1.16, r * 0.085, r * 0.04, 0, 0, Math.PI * 2);
  }
  ctx.fill();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.stroke();
  // griffes courtes vers l'avant
  ctx.strokeStyle = "#DCD0C4";
  ctx.lineWidth = W(0.016);
  ctx.beginPath();
  for (const c of [-1, 1]) {
    for (let i = -1; i <= 1; i++) {
      ctx.moveTo(c * r * (0.4 + i * 0.05), r * 1.18);
      ctx.lineTo(c * r * (0.41 + i * 0.06), r * 1.24);
    }
  }
  ctx.stroke();

  ctx.save();
  ctx.translate(0, bas * r);
  // corps : cou, epaules tombantes qui recouvrent la racine des bras, ventre en poire
  ctx.beginPath();
  ctx.moveTo(-r * 0.14, -r * 0.36);
  ctx.bezierCurveTo(-r * 0.2, -r * 0.24, -r * 0.3, -r * 0.2, -r * 0.29, -r * 0.06);
  ctx.bezierCurveTo(-r * 0.29, r * 0.22, -r * 0.24, r * 0.5, -r * 0.17, r * 0.66);
  ctx.quadraticCurveTo(0, r * 0.84, r * 0.17, r * 0.66);
  ctx.bezierCurveTo(r * 0.24, r * 0.5, r * 0.29, r * 0.22, r * 0.29, -r * 0.06);
  ctx.bezierCurveTo(r * 0.3, -r * 0.2, r * 0.2, -r * 0.24, r * 0.14, -r * 0.36);
  ctx.closePath();
  const gc = ctx.createLinearGradient(0, -r * 0.36, 0, r * 0.8);
  gc.addColorStop(0, "#65534A");
  gc.addColorStop(0.55, "#7C6C62");
  gc.addColorStop(1, "#8C7E74");
  ctx.fillStyle = gc;
  ctx.fill();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.stroke();
  // ventre plus clair, gris
  ctx.save();
  ctx.globalAlpha = 0.35;
  ctx.fillStyle = "#A8998E";
  ctx.beginPath();
  ctx.ellipse(0, r * 0.32, r * 0.15, r * 0.3, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
  // meches de poil courtes, orientees vers le bas
  ctx.strokeStyle = "rgba(44,34,30,0.5)";
  ctx.lineWidth = W(0.012);
  ctx.beginPath();
  for (let i = 0; i < 12; i++) {
    const x = (((i * 37) % 11) / 11) * 0.4 - 0.2;
    const y = -0.14 + (((i * 53) % 13) / 13) * 0.72;
    ctx.moveTo(x * r, y * r);
    ctx.lineTo(x * 1.08 * r, (y + 0.06) * r);
  }
  ctx.stroke();
  // pli de l'epaule, lit la jonction bras et tronc
  ctx.strokeStyle = "rgba(40,30,26,0.55)";
  ctx.lineWidth = W(0.014);
  ctx.beginPath();
  for (const c of [-1, 1]) {
    ctx.moveTo(c * r * 0.2, -r * 0.2);
    ctx.quadraticCurveTo(c * r * 0.25, -r * 0.1, c * r * 0.22, r * 0.02);
  }
  ctx.stroke();

  // oreilles pointues de taille moyenne, un peu ecartees
  const hy = -0.5;
  for (const c of [-1, 1]) {
    ctx.beginPath();
    ctx.moveTo(c * r * 0.1, r * (hy - 0.17));
    ctx.quadraticCurveTo(c * r * 0.2, r * (hy - 0.42), c * r * 0.33, r * (hy - 0.56));
    ctx.quadraticCurveTo(c * r * 0.38, r * (hy - 0.3), c * r * 0.27, r * (hy - 0.04));
    ctx.closePath();
    ctx.fillStyle = "#5E4C44";
    ctx.fill();
    ctx.strokeStyle = trait;
    ctx.lineWidth = lw;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(c * r * 0.15, r * (hy - 0.17));
    ctx.quadraticCurveTo(c * r * 0.23, r * (hy - 0.37), c * r * 0.31, r * (hy - 0.47));
    ctx.quadraticCurveTo(c * r * 0.33, r * (hy - 0.28), c * r * 0.25, r * (hy - 0.1));
    ctx.closePath();
    ctx.fillStyle = "#86665E";
    ctx.fill();
  }

  // tete ronde, crane bas, fourrure qui se fond dans le cou
  fourrure(0, hy, 0.27, 0.24, 26, 0.95);
  const gt = ctx.createLinearGradient(0, r * (hy - 0.24), 0, r * (hy + 0.24));
  gt.addColorStop(0, "#5C4C44");
  gt.addColorStop(1, "#78685E");
  ctx.fillStyle = gt;
  ctx.fill();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.stroke();

  // museau court, peau nue brun rose
  ctx.fillStyle = "#806460";
  ctx.beginPath();
  ctx.ellipse(0, r * (hy + 0.1), r * 0.13, r * 0.11, 0, 0, Math.PI * 2);
  ctx.fill();

  // nez plat : coussinet large et bas, pas un groin
  ctx.fillStyle = "#8A6A62";
  ctx.beginPath();
  ctx.moveTo(-r * 0.075, r * (hy + 0.045));
  ctx.quadraticCurveTo(-r * 0.07, r * (hy + 0.0), 0, r * (hy + 0.005));
  ctx.quadraticCurveTo(r * 0.07, r * (hy + 0.0), r * 0.075, r * (hy + 0.045));
  ctx.quadraticCurveTo(r * 0.06, r * (hy + 0.08), 0, r * (hy + 0.08));
  ctx.quadraticCurveTo(-r * 0.06, r * (hy + 0.08), -r * 0.075, r * (hy + 0.045));
  ctx.closePath();
  ctx.fill();
  // narines petites, dans le haut du coussinet
  ctx.fillStyle = "#2A1A18";
  ctx.beginPath();
  ctx.ellipse(-r * 0.028, r * (hy + 0.035), r * 0.01, r * 0.014, 0.4, 0, Math.PI * 2);
  ctx.ellipse(r * 0.028, r * (hy + 0.035), r * 0.01, r * 0.014, -0.4, 0, Math.PI * 2);
  ctx.fill();
  // sillon en U sous le coussinet, la signature du Desmodus
  ctx.strokeStyle = "#3A2622";
  ctx.lineWidth = W(0.016);
  ctx.beginPath();
  ctx.moveTo(-r * 0.09, r * (hy + 0.02));
  ctx.bezierCurveTo(-r * 0.1, r * (hy + 0.13), r * 0.1, r * (hy + 0.13), r * 0.09, r * (hy + 0.02));
  ctx.stroke();

  // bouche fermee, fine, avec la pointe des deux incisives a peine visible
  ctx.strokeStyle = "#2E1E1C";
  ctx.lineWidth = W(0.012);
  ctx.beginPath();
  ctx.moveTo(-r * 0.065, r * (hy + 0.14));
  ctx.quadraticCurveTo(0, r * (hy + 0.16), r * 0.065, r * (hy + 0.14));
  ctx.stroke();
  ctx.fillStyle = "#E8E0D6";
  ctx.beginPath();
  for (const c of [-1, 1]) {
    ctx.moveTo(c * r * 0.008, r * (hy + 0.152));
    ctx.lineTo(c * r * 0.032, r * (hy + 0.152));
    ctx.lineTo(c * r * 0.02, r * (hy + 0.19));
    ctx.closePath();
  }
  ctx.fill();
  // menton : levre inferieure fendue, discrete
  ctx.strokeStyle = "rgba(46,30,28,0.6)";
  ctx.lineWidth = W(0.01);
  ctx.beginPath();
  ctx.moveTo(-r * 0.045, r * (hy + 0.19));
  ctx.lineTo(0, r * (hy + 0.215));
  ctx.lineTo(r * 0.045, r * (hy + 0.19));
  ctx.stroke();

  ctx.restore();

  return { x: 0, y: hy + bas - 0.07, ecart: 0.11, taille: 0.042, couleur: "#0E0A08" };
}

/* ----------------------------------------- abeille-domestique-vrille */
function dessinerAbeille(ctx, r, vif, t) {
  const trait = ctx.strokeStyle;
  const lw = ctx.lineWidth;
  const bal = Math.sin(t * 0.0011) * 0.025;
  const aile = Math.sin(t * 0.0045) * 0.07;
  const ant = Math.sin(t * 0.0017) * 0.05;

  // trace une patte en trois segments, cote = -1 ou 1
  function patte(pts, ep, cote) {
    ctx.beginPath();
    ctx.moveTo(cote * pts[0] * r, pts[1] * r);
    for (let i = 2; i < pts.length; i += 2) ctx.lineTo(cote * pts[i] * r, pts[i + 1] * r);
    ctx.lineWidth = Math.max(1, r * ep);
    ctx.stroke();
  }

  // forme d'aile le long de +x, longueur L, largeur W
  function formeAile(L, W) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(L * 0.3, -W * 0.95, L * 0.82, -W * 0.85, L, -W * 0.15);
    ctx.bezierCurveTo(L * 1.03, W * 0.35, L * 0.62, W * 0.62, L * 0.28, W * 0.38);
    ctx.quadraticCurveTo(L * 0.1, W * 0.2, 0, 0);
  }

  ctx.save();
  ctx.rotate(bal);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // six pattes fines, brun noir
  ctx.strokeStyle = "#2E2116";
  for (const c of [-1, 1]) {
    // avant, vers la tete
    patte([0.2, -0.46, 0.42, -0.58, 0.5, -0.8, 0.6, -0.9], 0.04, c);
    // milieu, vers l'exterieur
    patte([0.24, -0.34, 0.56, -0.26, 0.7, 0.12, 0.8, 0.26], 0.04, c);
    // arriere, longue, vers la queue
    patte([0.22, -0.22, 0.52, 0.02, 0.66, 0.62, 0.62, 1.05, 0.66, 1.22], 0.045, c);
  }
  // corbeille a pollen sur le tibia arriere
  ctx.fillStyle = "#E8B83A";
  for (const c of [-1, 1]) {
    ctx.beginPath();
    ctx.ellipse(c * r * 0.65, r * 0.5, r * 0.08, r * 0.12, c * -0.2, 0, Math.PI * 2);
    ctx.fill();
  }

  // abdomen en goutte, dore
  function formeAbdo() {
    ctx.beginPath();
    ctx.moveTo(0, -r * 0.14);
    ctx.bezierCurveTo(r * 0.38, -r * 0.14, r * 0.52, r * 0.22, r * 0.45, r * 0.6);
    ctx.bezierCurveTo(r * 0.38, r * 0.92, r * 0.13, r * 1.1, 0, r * 1.15);
    ctx.bezierCurveTo(-r * 0.13, r * 1.1, -r * 0.38, r * 0.92, -r * 0.45, r * 0.6);
    ctx.bezierCurveTo(-r * 0.52, r * 0.22, -r * 0.38, -r * 0.14, 0, -r * 0.14);
    ctx.closePath();
  }
  const ga = ctx.createRadialGradient(-r * 0.12, r * 0.3, r * 0.05, 0, r * 0.45, r * 0.7);
  ga.addColorStop(0, "#F6C45A");
  ga.addColorStop(1, "#C07A1C");
  ctx.fillStyle = ga;
  formeAbdo();
  ctx.fill();

  // bandes brun sombre, bombees vers la queue
  ctx.save();
  formeAbdo();
  ctx.clip();
  ctx.fillStyle = "#3E2615";
  const bandes = [0.14, 0.42, 0.68, 0.9];
  for (let i = 0; i < bandes.length; i++) {
    const y = bandes[i] * r, h = r * (0.12 - i * 0.012);
    ctx.beginPath();
    ctx.moveTo(-r * 0.6, y);
    ctx.quadraticCurveTo(0, y + r * 0.12, r * 0.6, y);
    ctx.lineTo(r * 0.6, y + h);
    ctx.quadraticCurveTo(0, y + h + r * 0.12, -r * 0.6, y + h);
    ctx.closePath();
    ctx.fill();
  }
  // bout sombre et reflet lateral
  ctx.beginPath();
  ctx.ellipse(0, r * 1.14, r * 0.2, r * 0.12, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 0.25;
  ctx.fillStyle = "#FFF1C8";
  ctx.beginPath();
  ctx.ellipse(-r * 0.2, r * 0.32, r * 0.07, r * 0.3, 0.12, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  formeAbdo();
  ctx.stroke();

  // thorax brun, velu
  const gt = ctx.createRadialGradient(-r * 0.08, -r * 0.48, r * 0.04, 0, -r * 0.4, r * 0.32);
  gt.addColorStop(0, "#A77A45");
  gt.addColorStop(1, "#5E3E20");
  ctx.fillStyle = gt;
  ctx.beginPath();
  ctx.ellipse(0, -r * 0.4, r * 0.31, r * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();
  // poils en couronne
  ctx.strokeStyle = "#D2AE72";
  ctx.lineWidth = Math.max(1, r * 0.018);
  ctx.beginPath();
  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * Math.PI * 2;
    const cx = Math.cos(a), sy = Math.sin(a);
    ctx.moveTo(cx * r * 0.27, -r * 0.4 + sy * r * 0.24);
    ctx.lineTo(cx * r * 0.35, -r * 0.4 + sy * r * 0.32);
  }
  ctx.stroke();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.beginPath();
  ctx.ellipse(0, -r * 0.4, r * 0.31, r * 0.28, 0, 0, Math.PI * 2);
  ctx.stroke();
  // scutellum
  ctx.strokeStyle = "#3E2A16";
  ctx.lineWidth = Math.max(1, r * 0.02);
  ctx.beginPath();
  ctx.arc(0, -r * 0.2, r * 0.13, Math.PI * 1.15, Math.PI * 1.85);
  ctx.stroke();

  // antennes coudees
  ctx.strokeStyle = "#2A1D12";
  ctx.lineWidth = Math.max(1, r * 0.032);
  for (const c of [-1, 1]) {
    const s = ant * c;
    ctx.beginPath();
    ctx.moveTo(c * r * 0.07, -r * 1.0);
    ctx.lineTo(c * r * 0.16, -r * 1.2);
    ctx.quadraticCurveTo(c * r * (0.28 + s), -r * 1.3, c * r * (0.42 + s), -r * (1.26 - s));
    ctx.stroke();
  }

  // tete sombre, triangulaire arrondie
  ctx.fillStyle = "#4C3522";
  ctx.beginPath();
  ctx.moveTo(0, -r * 1.06);
  ctx.bezierCurveTo(r * 0.2, -r * 1.06, r * 0.31, -r * 0.96, r * 0.3, -r * 0.84);
  ctx.bezierCurveTo(r * 0.28, -r * 0.72, r * 0.14, -r * 0.66, 0, -r * 0.66);
  ctx.bezierCurveTo(-r * 0.14, -r * 0.66, -r * 0.28, -r * 0.72, -r * 0.3, -r * 0.84);
  ctx.bezierCurveTo(-r * 0.31, -r * 0.96, -r * 0.2, -r * 1.06, 0, -r * 1.06);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.stroke();
  // fourrure claire du front
  ctx.fillStyle = "#9A7448";
  ctx.beginPath();
  ctx.ellipse(0, -r * 0.93, r * 0.08, r * 0.06, 0, 0, Math.PI * 2);
  ctx.fill();

  // deux paires d'ailes translucides, par-dessus le corps
  ctx.save();
  for (const c of [-1, 1]) {
    // aile arriere, plus petite
    ctx.save();
    ctx.translate(c * r * 0.2, -r * 0.34);
    ctx.scale(c, 1);
    ctx.rotate(0.95 - aile * 0.7);
    ctx.globalAlpha = 0.9;
    ctx.fillStyle = "rgba(205,225,250,0.28)";
    ctx.strokeStyle = "rgba(210,228,255,0.7)";
    ctx.lineWidth = Math.max(1, r * 0.018);
    formeAile(r * 0.62, r * 0.22);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    // aile avant, longue
    ctx.save();
    ctx.translate(c * r * 0.2, -r * 0.46);
    ctx.scale(c, 1);
    ctx.rotate(0.5 - aile);
    ctx.globalAlpha = 0.9;
    ctx.fillStyle = "rgba(215,232,255,0.3)";
    ctx.strokeStyle = "rgba(220,235,255,0.75)";
    ctx.lineWidth = Math.max(1, r * 0.018);
    formeAile(r * 0.98, r * 0.3);
    ctx.fill();
    ctx.stroke();
    // nervures
    ctx.strokeStyle = "rgba(170,190,220,0.6)";
    ctx.beginPath();
    ctx.moveTo(r * 0.04, -r * 0.03);
    ctx.quadraticCurveTo(r * 0.4, -r * 0.18, r * 0.72, -r * 0.12);
    ctx.moveTo(r * 0.08, r * 0.03);
    ctx.quadraticCurveTo(r * 0.4, r * 0.06, r * 0.6, r * 0.1);
    ctx.stroke();
    ctx.restore();
  }
  ctx.restore();

  ctx.restore();
}

/* -------------------------------------------------- poulpe-mimetique */
function dessinerPoulpeMimetique(ctx, r, vif, t) {
  // Poulpe mimetique etale sur le sable, vu de face et un peu d'en haut :
  // petit manteau couche en arriere, yeux perches sur deux pedoncules,
  // huit bras tres longs et fins qui ondulent, livree brun chocolat et creme.
  const trait = ctx.strokeStyle;
  const creme = "#EADCC0";
  const cremeOmbre = "#CDBB98";
  const brun = "#5E3219";
  const brunFonce = "#3E2010";
  const N = 10;
  const temps = (t || 0) * 0.001;

  // chaque bras : angle de depart (deg), longueur, courbure totale (deg),
  // enroulement de la pointe (deg), largeur a la base, phase d'ondulation
  // les valeurs different d'un cote a l'autre pour casser la symetrie
  const formes = [
    [-166, 1.56, 22, 170, 0.07, 0.0],
    [-30, 1.5, 58, -150, 0.07, 1.7],
    [166, 1.68, -30, -190, 0.075, 2.9],
    [14, 1.66, 16, 200, 0.075, 4.1],
    [128, 1.72, 20, 170, 0.08, 0.8],
    [56, 1.7, -16, -160, 0.08, 3.4],
    [101, 1.5, 24, -190, 0.085, 5.2],
    [80, 1.62, -30, 150, 0.085, 2.2]
  ];
  const cx = 0, cy = -0.24;

  // ligne centrale d'un bras, echantillonnee plus serree vers la pointe
  function bras(f, bande) {
    const a0 = f[0] * Math.PI / 180;
    const L = f[1];
    const k = f[2] * Math.PI / 180;
    const c = f[3] * Math.PI / 180;
    const w0 = f[4];
    const ph = f[5];
    const pas = 40;
    const ds = L / pas;
    let x = cx + Math.cos(a0) * 0.14, y = cy + Math.sin(a0) * 0.1;
    let h = a0;
    const px = [x], py = [y], ang = [h];
    for (let i = 1; i <= pas; i++) {
      const s = i / pas;
      const on = Math.sin(temps * 0.7 + ph + s * 5) * 0.35 * s;
      const pointe = s > 0.68 ? (s - 0.68) / 0.32 : 0;
      h = a0 + k * s + c * pointe * pointe + on * 0.5;
      x += Math.cos(h) * ds;
      y += Math.sin(h) * ds;
      px.push(x); py.push(y); ang.push(h);
    }
    // indices des echantillons : u^0.75 serre les points vers la pointe
    const g = [], d = [];
    for (let j = 0; j < N; j++) {
      const u = Math.pow(j / (N - 1), 0.75);
      const i = Math.round(u * pas);
      const s = i / pas;
      const e = (w0 * Math.pow(1 - s, 1.15) + 0.004) * r;
      const nx = -Math.sin(ang[i]) * e, ny = Math.cos(ang[i]) * e;
      g.push(px[i] * r + nx, py[i] * r + ny);
      d.push(px[i] * r - nx, py[i] * r - ny);
    }
    // silhouette lissee par les milieux, pointe fine
    ctx.beginPath();
    ctx.moveTo(g[0], g[1]);
    for (let j = 1; j < N - 1; j++) {
      ctx.quadraticCurveTo(g[j * 2], g[j * 2 + 1],
        (g[j * 2] + g[j * 2 + 2]) / 2, (g[j * 2 + 1] + g[j * 2 + 3]) / 2);
    }
    ctx.lineTo(px[pas] * r, py[pas] * r);
    for (let j = N - 2; j >= 1; j--) {
      ctx.quadraticCurveTo(d[j * 2], d[j * 2 + 1],
        (d[j * 2] + d[j * 2 - 2]) / 2, (d[j * 2 + 1] + d[j * 2 - 1]) / 2);
    }
    ctx.lineTo(d[0], d[1]);
    ctx.closePath();
    ctx.fillStyle = creme;
    ctx.fill();
    ctx.stroke();
    // bandes brun chocolat, un segment sur deux, un peu en retrait du bord
    ctx.beginPath();
    for (let j = bande; j < N - 3; j += 2) {
      const a = j * 2, b = a + 2;
      const mxa = (g[a] + d[a]) / 2, mya = (g[a + 1] + d[a + 1]) / 2;
      const mxb = (g[b] + d[b]) / 2, myb = (g[b + 1] + d[b + 1]) / 2;
      const q = 0.86;
      ctx.moveTo(mxa + (g[a] - mxa) * q, mya + (g[a + 1] - mya) * q);
      ctx.lineTo(mxb + (g[b] - mxb) * q, myb + (g[b + 1] - myb) * q);
      ctx.lineTo(mxb + (d[b] - mxb) * q, myb + (d[b + 1] - myb) * q);
      ctx.lineTo(mxa + (d[a] - mxa) * q, mya + (d[a + 1] - mya) * q);
    }
    ctx.fillStyle = brun;
    ctx.fill();
  }

  ctx.save();
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = Math.max(1, r * 0.022);
  ctx.strokeStyle = trait;
  for (let n = 0; n < formes.length; n++) bras(formes[n], n % 2);

  // toile a la base des bras, basse et large, sans relief
  ctx.beginPath();
  ctx.ellipse(cx * r, cy * r + r * 0.03, r * 0.24, r * 0.12, 0, 0, Math.PI * 2);
  ctx.fillStyle = brun;
  ctx.fill();
  ctx.stroke();

  // manteau : petit sac couche en arriere, qui respire a peine
  ctx.save();
  ctx.translate(r * 0.02, -r * 0.46);
  ctx.rotate(0.24 + Math.sin(temps * 0.6) * 0.04);
  ctx.scale(0.86, 0.84);
  const sac = function () {
    ctx.beginPath();
    ctx.moveTo(-r * 0.15, 0);
    ctx.bezierCurveTo(-r * 0.22, -r * 0.2, -r * 0.14, -r * 0.44, r * 0.01, -r * 0.46);
    ctx.bezierCurveTo(r * 0.15, -r * 0.44, r * 0.2, -r * 0.2, r * 0.15, 0);
    ctx.closePath();
  };
  sac();
  ctx.fillStyle = creme;
  ctx.fill();
  ctx.save();
  ctx.clip();
  // flanc ombre, mat, pour donner du volume sans reflet
  ctx.beginPath();
  ctx.ellipse(r * 0.12, -r * 0.2, r * 0.08, r * 0.3, 0, 0, Math.PI * 2);
  ctx.fillStyle = cremeOmbre;
  ctx.fill();
  // bandes brunes irregulieres
  ctx.beginPath();
  const lignes = [[-0.4, 0.07, 0.03], [-0.27, 0.08, -0.02], [-0.13, 0.07, 0.03]];
  for (let i = 0; i < lignes.length; i++) {
    const y0 = lignes[i][0] * r, hb = lignes[i][1] * r, pente = lignes[i][2] * r;
    ctx.moveTo(-r * 0.25, y0 + pente);
    ctx.quadraticCurveTo(0, y0 - r * 0.04, r * 0.25, y0 - pente);
    ctx.lineTo(r * 0.25, y0 - pente + hb);
    ctx.quadraticCurveTo(0, y0 + hb - r * 0.04, -r * 0.25, y0 + pente + hb);
  }
  ctx.fillStyle = brun;
  ctx.fill();
  ctx.restore();
  sac();
  ctx.stroke();
  ctx.restore();

  // tete, petite et plate, posee sur la toile, sans aucun trait de visage
  ctx.beginPath();
  ctx.ellipse(0, -r * 0.35, r * 0.16, r * 0.09, 0, 0, Math.PI * 2);
  ctx.fillStyle = creme;
  ctx.fill();
  ctx.stroke();

  // pedoncules : deux cones fins, penches vers l'exterieur, qui portent
  // les yeux au-dessus de la tete
  ctx.lineWidth = Math.max(1, r * 0.016);
  for (let s = -1; s <= 1; s += 2) {
    ctx.beginPath();
    ctx.moveTo(s * r * 0.03, -r * 0.4);
    ctx.quadraticCurveTo(s * r * 0.1, -r * 0.47, s * r * 0.125, -r * 0.575);
    ctx.lineTo(s * r * 0.16, -r * 0.57);
    ctx.quadraticCurveTo(s * r * 0.15, -r * 0.46, s * r * 0.11, -r * 0.38);
    ctx.closePath();
    ctx.fillStyle = creme;
    ctx.fill();
    ctx.strokeStyle = trait;
    ctx.stroke();
    // bulbe de l'oeil, bronze mat, sur lequel l'appelant pose la pupille
    ctx.beginPath();
    ctx.ellipse(s * r * 0.145, -r * 0.6, r * 0.046, r * 0.042, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#C29A55";
    ctx.fill();
    ctx.strokeStyle = brunFonce;
    ctx.stroke();
  }
  ctx.restore();
  ctx.strokeStyle = trait;
  return { x: 0, y: -0.6, ecart: 0.145, taille: 0.028, couleur: "#140C06" };
}

/* ----------------------------------------------------------- guepard */
function dessinerGuepard(ctx, r, vif, t) {
  const trait = ctx.strokeStyle;
  const lw = Math.max(1, ctx.lineWidth || 1.2);
  const PI2 = Math.PI * 2;
  const FAUVE = "#DDA848", FAUVE_OMBRE = "#A8772C", CREME = "#F3E2B8";
  const NOIR = "#1C140C", BLANC = "#F7F3EA";
  // marche lente, queue qui ondule
  const pas = Math.sin(t * 0.0012) * 0.035;
  const onde = Math.sin(t * 0.0009) * 0.05;

  // bruit deterministe, sans globale
  function h(i) {
    const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
    return s - Math.floor(s);
  }
  function M(x, y) { ctx.moveTo(r * x, r * y); }
  function L(x, y) { ctx.lineTo(r * x, r * y); }
  function Q(a, b, x, y) { ctx.quadraticCurveTo(r * a, r * b, r * x, r * y); }
  function B(a, b, c, d, x, y) { ctx.bezierCurveTo(r * a, r * b, r * c, r * d, r * x, r * y); }
  function peindre(teinte) {
    ctx.fillStyle = teinte;
    ctx.strokeStyle = trait;
    ctx.lineWidth = lw;
    ctx.lineJoin = "round";
    ctx.fill();
    ctx.stroke();
  }
  // semis de taches dans la forme courante (deja clippee)
  function semer(x0, x1, y0, y1, n, ecart, graine, garde) {
    const semis = [];
    for (let i = 0; i < n * 4 && semis.length < n; i++) {
      const x = x0 + h(graine + i * 2 + 1) * (x1 - x0);
      const y = y0 + h(graine + i * 2 + 2) * (y1 - y0);
      if (garde && !garde(x, y)) continue;
      let libre = true;
      for (const s of semis) if (Math.hypot(s[0] - x, s[1] - y) < ecart) { libre = false; break; }
      if (libre) semis.push([x, y, 0.017 + h(graine + i + 500) * 0.016]);
    }
    ctx.fillStyle = NOIR;
    ctx.beginPath();
    for (const s of semis) {
      const rt = r * s[2] * (s[0] > 0.72 ? 0.7 : 1);
      ctx.moveTo(r * s[0] + rt, r * s[1]);
      ctx.arc(r * s[0], r * s[1], rt, 0, PI2);
    }
    ctx.fill();
  }

  // patte avant : bras fondu dans la poitrine, coude, avant-bras droit, poignet, paturon
  function patteAvant(dx, dp) {
    const X = (x, y) => x + dx + dp * Math.max(0, y - 0.15);
    ctx.beginPath();
    M(X(0.34, -0.22), -0.22);
    B(X(0.27, -0.06), -0.06, X(0.25, 0.08), 0.08, X(0.3, 0.17), 0.17);
    Q(X(0.34, 0.3), 0.3, X(0.35, 0.52), 0.52);
    L(X(0.355, 0.8), 0.8);
    Q(X(0.335, 0.86), 0.86, X(0.365, 0.9), 0.9);
    Q(X(0.385, 1.0), 1.0, X(0.42, 1.1), 1.1);
    L(X(0.5, 1.1), 1.1);
    Q(X(0.455, 0.99), 0.99, X(0.435, 0.88), 0.88);
    Q(X(0.425, 0.62), 0.62, X(0.45, 0.34), 0.34);
    B(X(0.49, 0.2), 0.2, X(0.56, 0.08), 0.08, X(0.6, -0.04), -0.04);
    Q(X(0.58, -0.32), -0.32, X(0.34, -0.22), -0.22);
    ctx.closePath();
  }

  // patte arriere : cuisse musclee, grasset, jambe, jarret pointu, canon fin
  function patteArriere(dx, dp) {
    const X = (x, y) => x + dx + dp * Math.max(0, y - 0.15);
    ctx.beginPath();
    M(X(-0.6, -0.52), -0.52);
    B(X(-0.8, -0.48), -0.48, X(-0.94, -0.22), -0.22, X(-0.88, 0.06), 0.06);
    B(X(-0.85, 0.2), 0.2, X(-0.76, 0.3), 0.3, X(-0.74, 0.4), 0.4);
    Q(X(-0.76, 0.52), 0.52, X(-0.815, 0.6), 0.6);
    Q(X(-0.815, 0.65), 0.65, X(-0.775, 0.68), 0.68);
    Q(X(-0.765, 0.88), 0.88, X(-0.74, 1.1), 1.1);
    L(X(-0.665, 1.1), 1.1);
    Q(X(-0.69, 0.86), 0.86, X(-0.7, 0.66), 0.66);
    B(X(-0.62, 0.5), 0.5, X(-0.47, 0.32), 0.32, X(-0.39, 0.15), 0.15);
    Q(X(-0.34, 0.06), 0.06, X(-0.37, -0.06), -0.06);
    B(X(-0.41, -0.22), -0.22, X(-0.46, -0.42), -0.42, X(-0.6, -0.52), -0.52);
    ctx.closePath();
  }

  // pied : talon, deux doigts bombes, griffe, coussinet a plat
  function pied(x, teinte, detail) {
    ctx.beginPath();
    M(x - 0.055, 1.18);
    Q(x - 0.068, 1.11, x - 0.03, 1.085);
    Q(x + 0.005, 1.07, x + 0.035, 1.1);
    Q(x + 0.065, 1.095, x + 0.085, 1.135);
    Q(x + 0.105, 1.175, x + 0.08, 1.185);
    L(x - 0.055, 1.185);
    ctx.closePath();
    peindre(teinte);
    if (!detail) return;
    // separations des doigts et griffe semi retractile
    ctx.strokeStyle = NOIR;
    ctx.lineWidth = Math.max(1, r * 0.011);
    ctx.lineCap = "round";
    ctx.beginPath();
    M(x + 0.03, 1.115); L(x + 0.035, 1.16);
    M(x + 0.06, 1.13); L(x + 0.062, 1.165);
    M(x + 0.088, 1.168); L(x + 0.1, 1.183);
    ctx.stroke();
  }

  // point de la queue : attache haute, chute puis crochet vers le haut
  function queue(u) {
    const a = [-0.84, -0.44], b = [-1.3, -0.3 + onde * 0.4], c = [-1.44, 1.0], d = [-1.14 + onde, 0.8];
    const v = 1 - u;
    return [
      v * v * v * a[0] + 3 * v * v * u * b[0] + 3 * v * u * u * c[0] + u * u * u * d[0],
      v * v * v * a[1] + 3 * v * v * u * b[1] + 3 * v * u * u * c[1] + u * u * u * d[1],
    ];
  }
  function trace(u0, u1, n) {
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const p = queue(u0 + (u1 - u0) * i / n);
      if (i === 0) M(p[0], p[1]); else L(p[0], p[1]);
    }
  }

  // corps de levrier : dos presque plat, poitrine haute, taille tres remontee
  function corps() {
    ctx.beginPath();
    M(1.0, -0.52);
    B(0.84, -0.53, 0.68, -0.6, 0.5, -0.58);
    B(0.3, -0.56, 0.05, -0.5, -0.15, -0.5);
    B(-0.35, -0.5, -0.5, -0.56, -0.64, -0.54);
    Q(-0.8, -0.52, -0.86, -0.4);
    B(-0.9, -0.24, -0.82, -0.04, -0.66, 0.0);
    Q(-0.5, 0.02, -0.4, -0.13);
    B(-0.3, -0.26, -0.12, -0.25, 0.02, -0.15);
    B(0.14, -0.04, 0.24, 0.1, 0.4, 0.12);
    Q(0.6, 0.14, 0.7, -0.01);
    B(0.78, -0.12, 0.92, -0.22, 1.1, -0.3);
    ctx.closePath();
  }
  // limite basse du corps, pour garder le ventre clair
  function ventre(x) {
    const P = [[-0.9, -0.1], [-0.62, 0.0], [-0.4, -0.14], [-0.2, -0.25], [0.02, -0.15], [0.2, 0.04], [0.4, 0.12], [0.62, 0.11], [0.76, -0.1], [1.1, -0.3]];
    if (x <= P[0][0]) return P[0][1];
    for (let i = 1; i < P.length; i++) {
      if (x <= P[i][0]) {
        const k = (x - P[i - 1][0]) / (P[i][0] - P[i - 1][0]);
        return P[i - 1][1] + (P[i][1] - P[i - 1][1]) * k;
      }
    }
    return -0.3;
  }

  // tete ronde, front bombe, museau court et carre
  function tete() {
    ctx.beginPath();
    M(0.97, -0.5);
    B(0.99, -0.62, 1.12, -0.67, 1.22, -0.61);
    Q(1.29, -0.57, 1.33, -0.5);
    Q(1.4, -0.47, 1.425, -0.43);
    Q(1.44, -0.39, 1.425, -0.36);
    Q(1.41, -0.33, 1.37, -0.33);
    Q(1.36, -0.28, 1.31, -0.265);
    Q(1.22, -0.24, 1.12, -0.27);
    Q(1.02, -0.3, 0.97, -0.5);
    ctx.closePath();
  }

  // cote lointain : pattes plus sombres, en contre-temps
  patteAvant(-0.09, -pas);
  peindre(FAUVE_OMBRE);
  pied(0.46 - 0.09 - pas * 0.95, FAUVE_OMBRE, false);
  patteArriere(-0.09, pas);
  peindre(FAUVE_OMBRE);
  pied(-0.7 - 0.09 + pas * 0.95, FAUVE_OMBRE, false);

  // queue : contour, touffe, fourrure, taches, anneaux, pointe blanche
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = trait;
  ctx.lineWidth = r * 0.09 + lw * 2;
  trace(0, 1, 9);
  ctx.stroke();
  ctx.lineWidth = r * 0.12 + lw * 2;
  trace(0.86, 1, 3);
  ctx.stroke();
  ctx.strokeStyle = FAUVE;
  ctx.lineWidth = r * 0.09;
  trace(0, 0.9, 8);
  ctx.stroke();
  ctx.fillStyle = NOIR;
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const p = queue(0.07 + i * 0.065 + h(i + 40) * 0.02);
    const rt = r * (0.015 + h(i + 60) * 0.009);
    const ox = (h(i + 80) - 0.5) * 0.04;
    ctx.moveTo(r * (p[0] + ox) + rt, r * p[1]);
    ctx.arc(r * (p[0] + ox), r * p[1], rt, 0, PI2);
  }
  ctx.fill();
  ctx.strokeStyle = NOIR;
  ctx.lineWidth = r * 0.1;
  ctx.lineCap = "butt";
  ctx.beginPath();
  for (const u of [0.48, 0.56, 0.635, 0.705, 0.77, 0.83]) {
    const p = queue(u), q = queue(u + 0.026);
    M(p[0], p[1]);
    L(q[0], q[1]);
  }
  ctx.stroke();
  ctx.lineCap = "round";
  ctx.strokeStyle = BLANC;
  ctx.lineWidth = r * 0.12;
  trace(0.88, 1, 3);
  ctx.stroke();

  // corps : degrade du dos fonce au ventre creme
  const deg = ctx.createLinearGradient(0, -r * 0.58, 0, r * 0.14);
  deg.addColorStop(0, "#C98F34");
  deg.addColorStop(0.6, FAUVE);
  deg.addColorStop(1, CREME);
  ctx.fillStyle = deg;
  corps();
  ctx.fill();
  ctx.save();
  corps();
  ctx.clip();
  semer(-0.9, 1.0, -0.58, 0.12, 28, 0.11, 0, (x, y) => y < ventre(x) - 0.07);
  ctx.restore();
  corps();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.stroke();

  // cote proche : patte avant, pieds, puis cuisse par dessus le flanc
  patteAvant(0, pas);
  peindre(FAUVE);
  ctx.save();
  ctx.clip();
  semer(0.26, 0.62, -0.1, 0.9, 5, 0.12, 300, (x, y) => y > 0.05);
  ctx.restore();
  pied(0.46 + pas * 0.95, FAUVE, true);

  patteArriere(0, -pas);
  const dc = ctx.createLinearGradient(0, -r * 0.5, 0, r * 0.5);
  dc.addColorStop(0, "#CF9538");
  dc.addColorStop(1, FAUVE);
  peindre(dc);
  ctx.save();
  ctx.clip();
  // relief : ligne du muscle de la cuisse
  ctx.strokeStyle = FAUVE_OMBRE;
  ctx.lineWidth = Math.max(1, r * 0.016);
  ctx.lineCap = "round";
  ctx.beginPath();
  M(-0.52, -0.38);
  B(-0.66, -0.24, -0.66, 0.02, -0.52, 0.16);
  ctx.stroke();
  semer(-0.9, -0.36, -0.46, 0.9, 9, 0.1, 600, null);
  ctx.restore();
  pied(-0.7 - pas * 0.95, FAUVE, true);

  // oreille ronde, bien visible, dos noir
  ctx.save();
  ctx.translate(r * 1.05, -r * 0.62);
  ctx.rotate(-0.35);
  ctx.beginPath();
  ctx.ellipse(0, 0, r * 0.075, r * 0.09, 0, 0, PI2);
  peindre(FAUVE);
  ctx.fillStyle = NOIR;
  ctx.beginPath();
  ctx.ellipse(-r * 0.018, -r * 0.01, r * 0.04, r * 0.058, 0, 0, PI2);
  ctx.fill();
  ctx.restore();

  // tete
  tete();
  peindre(FAUVE);

  // museau, joue et gorge clairs, lisere blanc sous l'oeil
  ctx.save();
  ctx.clip();
  ctx.fillStyle = CREME;
  ctx.beginPath();
  ctx.ellipse(r * 1.36, -r * 0.33, r * 0.09, r * 0.055, 0, 0, PI2);
  ctx.moveTo(r * 1.26, -r * 0.27);
  ctx.ellipse(r * 1.16, -r * 0.27, r * 0.1, r * 0.035, 0, 0, PI2);
  ctx.fill();
  ctx.fillStyle = BLANC;
  ctx.beginPath();
  ctx.ellipse(r * 1.235, -r * 0.435, r * 0.04, r * 0.016, 0.1, 0, Math.PI);
  ctx.fill();
  // petites taches du front et de la joue
  ctx.fillStyle = NOIR;
  ctx.beginPath();
  const tt = [[1.08, -0.57], [1.15, -0.6], [1.04, -0.47], [1.06, -0.37]];
  for (const p of tt) {
    ctx.moveTo(r * p[0] + r * 0.015, r * p[1]);
    ctx.arc(r * p[0], r * p[1], r * 0.015, 0, PI2);
  }
  ctx.fill();
  ctx.restore();

  // truffe
  ctx.fillStyle = NOIR;
  ctx.beginPath();
  ctx.ellipse(r * 1.415, -r * 0.42, r * 0.026, r * 0.02, 0.5, 0, PI2);
  ctx.fill();

  // bande lacrymale : du coin de l'oeil jusqu'a la commissure
  ctx.strokeStyle = NOIR;
  ctx.lineCap = "round";
  ctx.lineWidth = Math.max(1, r * 0.028);
  ctx.beginPath();
  M(1.268, -0.455);
  Q(1.28, -0.37, 1.335, -0.315);
  ctx.stroke();

  // bouche
  ctx.lineWidth = Math.max(1, r * 0.014);
  ctx.beginPath();
  M(1.415, -0.355);
  Q(1.38, -0.33, 1.33, -0.32);
  ctx.stroke();

  // contour noir de l'oeil, l'iris ambre est pose ensuite par l'appelant
  ctx.fillStyle = NOIR;
  ctx.beginPath();
  ctx.ellipse(r * 1.235, -r * 0.47, r * 0.05, r * 0.036, -0.1, 0, PI2);
  ctx.fill();

  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.lineCap = "round";
  return { x: 1.235, y: -0.47, ecart: 0, taille: 0.032, couleur: "#D8921F" };
}

/* ------------------------------------------------------------ durian */
function dessinerDurian(ctx, r, vif, t) {
  const trait = ctx.strokeStyle;
  const lw = ctx.lineWidth;
  const TAU = Math.PI * 2;
  // ellipse du fruit, ovale et allongee verticalement
  const cy = r * 0.1, rx = r * 0.8, ry = r * 1.02;
  const epine = r * 0.12;

  ctx.save();
  // balancement tres lent autour du pedoncule
  ctx.translate(0, -r * 1.2);
  ctx.rotate(Math.sin(t * 0.0007) * 0.018);
  ctx.translate(0, r * 1.2);

  // pedoncule ligneux : base renflee, col etroit, bout coupe
  ctx.beginPath();
  ctx.moveTo(-r * 0.2, -r * 0.86);
  ctx.bezierCurveTo(-r * 0.15, -r * 0.98, -r * 0.07, -r * 1.02, -r * 0.075, -r * 1.12);
  ctx.quadraticCurveTo(-r * 0.09, -r * 1.24, -r * 0.05, -r * 1.33);
  ctx.lineTo(r * 0.08, -r * 1.31);
  ctx.quadraticCurveTo(r * 0.07, -r * 1.22, r * 0.075, -r * 1.12);
  ctx.bezierCurveTo(r * 0.08, -r * 1.02, r * 0.15, -r * 0.98, r * 0.2, -r * 0.86);
  ctx.closePath();
  const gp = ctx.createLinearGradient(-r * 0.2, 0, r * 0.2, 0);
  gp.addColorStop(0, "#A7885A");
  gp.addColorStop(0.55, "#7E5F38");
  gp.addColorStop(1, "#56401F");
  ctx.fillStyle = gp;
  ctx.fill();
  ctx.strokeStyle = "#3E2E17";
  ctx.lineWidth = Math.max(1, lw * 0.8);
  ctx.stroke();
  // stries du bois et coupe claire au bout
  ctx.beginPath();
  ctx.moveTo(-r * 0.03, -r * 1.3); ctx.quadraticCurveTo(-r * 0.05, -r * 1.1, -r * 0.1, -r * 0.9);
  ctx.moveTo(r * 0.035, -r * 1.29); ctx.quadraticCurveTo(r * 0.03, -r * 1.1, r * 0.09, -r * 0.9);
  ctx.strokeStyle = "rgba(60,42,20,0.6)";
  ctx.lineWidth = Math.max(1, r * 0.012);
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(r * 0.015, -r * 1.32, r * 0.065, r * 0.02, -0.15, 0, TAU);
  ctx.fillStyle = "#C9AE7C";
  ctx.fill();

  // contour epineux : ellipse dont le rayon alterne base et pointe
  const n = 24;
  ctx.beginPath();
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * TAU, am = ((i + 0.5) / n) * TAU;
    const bx = Math.cos(a0) * rx, by = cy + Math.sin(a0) * ry;
    const px = Math.cos(am) * (rx + epine), py = cy + Math.sin(am) * (ry + epine);
    if (i === 0) ctx.moveTo(bx, by); else ctx.lineTo(bx, by);
    ctx.lineTo(px, py);
  }
  ctx.closePath();
  const g = ctx.createRadialGradient(-r * 0.3, -r * 0.3, r * 0.08, 0, cy, r * 1.15);
  g.addColorStop(0, "#DCD873");
  g.addColorStop(0.55, "#AEB046");
  g.addColorStop(1, "#6F7A2A");
  ctx.fillStyle = g;
  ctx.fill();
  // liseré olive large, puis le trait de survol par dessus, discret au repos
  ctx.strokeStyle = "#48521A";
  ctx.lineWidth = Math.max(1.2, lw * 1.6);
  ctx.stroke();
  ctx.save();
  ctx.globalAlpha = vif ? 1 : 0.35;
  ctx.strokeStyle = trait;
  ctx.lineWidth = vif ? lw : lw * 0.7;
  ctx.stroke();
  ctx.restore();

  // collerette a la base du pedoncule
  ctx.beginPath();
  ctx.ellipse(0, -r * 0.87, r * 0.2, r * 0.055, 0, 0, TAU);
  ctx.fillStyle = "#6E6A2C";
  ctx.fill();

  // loge : fente qui suit une couture verticale du fruit, a droite
  const lx = (y) => r * 0.3 + r * 0.1 * Math.sin((y / r - 0.2) * 1.6);
  const y0 = -r * 0.42, y1 = r * 0.82;
  const larg = (s) => r * 0.21 * Math.pow(Math.sin(Math.PI * s), 0.75);

  // epines pyramidales de la surface : face eclairee + face ombree
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(0, cy, rx, ry, 0, 0, TAU);
  ctx.clip();
  const clair = [], sombre = [];
  const pas = 0.27;
  for (let row = 0; row * pas < 2.2; row++) {
    const yy = -0.88 + row * pas;
    const dec = (row % 2) * pas * 0.5;
    for (let xx = -0.8 + dec; xx < 0.85; xx += pas) {
      const nx = xx / 0.8, ny = (yy - 0.1) / 1.02;
      const d2 = nx * nx + ny * ny;
      if (d2 > 0.86) continue;
      const Y = yy * r, X = xx * r;
      if (Y > y0 - r * 0.1 && Y < y1 + r * 0.1 && Math.abs(X - lx(Y)) < r * 0.33) continue;
      const h = r * 0.1 * (1 - 0.4 * d2);
      // base en losange, ecrasee vers le bord ; sommet pousse vers l'exterieur
      const k = 1 - 0.35 * d2;
      const ax = X + nx * h * 0.45 - h * 0.12, ay = Y + ny * h * 0.45 - h * 0.12;
      clair.push(X - h * k, Y, X, Y - h, X + h * k, Y, ax, ay);
      sombre.push(X + h * k, Y, X, Y + h, X - h * k, Y, ax, ay);
    }
  }
  ctx.beginPath();
  for (let i = 0; i < clair.length; i += 8) {
    ctx.moveTo(clair[i], clair[i + 1]);
    ctx.lineTo(clair[i + 2], clair[i + 3]);
    ctx.lineTo(clair[i + 4], clair[i + 5]);
    ctx.lineTo(clair[i + 6], clair[i + 7]);
  }
  ctx.fillStyle = "rgba(248,246,178,0.72)";
  ctx.fill();
  ctx.beginPath();
  for (let i = 0; i < sombre.length; i += 8) {
    ctx.moveTo(sombre[i], sombre[i + 1]);
    ctx.lineTo(sombre[i + 2], sombre[i + 3]);
    ctx.lineTo(sombre[i + 4], sombre[i + 5]);
    ctx.lineTo(sombre[i + 6], sombre[i + 7]);
  }
  ctx.fillStyle = "rgba(52,60,14,0.6)";
  ctx.fill();
  ctx.restore();

  // loge ouverte : trace des deux bords, le droit plus ecarte et dentele
  const N = 9;
  const bord = (ecart, dent) => {
    ctx.beginPath();
    for (let i = 0; i <= N; i++) {
      const s = i / N, y = y0 + (y1 - y0) * s;
      const x = lx(y) - larg(s) * ecart * 0.8;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    for (let i = N; i >= 0; i--) {
      const s = i / N, y = y0 + (y1 - y0) * s;
      const d = dent && i > 0 && i < N && i % 2 ? r * 0.04 : 0;
      ctx.lineTo(lx(y) + larg(s) * ecart * 1.2 + d, y);
    }
    ctx.closePath();
  };
  // levre de coque sombre
  bord(1.15, true);
  ctx.fillStyle = "#3F4814";
  ctx.fill();
  // tranche de la coque, blanc creme fibreux
  bord(0.95, false);
  ctx.fillStyle = "#E8E0BC";
  ctx.fill();
  // fibres de la paroi
  ctx.beginPath();
  for (let i = 1; i < N; i += 2) {
    const s = i / N, y = y0 + (y1 - y0) * s, w = larg(s);
    ctx.moveTo(lx(y) - w * 0.72, y); ctx.lineTo(lx(y) - w * 0.5, y + r * 0.03);
    ctx.moveTo(lx(y) + w * 1.1, y); ctx.lineTo(lx(y) + w * 0.8, y + r * 0.035);
  }
  ctx.strokeStyle = "rgba(190,176,120,0.8)";
  ctx.lineWidth = Math.max(1, r * 0.012);
  ctx.stroke();

  // deux lobes de chair allonges dans le sens de la loge, bombes, serres
  const lobes = [[0.31, 0.34, -0.1], [0.7, 0.3, 0.12]];
  for (let j = 0; j < 2; j++) {
    const s = lobes[j][0], y = y0 + (y1 - y0) * s;
    const w = larg(s) * 0.82;
    const cxl = lx(y) + larg(s) * 0.2;
    const gl = ctx.createRadialGradient(cxl - w * 0.4, y - r * 0.12, r * 0.01, cxl, y, r * lobes[j][1] * 1.1);
    gl.addColorStop(0, "#FFF1B0");
    gl.addColorStop(0.5, "#F2CE5E");
    gl.addColorStop(1, "#C99A34");
    ctx.beginPath();
    ctx.ellipse(cxl, y, w, r * lobes[j][1], lobes[j][2], 0, TAU);
    ctx.fillStyle = gl;
    ctx.fill();
    ctx.strokeStyle = "rgba(150,110,36,0.75)";
    ctx.lineWidth = Math.max(1, r * 0.012);
    ctx.stroke();
  }
  // plis de la chair, dans la longueur des lobes
  ctx.beginPath();
  for (let j = 0; j < 2; j++) {
    const s = lobes[j][0], y = y0 + (y1 - y0) * s, h = r * lobes[j][1] * 0.6;
    const cxl = lx(y) + larg(s) * 0.2;
    ctx.moveTo(cxl + r * 0.04, y - h);
    ctx.quadraticCurveTo(cxl + r * 0.08, y, cxl + r * 0.03, y + h);
  }
  ctx.strokeStyle = "rgba(170,126,40,0.45)";
  ctx.stroke();

  // bord dentele de la coque par dessus
  bord(1.15, true);
  ctx.strokeStyle = "#556020";
  ctx.lineWidth = Math.max(1, r * 0.025);
  ctx.stroke();

  // reflet mat en haut a gauche
  ctx.save();
  ctx.globalAlpha = 0.16;
  ctx.beginPath();
  ctx.ellipse(-r * 0.34, -r * 0.34, r * 0.2, r * 0.36, -0.35, 0, TAU);
  ctx.fillStyle = "#FFFBD8";
  ctx.fill();
  ctx.restore();

  ctx.restore();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
}

/* ------------------------------------------------------ fruit-baobab */
function dessinerBaobab(ctx, r, vif, t) {
  const trait = ctx.strokeStyle;
  const lw = ctx.lineWidth;
  const PI2 = Math.PI * 2;
  // balancement tres lent autour du point d'attache
  const swing = Math.sin(t * 0.0007) * 0.03;
  const px = r * 0.02, py = -r * 1.25;

  // pseudo hasard fixe, pour un grain identique a chaque frame
  function h(i) {
    const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
    return s - Math.floor(s);
  }
  // trace lisse et ferme a partir de points (milieux en quadratique)
  function lisse(pts, ox, oy) {
    const n = pts.length;
    ctx.beginPath();
    const m0x = (pts[n - 1][0] + pts[0][0]) / 2, m0y = (pts[n - 1][1] + pts[0][1]) / 2;
    ctx.moveTo(ox + m0x * r, oy + m0y * r);
    for (let i = 0; i < n; i++) {
      const a = pts[i], b = pts[(i + 1) % n];
      ctx.quadraticCurveTo(ox + a[0] * r, oy + a[1] * r, ox + (a[0] + b[0]) / 2 * r, oy + (a[1] + b[1]) / 2 * r);
    }
    ctx.closePath();
  }
  // grain duveteux : petits poils courts clairs puis mouchetis sombre
  function duvet(x0, y0, x1, y1, n, graine) {
    const l = r * 0.022;
    ctx.lineWidth = Math.max(0.8, r * 0.012);
    ctx.strokeStyle = "rgba(226,224,204,0.3)";
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const x = x0 + h(graine + i) * (x1 - x0), y = y0 + h(graine + i + 500) * (y1 - y0);
      const a = h(graine + i + 900) * PI2;
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l);
    }
    ctx.stroke();
    ctx.fillStyle = "rgba(62,46,28,0.32)";
    ctx.beginPath();
    for (let i = 0; i < n * 0.55; i++) {
      const x = x0 + h(graine + i + 1300) * (x1 - x0), y = y0 + h(graine + i + 1700) * (y1 - y0);
      ctx.rect(x, y, r * 0.018, r * 0.018);
    }
    ctx.fill();
  }

  // ombre au sol, commune aux deux fruits
  ctx.save();
  ctx.globalAlpha = 0.32;
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.ellipse(r * 0.2, r * 1.2, r * 1.2, r * 0.08, 0, 0, PI2);
  ctx.fill();
  ctx.restore();

  // branche porteuse, bois gris brun
  ctx.lineCap = "round";
  ctx.strokeStyle = "#7A5B3E";
  ctx.lineWidth = Math.max(1.5, r * 0.09);
  ctx.beginPath();
  ctx.moveTo(-r * 0.6, -r * 1.24);
  ctx.quadraticCurveTo(r * 0.05, -r * 1.3, r * 0.8, -r * 1.2);
  ctx.stroke();

  // fruit entier suspendu, qui se balance
  ctx.save();
  ctx.translate(px, py);
  ctx.rotate(swing);
  ctx.translate(-px, -py);

  const cx = -r * 0.48, cy = -r * 0.74;
  // longue tige pendante, epaisse et ligneuse
  ctx.strokeStyle = "#6E5238";
  ctx.lineWidth = Math.max(1.5, r * 0.06);
  ctx.beginPath();
  ctx.moveTo(px, py);
  ctx.bezierCurveTo(r * 0.08, -r * 1.06, cx + r * 0.02, -r * 1.06, cx, cy + r * 0.02);
  ctx.stroke();

  // capsule irreguliere : col etroit, ventre plus large vers le bas, bout un peu bossele
  const coque = [
    [0.12, 0.01], [0.3, 0.12], [0.39, 0.4], [0.44, 0.8], [0.47, 1.06], [0.47, 1.3],
    [0.4, 1.52], [0.26, 1.66], [0.1, 1.7], [0.03, 1.76], [-0.08, 1.71],
    [-0.26, 1.63], [-0.42, 1.44], [-0.48, 1.14], [-0.46, 0.78], [-0.42, 0.4],
    [-0.33, 0.12], [-0.13, 0.0]
  ];
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(0.05);
  // passage vert gris en haut vers brun en bas
  const g = ctx.createLinearGradient(0, 0, 0, r * 1.76);
  g.addColorStop(0, "#A4A88C");
  g.addColorStop(0.42, "#8F8E6E");
  g.addColorStop(0.75, "#7E6A4B");
  g.addColorStop(1, "#654B32");
  ctx.fillStyle = g;
  lisse(coque, 0, 0);
  ctx.fill();

  ctx.save();
  ctx.clip();
  // lisiere feutree : halo clair au bord, effet velours (chemin du clip reutilise)
  ctx.strokeStyle = "rgba(222,222,200,0.24)";
  ctx.lineWidth = r * 0.08;
  ctx.stroke();
  // volume : clair a gauche, sombre a droite
  const gv = ctx.createLinearGradient(-r * 0.52, 0, r * 0.52, 0);
  gv.addColorStop(0, "rgba(236,236,216,0.26)");
  gv.addColorStop(0.45, "rgba(236,236,216,0)");
  gv.addColorStop(1, "rgba(22,16,10,0.5)");
  ctx.fillStyle = gv;
  ctx.fillRect(-r * 0.6, -r * 0.05, r * 1.2, r * 1.9);
  // taches brunes diffuses, jamais en bandes
  ctx.fillStyle = "rgba(104,76,46,0.2)";
  ctx.beginPath();
  ctx.ellipse(r * 0.12, r * 0.62, r * 0.14, r * 0.2, 0.3, 0, PI2);
  ctx.moveTo(-r * 0.12 + r * 0.11, r * 1.2);
  ctx.ellipse(-r * 0.12, r * 1.2, r * 0.11, r * 0.16, -0.4, 0, PI2);
  ctx.moveTo(r * 0.3 + r * 0.08, r * 1.42);
  ctx.ellipse(r * 0.3, r * 1.42, r * 0.08, r * 0.12, 0.2, 0, PI2);
  ctx.fill();
  duvet(-r * 0.5, 0, r * 0.5, r * 1.76, 20, 11);
  ctx.restore();

  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  lisse(coque, 0, 0);
  ctx.stroke();

  // collerette brune a l'attache
  ctx.fillStyle = "#5E4630";
  ctx.beginPath();
  ctx.ellipse(0, r * 0.03, r * 0.1, r * 0.055, 0, 0, PI2);
  ctx.fill();
  ctx.restore();
  ctx.restore();

  // capsule cassee au sol, couchee, pleine de pulpe crayeuse
  const hx = r * 0.78, hy = r * 0.95, L = r * 0.64, H = r * 0.28;
  const bord = [
    [-0.98, -0.1], [-0.8, -0.38], [-0.6, -0.3], [-0.42, -0.55], [-0.2, -0.46], [0, -0.62],
    [0.2, -0.5], [0.4, -0.64], [0.58, -0.5], [0.76, -0.58], [0.92, -0.35], [1.0, -0.05]
  ];
  const levre = [
    [-1.0, -0.05], [-0.8, 0.06], [-0.62, -0.02], [-0.45, 0.1], [-0.25, 0.02], [-0.08, 0.12],
    [0.1, 0.03], [0.28, 0.13], [0.46, 0.02], [0.63, 0.1], [0.8, 0.0], [0.96, 0.06]
  ];
  function ligne(pts, premier) {
    for (let i = 0; i < pts.length; i++) {
      const x = hx + pts[i][0] * L, y = hy + pts[i][1] * H;
      if (i === 0 && premier) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
  }
  // paroi interieure du fond, brun sombre
  ctx.fillStyle = "#3E2A1C";
  ctx.beginPath();
  ligne(bord, true);
  ctx.lineTo(hx + L * 0.96, hy + H * 0.3);
  ctx.lineTo(hx - L * 0.98, hy + H * 0.2);
  ctx.closePath();
  ctx.fill();
  // tranche de la coque du fond : dos brun puis epaisseur claire
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#6E5438";
  ctx.lineWidth = Math.max(1.5, r * 0.07);
  ctx.beginPath();
  ligne(bord, true);
  ctx.stroke();
  ctx.strokeStyle = "#CDB78C";
  ctx.lineWidth = Math.max(1, r * 0.028);
  ctx.beginPath();
  ligne(bord, true);
  ctx.stroke();

  // morceaux de pulpe blanche crayeuse, en tas dans la coque
  const blocs = [
    [-0.72, -0.1, 0.12], [-0.5, -0.02, 0.14], [-0.24, 0.02, 0.15], [0.04, 0.03, 0.15],
    [0.32, 0.02, 0.15], [0.6, -0.02, 0.14], [0.82, -0.08, 0.11], [-0.56, -0.42, 0.13],
    [-0.3, -0.52, 0.15], [0.0, -0.62, 0.15], [0.3, -0.56, 0.15], [0.58, -0.44, 0.13],
    [0.04, -0.92, 0.13]
  ];
  ctx.lineWidth = Math.max(1, r * 0.016);
  ctx.strokeStyle = "#B7AD96";
  for (let pass = 0; pass < 2; pass++) {
    ctx.fillStyle = pass ? "#E4DECF" : "#F3EFE5";
    ctx.beginPath();
    for (let i = pass; i < blocs.length; i += 2) {
      const b = blocs[i];
      const bx = hx + b[0] * L, by = hy + b[1] * H, s = b[2] * r;
      for (let k = 0; k < 5; k++) {
        const a = k * 1.2566 + i * 0.7;
        const d = s * (0.78 + ((i * 3 + k * 5) % 4) * 0.08);
        const qx = bx + Math.cos(a) * d, qy = by + Math.sin(a) * d * 0.8;
        if (k === 0) ctx.moveTo(qx, qy); else ctx.lineTo(qx, qy);
      }
      ctx.closePath();
    }
    ctx.fill();
    ctx.stroke();
  }
  // fibres rousses entre les morceaux
  ctx.strokeStyle = "#A0643C";
  ctx.lineWidth = Math.max(1, r * 0.014);
  ctx.beginPath();
  ctx.moveTo(hx - L * 0.6, hy - H * 0.2);
  ctx.quadraticCurveTo(hx - L * 0.3, hy - H * 0.75, hx + L * 0.05, hy - H * 0.35);
  ctx.moveTo(hx + L * 0.12, hy - H * 0.8);
  ctx.quadraticCurveTo(hx + L * 0.45, hy - H * 0.5, hx + L * 0.7, hy - H * 0.15);
  ctx.stroke();
  // graines sombres en rein, a moitie enfoncees
  const graines = [[-0.4, -0.25, 0.4], [0.18, -0.3, -0.5], [-0.1, -0.7, 1.1], [0.45, -0.7, 0.2], [0.7, -0.2, -0.9], [-0.66, -0.55, 0.7]];
  ctx.fillStyle = "#3B2416";
  ctx.beginPath();
  for (let i = 0; i < graines.length; i++) {
    const s = graines[i];
    const sx = hx + s[0] * L, sy = hy + s[1] * H;
    ctx.moveTo(sx + r * 0.042 * Math.cos(s[2]), sy + r * 0.042 * Math.sin(s[2]));
    ctx.ellipse(sx, sy, r * 0.042, r * 0.027, s[2], 0, PI2);
  }
  ctx.fill();

  // coque de devant, veloutee brune, levre cassee en dents
  function devant() {
    ctx.beginPath();
    ligne(levre, true);
    ctx.bezierCurveTo(hx + L * 1.08, hy + H * 0.2, hx + L * 1.05, hy + H * 0.78, hx + L * 0.7, hy + H * 0.98);
    ctx.bezierCurveTo(hx + L * 0.3, hy + H * 1.12, hx - L * 0.4, hy + H * 1.05, hx - L * 0.72, hy + H * 0.7);
    ctx.quadraticCurveTo(hx - L * 0.95, hy + H * 0.4, hx - L * 1.0, hy - H * 0.05);
    ctx.closePath();
  }
  const cg = ctx.createLinearGradient(hx - L, hy, hx + L, hy + H);
  cg.addColorStop(0, "#949473");
  cg.addColorStop(0.5, "#7F6E4E");
  cg.addColorStop(1, "#5E4630");
  ctx.fillStyle = cg;
  devant();
  ctx.fill();
  ctx.save();
  ctx.clip();
  const cb = ctx.createLinearGradient(0, hy, 0, hy + H * 1.1);
  cb.addColorStop(0, "rgba(20,14,8,0)");
  cb.addColorStop(1, "rgba(20,14,8,0.45)");
  ctx.fillStyle = cb;
  ctx.fillRect(hx - L * 1.1, hy - H * 0.2, L * 2.3, H * 1.4);
  duvet(hx - L, hy - H * 0.1, hx + L, hy + H * 1.1, 10, 77);
  ctx.restore();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  devant();
  ctx.stroke();
  // epaisseur claire de la coque cassee, bien visible sur la levre
  ctx.strokeStyle = "#D4BF94";
  ctx.lineWidth = Math.max(1, r * 0.03);
  ctx.beginPath();
  ligne(levre, true);
  ctx.stroke();
  // bout de tige reste attache a la pointe
  ctx.strokeStyle = "#6E5238";
  ctx.lineWidth = Math.max(1, r * 0.04);
  ctx.beginPath();
  ctx.moveTo(hx - L * 1.0, hy);
  ctx.lineTo(hx - L * 1.0 - r * 0.12, hy - r * 0.05);
  ctx.stroke();
}

/* -------------------------------------------- orange-sanguine-sicile */
function dessinerOrangeSanguine(ctx, r, vif, t) {
  const trait = ctx.strokeStyle;
  const lw = ctx.lineWidth;
  const TAU = Math.PI * 2;
  // tres leger balancement, pivot au sol
  const bal = Math.sin(t * 0.0007) * 0.018;
  ctx.save();
  ctx.translate(0, r * 1.2);
  ctx.rotate(bal);
  ctx.translate(0, -r * 1.2);

  /* ---------- orange entiere, en arriere plan a gauche ---------- */
  const ox = -r * 0.45, oy = r * 0.3, orr = r * 0.9;
  const peau = ctx.createRadialGradient(ox - orr * 0.35, oy - orr * 0.4, orr * 0.08, ox, oy, orr);
  peau.addColorStop(0, "#FFC46A");
  peau.addColorStop(0.45, "#F58A26");
  peau.addColorStop(0.85, "#D9532A");
  peau.addColorStop(1, "#B23A25");
  ctx.fillStyle = peau;
  ctx.beginPath();
  ctx.ellipse(ox, oy, orr, orr * 0.97, 0, 0, TAU);
  ctx.fill();

  // rougeur typique de la sanguine, et pores de la peau, dans le fruit
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(ox, oy, orr, orr * 0.97, 0, 0, TAU);
  ctx.clip();
  ctx.globalAlpha = 0.35;
  ctx.fillStyle = "#B8262A";
  ctx.beginPath();
  ctx.ellipse(ox + orr * 0.45, oy + orr * 0.35, orr * 0.62, orr * 0.5, -0.5, 0, TAU);
  ctx.fill();
  ctx.globalAlpha = 0.22;
  ctx.beginPath();
  ctx.ellipse(ox - orr * 0.55, oy + orr * 0.55, orr * 0.35, orr * 0.25, 0.4, 0, TAU);
  ctx.fill();
  // pores : points sombres en spirale reguliere
  ctx.globalAlpha = 0.28;
  ctx.fillStyle = "#8A3A12";
  const pr = Math.max(0.6, r * 0.018);
  for (let i = 0; i < 26; i++) {
    const a = i * 2.39996;
    const d = orr * 0.86 * Math.sqrt((i + 0.5) / 26);
    ctx.beginPath();
    ctx.arc(ox + Math.cos(a) * d, oy + Math.sin(a) * d * 0.97, pr, 0, TAU);
    ctx.fill();
  }
  // reflet brillant
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = "#FFF1D2";
  ctx.beginPath();
  ctx.ellipse(ox - orr * 0.42, oy - orr * 0.45, orr * 0.2, orr * 0.1, -0.7, 0, TAU);
  ctx.fill();
  ctx.restore();

  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.beginPath();
  ctx.ellipse(ox, oy, orr, orr * 0.97, 0, 0, TAU);
  ctx.stroke();

  // pedoncule : petite etoile verte creusee
  const px = ox + orr * 0.05, py = oy - orr * 0.93;
  ctx.fillStyle = "#5E7A2A";
  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * TAU;
    const d = (i % 2 ? 0.05 : 0.1) * r;
    const xx = px + Math.cos(a) * d, yy = py + Math.sin(a) * d * 0.55;
    if (i) ctx.lineTo(xx, yy); else ctx.moveTo(xx, yy);
  }
  ctx.closePath();
  ctx.fill();

  // feuille, qui ondule doucement
  ctx.save();
  ctx.translate(px, py);
  ctx.rotate(-0.5 + Math.sin(t * 0.0011) * 0.05);
  const fl = r * 0.62, fw = r * 0.2;
  const feuille = ctx.createLinearGradient(0, -fw, 0, fw);
  feuille.addColorStop(0, "#7FBF45");
  feuille.addColorStop(1, "#3F7A26");
  ctx.fillStyle = feuille;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(fl * 0.3, -fw * 1.2, fl * 0.75, -fw * 0.9, fl, 0);
  ctx.bezierCurveTo(fl * 0.75, fw * 0.8, fl * 0.3, fw * 0.9, 0, 0);
  ctx.fill();
  ctx.strokeStyle = "#2C5A1C";
  ctx.lineWidth = Math.max(1, r * 0.02);
  ctx.stroke();
  // nervure centrale et deux secondaires
  ctx.strokeStyle = "#B5DB85";
  ctx.lineWidth = Math.max(1, r * 0.012);
  ctx.beginPath();
  ctx.moveTo(fl * 0.04, 0);
  ctx.quadraticCurveTo(fl * 0.5, -fw * 0.08, fl * 0.95, 0);
  ctx.moveTo(fl * 0.35, -fw * 0.05);
  ctx.lineTo(fl * 0.5, -fw * 0.55);
  ctx.moveTo(fl * 0.55, -fw * 0.04);
  ctx.lineTo(fl * 0.7, fw * 0.45);
  ctx.stroke();
  ctx.restore();

  /* ---------- demi orange coupee, au premier plan a droite ---------- */
  const hx = r * 0.66, hy = r * 0.62, hrx = r * 0.8, hry = r * 0.5;
  const dos = r * 0.14; // epaisseur de l'ecorce vue de face, sous la coupe

  // l'ecorce du dessous (la moitie bombee)
  const ecorce = ctx.createLinearGradient(hx - hrx, 0, hx + hrx, 0);
  ecorce.addColorStop(0, "#E0662A");
  ecorce.addColorStop(0.5, "#F58A26");
  ecorce.addColorStop(1, "#B8402A");
  ctx.fillStyle = ecorce;
  ctx.beginPath();
  ctx.ellipse(hx, hy, hrx, hry, 0, 0, Math.PI);
  ctx.ellipse(hx, hy + dos, hrx, hry, 0, Math.PI, 0, true);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.beginPath();
  ctx.ellipse(hx, hy + dos, hrx, hry, 0, 0, Math.PI);
  ctx.moveTo(hx - hrx, hy);
  ctx.lineTo(hx - hrx, hy + dos);
  ctx.moveTo(hx + hrx, hy);
  ctx.lineTo(hx + hrx, hy + dos);
  ctx.stroke();

  // la face coupee : zeste, albedo, chair
  ctx.fillStyle = "#F07A22";
  ctx.beginPath();
  ctx.ellipse(hx, hy, hrx, hry, 0, 0, TAU);
  ctx.fill();
  ctx.fillStyle = "#FFF3DE";
  ctx.beginPath();
  ctx.ellipse(hx, hy, hrx * 0.93, hry * 0.9, 0, 0, TAU);
  ctx.fill();

  const crx = hrx * 0.84, cry = hry * 0.79;
  const chair = ctx.createRadialGradient(hx, hy, 0, hx, hy, crx);
  chair.addColorStop(0, "#E0404A");
  chair.addColorStop(0.55, "#B01E32");
  chair.addColorStop(1, "#7E1226");
  ctx.fillStyle = chair;
  ctx.beginPath();
  ctx.ellipse(hx, hy, crx, cry, 0, 0, TAU);
  ctx.fill();

  // quartiers : quelques uns plus orange, marbrure de la Tarocco
  const n = 10;
  ctx.save();
  ctx.globalAlpha = 0.3;
  ctx.fillStyle = "#F0763A";
  for (let i = 0; i < n; i++) {
    if (i % 3 !== 1) continue;
    const a0 = (i / n) * TAU + 0.06, a1 = ((i + 1) / n) * TAU - 0.06;
    ctx.beginPath();
    ctx.moveTo(hx, hy);
    ctx.ellipse(hx, hy, crx * 0.94, cry * 0.94, 0, a0, a1);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();

  // membranes blanches qui rayonnent du centre
  ctx.strokeStyle = "#FBE1D6";
  ctx.lineWidth = Math.max(1, r * 0.022);
  ctx.beginPath();
  for (let i = 0; i < n; i++) {
    const a = (i / n) * TAU;
    ctx.moveTo(hx + Math.cos(a) * crx * 0.12, hy + Math.sin(a) * cry * 0.12);
    ctx.lineTo(hx + Math.cos(a) * crx, hy + Math.sin(a) * cry);
  }
  ctx.stroke();

  // vesicules de jus : petits traits clairs dans chaque quartier
  if (r > 30) {
    ctx.save();
    ctx.globalAlpha = 0.45;
    ctx.strokeStyle = "#FF8C8C";
    ctx.lineWidth = Math.max(1, r * 0.01);
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const a = ((i + 0.5) / n) * TAU;
      const c = Math.cos(a), s = Math.sin(a);
      ctx.moveTo(hx + c * crx * 0.35, hy + s * cry * 0.35);
      ctx.lineTo(hx + c * crx * 0.6, hy + s * cry * 0.6);
      ctx.moveTo(hx + c * crx * 0.68, hy + s * cry * 0.68);
      ctx.lineTo(hx + c * crx * 0.86, hy + s * cry * 0.86);
    }
    ctx.stroke();
    ctx.restore();
  }

  // coeur blanc au centre
  ctx.fillStyle = "#FFF3DE";
  ctx.beginPath();
  ctx.ellipse(hx, hy, crx * 0.12, cry * 0.12, 0, 0, TAU);
  ctx.fill();

  // lueur humide sur la coupe
  ctx.save();
  ctx.globalAlpha = 0.25;
  ctx.fillStyle = "#FFFFFF";
  ctx.beginPath();
  ctx.ellipse(hx - crx * 0.35, hy - cry * 0.45, crx * 0.3, cry * 0.12, -0.2, 0, TAU);
  ctx.fill();
  ctx.restore();

  // contour principal de la coupe
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.beginPath();
  ctx.ellipse(hx, hy, hrx, hry, 0, 0, TAU);
  ctx.stroke();

  ctx.restore();
}

/* -------------------------------------------------------------- acai */
function dessinerAcai(ctx, r, vif, t) {
  const trait = ctx.strokeStyle;
  const TAU = Math.PI * 2;
  // hasard fixe, le regime ne change pas d'une frame a l'autre
  const h = (n) => { const s = Math.sin(n * 12.9898 + 4.1) * 43758.5453; return s - Math.floor(s); };

  // enveloppe de la grappe : goutte irreguliere qui pend, un peu penchee
  const haut = -0.78, bas = 1.02;
  const demiLarg = (y) => {
    const u = (y - haut) / (bas - haut);
    if (u < 0 || u > 1) return 0;
    return 0.98 * Math.pow(Math.sin(Math.PI * Math.pow(u, 0.72)), 0.7) + 0.1;
  };
  const penche = (y) => 0.06 * (y - haut);

  // rachilles : fines tiges brun sombre qui pendent sous les baies, bouts qui depassent en bas
  const rachilles = [
    [0.02, -0.72, -0.5, -0.3, -0.72, 0.5, -0.66, 0.98],
    [0.02, -0.72, -0.2, -0.2, -0.34, 0.6, -0.26, 1.1],
    [0.02, -0.72, 0.1, -0.1, 0.12, 0.7, 0.1, 1.13],
    [0.02, -0.72, 0.36, -0.2, 0.5, 0.5, 0.46, 1.07],
    [0.02, -0.72, 0.62, -0.36, 0.86, 0.3, 0.8, 0.84],
    [0.02, -0.72, -0.7, -0.5, -0.96, 0.1, -0.92, 0.52],
  ];

  // baies serrees en quinconce dans l'enveloppe, avec un peu de jeu
  const baies = [];
  const pas = 0.255;
  let ligne = 0;
  for (let y = haut + 0.06; y <= bas; y += pas * 0.87, ligne++) {
    const w = demiLarg(y);
    const dec = (ligne % 2) * pas * 0.5;
    for (let x = -1.2 + dec; x <= 1.2; x += pas) {
      const j = ligne * 31 + Math.round((x + 2) * 10);
      const bx = x + (h(j) - 0.5) * 0.06 + penche(y);
      const by = y + (h(j + 7) - 0.5) * 0.06;
      const rr = 0.132 + h(j + 13) * 0.026;
      if (Math.abs(x) + rr * 0.6 > w) continue;
      // les bords sont en arriere, plus sombres ; le centre en avant
      const bord = Math.abs(x) / Math.max(w, 0.1);
      const prof = bord * 0.7 + h(j + 21) * 0.5;
      baies.push({ x: bx, y: by, r: rr, n: prof > 0.75 ? 0 : prof > 0.4 ? 1 : 2 });
    }
  }
  // au bout de chaque rachille qui depasse, une ou deux baies en chapelet : la grappe n'est pas une boule
  const cub = (a, b, c, d, u) => { const v = 1 - u; return v * v * v * a + 3 * v * v * u * b + 3 * v * u * u * c + u * u * u * d; };
  rachilles.forEach((p, i) => {
    const pos = i === 2 ? [1.0] : [0.84, 1.0];
    pos.forEach((u, k) => baies.push({
      x: cub(p[0], p[2], p[4], p[6], u),
      y: cub(p[1], p[3], p[5], p[7], u),
      r: 0.1 + h(i * 5 + k + 300) * 0.02,
      n: k === pos.length - 1 ? 1 : 0,
    }));
  });

  ctx.save();
  // balancement tres lent autour du point d'attache
  ctx.translate(0.08 * r, -1.34 * r);
  ctx.rotate(Math.sin(t * 0.0006) * 0.02);
  ctx.translate(-0.08 * r, 1.34 * r);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // rachilles brun sombre, derriere les baies, jamais plus claires qu'elles
  ctx.beginPath();
  for (const p of rachilles) {
    ctx.moveTo(p[0] * r, p[1] * r);
    ctx.bezierCurveTo(p[2] * r, p[3] * r, p[4] * r, p[5] * r, p[6] * r, p[7] * r);
  }
  ctx.strokeStyle = "#5A3A24";
  ctx.lineWidth = Math.max(1.2, r * 0.03);
  ctx.stroke();

  // pedoncule : court et epais, il sort du haut de la grappe
  ctx.beginPath();
  ctx.moveTo(0.1 * r, -1.33 * r);
  ctx.bezierCurveTo(0.02 * r, -1.14 * r, 0.08 * r, -0.94 * r, 0.02 * r, -0.7 * r);
  ctx.strokeStyle = trait;
  ctx.lineWidth = Math.max(2.6, r * 0.11);
  ctx.stroke();
  ctx.strokeStyle = "#6A4628";
  ctx.lineWidth = Math.max(1.6, r * 0.075);
  ctx.stroke();

  // contour exterieur de la masse de baies au trait (survol), sous les baies
  const rb = (b) => Math.max(b.r * r, 2.4);
  ctx.beginPath();
  for (const b of baies) {
    ctx.moveTo(b.x * r + rb(b), b.y * r);
    ctx.arc(b.x * r, b.y * r, rb(b), 0, TAU);
  }
  ctx.strokeStyle = trait;
  ctx.lineWidth = Math.max(2, r * 0.05);
  ctx.stroke();

  // baies : arriere sombre, milieu, avant plus clair ; lisere violet clair pour les detacher du fond
  const tons = vif ? ["#2E1438", "#44205A", "#5A2C72"] : ["#28122F", "#3B1C4E", "#4F2766"];
  const liseres = ["rgba(150,100,180,0.45)", "rgba(175,125,205,0.55)", "rgba(200,150,225,0.65)"];
  for (let n = 0; n < 3; n++) {
    ctx.beginPath();
    for (const b of baies) {
      if (b.n !== n) continue;
      ctx.moveTo(b.x * r + rb(b), b.y * r);
      ctx.arc(b.x * r, b.y * r, rb(b), 0, TAU);
    }
    ctx.fillStyle = tons[n];
    ctx.fill();
    ctx.strokeStyle = liseres[n];
    ctx.lineWidth = Math.max(0.8, r * 0.012);
    ctx.stroke();
  }

  // reflet speculaire blanc net en haut a gauche des baies avant et milieu : la rondeur du fruit
  ctx.beginPath();
  for (const b of baies) {
    if (b.n === 0) continue;
    const pr = Math.max(b.r * (b.n === 2 ? 0.2 : 0.16) * r, 1);
    const px = (b.x - b.r * 0.36) * r, py = (b.y - b.r * 0.38) * r;
    ctx.moveTo(px + pr, py);
    ctx.arc(px, py, pr, 0, TAU);
  }
  ctx.fillStyle = "rgba(255,248,255,0.88)";
  ctx.fill();

  ctx.restore();
}

/* -------------------------------------------------------- mangoustan */
function dessinerMangoustan(ctx, r, vif, t) {
  const trait = ctx.strokeStyle;
  const lw = Math.max(1, ctx.lineWidth || 1);
  const TAU = Math.PI * 2;

  // un sepale epais et arrondi, vu de cote, pointe vers le bas
  function sepale(cx, cy, larg, haut, ang, fond, bord) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(ang);
    ctx.beginPath();
    ctx.moveTo(-larg, 0);
    ctx.bezierCurveTo(-larg * 1.1, haut * 0.7, -larg * 0.4, haut, 0, haut);
    ctx.bezierCurveTo(larg * 0.4, haut, larg * 1.1, haut * 0.7, larg, 0);
    ctx.closePath();
    ctx.fillStyle = fond;
    ctx.fill();
    ctx.strokeStyle = bord;
    ctx.lineWidth = Math.max(1, lw * 0.8);
    ctx.stroke();
    // nervure centrale discrete
    ctx.beginPath();
    ctx.moveTo(0, haut * 0.15);
    ctx.lineTo(0, haut * 0.8);
    ctx.strokeStyle = "rgba(40,70,25,.6)";
    ctx.lineWidth = Math.max(1, lw * 0.6);
    ctx.stroke();
    ctx.restore();
  }

  ctx.save();
  // tres leger balancement autour de la base
  ctx.translate(0, r * 1.2);
  ctx.rotate(Math.sin(t * 0.0007) * 0.018);
  ctx.translate(0, -r * 1.2);

  // ===== fruit entier =====
  const fx = -r * 0.25, fy = r * 0.3, fr = r * 0.88;
  const g = ctx.createRadialGradient(fx - fr * 0.35, fy - fr * 0.4, fr * 0.1, fx, fy, fr);
  g.addColorStop(0, "#9A4A86");
  g.addColorStop(0.55, "#6A2A5E");
  g.addColorStop(1, "#3E1438");
  ctx.beginPath();
  ctx.ellipse(fx, fy, fr, fr * 0.97, 0, 0, TAU);
  ctx.fillStyle = g;
  ctx.fill();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.stroke();

  // reflet lisse de la peau
  ctx.save();
  ctx.globalAlpha = 0.35;
  ctx.beginPath();
  ctx.ellipse(fx - fr * 0.42, fy - fr * 0.22, fr * 0.13, fr * 0.3, -0.5, 0, TAU);
  ctx.fillStyle = "#E6B8DC";
  ctx.fill();
  ctx.restore();

  // petite cicatrice florale en bas (rosette du stigmate)
  ctx.beginPath();
  ctx.arc(fx + fr * 0.05, fy + fr * 0.86, fr * 0.05, 0, TAU);
  ctx.fillStyle = "#2E0E2A";
  ctx.fill();

  // ===== calice : quatre sepales verts epais =====
  const cy0 = fy - fr * 0.9;
  const vert = "#6F9E3C", vertF = "#4E7A2A", bordV = "#2F5418";
  // sepales arriere, plus sombres
  sepale(fx - fr * 0.3, cy0 + fr * 0.02, fr * 0.2, fr * 0.24, 0.55, vertF, bordV);
  sepale(fx + fr * 0.3, cy0 + fr * 0.02, fr * 0.2, fr * 0.24, -0.55, vertF, bordV);
  // sepales avant
  sepale(fx - fr * 0.14, cy0 + fr * 0.06, fr * 0.2, fr * 0.3, 0.2, vert, bordV);
  sepale(fx + fr * 0.14, cy0 + fr * 0.06, fr * 0.2, fr * 0.3, -0.2, vert, bordV);
  // coeur du calice
  ctx.beginPath();
  ctx.ellipse(fx, cy0 + fr * 0.03, fr * 0.2, fr * 0.08, 0, 0, TAU);
  ctx.fillStyle = "#5A8A30";
  ctx.fill();
  ctx.strokeStyle = bordV;
  ctx.lineWidth = Math.max(1, lw * 0.8);
  ctx.stroke();

  // pedoncule court et epais
  ctx.beginPath();
  ctx.moveTo(fx - fr * 0.06, cy0);
  ctx.quadraticCurveTo(fx - fr * 0.05, cy0 - fr * 0.25, fx + fr * 0.04, cy0 - fr * 0.38);
  ctx.lineTo(fx + fr * 0.12, cy0 - fr * 0.34);
  ctx.quadraticCurveTo(fx + fr * 0.05, cy0 - fr * 0.2, fx + fr * 0.06, cy0);
  ctx.closePath();
  ctx.fillStyle = "#7A6A3A";
  ctx.fill();
  ctx.strokeStyle = "#4A3E20";
  ctx.lineWidth = Math.max(1, lw * 0.7);
  ctx.stroke();

  // ===== moitie ouverte, en avant a droite =====
  const ox = r * 0.9, oy = r * 0.86, orx = r * 0.55, ory = r * 0.3;
  // coque exterieure : bol violet sous la tranche
  ctx.beginPath();
  ctx.ellipse(ox, oy, orx, ory, 0, 0, Math.PI);
  ctx.bezierCurveTo(ox - orx, oy + r * 0.3, ox - orx * 0.5, oy + r * 0.4, ox, oy + r * 0.4);
  ctx.bezierCurveTo(ox + orx * 0.5, oy + r * 0.4, ox + orx, oy + r * 0.3, ox + orx, oy);
  ctx.closePath();
  ctx.fillStyle = "#4E1A46";
  ctx.fill();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.stroke();
  // reflet sur la coque
  ctx.beginPath();
  ctx.ellipse(ox - orx * 0.45, oy + r * 0.2, orx * 0.12, r * 0.06, 0.4, 0, TAU);
  ctx.fillStyle = "rgba(220,160,210,.3)";
  ctx.fill();

  // tranche : ecorce epaisse pourpre rouge
  ctx.beginPath();
  ctx.ellipse(ox, oy, orx, ory, 0, 0, TAU);
  ctx.fillStyle = "#A8325E";
  ctx.fill();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.stroke();
  // chair interne de l'ecorce, plus claire
  ctx.beginPath();
  ctx.ellipse(ox, oy, orx * 0.74, ory * 0.72, 0, 0, TAU);
  ctx.fillStyle = "#C85A84";
  ctx.fill();

  // quartiers blancs nacres en eventail
  const n = 6;
  const qx = orx * 0.64, qy = ory * 0.62;
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * TAU + 0.25;
    const a1 = a0 + TAU / n;
    const am = (a0 + a1) / 2;
    ctx.beginPath();
    ctx.moveTo(ox, oy);
    ctx.lineTo(ox + Math.cos(a0) * qx * 0.9, oy + Math.sin(a0) * qy * 0.9);
    ctx.quadraticCurveTo(
      ox + Math.cos(am) * qx * 1.18, oy + Math.sin(am) * qy * 1.18,
      ox + Math.cos(a1) * qx * 0.9, oy + Math.sin(a1) * qy * 0.9
    );
    ctx.closePath();
    ctx.fillStyle = i % 2 ? "#F4EEE6" : "#FBF8F2";
    ctx.fill();
    ctx.strokeStyle = "#CBBFB4";
    ctx.lineWidth = Math.max(1, lw * 0.6);
    ctx.stroke();
  }
  // brillance nacree au centre
  ctx.beginPath();
  ctx.ellipse(ox - orx * 0.1, oy - ory * 0.12, orx * 0.14, ory * 0.12, 0, 0, TAU);
  ctx.fillStyle = "rgba(255,255,255,.7)";
  ctx.fill();

  ctx.restore();
}

/* ----------------------------------------------------------- islande */
function dessinerIslande(ctx, r, vif, t) {
  const trait = ctx.strokeStyle;
  const lw = ctx.lineWidth;
  // cote reelle en longitude, latitude, sens des aiguilles depuis Reykjanes
  const C = [
    [-22.7, 63.8], [-22.55, 64.0], [-21.95, 64.15], [-22.1, 64.35], [-21.9, 64.55], [-22.6, 64.75],
    [-23.4, 64.78], [-24.05, 64.87], [-23.3, 64.95], [-22.4, 65.05], [-21.9, 65.2], [-22.6, 65.4],
    [-23.4, 65.45], [-24.5, 65.5], [-24.1, 65.72], [-23.8, 65.95], [-23.3, 66.15], [-22.9, 66.42],
    [-22.4, 66.46], [-21.9, 66.2], [-21.4, 65.95], [-21.0, 65.6], [-20.6, 65.75], [-20.35, 66.1],
    [-19.9, 65.95], [-19.4, 65.75], [-19.1, 66.05], [-18.8, 66.18], [-18.4, 66.0], [-18.1, 65.7],
    [-17.9, 66.05], [-17.4, 66.05], [-17.1, 66.2], [-16.5, 66.4], [-16.05, 66.53], [-15.6, 66.25],
    [-15.15, 66.2], [-14.55, 66.38], [-14.95, 66.0], [-14.7, 65.75], [-14.0, 65.65], [-13.6, 65.45],
    [-13.55, 65.1], [-13.9, 64.95], [-14.35, 64.7], [-14.9, 64.4], [-15.3, 64.25], [-16.2, 64.0],
    [-16.9, 63.8], [-17.9, 63.6], [-18.7, 63.45], [-19.3, 63.4], [-20.2, 63.65], [-21.1, 63.85],
    [-21.9, 63.85],
  ];
  // projection equirectangulaire corrigee par cos(65 degres), nord en haut
  const K = Math.cos(65 * Math.PI / 180);
  const S = 0.6;
  const X = lon => (lon + 19) * K * S * r;
  const Y = lat => (-(lat - 65) * S + 0.26) * r;

  // la cote passe par les milieux des segments : des fjords lisibles, sans dents de scie
  function cote() {
    const n = C.length;
    const p = i => C[((i % n) + n) % n];
    ctx.beginPath();
    ctx.moveTo((X(p(0)[0]) + X(p(1)[0])) / 2, (Y(p(0)[1]) + Y(p(1)[1])) / 2);
    for (let i = 1; i <= n; i++) {
      const a = p(i), b = p(i + 1);
      ctx.quadraticCurveTo(X(a[0]), Y(a[1]), (X(a[0]) + X(b[0])) / 2, (Y(a[1]) + Y(b[1])) / 2);
    }
    ctx.closePath();
  }

  function calotte(lon, lat, rx, ry, rot) {
    ctx.beginPath();
    ctx.ellipse(X(lon), Y(lat), r * rx, r * ry, rot, 0, Math.PI * 2);
  }

  // terre : cotes vertes, plus sombres vers le large
  cote();
  const g = ctx.createLinearGradient(0, -r * 0.7, 0, r * 1.2);
  g.addColorStop(0, "#7F9469");
  g.addColorStop(1, "#6A7D58");
  ctx.fillStyle = g;
  ctx.fill();

  ctx.save();
  cote();
  ctx.clip();
  // hautes terres brunes du centre
  const h = ctx.createRadialGradient(X(-18.6), Y(64.9), r * 0.05, X(-18.6), Y(64.9), r * 0.85);
  h.addColorStop(0, "rgba(140,122,90,0.95)");
  h.addColorStop(0.6, "rgba(132,116,86,0.6)");
  h.addColorStop(1, "rgba(132,116,86,0)");
  ctx.fillStyle = h;
  ctx.fillRect(-1.6 * r, -1.4 * r, 3.2 * r, 2.8 * r);

  // calottes glaciaires : Vatnajokull, Langjokull, Hofsjokull, Myrdalsjokull
  ctx.fillStyle = "#E6EDF1";
  ctx.strokeStyle = "rgba(150,180,205,0.8)";
  ctx.lineWidth = Math.max(1, r * 0.012);
  calotte(-16.75, 64.42, 0.31, 0.19, -0.12); ctx.fill(); ctx.stroke();
  calotte(-20.15, 64.64, 0.09, 0.055, 0.3); ctx.fill(); ctx.stroke();
  calotte(-18.85, 64.8, 0.075, 0.055, 0); ctx.fill(); ctx.stroke();
  calotte(-19.1, 63.66, 0.085, 0.045, 0); ctx.fill(); ctx.stroke();
  ctx.restore();

  // cote
  cote();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.lineJoin = "round";
  ctx.stroke();

  // Reykjavik, un point discret
  ctx.beginPath();
  ctx.arc(X(-21.95), Y(64.15), Math.max(1, r * 0.022), 0, Math.PI * 2);
  ctx.fillStyle = "#F2E6C8";
  ctx.fill();
}

/* ------------------------------------------------------------- japon */
function dessinerJapon(ctx, r, vif, t) {
  const trait = ctx.strokeStyle;
  const lw = ctx.lineWidth;

  // cotes reelles en (longitude, latitude), projection equirectangulaire
  // corrigee par cos(38 deg), nord en haut, centre 137.65 E / 38.2 N
  const K = 0.175, CX = 137.65, CY = 38.2, CL = Math.cos(38 * Math.PI / 180);
  function px(lon) { return (lon - CX) * CL * K * r; }
  function py(lat) { return (CY - lat) * K * r; }

  const HOKKAIDO = [
    [141.94,45.52],[142.35,45.2],[142.9,44.78],[143.35,44.37],[143.9,44.14],[144.3,44.0],
    [144.75,43.93],[145.05,44.1],[145.35,44.35],[145.28,44.12],[145.12,43.86],[145.2,43.62],
    [145.35,43.55],[145.82,43.38],[145.55,43.27],[145.2,43.08],[144.75,42.98],[144.35,42.97],
    [143.85,42.8],[143.5,42.45],[143.25,41.93],[142.95,42.1],[142.5,42.28],[142.05,42.48],
    [141.62,42.6],[141.25,42.45],[140.97,42.33],[140.72,42.55],[140.45,42.52],[140.38,42.28],
    [140.6,42.08],[140.95,41.92],[141.18,41.8],[140.95,41.72],[140.72,41.77],[140.45,41.55],
    [140.2,41.4],[140.05,41.46],[140.02,41.62],[140.12,41.88],[139.95,42.1],[139.8,42.25],
    [139.85,42.5],[140.05,42.72],[140.35,42.95],[140.5,43.2],[140.5,43.36],[140.8,43.25],
    [141.0,43.2],[141.32,43.24],[141.38,43.55],[141.62,43.9],[141.7,44.3],[141.78,44.72],
    [141.72,45.12],[141.66,45.42]
  ];

  const HONSHU = [
    // Shimokita (la hache) puis cote Pacifique du Tohoku
    [140.91,41.53],[141.2,41.5],[141.46,41.43],[141.42,41.12],[141.42,40.8],[141.55,40.52],
    [141.72,40.25],[141.85,39.95],[141.97,39.64],[142.07,39.52],[141.92,39.25],[141.75,38.95],
    [141.6,38.6],[141.52,38.3],[141.3,38.42],[141.05,38.28],[140.95,37.95],[141.02,37.55],
    [140.98,37.15],[140.85,36.85],[140.62,36.52],[140.58,36.2],[140.72,35.9],[140.87,35.72],
    // Boso, baie de Tokyo, Miura, Sagami, Izu
    [140.55,35.5],[140.4,35.2],[140.12,35.05],[139.85,34.9],[139.86,35.1],[139.95,35.35],
    [140.12,35.6],[139.84,35.74],[139.6,35.5],[139.64,35.25],[139.6,35.12],[139.5,35.3],
    [139.3,35.32],[139.13,35.2],[139.1,34.95],[139.12,34.72],[138.95,34.62],[138.82,34.68],
    [138.76,34.9],[138.85,35.08],[138.62,35.05],[138.4,34.9],[138.22,34.6],[137.8,34.65],
    [137.3,34.62],[137.0,34.58],[137.2,34.75],[137.0,34.8],[136.88,34.72],[136.85,35.05],
    [136.62,34.8],[136.72,34.55],[136.9,34.42],[136.8,34.25],[136.35,34.15],[136.18,33.98],
    [135.98,33.68],[135.76,33.43],[135.42,33.6],[135.2,33.9],[135.08,34.2],[135.3,34.42],
    [135.43,34.65],[135.2,34.68],[134.95,34.66],[134.65,34.75],[134.25,34.66],[133.9,34.52],
    [133.4,34.42],[133.0,34.3],[132.6,34.3],[132.3,34.15],[131.98,34.0],[131.6,33.98],
    [131.25,33.92],[130.92,33.92],
    // Chugoku, cote mer du Japon, vers l'est
    [130.92,34.18],[131.1,34.38],[131.42,34.45],[131.72,34.62],[132.05,34.85],[132.4,35.15],
    [132.62,35.42],[132.85,35.55],[133.08,35.6],[133.3,35.52],[133.65,35.5],[134.2,35.55],
    [134.72,35.65],[135.08,35.75],[135.25,35.78],[135.38,35.55],[135.62,35.52],[135.95,35.65],
    [136.05,35.8],[136.12,36.12],[136.35,36.4],[136.62,36.68],
    // peninsule de Noto
    [136.72,36.98],[136.72,37.2],[136.85,37.38],[137.1,37.45],[137.35,37.52],[137.25,37.35],
    [137.05,37.18],[136.95,36.95],[137.05,36.78],
    // baie de Toyama, Niigata, cote ouest du Tohoku
    [137.3,36.78],[137.62,36.95],[137.9,37.05],[138.25,37.18],[138.6,37.42],[138.9,37.78],
    [139.2,38.02],[139.45,38.35],[139.62,38.72],[139.82,38.98],[139.98,39.32],[140.0,39.62],
    [139.72,39.88],[139.72,40.0],[139.98,39.9],[140.02,40.25],[139.92,40.55],[140.08,40.72],
    [140.25,40.88],[140.34,41.18],[140.5,41.18],[140.68,40.9],[140.78,40.84],[140.88,41.0],
    [141.15,40.95],[141.18,41.25],[140.95,41.2],[140.78,41.12],[140.75,41.38]
  ];

  const SHIKOKU = [
    [132.02,33.34],[132.4,33.48],[132.7,33.85],[133.0,34.07],[133.3,33.96],[133.62,34.12],
    [134.05,34.33],[134.4,34.22],[134.62,34.18],[134.6,33.98],[134.75,33.82],[134.45,33.55],
    [134.18,33.25],[133.95,33.48],[133.55,33.5],[133.2,33.35],[133.0,33.02],[132.98,32.72],
    [132.72,32.85],[132.55,33.15],[132.38,33.3]
  ];

  const KYUSHU = [
    [130.95,33.95],[131.05,33.72],[131.4,33.62],[131.68,33.58],[131.72,33.42],[131.6,33.25],
    [131.9,33.18],[131.92,32.9],[131.72,32.6],[131.55,32.25],[131.45,31.9],[131.4,31.58],
    [131.32,31.36],[131.05,31.25],[130.75,31.0],[130.68,31.2],[130.78,31.55],[130.6,31.6],
    [130.62,31.35],[130.62,31.18],[130.3,31.25],[130.2,31.5],[130.22,31.85],[130.18,32.08],
    [130.4,32.28],[130.6,32.5],[130.58,32.82],[130.45,33.0],[130.3,33.15],[130.18,33.0],
    [130.35,32.82],[130.3,32.6],[130.12,32.72],[129.95,32.72],[129.8,32.56],[129.75,32.82],
    [129.68,33.1],[129.58,33.32],[129.95,33.47],[130.35,33.62],[130.6,33.88]
  ];

  const SADO = [[138.28,38.36],[138.56,38.32],[138.5,38.1],[138.6,37.93],[138.3,37.78],[138.18,37.9],[138.32,38.05],[138.2,38.2]];
  const AWAJI = [[134.97,34.62],[135.02,34.52],[134.88,34.28],[134.7,34.2],[134.78,34.4]];
  const iles = [HOKKAIDO, HONSHU, SHIKOKU, KYUSHU, SADO, AWAJI];

  // trace lisse : courbes passant par les milieux des segments
  function contour(p) {
    const n = p.length;
    ctx.moveTo((px(p[n - 1][0]) + px(p[0][0])) * 0.5, (py(p[n - 1][1]) + py(p[0][1])) * 0.5);
    for (let i = 0; i < n; i++) {
      const a = p[i], b = p[(i + 1) % n];
      ctx.quadraticCurveTo(px(a[0]), py(a[1]), (px(a[0]) + px(b[0])) * 0.5, (py(a[1]) + py(b[1])) * 0.5);
    }
    ctx.closePath();
  }
  function ligne(p) {
    ctx.moveTo(px(p[0][0]), py(p[0][1]));
    for (let i = 1; i < p.length - 1; i++) {
      const a = p[i], b = p[i + 1];
      ctx.quadraticCurveTo(px(a[0]), py(a[1]), (px(a[0]) + px(b[0])) * 0.5, (py(a[1]) + py(b[1])) * 0.5);
    }
    const z = p[p.length - 1];
    ctx.lineTo(px(z[0]), py(z[1]));
  }

  // terre : vert plus frais au nord, plus chaud au sud
  const deg = ctx.createLinearGradient(r * 0.6, -r * 1.3, -r * 0.9, r * 1.25);
  deg.addColorStop(0, vif ? "#8FCB86" : "#7DB874");
  deg.addColorStop(0.5, vif ? "#79C06A" : "#68AC5B");
  deg.addColorStop(1, vif ? "#9BC45E" : "#88B150");

  ctx.save();
  ctx.lineJoin = "round";
  ctx.beginPath();
  for (let k = 0; k < iles.length; k++) contour(iles[k]);
  ctx.fillStyle = deg;
  ctx.fill();
  ctx.lineWidth = Math.max(1, lw);
  ctx.strokeStyle = trait;
  ctx.stroke();

  // reliefs : monts Ou, Alpes japonaises, Hidaka, dorsale de Kyushu
  ctx.beginPath();
  ligne([[140.95,40.9],[140.85,40.0],[140.75,39.0],[140.45,38.2],[140.1,37.4],[139.6,36.9]]);
  ligne([[137.75,36.75],[137.65,36.2],[137.9,35.6],[138.1,35.3]]);
  ligne([[142.3,44.3],[142.6,43.6],[142.9,42.9],[143.1,42.3]]);
  ligne([[131.1,33.1],[131.15,32.6],[131.0,32.1],[130.85,31.75]]);
  ctx.strokeStyle = "rgba(46, 92, 44, 0.75)";
  ctx.lineWidth = Math.max(1, r * 0.03);
  ctx.lineCap = "round";
  ctx.stroke();

  // mont Fuji : cone mauve gris, sommet enneige qui scintille doucement
  const fx = px(138.73), fy = py(35.36), h = r * 0.115, l = r * 0.08;
  ctx.beginPath();
  ctx.moveTo(fx - l, fy + h * 0.35);
  ctx.lineTo(fx, fy - h * 0.65);
  ctx.lineTo(fx + l, fy + h * 0.35);
  ctx.closePath();
  ctx.fillStyle = "#6E5A7E";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(fx - l * 0.42, fy - h * 0.23);
  ctx.lineTo(fx, fy - h * 0.65);
  ctx.lineTo(fx + l * 0.42, fy - h * 0.23);
  ctx.lineTo(fx + l * 0.14, fy - h * 0.3);
  ctx.lineTo(fx - l * 0.1, fy - h * 0.2);
  ctx.closePath();
  ctx.globalAlpha = 0.85 + Math.sin(t * 0.0015) * 0.15;
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.restore();
}

/* -------------------------------------------------- nouvelle-zelande */
function dessinerNouvelleZelande(ctx, r, vif, t) {
  const trait = ctx.strokeStyle;
  const epais = ctx.lineWidth;
  // cotes reelles en [longitude, latitude], projection equirectangulaire
  // corrigee par cos(41 deg), centree sur 172.5 E, 40.85 S
  const K = 0.195, CL = Math.cos(41 * Math.PI / 180);
  function P(p) { return [(p[0] - 172.5) * CL * K * r, (-40.85 - p[1]) * K * r]; }
  // agrandit legerement un detail cotier autour de son centre (lisibilite)
  function loupe(pts, cx, cy, f) {
    return pts.map(function (p) { return [cx + (p[0] - cx) * f, cy + (p[1] - cy) * f]; });
  }
  // Taranaki : le demi-cercle du cap Egmont autour du volcan, du sud au nord
  const taranaki = [];
  for (let i = 0; i < 7; i++) {
    const a = (-122 - i * 19.3) * Math.PI / 180;
    taranaki.push([174.62 + 0.86 * Math.cos(a), -39.31 + 0.46 * Math.sin(a)]);
  }

  const nord = [].concat([
    // Northland, cap Reinga puis cote est
    [172.68,-34.43],[173.02,-34.40],[173.25,-34.72],[173.45,-34.83],[173.75,-35.00],
    [174.05,-35.15],[174.33,-35.18],[174.35,-35.45],[174.55,-35.85],[174.45,-36.05],
    [174.65,-36.18],[174.82,-36.30],[174.75,-36.62],[174.85,-36.82],[175.10,-36.93],
    [175.30,-37.12],[175.47,-37.20],[175.55,-37.08],[175.47,-36.78],[175.40,-36.50],
    // Coromandel, baie de l'Abondance
    [175.55,-36.55],[175.72,-36.80],[175.85,-37.00],[175.88,-37.22],[175.98,-37.43],
    [176.17,-37.64],[176.45,-37.75],[176.75,-37.88],[177.00,-37.95],[177.30,-37.98],
    // cap Est, Gisborne, Mahia, baie de Hawke
    [177.65,-37.75],[178.00,-37.55],[178.30,-37.55],[178.55,-37.70],[178.42,-38.05],
    [178.32,-38.40],[178.10,-38.65],[177.92,-38.82],[177.98,-39.08],[177.88,-39.28],
    [177.70,-39.10],[177.42,-39.05],[177.10,-39.20],[176.92,-39.48],[177.12,-39.66],
    // Hawke's Bay, Wairarapa, cap Palliser
    [176.98,-39.92],[176.76,-40.28],[176.55,-40.60],[176.34,-40.90],[176.02,-41.20],
    [175.62,-41.45],[175.30,-41.66],[175.14,-41.46],[174.94,-41.46],
    // Wellington, cote de Kapiti, Manawatu, Whanganui
    [174.80,-41.36],[174.62,-41.30],[174.80,-41.10],[174.96,-40.90],[175.12,-40.68],
    [175.20,-40.42],[175.05,-40.05],[174.85,-39.92],[174.60,-39.83]
  ], taranaki, [
    // bight nord du Taranaki, Waikato, Kaipara, cote ouest de Northland
    [174.52,-38.88],[174.64,-38.68],[174.73,-38.40],[174.80,-38.08],[174.85,-37.80],
    [174.72,-37.42],[174.55,-37.05],[174.42,-36.82],[174.30,-36.55],[174.18,-36.38],
    [173.85,-35.95],[173.55,-35.70],[173.37,-35.52],[173.15,-35.17],[172.95,-34.85],
    [172.80,-34.60],[172.64,-34.50]
  ]);

  const sud = [].concat([
    // Farewell Spit, fleche fine vers l'est, puis Golden Bay
    [172.66,-40.50],[172.85,-40.47],[173.05,-40.49],[173.10,-40.53],[172.92,-40.56],
    [172.74,-40.58],[172.68,-40.70],[172.82,-40.86],[172.96,-40.81],[173.04,-40.78],
    // Abel Tasman, baie de Tasman, Nelson
    [173.07,-40.98],[173.02,-41.13],[173.20,-41.30],[173.34,-41.22],[173.50,-41.12],
    // Marlborough Sounds : D'Urville, Pelorus, cap Jackson, Queen Charlotte, Arapawa
    [173.72,-40.98],[173.84,-40.74],[173.99,-40.82],[173.94,-41.02],[174.08,-40.98],
    [174.34,-40.96],[174.14,-41.14],[174.30,-41.12],[174.42,-41.12],[174.34,-41.26],
    [174.14,-41.33],[174.12,-41.52],[174.30,-41.74],
    // cote de Kaikoura et sa presqu'ile
    [174.12,-41.95],[173.98,-42.12],[173.82,-42.28],[173.78,-42.34],[173.96,-42.44],
    [173.74,-42.51],[173.50,-42.58],[173.28,-42.78],[173.05,-43.03],[172.85,-43.18],[172.74,-43.36],
    [172.72,-43.52]
  ], loupe([
    // presqu'ile de Banks, legerement agrandie
    [172.78,-43.57],[172.92,-43.57],[173.06,-43.62],[173.15,-43.72],[173.13,-43.84],
    [173.00,-43.91],[172.85,-43.91],[172.70,-43.85]
  ], 172.92, -43.73, 1.35), [
    // Canterbury Bight, Timaru, Oamaru, Otago
    [172.42,-43.86],[172.10,-43.99],[171.78,-44.12],[171.45,-44.27],[171.26,-44.42],
    [171.18,-44.68],[171.05,-44.92],[170.96,-45.12],[170.86,-45.38],[170.68,-45.62],
    [170.78,-45.78],[170.55,-45.92],[170.22,-46.06],[169.96,-46.25],[169.84,-46.46],
    // Catlins et cote sud large et plate (Southland)
    [169.55,-46.60],[169.15,-46.66],[168.82,-46.67],[168.40,-46.65],[168.28,-46.56],
    [168.12,-46.46],[167.96,-46.38],[167.70,-46.30],[167.50,-46.24],[167.20,-46.26],
    [166.92,-46.22],[166.58,-46.20],
    // coin carre du Fiordland puis cote ouest
    [166.44,-46.04],[166.42,-45.86],[166.50,-45.70],[166.62,-45.54],[166.80,-45.34],
    [166.98,-45.16],[167.22,-44.98],[167.50,-44.80],[167.82,-44.62],[168.08,-44.38],
    [168.34,-44.04],[168.62,-43.98],[169.00,-43.86],[169.42,-43.66],[169.86,-43.40],
    [170.26,-43.12],[170.62,-42.88],[170.95,-42.70],[171.20,-42.45],[171.33,-42.12],
    [171.45,-41.76],[171.68,-41.62],[171.92,-41.44],[172.10,-41.20],[172.12,-40.95],
    [172.22,-40.76],[172.44,-40.60]
  ]);

  const stewart = loupe([
    [167.55,-46.75],[167.85,-46.70],[168.15,-46.84],[168.20,-46.98],[167.98,-47.20],
    [167.65,-47.27],[167.48,-47.02]
  ], 167.83, -46.98, 1.25);

  // crete des Alpes du Sud, du Fiordland aux Kaikoura
  const alpes = [
    [167.45,-45.55],[167.80,-45.05],[168.35,-44.62],[168.75,-44.35],[169.35,-44.00],
    [170.15,-43.58],[170.80,-43.20],[171.50,-42.90],[172.15,-42.55],[172.80,-42.25],
    [173.45,-42.05]
  ];
  // Catmull-Rom : la courbe passe par chaque point, les peninsules restent
  function ile(pts) {
    const q = pts.map(P), n = q.length;
    ctx.moveTo(q[0][0], q[0][1]);
    for (let i = 0; i < n; i++) {
      const p0 = q[(i - 1 + n) % n], p1 = q[i], p2 = q[(i + 1) % n], p3 = q[(i + 2) % n];
      ctx.bezierCurveTo(
        p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6,
        p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6,
        p2[0], p2[1]);
    }
    ctx.closePath();
  }
  function ligne(pts) {
    const q = pts.map(P);
    ctx.moveTo(q[0][0], q[0][1]);
    for (let i = 1; i < q.length - 1; i++) {
      ctx.quadraticCurveTo(q[i][0], q[i][1], (q[i][0] + q[i + 1][0]) * 0.5, (q[i][1] + q[i + 1][1]) * 0.5);
    }
    ctx.lineTo(q[q.length - 1][0], q[q.length - 1][1]);
  }
  function tache(lon, lat, rx, ry) {
    const c = P([lon, lat]);
    ctx.moveTo(c[0] + rx * r, c[1]);
    ctx.ellipse(c[0], c[1], rx * r, ry * r, 0, 0, Math.PI * 2);
  }

  ctx.save();
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  // terre : vert clair au nord-est, plus sombre vers le Fiordland
  const g = ctx.createLinearGradient(r * 0.6, -r * 1.2, -r * 0.6, r * 1.2);
  g.addColorStop(0, vif ? "#88DD80" : "#74CE74");
  g.addColorStop(0.55, vif ? "#64C26C" : "#54B060");
  g.addColorStop(1, vif ? "#43A05C" : "#38854E");
  ctx.beginPath();
  ile(nord);
  ile(sud);
  ile(stewart);
  ctx.fillStyle = g;
  ctx.fill();
  // contour exterieur principal, meme chemin que le remplissage
  ctx.strokeStyle = trait;
  ctx.lineWidth = epais;
  ctx.stroke();

  // relief interne, a l'interieur des cotes seulement
  ctx.save();
  ctx.clip();
  // Alpes du Sud : bande de relief sombre collee a la cote ouest
  ctx.beginPath();
  ligne(alpes);
  ctx.strokeStyle = "rgba(30,60,38,0.40)";
  ctx.lineWidth = Math.max(2, r * 0.13);
  ctx.stroke();
  ctx.strokeStyle = "rgba(30,60,38,0.28)";
  ctx.lineWidth = Math.max(1.5, r * 0.06);
  ctx.stroke();
  // neiges : fil fin et doux sur la haute chaine
  ctx.beginPath();
  ligne(alpes.slice(1, 9));
  ctx.strokeStyle = "rgba(236,242,246,0.40)";
  ctx.lineWidth = Math.max(0.7, r * 0.016);
  ctx.stroke();
  // plateau volcanique central, plus sombre
  ctx.beginPath();
  tache(175.72, -39.12, 0.10, 0.075);
  ctx.fillStyle = "rgba(40,70,42,0.30)";
  ctx.fill();
  ctx.restore();

  // lac Taupo, bleu profond borde de clair pour rester lisible
  ctx.beginPath();
  tache(175.90, -38.82, 0.042, 0.036);
  ctx.fillStyle = "#3E8FC4";
  ctx.fill();
  ctx.strokeStyle = "rgba(210,236,250,0.55)";
  ctx.lineWidth = Math.max(0.6, r * 0.008);
  ctx.stroke();
  // reflet tres lent sur le lac
  ctx.save();
  ctx.globalAlpha = 0.25 + 0.12 * Math.sin((t || 0) * 0.0006);
  ctx.beginPath();
  tache(175.86, -38.76, 0.018, 0.009);
  ctx.fillStyle = "#E6F4FB";
  ctx.fill();
  ctx.restore();

  // calotte du Taranaki, petite et douce au centre de son demi-cercle
  ctx.save();
  ctx.globalAlpha = 0.55;
  ctx.beginPath();
  tache(174.07, -39.30, 0.016, 0.016);
  ctx.fillStyle = "#EEF3F6";
  ctx.fill();
  ctx.restore();

  ctx.restore();
}

/* ------------------------------------------------------- coelacanthe */
function dessinerCoelacanthe(ctx, r, vif, t) {
  const trait = ctx.strokeStyle;
  const lw = Math.max(1, ctx.lineWidth || 1.2);
  const TAU = Math.PI * 2;
  const ACIER_HAUT = "#4A6E90", ACIER = "#31506F", ACIER_BAS = "#233B56";
  const OMBRE = "#16263A", TACHE = "#DCE7EF";
  // nage lente : les nageoires lobees pagaient en diagonale, la queue ondule
  const rame = Math.sin(t * 0.0011);
  const rame2 = Math.sin(t * 0.0011 + Math.PI);
  const onde = Math.sin(t * 0.0008);

  function h(i) {
    const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
    return s - Math.floor(s);
  }
  function M(x, y) { ctx.moveTo(r * x, r * y); }
  function L(x, y) { ctx.lineTo(r * x, r * y); }
  function Q(a, b, x, y) { ctx.quadraticCurveTo(r * a, r * b, r * x, r * y); }
  function B(a, b, c, d, x, y) { ctx.bezierCurveTo(r * a, r * b, r * c, r * d, r * x, r * y); }
  function peindre(teinte, bord, epais) {
    ctx.fillStyle = teinte;
    ctx.fill();
    ctx.strokeStyle = bord || trait;
    ctx.lineWidth = epais || lw;
    ctx.lineJoin = "round";
    ctx.stroke();
  }
  function rayons(liste, teinte) {
    ctx.beginPath();
    for (let i = 0; i < liste.length; i += 4) { M(liste[i], liste[i + 1]); L(liste[i + 2], liste[i + 3]); }
    ctx.strokeStyle = teinte;
    ctx.lineWidth = Math.max(0.8, r * 0.009);
    ctx.stroke();
  }

  // nageoire lobee : pedoncule charnu couvert d'ecailles, frange de rayons au bout
  function lobe(bx, by, ang, len, wid, teinte, loin, graine) {
    ctx.save();
    ctx.translate(r * bx, r * by);
    ctx.rotate(ang);
    // frange membraneuse
    ctx.beginPath();
    M(len * 0.5, -wid * 0.42);
    Q(len * 0.84, -wid * 0.78, len * 1.0, -wid * 0.2);
    Q(len * 1.05, 0, len * 1.0, wid * 0.2);
    Q(len * 0.84, wid * 0.78, len * 0.5, wid * 0.42);
    ctx.closePath();
    peindre(loin ? "#253D57" : "#3E5F80", loin ? OMBRE : trait, lw * 0.8);
    const rl = [];
    for (let k = 0; k < 5; k++) {
      const a = -0.55 + k * 0.275;
      rl.push(len * 0.6, a * wid * 0.5, len * 0.97, a * wid * 0.95);
    }
    rayons(rl, loin ? "rgba(10,20,34,0.6)" : "rgba(170,196,220,0.45)");
    // lobe charnu
    ctx.beginPath();
    M(0, -wid * 0.5);
    Q(len * 0.32, -wid * 0.72, len * 0.64, -wid * 0.3);
    Q(len * 0.7, 0, len * 0.64, wid * 0.3);
    Q(len * 0.32, wid * 0.72, 0, wid * 0.5);
    ctx.closePath();
    peindre(teinte, loin ? OMBRE : trait, lw);
    if (!loin) {
      // deux rangs d'ecailles et une tache blanche
      ctx.beginPath();
      for (let k = 0; k < 3; k++) {
        const x = len * (0.14 + k * 0.17), y = (k % 2 ? 0.12 : -0.12) * wid;
        ctx.moveTo(r * x + r * wid * 0.2 * Math.cos(2.2), r * y + r * wid * 0.2 * Math.sin(2.2));
        ctx.arc(r * x, r * y, r * wid * 0.2, 2.2, 4.1);
      }
      ctx.strokeStyle = "rgba(14,26,42,0.55)";
      ctx.lineWidth = Math.max(0.8, r * 0.01);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(r * len * (0.3 + h(graine) * 0.15), r * wid * (h(graine + 1) - 0.5) * 0.3,
        r * wid * 0.16, r * wid * 0.1, h(graine + 2) * 3, 0, TAU);
      ctx.fillStyle = TACHE;
      ctx.globalAlpha = 0.75;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
    ctx.restore();
  }

  // contour du corps : front bombe, dos massif, tronc qui file vers la queue
  function corps() {
    ctx.beginPath();
    M(1.46, 0.04);
    B(1.45, -0.14, 1.32, -0.36, 1.02, -0.45);
    B(0.62, -0.58, 0.0, -0.6, -0.46, -0.47);
    Q(-0.7, -0.4, -0.86, -0.3);
    Q(-1.06, -0.16, -1.24, 0.02);
    Q(-1.06, 0.2, -0.86, 0.33);
    Q(-0.62, 0.5, -0.3, 0.6);
    B(0.2, 0.72, 0.82, 0.68, 1.12, 0.46);
    Q(1.36, 0.3, 1.46, 0.04);
    ctx.closePath();
  }

  ctx.save();
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  // --- queue a trois lobes, derriere le corps, qui ondule autour du pedoncule
  ctx.save();
  ctx.translate(-r * 0.86, r * 0.02);
  ctx.rotate(onde * 0.07);
  ctx.translate(r * 0.86, -r * 0.02);
  const ev = onde * 0.04;
  ctx.beginPath();
  M(-0.7, -0.35);
  Q(-0.88, -0.56, -1.07 + ev, -0.84);
  Q(-1.2 + ev, -0.83, -1.25 + ev, -0.62);
  Q(-1.31 + ev, -0.36, -1.3, -0.1);
  L(-1.16, -0.04);
  ctx.closePath();
  M(-0.7, 0.38);
  Q(-0.88, 0.6, -1.07 - ev, 0.88);
  Q(-1.2 - ev, 0.87, -1.25 - ev, 0.66);
  Q(-1.31 - ev, 0.4, -1.3, 0.14);
  L(-1.16, 0.08);
  ctx.closePath();
  peindre(ACIER);
  const rq = [];
  for (let k = 0; k < 6; k++) {
    const s = (k + 0.5) / 6;
    rq.push(-0.76 - s * 0.4, -0.3 + s * 0.24, -1.1 - s * 0.19 + ev, -0.8 + s * 0.66);
    rq.push(-0.76 - s * 0.4, 0.34 - s * 0.24, -1.1 - s * 0.19 - ev, 0.84 - s * 0.66);
  }
  rayons(rq, "rgba(170,196,220,0.4)");
  // taches de la queue
  ctx.beginPath();
  ctx.ellipse(-r * 1.02, -r * 0.46, r * 0.06, r * 0.035, 0.6, 0, TAU);
  M(-0.98, 0.52);
  ctx.ellipse(-r * 1.04, r * 0.52, r * 0.055, r * 0.03, -0.5, 0, TAU);
  ctx.fillStyle = TACHE;
  ctx.globalAlpha = 0.7;
  ctx.fill();
  ctx.globalAlpha = 1;
  // petit lobe central en pinceau, prolongement du tronc
  ctx.beginPath();
  M(-1.18, -0.06);
  Q(-1.31, -0.11, -1.4, -0.08);
  Q(-1.45 + ev, -0.05, -1.44 + ev, 0.03);
  Q(-1.45 + ev, 0.11, -1.4, 0.13);
  Q(-1.31, 0.15, -1.18, 0.1);
  ctx.closePath();
  peindre("#3A5B7C");
  rayons([-1.3, -0.04, -1.42 + ev, -0.02, -1.3, 0.03, -1.44 + ev, 0.03, -1.3, 0.09, -1.42 + ev, 0.09],
    "rgba(190,210,230,0.5)");
  ctx.restore();

  // --- nageoires derriere le corps
  // premiere dorsale en eventail, rayons epineux
  const pli = onde * 0.02;
  ctx.beginPath();
  M(0.44, -0.54);
  Q(0.42, -0.86, 0.24 - pli, -1.07);
  Q(0.06 - pli, -0.98, -0.07, -0.76);
  Q(-0.1, -0.63, -0.05, -0.54);
  ctx.closePath();
  peindre("#3A5A7A");
  const rd = [];
  for (let k = 0; k < 6; k++) {
    const s = k / 5;
    rd.push(0.4 - s * 0.42, -0.56, 0.3 - pli - s * 0.34, -1.02 + s * 0.28 + s * s * 0.02);
  }
  rayons(rd, "rgba(160,190,215,0.5)");
  // deuxieme dorsale et anale, lobees, en miroir
  lobe(-0.4, -0.44, -2.3 + rame * 0.18, 0.56, 0.2, ACIER, false, 11);
  lobe(-0.4, 0.52, 2.3 - rame * 0.18, 0.54, 0.2, ACIER, false, 17);

  // --- corps
  corps();
  const g = ctx.createLinearGradient(0, -r * 0.6, 0, r * 0.7);
  g.addColorStop(0, ACIER_HAUT);
  g.addColorStop(0.45, ACIER);
  g.addColorStop(1, ACIER_BAS);
  ctx.fillStyle = g;
  ctx.fill();

  ctx.save();
  corps();
  ctx.clip();
  // ecailles cosmoides, bord libre tourne vers la queue
  ctx.beginPath();
  const re = r * 0.085;
  for (let row = 0; row < 6; row++) {
    const y = -0.44 + row * 0.19;
    const dec = (row % 2) * 0.1;
    for (let x = 0.76 - dec; x > -1.0; x -= 0.2) {
      const X = r * x, Y = r * y;
      ctx.moveTo(X + re * Math.cos(2.1), Y + re * Math.sin(2.1));
      ctx.arc(X, Y, re, 2.1, 4.18);
    }
  }
  ctx.strokeStyle = "rgba(12,24,40,0.5)";
  ctx.lineWidth = Math.max(0.8, r * 0.011);
  ctx.stroke();
  // reflets clairs au bord des ecailles du dos
  ctx.beginPath();
  for (let x = 0.66; x > -0.8; x -= 0.2) {
    const X = r * x, Y = -r * 0.44;
    ctx.moveTo(X + re * Math.cos(2.4), Y + re * Math.sin(2.4));
    ctx.arc(X, Y, re, 2.4, 3.3);
  }
  ctx.strokeStyle = "rgba(150,185,215,0.35)";
  ctx.stroke();
  // taches blanches irregulieres : deux ellipses melees par tache
  const taches = [[0.55, -0.3], [0.22, -0.1], [0.36, 0.3], [-0.05, -0.36], [-0.2, 0.12],
    [-0.46, -0.2], [-0.55, 0.3], [-0.8, -0.06], [0.05, 0.44], [0.72, 0.1], [-0.98, 0.16]];
  ctx.beginPath();
  for (let i = 0; i < taches.length; i++) {
    const x = taches[i][0], y = taches[i][1];
    const a = 0.07 + h(i + 40) * 0.05, b = 0.035 + h(i + 60) * 0.03, o = h(i + 80) * 3;
    M(x + a, y);
    ctx.ellipse(r * x, r * y, r * a, r * b, o, 0, TAU);
    M(x + a * 0.5 + 0.05, y + 0.03);
    ctx.ellipse(r * (x + 0.04), r * (y + 0.03), r * a * 0.6, r * b * 0.9, o + 1.1, 0, TAU);
  }
  ctx.fillStyle = TACHE;
  ctx.globalAlpha = 0.82;
  ctx.fill();
  ctx.globalAlpha = 1;
  // ligne laterale
  ctx.beginPath();
  M(0.9, -0.2);
  Q(0.1, -0.12, -1.05, 0.02);
  ctx.strokeStyle = "rgba(170,200,225,0.35)";
  ctx.lineWidth = Math.max(0.8, r * 0.014);
  ctx.stroke();
  // ombre du ventre
  ctx.beginPath();
  ctx.ellipse(0, r * 0.66, r * 1.2, r * 0.16, 0, 0, TAU);
  ctx.fillStyle = "rgba(10,20,34,0.4)";
  ctx.fill();
  ctx.restore();

  // tete : plaques du crane, operculum, bouche
  ctx.beginPath();
  M(0.96, -0.44);
  Q(0.78, -0.06, 0.86, 0.46);
  ctx.strokeStyle = OMBRE;
  ctx.lineWidth = Math.max(1, r * 0.028);
  ctx.stroke();
  ctx.beginPath();
  M(0.92, -0.44);
  Q(0.74, -0.06, 0.82, 0.46);
  ctx.strokeStyle = "rgba(150,185,215,0.35)";
  ctx.lineWidth = Math.max(0.8, r * 0.012);
  ctx.stroke();
  ctx.beginPath();
  M(1.45, 0.08);
  Q(1.32, 0.16, 1.14, 0.2);
  M(1.14, 0.2);
  Q(1.0, 0.3, 0.95, 0.44);
  M(1.3, -0.3);
  Q(1.15, -0.26, 1.0, -0.3);
  ctx.strokeStyle = "rgba(12,24,40,0.7)";
  ctx.lineWidth = Math.max(0.8, r * 0.016);
  ctx.stroke();
  // plaques de la joue, marbrure claire
  ctx.beginPath();
  ctx.ellipse(r * 1.18, r * 0.06, r * 0.07, r * 0.035, 0.3, 0, TAU);
  M(1.0, -0.36);
  ctx.ellipse(r * 0.96, -r * 0.36, r * 0.05, r * 0.025, -0.2, 0, TAU);
  ctx.fillStyle = TACHE;
  ctx.globalAlpha = 0.65;
  ctx.fill();
  ctx.globalAlpha = 1;
  // grand oeil : orbite sombre, iris vert-or luisant (la pupille est posee par l'appelant)
  ctx.beginPath();
  ctx.arc(r * 1.1, -r * 0.12, r * 0.13, 0, TAU);
  ctx.fillStyle = OMBRE;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(r * 1.1, -r * 0.12, r * 0.105, 0, TAU);
  const gi = ctx.createRadialGradient(r * 1.08, -r * 0.15, r * 0.01, r * 1.1, -r * 0.12, r * 0.105);
  gi.addColorStop(0, "#E6EFB0");
  gi.addColorStop(0.6, "#A9BE6E");
  gi.addColorStop(1, "#5F7440");
  ctx.fillStyle = gi;
  ctx.fill();

  // contour exterieur
  corps();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.stroke();

  // --- nageoires paires cote proche, par dessus : elles pagaient en opposition
  lobe(0.0, 0.62, 1.86 + rame2 * 0.2, 0.55, 0.19, ACIER, false, 23);
  lobe(0.8, 0.28, 2.0 + rame * 0.24, 0.62, 0.2, "#35567A", false, 29);

  ctx.restore();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
}

/* ----------------------------------------------------------- vanille */
function dessinerVanille(ctx, r, vif, t) {
  const trait = ctx.strokeStyle;
  const lw = Math.max(1, ctx.lineWidth || 1.2);
  const TAU = Math.PI * 2;
  const balance = Math.sin(t * 0.0006) * 0.02;
  const brise = Math.sin(t * 0.0009 + 1.3) * 0.04;

  function M(x, y) { ctx.moveTo(r * x, r * y); }
  function L(x, y) { ctx.lineTo(r * x, r * y); }
  function Q(a, b, x, y) { ctx.quadraticCurveTo(r * a, r * b, r * x, r * y); }
  function B(a, b, c, d, x, y) { ctx.bezierCurveTo(r * a, r * b, r * c, r * d, r * x, r * y); }
  // point et normale le long d'une gousse (courbe quadratique)
  function pt(P, s) {
    const u = 1 - s;
    return [u * u * P[0] + 2 * u * s * P[2] + s * s * P[4], u * u * P[1] + 2 * u * s * P[3] + s * s * P[5]];
  }
  function nrm(P, s) {
    const dx = 2 * (1 - s) * (P[2] - P[0]) + 2 * s * (P[4] - P[2]);
    const dy = 2 * (1 - s) * (P[3] - P[1]) + 2 * s * (P[5] - P[3]);
    const d = Math.hypot(dx, dy) || 1;
    return [-dy / d, dx / d];
  }
  // demi largeur : bout floral arrondi en bas, col fin cote tige en haut
  function demi(s, w) {
    const base = Math.pow(Math.sin(Math.PI * (0.04 + s * 0.92)), 0.42);
    return w * base * (1 - 0.35 * s * s);
  }
  // ligne parallele a l'axe, decalee de k demi-largeurs
  function parallele(P, w, k, s0, s1, n) {
    for (let i = 0; i <= n; i++) {
      const s = s0 + (s1 - s0) * (i / n), p = pt(P, s), m = nrm(P, s), d = demi(s, w) * k;
      if (i === 0) M(p[0] + m[0] * d, p[1] + m[1] * d); else L(p[0] + m[0] * d, p[1] + m[1] * d);
    }
  }
  function gousse(P, w) {
    const N = 13;
    ctx.beginPath();
    parallele(P, w, 1, 0, 1, N);
    for (let i = N; i >= 0; i--) {
      const s = i / N, p = pt(P, s), m = nrm(P, s), d = demi(s, w);
      L(p[0] - m[0] * d, p[1] - m[1] * d);
    }
    ctx.closePath();
    const a = pt(P, 0), b = pt(P, 1), m = nrm(P, 0.5);
    const g = ctx.createLinearGradient(r * (a[0] + m[0] * w), r * (a[1] + m[1] * w), r * (a[0] - m[0] * w), r * (a[1] - m[1] * w));
    g.addColorStop(0, "#4A2E1A");
    g.addColorStop(0.5, "#2C190D");
    g.addColorStop(1, "#1A0E07");
    ctx.fillStyle = g;
    ctx.fill();
    ctx.strokeStyle = "#0E0703";
    ctx.lineWidth = Math.max(1.2, lw * 1.5);
    ctx.lineJoin = "round";
    ctx.stroke();
    ctx.save();
    ctx.globalAlpha = vif ? 1 : 0.5;
    ctx.strokeStyle = trait;
    ctx.lineWidth = vif ? lw : lw * 0.8;
    ctx.stroke();
    ctx.restore();
    // rides dans la longueur
    ctx.beginPath();
    parallele(P, w, 0.35, 0.05, 0.95, 6);
    parallele(P, w, -0.4, 0.08, 0.9, 6);
    ctx.strokeStyle = "rgba(10,5,2,0.75)";
    ctx.lineWidth = Math.max(0.8, r * 0.012);
    ctx.stroke();
    // plis en travers
    ctx.beginPath();
    for (let i = 1; i < 8; i++) {
      const s = i / 8 + 0.03 * Math.sin(i * 7), p = pt(P, s), q = nrm(P, s), d = demi(s, w) * 0.8;
      M(p[0] + q[0] * d, p[1] + q[1] * d);
      L(p[0] + q[0] * d * 0.2 + 0.015, p[1] + q[1] * d * 0.2 + 0.03);
    }
    ctx.strokeStyle = "rgba(12,6,2,0.6)";
    ctx.stroke();
    // luisant : reflet huileux le long d'un flanc
    ctx.beginPath();
    parallele(P, w, 0.62, 0.1, 0.88, 6);
    ctx.strokeStyle = "rgba(176,122,78,0.55)";
    ctx.lineWidth = Math.max(1, r * 0.022);
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.beginPath();
    parallele(P, w, 0.66, 0.3, 0.46, 2);
    ctx.strokeStyle = "rgba(245,212,170,0.6)";
    ctx.lineWidth = Math.max(0.8, r * 0.012);
    ctx.stroke();
    // bout de tige recourbe en crochet
    ctx.beginPath();
    M(b[0], b[1]);
    const n1 = nrm(P, 1);
    Q(b[0] + n1[0] * 0.02 - 0.0, b[1] - 0.05, b[0] + n1[0] * 0.06, b[1] - 0.02);
    ctx.strokeStyle = "#3A2415";
    ctx.lineWidth = Math.max(1, r * 0.03);
    ctx.stroke();
    // cicatrice florale au bout du bas
    ctx.beginPath();
    ctx.arc(r * a[0], r * a[1], r * w * 0.35, 0, TAU);
    ctx.fillStyle = "#130A05";
    ctx.fill();
  }

  ctx.save();
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.translate(0, r * 1.2);
  ctx.rotate(balance);
  ctx.translate(0, -r * 1.2);

  // --- feuille charnue, derriere, en bas a droite
  ctx.save();
  ctx.translate(r * 0.02, r * 1.08);
  ctx.rotate(-0.62 + brise * 0.3);
  const fl = 1.6, fw = 0.46;
  ctx.beginPath();
  M(0, 0);
  B(fl * 0.22, -fw * 0.62, fl * 0.68, -fw * 0.64, fl, -0.02);
  B(fl * 0.7, fw * 0.5, fl * 0.24, fw * 0.54, 0, 0);
  ctx.closePath();
  const gf = ctx.createLinearGradient(0, -r * fw * 0.5, 0, r * fw * 0.5);
  gf.addColorStop(0, "#7DB85A");
  gf.addColorStop(0.5, "#4F8E3C");
  gf.addColorStop(1, "#2F6428");
  ctx.fillStyle = gf;
  ctx.fill();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
  ctx.stroke();
  // epaisseur de la feuille : liseré sombre sous le bord
  ctx.beginPath();
  M(fl * 0.08, fw * 0.14);
  B(fl * 0.3, fw * 0.46, fl * 0.7, fw * 0.4, fl * 0.97, 0.0);
  ctx.strokeStyle = "#24501E";
  ctx.lineWidth = Math.max(1, r * 0.03);
  ctx.stroke();
  // nervure mediane et reflet cireux
  ctx.beginPath();
  M(0.02, 0);
  Q(fl * 0.5, -fw * 0.08, fl * 0.96, -0.02);
  ctx.strokeStyle = "rgba(190,230,150,0.55)";
  ctx.lineWidth = Math.max(0.8, r * 0.016);
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(r * fl * 0.45, -r * fw * 0.22, r * fl * 0.24, r * fw * 0.07, -0.05, 0, TAU);
  ctx.fillStyle = "rgba(225,250,200,0.22)";
  ctx.fill();
  ctx.restore();

  // --- gousses en botte, liees par un brin
  const A = [-0.78, 1.16, -0.2, 0.12, -1.0, -1.14];
  const Bg = [-0.5, 1.22, -0.44, 0.0, -0.4, -1.24];
  const C = [-0.2, 1.14, -0.52, 0.22, 0.14, -1.12];
  gousse(A, 0.095);
  gousse(Bg, 0.1);
  gousse(C, 0.11);

  // gousse de devant fendue sur sa moitie haute : graines noires luisantes
  ctx.beginPath();
  const s0 = 0.5, s1 = 0.9, n = 7;
  for (let i = 0; i <= n; i++) {
    const s = s0 + (s1 - s0) * i / n, p = pt(C, s), m = nrm(C, s);
    const o = demi(s, 0.11) * 0.82 * Math.sin(Math.PI * i / n);
    if (i === 0) M(p[0], p[1]); else L(p[0] + m[0] * o, p[1] + m[1] * o);
  }
  for (let i = n - 1; i > 0; i--) {
    const s = s0 + (s1 - s0) * i / n, p = pt(C, s), m = nrm(C, s);
    const o = demi(s, 0.11) * 0.82 * Math.sin(Math.PI * i / n);
    L(p[0] - m[0] * o, p[1] - m[1] * o);
  }
  ctx.closePath();
  ctx.fillStyle = "#070403";
  ctx.fill();
  ctx.strokeStyle = "#A87244";
  ctx.lineWidth = Math.max(1, r * 0.02);
  ctx.stroke();
  // grain des graines : pointille luisant dans la fente
  ctx.save();
  ctx.beginPath();
  parallele(C, 0.11, 0.22, 0.55, 0.85, 5);
  parallele(C, 0.11, -0.22, 0.56, 0.84, 5);
  ctx.setLineDash([Math.max(1, r * 0.012), Math.max(1.2, r * 0.022)]);
  ctx.strokeStyle = "rgba(205,175,145,0.8)";
  ctx.lineWidth = Math.max(0.8, r * 0.012);
  ctx.stroke();
  ctx.restore();

  // lien de raphia : deux tours et un noeud avec ses brins libres
  const lien = 0.66;
  const pa = pt(A, lien - 0.14), pc = pt(C, lien - 0.1);
  ctx.beginPath();
  for (let k = 0; k < 2; k++) {
    const dy = k * 0.07;
    M(pa[0] - 0.06, pa[1] + dy + 0.02);
    Q((pa[0] + pc[0]) / 2, (pa[1] + pc[1]) / 2 + dy + 0.07, pc[0] + 0.07, pc[1] + dy - 0.01);
  }
  ctx.strokeStyle = "#8E7040";
  ctx.lineWidth = Math.max(1.5, r * 0.05);
  ctx.stroke();
  ctx.strokeStyle = "#D6B879";
  ctx.lineWidth = Math.max(1, r * 0.03);
  ctx.stroke();
  const kx = pc[0] + 0.07, ky = pc[1] + 0.03;
  ctx.beginPath();
  M(kx, ky);
  Q(kx + 0.12, ky + 0.1 + brise * 0.5, kx + 0.1, ky + 0.3);
  M(kx, ky);
  Q(kx + 0.2, ky - 0.02, kx + 0.3, ky + 0.14 - brise * 0.5);
  ctx.strokeStyle = "#C9A868";
  ctx.lineWidth = Math.max(1, r * 0.025);
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(r * kx, r * ky, r * 0.045, r * 0.035, 0.4, 0, TAU);
  ctx.fillStyle = "#D6B879";
  ctx.fill();
  ctx.strokeStyle = "#8E7040";
  ctx.lineWidth = Math.max(0.8, r * 0.012);
  ctx.stroke();

  // --- fleur de vanille sur un bout de liane, en haut a droite
  ctx.save();
  ctx.translate(r * 1.0, -r * 0.1);
  ctx.rotate(brise);
  ctx.translate(-r * 1.0, r * 0.1);
  // liane et ovaire vert, allonge comme une petite gousse
  ctx.beginPath();
  M(1.46, 0.12);
  Q(1.2, -0.1, 1.06, -0.38);
  ctx.strokeStyle = "#3F7A30";
  ctx.lineWidth = Math.max(1.5, r * 0.05);
  ctx.stroke();
  ctx.beginPath();
  M(1.08, -0.36);
  Q(0.96, -0.52, 0.86, -0.66);
  ctx.strokeStyle = "#7FB04E";
  ctx.lineWidth = Math.max(1.5, r * 0.055);
  ctx.stroke();
  const fx = 0.78, fy = -0.78;
  // cinq tepales etroits, jaune vert pale
  const tep = [[-1.75, 0.46], [-0.45, 0.44], [0.55, 0.4], [-2.85, 0.42], [2.2, 0.36]];
  for (let i = 0; i < tep.length; i++) {
    ctx.save();
    ctx.translate(r * fx, r * fy);
    ctx.rotate(tep[i][0]);
    const Lt = tep[i][1], wt = 0.075;
    ctx.beginPath();
    M(0, 0);
    Q(Lt * 0.45, -wt, Lt, 0);
    Q(Lt * 0.45, wt, 0, 0);
    ctx.closePath();
    const gt = ctx.createLinearGradient(0, 0, r * Lt, 0);
    gt.addColorStop(0, "#E9E7A6");
    gt.addColorStop(1, "#C8D57E");
    ctx.fillStyle = gt;
    ctx.fill();
    ctx.strokeStyle = "#8E9A48";
    ctx.lineWidth = Math.max(0.8, r * 0.012);
    ctx.stroke();
    ctx.beginPath();
    M(0.03, 0);
    L(Lt * 0.85, 0);
    ctx.strokeStyle = "rgba(150,165,80,0.6)";
    ctx.stroke();
    ctx.restore();
  }
  // labelle en trompette, tourne vers le bas a gauche, bord frise
  ctx.save();
  ctx.translate(r * fx, r * fy);
  ctx.rotate(2.25);
  ctx.beginPath();
  M(0, -0.05);
  Q(0.14, -0.07, 0.26, -0.13);
  L(0.26, 0.13);
  Q(0.14, 0.07, 0, 0.05);
  ctx.closePath();
  ctx.fillStyle = "#EFEBB8";
  ctx.fill();
  ctx.strokeStyle = "#A7A55A";
  ctx.lineWidth = Math.max(0.8, r * 0.012);
  ctx.stroke();
  // ouverture frisee
  ctx.beginPath();
  for (let i = 0; i <= 10; i++) {
    const a = (i / 10) * TAU, fr = 1 + (i % 2 ? 0.14 : 0);
    const x = 0.27 + Math.cos(a) * 0.055 * fr, y = Math.sin(a) * 0.14 * fr;
    if (i === 0) M(x, y); else L(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = "#F4F0C4";
  ctx.fill();
  ctx.strokeStyle = "#A7A55A";
  ctx.stroke();
  // gorge jaune d'or et ses stries
  ctx.beginPath();
  ctx.ellipse(r * 0.27, 0, r * 0.032, r * 0.09, 0, 0, TAU);
  ctx.fillStyle = "#E6BE3A";
  ctx.fill();
  ctx.beginPath();
  M(0.08, -0.02); L(0.25, -0.05);
  M(0.08, 0.02); L(0.25, 0.05);
  ctx.strokeStyle = "rgba(210,160,40,0.8)";
  ctx.lineWidth = Math.max(0.8, r * 0.012);
  ctx.stroke();
  ctx.restore();
  // colonne blanche au coeur
  ctx.beginPath();
  ctx.ellipse(r * fx, r * fy, r * 0.04, r * 0.03, 0.5, 0, TAU);
  ctx.fillStyle = "#F7F5E4";
  ctx.fill();
  ctx.restore();

  ctx.restore();
  ctx.strokeStyle = trait;
  ctx.lineWidth = lw;
}

/* ----------------------------------------------------------------- table */
const SILHOUETTES = {
  "coelacanthe": dessinerCoelacanthe,
  "vanille": dessinerVanille,
  "corbeau": dessinerCorbeau,
  "poulpe": dessinerPoulpe,
  "elephante": dessinerElephante,
  "axolotl": dessinerAxolotl,
  "tardigrade": dessinerTardigrade,
  "manchot-empereur": dessinerManchot,
  "braise-vampire-commune": dessinerChauveSouris,
  "abeille-domestique-vrille": dessinerAbeille,
  "poulpe-mimetique": dessinerPoulpeMimetique,
  "guepard": dessinerGuepard,
  "durian": dessinerDurian,
  "fruit-baobab": dessinerBaobab,
  "orange-sanguine-sicile": dessinerOrangeSanguine,
  "acai": dessinerAcai,
  "mangoustan": dessinerMangoustan,
  "islande": dessinerIslande,
  "japon": dessinerJapon,
  "nouvelle-zelande": dessinerNouvelleZelande,
};

/* Repli si une entite n'a pas encore sa silhouette : une forme neutre plutot
   qu'un trou dans la scene. */
function silhouetteParDefaut(ctx, r) {
  ctx.beginPath();
  ctx.ellipse(0, r * 0.15, r * 0.82, r, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, -r * 0.78, r * 0.46, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}


ZOO.dessinerSilhouette = function (ctx, id, r, vif, t) {
  (SILHOUETTES[id] || silhouetteParDefaut)(ctx, r, vif, t);
};

/* Ou placer les yeux, en fraction de r. aucun : une carte ou un fruit n'en a pas. */
ZOO.POSITION_YEUX = {
  "coelacanthe": { x: 1.1, y: -0.12, ecart: 0, taille: 0.07, couleur: "#05070A" },
  "vanille": { aucun: true },
  "corbeau": {x: 0.44,y: -0.88,ecart: 0,taille: 0.055,couleur: "#0B0B0F"},
  "poulpe": {x: 0,y: -0.16,ecart: 0.36,taille: 0.075,couleur: "#140E0A"},
  "elephante": {x: 1,y: -0.52,ecart: 0,taille: 0.045,couleur: "#1A1410"},
  "axolotl": {x: 0,y: -0.68,ecart: 0.3,taille: 0.07,couleur: "#1A0E12"},
  "tardigrade": {x: 0.98,y: -0.22,ecart: 0,taille: 0.05,couleur: "#120E0A"},
  "manchot-empereur": {x: 0.22,y: -0.97,ecart: 0,taille: 0.045,couleur: "#0B0908"},
  "braise-vampire-commune": {x: 0,y: -0.47,ecart: 0.11,taille: 0.042,couleur: "#0E0A08"},
  "abeille-domestique-vrille": {x: 0,y: -0.87,ecart: 0.2,taille: 0.095,couleur: "#1A1410"},
  "poulpe-mimetique": {x: 0,y: -0.6,ecart: 0.145,taille: 0.028,couleur: "#140C06"},
  "guepard": {x: 1.235,y: -0.47,ecart: 0,taille: 0.032,couleur: "#D8921F"},
  "durian": { aucun: true },
  "fruit-baobab": { aucun: true },
  "orange-sanguine-sicile": { aucun: true },
  "acai": { aucun: true },
  "mangoustan": { aucun: true },
  "islande": { aucun: true },
  "japon": { aucun: true },
  "nouvelle-zelande": { aucun: true },
};

ZOO.POSITION_YEUX_DEFAUT = { x: 0, y: -0.82, ecart: 0.16, taille: 0.075 };
})();
