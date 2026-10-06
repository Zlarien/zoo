/*
  Les silhouettes des animaux, dessinees au canvas 2D.

  Une fonction par espece. Chacune recoit un contexte deja translate sur
  l'animal, un rayon r qui sert d'unite, un booleen vif (survole ou actif) et
  le temps t en millisecondes pour les mouvements lents.

  Regle du fichier : tout se dessine en fraction de r, jamais en pixels. Une
  silhouette doit rester juste a 30 px comme a 300 px.

  Le jour ou le zoo passe en 3D, c'est ce fichier qui disparait. Le moteur,
  les textes et l'interface ne bougent pas.
*/

(function () {
"use strict";
/* Trace un tentacule, du corps vers la pointe. */
function tentacule(ctx, angle, longueur, epaisseur, courbe) {
  const cos = Math.cos(angle), sin = Math.sin(angle);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(
    cos * longueur * 0.5 - sin * courbe,
    sin * longueur * 0.5 + cos * courbe,
    cos * longueur,
    sin * longueur
  );
  ctx.lineWidth = epaisseur;
  ctx.lineCap = "round";
  ctx.stroke();
}

/* --------------------------------------------------------------- corbeau */
function dessinerCorbeau(ctx, r, vif, t) {
  const battement = Math.sin(t * 0.0011) * 0.06;

  // queue en coin, vers l'arriere
  ctx.beginPath();
  ctx.moveTo(-r * 0.55, r * 0.1);
  ctx.lineTo(-r * 1.35, r * 0.55);
  ctx.lineTo(-r * 1.2, r * 0.72);
  ctx.lineTo(-r * 0.45, r * 0.45);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // corps
  ctx.beginPath();
  ctx.ellipse(0, r * 0.18, r * 0.66, r * 0.86, -0.12, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // aile repliee, qui respire
  ctx.save();
  ctx.rotate(battement);
  ctx.beginPath();
  ctx.moveTo(r * 0.1, -r * 0.25);
  ctx.quadraticCurveTo(-r * 0.5, r * 0.25, -r * 0.15, r * 0.85);
  ctx.quadraticCurveTo(r * 0.35, r * 0.35, r * 0.1, -r * 0.25);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // tete
  ctx.beginPath();
  ctx.ellipse(r * 0.12, -r * 0.78, r * 0.44, r * 0.4, 0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // bec, la signature du corbeau
  ctx.beginPath();
  ctx.moveTo(r * 0.48, -r * 0.88);
  ctx.lineTo(r * 1.12, -r * 0.7);
  ctx.lineTo(r * 0.46, -r * 0.6);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // pattes
  ctx.lineWidth = Math.max(1, r * 0.05);
  ctx.beginPath();
  ctx.moveTo(-r * 0.1, r * 0.98);
  ctx.lineTo(-r * 0.14, r * 1.28);
  ctx.moveTo(r * 0.18, r * 0.96);
  ctx.lineTo(r * 0.24, r * 1.28);
  ctx.stroke();
}

/* ---------------------------------------------------------------- poulpe */
function dessinerPoulpe(ctx, r, vif, t) {
  // huit tentacules, chacun a son propre rythme
  for (let i = 0; i < 8; i++) {
    const base = Math.PI * 0.18 + (i / 7) * Math.PI * 0.64;
    const onde = Math.sin(t * 0.0013 + i * 1.7) * 0.22;
    tentacule(
      ctx,
      base + onde,
      r * (1.25 + Math.sin(i * 2.1) * 0.2),
      Math.max(1.2, r * 0.16),
      r * (0.3 + Math.cos(t * 0.0009 + i) * 0.22)
    );
  }

  // manteau, la partie bombee
  ctx.beginPath();
  ctx.moveTo(-r * 0.78, r * 0.2);
  ctx.bezierCurveTo(-r * 0.9, -r * 1.1, r * 0.9, -r * 1.1, r * 0.78, r * 0.2);
  ctx.bezierCurveTo(r * 0.5, r * 0.5, -r * 0.5, r * 0.5, -r * 0.78, r * 0.2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // les deux bosses au-dessus des yeux
  ctx.beginPath();
  ctx.ellipse(-r * 0.3, -r * 0.42, r * 0.24, r * 0.17, -0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(r * 0.3, -r * 0.42, r * 0.24, r * 0.17, 0.3, 0, Math.PI * 2);
  ctx.fill();
}

/* ------------------------------------------------------------- elephante */
function dessinerElephante(ctx, r, vif, t) {
  const trompe = Math.sin(t * 0.0007) * 0.16;

  // corps
  ctx.beginPath();
  ctx.ellipse(-r * 0.1, r * 0.1, r * 0.95, r * 0.78, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // pattes, deux devant deux derriere
  const pattes = [[-r * 0.62, 0.24], [-r * 0.2, 0.22], [r * 0.3, 0.22], [r * 0.66, 0.24]];
  for (const [px, w] of pattes) {
    ctx.beginPath();
    ctx.rect(px - r * w * 0.5, r * 0.6, r * w, r * 0.7);
    ctx.fill();
    ctx.stroke();
  }

  // tete
  ctx.beginPath();
  ctx.ellipse(r * 0.78, -r * 0.35, r * 0.5, r * 0.52, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // oreille, large, qui bat lentement
  ctx.save();
  ctx.translate(r * 0.62, -r * 0.34);
  ctx.rotate(Math.sin(t * 0.0009) * 0.07);
  ctx.beginPath();
  ctx.ellipse(-r * 0.28, 0, r * 0.42, r * 0.55, -0.25, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // trompe, la signature
  ctx.beginPath();
  ctx.moveTo(r * 1.16, -r * 0.32);
  ctx.bezierCurveTo(
    r * 1.5, r * 0.1,
    r * (1.35 + trompe), r * 0.7,
    r * (1.02 + trompe), r * 1.0
  );
  ctx.lineWidth = Math.max(1.5, r * 0.19);
  ctx.lineCap = "round";
  ctx.stroke();

  // defense
  ctx.lineWidth = Math.max(1, r * 0.07);
  ctx.beginPath();
  ctx.moveTo(r * 1.0, -r * 0.1);
  ctx.quadraticCurveTo(r * 1.3, r * 0.2, r * 1.24, r * 0.42);
  ctx.stroke();
}


/* -------------------------------------------------------------- axolotl */
function dessinerAxolotl(ctx, r, vif, t) {
  const onde = Math.sin(t * 0.0012) * 0.07;
  // queue palmee, qui ondule
  ctx.beginPath();
  ctx.moveTo(-r * 0.5, r * 0.1);
  ctx.quadraticCurveTo(-r * 1.2, r * (0.3 + onde), -r * 1.5, r * (0.05 + onde * 2));
  ctx.quadraticCurveTo(-r * 1.15, r * (0.55 + onde), -r * 0.45, r * 0.5);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  // corps allonge
  ctx.beginPath();
  ctx.ellipse(0, r * 0.28, r * 0.72, r * 0.44, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  // pattes fines
  ctx.lineWidth = Math.max(1, r * 0.06);
  ctx.beginPath();
  ctx.moveTo(-r * 0.35, r * 0.62);
  ctx.lineTo(-r * 0.55, r * 0.94);
  ctx.moveTo(r * 0.3, r * 0.62);
  ctx.lineTo(r * 0.5, r * 0.94);
  ctx.stroke();
  // tete large et plate, la signature de l'axolotl
  ctx.beginPath();
  ctx.ellipse(0, -r * 0.42, r * 0.62, r * 0.42, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  // branchies externes : trois panaches de chaque cote
  ctx.lineWidth = Math.max(1.2, r * 0.09);
  ctx.lineCap = "round";
  for (const cote of [-1, 1]) {
    for (let i = 0; i < 3; i++) {
      const a = (-0.55 + i * 0.42) + Math.sin(t * 0.0016 + i * 1.4) * 0.13;
      ctx.beginPath();
      ctx.moveTo(cote * r * 0.5, -r * 0.5);
      ctx.quadraticCurveTo(
        cote * r * (0.95 + i * 0.06), -r * (0.75 + a * 0.35),
        cote * r * (1.18 + i * 0.05), -r * (0.55 + a * 0.5)
      );
      ctx.stroke();
    }
  }
}

/* ------------------------------------------------------------ tardigrade */
function dessinerTardigrade(ctx, r, vif, t) {
  // huit pattes trapues, deux par deux, qui pedalent lentement
  ctx.lineWidth = Math.max(1.4, r * 0.15);
  ctx.lineCap = "round";
  for (let i = 0; i < 4; i++) {
    const px = -r * 0.62 + i * r * 0.4;
    const bat = Math.sin(t * 0.0018 + i * 0.9) * r * 0.1;
    for (const cote of [-1, 1]) {
      ctx.beginPath();
      ctx.moveTo(px, r * 0.35);
      ctx.lineTo(px + cote * r * 0.14 + bat, r * 0.88);
      ctx.stroke();
    }
  }
  // corps en tonneau, segmente
  ctx.beginPath();
  ctx.ellipse(0, r * 0.02, r * 0.86, r * 0.56, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.lineWidth = Math.max(1, r * 0.045);
  for (let i = 1; i < 4; i++) {
    const px = -r * 0.55 + i * r * 0.36;
    ctx.beginPath();
    ctx.moveTo(px, -r * 0.44);
    ctx.quadraticCurveTo(px + r * 0.05, 0, px, r * 0.46);
    ctx.stroke();
  }
  // museau tronque
  ctx.lineWidth = Math.max(1, r * 0.08);
  ctx.beginPath();
  ctx.ellipse(r * 0.86, -r * 0.16, r * 0.24, r * 0.26, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}

/* --------------------------------------------------------------- manchot */
function dessinerManchot(ctx, r, vif, t) {
  const bat = Math.sin(t * 0.001) * 0.09;
  // pieds
  for (const cote of [-1, 1]) {
    ctx.beginPath();
    ctx.ellipse(cote * r * 0.26, r * 1.16, r * 0.24, r * 0.09, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
  // corps dresse, ovale haut
  ctx.beginPath();
  ctx.ellipse(0, r * 0.22, r * 0.6, r * 0.95, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  // nageoires collees au corps
  for (const cote of [-1, 1]) {
    ctx.save();
    ctx.translate(cote * r * 0.52, r * 0.05);
    ctx.rotate(cote * (0.2 + bat));
    ctx.beginPath();
    ctx.ellipse(0, r * 0.3, r * 0.15, r * 0.6, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
  // tete
  ctx.beginPath();
  ctx.ellipse(0, -r * 0.82, r * 0.42, r * 0.4, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  // bec long et fin, legerement courbe vers le bas
  ctx.lineWidth = Math.max(1.2, r * 0.1);
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(r * 0.38, -r * 0.8);
  ctx.quadraticCurveTo(r * 0.85, -r * 0.72, r * 1.0, -r * 0.58);
  ctx.stroke();
}

/* ---------------------------------------------------------- chauve-souris */
function dessinerChauveSouris(ctx, r, vif, t) {
  const bat = Math.sin(t * 0.0022) * 0.22;
  // les deux ailes, membrane festonnee : c'est la silhouette
  for (const cote of [-1, 1]) {
    ctx.save();
    ctx.rotate(cote * bat * 0.35);
    ctx.beginPath();
    ctx.moveTo(cote * r * 0.28, -r * 0.2);
    ctx.quadraticCurveTo(cote * r * 1.5, -r * (0.85 + bat), cote * r * 1.85, -r * 0.05);
    ctx.quadraticCurveTo(cote * r * 1.45, r * 0.12, cote * r * 1.3, r * 0.02);
    ctx.quadraticCurveTo(cote * r * 1.05, r * 0.34, cote * r * 0.92, r * 0.16);
    ctx.quadraticCurveTo(cote * r * 0.66, r * 0.5, cote * r * 0.55, r * 0.28);
    ctx.quadraticCurveTo(cote * r * 0.38, r * 0.42, cote * r * 0.24, r * 0.4);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
  // corps compact
  ctx.beginPath();
  ctx.ellipse(0, r * 0.15, r * 0.32, r * 0.58, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  // tete et grandes oreilles dressees
  ctx.beginPath();
  ctx.ellipse(0, -r * 0.5, r * 0.3, r * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  for (const cote of [-1, 1]) {
    ctx.beginPath();
    ctx.moveTo(cote * r * 0.1, -r * 0.68);
    ctx.quadraticCurveTo(cote * r * 0.34, -r * 1.15, cote * r * 0.05, -r * 0.98);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
}

/* ---------------------------------------------------------------- abeille */
function dessinerAbeille(ctx, r, vif, t) {
  const bat = Math.sin(t * 0.02) * 0.5;
  // ailes translucides, qui vibrent vite
  ctx.save();
  ctx.globalAlpha = 0.35;
  for (const cote of [-1, 1]) {
    ctx.save();
    ctx.translate(cote * r * 0.2, -r * 0.42);
    ctx.rotate(cote * (0.5 + bat * 0.3));
    ctx.beginPath();
    ctx.ellipse(cote * r * 0.42, 0, r * 0.52, r * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
  ctx.restore();
  // abdomen ovale
  ctx.beginPath();
  ctx.ellipse(0, r * 0.3, r * 0.52, r * 0.68, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  // les rayures, en creux
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(0, r * 0.3, r * 0.52, r * 0.68, 0, 0, Math.PI * 2);
  ctx.clip();
  ctx.globalAlpha = 0.3;
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.rect(-r * 0.6, r * (0.02 + i * 0.34), r * 1.2, r * 0.16);
    ctx.fill();
  }
  ctx.restore();
  // thorax et tete
  ctx.beginPath();
  ctx.ellipse(0, -r * 0.38, r * 0.4, r * 0.34, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(0, -r * 0.82, r * 0.3, r * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  // antennes
  ctx.lineWidth = Math.max(1, r * 0.045);
  ctx.lineCap = "round";
  for (const cote of [-1, 1]) {
    ctx.beginPath();
    ctx.moveTo(cote * r * 0.14, -r * 1.02);
    ctx.quadraticCurveTo(cote * r * 0.42, -r * 1.34, cote * r * 0.3, -r * 1.5);
    ctx.stroke();
  }
}

/* -------------------------------------------------------- poulpe mimetique */
function dessinerPoulpeMimetique(ctx, r, vif, t) {
  // huit bras tres etales, presque a plat : c'est ce qui le distingue du
  // poulpe commun, il imite des animaux plats en s'aplatissant.
  for (let i = 0; i < 8; i++) {
    const base = Math.PI * 0.02 + (i / 7) * Math.PI * 0.96;
    const onde = Math.sin(t * 0.0011 + i * 2.1) * 0.3;
    tentacule(
      ctx,
      base + onde,
      r * (1.5 + Math.sin(i * 1.7) * 0.25),
      Math.max(1, r * 0.1),
      r * (0.15 + Math.cos(t * 0.0007 + i * 1.3) * 0.35)
    );
  }
  // manteau bas et pointu
  ctx.beginPath();
  ctx.moveTo(-r * 0.52, r * 0.18);
  ctx.bezierCurveTo(-r * 0.62, -r * 1.25, r * 0.62, -r * 1.25, r * 0.52, r * 0.18);
  ctx.bezierCurveTo(r * 0.32, r * 0.42, -r * 0.32, r * 0.42, -r * 0.52, r * 0.18);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  // les bandes de sa livree d'alerte
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(-r * 0.52, r * 0.18);
  ctx.bezierCurveTo(-r * 0.62, -r * 1.25, r * 0.62, -r * 1.25, r * 0.52, r * 0.18);
  ctx.closePath();
  ctx.clip();
  ctx.globalAlpha = 0.28;
  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.rect(-r * 0.7, -r * (1.0 - i * 0.3), r * 1.4, r * 0.13);
    ctx.fill();
  }
  ctx.restore();
}

/* ------------------------------------------------------------------ table */
const SILHOUETTES = {
  corbeau: dessinerCorbeau,
  poulpe: dessinerPoulpe,
  elephante: dessinerElephante,
  axolotl: dessinerAxolotl,
  tardigrade: dessinerTardigrade,
  "manchot-empereur": dessinerManchot,
  "braise-vampire-commune": dessinerChauveSouris,
  "abeille-domestique-vrille": dessinerAbeille,
  "poulpe-mimetique": dessinerPoulpeMimetique,
  guepard: dessinerGuepard,
};

/* ---------------------------------------------------------------- guepard */
function dessinerGuepard(ctx, r, vif, t) {
  const course = Math.sin(t * 0.0015) * 0.04;

  // queue, basse, qui traine derriere plutot que de remonter
  ctx.lineWidth = Math.max(1.4, r * 0.11);
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(-r * 0.78, r * 0.22);
  ctx.quadraticCurveTo(-r * 1.22, r * (0.4 + course), -r * 1.4, r * 0.2);
  ctx.stroke();

  // corps, long et bas : le guepard court, il ne se pose pas comme les autres
  ctx.beginPath();
  ctx.ellipse(-r * 0.05, r * 0.15, r * 0.85, r * 0.42, 0.05, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // pattes fines, deux devant deux derriere
  const pattes = [-r * 0.55, -r * 0.15, r * 0.35, r * 0.68];
  ctx.lineWidth = Math.max(1.2, r * 0.1);
  for (const px of pattes) {
    ctx.beginPath();
    ctx.moveTo(px, r * 0.35);
    ctx.lineTo(px, r * 0.95);
    ctx.stroke();
  }

  // taches, en transparence sur le corps
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(-r * 0.05, r * 0.15, r * 0.85, r * 0.42, 0.05, 0, Math.PI * 2);
  ctx.clip();
  ctx.globalAlpha = 0.3;
  for (let i = 0; i < 9; i++) {
    const x = -r * 0.68 + (i % 5) * r * 0.35;
    const y = r * (0.02 + Math.floor(i / 5) * 0.3);
    ctx.beginPath();
    ctx.arc(x, y, r * 0.07, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  // tete
  ctx.beginPath();
  ctx.ellipse(r * 0.82, -r * 0.26, r * 0.32, r * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // oreilles, petites et rapprochees, en V au sommet du crane
  for (const cote of [-1, 1]) {
    ctx.beginPath();
    ctx.ellipse(r * 0.78 + cote * r * 0.13, -r * 0.5, r * 0.075, r * 0.095, cote * 0.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  // bandes lacrymales, fines et courtes, du coin de l'oeil vers le museau
  ctx.lineWidth = Math.max(1, r * 0.03);
  ctx.beginPath();
  ctx.moveTo(r * 0.94, -r * 0.26);
  ctx.quadraticCurveTo(r * 1.0, -r * 0.13, r * 0.96, -r * 0.02);
  ctx.moveTo(r * 0.84, -r * 0.28);
  ctx.quadraticCurveTo(r * 0.88, -r * 0.15, r * 0.82, -r * 0.04);
  ctx.stroke();
}

/*
  Repli si une espece n'a pas encore sa silhouette : une forme neutre plutot
  qu'un trou dans la scene.
*/
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

window.ZOO = window.ZOO || {};

window.ZOO.dessinerSilhouette = function (ctx, id, r, vif, t) {
  (SILHOUETTES[id] || silhouetteParDefaut)(ctx, r, vif, t);
};

/* Ou placer les yeux, par espece, en fraction de r. */
window.ZOO.POSITION_YEUX = {
  corbeau: { x: 0.24, y: -0.86, ecart: 0.0, taille: 0.09 },
  poulpe: { x: 0.0, y: -0.42, ecart: 0.3, taille: 0.1 },
  elephante: { x: 0.86, y: -0.46, ecart: 0.0, taille: 0.075 },
  axolotl: { x: 0.0, y: -0.5, ecart: 0.34, taille: 0.085 },
  tardigrade: { x: 0.86, y: -0.2, ecart: 0.0, taille: 0.06 },
  "manchot-empereur": { x: 0.0, y: -0.88, ecart: 0.2, taille: 0.07 },
  "braise-vampire-commune": { x: 0.0, y: -0.54, ecart: 0.14, taille: 0.065 },
  "abeille-domestique-vrille": { x: 0.0, y: -0.86, ecart: 0.16, taille: 0.08 },
  "poulpe-mimetique": { x: 0.0, y: -0.5, ecart: 0.28, taille: 0.085 },
  guepard: { x: 0.9, y: -0.28, ecart: 0.12, taille: 0.06 },
};

window.ZOO.POSITION_YEUX_DEFAUT = { x: 0, y: -0.82, ecart: 0.16, taille: 0.075 };
})();
