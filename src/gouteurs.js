import { ZOO } from "./zoo.js";
/*
  Les six goûteurs de la dégustation virtuelle.

  Jamais humains, c'est la décision centrale : un poulpe ne peut pas être
  confondu avec un avis client, un prénom français oui. Ce fichier ne
  contient que leur identité, jamais un texte propre a un fruit : les
  réactions vivent dans le champ `gout.reactions` de chaque entité, dans
  degustation.js on ne fait que les choisir et les afficher.
*/

(function () {
"use strict";

/* nox et ada sont les memes personnages que le corbeau et l'elephante du
   zoo (animaux.js) : un visiteur qui les a deja rencontres les retrouve
   ici, meme couleur d'accent. Les quatre autres sont propres a la
   degustation. */
const GOUTEURS = [
  { id: "kesh", nom: "Kesh", quoi: "Poulpe. Goûte avec ses bras.", couleur: "#D63C84" },
  { id: "nox", nom: "Nox", quoi: "Corbeau. Se méfie de tout ce qui brille.", couleur: "#B092F0" },
  { id: "ada", nom: "Ada", quoi: "Éléphante. Sent le fruit avant de le voir.", couleur: "#7BE0B8" },
  { id: "mite", nom: "Mite", quoi: "Roussette frugivore. Ne mange que du sucré depuis toujours.", couleur: "#FF8A5B" },
  { id: "givre", nom: "Givre", quoi: "Renard polaire. N'a jamais rencontré de fruit tropical.", couleur: "#A8D6FF" },
  { id: "le-marche", nom: "Le marché", quoi: "Le marché de Nonthaburi. Goûte par habitude.", couleur: "#E8C05A" },
];

ZOO.GOUTEURS = GOUTEURS;
})();
