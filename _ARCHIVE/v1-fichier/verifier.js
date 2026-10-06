/*
  Le validateur du monde. `node verifier.js` dans ce dossier.

  Il tourne AVANT toute publication et AVANT tout ajout de contenu genere.
  C'est lui qui rend une chaine RAG sure : un fait qui entre sans source
  ressort marque, et le rapport casse.

  Il ne modifie rien. Code de sortie 1 si une erreur bloquante est trouvee,
  ce qui permet de le brancher dans un script npm ou un hook plus tard.
*/

const fs = require("node:fs");
const path = require("node:path");

/* Charge les fichiers du zoo dans un faux navigateur, sans dependance. */
function chargerMonde() {
  const faux = { window: {} };
  faux.window.window = faux.window;
  for (const f of ["animaux.js", "monde-documentaire.js", "silhouettes.js"]) {
    const p = path.join(__dirname, f);
    if (!fs.existsSync(p)) continue;
    new Function("window", fs.readFileSync(p, "utf8"))(faux.window);
  }
  return faux.window.ZOO || {};
}

const erreurs = [];
const alertes = [];
const err = (id, m) => erreurs.push(`${id} : ${m}`);
const warn = (id, m) => alertes.push(`${id} : ${m}`);

/* Un chiffre, une unite ou une date sans source est le mode d'echec numero un
   du projet : c'est ce qui a produit 41 faits faux sur le pilote. */
const CHIFFRE = /\d/;
const UNITE = /\b(kg|g|mg|cm|mm|km|m[eè]tres?|degr[ée]s?|pour cent|%|secondes?|minutes?|heures?|jours?|semaines?|mois|ans?|ann[ée]es?|si[èe]cles?)\b/i;
const NOMBRE_LETTRES = /\b(deux|trois|quatre|cinq|six|sept|huit|neuf|dix|onze|douze|treize|quatorze|quinze|seize|vingt|trente|quarante|cinquante|soixante|cent|mille|million|milliard|demi|moiti[ée]|tiers|quart)\b/i;

function estFactuel(texte) {
  return CHIFFRE.test(texte) || UNITE.test(texte) || NOMBRE_LETTRES.test(texte);
}

