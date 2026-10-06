/*
  Le panneau de dialogue et la degustation, partages par tous les modes.
*/
import { ZOO } from "./zoo.js";
import "./moteur.js";
import "./degustation.js";

const Z = ZOO;
export const etat = Z.nouvelleVisite();

const panneau = document.getElementById("panneau");
const fil = document.getElementById("fil");
const pistes = document.getElementById("pistes");

const pGouter = document.getElementById("pGouter");

export function ouvrir(id) {
  const a = Z.choisirAnimal(etat, id);
  if (!a) return;
  document.getElementById("pNom").textContent = a.nom;
  document.getElementById("pEspece").textContent = a.espece;
  fil.innerHTML = "";
  bulle("animal", a.ouverture);
  proposerPistes();
  pGouter.classList.toggle("visible", !!a.gout);
  panneau.classList.add("ouvert");
  document.getElementById("indice").style.opacity = "0";
  document.getElementById("question").focus();
}

export function fermer() {
  panneau.classList.remove("ouvert");
  etat.animalActif = null;
  document.getElementById("indice").style.opacity = "1";
}
document.getElementById("pFermer").addEventListener("click", fermer);
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if (degEl.classList.contains("ouvert")) degFermer();
  else fermer();
});
pGouter.addEventListener("click", () => {
  if (etat.animalActif) degLancer(etat.animalActif);
});

function bulle(qui, texte) {
  const d = document.createElement("div");
  d.className = "bulle " + qui;
  d.textContent = texte;
  fil.appendChild(d);
  fil.scrollTop = fil.scrollHeight;
}

/* Trois amorces, pour que le visiteur n'ait jamais la page blanche. */
function proposerPistes() {
  pistes.innerHTML = "";
  for (const q of ["Qui es-tu ?", "D'où viens-tu ?", "Tu es bien ici ?"]) {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = q;
    b.addEventListener("click", () => envoyer(q));
    pistes.appendChild(b);
  }
}

async function envoyer(q) {
  if (!q.trim() || !etat.animalActif) return;
  bulle("visiteur", q);
  const r = await Z.repondre(etat, q);
  bulle("animal", r);
}

document.getElementById("form").addEventListener("submit", async e => {
  e.preventDefault();
  const champ = document.getElementById("question");
  const q = champ.value;
  champ.value = "";
  await envoyer(q);
});

/* ----------------------------------------------------------- degustation */
/*
  Aucun axe chiffre n'est jamais ecrit a l'ecran ici : Z.deguster() ne
  renvoie que du texte (sequence, ancres, reactions). Voir degustation.js.
*/
const degEl = document.getElementById("degustation");
const degAvert = document.getElementById("degAvert");
const degPhase = document.getElementById("degPhase");
const degAncres = document.getElementById("degAncres");
const degReactions = document.getElementById("degReactions");
const carnet = document.getElementById("carnet");
const reduitMouvement = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let degMinuteur = null;
let degFinPhases = null;
let degFruitCourant = null;

function carnetLire() {
  try { return new Set(JSON.parse(localStorage.getItem("zoo.gouts") || "[]")); }
  catch (e) { return new Set(); }
}
function carnetNoter(idFruit) {
  let s;
  try {
    s = carnetLire();
    s.add(idFruit);
    localStorage.setItem("zoo.gouts", JSON.stringify([...s]));
  } catch (e) { s = new Set([idFruit]); }
  const total = (Z.ANIMAUX || []).filter(a => a.gout).length;
  carnet.textContent = `${s.size} fruit${s.size > 1 ? "s" : ""} gouté${s.size > 1 ? "s" : ""} sur ${total}`;
  carnet.classList.add("visible");
}

function degReaction(r, delaiMs) {
  const d = document.createElement("div");
  d.className = "deg-reaction";
  d.style.borderColor = r.couleur;
  const qui = document.createElement("div");
  qui.className = "qui";
  qui.style.color = r.couleur;
  qui.textContent = r.nom;
  const quoi = document.createElement("div");
  quoi.className = "quoi";
  quoi.textContent = r.quoi;
  const texte = document.createElement("div");
  texte.className = "texte";
  texte.textContent = r.texte;
  const pourquoi = document.createElement("button");
  pourquoi.type = "button";
  pourquoi.className = "deg-pourquoi";
  pourquoi.textContent = "pourquoi ?";
  const explication = document.createElement("div");
  explication.className = "deg-explication";
  explication.textContent = r.pourquoi;
  pourquoi.addEventListener("click", () => explication.classList.toggle("visible"));
  d.append(qui, quoi, texte, pourquoi, explication);
  degReactions.appendChild(d);
  const montrer = () => d.classList.add("visible");
  if (reduitMouvement) montrer(); else setTimeout(montrer, delaiMs);
}

function degLancer(fruit) {
  const scene = Z.deguster(fruit);
  if (!scene) return;
  clearTimeout(degMinuteur);
  degFruitCourant = fruit;
  degAvert.textContent = scene.avertissement || "";
  degPhase.textContent = "";
  degAncres.innerHTML = "";
  degReactions.innerHTML = "";
  degEl.classList.add("ouvert");
  degEl.setAttribute("aria-hidden", "false");

  const phases = [scene.sequence.odeur, scene.sequence.attaque, scene.sequence.corps, scene.sequence.finale];

  degFinPhases = function () {
    clearTimeout(degMinuteur);
    degPhase.textContent = phases[phases.length - 1];
    for (const texte of scene.ancres) {
      const s = document.createElement("span");
      s.textContent = texte;
      degAncres.appendChild(s);
    }
    degReactions.innerHTML = "";
    scene.reactions.forEach((r, i) => degReaction(r, i * 350));
    carnetNoter(scene.fruit);
    degFinPhases = null;
  };

  if (reduitMouvement) { degFinPhases(); return; }

  let i = 0;
  const etape = () => {
    if (i >= phases.length) return degFinPhases();
    degPhase.textContent = phases[i];
    i++;
    degMinuteur = setTimeout(etape, 2200);
  };
  etape();
}

function degFermer() {
  clearTimeout(degMinuteur);
  degFinPhases = null;
  degEl.classList.remove("ouvert");
  degEl.setAttribute("aria-hidden", "true");
}

document.getElementById("degPasser").addEventListener("click", () => {
  if (degFinPhases) degFinPhases();
});
document.getElementById("degRejouer").addEventListener("click", () => {
  if (degFruitCourant) degLancer(degFruitCourant);
});
document.getElementById("degFermer").addEventListener("click", degFermer);
degEl.addEventListener("click", e => { if (e.target === degEl) degFermer(); });
