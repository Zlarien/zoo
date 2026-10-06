/*
  Le routeur du Zoo. Trois modes, un seul canvas :
  - carte  : la carte du monde, ecran d'accueil, on entre dans un pays ;
  - zoo    : les animaux, par terrain ;
  - verger : les fruits, par terrain ;
  plus la scene d'un pays, ou vivent sa fiche, ses animaux et ses fruits.
  L'adresse suit le mode (#/carte, #/zoo/savane, #/pays/ISL) : un lien suffit
  pour montrer un endroit precis.
*/
import { ZOO } from "./zoo.js";
import "./animaux.js";
import "./monde-documentaire.js";
import "./silhouettes.js";
import "./terrains.js";
import { etat, ouvrir, fermer } from "./dialogue.js";
import { creerScene } from "./scene.js";
import { creerCarte, nomDuPays } from "./carte.js";
import { scenePays, decorDuPays, ficheDuPays, statutPays, TERRAINS_ZOO, TERRAINS_VERGER, entitesDuMode } from "./pays.js";

const cv = document.getElementById("scene");
const ctx = cv.getContext("2d");
const sousTitre = document.getElementById("sousTitre");
const indice = document.getElementById("indice");
const accueil = document.getElementById("accueil");
const navigation = document.getElementById("navigation");
const chargement = document.getElementById("chargement");
const chargementTexte = document.getElementById("chargementTexte");
const chargementBarre = document.getElementById("chargementBarre");
const barreTerrains = document.getElementById("terrains");
const retour = document.getElementById("retour");
const toastEl = document.getElementById("toast");

let route = { mode: "accueil" };
let scene = null;
let fondAccueil = null;
let enCours = 0; // jeton : une route plus recente annule un chargement en cours

const carte = creerCarte({
  onEntrer: iso3 => aller(`#/pays/${iso3}`),
  onBientot: nom => toast(`${nom} n'a pas encore sa fiche. Bientôt.`),
});

/* ------------------------------------------------------------- toast */
let toastMinuteur = null;
function toast(texte) {
  toastEl.textContent = texte;
  toastEl.classList.add("visible");
  clearTimeout(toastMinuteur);
  toastMinuteur = setTimeout(() => toastEl.classList.remove("visible"), 2600);
}

