import { ZOO } from "./zoo.js";
import "./gouteurs.js";
/*
  La dégustation virtuelle. Aucun axe chiffré n'est affiché nulle part :
  la décision (verdict.json, session 6) est que huit axes sur dix multiplies
  par des dizaines de fruits, ce sont des centaines de nombres qu'aucune
  source ne portera jamais. Ce qui reste suffit à la scène : une séquence en
  quatre phases écrite a la main, des ancres verbales, et trois réactions
  parmi les six goûteurs de gouteurs.js.

  Une entité porte la dégustation dans son champ `gout` :
  { fiction: true, avertissement, sequence: {odeur,attaque,corps,finale},
    ancres: [texte...], reactions: { idGouteur: {texte, pourquoi} } }

  Le tirage des trois goûteurs affichés est déterministe (hash sur l'id du
  fruit et du goûteur) : la même entité montre toujours le même trio. Un
  goût qui changerait a chaque rechargement est exactement le comportement
  d'une ferme a faux avis, et c'est ce que ce fichier refuse de faire.
*/

(function () {
"use strict";

function hashFNV1a(texte) {
  let h = 0x811c9dc5;
  for (let i = 0; i < texte.length; i++) {
    h ^= texte.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/* Les trois goûteurs montrés pour ce fruit, triés par un hash stable sur la
   paire fruit + goûteur. Ne retient que ceux qui ont une réaction écrite. */
function tirage(fruit) {
  const disponibles = (ZOO.GOUTEURS || []).filter(
    g => fruit.gout.reactions && fruit.gout.reactions[g.id]
  );
  return disponibles
    .map(g => ({ g, cle: hashFNV1a(fruit.id + ":" + g.id) }))
    .sort((a, b) => a.cle - b.cle)
    .slice(0, 3)
    .map(x => x.g);
}

/* Construit la scène complete pour un fruit. Renvoie null si le fruit n'a
   pas de bloc gout : le bouton GOUTER ne doit alors pas s'afficher. */
function deguster(fruit) {
  if (!fruit || !fruit.gout) return null;
  const g = fruit.gout;
  const choisis = tirage(fruit);
  const reactions = choisis.map(gouteur => {
    const r = g.reactions[gouteur.id];
    return {
      id: gouteur.id,
      nom: gouteur.nom,
      quoi: gouteur.quoi,
      couleur: gouteur.couleur,
      texte: r.texte,
      pourquoi: r.pourquoi,
    };
  });
  return {
    fruit: fruit.id,
    avertissement: g.avertissement,
    sequence: g.sequence,
    ancres: g.ancres || [],
    reactions,
  };
}

/* Le lien "pourquoi ?" sous une réaction : redonne la meme phrase que
   deguster() a deja calculee, sans rien recalculer, pour rester coherent
   avec ce que le visiteur a sous les yeux. */
function expliquer(fruit, gouteurId) {
  if (!fruit || !fruit.gout || !fruit.gout.reactions) return null;
  const r = fruit.gout.reactions[gouteurId];
  return r ? r.pourquoi : null;
}

ZOO.deguster = deguster;
ZOO.expliquer = expliquer;
})();