function verifier(ZOO) {
  const entites = ZOO.ANIMAUX || [];
  if (!entites.length) {
    err("monde", "aucune entite chargee, le monde est vide ou un fichier ne se charge pas");
    return null;
  }

  const vus = new Set();
  let sujetsTotal = 0, sansSource = 0, factuelsSansSource = 0, modesFiction = 0;

  for (const e of entites) {
    const id = e.id || "(sans id)";
    const mode = e.mode || "documentaire";
    if (!["fiction", "documentaire"].includes(mode)) {
      err(id, `mode inconnu : "${mode}", attendu fiction ou documentaire`);
    }
    if (mode === "fiction") modesFiction++;

    if (!e.id) err(id, "id manquant");
    if (vus.has(e.id)) err(id, "id duplique dans le monde");
    vus.add(e.id);

    for (const champ of ["nom", "accroche", "ouverture"]) {
      if (!e[champ]) err(id, `champ ${champ} vide`);
    }
    if (!Array.isArray(e.sujets) || !e.sujets.length) {
      err(id, "aucun sujet");
      continue;
    }

    const idsSujets = new Set(e.sujets.map((s, i) => s.id || `#${i}`));

    e.sujets.forEach((s, i) => {
      const sid = `${id}/${s.id || "#" + i}`;
      sujetsTotal++;

      /* --- cles --- */
      if (!Array.isArray(s.cles) || !s.cles.length) err(sid, "aucune cle");
      for (const cle of s.cles || []) {
        if (cle !== cle.toLowerCase()) err(sid, `cle avec majuscule : "${cle}"`);
        if (/[À-ſ]/.test(cle)) err(sid, `cle accentuee : "${cle}" (le moteur normalise, les cles doivent etre nues)`);
        /* Une cle courte matche des sous-chaines : "os" attrape "chose",
           "toi" attrape "etoile". Confirme sur le pilote du 06/09. */
        if (cle.length <= 3 && !cle.includes(" ")) {
          err(sid, `cle trop courte : "${cle}" matchera des sous-chaines, allonge-la ou ajoute un contexte`);
        }
      }

      /* --- reponse --- */
      if (!s.reponse) err(sid, "reponse vide");
      if ((s.reponse || "").includes("—")) err(sid, "tiret cadratin dans la reponse");

      /* --- couches --- */
      for (const cible of s.ouvre || []) {
        if (!cible.includes(":") && !idsSujets.has(cible)) {
          err(sid, `ouvre vers "${cible}" qui n'existe pas dans cette entite`);
        }
      }
      for (const cible of s.requiert || []) {
        if (!cible.includes(":") && !idsSujets.has(cible)) {
          err(sid, `requiert "${cible}" qui n'existe pas dans cette entite`);
        }
      }

      /* --- sources, le coeur du validateur --- */
      const src = s.sources || (s.source ? [s.source] : []);
      const aSource = src.length > 0 && !src.every(x =>
        typeof x === "string" && /non.?verifie/i.test(x));

      /* En mode documentaire, une source doit etre un objet complet et
         verifiable. Une chaine libre ne prouve rien : c'est exactement par la
         qu'un fait invente passe pour source. */
      if (mode === "documentaire") {
        src.forEach((o, k) => {
          const ref = `${sid} source #${k}`;
          if (typeof o === "string") {
            return err(ref, "source ecrite en texte libre, il faut un objet { type, extrait, ref, url, consulte }");
          }
          if (o.type !== "reference") err(ref, `type "${o.type}" refuse en documentaire, seul "reference" est accepte`);
          if (!o.ref) err(ref, "champ ref vide");
          if (!/^https?:\/\//.test(o.url || "")) err(ref, `url invalide : "${o.url}"`);
          if (!/^\d{4}-\d{2}-\d{2}$/.test(o.consulte || "")) err(ref, `consulte doit etre au format AAAA-MM-JJ, recu "${o.consulte}"`);
          /* Une source tertiaire ne prouve pas un fait, elle mene a la preuve. */
          if (/wikipedia\.org|wikiwand|fandom\./i.test(o.url || "")) {
            err(ref, "source tertiaire citee comme reference, remonte a la source primaire");
          }
          /* L'extrait doit exister mot pour mot dans la reponse, sinon la
             source reste accrochee a une phrase qui a ete reecrite depuis. */
          if (o.extrait && o.extrait !== "*" && !(s.reponse || "").includes(o.extrait)) {
            err(ref, `extrait absent de la reponse : "${String(o.extrait).slice(0, 45)}..."`);
          }
        });
      }
      if (!aSource) {
        sansSource++;
        if (estFactuel(s.reponse || "")) {
          factuelsSansSource++;
          if (mode === "documentaire") {
            err(sid, "contient un chiffre, une unite ou une date SANS source : ne pas publier");
          } else {
            warn(sid, "chiffre non source, tolere car l'entite est en mode fiction");
          }
        }
      }
    });

    /* Les couches promises n'existaient pas sur le pilote : requiert n'etait
       rempli nulle part, ca marchait par coincidence de nommage. */
    const avecRequiert = e.sujets.filter(s => (s.requiert || []).length).length;
    if (!avecRequiert && e.sujets.some(s => (s.ouvre || []).length)) {
      warn(id, "des sujets declarent ouvre mais aucun ne declare requiert : les couches ne sont pas reellement verrouillees");
    }

    /* --- degustation : voir _travail/verdict.json, session 6. Le bloc
       chiffre a ete rejete en bloc : la sequence, les ancres et les
       reactions suffisent, un champ de notation transformerait la scene
       en avis deguise. */
    if (e.gout) {
      const gid = `${id}/gout`;
      if (e.gout.fiction !== true) err(gid, "champ fiction absent ou faux : une degustation doit se declarer inventee");
      if (!e.gout.avertissement) err(gid, "avertissement vide : le visiteur doit lire que la scene est inventee");
      for (const phase of ["odeur", "attaque", "corps", "finale"]) {
        if (!e.gout.sequence || !e.gout.sequence[phase]) err(gid, `phase "${phase}" vide dans sequence`);
      }
      if (!e.gout.reactions || Object.keys(e.gout.reactions).length < 3) {
        err(gid, "moins de 3 reactions ecrites, le tirage de deguster() ne peut pas en montrer 3");
      }
      const INTERDITS = /^(note|score|etoile|moyenne|rating|pouce|axes)$/i;
      (function chercherChampsInterdits(o, chemin) {
        if (!o || typeof o !== "object") return;
        for (const cle of Object.keys(o)) {
          if (INTERDITS.test(cle)) err(gid, `champ interdit "${chemin}${cle}" : une degustation ne note jamais un fruit`);
          chercherChampsInterdits(o[cle], `${chemin}${cle}.`);
        }
      })(e.gout, "");
    }
  }

  return { entites: entites.length, sujetsTotal, sansSource, factuelsSansSource, modesFiction };
}

/* ------------------------------------------------------------------ sortie */
const ZOO = chargerMonde();
const stat = verifier(ZOO) || {};

console.log("");
console.log("  VALIDATEUR DU MONDE");
console.log("  " + "-".repeat(58));
console.log(`  entites               ${stat.entites ?? 0}`);
console.log(`  sujets                ${stat.sujetsTotal ?? 0}`);
console.log(`  sans source           ${stat.sansSource ?? 0}`);
console.log(`  factuels non sources  ${stat.factuelsSansSource ?? 0}   <- bloquant en mode documentaire`);
console.log(`  entites en fiction    ${stat.modesFiction ?? 0}`);
console.log("");

if (alertes.length) {
  console.log(`  ${alertes.length} alerte(s)`);
  for (const a of alertes) console.log("    ~ " + a);
  console.log("");
}
if (erreurs.length) {
  console.log(`  ${erreurs.length} ERREUR(S) BLOQUANTE(S)`);
  for (const e of erreurs) console.log("    x " + e);
  console.log("");
  console.log("  Rien ne se publie tant que cette liste n'est pas vide.");
  process.exit(1);
}
console.log("  Aucune erreur bloquante. Le monde est publiable.");
