/*
  La vie des entites. Chacune suit une petite machine a etats : elle se
  repose, choisit un point autour de sa place, s'y rend, puis se repose.
  La maniere de bouger depend de l'espece. Une entite dont on lit la fiche
  s'arrete et reste tournee vers le visiteur.

  Tout est en fraction de la largeur de la scene pour les positions, et en
  fraction de r pour les petits mouvements du corps.
*/

const COMPORTEMENTS = {
  elephante: { allure: "marche", vitesse: 0.018, rayon: 0.09 },
  guepard: { allure: "marche", vitesse: 0.055, rayon: 0.16, foulee: 2.2 },
  "manchot-empereur": { allure: "dandine", vitesse: 0.012, rayon: 0.08 },
  tardigrade: { allure: "marche", vitesse: 0.006, rayon: 0.05, foulee: 3 },
  corbeau: { allure: "sautille", vitesse: 0.03, rayon: 0.08 },
  axolotl: { allure: "nage", vitesse: 0.012, rayon: 0.08 },
  poulpe: { allure: "derive", vitesse: 0.01, rayon: 0.07 },
  "poulpe-mimetique": { allure: "derive", vitesse: 0.014, rayon: 0.09 },
  "abeille-domestique-vrille": { allure: "vol", vitesse: 0, rayon: 0.07 },
  "braise-vampire-commune": { allure: "voltige", vitesse: 0.02, rayon: 0.07 },
};

function comportement(a) {
  if (COMPORTEMENTS[a.id]) return COMPORTEMENTS[a.id];
  if (a.type === "fruit") return { allure: "balance", vitesse: 0, rayon: 0 };
  if (a.type === "pays") return { allure: "flotte", vitesse: 0, rayon: 0 };
  return { allure: "marche", vitesse: 0.015, rayon: 0.06 };
}

function hasard(graine) {
  let s = graine >>> 0 || 1;
  return () => {
    s ^= s << 13; s ^= s >>> 17; s ^= s << 5;
    return ((s >>> 0) % 100000) / 100000;
  };
}

function graineDe(id) {
  let h = 2166136261;
  for (let i = 0; i < id.length; i++) h = Math.imul(h ^ id.charCodeAt(i), 16777619);
  return h >>> 0;
}

/*
  Cree la vie d'un groupe d'entites deja placees (a.x, a.y en fraction).
  `lent` vaut true si le visiteur a demande moins de mouvement : tout ralentit
  et les sauts s'aplatissent, mais rien ne se fige.
*/
export function creerVie(entites, lent = false) {
  const etats = new Map();
  const allure = lent ? 0.6 : 1;
  for (const a of entites) {
    const c = comportement(a);
    const alea = hasard(graineDe(a.id));
    etats.set(a.id, {
      c, alea,
      x: a.x, base: a.x, cible: a.x,
      dir: alea() < 0.5 ? 1 : -1,
      phase: alea() * 10,
      repos: 800 + alea() * 2500,
      bouge: false,
    });
  }

  function avancer(dt, actifId) {
    const s = (Math.min(dt, 64) / 1000) * allure;
    for (const [id, e] of etats) {
      const { c } = e;
      if (id === actifId || !c.vitesse) { e.bouge = false; continue; }
      if (!e.bouge) {
        e.repos -= s * 1000;
        if (e.repos <= 0) {
          e.cible = e.base + (e.alea() * 2 - 1) * c.rayon;
          e.bouge = Math.abs(e.cible - e.x) > 0.005;
          if (e.bouge) e.dir = e.cible > e.x ? 1 : -1;
          e.repos = 1500 + e.alea() * 3500;
        }
        continue;
      }
      const pas = c.vitesse * s;
      const reste = e.cible - e.x;
      if (Math.abs(reste) <= pas) { e.x = e.cible; e.bouge = false; }
      else e.x += Math.sign(reste) * pas;
      e.phase += pas * 90 * (c.foulee || 1);
    }
  }

  /* La pose du moment : position, sens, et les petits mouvements du corps. */
  function pose(a, t) {
    const e = etats.get(a.id);
    if (!e) return { x: a.x, dy: 0, dyEcran: 0, angle: 0, dir: 1 };
    const { c } = e;
    const tt = t * allure;
    const bouge = e.bouge;
    let dy = 0, angle = 0, dyEcran = 0, x = e.x, dir = e.dir;
    switch (c.allure) {
      case "marche":
        dy = bouge ? -Math.abs(Math.sin(e.phase)) * 0.05 : Math.sin(tt * 0.0016 + e.phase) * 0.02;
        break;
      case "dandine":
        angle = bouge ? Math.sin(e.phase * 1.6) * 0.09 : Math.sin(tt * 0.0012 + e.phase) * 0.02;
        dy = bouge ? -Math.abs(Math.sin(e.phase * 1.6)) * 0.03 : 0;
        break;
      case "sautille":
        dy = bouge ? -Math.abs(Math.sin(e.phase * 1.4)) * (lent ? 0.06 : 0.18) : 0;
        break;
      case "nage":
        dy = Math.sin(tt * 0.0014 + e.phase) * 0.05;
        angle = Math.sin(tt * 0.0014 + e.phase + 1) * 0.04;
        break;
      case "derive":
        dy = Math.sin(tt * 0.0008 + e.phase) * 0.12;
        angle = Math.sin(tt * 0.0006 + e.phase) * 0.05;
        break;
      case "vol": {
        const u = tt * 0.0009 + e.phase;
        x = e.base + Math.sin(u) * c.rayon;
        dyEcran = Math.sin(u * 2) * 0.045 - 0.12;
        dir = Math.cos(u) >= 0 ? 1 : -1;
        break;
      }
      case "voltige":
        dy = Math.sin(tt * 0.003 + e.phase) * 0.1;
        dyEcran = -0.1;
        break;
      case "balance":
        angle = Math.sin(tt * 0.0011 + e.phase) * 0.035;
        break;
      case "flotte":
        dy = Math.sin(tt * 0.0009 + e.phase) * 0.06;
        break;
    }
    return { x, dy, dyEcran, angle, dir };
  }

  return { avancer, pose };
}
