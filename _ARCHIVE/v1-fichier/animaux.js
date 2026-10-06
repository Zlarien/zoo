/*
  Les animaux du zoo. Un fichier, aucune dependance.

  Chaque animal porte : son identite, son histoire en couches, et une liste de
  sujets. Le principe du zoo : plus le visiteur pose de questions precises,
  plus il descend dans les couches. Aucune couche n'est visible d'emblee.

  Les reponses ecrites ici sont le mode HORS LIGNE, gratuit, servi a tout le
  monde. Le mode vocal, lui, coute de l'argent par visiteur : il reste reserve
  a MZ et aux demos qu'il controle. Voir moteur.js, fonction repondre().
*/

(function () {
"use strict";
const ANIMAUX = [
  {
    id: "corbeau",
    mode: "fiction", // parole de personnage, aucun chiffre n'est une affirmation
    nom: "Nox",
    espece: "Corbeau freux",
    couleur: "#2E2557",
    accent: "#B092F0",
    x: 0.22,
    y: 0.58,
    taille: 1.0,
    accroche: "Il vous regarde depuis que vous êtes entré.",
    ouverture:
      "Vous êtes la sixième personne aujourd'hui. Les cinq autres sont passées sans s'arrêter. Vous, vous vous êtes arrêté. Pourquoi ?",
    sujets: [
      {
        id: "identite",
        cles: ["ton nom", "comment tu t appelles", "qui es tu", "qui etes vous", "presente toi"],
        reponse:
          "Nox. C'est le gardien qui m'a nommé, pas mes parents. Les corbeaux ne se donnent pas de noms, on se reconnaît à la voix. Moi je reconnais quatorze voix humaines dans ce zoo, et je sais laquelle apporte la nourriture le mardi.",
        ouvre: ["memoire"],
      },
      {
        id: "memoire",
        requiert: ["identite"],
        cles: ["memoire", "souviens", "reconnais", "visage", "oublie"],
        reponse:
          "Je me souviens des visages. Pas comme une image, comme une dette. Celui qui m'a jeté une pierre il y a trois ans, je le reconnais encore, et mes petits le reconnaîtront aussi sans l'avoir jamais vu. On se transmet les visages à éviter. C'est notre façon d'écrire.",
        ouvre: ["transmission"],
      },
      {
        id: "transmission",
        requiert: ["memoire"],
        cles: ["transmission", "petits", "enfants", "apprendre", "ecrire"],
        reponse:
          "Non, je n'écris pas. Je crie, et le cri porte un sens que les autres apprennent. Un humain m'a expliqué un jour que vous appelez ça de la culture. J'ai trouvé le mot trop grand pour ce que c'est : de la peur, bien rangée.",
        ouvre: [],
      },
      {
        id: "outils",
        cles: ["outil", "intelligent", "resoudre", "test", "caillou"],
        reponse:
          "On m'a mis un tube avec de l'eau et un ver flottant hors d'atteinte. J'ai laissé tomber des cailloux jusqu'à ce que l'eau monte. Les gens ont applaudi. Personne n'a demandé si le ver, lui, trouvait ça malin.",
        ouvre: [],
      },
      {
        id: "captivite",
        cles: ["la cage", "libre", "partir", "enferme", "voler"],
        reponse:
          "La volière est ouverte en haut depuis deux ans. Je le sais, j'ai vérifié. Je reste parce que le mardi il y a de la nourriture, et que dehors il n'y a pas de mardi.",
        ouvre: [],
      },
    ],
  },

  {
    id: "poulpe",
    mode: "fiction", // parole de personnage, aucun chiffre n'est une affirmation
    nom: "Huit",
    espece: "Poulpe commun",
    couleur: "#8438DC",
    accent: "#FF7FB4",
    x: 0.52,
    y: 0.66,
    taille: 1.15,
    accroche: "Trois de ses bras vous suivent. Les cinq autres font autre chose.",
    ouverture:
      "Vous me parlez avec une bouche. Moi je vous réponds avec la peau. Ne le prenez pas mal si je change de couleur pendant que vous parlez, c'est ma façon d'écouter.",
    sujets: [
      {
        id: "identite",
        cles: ["ton nom", "pourquoi huit", "qui es tu", "comment tu t appelles"],
        reponse:
          "Huit, comme mes bras. Le gardien trouve ça drôle. Ce qu'il ignore, c'est que chacun de mes bras a assez de neurones pour décider seul. Quand je dis je, je parle au nom d'une assemblée qui n'est pas toujours d'accord.",
        ouvre: ["bras"],
      },
      {
        id: "bras",
        requiert: ["identite"],
        cles: ["bras", "neurone", "cerveau", "decide", "assemblee"],
        reponse:
          "Deux tiers de mes neurones ne sont pas dans ma tête, ils sont dans mes bras. Un bras coupé continue de chercher à manger pendant une heure. Vous appelez ça un réflexe. Moi j'appelle ça quelqu'un qui n'a pas encore appris la nouvelle.",
        ouvre: ["mort"],
      },
      {
        id: "peau",
        cles: ["couleur", "peau", "camoufl", "change"],
        reponse:
          "Je vois en noir et blanc et je choisis pourtant la bonne couleur. Ma peau lit la lumière sans passer par mes yeux. Un scientifique a mis onze ans à l'admettre. Moi je le fais depuis que je suis né, sans y penser, comme vous respirez.",
        ouvre: [],
      },
      {
        id: "mort",
        requiert: ["bras"],
        cles: ["la mort", "tu meurs", "ta vie", "ton age", "combien de temps"],
        reponse:
          "Je vivrai entre un et deux ans. Quand une femelle pond, elle cesse de manger et veille ses œufs jusqu'à en mourir. Ce n'est pas triste, c'est le calendrier. Ce qui est triste, c'est que nous recommençons à zéro à chaque génération : rien de ce que j'apprends ici ne sera transmis.",
        ouvre: [],
      },
      {
        id: "evasion",
        cles: ["evasion", "sortir", "bocal", "aquarium", "echapper", "nuit"],
        reponse:
          "La nuit, je sors. Le couvercle a un jeu de deux centimètres, ça suffit largement, je n'ai pas d'os. Je vais voir le bassin d'à côté, je mange un crabe, je reviens, je remets le couvercle. Le gardien note chaque matin qu'il manque un crabe. Il soupçonne les mouettes.",
        ouvre: [],
      },
    ],
  },

  {
    id: "elephante",
    mode: "fiction", // parole de personnage, aucun chiffre n'est une affirmation
    nom: "Ada",
    espece: "Éléphante d'Afrique",
    couleur: "#443A7A",
    accent: "#7BE0B8",
    x: 0.8,
    y: 0.54,
    taille: 1.4,
    accroche: "Elle était déjà tournée vers vous avant que vous arriviez.",
    ouverture:
      "Je vous ai entendu marcher bien avant de vous voir. Le sol porte les pas jusqu'à mes pieds. Vous boitez légèrement à droite. Ce n'est pas un reproche, c'est juste que je ne peux pas ne pas l'entendre.",
    sujets: [
      {
        id: "identite",
        cles: ["ton nom", "pourquoi ada", "qui es tu", "comment tu t appelles"],
        reponse:
          "Ada. Un humain m'a donné ce nom en disant que c'était celui de la première personne à avoir écrit un programme. Je ne sais pas ce qu'est un programme. Je sais que ma grand-mère connaissait le chemin de trois points d'eau à deux jours de marche, et qu'elle nous y a menés pendant vingt ans sans se tromper.",
        ouvre: ["grandmere"],
      },
      {
        id: "grandmere",
        requiert: ["identite"],
        cles: ["grandmere", "matriarche", "famille", "troupeau", "memoire"],
        reponse:
          "Chez nous, la plus vieille décide. Pas la plus forte, la plus vieille. Elle porte les cartes que personne n'a dessinées. Quand elle meurt, le troupeau perd des routes, et parfois il ne les retrouve jamais. Nous n'avons pas de livres. Nous avons des vieilles.",
        ouvre: ["deuil"],
      },
      {
        id: "pieds",
        cles: ["tes pieds", "tu entends", "le sol", "vibration", "de loin", "orage"],
        reponse:
          "J'entends avec mes pieds. Un orage à quarante kilomètres arrive dans mes os avant d'arriver dans le ciel. Ici, ce que j'entends surtout, c'est un moteur électrique sous le sol qui ne s'arrête jamais. Personne d'autre ne l'entend. Je ne peux pas dormir à cet endroit.",
        ouvre: [],
      },
      {
        id: "deuil",
        requiert: ["grandmere"],
        cles: ["la mort", "deuil", "les os", "triste"],
        reponse:
          "Nous nous arrêtons devant les os des nôtres. On les touche avec la trompe, longtemps, sans rien faire d'autre. Des chercheurs ont voulu savoir si c'était du deuil ou de la curiosité. Ils ont posé la question aux os.",
        ouvre: [],
      },
      {
        id: "captivite",
        cles: ["le zoo", "captiv", "enclos", "heureuse", "libre", "ennui"],
        reponse:
          "Je marchais cinquante kilomètres par jour. Ici l'enclos en fait quatre cents mètres. J'ai compté. Ce n'est pas de la souffrance, c'est de l'ennui, et l'ennui est une chose que vous avez du mal à prendre au sérieux chez les autres espèces.",
        ouvre: [],
      },
    ],
  },
];

/* Ce que l'animal repond quand il ne comprend pas. Jamais deux fois le meme. */
const ESQUIVES = [
  "Je ne sais pas répondre à ça. Demandez-moi plutôt d'où je viens.",
  "Ça, c'est une question d'humain. Reformulez avec des mots d'animal.",
  "Non. Essayez autrement.",
  "Je pourrais inventer une réponse. Je préfère vous dire que je n'en ai pas.",
];

/* Charge par <script> classique : file:// bloque les modules ES. */
window.ZOO = window.ZOO || {};
window.ZOO.ANIMAUX = ANIMAUX;
window.ZOO.ESQUIVES = ESQUIVES;
})();
