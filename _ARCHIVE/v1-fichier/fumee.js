/*
  Test de fumee. `node fumee.js` dans ce dossier.

  Pourquoi ce fichier existe : deux bugs sont passes a travers des tests verts.

  1. Deux fichiers declaraient la meme constante au niveau global. La page
     restait noire. Les tests ne l'ont pas vu parce qu'ils utilisaient
     require(), qui donne une portee PAR FICHIER, alors que des balises
     script classiques partagent UNE SEULE portee globale.
  2. La mecanique de deverrouillage etait inversee : ouvre posait
     l'identifiant de l'enfant pendant que requiert cherchait celui du parent.
     Aucune couche ne s'ouvrait jamais, et rien ne le signalait.

  Ce fichier reproduit donc la semantique du navigateur : il concatene les
  scripts dans UNE seule portee, dans l'ordre exact de index.html, puis il
  exerce le moteur. Il n'a aucune dependance.

  Code de sortie 1 au premier echec.
*/

const fs = require("node:fs");
const path = require("node:path");

const echecs = [];
const ok = [];
function t(nom, condition) {
  (condition ? ok : echecs).push(nom);
}

/* ------------------------------------------------- l'ordre de index.html */
function ordreDeLaPage() {
  const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
  return [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1]);
}

/* Charge tous les scripts dans UNE portee partagee, comme le navigateur. */
function chargerCommeLeNavigateur(fichiers) {
  const faux = { window: {} };
  faux.window.window = faux.window;
  const source = fichiers
    .map(f => "\n/* ===== " + f + " ===== */\n" + fs.readFileSync(path.join(__dirname, f), "utf8"))
    .join("\n");
  new Function("window", "console", source)(faux.window, console);
  return faux.window.ZOO;
}

function visiteSur(ZOO, id) {
  const e = ZOO.nouvelleVisite();
  ZOO.choisirAnimal(e, id);
  return e;
}

