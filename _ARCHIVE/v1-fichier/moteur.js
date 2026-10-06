/*
  Le moteur du zoo. Aucune dependance, aucun appel reseau en mode hors ligne.

  Deux modes, un seul code :
  - HORS LIGNE (defaut, gratuit) : les reponses viennent de animaux.js.
    C'est ce que voit un visiteur public. Cout par visiteur : zero.
  - VOCAL (a activer, payant) : la question part vers l'agent vocal de
    En Cours/2-IA/VoiceAgent. Reserve a MZ et aux demos qu'il controle.
    Il n'est PAS branche par defaut, et c'est volontaire : une demo publique
    avec du vocal, c'est une carte bleue ouverte a des inconnus.
*/

(function () {
"use strict";
const { ANIMAUX, ESQUIVES } = window.ZOO;

const VOCAL_ACTIF = false; // ne passer a true que derriere une authentification
const URL_AGENT = "http://localhost:7860/api/predict"; // VoiceAgent en local

/* --------------------------------------------------------------- etat */

function nouvelleVisite() {
  return {
    animalActif: null,
    sujetsOuverts: new Set(),
    historique: [], // { qui: "visiteur" | "animal", texte }
    esquiveSuivante: 0,
  };
}

/* ------------------------------------------------------- comprehension */

/*
  Normalise une question : minuscules, accents retires, ponctuation retiree.
  Sans ca, "Qui es-tu ?" et "qui es tu" ne matchent pas la meme cle.
*/
function normaliser(texte) {
  return texte
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/*
  Compare des MOTS ENTIERS, pas des sous-chaines.

  Avec includes(), la cle "nom" repondait a la question "genome", et "toi" a
  "etoile". Le visiteur posait une question precise et recevait la fiche
  d'identite. On decoupe donc la question en mots et on exige que la cle
  apparaisse comme une suite de mots complets.
*/
function contientMots(question, cle) {
  const mots = question.split(" ");
  const cible = cle.split(" ");
  for (let i = 0; i + cible.length <= mots.length; i++) {
    let bon = true;
    for (let j = 0; j < cible.length; j++) {
      if (mots[i + j] !== cible[j]) { bon = false; break; }
    }
    if (bon) return true;
  }
  return false;
}

/*
  Trouve le sujet le mieux couvert par la question.
  Score = nombre de cles presentes, pondere par la longueur de la cle : une cle
  de deux mots qui matche vaut plus qu'un mot isole. Un sujet verrouille (qui
  attend d'etre ouvert par un autre) ne peut pas etre trouve directement, c'est
  ce qui cree les couches.
*/
function trouverSujet(animal, question, sujetsOuverts) {
  const q = normaliser(question);
  let meilleur = null;
  let meilleurScore = 0;

  for (const sujet of animal.sujets) {
    const verrouille =
      sujet.requiert && !sujet.requiert.every(r => sujetsOuverts.has(r));
    if (verrouille) continue;

    let score = 0;
    for (const cle of sujet.cles) {
      const c = normaliser(cle);
      if (c && contientMots(q, c)) score += c.split(" ").length;
    }
    if (score > meilleurScore) {
      meilleurScore = score;
      meilleur = sujet;
    }
  }
  return meilleurScore > 0 ? meilleur : null;
}

/* ---------------------------------------------------------- interaction */

function choisirAnimal(etat, id) {
  const animal = ANIMAUX.find(a => a.id === id);
  if (!animal) return null;
  etat.animalActif = animal;
  etat.sujetsOuverts = new Set();
  etat.historique = [{ qui: "animal", texte: animal.ouverture }];
  return animal;
}

/*
  Repond a une question. Renvoie une promesse pour que le mode vocal, qui est
  asynchrone, n'oblige pas a reecrire l'appelant le jour ou on l'active.
*/
async function repondre(etat, question) {
  const animal = etat.animalActif;
  if (!animal) return "Approchez-vous d'un animal d'abord.";

  etat.historique.push({ qui: "visiteur", texte: question });

  let texte;
  if (VOCAL_ACTIF) {
    texte = await demanderALAgent(animal, question, etat);
  } else {
    const sujet = trouverSujet(animal, question, etat.sujetsOuverts);
    if (sujet) {
      // Un sujet repondu s'ouvre LUI-MEME : c'est ce que "requiert" interroge.
      // Sans cette ligne, ouvre ajoutait l'enfant et requiert cherchait le
      // parent, donc aucune couche ne se deverrouillait jamais.
      if (sujet.id) etat.sujetsOuverts.add(sujet.id);
      for (const id of sujet.ouvre || []) etat.sujetsOuverts.add(id);
      texte = sujet.reponse;
    } else {
      texte = ESQUIVES[etat.esquiveSuivante % ESQUIVES.length];
      etat.esquiveSuivante++;
    }
  }

  etat.historique.push({ qui: "animal", texte });
  return texte;
}

/*
  Mode vocal. Non branche par defaut.
  Le jour ou on l'active : lancer VoiceAgent en local (python app.py, port 7860)
  et passer VOCAL_ACTIF a true. L'agent a besoin de ses trois cles dans son .env.
  Ne JAMAIS activer ce mode sur une page publique sans plafond de depense.
*/
async function demanderALAgent(animal, question, etat) {
  const contexte = [
    `Tu es ${animal.nom}, un ${animal.espece} dans un zoo.`,
    `Tu reponds a la premiere personne, sans jamais dire que tu es une IA.`,
    `Tu ne sais que ce qu'un ${animal.espece} peut savoir.`,
    `Si tu ignores une reponse, tu le dis, tu n'inventes pas.`,
    `Reponds en trois phrases maximum.`,
  ].join(" ");

  try {
    const r = await fetch(URL_AGENT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: [question, contexte, etat.historique.slice(-6)],
      }),
    });
    if (!r.ok) throw new Error(`agent: ${r.status}`);
    const j = await r.json();
    return j?.data?.[0] ?? ESQUIVES[0];
  } catch (e) {
    // L'agent n'est pas lance ou ne repond pas : on retombe sur le hors ligne
    // plutot que d'afficher une erreur technique a un visiteur.
    console.warn("agent vocal indisponible, repli hors ligne", e);
    const sujet = trouverSujet(animal, question, etat.sujetsOuverts);
    return sujet ? sujet.reponse : ESQUIVES[0];
  }
}

Object.assign(window.ZOO, { nouvelleVisite, choisirAnimal, repondre });
})();