/* ------------------------------------------------------------- routes */
function lireRoute() {
  const [mode, arg] = location.hash.replace(/^#\/?/, "").split("/");
  if (mode === "zoo") return { mode, terrain: TERRAINS_ZOO.includes(arg) ? arg : TERRAINS_ZOO[0] };
  if (mode === "verger") return { mode, terrain: TERRAINS_VERGER.includes(arg) ? arg : TERRAINS_VERGER[0] };
  if (mode === "pays" && arg && statutPays(arg) !== "bientot") return { mode, iso3: arg };
  if (mode === "carte") return { mode };
  return { mode: "accueil" };
}

function aller(h) {
  if (location.hash === h) appliquerRoute();
  else location.hash = h;
}

/* Les decors d'une route, peints avant d'arriver pour qu'aucune scene ne gele a l'entree. */
function decorsDe(r) {
  if (r.mode === "zoo") return TERRAINS_ZOO.slice();
  if (r.mode === "verger") return TERRAINS_VERGER.slice();
  if (r.mode === "pays") return [decorDuPays(r.iso3)];
  return [];
}
const prets = new Set();

async function prechauffer(decors, texte, jeton) {
  const w = cv.clientWidth, h = cv.clientHeight;
  const aFaire = decors.filter(d => !prets.has(d + ":" + w + "x" + h));
  if (!aFaire.length) return true;
  chargementTexte.textContent = texte;
  chargementBarre.style.width = "0";
  chargement.hidden = false;
  for (let i = 0; i < aFaire.length; i++) {
    await new Promise(r => requestAnimationFrame(r));
    if (jeton !== enCours) return false;
    ctx.save();
    ZOO.dessinerDecor(ctx, aFaire[i], w, h, performance.now());
    ctx.restore();
    prets.add(aFaire[i] + ":" + w + "x" + h);
    chargementBarre.style.width = Math.round(((i + 1) / aFaire.length) * 100) + "%";
  }
  await new Promise(r => setTimeout(r, 180));
  return jeton === enCours;
}

const TEXTES = { zoo: "Ouverture du Zoo", verger: "Le Verger se prépare", carte: "La carte du monde" };

async function appliquerRoute() {
  const cible = lireRoute();
  const jeton = ++enCours;
  fermer();
  const texte = cible.mode === "pays" ? "Voyage vers " + nomDuPays(cible.iso3) : TEXTES[cible.mode] || "";
  const ok = await prechauffer(decorsDe(cible), texte, jeton);
  if (!ok) return;
  route = cible;
  scene = null;
  if (route.mode === "zoo" || route.mode === "verger") {
    scene = creerScene(entitesDuMode(route.mode, route.terrain), route.terrain);
  } else if (route.mode === "pays") {
    scene = creerScene(scenePays(route.iso3), decorDuPays(route.iso3));
  }
  chargement.hidden = true;
  majInterface();
}

function majInterface() {
  const surAccueil = route.mode === "accueil";
  accueil.hidden = false;
  requestAnimationFrame(() => accueil.classList.toggle("cache", !surAccueil));
  setTimeout(() => { if (route.mode !== "accueil") accueil.hidden = true; }, 480);
  navigation.hidden = surAccueil;
  retour.hidden = route.mode !== "pays";
  document.querySelector(".titre").style.visibility = surAccueil ? "hidden" : "visible";
  indice.style.visibility = surAccueil ? "hidden" : "visible";

  if (surAccueil) {
    sousTitre.textContent = "";
    indice.textContent = "";
  } else if (route.mode === "carte") {
    sousTitre.textContent = "Le monde. Les pays qui brillent vous répondent.";
    indice.textContent = "Cliquez sur un pays qui brille. Glissez et zoomez pour explorer.";
  } else if (route.mode === "pays") {
    const fiche = ficheDuPays(route.iso3);
    sousTitre.textContent = fiche
      ? `${nomDuPays(route.iso3)}. Parlez au pays, et à ceux qui y vivent.`
      : `${nomDuPays(route.iso3)}. La fiche du pays est en préparation, ses habitants vous répondent déjà.`;
    indice.textContent = "Cliquez sur ce qui vit ici.";
  } else {
    sousTitre.textContent = route.mode === "zoo" ? "Le Zoo. Approchez-vous, ils répondent." : "Le Verger. Posez vos questions, puis goûtez.";
    indice.textContent = route.mode === "zoo" ? "Cliquez sur un animal." : "Cliquez sur un fruit.";
  }

  barreTerrains.innerHTML = "";
  barreTerrains.hidden = !(route.mode === "zoo" || route.mode === "verger");
  if (!barreTerrains.hidden) {
    const liste = route.mode === "zoo" ? TERRAINS_ZOO : TERRAINS_VERGER;
    for (const id of liste) {
      const T = ZOO.TERRAINS.find(x => x.id === id);
      const n = entitesDuMode(route.mode, id).length;
      if (!n) continue;
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = `${T.nom} ${n}`;
      const actif = id === route.terrain;
      b.setAttribute("aria-current", actif ? "true" : "false");
      if (actif) { b.style.background = T.accent; b.style.borderColor = T.accent; }
      b.addEventListener("click", () => aller(`#/${route.mode}/${id}`));
      barreTerrains.appendChild(b);
    }
  }
}

for (const b of document.querySelectorAll(".choix")) {
  b.addEventListener("click", () => {
    const m = b.dataset.mode;
    aller(m === "carte" ? "#/carte" : m === "zoo" ? `#/zoo/${TERRAINS_ZOO[0]}` : `#/verger/${TERRAINS_VERGER[0]}`);
  });
}
document.getElementById("btnAccueil").addEventListener("click", () => aller("#/"));
retour.addEventListener("click", () => aller("#/carte"));
window.addEventListener("hashchange", appliquerRoute);

/* --------------------------------------------------------------- rendu */
function taille() {
  const d = window.devicePixelRatio || 1;
  cv.width = cv.clientWidth * d;
  cv.height = cv.clientHeight * d;
  ctx.setTransform(d, 0, 0, d, 0, 0);
}
window.addEventListener("resize", taille);

function boucle(t) {
  const w = cv.clientWidth, h = cv.clientHeight;
  if (route.mode === "accueil") {
    // derriere l'accueil, la savane vit : ses animaux marchent pendant qu'on choisit
    if (!fondAccueil) fondAccueil = creerScene(entitesDuMode("zoo", "savane"), "savane");
    fondAccueil.dessiner(ctx, w, h, t, null);
    dessinerApercus(t);
  } else if (route.mode === "carte") carte.dessiner(ctx, w, h, t);
  else if (scene) scene.dessiner(ctx, w, h, t, etat.animalActif?.id);
  requestAnimationFrame(boucle);
}

/* ------------------------------------------ apercus animes de l'accueil */
const APERCUS = { carte: ["japon", "japon"], zoo: ["guepard", "savane"], verger: ["orange-sanguine-sicile", "vergers"] };
function dessinerApercus(t) {
  for (const c of document.querySelectorAll(".choix-apercu")) {
    const [id, decor] = APERCUS[c.dataset.apercu];
    const d = window.devicePixelRatio || 1;
    const w = c.clientWidth, h = c.clientHeight;
    if (!w || !h) continue;
    if (c.width !== Math.round(w * d)) { c.width = Math.round(w * d); c.height = Math.round(h * d); }
    const g = c.getContext("2d");
    g.setTransform(d, 0, 0, d, 0, 0);
    ZOO.dessinerDecor(g, decor, w, h, t);
    const a = ZOO.ANIMAUX.find(x => x.id === id);
    const r = h * 0.2 * (a.type === "pays" ? 1.5 : 1);
    g.save();
    g.translate(w / 2, h * 0.52 + Math.sin(t * 0.0015) * r * 0.05);
    g.fillStyle = a.couleur; g.strokeStyle = a.accent; g.lineWidth = 1.2; g.lineJoin = "round";
    ZOO.dessinerSilhouette(g, id, r, false, t);
    const oeil = ZOO.POSITION_YEUX[id] || ZOO.POSITION_YEUX_DEFAUT;
    g.fillStyle = oeil.couleur || a.accent;
    for (const cote of oeil.aucun ? [] : oeil.ecart > 0 ? [-1, 1] : [1]) {
      g.beginPath(); g.arc(r * (oeil.x + cote * oeil.ecart), r * oeil.y, r * oeil.taille, 0, Math.PI * 2); g.fill();
    }
    g.restore();
  }
}

/* -------------------------------------------- souris et doigts, ensemble */
const pointeurs = new Map();
let depart = null, glisse = false, pinch = null;
const local = e => { const b = cv.getBoundingClientRect(); return [e.clientX - b.left, e.clientY - b.top]; };
const ecart = () => { const [a, b] = [...pointeurs.values()]; return Math.hypot(a.x - b.x, a.y - b.y); };

cv.addEventListener("pointerdown", e => {
  // la capture peut echouer (pointeur deja relache, stylet) : le geste continue sans elle
  try { cv.setPointerCapture(e.pointerId); } catch (_) {}
  pointeurs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (pointeurs.size === 1) { depart = { x: e.clientX, y: e.clientY }; glisse = false; }
  if (pointeurs.size === 2) { pinch = ecart(); glisse = true; }
});

cv.addEventListener("pointermove", e => {
  const [mx, my] = local(e);
  const w = cv.clientWidth, h = cv.clientHeight;
  const p = pointeurs.get(e.pointerId);
  if (p) {
    const dx = e.clientX - p.x, dy = e.clientY - p.y;
    p.x = e.clientX; p.y = e.clientY;
    if (depart && Math.hypot(e.clientX - depart.x, e.clientY - depart.y) > 6) glisse = true;
    if (route.mode === "carte") {
      if (pointeurs.size === 2 && pinch) {
        const d = ecart();
        carte.zoomer(d / pinch, mx, my, w, h);
        pinch = d;
      } else if (glisse) carte.glisser(dx, dy, w, h);
    }
    return;
  }
  if (e.pointerType !== "mouse") return;
  let touche = false;
  if (route.mode === "carte") touche = carte.survoler(ctx, mx, my);
  else if (scene) {
    const a = scene.sous(mx, my, w, h, performance.now());
    scene.survoler(a?.id ?? null);
    touche = !!a;
  }
  cv.classList.toggle("survol", touche);
});

function lacher(e) {
  if (!pointeurs.has(e.pointerId)) return;
  const [mx, my] = local(e);
  const w = cv.clientWidth, h = cv.clientHeight;
  const seul = pointeurs.size === 1;
  pointeurs.delete(e.pointerId);
  if (pointeurs.size < 2) pinch = null;
  if (!seul || !depart) return;
  const dx = e.clientX - depart.x;
  depart = null;
  if (!glisse) {
    if (route.mode === "carte") carte.cliquer(ctx, mx, my, w, h);
    else if (scene) {
      const a = scene.sous(mx, my, w, h, performance.now());
      if (a) ouvrir(a.id);
    }
    return;
  }
  // balayage horizontal pour changer de terrain, dans le Zoo et le Verger
  if ((route.mode === "zoo" || route.mode === "verger") && Math.abs(dx) > 70) {
    const liste = (route.mode === "zoo" ? TERRAINS_ZOO : TERRAINS_VERGER).filter(id => entitesDuMode(route.mode, id).length);
    const i = liste.indexOf(route.terrain);
    aller(`#/${route.mode}/${liste[(i + (dx < 0 ? 1 : liste.length - 1)) % liste.length]}`);
  }
}
cv.addEventListener("pointerup", lacher);
cv.addEventListener("pointercancel", e => { pointeurs.delete(e.pointerId); pinch = null; depart = null; });

cv.addEventListener("wheel", e => {
  if (route.mode !== "carte") return;
  e.preventDefault();
  const [mx, my] = local(e);
  carte.zoomer(Math.exp(-e.deltaY * 0.0015), mx, my, cv.clientWidth, cv.clientHeight);
}, { passive: false });

document.addEventListener("keydown", e => {
  if (e.key !== "Escape" || etat.animalActif) return;
  if (route.mode === "pays") aller("#/carte");
  else if (route.mode !== "accueil") aller("#/");
});

/* Un point d'entree pour les tests dans le navigateur, en developpement seulement. */
if (import.meta.env && import.meta.env.DEV) {
  window.__zoo = { ZOO, aller, route: () => route, scene: () => scene, ouvrir, etat };
}

taille();
appliquerRoute();
requestAnimationFrame(boucle);