(async () => {
  const fichiers = ordreDeLaPage();
  t("index.html declare au moins 4 scripts", fichiers.length >= 4);

  let ZOO;
  try {
    ZOO = chargerCommeLeNavigateur(fichiers);
  } catch (e) {
    /* C'est ici que le bug de la page noire aurait ete attrape. */
    echecs.push("chargement dans une portee partagee : " + e.message);
    return rapport();
  }
  t("chargement sans collision de portee globale", !!ZOO);

  /* --- surface publique attendue */
  for (const cle of ["ANIMAUX", "ESQUIVES", "nouvelleVisite", "choisirAnimal",
                     "repondre", "dessinerSilhouette", "POSITION_YEUX",
                     "TERRAINS", "terrainDe", "entitesDe", "dessinerDecor",
                     "GOUTEURS", "deguster", "expliquer"]) {
    t("ZOO." + cle + " est expose", ZOO[cle] !== undefined);
  }

  const entites = ZOO.ANIMAUX || [];
  t("au moins une entite", entites.length > 0);

  /* --- chaque entite s'ouvre, repond, esquive, et ses couches tiennent */
  for (const a of entites) {
    t(a.id + " s'ouvre", !!ZOO.choisirAnimal(ZOO.nouvelleVisite(), a.id));

    const premier = a.sujets[0];
    const e1 = visiteSur(ZOO, a.id);
    t(a.id + " repond a sa premiere cle",
      (await ZOO.repondre(e1, premier.cles[0])) === premier.reponse);

    const e2 = visiteSur(ZOO, a.id);
    const hs = await ZOO.repondre(e2, "quel est le prix du beurre au kilo");
    t(a.id + " esquive une question hors sujet", ZOO.ESQUIVES.includes(hs));

    for (const s of a.sujets.filter(x => (x.requiert || []).length)) {
      const e3 = visiteSur(ZOO, a.id);
      t(a.id + "/" + s.id + " est verrouille d'emblee",
        (await ZOO.repondre(e3, s.cles[0])) !== s.reponse);

      /* On remonte toute la chaine de prerequis avant de redemander. */
      const e4 = visiteSur(ZOO, a.id);
      /* Un sujet peut avoir PLUSIEURS prerequis, chacun avec les siens.
         Une premiere version ne suivait que requiert[0] et signalait a tort
         un echec sur les sujets a deux parents. */
      const chaine = [];
      const vus = new Set();
      (function remonter(sujet) {
        for (const idParent of sujet.requiert || []) {
          if (vus.has(idParent)) continue;
          vus.add(idParent);
          const parent = a.sujets.find(x => x.id === idParent);
          if (!parent) continue;
          remonter(parent);
          chaine.push(parent);
        }
      })(s);
      for (const p of chaine) await ZOO.repondre(e4, p.cles[0]);
      t(a.id + "/" + s.id + " s'ouvre apres sa chaine",
        (await ZOO.repondre(e4, s.cles[0])) === s.reponse);
    }
  }

  /* --- terrains : aucune entite ne doit etre injoignable */
  const joignables = new Set();
  for (const T of ZOO.TERRAINS) {
    for (const e of ZOO.entitesDe(T.id)) joignables.add(e.id);
  }
  for (const a of entites) {
    t(a.id + " est joignable depuis un terrain", joignables.has(a.id));
  }

  /* --- degustation : sequence complete, reactions stables, zero chiffre */
  const fruitsAvecGout = entites.filter(a => a.gout);
  t("au moins un fruit porte une degustation", fruitsAvecGout.length > 0);
  for (const fruit of fruitsAvecGout) {
    const scene1 = ZOO.deguster(fruit);
    const scene2 = ZOO.deguster(fruit);
    t(fruit.id + " degustation a ses 4 phases",
      !!(scene1 && scene1.sequence.odeur && scene1.sequence.attaque &&
         scene1.sequence.corps && scene1.sequence.finale));
    t(fruit.id + " degustation renvoie 3 reactions",
      scene1.reactions.length === 3);
    t(fruit.id + " degustation est deterministe (memes goûteurs a chaque appel)",
      JSON.stringify(scene1.reactions.map(r => r.id)) ===
      JSON.stringify(scene2.reactions.map(r => r.id)));
    for (const r of scene1.reactions) {
      t(fruit.id + "/" + r.id + " expliquer() correspond a la reaction affichee",
        ZOO.expliquer(fruit, r.id) === r.pourquoi);
    }
    /* Seul le texte reellement affiche compte ici : id, nom et couleur sont
       des identifiants techniques, pas la scene racontee au visiteur. */
    const texteAffiche = [
      scene1.avertissement,
      ...Object.values(scene1.sequence),
      ...scene1.ancres,
      ...scene1.reactions.flatMap(r => [r.texte, r.pourquoi]),
    ].join(" ");
    t(fruit.id + " degustation n'affiche aucun chiffre",
      !/[0-9]/.test(texteAffiche));
  }

  /* --- rendu : rien ne doit lever, meme sans dessin dedie */
  const noop = () => {};
  const ctx = new Proxy({}, {
    get: (o, k) => (k === "createLinearGradient" || k === "createRadialGradient")
      ? () => ({ addColorStop: noop })
      : noop,
    set: () => true,
  });
  for (const a of entites) {
    let leve = null;
    try { ZOO.dessinerSilhouette(ctx, a.id, 40, true, 1234); } catch (e) { leve = e.message; }
    t("silhouette " + a.id + " s'execute", leve === null);
  }
  for (const T of ZOO.TERRAINS) {
    let leve = null;
    try { ZOO.dessinerDecor(ctx, T.id, 1200, 800, 1234); } catch (e) { leve = e.message; }
    t("decor " + T.id + " s'execute", leve === null);
  }

  rapport();
})();

function rapport() {
  console.log("");
  console.log("  TEST DE FUMEE");
  console.log("  " + "-".repeat(56));
  console.log("  reussites  " + ok.length);
  console.log("  echecs     " + echecs.length);
  console.log("");
  if (echecs.length) {
    for (const e of echecs) console.log("    x " + e);
    console.log("");
    process.exit(1);
  }
  console.log("  La page se charge et le moteur repond.");
}
