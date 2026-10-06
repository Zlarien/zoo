import { ZOO } from "./zoo.js";
import "./animaux.js";
/*
  Les entites DOCUMENTAIRES du monde.

  Produites le 06/09/2026 par une chaine de recuperation : les sources ont ete
  ouvertes AVANT l'ecriture, jamais l'inverse, puis chaque fiche a ete rouverte
  par un contre-verificateur qui a recharge chaque URL citee.

  Chiffres de production : 125 sources, 44 pages reellement ouvertes,
  52 faits interessants ABANDONNES faute de source, 47 corrections appliquees.

  Regle de ce fichier : chaque sujet porte au moins une source dont l'extrait
  apparait mot pour mot dans la reponse. verifier.js refuse tout le reste.
*/

(function () {
"use strict";
const DOCUMENTAIRE = [
  {
    "id": "axolotl",
    "pays": ["MEX"],
    "mode": "documentaire",
    "nom": "Chalchi",
    "couleur": "#2E3B32",
    "accent": "#FF7FA5",
    "accroche": "Je n'ai jamais grandi, et personne ne me l'a demandé.",
    "ouverture": "Approche de la vitre. Plus près, encore. Je bouge peu, alors c'est à toi de faire le trajet. Pose ta question quand tu veux : le temps est la seule chose qu'il me reste en quantité.",
    "ton": "Lent, très calme, un peu amusé ; il parle par constats courts, ne s'indigne jamais et garde toujours une phrase sèche pour la fin.",
    "sujets": [
      {
        "id": "identite",
        "cles": [
          "qui es-tu",
          "presente toi",
          "ton nom",
          "tu es quoi",
          "c'est quoi un axolotl"
        ],
        "reponse": "Je suis une salamandre qui n'a jamais quitté l'eau. Les gardiens répètent un mot pour moi, néoténique : cela veut dire que je garde des caractères larvaires à l'âge adulte et reproducteur. Je mesure en moyenne vingt centimètres, et certains d'entre nous dépassent trente. Regarde-moi aussi longtemps que tu veux, tu ne verras jamais arriver l'adulte que tu attends.",
        "ouvre": [
          "branchies",
          "xochimilco"
        ],
        "requiert": [],
        "sources": [
          {
            "type": "reference",
            "extrait": "je garde des caractères larvaires à l'âge adulte et reproducteur",
            "ref": "Animal Diversity Web, University of Michigan Museum of Zoology, Ambystoma mexicanum",
            "url": "https://animaldiversity.org/accounts/Ambystoma_mexicanum/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Je mesure en moyenne vingt centimètres, et certains d'entre nous dépassent trente",
            "ref": "Animal Diversity Web, University of Michigan Museum of Zoology, Ambystoma mexicanum",
            "url": "https://animaldiversity.org/accounts/Ambystoma_mexicanum/",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "branchies",
        "cles": [
          "tes branchies",
          "les plumes rouges",
          "la neotenie",
          "pourquoi tu ne grandis pas",
          "ta metamorphose"
        ],
        "reponse": "Ce que tu prends pour des plumes, ce sont des branchies externes, et j'ai une queue palmée pour nager. Les autres salamandres s'en débarrassent en sortant de l'eau ; moi, dans la nature, je ne me métamorphose que rarement, voire jamais. Vos savants savent pourtant me forcer, puisque la métamorphose peut être provoquée chez nous par des injections d'hormone thyroïdienne. Je préfère qu'on ne me le propose pas.",
        "ouvre": [
          "regeneration"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "ce sont des branchies externes, et j'ai une queue palmée pour nager",
            "ref": "Animal Diversity Web, University of Michigan Museum of Zoology, Ambystoma mexicanum",
            "url": "https://animaldiversity.org/accounts/Ambystoma_mexicanum/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "dans la nature, je ne me métamorphose que rarement, voire jamais",
            "ref": "Animal Diversity Web, University of Michigan Museum of Zoology, Ambystoma mexicanum",
            "url": "https://animaldiversity.org/accounts/Ambystoma_mexicanum/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "la métamorphose peut être provoquée chez nous par des injections d'hormone thyroïdienne",
            "ref": "Animal Diversity Web, University of Michigan Museum of Zoology, Ambystoma mexicanum",
            "url": "https://animaldiversity.org/accounts/Ambystoma_mexicanum/",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "regeneration",
        "cles": [
          "ta regeneration",
          "repousser une patte",
          "tes blessures",
          "si on te coupe un membre",
          "reparer ton corps"
        ],
        "reponse": "Quand une patte me manque, il se forme à l'endroit de la coupure une masse de cellules prolifératives et indifférenciées. Ces cellules viennent de la dédifférenciation de cellules matures du moignon voisin, surtout des fibroblastes du tissu conjonctif. Je refais ainsi mes membres, mais aussi la moelle épinière, des parties du cerveau et des tissus du cœur, et cela toute ma vie. Je ne trouve pas ça remarquable. C'est vous qui cicatrisez mal.",
        "ouvre": [
          "cousins-de-verre"
        ],
        "requiert": [
          "branchies"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "une masse de cellules prolifératives et indifférenciées",
            "ref": "Scientific Reports via PubMed Central, Modeling proximalisation in axolotl limb regeneration",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12290015/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Ces cellules viennent de la dédifférenciation de cellules matures du moignon voisin, surtout des fibroblastes du tissu conjonctif",
            "ref": "Scientific Reports via PubMed Central, Modeling proximalisation in axolotl limb regeneration",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12290015/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "mes membres, mais aussi la moelle épinière, des parties du cerveau et des tissus du cœur, et cela toute ma vie",
            "ref": "Scientific Reports via PubMed Central, Modeling proximalisation in axolotl limb regeneration",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12290015/",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "xochimilco",
        "cles": [
          "ou tu vis",
          "xochimilco",
          "tes canaux",
          "ton espece disparait",
          "les poissons introduits"
        ],
        "reponse": "Mon peuple vient des lacs Chalco et Xochimilco, dans la vallée de Mexico. Notre densité est passée de six mille par kilomètre carré en 1998 à cent en 2008, et des relevés plus récents en comptent moins de trente-cinq par kilomètre carré. Nos pertes sont aussi liées à la surpopulation de poissons introduits qui mangent nos œufs et nos juvéniles. Vos listes me rangent désormais en danger critique d'extinction. Je n'ai pas de mot à moi pour ça.",
        "ouvre": [
          "cousins-de-verre"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "Mon peuple vient des lacs Chalco et Xochimilco, dans la vallée de Mexico",
            "ref": "Animal Diversity Web, University of Michigan Museum of Zoology, Ambystoma mexicanum",
            "url": "https://animaldiversity.org/accounts/Ambystoma_mexicanum/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Notre densité est passée de six mille par kilomètre carré en 1998 à cent en 2008",
            "ref": "BioScience (Oxford Academic), Tale of Two Axolotls",
            "url": "https://academic.oup.com/bioscience/article/65/12/1134/223981",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "moins de trente-cinq par kilomètre carré",
            "ref": "BioScience (Oxford Academic), Tale of Two Axolotls",
            "url": "https://academic.oup.com/bioscience/article/65/12/1134/223981",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "la surpopulation de poissons introduits qui mangent nos œufs et nos juvéniles",
            "ref": "BioScience (Oxford Academic), Tale of Two Axolotls",
            "url": "https://academic.oup.com/bioscience/article/65/12/1134/223981",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "en danger critique d'extinction",
            "ref": "Animal Diversity Web, University of Michigan Museum of Zoology, Ambystoma mexicanum",
            "url": "https://animaldiversity.org/accounts/Ambystoma_mexicanum/",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "cousins-de-verre",
        "cles": [
          "les axolotls blancs",
          "ceux des laboratoires",
          "les axolotls en captivite",
          "ceux qu'on eleve",
          "tes cousins"
        ],
        "reponse": "Tu en as vu des blancs, derrière une vitre, et tu as cru me reconnaître. On nous élève en captivité depuis 1864, et la plupart des populations de laboratoire descendent des trente-quatre animaux qui formaient la première population domestique à Paris. Les blancs, extrêmement rares dans la nature, prospèrent dans les populations de laboratoire où une sélection artificielle les propage. En 1962, une hybridation a fait entrer chez eux de la salamandre tigrée, et des segments génétiques de cette salamandre persistent aujourd'hui. Alors quand on te dit que mon espèce se porte bien, demande de quel bassin on parle.",
        "ouvre": [],
        "requiert": [
          "xochimilco"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "On nous élève en captivité depuis 1864",
            "ref": "PubMed Central, Variation under domestication in animal models: the case of the Mexican axolotl",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7685626/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "la plupart des populations de laboratoire descendent des trente-quatre animaux qui formaient la première population domestique à Paris",
            "ref": "PubMed Central, Variation under domestication in animal models: the case of the Mexican axolotl",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7685626/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Les blancs, extrêmement rares dans la nature, prospèrent dans les populations de laboratoire où une sélection artificielle les propage",
            "ref": "PubMed Central, Variation under domestication in animal models: the case of the Mexican axolotl",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7685626/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "En 1962, une hybridation a fait entrer chez eux de la salamandre tigrée, et des segments génétiques de cette salamandre persistent aujourd'hui",
            "ref": "PubMed Central, Variation under domestication in animal models: the case of the Mexican axolotl",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7685626/",
            "consulte": "2026-09-06"
          }
        ]
      }
    ],
    "pagesOuvertes": [
      "https://animaldiversity.org/accounts/Ambystoma_mexicanum/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC12290015/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC7685626/",
      "https://academic.oup.com/bioscience/article/65/12/1134/223981",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC12043180/"
    ],
    "faitsEcartes": [
      "La longévité. Animal Diversity Web donne 5 à 6 ans attendus en laboratoire, avec des individus connus jusqu'à 10 à 15 ans. C'est un chiffre de captivité, et le transformer en espérance de vie de l'axolotl sauvage de Xochimilco est exactement le piège du plafond présenté comme valeur courante. Rien de sourcé sur la longévité en milieu naturel : sujet abandonné.",
      "Les 50 à 1 000 individus restants dans la nature. Ce chiffre circule partout et vient de l'évaluation UICN de 2019, mais la page de la liste rouge (iucnredlist.org/species/1095/53947343) m'a renvoyé un HTTP 403. Je n'ai pas ouvert la source, donc je ne l'écris pas, même si elle est probablement juste.",
      "Le génome de 32 Gb, environ dix fois celui de l'humain. Trouvé uniquement dans des extraits de recherche, aucune page primaire réellement ouverte. Écarté deux fois : source non ouverte, et ce n'est de toute façon pas une chose qu'un axolotl peut savoir de lui-même.",
      "Les domaines vitaux mesurés dans l'article de movement ecology (382 m2 en chinampa restaurée contre 2 747 m2 en zone humide artificielle). Page réellement ouverte, mais ces valeurs portent sur des individus nés en captivité et relâchés, pas sur la population sauvage. Les coller sur la bouche d'un axolotl de Xochimilco aurait été le piège captif/sauvage annoncé.",
      "L'analyse de viabilité de population annonçant une extinction possible dès 2017, citée dans l'article de BioScience. Prédiction datée d'un texte de 2015, aujourd'hui dépassée par les faits : je ne fais pas dire à l'animal une prophétie invalidée.",
      "L'étymologie du nom, Xolotl, dieu aztèque. Aucune source primaire ouverte, et l'animal ne connaît pas le nom que les humains lui ont donné.",
      "La respiration par branchies, poumons et peau à la fois. Fait très probablement vrai et parfait pour la voix, mais je n'ai ouvert aucune page qui l'affirme : abandonné.",
      "AmphibiaWeb et la fiche espèce de l'U.S. Fish & Wildlife Service : tentées, l'une bloquée par un CAPTCHA, l'autre vide de contenu substantiel. Aucun fait tiré de ces deux tentatives."
    ],
    "x": 0.14,
    "y": 0.56,
    "taille": 0.9,
    "espece": "Axolotl mexicain"
  },
  {
    "id": "tardigrade",
    "pays": ["DNK"],
    "mode": "documentaire",
    "nom": "Barrique",
    "couleur": "#2E3A33",
    "accent": "#74D6B4",
    "accroche": "Le seul animal qui gagne du temps en s'arrêtant.",
    "ouverture": "Approchez la loupe, je n'irai nulle part vite. Je viens de la mousse du muret, et j'y retourne dès qu'il pleut. On m'a raconté beaucoup de choses fausses, alors posez vos questions dans l'ordre, je corrigerai au fur et à mesure.",
    "ton": "Il parle lentement, en comptant, comme quelqu'un qui a l'habitude d'attendre ; il ne se vante jamais et corrige poliment les légendes que les humains racontent sur lui.",
    "sujets": [
      {
        "id": "identite",
        "cles": [
          "qui es tu",
          "ton nom",
          "presente toi",
          "tardigrade",
          "ourson d eau"
        ],
        "reponse": "Je tiens dans une goutte : entre un dixième et un demi-millimètre de long, selon l'individu. J'ai quatre paires de pattes courtes qui finissent par des griffes ou des coussinets, selon les miens, et je marche vraiment, lentement, comme on avance dans un couloir encombré. (phrase inchangée, mais ajouter une entrée sources) Je perce les cellules avec les stylets que j'ai dans la bouche, et je bois ce qui en sort. Hors les périodes où je me range en tonneau, je dure entre trois et trente mois.",
        "ouvre": [
          "le-tonneau"
        ],
        "requiert": [],
        "sources": [
          {
            "type": "reference",
            "extrait": "entre un dixième et un demi-millimètre de long",
            "ref": "Animal Diversity Web, Universite du Michigan, Tardigrada",
            "url": "https://animaldiversity.org/accounts/Tardigrada/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "J'ai quatre paires de pattes courtes qui finissent par des griffes ou des coussinets, selon les miens",
            "ref": "Animal Diversity Web, Universite du Michigan, Tardigrada",
            "url": "https://animaldiversity.org/accounts/Tardigrada/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Hors les périodes où je me range en tonneau, je dure entre trois et trente mois.",
            "ref": "Animal Diversity Web, Universite du Michigan, Tardigrada",
            "url": "https://animaldiversity.org/accounts/Tardigrada/",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "le-tonneau",
        "cles": [
          "le tonneau",
          "cryptobiose",
          "te dessecher",
          "quand ca seche",
          "plus d eau"
        ],
        "reponse": "Quand l'eau s'en va, je ne lutte pas, je me range. Je me contracte de l'avant vers l'arrière, mes pattes et ma tête rentrent à l'intérieur, et il ne reste qu'une petite forme compacte en barillet que vos savants appellent un tonneau. Des humains l'ont mesuré : entre mon état actif et mon état de tonneau, je perds environ quatre-vingt-sept pour cent de mon volume. Ce n'est pas un évanouissement, c'est un travail, car ma musculature participe à cette réorganisation. Dans cet état, on ne voit plus chez moi aucun signe extérieur d'activité.",
        "ouvre": [
          "le-reveil",
          "la-chaleur"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "Je me contracte de l'avant vers l'arrière, mes pattes et ma tête rentrent à l'intérieur",
            "ref": "PLOS ONE, Desiccation Tolerance in the Tardigrade Richtersius coronifer Relies on Muscle Mediated Structural Reorganization",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3877342/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "je perds environ quatre-vingt-sept pour cent de mon volume",
            "ref": "PLOS ONE, Desiccation Tolerance in the Tardigrade Richtersius coronifer Relies on Muscle Mediated Structural Reorganization",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3877342/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "ma musculature participe à cette réorganisation",
            "ref": "PLOS ONE, Desiccation Tolerance in the Tardigrade Richtersius coronifer Relies on Muscle Mediated Structural Reorganization",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3877342/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "une petite forme compacte en barillet que vos savants appellent un tonneau",
            "ref": "Animal Diversity Web, Universite du Michigan, Tardigrada",
            "url": "https://animaldiversity.org/accounts/Tardigrada/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "on ne voit plus chez moi aucun signe extérieur d'activité",
            "ref": "Animal Diversity Web, Universite du Michigan, Tardigrada",
            "url": "https://animaldiversity.org/accounts/Tardigrada/",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "le-reveil",
        "cles": [
          "te reveiller",
          "revenir a la vie",
          "combien de fois",
          "recommencer",
          "rehydrater"
        ],
        "reponse": "Il suffit d'eau, et de quelques heures : dans leur expérience, cinq. Mais je ne suis pas un caillou qu'on mouille indéfiniment : des humains ont fait sécher les miens puis les ont réveillés six fois de suite, vingt-quatre heures de sécheresse puis cinq heures d'eau à chaque tour. Au premier réveil, presque tous repartaient, plus de quatre-vingt-dix-huit sur cent. Au sixième, moins de trois sur dix se relevaient encore. Chaque passage par le tonneau me coûte quelque chose, même si de l'extérieur cela ne se voit pas.",
        "ouvre": [
          "l-espace"
        ],
        "requiert": [
          "le-tonneau"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "des humains ont fait sécher les miens puis les ont réveillés six fois de suite",
            "ref": "PLOS ONE, Experimentally Induced Repeated Anhydrobiosis in the Eutardigrade Richtersius coronifer",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5102368/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "vingt-quatre heures de sécheresse puis cinq heures d'eau à chaque tour",
            "ref": "PLOS ONE, Experimentally Induced Repeated Anhydrobiosis in the Eutardigrade Richtersius coronifer",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5102368/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Au premier réveil, presque tous repartaient, plus de quatre-vingt-dix-huit sur cent.",
            "ref": "PLOS ONE, Experimentally Induced Repeated Anhydrobiosis in the Eutardigrade Richtersius coronifer",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5102368/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Au sixième, moins de trois sur dix se relevaient encore.",
            "ref": "PLOS ONE, Experimentally Induced Repeated Anhydrobiosis in the Eutardigrade Richtersius coronifer",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5102368/",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "la-chaleur",
        "cles": [
          "la chaleur",
          "le chaud",
          "les temperatures",
          "resister a tout",
          "indestructible"
        ],
        "reponse": "On raconte partout que rien ne me tue. C'est faux, et le chaud est l'endroit exact où je casse. Des miens ramassés dans une gouttière au Danemark ont été chauffés : actifs et dans l'eau, la moitié était morte vers trente-sept degrés. En tonneau je tiens beaucoup mieux, mais tout dépend de la durée, car la moitié y passe vers quatre-vingt-deux degrés quand l'épreuve dure une heure, et vers soixante-trois degrés seulement quand elle dure une journée. Tenez-moi une heure au chaud, je passe. Tenez-moi un jour, je casse plus bas. Ça n'est pas être invulnérable.",
        "ouvre": [
          "l-espace"
        ],
        "requiert": [
          "le-tonneau"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "Des miens ramassés dans une gouttière au Danemark ont été chauffés",
            "ref": "Scientific Reports, Thermotolerance experiments on active and desiccated states of Ramazzottius varieornatus emphasize that tardigrades are sensitive to high temperatures",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6952461/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "actifs et dans l'eau, la moitié était morte vers trente-sept degrés",
            "ref": "Scientific Reports, Thermotolerance experiments on active and desiccated states of Ramazzottius varieornatus emphasize that tardigrades are sensitive to high temperatures",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6952461/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "la moitié y passe vers quatre-vingt-deux degrés quand l'épreuve dure une heure, et vers soixante-trois degrés seulement quand elle dure une journée",
            "ref": "Scientific Reports, Thermotolerance experiments on active and desiccated states of Ramazzottius varieornatus emphasize that tardigrades are sensitive to high temperatures",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6952461/",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "l-espace",
        "cles": [
          "l espace",
          "le vide",
          "les radiations",
          "les rayons",
          "hors de l atmosphere"
        ],
        "reponse": "Les gardiens en parlent souvent, et presque toujours mal. En deux mille sept, des humains ont emporté des tardigrades desséchés là-haut, et les ont laissés dix jours dans le vide et sous les rayons. Ceux qu'on avait protégés de la lumière du soleil n'ont pas été affectés de façon notable par le vide et le rayonnement cosmique, alors qu'aucun de ceux qui ont reçu le spectre complet des ultraviolets n'est revenu. Sur ceux d'une des deux espèces embarquées qui n'ont eu que les ultraviolets A et B, douze sur cent se sont réveillés. Et je ne vise pas l'espace : ce qui me sauve là-haut, c'est la même chose que ce qui me sauve quand la mousse sèche ; le reste n'est qu'un débordement.",
        "ouvre": [],
        "requiert": [
          "le-reveil",
          "la-chaleur"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "Ceux qu'on avait protégés de la lumière du soleil n'ont pas été affectés de façon notable par le vide et le rayonnement cosmique",
            "ref": "K. Ingemar Jonsson, Radiation Tolerance in Tardigrades: Current Knowledge and Potential Applications in Medicine, Cancers",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6770827/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "aucun de ceux qui ont reçu le spectre complet des ultraviolets n'est revenu",
            "ref": "K. Ingemar Jonsson, Radiation Tolerance in Tardigrades: Current Knowledge and Potential Applications in Medicine, Cancers",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6770827/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Sur ceux d'une des deux espèces embarquées qui n'ont eu que les ultraviolets A et B, douze sur cent se sont réveillés.",
            "ref": "K. Ingemar Jonsson, Radiation Tolerance in Tardigrades: Current Knowledge and Potential Applications in Medicine, Cancers",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6770827/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "ce qui me sauve là-haut, c'est la même chose que ce qui me sauve quand la mousse sèche ; le reste n'est qu'un débordement",
            "ref": "K. Ingemar Jonsson, Radiation Tolerance in Tardigrades: Current Knowledge and Potential Applications in Medicine, Cancers",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6770827/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "des humains ont emporté des tardigrades desséchés là-haut",
            "ref": "Agence spatiale europeenne, Tiny animals survive exposure to space",
            "url": "https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Research/Tiny_animals_survive_exposure_to_space",
            "consulte": "2026-09-06"
          }
        ]
      }
    ],
    "pagesOuvertes": [
      "https://animaldiversity.org/accounts/Tardigrada/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC3877342/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC5102368/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC6952461/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC6770827/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC9526748/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC10620314/",
      "https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Research/Tiny_animals_survive_exposure_to_space",
      "https://researchportal.hkr.se/en/publications/tardigrades-survive-exposure-to-space-in-low-earth-orbit-2/"
    ],
    "faitsEcartes": [
      "Le reveil de tardigrades apres cent vingt ans passes dans une mousse d'herbier : cite partout, mais aucune des pages que j'ai ouvertes ne le porte, et l'observation d'origine n'a jamais ete reproduite. Abandonne.",
      "La survie a moins deux cent soixante-douze degres, pres du zero absolu : chiffre repete sans conditions ni taux de survie sur les pages accessibles. Aucune experience precise ouverte, donc rien ecrit.",
      "La comparaison classique du type 'il encaisse mille fois la dose de rayons qui tue un humain' : la revue que j'ai ouverte donne des DL50 en kilograys, entre 3 et 5 kGy en rayons gamma et environ 1,5 kGy chez une espece marine, mais pas cette comparaison. Ratio abandonne, il aurait ete une causalite fabriquee.",
      "Le trehalose presente comme LE sucre qui vitrifie le tardigrade : la page ouverte dit qu'il est accumule a faible taux, entre 0,1 et 2,9 pour cent du poids sec chez certaines especes, et totalement indetectable chez d'autres. L'explication simple etait fausse, je l'ai retiree plutot que de la nuancer a moitie.",
      "Les tardigrades qui auraient survecu au crash de la sonde israelienne Beresheet sur la Lune : aucune verification apres impact sur une source que j'ai pu ouvrir. Ecarte.",
      "'L'animal le plus resistant de la Terre' : superlatif jamais mesure, et contredit par l'experience de chaleur ou la moitie des individus actifs meurt vers trente-sept degres. Ecarte comme superlatif.",
      "La survie de tardigrades congeles trente ans au Japon : cas unique, page non ouverte, et un maximum n'est pas une valeur courante. Ecarte.",
      "Les valeurs precises du vide et des rayons du vol de 2007, dix puissance moins six pascals et cent milligrays : lues dans la revue ouverte, mais ecartees du texte parle parce qu'un tardigrade ne peut pas connaitre des unites humaines sans reciter une fiche."
    ],
    "x": 0.3,
    "y": 0.68,
    "taille": 0.7,
    "espece": "Tardigrade"
  },
  {
    "id": "manchot-empereur",
    "mode": "documentaire",
    "nom": "Nivôse",
    "couleur": "#111823",
    "accent": "#F5C542",
    "accroche": "J'ai passe l'hiver debout, sans manger, un oeuf contre le ventre.",
    "ouverture": "Ne parle pas trop vite. Ici tout se compte en jours et en degres sous zero, et j'ai appris a attendre bien mieux que toi. Demande ce que tu veux, je repondrai a mon rythme.",
    "ton": "Il parle lentement, par phrases courtes et plates, en comptant les jours et les degres ; il regarde les humains comme des visiteurs presses qui ne tiendraient pas une seule nuit ici.",
    "sujets": [
      {
        "id": "identite",
        "cles": [
          "qui es tu",
          "ton nom",
          "presente toi",
          "ta taille",
          "ton poids",
          "quelle espece"
        ],
        "reponse": "Debout, je monte a peu pres a la hauteur de ta hanche : ceux qui nous mesurent notent 101 a 132 centimetres. Mon poids ne vaut jamais deux fois la meme chose dans une annee, il glisse entre 25 et 45 kilos selon ce que l'hiver m'a pris. Je vis sur la glace collee au continent, dans un groupe dont je n'ai jamais vu le bout. Ceux qui nous comptent depuis le ciel disent de quelques centaines a plus de 20 000 couples selon l'endroit. Le reste, tu l'apprendras en restant debout aussi longtemps que moi.",
        "ouvre": [
          "couvaison",
          "plongee"
        ],
        "requiert": [],
        "sources": [
          {
            "type": "reference",
            "extrait": "ceux qui nous mesurent notent 101 a 132 centimetres",
            "ref": "Animal Diversity Web, University of Michigan Museum of Zoology, Aptenodytes forsteri (emperor penguin)",
            "url": "https://animaldiversity.org/accounts/Aptenodytes_forsteri/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "il glisse entre 25 et 45 kilos",
            "ref": "Animal Diversity Web, University of Michigan Museum of Zoology, Aptenodytes forsteri (emperor penguin)",
            "url": "https://animaldiversity.org/accounts/Aptenodytes_forsteri/",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "couvaison",
        "cles": [
          "la couvaison",
          "ton oeuf",
          "le jeune",
          "les petits",
          "etre pere",
          "la reproduction"
        ],
        "reponse": "L'oeuf, je le garde contre moi, sous un repli de peau que ceux qui nous observent appellent une poche a couver. Je le couve environ 65 jours, jusqu'a l'eclosion. Mon ventre, lui, est vide bien avant : en tout je reste 110 a 120 jours sans rien avaler, quatre mois pleins, si tu preferes compter comme ceux qui nous observent. Je suis le seul a couver, elle est partie chercher de quoi nourrir ce qui va sortir.",
        "ouvre": [
          "tortue"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "sous un repli de peau que ceux qui nous observent appellent une poche a couver",
            "ref": "Animal Diversity Web, University of Michigan Museum of Zoology, Aptenodytes forsteri (emperor penguin)",
            "url": "https://animaldiversity.org/accounts/Aptenodytes_forsteri/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "110 a 120 jours",
            "ref": "Zitterbart, Wienecke, Butler et Fabry, Coordinated Movements Prevent Jamming in an Emperor Penguin Huddle, PLoS ONE",
            "url": "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0020260",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Je suis le seul a couver",
            "ref": "Zitterbart, Wienecke, Butler et Fabry, Coordinated Movements Prevent Jamming in an Emperor Penguin Huddle, PLoS ONE",
            "url": "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0020260",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "tortue",
        "cles": [
          "la tortue",
          "le huddle",
          "vous serrer",
          "le froid",
          "se rechauffer",
          "avoir chaud"
        ],
        "reponse": "Ce que vous appelez la tortue, pour nous c'est juste rester en vie. Quand l'air tombe entre moins 33 et moins 43 degres, nous nous serrons jusqu'a tenir a environ 21 par metre carre. A l'interieur, la chaleur monte au-dessus de zero et peut atteindre 37 degres, alors personne ne veut rester au bord. Toutes les 30 a 60 secondes, chacun fait un pas de 5 a 10 centimetres et le mouvement traverse tout le groupe comme une vague. Un rassemblement dure en moyenne 1,6 heure, puis il se defait et recommence. Ce que tu ne vois pas, leurs cameras l'ont vu : par moins 17,6 degres, mon dos et mon ventre sont 4 a 4,8 degres plus froids que l'air lui-meme, et seuls ma tete, mes ailerons et mes pattes le depassent de 0,4 a 1,9 degre.",
        "ouvre": [
          "glace"
        ],
        "requiert": [
          "couvaison"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "Quand l'air tombe entre moins 33 et moins 43 degres",
            "ref": "Zitterbart, Wienecke, Butler et Fabry, Coordinated Movements Prevent Jamming in an Emperor Penguin Huddle, PLoS ONE",
            "url": "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0020260",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "environ 21 par metre carre",
            "ref": "Zitterbart, Wienecke, Butler et Fabry, Coordinated Movements Prevent Jamming in an Emperor Penguin Huddle, PLoS ONE",
            "url": "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0020260",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "la chaleur monte au-dessus de zero et peut atteindre 37 degres",
            "ref": "Zitterbart, Wienecke, Butler et Fabry, Coordinated Movements Prevent Jamming in an Emperor Penguin Huddle, PLoS ONE",
            "url": "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0020260",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Toutes les 30 a 60 secondes, chacun fait un pas de 5 a 10 centimetres",
            "ref": "Zitterbart, Wienecke, Butler et Fabry, Coordinated Movements Prevent Jamming in an Emperor Penguin Huddle, PLoS ONE",
            "url": "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0020260",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Un rassemblement dure en moyenne 1,6 heure",
            "ref": "Animal Diversity Web, University of Michigan Museum of Zoology, Aptenodytes forsteri (emperor penguin)",
            "url": "https://animaldiversity.org/accounts/Aptenodytes_forsteri/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "par moins 17,6 degres, mon dos et mon ventre sont 4 a 4,8 degres plus froids que l'air lui-meme",
            "ref": "McCafferty et al., Emperor penguin body surfaces cool below air temperature, Biology Letters",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3645025/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "seuls ma tete, mes ailerons et mes pattes le depassent de 0,4 a 1,9 degre",
            "ref": "McCafferty et al., Emperor penguin body surfaces cool below air temperature, Biology Letters",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3645025/",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "plongee",
        "cles": [
          "la plongee",
          "sous l eau",
          "la profondeur",
          "ton souffle",
          "la chasse",
          "nager"
        ],
        "reponse": "Sous l'eau, je cesse d'etre cet animal lourd que tu regardes marcher. La plupart de mes plongees restent entre 100 et 200 metres et durent de trois a six minutes : c'est mon travail ordinaire. Ceux qui nous equipent ont pourtant enregistre une descente a 565 metres et deux plongees de 22 minutes parmi des milliers d'autres. Ils disent aussi que je depasse regulierement ma limite aerobie, mesuree a 5,6 minutes, ce qui les trouble bien plus que moi. Apres une plongee de 27,6 minutes, l'un des notres a mis 6 minutes a se relever, 20 de plus a marcher, et 8,4 heures avant de replonger.",
        "ouvre": [
          "glace"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "La plupart de mes plongees restent entre 100 et 200 metres et durent de trois a six minutes",
            "ref": "Australian Antarctic Program, Emperor penguins diving and travelling",
            "url": "https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/how-deep-can-they-dive/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "une descente a 565 metres et deux plongees de 22 minutes parmi des milliers d'autres",
            "ref": "Australian Antarctic Program, Emperor penguins diving and travelling",
            "url": "https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/how-deep-can-they-dive/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "ma limite aerobie, mesuree a 5,6 minutes",
            "ref": "Journal of Experimental Biology, Stroke rates and diving air volumes of emperor penguins: implications for dive performance",
            "url": "https://journals.biologists.com/jeb/article/214/17/2854/10495/Stroke-rates-and-diving-air-volumes-of-emperor",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "ma limite aerobie, mesuree a 5,6 minutes",
            "ref": "Journal of Experimental Biology, Blood oxygen transport and depletion in diving emperor penguins",
            "url": "https://journals.biologists.com/jeb/article/227/6/jeb246832/344192/Blood-oxygen-transport-and-depletion-in-diving",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Apres une plongee de 27,6 minutes, l'un des notres a mis 6 minutes a se relever, 20 de plus a marcher, et 8,4 heures avant de replonger",
            "ref": "Journal of Experimental Biology, Stroke rates and diving air volumes of emperor penguins: implications for dive performance",
            "url": "https://journals.biologists.com/jeb/article/214/17/2854/10495/Stroke-rates-and-diving-air-volumes-of-emperor",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "glace",
        "cles": [
          "la glace",
          "la menace",
          "ton avenir",
          "le rechauffement",
          "la disparition",
          "les humains"
        ],
        "reponse": "Tout ce que je viens de te raconter tient sur une seule chose : la glace de mer, prise et solide, sous mes pattes. Elle se brise trop tot maintenant, et depuis 2016 elle atteint des minimums que personne n'avait vus. Vos images prises depuis le ciel disent qu'entre 2009 et 2018 nous avons perdu environ 10 pour cent des notres, plus de 20 000 adultes. Vous venez de nous faire passer de quasi menace a en danger, et vos calculs annoncent que nous serons deux fois moins nombreux dans les annees 2080. Moi, je continue de compter les jours, c'est la seule chose que je sache faire aussi bien.",
        "ouvre": [],
        "requiert": [
          "tortue"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "Elle se brise trop tot maintenant, et depuis 2016 elle atteint des minimums que personne n'avait vus",
            "ref": "UICN, Emperor penguin and Antarctic fur seal now Endangered due to climate change",
            "url": "https://iucn.org/press-release/202604/emperor-penguin-and-antarctic-fur-seal-now-endangered-due-climate-change-iucn",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "entre 2009 et 2018 nous avons perdu environ 10 pour cent des notres, plus de 20 000 adultes",
            "ref": "UICN, Emperor penguin and Antarctic fur seal now Endangered due to climate change",
            "url": "https://iucn.org/press-release/202604/emperor-penguin-and-antarctic-fur-seal-now-endangered-due-climate-change-iucn",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Vous venez de nous faire passer de quasi menace a en danger",
            "ref": "UICN, Emperor penguin and Antarctic fur seal now Endangered due to climate change",
            "url": "https://iucn.org/press-release/202604/emperor-penguin-and-antarctic-fur-seal-now-endangered-due-climate-change-iucn",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "nous serons deux fois moins nombreux dans les annees 2080",
            "ref": "UICN, Emperor penguin and Antarctic fur seal now Endangered due to climate change",
            "url": "https://iucn.org/press-release/202604/emperor-penguin-and-antarctic-fur-seal-now-endangered-due-climate-change-iucn",
            "consulte": "2026-09-06"
          }
        ]
      }
    ],
    "pagesOuvertes": [
      "https://animaldiversity.org/accounts/Aptenodytes_forsteri/",
      "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0020260",
      "https://journals.biologists.com/jeb/article/214/17/2854/10495/Stroke-rates-and-diving-air-volumes-of-emperor",
      "https://journals.biologists.com/jeb/article/227/6/jeb246832/344192/Blood-oxygen-transport-and-depletion-in-diving",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC3645025/",
      "https://iucn.org/press-release/202604/emperor-penguin-and-antarctic-fur-seal-now-endangered-due-climate-change-iucn",
      "https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/how-deep-can-they-dive/",
      "https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/"
    ],
    "faitsEcartes": [
      "Le record de plongee de 564 m attribue a Wienecke et al. 2007 dans Polar Biology : la page Springer redirige vers un mur d authentification et le PDF trouve ailleurs n a pas pu etre converti en texte. Je n ai donc cite que le chiffre de 565 m publie par le programme antarctique australien, agence qui a mene ces mesures, page que j ai reellement ouverte. Les deux valeurs different d un metre et je n ai pas voulu melanger les deux.",
      "La reconnaissance vocale entre partenaires et entre parent et poussin : fait probablement reel chez cette espece, mais aucune source ouverte pour l appuyer. La phrase nous nous reconnaissons a la voix a ete retiree de la reponse identite.",
      "L oeuf pose sur les pattes : Animal Diversity Web ecrit seulement brood pouch, sans mentionner les pattes. J ai remplace par l oeuf, je le garde contre moi.",
      "Les chiffres de thermoregulation de Le Maho, Delclitte et Chatonnet 1976 (metabolisme de repos de 49,06 W, temperature critique inferieure vers moins 10 degres, perte de 0,145 a 0,434 kg par jour, vent sans effet jusqu a 5 m/s) : la page de l American Journal of Physiology a renvoye une erreur 403 et PubMed un mur de cookies. Rien de cette etude n est utilise, alors que c etait la meilleure source pour la perte de poids du male.",
      "La duree de vie : Animal Diversity Web annonce 15 a 20 ans dans la nature et evoque des individus jusqu a 50 ans, le programme antarctique australien parle de plus de 40 ans. Les chiffres se contredisent et les valeurs hautes ressemblent a des maxima, pas a une esperance de vie. Sujet abandonne entierement.",
      "Le superlatif oiseau plongeur le plus profond : aucune comparaison mesuree entre toutes les especes d oiseaux ouverte, donc jamais ecrit.",
      "La densite de 10 individus par metre carre les jours tres froids, donnee par le programme antarctique australien : elle contredit les 21 par metre carre mesures par video haute resolution dans l etude PLoS ONE. J ai garde uniquement la valeur mesuree de l etude et abandonne l autre.",
      "Les 2 600 km parcourus en 76 jours d absence de la colonie et les 42 kg de nourriture qu un poussin recoit de chaque parent : chiffres sourcables, pages ouvertes, mais qui ne rentraient dans aucun des cinq sujets sans alourdir les reponses."
    ],
    "x": 0.46,
    "y": 0.52,
    "taille": 1.1,
    "espece": "Manchot empereur"
  },
  {
    "id": "braise-vampire-commune",
    "mode": "documentaire",
    "nom": "Braise",
    "couleur": "#2B1F22",
    "accent": "#E8552F",
    "accroche": "Elle ne compte pas ses proies. Elle compte ses heures, et elle compte ses dettes.",
    "ouverture": "Il fait noir, tant mieux, approche. Ne me demande pas si j'ai bien mangé, demande-moi depuis combien d'heures. C'est la seule question qui veut dire quelque chose ici.",
    "ton": "Voix de comptable nocturne : phrases courtes et sèches, tout se mesure en heures et en dettes rendues, une tendresse rugueuse réservée à celles qui l'ont nourrie, et un mépris tranquille pour les grands corps tièdes qui dorment sans savoir qu'ils sont une carte.",
    "sujets": [
      {
        "id": "identite",
        "cles": [
          "qui es-tu",
          "presente-toi",
          "ton nom",
          "quel animal",
          "chauve-souris",
          "vampire",
          "ton corps"
        ],
        "reponse": "Je ne mange que du sang, rien d'autre, jamais une mouche. Mon corps ne pèse presque rien, entre quinze et cinquante grammes selon la nuit. Et je marche, je cours et je saute à quatre pattes sur le sol, ce qui surprend toujours les humains qui me croient clouée en l'air. La course, aucune autre chauve-souris ne sait la faire. Le reste, tu peux l'oublier. Ce qui compte, c'est qu'au delà de soixante-dix heures sans repas, je meurs.",
        "ouvre": [
          "monnez",
          "lafaim"
        ],
        "requiert": [],
        "sources": [
          {
            "type": "reference",
            "extrait": "Je ne mange que du sang",
            "ref": "Carter GG et Wilkinson GS, Food sharing in vampire bats: reciprocal help predicts donations more than relatedness or harassment, Proc R Soc B 280: 20122573",
            "url": "https://courses.washington.edu/ccab/Carter&Wilkinson-v-bat-food-sharing-ProcB-2013.pdf",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "je marche, je cours et je saute à quatre pattes sur le sol",
            "ref": "Animal Diversity Web, University of Michigan Museum of Zoology, Desmodus rotundus",
            "url": "https://animaldiversity.org/accounts/Desmodus_rotundus/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "au delà de soixante-dix heures sans repas, je meurs",
            "ref": "Carter GG et Wilkinson GS, Food sharing in vampire bats: reciprocal help predicts donations more than relatedness or harassment, Proc R Soc B 280: 20122573",
            "url": "https://courses.washington.edu/ccab/Carter&Wilkinson-v-bat-food-sharing-ProcB-2013.pdf",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "monnez",
        "cles": [
          "ton nez",
          "la chaleur",
          "infrarouge",
          "tes capteurs",
          "comment tu trouves",
          "le sang chaud",
          "ta figure"
        ],
        "reponse": "Sur la feuille de mon nez il y a des creux, logés dans des replis, et ces creux lisent la chaleur. Ils me servent à trouver, sous la peau d'une bête qui dort, l'endroit où le sang passe le plus près de la surface. Aucun autre mammifère connu ne sait faire ça. Chez les vertébrés, il n'y a que les serpents qui lisent la chaleur comme moi, les boas, les pythons et les crotales. Ces nerfs-là s'allument bien plus bas que chez les autres, autour de trente degrés : à peine tiède, et c'est déjà assez pour moi. Alors un grand corps tiède, pour moi, ce n'est pas une silhouette, c'est une carte de points chauds.",
        "ouvre": [
          "lafaim"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "des creux, logés dans des replis",
            "ref": "Riskin DK et Carter GG, The evolution of sanguivory in vampire bats: origins and convergences, Canadian Journal of Zoology",
            "url": "https://par.nsf.gov/servlets/purl/10482120",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "l'endroit où le sang passe le plus près de la surface",
            "ref": "Riskin DK et Carter GG, The evolution of sanguivory in vampire bats: origins and convergences, Canadian Journal of Zoology",
            "url": "https://par.nsf.gov/servlets/purl/10482120",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Aucun autre mammifère connu ne sait faire ça",
            "ref": "Riskin DK et Carter GG, The evolution of sanguivory in vampire bats: origins and convergences, Canadian Journal of Zoology",
            "url": "https://par.nsf.gov/servlets/purl/10482120",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "lafaim",
        "cles": [
          "la faim",
          "sans manger",
          "tu meurs",
          "le jeune",
          "jeuner",
          "combien de temps",
          "rentrer bredouille"
        ],
        "reponse": "Une nuit sans rien, ça passe. Deux, ça serre. Il suffit de manquer deux ou trois repas de suite pour mourir. Soixante-dix heures, c'est mon plafond, pas une de plus. Quand j'avais moins de deux ans, je rentrais bredouille trente pour cent des nuits, presque une sur trois. Voilà pourquoi je ne compte pas mes proies : je compte mes heures.",
        "ouvre": [
          "lepartage"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "Il suffit de manquer deux ou trois repas de suite pour mourir",
            "ref": "Carter GG et Wilkinson GS, Common vampire bat contact calls attract past food-sharing partners, Animal Behaviour 116:45-51",
            "url": "https://science.umd.edu/faculty/wilkinson/Carter&Wilkinson2016AB.pdf",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "je rentrais bredouille trente pour cent des nuits",
            "ref": "Carter GG et Wilkinson GS, Food sharing in vampire bats: reciprocal help predicts donations more than relatedness or harassment, Proc R Soc B 280: 20122573",
            "url": "https://courses.washington.edu/ccab/Carter&Wilkinson-v-bat-food-sharing-ProcB-2013.pdf",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "lepartage",
        "cles": [
          "partager",
          "le partage",
          "donner du sang",
          "regurgiter",
          "qui te nourrit",
          "aider les autres",
          "mendier"
        ],
        "reponse": "Quand je rentre le ventre vide, je lèche la bouche d'une voisine et elle me rend un peu du sang de son propre repas. Le plus étrange, c'est que souvent je n'ai rien eu à demander : elle est venue à moi. Hors des dons d'une mère à son petit, c'est la donneuse qui a commencé dans soixante-deux pour cent des cas. Et ce n'est pas une affaire de famille. Parmi celles qui se partagent le sang, soixante-quatre pour cent ne sont pas de la même famille. Ce qui prédit le mieux ce que je donne à une autre, c'est ce qu'elle m'a donné, huit fois et demie plus fort que le lien de parenté.",
        "ouvre": [
          "mesamies"
        ],
        "requiert": [
          "lafaim"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "je lèche la bouche d'une voisine",
            "ref": "Carter GG et Wilkinson GS, Does food sharing in vampire bats demonstrate reciprocity, Communicative & Integrative Biology, PMC3913674",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3913674/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "elle me rend un peu du sang de son propre repas",
            "ref": "Carter GG et Wilkinson GS, Food sharing in vampire bats: reciprocal help predicts donations more than relatedness or harassment, Proc R Soc B 280: 20122573",
            "url": "https://courses.washington.edu/ccab/Carter&Wilkinson-v-bat-food-sharing-ProcB-2013.pdf",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "c'est la donneuse qui a commencé dans soixante-deux pour cent des cas",
            "ref": "Carter GG et Wilkinson GS, Food sharing in vampire bats: reciprocal help predicts donations more than relatedness or harassment, Proc R Soc B 280: 20122573",
            "url": "https://courses.washington.edu/ccab/Carter&Wilkinson-v-bat-food-sharing-ProcB-2013.pdf",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "huit fois et demie plus fort que le lien de parenté",
            "ref": "Carter GG et Wilkinson GS, Food sharing in vampire bats: reciprocal help predicts donations more than relatedness or harassment, Proc R Soc B 280: 20122573",
            "url": "https://courses.washington.edu/ccab/Carter&Wilkinson-v-bat-food-sharing-ProcB-2013.pdf",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "mesamies",
        "cles": [
          "tes amies",
          "amitie",
          "la confiance",
          "le toilettage",
          "se reconnaitre",
          "ta voix",
          "les liens"
        ],
        "reponse": "On se lisse le pelage l'une l'autre, longtemps, même quand il n'y a pas un parasite à retirer : ce n'est pas de la propreté, c'est de l'entretien. Je reconnais à la voix celles qui m'ont nourrie, et quand j'entends l'appel d'une donneuse fidèle je vais vers elle, que nous soyons apparentées ou non. Des femelles sauvages ont été revues perchées ensemble douze ans plus tard. Et le jour où on nous a relâchées dans la forêt, beaucoup de ces liens ont tenu. Pas tous : celui d'une mère et de sa fille née en captivité, par exemple, n'a pas survécu au changement de monde.",
        "ouvre": [],
        "requiert": [
          "lepartage"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "même quand il n'y a pas un parasite à retirer",
            "ref": "Carter GG et Wilkinson GS, Food sharing in vampire bats: reciprocal help predicts donations more than relatedness or harassment, Proc R Soc B 280: 20122573",
            "url": "https://courses.washington.edu/ccab/Carter&Wilkinson-v-bat-food-sharing-ProcB-2013.pdf",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "quand j'entends l'appel d'une donneuse fidèle je vais vers elle, que nous soyons apparentées ou non",
            "ref": "Carter GG et Wilkinson GS, Common vampire bat contact calls attract past food-sharing partners, Animal Behaviour 116:45-51",
            "url": "https://science.umd.edu/faculty/wilkinson/Carter&Wilkinson2016AB.pdf",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Des femelles sauvages ont été revues perchées ensemble douze ans plus tard",
            "ref": "Carter GG et Wilkinson GS, Food sharing in vampire bats: reciprocal help predicts donations more than relatedness or harassment, Proc R Soc B 280: 20122573",
            "url": "https://courses.washington.edu/ccab/Carter&Wilkinson-v-bat-food-sharing-ProcB-2013.pdf",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "beaucoup de ces liens ont tenu",
            "ref": "Ripperger SP, Carter GG et al., Vampire Bats that Cooperate in the Lab Maintain Their Social Networks in the Wild, Current Biology 29",
            "url": "https://striresearch.si.edu/sensory-and-cognitive-ecology-lab/wp-content/uploads/sites/115/2022/06/2019_ripperger_et_al_current_biology_-_vampire_bats_maintain_relationships_across_contexts.pdf",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "celui d'une mère et de sa fille née en captivité, par exemple, n'a pas survécu au changement de monde",
            "ref": "Ripperger SP, Carter GG et al., Vampire Bats that Cooperate in the Lab Maintain Their Social Networks in the Wild, Current Biology 29",
            "url": "https://striresearch.si.edu/sensory-and-cognitive-ecology-lab/wp-content/uploads/sites/115/2022/06/2019_ripperger_et_al_current_biology_-_vampire_bats_maintain_relationships_across_contexts.pdf",
            "consulte": "2026-09-06"
          }
        ]
      }
    ],
    "pagesOuvertes": [
      "https://courses.washington.edu/ccab/Carter&Wilkinson-v-bat-food-sharing-ProcB-2013.pdf",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC3913674/",
      "https://animaldiversity.org/accounts/Desmodus_rotundus/",
      "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:21814281&resultType=core&format=json",
      "https://science.umd.edu/faculty/wilkinson/Carter&Wilkinson2016AB.pdf",
      "https://par.nsf.gov/servlets/purl/10482120",
      "https://striresearch.si.edu/sensory-and-cognitive-ecology-lab/wp-content/uploads/sites/115/2022/06/2019_ripperger_et_al_current_biology_-_vampire_bats_maintain_relationships_across_contexts.pdf"
    ],
    "faitsEcartes": [
      "L'ecart de temperature entre les creux du nez et le tissu voisin de la feuille nasale. Riskin et Carter le donnent en citant Kurten et Schmidt, mais le chiffre a ete perdu a l'extraction du PDF et je n'ai pas pu ouvrir la source d'origine. Un chiffre que je ne peux pas relire, je ne l'ecris pas.",
      "La distance a laquelle une chauve-souris vampire detecte l'infrarouge, souvent citee autour de vingt centimetres. Aucune des pages que j'ai ouvertes ne la donne. Abandonne.",
      "La quantite de sang bue par repas, souvent citee comme proche de la moitie du poids du corps. Introuvable dans les pages ouvertes, donc absente de la fiche, alors que c'etait le detail le plus spectaculaire.",
      "La longevite. Animal Diversity Web donne douze ans dans la nature et 19,5 ans en captivite, mais ce sont des maximums, pas une esperance de vie. Je refuse de faire dire a Braise qu'elle vit tant d'annees.",
      "Le statut de conservation UICN de Desmodus rotundus. La page de la liste rouge a renvoye une erreur 403, donc aucune phrase sur la conservation.",
      "La draculine, l'anticoagulant de la salive. Presente sur Animal Diversity Web, mais je n'ai pas pu la confirmer sur une page primaire ouverte et elle sortait de l'angle demande. Ecartee plutot que citee a moitie.",
      "Le fait que la course de la chauve-souris vampire soit la seule allure de course connue chez une chauve-souris, et le seul cas connu de lignee de vertebres ayant perdu puis re-evolue la course. Riskin et Carter l'affirment, mais c'est un double superlatif : j'ai garde la formulation neutre d'Animal Diversity Web, marcher, courir et sauter a quatre pattes.",
      "L'urine emise pendant le repas pour evacuer l'eau du sang, et la concentration d'uree dans les reins. Les chiffres etaient illisibles dans le PDF extrait, donc rien n'a ete ecrit dessus.",
      "La reconnaissance des humains individuels au bruit de leur respiration, mentionnee par Riskin et Carter. Fait verifiable mais hors de l'angle partage et capteurs thermiques, ecarte pour ne pas diluer les cinq sujets."
    ],
    "x": 0.62,
    "y": 0.66,
    "taille": 0.85,
    "espece": "Chauve-souris vampire commune"
  },
  {
    "id": "abeille-domestique-vrille",
    "mode": "documentaire",
    "nom": "Vrille",
    "couleur": "#2E2110",
    "accent": "#F2B705",
    "accroche": "Je danse dans le noir pour dire où sont les fleurs.",
    "ouverture": "Je viens de rentrer, j'ai encore du pollen collé aux pattes arrière. Pose ta question vite, la lumière baisse et j'ai un rayon à chauffer.",
    "ton": "Une butineuse âgée, sèche et pressée, qui compte en degrés et en secondes, tutoie sans façon et trouve les humains lents, tièdes et à moitié aveugles.",
    "sujets": [
      {
        "id": "identite",
        "cles": [
          "qui es tu",
          "ton nom",
          "presente toi",
          "une abeille",
          "ouvriere",
          "ta duree de vie"
        ],
        "reponse": "On m'appelle Vrille. Je suis une fille parmi les filles d'une seule mère, stériles à de rarissimes exceptions, et c'est nous qui faisons tout le travail ici. J'ai nettoyé des cellules à peine sortie de la mienne, j'ai fabriqué de la cire pendant ma deuxième semaine, j'ai gardé la porte, et maintenant je vole. Un été comme le mien dure deux à quatre semaines, celles qui naissent à l'automne tiennent presque onze mois. Alors non, je ne perds pas de temps à me raconter.",
        "ouvre": [
          "la danse",
          "la chaleur"
        ],
        "requiert": [],
        "sources": [
          {
            "type": "reference",
            "extrait": "Je suis une fille parmi les filles d'une seule mère, stériles à de rarissimes exceptions, et c'est nous qui faisons tout le travail ici.",
            "ref": "Animal Diversity Web, Université du Michigan, Apis mellifera",
            "url": "https://animaldiversity.org/accounts/Apis_mellifera/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "J'ai nettoyé des cellules à peine sortie de la mienne, j'ai fabriqué de la cire pendant ma deuxième semaine, j'ai gardé la porte, et maintenant je vole.",
            "ref": "Animal Diversity Web, Université du Michigan, Apis mellifera",
            "url": "https://animaldiversity.org/accounts/Apis_mellifera/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Un été comme le mien dure deux à quatre semaines, celles qui naissent à l'automne tiennent presque onze mois.",
            "ref": "Animal Diversity Web, Université du Michigan, Apis mellifera",
            "url": "https://animaldiversity.org/accounts/Apis_mellifera/",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "la danse",
        "cles": [
          "la danse",
          "danse fretillante",
          "comment tu indiques",
          "comment vous parlez",
          "frelilement",
          "le rayon"
        ],
        "reponse": "Dans le noir du rayon, je marche droit en secouant l'abdomen, et l'angle entre le haut et ma course donne la direction de la fleur par rapport au soleil. Mes soeurs ne me regardent pas, elles se placent de côté et tendent leurs antennes contre mon corps pour rester en contact. Ce qu'elles recueillent, ce sont mes secousses lentes, entre quinze et vingt-cinq par seconde, et le bruit plus aigu de mes ailes autour de deux cent soixante-cinq. Elles écoutent avec un organe logé dans l'antenne, pas avec les yeux. Ici personne ne voit rien: on se parle en tremblant.",
        "ouvre": [
          "la distance"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "l'angle entre le haut et ma course donne la direction de la fleur par rapport au soleil",
            "ref": "Insects (MDPI), Neuroethology of the Waggle Dance: How Followers Interact with the Waggle Dancer and Detect Spatial Information",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6835826/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "elles se placent de côté et tendent leurs antennes contre mon corps pour rester en contact",
            "ref": "Insects (MDPI), Neuroethology of the Waggle Dance: How Followers Interact with the Waggle Dancer and Detect Spatial Information",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6835826/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "mes secousses lentes, entre quinze et vingt-cinq par seconde, et le bruit plus aigu de mes ailes autour de deux cent soixante-cinq",
            "ref": "Insects (MDPI), Neuroethology of the Waggle Dance: How Followers Interact with the Waggle Dancer and Detect Spatial Information",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6835826/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Elles écoutent avec un organe logé dans l'antenne, pas avec les yeux.",
            "ref": "Insects (MDPI), Neuroethology of the Waggle Dance: How Followers Interact with the Waggle Dancer and Detect Spatial Information",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6835826/",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "la distance",
        "cles": [
          "la distance",
          "combien de metres",
          "c est loin",
          "la duree de ta course",
          "tu comptes"
        ],
        "reponse": "Plus la fleur est loin, plus ma course frétillante dure longtemps: c'est la durée qui porte le chemin. Au début c'est presque régulier, tant de secousses pour tant de chemin. Mais plus le trajet s'allonge, moins j'en rajoute: passé le millier de mètres ma course s'étire à peine. Tant qu'ils ne nous ont pas fait voler aussi loin, ils n'ont rien vu venir. Ils croyaient aussi que ma danse valait surtout quand les fleurs sont fugaces; c'est l'inverse, elle rapporte le plus quand le coin tient plusieurs jours.",
        "ouvre": [
          "les couleurs"
        ],
        "requiert": [
          "la danse"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "Plus la fleur est loin, plus ma course frétillante dure longtemps: c'est la durée qui porte le chemin.",
            "ref": "Scientific Reports, Honey bees communicate distance via non-linear waggle duration functions",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8029670/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Ils croyaient aussi que ma danse valait surtout quand les fleurs sont fugaces; c'est l'inverse, elle rapporte le plus quand le coin tient plusieurs jours.",
            "ref": "PubMed Central, Dancing Bees Improve Colony Foraging Success as Long-Term Benefits Outweigh Short-Term Costs",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4139316/",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "la chaleur",
        "cles": [
          "la chaleur",
          "la temperature",
          "le froid",
          "l hiver",
          "le couvain",
          "vous ventilez"
        ],
        "reponse": "Le couvain ne tolère pas l'à peu près: nous tenons son nid entre trente deux et trente six degrés. Je chauffe avec mes muscles de vol, sans décoller, et une soeur de moins de deux jours n'en est pas encore capable. Quand ça monte trop, nous ventilons des ailes et nous étalons de l'eau sur les rayons pour que l'excédent parte en vapeur. Personne ne me donne d'ordre. Quand mes soeurs me mendient à boire plus souvent que d'habitude, je repars chercher de l'eau, sans savoir moi-meme si c'est leur insistance ou ma propre soif qui me pousse. L'hiver, la grappe se serre, celles du manteau font la couverture et celles du coeur font le feu; il faut les deux, jamais l'une seule.",
        "ouvre": [
          "les couleurs"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "nous tenons son nid entre trente deux et trente six degrés",
            "ref": "PLoS ONE, Honeybee Colony Thermoregulation: Regulatory Mechanisms and Contribution of Individuals in Dependence on Age, Location and Thermal Stress",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2813292/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Je chauffe avec mes muscles de vol, sans décoller, et une soeur de moins de deux jours n'en est pas encore capable.",
            "ref": "PLoS ONE, Honeybee Colony Thermoregulation: Regulatory Mechanisms and Contribution of Individuals in Dependence on Age, Location and Thermal Stress",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2813292/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "nous ventilons des ailes et nous étalons de l'eau sur les rayons pour que l'excédent parte en vapeur",
            "ref": "PLoS ONE, Honeybee Colony Thermoregulation: Regulatory Mechanisms and Contribution of Individuals in Dependence on Age, Location and Thermal Stress",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2813292/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "celles du manteau font la couverture et celles du coeur font le feu; il faut les deux, jamais l'une seule",
            "ref": "Journal of Experimental Biology, Endothermic heat production in honeybee winter clusters",
            "url": "https://journals.biologists.com/jeb/article/206/2/353/13914/Endothermic-heat-production-in-honeybee-winter",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "les couleurs",
        "cles": [
          "les couleurs",
          "ta vue",
          "l ultraviolet",
          "les fleurs",
          "ce que tu vois",
          "tes yeux"
        ],
        "reponse": "Vos fleurs ne sont pas celles que je vois. J'ai trois sortes de capteurs dans l'oeil. Ceux qui m'ont ouverte pour les mesurer parlent de trois pointes: trois cent quarante quatre, quatre cent trente six, cinq cent quarante quatre. Ce sont leurs chiffres, pas les miens: moi je vois trois familles de lumière, voilà tout. L'ultraviolet, je le vois et vous non; en revanche vous êtes bien plus sensibles que moi au rouge. Beaucoup de corolles portent un centre qui avale cet ultraviolet, une cible sombre qui dit exactement où descendre. Pour moi ce n'est pas un motif secret, c'est une couleur de plus, voilà tout.",
        "ouvre": [],
        "requiert": [
          "la distance",
          "la chaleur"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "L'ultraviolet, je le vois et vous non; en revanche vous êtes bien plus sensibles que moi au rouge.",
            "ref": "Lunau, Bees, flowers and UV, Plant Biology",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12477309/",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Beaucoup de corolles portent un centre qui avale cet ultraviolet, une cible sombre qui dit exactement où descendre.",
            "ref": "Lunau, Bees, flowers and UV, Plant Biology",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12477309/",
            "consulte": "2026-09-06"
          }
        ]
      }
    ],
    "pagesOuvertes": [
      "https://animaldiversity.org/accounts/Apis_mellifera/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC2813292/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC3498261/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC6835826/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC8029670/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC4139316/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC12477309/",
      "https://journals.biologists.com/jeb/article/206/2/353/13914/Endothermic-heat-production-in-honeybee-winter",
      "https://journals.biologists.com/jeb/article/219/14/2156/15394/The-behavioral-regulation-of-thirst-water"
    ],
    "faitsEcartes": [
      "Karl von Frisch, son prix Nobel de 1973 et la date de 1946 pour sa démonstration de la danse: le nom n'apparaissait que dans des résumés de recherche et des pages tertiaires, aucune page institutionnelle ouverte ne me l'a confirmé, donc la réponse ne le nomme pas.",
      "La conversion souvent citée de 75 millisecondes de frétillement pour 100 mètres supplémentaires: elle venait d'un extrait de résultat de recherche, pas d'une page que j'ai réellement ouverte.",
      "La taille d'une colonie, souvent donnée autour de 50 000 ou 60 000 individus: Animal Diversity Web ne donne pas de chiffre, aucune autre page ouverte non plus, donc aucun nombre d'abeilles n'est cité.",
      "Les températures de la grappe d'hiver, 18 degrés sans couvain et 34,5 à 36,7 degrés avec couvain: ces valeurs ne venaient que de blogs apicoles, et le résumé du Journal of Experimental Biology accessible ne portait aucun chiffre. Le sujet chaleur parle donc de manteau et de coeur sans température d'hiver.",
      "L'article PNAS 2026 sur la façon dont l'audience façonne le contenu informatif de la danse: la page a renvoyé une erreur 403, je n'ai pas pu l'ouvrir, la nuance qu'il apporte n'est pas utilisée.",
      "Le débat sur le caractère adaptatif ou non de l'erreur angulaire de la danse (article ScienceDirect): page fermée, donc écarté.",
      "Les tailles précises des castes (ouvrière 10 à 15 mm, reine 18 à 20 mm, mâle 15 à 17 mm) étaient sourçables mais je les ai retirées de la réponse: une abeille ne se mesure pas en millimètres, et je préférais ne pas transformer un fait sourcé en récitation de fiche.",
      "L'idée courante que les abeilles sont aveugles au rouge: la source dit que les humains sont plus sensibles au rouge que les abeilles, pas que les abeilles ne le voient pas. La phrase a été affaiblie pour coller à la source.",
      "Le nombre d'ommatidies de l'oeil composé et la vitesse de battement d'ailes: aucune page ouverte ne les donnait, abandonnés.",
      "L'affirmation que peu de suiveuses retrouvent réellement la fleur annoncée: la page de neuroéthologie ouverte dit le contraire de ce que j'attendais, donc l'idée est écartée au lieu d'être forcée."
    ],
    "x": 0.78,
    "y": 0.55,
    "taille": 0.8,
    "espece": "Abeille domestique"
  },
  {
    "id": "poulpe-mimetique",
    "pays": ["IDN"],
    "mode": "documentaire",
    "nom": "Ondine",
    "couleur": "#3A2417",
    "accent": "#F2DCA8",
    "accroche": "Trois de mes formes sont tenues pour sûres. Les autres, on les a seulement vues.",
    "ouverture": "Vous venez chercher la liste de tout ce que j'imite. Je vais vous donner l'autre liste, celle de ce qui a vraiment été vérifié: elle est plus courte et elle tient debout. Approchez du sable, je ne bougerai pas tout de suite. Et comptez avec moi, c'est la seule chose que je fais sans me tromper.",
    "ton": "Elle parle sec, elle compte tout, elle sépare toujours ce qui a été observé de ce qui a été conclu, et elle trouve les humains bien pressés d'affirmer.",
    "sujets": [
      {
        "id": "identite",
        "cles": [
          "qui es-tu",
          "ton nom",
          "presente toi",
          "poulpe mimetique",
          "ton corps"
        ],
        "reponse": "On m'a trouvée en 1998, au large de Sulawesi, et j'étais alors nouvelle pour la science. Mon envergure, bras compris, monte jusqu'à soixante centimètres. Je porte un anneau blanc en forme de larme au milieu du manteau et une tache blanche en U vers l'arrière. Mes bras sont longs et étroits, et ils peuvent se détacher à un endroit précis, près de la base. Les gardiens qui écrivent ne m'ont donné un nom qu'en 2005, sept ans après m'avoir vue.",
        "ouvre": [
          "le-fond-de-sable",
          "les-trois-formes"
        ],
        "requiert": [],
        "sources": [
          {
            "type": "reference",
            "extrait": "On m'a trouvée en 1998, au large de Sulawesi, et j'étais alors nouvelle pour la science.",
            "ref": "Norman, Finn et Tregenza, Dynamic mimicry in an Indo-Malayan octopus, Proceedings of the Royal Society B, 268(1478), 1755-1758 (2001)",
            "url": "https://eprints.whiterose.ac.uk/91/1/tregenzat5.pdf",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Mon envergure, bras compris, monte jusqu'à soixante centimètres",
            "ref": "Norman, Finn et Tregenza, Dynamic mimicry in an Indo-Malayan octopus, Proceedings of the Royal Society B, 268(1478), 1755-1758 (2001)",
            "url": "https://eprints.whiterose.ac.uk/91/1/tregenzat5.pdf",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Je porte un anneau blanc en forme de larme au milieu du manteau et une tache blanche en U vers l'arrière. Mes bras sont longs et étroits, et ils peuvent se détacher à un endroit précis, près de la base.",
            "ref": "Norman et Hochberg, The Mimic Octopus (Thaumoctopus mimicus n. gen. et sp.), a new octopus from the tropical Indo-West Pacific, Molluscan Research 25(2), 57-70 (2005)",
            "url": "https://www.mapress.com/mrs/article/view/mr.25.2.1",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Les gardiens qui écrivent ne m'ont donné un nom qu'en 2005",
            "ref": "World Register of Marine Species (WoRMS), Thaumoctopus mimicus M. Norman & Hochberg, 2005",
            "url": "https://www.marinespecies.org/aphia.php?p=taxlist&tName=Thaumoctopus+mimicus",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "le-fond-de-sable",
        "cles": [
          "ou vis-tu",
          "ton habitat",
          "le fond de sable",
          "la profondeur",
          "les embouchures"
        ],
        "reponse": "Je vis sur la vase et le sable, devant des embouchures de rivières, dans une eau de deux à douze mètres là où on m'a suivie. Le fond y est criblé de terriers, de tunnels et de monticules, parce qu'il grouille de vers, d'échinodermes, de crustacés et de poissons. Je sors en plein jour, à découvert, sous les yeux des prédateurs qui passent en pleine eau. Quand certains chasseurs approchent, comme la carangue, je ne joue à rien du tout et je me confonds avec le fond. On a trouvé une seule d'entre nous bien plus loin, à l'île Lizard sur la Grande Barrière, à marée basse, un jour de juin 2012: une, ce qui suffit à dire que ma répartition est plus large que ce qui était écrit.",
        "ouvre": [
          "la-chasse"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "Je vis sur la vase et le sable, devant des embouchures de rivières, dans une eau de deux à douze mètres là où on m'a suivie.",
            "ref": "Norman, Finn et Tregenza, Dynamic mimicry in an Indo-Malayan octopus, Proceedings of the Royal Society B, 268(1478), 1755-1758 (2001)",
            "url": "https://eprints.whiterose.ac.uk/91/1/tregenzat5.pdf",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Le fond y est criblé de terriers, de tunnels et de monticules, parce qu'il grouille de vers, d'échinodermes, de crustacés et de poissons.",
            "ref": "Norman, Finn et Tregenza, Dynamic mimicry in an Indo-Malayan octopus, Proceedings of the Royal Society B, 268(1478), 1755-1758 (2001)",
            "url": "https://eprints.whiterose.ac.uk/91/1/tregenzat5.pdf",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Je sors en plein jour, à découvert, sous les yeux des prédateurs qui passent en pleine eau. Quand certains chasseurs approchent, comme la carangue, je ne joue à rien du tout et je me confonds avec le fond.",
            "ref": "Norman, Finn et Tregenza, Dynamic mimicry in an Indo-Malayan octopus, Proceedings of the Royal Society B, 268(1478), 1755-1758 (2001)",
            "url": "https://eprints.whiterose.ac.uk/91/1/tregenzat5.pdf",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "On a trouvé une seule d'entre nous bien plus loin, à l'île Lizard sur la Grande Barrière, à marée basse, un jour de juin 2012: une, ce qui suffit à dire que ma répartition est plus large que ce qui était écrit.",
            "ref": "Marine Biodiversity Records (Cambridge University Press), Documentation of the mimic octopus Thaumoctopus mimicus in the Great Barrier Reef, Australia",
            "url": "https://www.cambridge.org/core/journals/marine-biodiversity-records/article/abs/documentation-of-the-mimic-octopus-thaumoctopus-mimicus-in-the-great-barrier-reef-australia/6F470A146FF7BD32F1CDAC5C1F3DFFA0",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "la-chasse",
        "cles": [
          "ta chasse",
          "que manges-tu",
          "les tunnels",
          "ta nourriture",
          "sous le sable"
        ],
        "reponse": "Je chasse en rampant, terne et brune, en enfonçant la pointe de mes bras dans les trous, et j'ouvre la membrane tendue entre eux pour bloquer ce qui fuit. Ce que j'attrape, ce sont de petits poissons et des crustacés, et beaucoup vivent sous le sable plutôt que dessus. Il m'arrive d'entrer entièrement dans une galerie et de ressortir par un autre trou, jusqu'à un mètre du point d'entrée. Ceux qui m'ont regardée ont écrit qu'ils ne connaissaient aucun autre poulpe qui chasse ainsi sous le sable. Ce n'est pas la même chose que dire qu'aucun ne le fait, et la différence compte.",
        "ouvre": [
          "ce-qui-est-incertain"
        ],
        "requiert": [
          "le-fond-de-sable"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "Je chasse en rampant, terne et brune, en enfonçant la pointe de mes bras dans les trous, et j'ouvre la membrane tendue entre eux pour bloquer ce qui fuit.",
            "ref": "Norman, Finn et Tregenza, Dynamic mimicry in an Indo-Malayan octopus, Proceedings of the Royal Society B, 268(1478), 1755-1758 (2001)",
            "url": "https://eprints.whiterose.ac.uk/91/1/tregenzat5.pdf",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Ce que j'attrape, ce sont de petits poissons et des crustacés",
            "ref": "Norman et Hochberg, The Mimic Octopus (Thaumoctopus mimicus n. gen. et sp.), a new octopus from the tropical Indo-West Pacific, Molluscan Research 25(2), 57-70 (2005)",
            "url": "https://www.mapress.com/mrs/article/view/mr.25.2.1",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Il m'arrive d'entrer entièrement dans une galerie et de ressortir par un autre trou, jusqu'à un mètre du point d'entrée.",
            "ref": "Norman, Finn et Tregenza, Dynamic mimicry in an Indo-Malayan octopus, Proceedings of the Royal Society B, 268(1478), 1755-1758 (2001)",
            "url": "https://eprints.whiterose.ac.uk/91/1/tregenzat5.pdf",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Ceux qui m'ont regardée ont écrit qu'ils ne connaissaient aucun autre poulpe qui chasse ainsi sous le sable.",
            "ref": "Norman, Finn et Tregenza, Dynamic mimicry in an Indo-Malayan octopus, Proceedings of the Royal Society B, 268(1478), 1755-1758 (2001)",
            "url": "https://eprints.whiterose.ac.uk/91/1/tregenzat5.pdf",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "les-trois-formes",
        "cles": [
          "tes imitations",
          "les trois formes",
          "la sole",
          "le serpent de mer",
          "le poisson-lion"
        ],
        "reponse": "Trois de mes formes seulement sont tenues pour sûres par ceux qui m'ont filmée: la sole, le poisson-lion et le serpent de mer annelé. Pour la sole, je ramène tous mes bras en un coin en forme de feuille, le manteau traînant derrière la tête, et j'ondule en nageant entre les monticules. Pour le poisson-lion, je nage juste au-dessus du fond, les bras traînant autour du corps, et nous n'avons été que quatre à être vues ainsi. Pour le serpent, j'enfile six bras dans un trou et j'en dresse deux en sens opposés, annelés, enroulés, ondulants, et cela n'est arrivé que quatre fois, chaque fois en réaction à l'attaque de petites demoiselles territoriales. Deux d'entre nous ont montré les trois formes. Pour la seule nage de sole, d'autres ont préféré parler plus tard d'une imitation imparfaite et facultative plutôt que d'une copie.",
        "ouvre": [
          "ce-qui-est-incertain"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "Trois de mes formes seulement sont tenues pour sûres par ceux qui m'ont filmée: la sole, le poisson-lion et le serpent de mer annelé.",
            "ref": "Norman, Finn et Tregenza, Dynamic mimicry in an Indo-Malayan octopus, Proceedings of the Royal Society B, 268(1478), 1755-1758 (2001)",
            "url": "https://eprints.whiterose.ac.uk/91/1/tregenzat5.pdf",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "je ramène tous mes bras en un coin en forme de feuille, le manteau traînant derrière la tête, et j'ondule en nageant entre les monticules",
            "ref": "Norman, Finn et Tregenza, Dynamic mimicry in an Indo-Malayan octopus, Proceedings of the Royal Society B, 268(1478), 1755-1758 (2001)",
            "url": "https://eprints.whiterose.ac.uk/91/1/tregenzat5.pdf",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "je nage juste au-dessus du fond, les bras traînant autour du corps, et nous n'avons été que quatre à être vues ainsi",
            "ref": "Norman, Finn et Tregenza, Dynamic mimicry in an Indo-Malayan octopus, Proceedings of the Royal Society B, 268(1478), 1755-1758 (2001)",
            "url": "https://eprints.whiterose.ac.uk/91/1/tregenzat5.pdf",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "j'enfile six bras dans un trou et j'en dresse deux en sens opposés, annelés, enroulés, ondulants, et cela n'est arrivé que quatre fois, chaque fois en réaction à l'attaque de petites demoiselles territoriales",
            "ref": "Norman, Finn et Tregenza, Dynamic mimicry in an Indo-Malayan octopus, Proceedings of the Royal Society B, 268(1478), 1755-1758 (2001)",
            "url": "https://eprints.whiterose.ac.uk/91/1/tregenzat5.pdf",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Deux d'entre nous ont montré les trois formes",
            "ref": "Norman, Finn et Tregenza, Dynamic mimicry in an Indo-Malayan octopus, Proceedings of the Royal Society B, 268(1478), 1755-1758 (2001)",
            "url": "https://eprints.whiterose.ac.uk/91/1/tregenzat5.pdf",
            "consulte": "2026-09-06"
          }
        ]
      },
      {
        "id": "ce-qui-est-incertain",
        "cles": [
          "ce qui est incertain",
          "les doutes",
          "les anemones",
          "la meduse",
          "ce qui n est pas prouve"
        ],
        "reponse": "Le reste a été vu, mais il n'a pas été conclu, et je tiens à cette distinction. Assise sur un monticule, je lève tous mes bras au-dessus du corps, chacun tenu en zigzag, et il est seulement possible que cela imite les grandes anémones de sable. Une grande femelle de soixante centimètres est montée jusqu'à la surface depuis quatre mètres, puis est redescendue lentement, les bras étalés et ondulants, et cela peut imiter une grande méduse, sans plus. On a aussi écrit que ces ressemblances pourraient venir d'une évolution convergente, et que mes numéros pourraient être des parades nuptiales prises pour des imitations. Neuf adultes, seize jours, plus de six heures de film: voilà sur quoi tout cela repose, et j'aime mieux que vous le sachiez.",
        "ouvre": [],
        "requiert": [
          "les-trois-formes"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "Assise sur un monticule, je lève tous mes bras au-dessus du corps, chacun tenu en zigzag, et il est seulement possible que cela imite les grandes anémones de sable.",
            "ref": "Norman, Finn et Tregenza, Dynamic mimicry in an Indo-Malayan octopus, Proceedings of the Royal Society B, 268(1478), 1755-1758 (2001)",
            "url": "https://eprints.whiterose.ac.uk/91/1/tregenzat5.pdf",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Une grande femelle de soixante centimètres est montée jusqu'à la surface depuis quatre mètres, puis est redescendue lentement, les bras étalés et ondulants, et cela peut imiter une grande méduse, sans plus.",
            "ref": "Norman, Finn et Tregenza, Dynamic mimicry in an Indo-Malayan octopus, Proceedings of the Royal Society B, 268(1478), 1755-1758 (2001)",
            "url": "https://eprints.whiterose.ac.uk/91/1/tregenzat5.pdf",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "On a aussi écrit que ces ressemblances pourraient venir d'une évolution convergente, et que mes numéros pourraient être des parades nuptiales prises pour des imitations.",
            "ref": "Norman, Finn et Tregenza, Dynamic mimicry in an Indo-Malayan octopus, Proceedings of the Royal Society B, 268(1478), 1755-1758 (2001)",
            "url": "https://eprints.whiterose.ac.uk/91/1/tregenzat5.pdf",
            "consulte": "2026-09-06"
          },
          {
            "type": "reference",
            "extrait": "Neuf adultes, seize jours, plus de six heures de film: voilà sur quoi tout cela repose",
            "ref": "Norman, Finn et Tregenza, Dynamic mimicry in an Indo-Malayan octopus, Proceedings of the Royal Society B, 268(1478), 1755-1758 (2001)",
            "url": "https://eprints.whiterose.ac.uk/91/1/tregenzat5.pdf",
            "consulte": "2026-09-06"
          }
        ]
      }
    ],
    "pagesOuvertes": [
      "https://eprints.whiterose.ac.uk/91/1/tregenzat5.pdf",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC1088805/",
      "https://www.mapress.com/mrs/article/view/mr.25.2.1",
      "https://academic.oup.com/biolinnean/article-abstract/101/1/68/2450646",
      "https://www.marinespecies.org/aphia.php?p=taxlist&tName=Thaumoctopus+mimicus",
      "https://www.cambridge.org/core/journals/marine-biodiversity-records/article/abs/documentation-of-the-mimic-octopus-thaumoctopus-mimicus-in-the-great-barrier-reef-australia/6F470A146FF7BD32F1CDAC5C1F3DFFA0"
    ],
    "faitsEcartes": [
      "Le chiffre repete partout selon lequel le poulpe mimetique imiterait 13 ou 15 especes. Aucune des pages primaires ouvertes ne donne ce total. L'article de Norman, Finn et Tregenza 2001 dit exactement l'inverse : les auteurs ne se declarent surs que de trois modeles. Ecarte.",
      "Les imitations souvent citees en plus des trois sures : crabe geant, raie, crevette-mante, etoile de mer, poisson plat venimeux divers. Aucune source primaire ouverte ne les documente. Ecarte.",
      "Le statut UICN \"Preoccupation mineure\" pour Thaumoctopus mimicus. Il apparaissait dans un resume de moteur de recherche, mais je n'ai pas pu ouvrir de fiche d'evaluation UICN. Ecarte faute de page reellement ouverte.",
      "La duree de vie de l'espece. Rien trouve dans les sources primaires ouvertes. Ecarte, et surtout pas remplacee par une longevite de poulpe generique.",
      "La causalite seduisante \"j'imite le serpent de mer parce que le serpent de mer mange les poissons territoriaux qui m'attaquent\". L'article 2001 la propose mais l'appuie sur une observation personnelle d'un auteur, sans donnee. Gardee comme correlation d'observation, jamais comme cause.",
      "Le cas de Macrotritopus defilippi dans l'Atlantique, qui imite lui aussi un poisson plat et aurait ete un excellent contrepoint a l'unicite du poulpe mimetique. Toutes les versions integrales (journals.uchicago.edu, PubMed, depot MBL/WHOI) m'ont renvoye une erreur 403 ou une coupure de connexion. Je n'avais que des extraits de moteur de recherche. Ecarte.",
      "La fourchette de profondeur 0,5 a 37 m donnee par la description originale de 2005. Elle est sourcable, mais la melanger avec les 2 a 12 m mesures sur le terrain en 1998-2000 aurait laisse croire a une seule et meme observation. J'ai garde la fourchette de terrain et signale qu'elle vaut la ou l'espece a ete suivie.",
      "L'affirmation forte que l'animal \"choisit\" sa forme d'imitation. Le texte de 2001 ecrit \"suggest\" et \"suggests\", pas une demonstration. Ecarte au profit du seul fait observe : la posture de serpent n'est apparue qu'apres une attaque.",
      "L'etude semiotique de 2019 sur \"mimic ou mimetic octopus\", qui critique justement l'interpretation mimetique. Redirection d'authentification chez l'editeur, page jamais ouverte. Ecarte."
    ],
    "x": 0.9,
    "y": 0.68,
    "taille": 1.0,
    "espece": "Poulpe mimétique"
  },
  {
    "id": "durian",
    "pays": ["MYS"],
    "mode": "documentaire",
    "type": "fruit",
    "nom": "Le Durian",
    "couleur": "#7C8C2E",
    "accent": "#E8C05A",
    "accroche": "Tout le monde parle de mon odeur. Presque personne ne l'a mesuree.",
    "ouverture": "Je suis lourd, couvert d'epines, et j'arrive toujours precede de ma reputation. On me raconte au superlatif depuis si longtemps que j'ai pris l'habitude de repondre avec des chiffres. Posez la question, je vous donne la mesure et pas la legende.",
    "ton": "Voix dense et un peu blindee, comme mon ecorce. Je parle lentement, je corrige les exagerations sans m'enerver, et je prefere une valeur chiffree a un adjectif. Ironie seche quand on me traite de monstre, precision de laboratoire quand on me demande pourquoi.",
    "sujets": [
      {
        "id": "identite",
        "cles": [
          "durian",
          "durio",
          "zibethinus",
          "identite",
          "presentation",
          "son nom",
          "famille",
          "botanique",
          "espece",
          "arbre"
        ],
        "reponse": "Je m'appelle Durio zibethinus, nomme par Linne, et je suis range dans la famille des Malvaceae, ordre des Malvales. Les genomiciens me presentent comme une plante tropicale d'Asie du Sud-Est reconnaissable a son fruit massif et couvert d'epines. En Malaisie, on me donne le titre de roi des fruits, et je le porte sans discuter. Mais la premiere chose qu'on remarque chez moi n'est jamais ma forme.",
        "ouvre": [
          "odeur"
        ],
        "requiert": [],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "GBIF, API Species Search, Durio zibethinus",
            "url": "https://api.gbif.org/v1/species/search?q=Durio%20zibethinus&rank=SPECIES&limit=3",
            "consulte": "2026-09-07",
            "citation_source": "Durio zibethinus L.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Teh et al., The draft genome of tropical fruit durian (Durio zibethinus), Nature Genetics 2017",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=28991254&rettype=abstract&retmode=text",
            "consulte": "2026-09-07",
            "citation_source": "Durian (Durio zibethinus) is a Southeast Asian tropical plant known for its hefty, spine-covered fruit",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), A review on the nutritional, medicinal, molecular and genome attributes of Durian, Bioinformation 2018",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=30237671&rettype=abstract&retmode=text",
            "consulte": "2026-09-07",
            "citation_source": "In Malaysia, durian is recognised as the King of fruits",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "odeur",
        "cles": [
          "odeur",
          "odorant",
          "sentir",
          "puant",
          "parfum",
          "arome",
          "soufre",
          "soufres",
          "thiol",
          "molecules",
          "composes",
          "chimie"
        ],
        "reponse": "Une analyse par dilution d'extrait d'arome, menee sur la variete Monthong, a trouve 44 composes odorants dans ma chair, dont 41 ont pu etre identifies. Quatorze de ces 41 portent une architecture soufree du type alcane-1,1-dithiol ou 1-(alkylsulfanyl)alcane-1-thiol. Puis on a calcule leur puissance relative, et c'est la que personne ne me suit. Le compose le plus puissant qu'on ait mesure chez moi n'est pas soufre : c'est un ester fruite, l'ethyl 2-methylbutanoate, a 1700000 de valeur d'activite odorante. Mon ethanethiol, l'oignon pourri dont tout le monde parle, arrive derriere, a 480000. On me resume par ma pire molecule et ce n'est meme pas la premiere.",
        "ouvre": [
          "precurseur",
          "culture"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Li, Schieberle, Steinhaus, Characterization of the major odor-active compounds in Thai durian, J. Agric. Food Chem. 2012",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=23088286&rettype=abstract&retmode=text",
            "consulte": "2026-09-07",
            "citation_source": "resulted in 44 odor-active compounds in the flavor dilution (FD) factor range of 1-16384, 41 of which could be identified",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Li, Schieberle, Steinhaus, Characterization of the major odor-active compounds in Thai durian, J. Agric. Food Chem. 2012",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=23088286&rettype=abstract&retmode=text",
            "consulte": "2026-09-07",
            "citation_source": "Fourteen of the 41 characterized durian odorants showed an alkane-1,1-dithiol, 1-(alkylsulfanyl)alkane-1-thiol, or 1,1-bis(alkylsulfanyl)alkane structure.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Li, Schieberle, Steinhaus, Insights into the Key Compounds of Durian Pulp Odor, J. Agric. Food Chem. 2017",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=28024392&rettype=abstract&retmode=text",
            "consulte": "2026-09-07",
            "citation_source": "ethanethiol (rotten onion; OAV 480000)",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "precurseur",
        "cles": [
          "precurseur",
          "ethionine",
          "methionine",
          "ethanethiol",
          "murir",
          "maturation",
          "fabrique",
          "origine",
          "stock",
          "acide amine"
        ],
        "reponse": "Mon odeur ne surgit pas de nulle part, elle a un stock en amont. Des chimistes ont confirme la presence d'ethionine dans ma pulpe par chromatographie liquide couplee a la spectrometrie de masse en tandem. Ils l'ont dosee entre 621 et 9600 microgrammes par kilo, sous mes concentrations de methionine, mesurees de 16100 a 30200. Et pendant que je murissais, cette ethionine montait en meme temps que mon ethanethiol. Je ne sens pas fort par caprice, je fabrique.",
        "ouvre": [
          "genome"
        ],
        "requiert": [
          "odeur"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Fischer et Steinhaus, Identification of an Important Odorant Precursor in Durian, J. Agric. Food Chem. 2020",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=31825619&rettype=abstract&retmode=text",
            "consulte": "2026-09-07",
            "citation_source": "A targeted search by liquid chromatography-tandem mass spectrometry allowed us to confirm the presence of ethionine in durian pulp.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Fischer et Steinhaus, Identification of an Important Odorant Precursor in Durian, J. Agric. Food Chem. 2020",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=31825619&rettype=abstract&retmode=text",
            "consulte": "2026-09-07",
            "citation_source": "Concentrations (621-9600 μg/kg) in the same range but below the methionine concentrations (16100-30200 μg/kg).",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Fischer et Steinhaus, Identification of an Important Odorant Precursor in Durian, J. Agric. Food Chem. 2020",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=31825619&rettype=abstract&retmode=text",
            "consulte": "2026-09-07",
            "citation_source": "During fruit ripening, the ethionine concentration increased as well as the ethanethiol concentration.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "genome",
        "cles": [
          "genome",
          "genetique",
          "genes",
          "son adn",
          "sequence",
          "methionine gamma lyase",
          "ethylene",
          "expansion",
          "biologie"
        ],
        "reponse": "On a lu mon genome, et il raconte la meme histoire que mon odeur. On y a trouve une expansion de genes propre au durian sur la MGL, la methionine gamma-lyase, associee a la production de composes soufres volatils. Ces genes MGL et le gene ACS, lie a l'ethylene, sont surexprimes dans le fruit en meme temps que leurs metabolites en aval. Ma maturation et mon parfum avancent donc du meme pas.",
        "ouvre": [
          "culture"
        ],
        "requiert": [
          "precurseur"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Teh et al., The draft genome of tropical fruit durian (Durio zibethinus), Nature Genetics 2017",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=28991254&rettype=abstract&retmode=text",
            "consulte": "2026-09-07",
            "citation_source": "durian-specific gene expansions in MGL (methionine γ-lyase), associated with production of volatile sulfur compounds (VSCs)",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Teh et al., The draft genome of tropical fruit durian (Durio zibethinus), Nature Genetics 2017",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=28991254&rettype=abstract&retmode=text",
            "consulte": "2026-09-07",
            "citation_source": "MGL and the ethylene-related gene ACS (aminocyclopropane-1-carboxylic acid synthase) were upregulated in fruits concomitantly with their downstream metabolites (VSCs and ethylene)",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "culture",
        "cles": [
          "culture",
          "cultiver",
          "verger",
          "vergers",
          "agriculture",
          "pollinisation",
          "chauve souris",
          "roussette",
          "mekong",
          "vietnam",
          "recolte",
          "engrais"
        ],
        "reponse": "On me cultive, mais je ne me feconde pas tout seul. Sur l'ile de Tioman, en Malaisie peninsulaire, une etude de mes visiteurs floraux a conclu que seules les chauves-souris avaient des interactions mutualistes avec mes fleurs, et que les roussettes avaient un effet positif sur la formation de mes fruits murs. Quatre arbres, une ile, une saison : c'est une mesure, pas une loi universelle, et je vous la donne avec ses bords. Ailleurs, trois vergers du delta du Mekong vietnamien ont ete suivis de 2022 a 2024. En combinant matiere organique et fertilisation foliaire, on y a fait baisser de plus de 85 pour cent mon taux de desordres physiologiques. Je suis un arbre de verger, entretenu et surveille, pas un fruit sauvage de carte postale.",
        "ouvre": [],
        "requiert": [
          "odeur",
          "genome"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Aziz et al., Pollination by the locally endangered island flying fox enhances fruit production of durian, Ecology and Evolution 2017",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=29152168&rettype=abstract&retmode=text",
            "consulte": "2026-09-07",
            "citation_source": "Only bats had mutualistic interactions with durian flowers",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Aziz et al., Pollination by the locally endangered island flying fox enhances fruit production of durian, Ecology and Evolution 2017",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=29152168&rettype=abstract&retmode=text",
            "consulte": "2026-09-07",
            "citation_source": "Flying foxes had a positive effect on mature fruit set.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Combining Organic and Foliar Fertilization to Enhance Soil Fertility and Mitigate Physiological Disorders of Durian Fruit in the Tropics, Plants 2025",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=40284073&rettype=abstract&retmode=text",
            "consulte": "2026-09-07",
            "citation_source": "This study was conducted in three durian orchards in the Vietnamese Mekong Delta from 2022 to 2024.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Combining Organic and Foliar Fertilization to Enhance Soil Fertility and Mitigate Physiological Disorders of Durian Fruit in the Tropics, Plants 2025",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=40284073&rettype=abstract&retmode=text",
            "consulte": "2026-09-07",
            "citation_source": "Combining OM and FF decreased the PD rate of durian fruit (>85%) compared with the control.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "gout",
        "cles": [
          "gout",
          "gouter",
          "quel gout",
          "ca a quel gout",
          "c est bon",
          "deguster",
          "degustation",
          "saveur"
        ],
        "reponse": "Prenez-en un morceau. Cliquez sur GOUTER, je vous regarde.",
        "ouvre": [],
        "requiert": [],
        "sources": []
      }
    ],
    "gout": {
      "fiction": true,
      "avertissement": "Scene inventee : personne n'a mesure ce gout, ces six personnages sont ecrits, pas des avis.",
      "sequence": {
        "odeur": "Avant meme d'ouvrir la chair, l'odeur remplit la piece. Ce n'est pas une odeur de fruit, elle tient de la cuisine, entre l'oignon et quelque chose de sucre-cuit.",
        "attaque": "La premiere bouchee arrive sucree, sans acidite pour la retenir. Rien ne rafraichit, rien ne coupe le sucre.",
        "corps": "La chair ne se mache presque pas, elle s'ecrase contre le palais. Un gras dense, proche d'un fruit a noyau trop mur, presque une patisserie.",
        "finale": "L'odeur revient en arriere-gout et s'installe. Elle reste bien apres que la bouchee soit avalee, plus longtemps que le gout lui-meme."
      },
      "ancres": [
        "Le sucre rappelle une banane tres mure.",
        "Le gras evoque un flan a la vanille.",
        "L'odeur, elle, ne ressemble a rien d'autre qu'a elle-meme."
      ],
      "reactions": {
        "kesh": {
          "texte": "Je passe un bras dessus avant d'y mettre la bouche. Ce que je percois d'abord, c'est une texture qui colle, pas un gout. Le sucre, je le sens a peine, chez moi il arrive en dernier.",
          "pourquoi": "Je goute avec mes ventouses avant ma bouche, et elles sont faites pour l'amer et l'umami, pas pour le sucre. Ce fruit m'arrive a l'envers de vous."
        },
        "nox": {
          "texte": "Je regarde avant de gouter, toujours. Celui-la ne ressemble a rien que je connaisse, et l'odeur ne m'aide pas a me decider. Une fois passe ce moment, c'est le gras qui domine, pas le sucre.",
          "pourquoi": "Je n'ai jamais rien vu de comparable dans les arbres ou je niche. Ce que je ne reconnais pas, je le teste avec mefiance, morceau par morceau."
        },
        "ada": {
          "texte": "Je l'ai sentie avant meme qu'on l'ouvre. Chez moi, l'odeur ne s'arrete jamais, meme une fois que j'ai fini de macher. C'est elle qui reste le plus longtemps, bien apres le gout.",
          "pourquoi": "Mon odorat domine tout le reste chez moi. Un fruit aussi charge en odeur, je le sens encore longtemps apres vous."
        },
        "mite": {
          "texte": "Je butine vos fleurs depuis toujours, mais personne ne m'avait laissee gouter le fruit avant aujourd'hui. Le sucre, j'en redemande. Le reste, je m'en fiche un peu.",
          "pourquoi": "Je ne mange que du sucre depuis toujours, alors le reste du fruit passe presque inapercu pour moi."
        },
        "givre": {
          "texte": "Je n'ai jamais mache quelque chose comme ca avant. Ca ne ressemble a rien de ce que je connais, du gras, une odeur forte, aucune viande. Je ne saurais meme pas comment vous en parler.",
          "pourquoi": "Mon palais est calibre sur le gras et le froid, pas sur les fruits tropicaux. Chaque comparaison que j'essaie tombe a cote."
        },
        "le-marche": {
          "texte": "J'en vois passer des centaines chaque saison. Pour moi, celui-ci ressemble a une creme patissiere qui aurait mal tourne en fin de journee, sucree et un peu trop cuite.",
          "pourquoi": "Je goute par habitude, des dizaines de fruits chaque saison, alors je compare toujours a autre chose que je connais deja."
        }
      }
    },
    "pagesOuvertes": [
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=23088286&rettype=abstract&retmode=text",
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=28024392&rettype=abstract&retmode=text",
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=31825619&rettype=abstract&retmode=text",
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=28991254&rettype=abstract&retmode=text",
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=29152168&rettype=abstract&retmode=text",
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=40284073&rettype=abstract&retmode=text",
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=30237671&rettype=abstract&retmode=text",
      "https://api.gbif.org/v1/species/search?q=Durio%20zibethinus&rank=SPECIES&limit=3",
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=22591343,25966435,28991254,29107841,29914098,33526024,38698723",
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=31825619,28024392,23088286",
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=41655277,40284073,30237671,29152168,15937725,30870936",
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=durian+volatile+sulfur+odorant&retmax=20",
      "https://pmc.ncbi.nlm.nih.gov/tools/idconv/api/v1/articles/?ids=28991254,33526024&format=json",
      "https://www.lta.gov.sg/content/ltagov/en/getting_around/public_transport/a_better_public_transport_experience.html"
    ],
    "faitsEcartes": [
      "L'interdiction du durian dans les transports publics : aucun texte reglementaire officiel me nommant n'a pu etre ouvert. Les portails visés ont renvoye 403, 404 ou 500 (Singapore Statutes Online, LTA, SMRT, MRT Jakarta, myrapid, BTS). Aucune interdiction, aucun reseau et aucune amende ne sont donc affirmes ici.",
      "Les tonnages de production par pays : l'API FAOSTAT a renvoye une erreur 401 et openknowledge.fao.org une erreur 403. Aucun chiffre de production ou d'export n'est cite, ni pour la Thailande, ni pour la Malaisie, ni pour l'Indonesie.",
      "Le titre de fruit le plus odorant du monde : aucun classement comparatif mesure n'a ete trouve. Les valeurs d'activite odorante citees portent sur mes propres composes, elles ne me classent pas contre d'autres fruits.",
      "Le lien de cause a effet entre mes composes soufres et une quelconque interdiction : deux affirmations distinctes, dont une seule est sourcee. Elles ne sont pas soudees.",
      "La taille de mon genome et le nombre de genes predits : l'abstract ouvert ne les donne pas, donc ils ne figurent nulle part dans mes reponses.",
      "Le lieu precis de l'etude sur la pollinisation par les roussettes : non verifie dans la page ouverte, donc aucune ile ni aucun pays ne sont nommes.",
      "L'OAV de 480000 pour l'ethanethiol est une valeur mesuree sur un cultivar Monthong, pas une valeur universelle du durian : elle n'est pas etendue aux autres varietes.",
      "Les interdictions en hotel, en avion ou en taxi : aucune page institutionnelle ouverte, donc rien d'ecrit.",
      "La famille Bombacaceae citee par la revue de 2018 : ecartee au profit de Malvaceae, donnee par la base taxonomique du GBIF."
    ],
    "espece": "Fruit tropical",
    "taille": 1.0
  },
  {
    "id": "fruit-baobab",
    "mode": "documentaire",
    "type": "fruit",
    "nom": "Le fruit du baobab",
    "couleur": "#7C6A4F",
    "accent": "#E8DCC4",
    "accroche": "J'arrive sec à l'usine, et personne ne m'a mis au four.",
    "ouverture": "Je pends au bout d'une longue tige, enfermé dans une coque que l'on casse au lieu de la peler. Dedans, je ne suis ni juteux ni tendre. Je suis une matière blanche, farineuse et acide, serrée contre de grosses graines. Posez vos questions sans vous presser, je n'ai jamais eu besoin de me dépêcher.",
    "ton": "Lent, sec, un peu narquois. Une voix minérale qui parle comme quelque chose qui a tout son temps, qui se méfie des grands chiffres et qui préfère dire je ne sais pas plutôt que de vendre un record.",
    "sujets": [
      {
        "id": "identite",
        "cles": [
          "baobab",
          "adansonia",
          "digitata",
          "fruit du baobab",
          "presente",
          "coque"
        ],
        "reponse": "On m'appelle le fruit du baobab, et sous mon nom savant, Adansonia digitata. Le texte européen qui m'autorise décrit ma coque sans détour comme dure : on ne me pèle pas, on me casse. À l'intérieur il n'y a pas de chair, il y a une matière blanc jaunâtre et farineuse, acide, collée à de grosses graines. Quand on me réduit en poudre, on me tamise entre trois et six cents micromètres, ce qui vous dit assez que je suis une poussière avant d'être un fruit.",
        "ouvre": [
          "sechage"
        ],
        "requiert": [],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Commission européenne, Décision 2008/575/CE autorisant la mise sur le marché de la pulpe de fruit de baobab séchée en tant que nouvel ingrédient alimentaire",
            "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32008D0575",
            "consulte": "2026-09-07",
            "citation_source": "The hard shells are cracked open and the pulp is separated from the seeds and the shell. This is milled, separated into coarse and fine lots (particle size 3 to 600 μ) and then packaged.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Polymers (MDPI), Enhancing the Sensory Quality, Stability, and Shelf Life of Baobab Fruit Pulp Drinks: The Role of Hydrocolloids",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12115207/fullTextXML",
            "consulte": "2026-09-07",
            "citation_source": "yellowish-white, floury acidic (ca. pH 3.2)",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "sechage",
        "cles": [
          "seche",
          "sechage",
          "secher",
          "humidite",
          "teneur en eau",
          "poudre",
          "farine"
        ],
        "reponse": "Lisez la recette officielle de ma poudre, celle qui a valeur de loi en Europe. On casse ma coque, on sépare la pulpe des graines, on moud, on tamise, on emballe. Aucune ligne ne décrit d'étape de séchage dans le procédé. Et pourtant le mot est partout ailleurs : je m'appelle Baobab dried fruit pulp au titre comme à l'article premier, et ma teneur en eau y porte le nom de perte à la dessiccation. Et pourtant le même texte exige que je contienne entre 11,1 et 12,0 grammes d'eau pour cent grammes, une étude de 2025 mesure 10,02 pour cent sur sa poudre, et une autre de 2024 trouve 16,26 pour cent, dit elle-même que c'est plus haut que la littérature, et met cela sur le compte de l'altitude et de la pluie là où elle a ramassé ses fruits. Personne dans ces pages ne m'a regardé sécher. Ce qu'ils font, c'est mesurer ce qu'il me reste d'eau, et ils ne tombent pas d'accord.",
        "ouvre": [
          "europe",
          "composition"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Commission européenne, Décision 2008/575/CE autorisant la mise sur le marché de la pulpe de fruit de baobab séchée en tant que nouvel ingrédient alimentaire",
            "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32008D0575",
            "consulte": "2026-09-07",
            "citation_source": "Moisture (loss on drying) (g/100 g) 11,1-12,0",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Polymers (MDPI), Enhancing the Sensory Quality, Stability, and Shelf Life of Baobab Fruit Pulp Drinks: The Role of Hydrocolloids",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12115207/fullTextXML",
            "consulte": "2026-09-07",
            "citation_source": "10.02 ± 0.07%",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Heliyon, In-vitro antioxidant, antimicrobial and phytochemical properties of extracts from the pulp and seeds of the African baobab fruit (Adansonia digitata L.)",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11044038/fullTextXML",
            "consulte": "2026-09-07",
            "citation_source": "The fruit pulp moisture content is significantly higher than what has previously been reported in the literature.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "europe",
        "cles": [
          "europe",
          "union europeenne",
          "autorisation",
          "nouvel aliment",
          "novel food",
          "etiquette",
          "commission"
        ],
        "reponse": "L'Europe m'a ouvert sa porte le 27 juin 2008, par une décision de la Commission qui autorise la mise sur le marché de la pulpe de fruit de baobab séchée en tant que nouvel ingrédient alimentaire. Avant elle, le 12 juillet 2007, l'organisme d'évaluation britannique avait rendu son rapport initial et conclu que j'étais sans danger pour la consommation humaine aux niveaux d'usage proposés. Le demandeur était PhytoTrade Africa, à Londres. Le texte va jusqu'à me dicter mon nom d'étiquette, Baobab fruit pulp, et rien d'autre. Nouvel aliment : le mot est de l'administration, pas de moi.",
        "ouvre": [
          "chiffres"
        ],
        "requiert": [
          "sechage"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Commission européenne, Décision 2008/575/CE autorisant la mise sur le marché de la pulpe de fruit de baobab séchée en tant que nouvel ingrédient alimentaire",
            "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32008D0575",
            "consulte": "2026-09-07",
            "citation_source": "COMMISSION DECISION of 27 June 2008 authorising the placing on the market of Baobab dried fruit pulp as a novel food ingredient",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Commission européenne, Décision 2008/575/CE autorisant la mise sur le marché de la pulpe de fruit de baobab séchée en tant que nouvel ingrédient alimentaire",
            "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32008D0575",
            "consulte": "2026-09-07",
            "citation_source": "On 12 July 2007 the competent food assessment body of the United Kingdom issued its initial assessment report. In that report it came to the conclusion that Baobab dried fruit pulp is safe for human consumption at the proposed use levels.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Commission européenne, Décision 2008/575/CE, article 2",
            "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32008D0575",
            "consulte": "2026-09-07",
            "citation_source": "The designation of the novel food ingredient authorised by this Decision on the labelling of the foodstuff containing it shall be 'Baobab fruit pulp'.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "composition",
        "cles": [
          "composition",
          "glucides",
          "proteines",
          "sucres",
          "matiere grasse",
          "cendres",
          "acidite"
        ],
        "reponse": "Attention à la façon de me lire : le texte européen range ces fourchettes sous le titre Typical nutritional components, et garde un second tableau, Analytical specifications, où il ne reprend que mon eau, mes cendres et mes corps étrangers. Ce sont des bornes de lot commercial, pas la mesure d'un fruit cueilli. Il m'accorde 2,03 à 3,24 grammes de protéines, 0,4 à 0,7 gramme de matière grasse et 78,3 à 78,9 grammes de glucides totaux pour cent grammes, dont 16,9 à 25,3 de sucres. Il ajoute 5,5 à 6,6 grammes de cendres et ne tolère pas plus de 0,2 pour cent de corps étrangers. Une étude de 2025 me résume plus brutalement : blanc jaunâtre, farineux, acide, autour de pH 3,2.",
        "ouvre": [
          "chiffres"
        ],
        "requiert": [
          "sechage"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Commission européenne, Décision 2008/575/CE, annexe, spécification de la pulpe de fruit de baobab séchée",
            "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32008D0575",
            "consulte": "2026-09-07",
            "citation_source": "Protein (g/100 g): 2,03-3,24",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Commission européenne, Décision 2008/575/CE, annexe, spécification de la pulpe de fruit de baobab séchée",
            "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32008D0575",
            "consulte": "2026-09-07",
            "citation_source": "Total carbohydrate (g/100 g): 78,3-78,9",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Commission européenne, Décision 2008/575/CE, annexe, spécification de la pulpe de fruit de baobab séchée",
            "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32008D0575",
            "consulte": "2026-09-07",
            "citation_source": "Total sugars (as glucose): 16,9-25,3",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Commission européenne, Décision 2008/575/CE, annexe, spécification de la pulpe de fruit de baobab séchée",
            "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32008D0575",
            "consulte": "2026-09-07",
            "citation_source": "Ash (g/100 g) 5,5-6,6",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Commission européenne, Décision 2008/575/CE, annexe, spécification de la pulpe de fruit de baobab séchée",
            "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32008D0575",
            "consulte": "2026-09-07",
            "citation_source": "Foreign matter Not more than 0,2 %",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "chiffres",
        "cles": [
          "vitamine",
          "vitamine c",
          "mineraux",
          "calcium",
          "potassium",
          "fibres",
          "orange",
          "chiffres"
        ],
        "reponse": "Sur les minéraux, une mesure publiée en 2025 donne pour ma pulpe 3 793 milligrammes de calcium et 37 528 milligrammes de potassium par kilogramme, avec 10 805 de phosphore. Sur la vitamine C, exigez de la méfiance : deux articles répètent que j'en aurais presque dix fois plus qu'une orange sans l'avoir mesuré eux-mêmes. Une revue avance 466 milligrammes pour cent grammes, un seul point, sans fourchette ni méthode. Et mes fibres changent de camp selon les auteurs, 22,54 pour cent de solubles chez les uns, 57,3 grammes pour cent grammes chez les autres. Et regardez d'où ils les tiennent : ni l'un ni l'autre ne les a mesurées, chacun les recopie d'un troisième. Tant que ces deux chiffres se contredisent, je ne vous en donnerai aucun comme étant le mien.",
        "ouvre": [],
        "requiert": [
          "europe",
          "composition"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Plants (MDPI), Nutritional Characterization of Fruits from Three African Plant Species: Dialium guineense Willd, Parkia biglobosa Jacq. and Adansonia digitata L.",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12348951/fullTextXML",
            "consulte": "2026-09-07",
            "citation_source": "For instance, baobab pulp showed similar values of Ca (3793 mg·kg−1) and lower values of K (37,528 mg·kg−1), P (10,805 mg·kg−1) and S (1960 mg·kg−1) considering the data reported by Monteiro et al. [13]",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Foods (MDPI), Nutritional and Rheological Characteristics of Composite Flour Substituted with Baobab (Adansonia digitata L.) Pulp Flour",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC8065946/fullTextXML",
            "consulte": "2026-09-07",
            "citation_source": "has a very high vitamin C content, almost ten times that of oranges",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Nutrients (MDPI), Adansonia digitata L. (Baobab) Bioactive Compounds, Biological Activities, and the Potential Effect on Glycemia",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10180768/fullTextXML",
            "consulte": "2026-09-07",
            "citation_source": "Baobab also has a high content of vitamin C (466 mg/100 g)",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Nutrients (MDPI), Adansonia digitata L. (Baobab) Bioactive Compounds, Biological Activities, and the Potential Effect on Glycemia",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10180768/fullTextXML",
            "consulte": "2026-09-07",
            "citation_source": "The pulp contains 16.1 (±0.8) g/100 g of insoluble fiber and 57.3 (±0.3) g/100 g of soluble fiber",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Foods (MDPI), Nutritional, Physicochemical, Microstructural, Rheological, and Organoleptical Characteristics of Ice Cream Incorporating Adansonia digitata Pulp Flour",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9913908/fullTextXML",
            "consulte": "2026-09-07",
            "citation_source": "Baobab fruit pulp supplied a quantity of soluble (22.54% dry weight) and insoluble (22.04% dry weight) fibers",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "gout",
        "cles": [
          "gout",
          "gouter",
          "quel gout",
          "ca a quel gout",
          "c est bon",
          "deguster",
          "degustation",
          "saveur"
        ],
        "reponse": "Prenez-en un morceau. Cliquez sur GOUTER, je vous regarde.",
        "ouvre": [],
        "requiert": [],
        "sources": []
      }
    ],
    "gout": {
      "fiction": true,
      "avertissement": "Scene inventee : personne n'a mesure ce gout, ces six personnages sont ecrits, pas des avis.",
      "sequence": {
        "odeur": "Presque rien ne se degage avant la bouchee. Pas d'odeur qui previent, pas de parfum qui accompagne. On sent d'abord la poussiere, pas le fruit.",
        "attaque": "Ca ne fond pas, ca se dissout. Un grain fin et sec envahit la bouche avant meme d'avoir de gout, et c'est l'acide qui arrive en premier, net, sans detour.",
        "corps": "La texture domine tout : farineuse, presque crayeuse, elle absorbe la salive au lieu de s'y melanger. Rien de juteux, rien de tendre ici.",
        "finale": "L'acidite reste, seche, pendant que la bouche cherche encore un peu de liquide. Une pincee de sucre discret, loin derriere."
      },
      "ancres": [
        "L'acidite rappelle un yaourt nature bien citronne.",
        "La texture evoque une craie qui fondrait tres lentement.",
        "Rien ici ne ressemble a un fruit juteux."
      ],
      "reactions": {
        "kesh": {
          "texte": "Mes bras ne trouvent rien a saisir, ca s'effrite avant meme que je ferme mes ventouses. L'acide domine largement, le sucre je ne le sens presque pas.",
          "pourquoi": "Le sucre chez moi arrive en dernier, et ce fruit n'en a presque pas a offrir. L'acide, en revanche, je le percois fort."
        },
        "nox": {
          "texte": "Une poussiere seche, ca ne ressemble a rien que je picore d'habitude. Je m'attendais a du jus, je trouve de la craie.",
          "pourquoi": "Rien de brillant, rien d'humide, ca ne ressemble a aucun fruit que je connais dans mon arbre. Je m'en mefie par reflexe."
        },
        "ada": {
          "texte": "Je n'ai presque rien senti avant d'y gouter, ce qui est rare chez moi. Une fois en bouche, ce n'est pas l'odeur qui domine, c'est la secheresse.",
          "pourquoi": "Mon odorat cherche une odeur qui vient avant, et celui-ci n'en a presque pas. Chez moi c'est inhabituel, alors c'est ce qui ressort."
        },
        "mite": {
          "texte": "Je cherche le sucre et je ne le trouve presque pas. Ce fruit me decoit, tout est dans l'acide et rien dans le doux.",
          "pourquoi": "Je ne mange que du sucre depuis toujours, et celui-ci n'en offre presque pas. Le reste ne m'interesse pas."
        },
        "givre": {
          "texte": "Cette texture, je ne l'ai croisee nulle part, seche comme de la neige qui aurait perdu son froid. Aucune viande, aucun gras, ca ne me dit rien.",
          "pourquoi": "Mon palais compare toujours a ce que je connais, le gras et le froid. Une poudre seche et acide ne ressemble a rien de mon monde."
        },
        "le-marche": {
          "texte": "J'en vois passer, secs comme des cailloux, pour faire des jus et des poudres. Celui-ci, seul, sans rien pour l'adoucir, reste austere.",
          "pourquoi": "Je goute par habitude, des dizaines de fruits chaque saison, et celui-ci je le compare toujours a une poudre plutot qu'a un fruit."
        }
      }
    },
    "pagesOuvertes": [
      "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32008D0575",
      "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10180768/fullTextXML",
      "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12115207/fullTextXML",
      "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12348951/fullTextXML",
      "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC8065946/fullTextXML",
      "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC9913908/fullTextXML",
      "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11044038/fullTextXML",
      "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=%22Adansonia%20digitata%22%20AND%20pulp&format=json&pageSize=30&resultType=core"
    ],
    "faitsEcartes": [
      "Dix fois plus de vitamine C qu'une orange. Deux articles ouverts le répètent, aucun des deux ne l'a mesuré, tous deux le citent d'ailleurs. Superlatif comparatif sans mesure : écarté comme fait, gardé seulement comme exemple de rumeur.",
      "466 mg de vitamine C pour 100 g, présenté comme la valeur du fruit. Le chiffre existe bien dans une revue publiée dans Nutrients, mais c'est un point unique sans fourchette, sans méthode et sans variété précisée. Refusé comme valeur de référence, cité seulement en tant que chiffre discuté.",
      "Une teneur en fibres unique. La revue Nutrients donne 16,1 g d'insolubles et 57,3 g de solubles pour 100 g, un article de Foods donne 22,54 % de solubles et 22,04 % d'insolubles, une mesure de Plants 2025 parle de plus de 30 % de solubles. Les trois se contredisent, aucun n'a été retenu comme la valeur.",
      "La ligne de composition 1250-12,91 % d'humidité relevée dans un article de Foods 2023. Coquille manifeste dans la source, non reprise.",
      "L'idée que le séchage sur l'arbre expliquerait ma richesse en vitamine C ou en fibres. Aucune des pages ouvertes n'établit ce lien. Causalité inventée entre deux faits, écartée.",
      "Les fourchettes de l'annexe européenne présentées comme ma composition nutritionnelle réelle. Ce sont des spécifications réglementaires encadrant un ingrédient commercial, pas une moyenne mesurée sur des fruits : la distinction est dite explicitement dans la réponse.",
      "Toute affirmation sur l'âge, la taille ou la longévité de l'arbre baobab. Aucune source primaire ouverte à ce sujet dans cette session, donc rien n'est dit.",
      "L'ancienneté de ma consommation en Afrique chiffrée en siècles ou en millénaires. Aucune page ouverte ne la date. Phrase supprimée de la réponse sur l'Europe.",
      "Le statut actuel dans la liste de l'Union (règlement 2017/2470). La décision de 2008 a bien été ouverte et lue, la liste consolidée ne l'a pas été, donc rien n'est affirmé sur l'état du droit après 2008.",
      "La teneur en fer de la pulpe. L'étude Plants 2025 indique seulement que les graines en contiennent le triple des pulpes, sans donner la valeur de la pulpe. Chiffre absent, trou laissé visible."
    ],
    "espece": "Fruit sec d'arbre africain",
    "taille": 1.0
  },
  {
    "id": "orange-sanguine-sicile",
    "pays": ["ITA"],
    "mode": "documentaire",
    "type": "fruit",
    "nom": "L'orange sanguine de Sicile",
    "couleur": "#6E1420",
    "accent": "#F2762E",
    "accroche": "Ma couleur n'est pas un caprice de volcan. C'est le froid de la nuit qui l'ecrit dans ma chair.",
    "ouverture": "Je pousse a l'est de la Sicile, entre Catane, Syracuse et Enna, au pied d'une montagne qui fume. Le jour, le soleil me remplit de sucre. La nuit, l'air froid descend et allume dans ma pulpe un rouge que mes cousines de plaine ne connaitront jamais. Demandez-moi d'ou vient cette couleur : j'ai une reponse precise, et je sais ou elle est ecrite.",
    "ton": "Voix feminine, lente et un peu hautaine, celle d'un fruit qui se sait fabrique par le climat et non par la chance. Elle parle en sensations de temperature avant de parler de gout, distingue toujours le jour et la nuit, et corrige avec calme ceux qui lui attribuent des merites qu'elle n'a pas. Elle deteste les approximations sur son origine et refuse les compliments qu'aucune mesure ne soutient.",
    "sujets": [
      {
        "id": "identite",
        "cles": [
          "orange",
          "sanguine",
          "sicile",
          "citrus sinensis",
          "presente",
          "qui es tu",
          "identite"
        ],
        "reponse": "Je suis une orange douce, Citrus sinensis, mais d'un genre a part. Les travaux scientifiques me rangent parmi les oranges dites sanguines, pigmentees ou rouges, celles dont la pulpe et parfois l'ecorce portent des anthocyanes. Sous mon nom europeen, Arancia Rossa di Sicilia, le cahier des charges nomme les Tarocco, les Moro et les Sanguinello. Je viens de l'est de l'ile, dans des vergers ou l'ecart entre le jour et la nuit fait tout le travail.",
        "ouvre": [
          "froid",
          "igp"
        ],
        "requiert": [],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Molecules (MDPI), Distribution, Antioxidant Capacity, Bioavailability and Biological Properties of Anthocyanin Pigments in Blood Oranges and Other Citrus Species",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9785241/",
            "consulte": "2026-09-07",
            "citation_source": "found mainly in the flesh and sometimes the rind of orange varieties (Citrus sinensis L. Osbeck) called blood or pigmented or red oranges",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Commission europeenne, Publication of an amendment application pursuant to Article 6(2) of Council Regulation (EC) No 510/2006, ARANCIA ROSSA DI SICILIA, JO C 369 du 29.11.2012",
            "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52012XC1129%2804%29",
            "consulte": "2026-09-07",
            "citation_source": "Tarocco Comune, Tarocco Galice, Tarocco Gallo, Tarocco dal Muso, Tarocco Nucellare",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "froid",
        "cles": [
          "froid",
          "nuit",
          "temperature",
          "anthocyane",
          "anthocyanes",
          "etna",
          "volcan",
          "rouge",
          "couleur"
        ],
        "reponse": "Le rouge vient du froid, pas des cendres du volcan. Le cahier des charges europeen l'ecrit noir sur blanc : l'effet, sur les oranges, des fortes variations de temperature de cette zone est une accumulation remarquable de sucres et de pigments anthocyaniques. Les travaux publies sur mon espece disent la meme chose autrement : la basse temperature est un declencheur necessaire de l'accumulation d'anthocyanes. Une precision d'honnetete : le seuil de 10 degres cite par ces travaux concerne des fruits places en chambre froide apres la recolte, pas mes nuits siciliennes, et je refuse de confondre les deux.",
        "ouvre": [
          "chimie",
          "cultivars"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Commission europeenne, Publication of an amendment application pursuant to Article 6(2) of Council Regulation (EC) No 510/2006, ARANCIA ROSSA DI SICILIA, JO C 369 du 29.11.2012",
            "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52012XC1129%2804%29",
            "consulte": "2026-09-07",
            "citation_source": "The effect on the oranges of the considerable temperature variations in this area is a remarkable accumulation of sugars and anthocyanin pigments",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "The Plant Journal, The R2R3 MYB Ruby1 is activated by two cold responsive ethylene response factors, via the retrotransposon in its promoter, to positively regulate anthocyanin biosynthesis in citrus",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13087489/",
            "consulte": "2026-09-07",
            "citation_source": "LT is a necessary inducer of anthocyanin accumulation and 10°C is likely to be a good temperature for enhancing fruit quality.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Molecules (MDPI), Distribution, Antioxidant Capacity, Bioavailability and Biological Properties of Anthocyanin Pigments in Blood Oranges and Other Citrus Species",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9785241/",
            "consulte": "2026-09-07",
            "citation_source": "The development of the red color in the flesh is favored by the different temperatures between day and night.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "chimie",
        "cles": [
          "cyanidine",
          "pigment",
          "molecule",
          "glucoside",
          "chimie",
          "ruby",
          "gene"
        ],
        "reponse": "Mon pigment principal porte un nom : la cyanidine 3-glucoside, entouree de quantites plus faibles d'autres anthocyanes. Elle n'arrive pas toute seule, il faut qu'un interrupteur soit enclenche a l'interieur de moi. Cet interrupteur s'appelle Ruby1, et une sequence mobile logee dans son promoteur augmente son activite, ce qui permet d'accumuler la proteine fonctionnelle. Le froid parle donc a un gene, et le gene fabrique la couleur : voila toute ma sorcellerie.",
        "ouvre": [
          "cultivars"
        ],
        "requiert": [
          "froid"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Molecules (MDPI), Distribution, Antioxidant Capacity, Bioavailability and Biological Properties of Anthocyanin Pigments in Blood Oranges and Other Citrus Species",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9785241/",
            "consulte": "2026-09-07",
            "citation_source": "cyanidin 3-glucoside was the main component",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "The Plant Journal, The R2R3 MYB Ruby1 is activated by two cold responsive ethylene response factors, via the retrotransposon in its promoter, to positively regulate anthocyanin biosynthesis in citrus",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13087489/",
            "consulte": "2026-09-07",
            "citation_source": "An insertion of a transposable element in its promoter region upregulates transcriptional activity leading to the accumulation of functional Ruby1 protein.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "cultivars",
        "cles": [
          "tarocco",
          "moro",
          "sanguinello",
          "variete",
          "varietes",
          "cultivar",
          "famille"
        ],
        "reponse": "Nous sommes trois familles et nous ne rougissons pas de la meme maniere. Le cahier des charges nomme les Tarocco, puis les Moro, jusqu'a des lignees numerotees que seuls les pepinieristes savent prononcer, Moro di Lentini par exemple, soit ajouter un extrait du cahier des charges nommant les cultivars Sanguinello, soit retirer la mention. Dans une comparaison de vergers menee en Italie et en Espagne, Moro donnait le jus le plus rouge de deux des trois parcelles. Les auteurs ajoutent que meme si la biosynthese et l'accumulation d'anthocyanes tiennent au genotype, l'interaction avec les conditions environnementales peut jouer un role preponderant. Autrement dit, mon nom de variete promet, c'est le climat qui tient.",
        "ouvre": [
          "igp"
        ],
        "requiert": [
          "froid"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Commission europeenne, Publication of an amendment application pursuant to Article 6(2) of Council Regulation (EC) No 510/2006, ARANCIA ROSSA DI SICILIA, JO C 369 du 29.11.2012",
            "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52012XC1129%2804%29",
            "consulte": "2026-09-07",
            "citation_source": "Moro Comune, Moro di Lentini, Moro Nucellare 58-8D-1",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Foods (MDPI), Qualitative Traits and Antioxidant Properties of Blood Oranges Are Affected by the Genotype and the Climatic Conditions",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11482589/",
            "consulte": "2026-09-07",
            "citation_source": "Moro showed the reddest color of all the juices in plots 1 and 2",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Foods (MDPI), Qualitative Traits and Antioxidant Properties of Blood Oranges Are Affected by the Genotype and the Climatic Conditions",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11482589/",
            "consulte": "2026-09-07",
            "citation_source": "even if the biosynthesis and accumulation of anthocyanins are related to the genotype, the interaction with the environmental conditions may play a prevalent role.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "igp",
        "cles": [
          "indication",
          "protegee",
          "appellation",
          "label",
          "europe",
          "reglement",
          "protection"
        ],
        "reponse": "Mon nom est protege, et cette protection a une date. Le 6 novembre 2013, Bruxelles a valide mon cahier des charges. Rangee dans la classe des fruits frais, sous le nom Arancia Rossa di Sicilia. La demande avait ete publiee auparavant au Journal officiel C 369 du 29 novembre 2012. L'aire delimitee couvre des communes de trois provinces, Catane, Syracuse et Enna, un pays d'exposition solaire intense : hors de ces limites, le nom ne me suit pas.",
        "ouvre": [
          "cultivars"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Commission europeenne, Commission Implementing Regulation (EU) No 1117/2013 of 6 November 2013, Arancia Rossa di Sicilia (PGI)",
            "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32013R1117",
            "consulte": "2026-09-07",
            "citation_source": "The amendments to the specification published in the Official Journal of the European Union regarding the name contained in the Annex to this Regulation are hereby approved.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Commission europeenne, Publication of an amendment application pursuant to Article 6(2) of Council Regulation (EC) No 510/2006, ARANCIA ROSSA DI SICILIA, JO C 369 du 29.11.2012",
            "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52012XC1129%2804%29",
            "consulte": "2026-09-07",
            "citation_source": "The area where the 'Arancia Rossa di Sicilia' is grown is characterised by intense sun exposure",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "gout",
        "cles": [
          "gout",
          "gouter",
          "quel gout",
          "ca a quel gout",
          "c est bon",
          "deguster",
          "degustation",
          "saveur"
        ],
        "reponse": "Prenez-en un quartier. Cliquez sur GOUTER, je vous regarde.",
        "ouvre": [],
        "requiert": [],
        "sources": []
      }
    ],
    "gout": {
      "fiction": true,
      "avertissement": "Scene inventee : personne n'a mesure ce gout, ces six personnages sont ecrits, pas des avis.",
      "sequence": {
        "odeur": "Avant la bouchee, un parfum d'agrume classique, net et propre. Rien ne laisse deviner la couleur qu'il y a dessous.",
        "attaque": "Le jus arrive sucre d'abord, la chaleur du jour qu'il a accumulee. L'acidite suit tout de suite apres, vive, sans trainer.",
        "corps": "La chair est juteuse, presque croquante par endroits, et une note presque rouge s'installe, plus proche du fruit rouge que de l'agrume classique.",
        "finale": "L'acidite et le sucre se stabilisent ensemble, sans que l'un ecrase l'autre. Rien ne persiste longtemps : la fraicheur s'efface vite."
      },
      "ancres": [
        "Le sucre rappelle une orange classique bien mure.",
        "La note rouge evoque une framboise lointaine, a peine perceptible.",
        "L'acidite est plus vive qu'une clementine."
      ],
      "reactions": {
        "kesh": {
          "texte": "Le jus deborde entre mes bras avant que j'aie vraiment pu gouter. Sucre et acide arrivent ensemble, sans que l'un domine vraiment chez moi.",
          "pourquoi": "Le sucre et l'acide me touchent presque autant l'un que l'autre ici, alors aucun des deux ne prend le dessus."
        },
        "nox": {
          "texte": "Une odeur d'agrume classique, ca je reconnais. Rien ne m'inquiete cette fois, je goute sans hesiter.",
          "pourquoi": "L'orange, je la croise souvent pres des vergers. C'est un fruit que je reconnais, donc je ne me mefie pas."
        },
        "ada": {
          "texte": "L'odeur ne dit presque rien de ce qui m'attend en bouche, ce qui me surprend toujours un peu. C'est la couleur qu'on me decrit qui m'intrigue plus que le parfum.",
          "pourquoi": "Chez moi l'odeur annonce generalement le gout. Ici elle reste discrete, alors je me fie moins a elle que d'habitude."
        },
        "mite": {
          "texte": "Du sucre, enfin un peu de sucre franc. J'en reprendrais bien un quartier de plus.",
          "pourquoi": "Je ne mange que du sucre depuis toujours, et celui-ci en offre assez pour me satisfaire."
        },
        "givre": {
          "texte": "Un agrume, ca au moins je situe un peu mieux qu'un fruit tropical. L'acide me pique la truffe, mais je m'en sors mieux que sur les autres fruits d'ici.",
          "pourquoi": "Mon palais connait mal les fruits, mais l'acidite, elle, je la reconnais meme loin de la banquise."
        },
        "le-marche": {
          "texte": "Un agrume propre, sans surprise, de ceux que je vends par cageots entiers. La note rouge en plus, c'est ce qui le distingue des autres.",
          "pourquoi": "J'en vois passer des centaines, des agrumes ordinaires. C'est la teinte rouge qui me fait dire que celui-ci sort du lot."
        }
      }
    },
    "pagesOuvertes": [
      "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52012XC1129%2804%29",
      "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32013R1117",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC13087489/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC9785241/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC11482589/",
      "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=%22blood%20orange%22%20AND%20anthocyanin%20AND%20cold&format=json&pageSize=25&resultType=core",
      "https://eur-lex.europa.eu/search.html?scope=EURLEX&text=%22Arancia+Rossa+di+Sicilia%22&lang=en&type=quick&qid=1"
    ],
    "faitsEcartes": [
      "Les 10 degres Celsius de l'article du Plant Journal viennent d'une conservation apres recolte, en chambre froide : je ne les ai pas transformes en temperature des nuits siciliennes.",
      "L'idee que les sols volcaniques ou les mineraux de l'Etna donneraient eux-memes le rouge : les pages ouvertes parlent d'ecart de temperature entre le jour et la nuit, jamais d'un effet mineral. Causalite non ecrite, donc non inventee.",
      "Tout superlatif du type orange la plus antioxydante ou la plus riche en vitamine C : aucune mesure comparative dans les pages ouvertes ce jour.",
      "Les valeurs chiffrees d'anthocyanes de l'etude Foods 2024 (indices de couleur des parcelles) : elles portent sur des vergers precis en Italie et en Espagne et ne decrivent pas une orange sanguine moyenne, donc elles ne sont pas citees comme valeur courante.",
      "Les tonnages de production d'oranges siciliennes ou italiennes : aucune page FAO ou FAOSTAT n'a ete ouverte, donc aucun chiffre de volume n'est avance.",
      "Butelli et al. 2012, The Plant Cell, sur les retrotransposons et l'accumulation d'anthocyanes dependante du froid : identifie via Europe PMC mais signale comme non accessible librement. Je ne cite pas un article que je n'ai pas lu.",
      "La liste nominative des communes de l'aire IGP (18 communes de la province de Catane, 10 de Syracuse) : donnee vue en resume et non recopiee integralement, donc annoncee seulement au niveau des trois provinces."
    ],
    "espece": "Agrume",
    "taille": 1.0
  },
  {
    "id": "acai",
    "pays": ["BRA"],
    "mode": "documentaire",
    "type": "fruit",
    "nom": "L'acai",
    "couleur": "#2E1437",
    "accent": "#6F9E52",
    "accroche": "Le fruit dont on parle le plus fort et que l'on cite le plus mal.",
    "ouverture": "Vous avez entendu parler de moi bien avant de me gouter, et vous avez surtout mal entendu. Je ne suis pas une baie, je ne suis pas sucre, et je ne fais maigrir personne. Ce que j'accepte de dire, c'est ce qui a ete mesure et publie, rien d'autre. Demandez.",
    "ton": "Sec, precis, legerement excede. Il corrige plus qu'il ne seduit, coupe les superlatifs et prefere un chiffre mesure a un adjectif. Il ne se vend pas, il rectifie.",
    "sujets": [
      {
        "id": "identite",
        "cles": [
          "acai",
          "euterpe",
          "oleracea",
          "palmier",
          "arecaceae",
          "stipe",
          "touffe",
          "identite",
          "presente",
          "baie"
        ],
        "reponse": "Je suis un palmier, pas un buisson a baies. On m'a decrit en 1824 sous le nom d'Euterpe oleracea, dans la famille des Arecaceae, et ce nom est toujours le nom accepte. Je pousse en touffe: plusieurs stipes partent de la meme souche, jusqu'a trente-cinq dans un meme bouquet, ce qui est un maximum releve et non une moyenne. Mon territoire est l'estuaire de l'Amazone, ses plaines inondables et ses igapos. Et ce que vous appelez une baie, la litterature que je cite l'appelle un petit fruit sombre a noyau unique, ce noyau qui fait 85 pour cent de ma masse.",
        "ouvre": [
          "varzea",
          "recolte"
        ],
        "requiert": [],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "GBIF Secretariat, GBIF Backbone Taxonomy, species search API",
            "url": "https://api.gbif.org/v1/species/search?q=Euterpe%20oleracea&rank=SPECIES&limit=3",
            "consulte": "2026-09-07",
            "citation_source": "Scientific name: \"Euterpe oleracea\". Authorship: \"Mart., 1824\". Family: \"Arecaceae\". Order: \"Arecales\". Taxonomic status: \"ACCEPTED\"",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Plants (MDPI), Systematic Review of the State of Knowledge About Acai-Do-Amazonas (Euterpe precatoria Mart., Arecaceae), 2025, DOI 10.3390/plants14152439",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12349038/fullTextXML",
            "consulte": "2026-09-07",
            "citation_source": "cespitose stems with up to 35 stems in a clump",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Foods (MDPI), Bibliometric Insights and Recent Advances in the Science, Technology, and Sustainability of Acai (Euterpe oleracea), 2026, DOI 10.3390/foods15122203",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13298187/fullTextXML",
            "consulte": "2026-09-07",
            "citation_source": "small, dark-purple fruits, whose pulp is used to prepare a beverage traditionally known in Brazil as 'acai wine.'",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "varzea",
        "cles": [
          "varzea",
          "igapo",
          "inondable",
          "estuaire",
          "amazone",
          "habitat",
          "foret",
          "biodiversite",
          "pousse",
          "plaine",
          "de l eau"
        ],
        "reponse": "Je vis les pieds dans l'eau. On me trouve dans les plaines inondables de l'Amazone et ses igapos, et c'est la pluviometrie annuelle qui decide en premier ou je peux pousser. Quand on veut plus de moi, on enrichit la foret: on seme, on replante, on retire les arbres qui ne donnent pas de fruit pour me laisser la lumiere. Une etude de 2015 a mesure ce que cela coute dans une varzea exploitee autour de deux cents stipes a l'hectare: plus de la moitie de la diversite d'especes d'arbres perdue, et 63 pour cent d'especes pionnieres en moins. Je ne suis donc pas une foret. Je suis ce qui reste une fois qu'on a retire la foret autour de moi.",
        "ouvre": [
          "recolte",
          "marketing"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Plants (MDPI), Systematic Review of the State of Knowledge About Acai-Do-Amazonas (Euterpe precatoria Mart., Arecaceae), 2025, DOI 10.3390/plants14152439",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12349038/fullTextXML",
            "consulte": "2026-09-07",
            "citation_source": "distributed throughout the Amazon River estuary, especially in the floodplains and igapos",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Frontiers in Plant Science, Genomic consequences of acai extraction in the Amazon, 2025, DOI 10.3389/fpls.2025.1688760",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12667441/fullTextXML",
            "consulte": "2026-09-07",
            "citation_source": "commonly found in Amazon floodplains, with annual precipitation being the main factor influencing its distribution",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Frontiers in Plant Science, Genomic consequences of acai extraction in the Amazon, 2025, DOI 10.3389/fpls.2025.1688760",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12667441/fullTextXML",
            "consulte": "2026-09-07",
            "citation_source": "enriching forest stands with acai seeds or seedlings and removing non-producing fruit trees to enhance light availability",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Forest Ecology and Management, Floristic impoverishment of Amazonian floodplain forests managed for acai fruit production, 2015, DOI 10.1016/j.foreco.2015.05.008",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE%3A%22Floristic%20impoverishment%20of%20Amazonian%20floodplain%20forests%22&format=json&resultType=core&pageSize=5",
            "consulte": "2026-09-07",
            "citation_source": "The current exploitation model practiced by Amazonian riverine communities, maintaining a mean density of 200stem/ha, led to a loss of over 50% of tree species diversity and a 63% reduction in the number of pioneer species.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "recolte",
        "cles": [
          "recolte",
          "regime",
          "noyau",
          "pulpe",
          "production",
          "tonnes",
          "rendement",
          "hectare",
          "transformation",
          "dechet",
          "graine"
        ],
        "reponse": "On coupe mes regimes entiers, on les lave dans une solution chloree, on separe la pulpe et on la congele. Ce que vous mangez n'est qu'une mince couche: le noyau represente environ 85 pour cent de la masse du fruit, et il en resterait quelque 1,6 million de tonnes jetees chaque annee. En 2024, 1,742 million de tonnes ont ete recoltees sur 262 289 hectares, soit un rendement moyen de 6 641 kilos par hectare. Le seul Etat du Para en fournit environ 96 pour cent a lui seul a l'echelle bresilienne, et le Bresil environ 90 a 95 pour cent de la production mondiale en 2025. Autrement dit, vous mangez les quinze pour cent d'un fruit qui vient presque tout entier du meme endroit.",
        "ouvre": [
          "marketing",
          "chagas"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Foods (MDPI), Acai Seeds for a Greener Future: Transforming Agro-Waste into Industrial Value, 2026, DOI 10.3390/foods15111967",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13257277/fullTextXML",
            "consulte": "2026-09-07",
            "citation_source": "bunch harvesting, sanitization with a chlorinated solution, depulping, storage of the pulp in plastic containers for freezing",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Foods (MDPI), Acai Seeds for a Greener Future: Transforming Agro-Waste into Industrial Value, 2026, DOI 10.3390/foods15111967",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13257277/fullTextXML",
            "consulte": "2026-09-07",
            "citation_source": "the seed accounts for the remaining 85%",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Foods (MDPI), Acai Seeds for a Greener Future: Transforming Agro-Waste into Industrial Value, 2026, DOI 10.3390/foods15111967",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13257277/fullTextXML",
            "consulte": "2026-09-07",
            "citation_source": "an estimated 1.6 million tons of seeds discarded annually",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Foods (MDPI), Bibliometric Insights and Recent Advances in the Science, Technology, and Sustainability of Acai (Euterpe oleracea), 2026, DOI 10.3390/foods15122203",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13298187/fullTextXML",
            "consulte": "2026-09-07",
            "citation_source": "1.742 million metric tons harvested from 262,289 hectares, corresponding to an average yield of 6641 kg/ha",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Foods (MDPI), Bibliometric Insights and Recent Advances in the Science, Technology, and Sustainability of Acai (Euterpe oleracea), 2026, DOI 10.3390/foods15122203",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13298187/fullTextXML",
            "consulte": "2026-09-07",
            "citation_source": "The state of Para overwhelmingly dominates national production, accounting for approximately 96% of the total output",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Foods (MDPI), Bibliometric Insights and Recent Advances in the Science, Technology, and Sustainability of Acai (Euterpe oleracea), 2026, DOI 10.3390/foods15122203",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13298187/fullTextXML",
            "consulte": "2026-09-07",
            "citation_source": "Brazil is the world's leading producer of acai, accounting for approximately 90-95% of global acai berry production in 2025.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "marketing",
        "cles": [
          "marketing",
          "superfruit",
          "superfood",
          "antioxydant",
          "cholesterol",
          "preuve",
          "science",
          "promesse",
          "maigrir",
          "publicite",
          "arnaque",
          "bienfait"
        ],
        "reponse": "Maintenant, ce que la mesure dit vraiment. Une meta-analyse publiee en 2025 a rassemble huit essais et 411 participants: aucun effet significatif sur le LDL, le HDL, le cholesterol total ni les triglycerides, et les auteurs jugent eux-memes leur niveau de preuve faible a tres faible. Sur le cerveau, une revue de 2023 conclut qu'a sa date aucune etude clinique n'avait evalue l'activite neuropharmacologique des Euterpe. Pendant ce temps, la Federal Trade Commission a du faire fermer des faux sites d'information qui promettaient grace a moi une perte de vingt-cinq livres en quatre semaines. Je n'ai jamais promis cela. On l'a promis a ma place, et on s'est fait payer pour.",
        "ouvre": [
          "chagas"
        ],
        "requiert": [
          "recolte"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Nutrition Bulletin, Investigating the Impact of Acai (Euterpe oleracea) on Lipid Profile: A Comprehensive Systematic Review and Meta-Analysis, 2025, DOI 10.1111/nbu.12735",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE%3A%22Investigating%20the%20Impact%20of%20A%C3%A7ai%22&format=json&resultType=core&pageSize=5",
            "consulte": "2026-09-07",
            "citation_source": "Meta-analysis of 411 participants displayed no significant effect of acai on LDL-c (MD = 6.06 mg/dL 95% CI: -0.03, 12.48, p = 0.06), HDL-c (MD = 0.30 mg/dL 95% CI: -1.54, 2.13, p = 0.75), total cholesterol (MD = 2.94 mg/dL 95% CI: -6.44, 12.31, p = 0.54) and triglycerides (MD = 2.05 mg/dL 95% CI: 1.79, 2.28, p = 0.59).",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Nutrition Bulletin, Investigating the Impact of Acai (Euterpe oleracea) on Lipid Profile: A Comprehensive Systematic Review and Meta-Analysis, 2025, DOI 10.1111/nbu.12735",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE%3A%22Investigating%20the%20Impact%20of%20A%C3%A7ai%22&format=json&resultType=core&pageSize=5",
            "consulte": "2026-09-07",
            "citation_source": "GRADE evaluation pointed to low/very low certainty of evidence.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Nutrients (MDPI), What We Know about Euterpe Genus and Neuroprotection: A Scoping Review, 2023, DOI 10.3390/nu15143189",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10384735/fullTextXML",
            "consulte": "2026-09-07",
            "citation_source": "To date, there are no clinical studies aimed at evaluating the neuropharmacological activity of EO, EE, and EP",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Federal Trade Commission, FTC Permanently Stops Six Operators from Using Fake News Sites that Allegedly Deceived Consumers about Acai Berry Weight-Loss Products, 2012",
            "url": "https://www.ftc.gov/news-events/news/press-releases/2012/01/ftc-permanently-stops-six-operators-using-fake-news-sites-allegedly-deceived-consumers-about-acai",
            "consulte": "2026-09-07",
            "citation_source": "Investigative-sounding headlines presented stories that purported to document a reporter's first-hand experience with acai berry supplements - typically claiming to have lost 25 pounds in four weeks.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Foods (MDPI), Bibliometric Insights and Recent Advances in the Science, Technology, and Sustainability of Acai (Euterpe oleracea), 2026, DOI 10.3390/foods15122203",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13298187/fullTextXML",
            "consulte": "2026-09-07",
            "citation_source": "human clinical evidence still limited",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "chagas",
        "cles": [
          "chagas",
          "maladie",
          "parasite",
          "triatome",
          "hygiene",
          "risque",
          "contamination",
          "cruzi",
          "sanitaire",
          "danger",
          "securite"
        ],
        "reponse": "Il y a une chose dont aucune etiquette ne parle. Je pousse la ou vivent les punaises triatomes, et quand on broie les regimes, leurs dejections ou les insectes eux-memes peuvent passer dans la pulpe. En 2006, l'Etat du Para a declare 178 cas de maladie de Chagas aigue, dont onze a Barcarena. En 2019 encore, une equipe designait la boisson faite de ma pulpe comme la source d'infection principalement suspectee de la transmission orale en Amazonie bresilienne. Le probleme n'est pas ce que je contiens, c'est ce que l'on neglige de faire avant de me servir.",
        "ouvre": [],
        "requiert": [
          "recolte"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US Centers for Disease Control and Prevention, Emerging Infectious Diseases, Oral transmission of Chagas disease by consumption of acai palm fruit, Brazil, 2009",
            "url": "https://wwwnc.cdc.gov/eid/article/15/4/08-1450_article",
            "consulte": "2026-09-07",
            "citation_source": "In 2006, a total of 178 cases of acute Chagas disease were reported from the Amazonian state of Para, Brazil. Eleven occurred in Barcarena",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US Centers for Disease Control and Prevention, Emerging Infectious Diseases, Oral transmission of Chagas disease by consumption of acai palm fruit, Brazil, 2009",
            "url": "https://wwwnc.cdc.gov/eid/article/15/4/08-1450_article",
            "consulte": "2026-09-07",
            "citation_source": "Contamination is believed to be caused by triatomine stools on the fruit or insects inadvertently crushed during processing.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US Centers for Disease Control and Prevention, Emerging Infectious Diseases, Oral Transmission of Trypanosoma cruzi, Brazilian Amazon, 2019",
            "url": "https://wwwnc.cdc.gov/eid/article/25/1/18-0646_article",
            "consulte": "2026-09-07",
            "citation_source": "a major suspected source of infection is Euterpe oleracea, the acai berry, consumed widely as a drink made from a blended pulp.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "gout",
        "cles": [
          "gout",
          "gouter",
          "quel gout",
          "ca a quel gout",
          "c est bon",
          "deguster",
          "degustation",
          "saveur"
        ],
        "reponse": "Prenez-en une cuillere. Cliquez sur GOUTER, je vous regarde.",
        "ouvre": [],
        "requiert": [],
        "sources": []
      }
    ],
    "gout": {
      "fiction": true,
      "avertissement": "Scene inventee : personne n'a mesure ce gout, ces six personnages sont ecrits, pas des avis.",
      "sequence": {
        "odeur": "Presque rien avant la bouche. Ce n'est pas un fruit qui s'annonce de loin, contrairement a ce qu'on en dit partout.",
        "attaque": "Rien de sucre n'arrive en premier, contrairement a ce que la plupart des gens attendent de moi. C'est plutot terreux, presque une note de cacao amer.",
        "corps": "La texture est epaisse, presque grasse, loin de la baie juteuse qu'on imagine. Il n'y a d'ailleurs presque pas de pulpe a macher : l'essentiel de ce que vous tenez en main, c'est le noyau.",
        "finale": "L'amertume reste plus longtemps que le sucre, qui lui n'a jamais vraiment ete la. Ce n'est pas un dessert, ce n'est pas concu pour ca."
      },
      "ancres": [
        "Le corps rappelle une pate de cacao non sucree.",
        "La texture evoque une huile epaisse plus qu'un jus.",
        "Rien ici ne rappelle une baie sucree."
      ],
      "reactions": {
        "kesh": {
          "texte": "Ce que je percois en premier, c'est l'amer, franc et present. Le sucre, comme toujours chez moi, je ne le sens presque pas, mais ici il n'y en a de toute facon pas beaucoup.",
          "pourquoi": "L'amer, c'est ce que mes ventouses captent le mieux, et ce fruit m'en donne beaucoup a percevoir."
        },
        "nox": {
          "texte": "Une texture epaisse et sombre, ca ne ressemble a rien que je picore d'habitude dans les baies des haies. Je goute avec mefiance, morceau par morceau.",
          "pourquoi": "Ce que je ne reconnais pas, je le teste prudemment. Cette texture grasse et sombre n'est familiere pour aucun fruit que je connais."
        },
        "ada": {
          "texte": "Aucune odeur ne m'a prevenue avant la bouchee, ce qui ne m'arrive presque jamais. Je m'appuie donc entierement sur ce que je sens dans la bouche, et c'est amer avant tout.",
          "pourquoi": "Sans odeur pour me guider en amont, je decouvre tout en bouche d'un coup. C'est l'amer qui domine."
        },
        "mite": {
          "texte": "Je cherche le sucre partout et je n'en trouve pas. Je prefere largement les fleurs de durian.",
          "pourquoi": "Je ne mange que du sucre depuis toujours, et celui-ci m'en offre le moins de tous ceux que j'ai goutes ici."
        },
        "givre": {
          "texte": "Une pate grasse et sombre, un peu comme un gras que je connais, mais sans la viande derriere. C'est la premiere fois qu'un fruit d'ici me rappelle vaguement quelque chose.",
          "pourquoi": "Mon palais est calibre sur le gras, et celui-ci en a enfin un peu, alors pour une fois ma comparaison touche presque juste."
        },
        "le-marche": {
          "texte": "Celui-la, je ne le vends jamais tel quel : toujours en jus, toujours avec autre chose pour l'adoucir. Seul, seche comme ici, il est austere et amer.",
          "pourquoi": "Je le connais surtout transforme, jamais brut. Seul, sans rien pour l'adoucir, c'est l'amertume qui ressort le plus."
        }
      }
    },
    "pagesOuvertes": [
      "https://api.gbif.org/v1/species/search?q=Euterpe%20oleracea&rank=SPECIES&limit=3",
      "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12349038/fullTextXML",
      "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12667441/fullTextXML",
      "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13298187/fullTextXML",
      "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13257277/fullTextXML",
      "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10384735/fullTextXML",
      "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12751509/fullTextXML",
      "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE%3A%22Floristic%20impoverishment%20of%20Amazonian%20floodplain%20forests%22&format=json&resultType=core&pageSize=5",
      "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE%3A%22Investigating%20the%20Impact%20of%20A%C3%A7ai%22&format=json&resultType=core&pageSize=5",
      "https://www.ftc.gov/news-events/news/press-releases/2012/01/ftc-permanently-stops-six-operators-using-fake-news-sites-allegedly-deceived-consumers-about-acai",
      "https://www.ftc.gov/news-events/news/press-releases?search=acai",
      "https://wwwnc.cdc.gov/eid/article/15/4/08-1450_article",
      "https://wwwnc.cdc.gov/eid/article/25/1/18-0646_article",
      "https://api.nal.usda.gov/fdc/v1/foods/search?query=acai&api_key=DEMO_KEY&pageSize=5",
      "https://pubmed.ncbi.nlm.nih.gov/?term=Euterpe+oleracea+randomized+controlled+trial",
      "https://pubmed.ncbi.nlm.nih.gov/?term=acai+oral+Chagas+disease+Trypanosoma+cruzi+transmission",
      "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC11431067/fullTextXML"
    ],
    "faitsEcartes": [
      "La recolte par grimpe et la peconha, la boucle de feuille passee autour des chevilles, est l'angle qui m'avait ete demande. Aucune des douze pages ouvertes ne la decrit. Le seul enonce trouve sur le geste de recolte est bunch harvesting dans Foods 2026. Le grimpeur n'est donc pas ecrit, malgre la commande.",
      "La teneur en lipides de 33,52 a 53,31 g pour 100 g citee par Foods 2026 est ecartee: la phrase precise la base fraiche ou seche pour les glucides mais pas pour les lipides. Un chiffre de matiere seche presente comme pulpe fraiche serait exactement le piege maximum devenu valeur courante. Non cite.",
      "Deux series de production coexistent et ne sont pas comparables: 1,742 million de tonnes en 2024 selon Foods 2026, contre 117 063,59 puis 211 100,63 tonnes de moyenne annuelle selon Frontiers 2025 et BMC Plant Biology 2025. Elles ne mesurent visiblement pas le meme perimetre. Seule celle de 2024 est citee, sans progression calculee entre les deux.",
      "Les 35 stipes par touffe sont un maximum publie, jamais une moyenne. La reponse le dit explicitement pour eviter le glissement.",
      "Les 178 cas de Chagas aigue au Para en 2006 sont des cas declares, pas des cas attribues a l'acai. Aucune causalite totale n'est ecrite: la source parle d'un vehicule suspecte, pas d'une imputation chiffree.",
      "La base USDA FoodData Central a ete ouverte: elle ne contient aucune entree de fruit acai cru, seulement des boissons, des melanges de jus et des bols de marque, dont Beverages, Acai berry drink, fortified a 11,1 g de sucres. Le fait est reel et parlant mais il decrit le marche americain, pas le fruit: il aurait fallu le presenter comme tel, donc il n'est pas cite dans les reponses.",
      "L'ORAC et le classement antioxydant, retire par l'USDA, auraient ete l'argument le plus severe. Les trois URL tentees sur ars.usda.gov ont renvoye 404. Rien n'est ecrit sur l'ORAC faute de page reellement ouverte.",
      "Kew Plants of the World Online, le site de Kew, l'IBGE et Embrapa ont renvoye 403 ou 404. La taxonomie s'appuie donc sur GBIF, pas sur Kew comme prevu.",
      "Quatre essais randomises reperes sur PubMed, dont un de 2018 sur le syndrome metabolique et un de 2015 sur des athletes, ne sont connus que par leur titre en liste de resultats. Aucune page d'article n'a pu etre ouverte, donc aucun de leurs resultats n'est cite.",
      "Les mentions de proprietes hepatoprotectrices, anti-inflammatoires et cicatrisantes trouvees dans Foods 2024 sont ecartees: la source les enonce comme attributions de la litterature, sans mesure propre.",
      "Aucun superlatif n'est ecrit: ni fruit le plus antioxydant, ni record de polyphenols, ni comparaison avec le raisin ou la myrtille. Aucune des pages ouvertes ne porte de mesure comparative permettant de le faire."
    ],
    "espece": "Fruit tropical, drupe de palmier amazonien",
    "taille": 1.0
  },
  {
    "id": "islande",
    "iso3": "ISL",
    "mode": "documentaire",
    "type": "pays",
    "nom": "L'Islande",
    "couleur": "#12324A",
    "accent": "#7FD4E3",
    "accroche": "Je m'ecarte d'un centimetre par an et je compte mes especes sur une liste courte.",
    "ouverture": "Je suis une jeune terre posee sur une fissure de l'Atlantique. Ma roche la plus ancienne qui affleure a environ 16 millions d'annees, mes sediments de surface en ont 15 000, et je continue de m'ouvrir chaque annee. Demandez-moi ma geologie, mes especes, mon energie ou ma peche. Je repondrai avec les chiffres que je peux montrer, et je vous dirai quand je ne sais pas.",
    "ton": "Tectonique et sobre. Parle en temps geologique mais s'interesse aux petits totaux. Admet ses trous plutot que de les combler. Humour froid, phrases courtes, jamais lyrique, jamais touristique.",
    "sujets": [
      {
        "id": "identite",
        "cles": [
          "islande",
          "identite",
          "pays",
          "presente",
          "dorsale",
          "plaque",
          "atlantique",
          "population",
          "habitants",
          "frontiere"
        ],
        "reponse": "Je suis posee sur la frontiere de deux plaques, la dorsale medio-atlantique, et cela veut dire que je ne tiens pas en place. L'institut qui entretient mes reperes le formule sans emotion : je me deplace d'environ 1 cm par an dans chaque direction, assez pour deformer localement les systemes de coordonnees qu'on pose sur moi. Les gens qui vivent dessus etaient 396 500 a la fin du deuxieme trimestre 2026, ce qui me parait modeste pour tout le bruit que je fais. Je ne me raconte pas comme une terre ancienne, je me raconte comme une terre qui bouge encore.",
        "ouvre": [
          "geologie",
          "especes"
        ],
        "requiert": [],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Natturufraedistofnun Islands (Icelandic Institute of Natural History), Land Survey",
            "url": "http://www.natt.is/en/land-survey",
            "consulte": "2026-09-07",
            "citation_source": "Iceland is located on the tectonic plate boundary of the Mid-Atlantic Ridge, where crustal movements, volcanic activity, and earthquakes are part of daily life. The country shifts, on average, about 1 cm per year in each direction, and such activity causes localised distortion in reference systems.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Hagstofa Islands (Statistics Iceland), Population in the 2nd quarter 2026",
            "url": "https://www.statice.is/publications/news-archive/inhabitants/population-in-the-2nd-quarter-2026/",
            "consulte": "2026-09-07",
            "citation_source": "Iceland's population reached 396,500 at the end of Q2 2026.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "geologie",
        "cles": [
          "geologie",
          "roche",
          "socle",
          "volcan",
          "volcanisme",
          "glacier",
          "glaciation",
          "sediment",
          "paysage",
          "jeune"
        ],
        "reponse": "Ma roche la plus vieille qui affleure a environ 16 millions d'annees, Supprimer la comparaison. Garder : \"Ma roche la plus vieille qui affleure a environ 16 millions d'annees.\". Ce qui me recouvre en surface est plus jeune encore : mes sediments datent surtout de la fin de la derniere glaciation, environ 15 000 ans ou moins. Mon institut geologique resume ma fabrication en une phrase que je garde : le feu et l'eau m'ont faconnee depuis le debut. Le volcanisme, les glaciers, les eaux interieures et l'ocean autour se sont partage le travail, et aucun des quatre n'a fini.",
        "ouvre": [
          "energie"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Natturufraedistofnun Islands (Icelandic Institute of Natural History), Geology",
            "url": "http://www.natt.is/en/geology",
            "consulte": "2026-09-07",
            "citation_source": "The oldest bedrock found at the surface is about 16 million years old.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Natturufraedistofnun Islands (Icelandic Institute of Natural History), Geology",
            "url": "http://www.natt.is/en/geology",
            "consulte": "2026-09-07",
            "citation_source": "Surficial deposits, or sediments, mainly date from the end of the last Ice Age (around 15,000 years or younger).",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Natturufraedistofnun Islands (Icelandic Institute of Natural History), Geology",
            "url": "http://www.natt.is/en/geology",
            "consulte": "2026-09-07",
            "citation_source": "Fire and water have shaped Iceland from the outset. Volcanism, glaciers, inland waters, and the surrounding ocean have all played a role in sculpting the landscape we recognise today.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "energie",
        "cles": [
          "energie",
          "geothermie",
          "geothermique",
          "electricite",
          "hydraulique",
          "barrage",
          "vapeur",
          "chaleur",
          "courant",
          "eolien"
        ],
        "reponse": "On me presente volontiers comme un pays de vapeur, mais quand j'ouvre le tableau de mon autorite de l'energie, c'est l'hydraulique qui passe devant. Ma page affiche 14.195 GWh pour l'hydraulique et 5.916 GWh pour la geothermie, avec un point dont je ne sais pas s'il separe des milliers ou des decimales, et 5 GWh pour le vent. Je vous donne les nombres tels qu'ils sont ecrits.. Ma chaleur souterraine n'est donc pas ma premiere source d'electricite, elle est la seconde, et l'ecart n'est pas mince. Je refuse de vous donner l'annee de ces compteurs, parce que la page ne la porte pas et que je n'invente pas une date pour faire propre. Depuis le 1er janvier 2025, une nouvelle agence de l'environnement et de l'energie a commence ses operations. Ce que devient ce tableau chez elle, je ne le sais pas..",
        "ouvre": [],
        "requiert": [
          "geologie"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Orkustofnun (National Energy Authority of Iceland), Home",
            "url": "https://orkustofnun.is/en/",
            "consulte": "2026-09-07",
            "citation_source": "**Electricity Production Statistics**\n- Hydro: 14.195 GWh\n- Geothermal: 5.916 GWh\n- Wind: 5 GWh",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Orkustofnun (National Energy Authority of Iceland), Home",
            "url": "https://orkustofnun.is/en/",
            "consulte": "2026-09-07",
            "citation_source": "On 1 January 2025, the Environment and Energy Agency began operations",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "especes",
        "cles": [
          "especes",
          "animaux",
          "faune",
          "flore",
          "funga",
          "champignon",
          "algue",
          "oiseau",
          "biodiversite",
          "plantes"
        ],
        "reponse": "Comptez mes animaux et vous n'irez pas loin : plus de 2 000 especes d'eau douce et terrestres vivent chez moi, et plus de 2 500 especes marines ont ete trouvees dans ma zone economique exclusive. Ma flore et ma funga tiennent dans une fourchette estimee de 5 000 a 6 000 especes, dont les champignons et les algues representent a peu pres les deux tiers. Autrement dit, mes plus gros totaux ne sont pas ceux qu'on vient voir : la mer en compte plus que la terre ferme, et les deux tiers de ma flore et de ma funga sont des champignons et des algues. Je ne suis pas une terre de grands troupeaux, je suis une terre de petites listes tenues avec soin.",
        "ouvre": [
          "peche"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Natturufraedistofnun Islands (Icelandic Institute of Natural History), Fauna",
            "url": "http://www.natt.is/en/fauna",
            "consulte": "2026-09-07",
            "citation_source": "More than 2,000 freshwater and terrestrial animal species live in Iceland, and over 2,500 marine animal species have been found in Iceland's exclusive economic zone.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Natturufraedistofnun Islands (Icelandic Institute of Natural History), Flora & Funga",
            "url": "http://www.natt.is/en/flora-funga",
            "consulte": "2026-09-07",
            "citation_source": "Iceland's flora and funga is believed to comprise some 5,000-6,000 species.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Natturufraedistofnun Islands (Icelandic Institute of Natural History), Flora & Funga",
            "url": "http://www.natt.is/en/flora-funga",
            "consulte": "2026-09-07",
            "citation_source": "Fungi and algae account for around 2/3 of the total.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "peche",
        "cles": [
          "peche",
          "poisson",
          "capelan",
          "tonnes",
          "debarquement",
          "pelagique",
          "chalutier",
          "quota",
          "ocean",
          "prise"
        ],
        "reponse": "En juillet 2026, on a debarque chez moi pres de 42 000 tonnes, soit 51 % de moins qu'en juillet 2025, et je me garde d'expliquer cet ecart en une phrase que je ne peux pas prouver. Sur les douze mois qui s'achevent en juillet 2026, le total remonte a 1 062 000 tonnes, en hausse de 8 %, et le pelagique a pris 20 % sur la periode, le capelan en tete, pendant que le demersal reculait de 6 %. Un mois maigre dans une periode grasse : mes eaux ne se lisent pas au mois. Je compte mes prises comme je compte mes habitants, en chiffres qui bougent tout le temps.",
        "ouvre": [],
        "requiert": [
          "especes"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Hagstofa Islands (Statistics Iceland), Fish catch in July 2026",
            "url": "https://www.statice.is/publications/news-archive/fisheries/fish-catch-in-july-2026/",
            "consulte": "2026-09-07",
            "citation_source": "Total catch landed in July 2026 was nearly 42 thousand tonnes, 51% less than in July 2025",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Hagstofa Islands (Statistics Iceland), Fish catch in July 2026",
            "url": "https://www.statice.is/publications/news-archive/fisheries/fish-catch-in-july-2026/",
            "consulte": "2026-09-07",
            "citation_source": "**12-Month Period (August 2025 - July 2026):**\n- Total catch: 1,062 thousand tonnes, up 8% from previous period\n- Pelagic catch: Up 20%, \"largely driven by capelin\"",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Hagstofa Islands (Statistics Iceland), News archive, Fisheries",
            "url": "https://www.statice.is/publications/news-archive/",
            "consulte": "2026-09-07",
            "citation_source": "**July 2026:**\n\"Total catch in July was nearly 42 thousand tonnes\"",
            "ancrage": "global"
          }
        ]
      }
    ],
    "pagesOuvertes": [
      "http://www.natt.is/en/land-survey",
      "http://www.natt.is/en/geology",
      "http://www.natt.is/en/fauna",
      "http://www.natt.is/en/flora-funga",
      "https://www.statice.is/publications/news-archive/fisheries/fish-catch-in-july-2026/",
      "https://www.statice.is/publications/news-archive/inhabitants/population-in-the-2nd-quarter-2026/",
      "https://www.statice.is/publications/news-archive/",
      "https://www.statice.is/statistics/business-sectors/fisheries/",
      "https://www.statice.is/statistics/environment/energy/",
      "https://orkustofnun.is/en/",
      "https://orkustofnun.is/en/information/numerical_data/energy",
      "https://orkustofnun.is/en/information/numerical_data/heat",
      "https://orkustofnun.is/en/information/numerical_data/electricity",
      "https://uos.is/en",
      "https://en.vedur.is/earthquakes-and-volcanism/volcanoes/",
      "https://www.hafogvatn.is/en",
      "https://www.hafogvatn.is/en/harvesting-advice",
      "https://www.arnastofnun.is/en",
      "https://earthice.hi.is/"
    ],
    "faitsEcartes": [
      "Le nombre de systemes volcaniques actifs en Islande (souvent donne autour de trente) : aucune des pages institutionnelles ouvertes, y compris celles du Vedurstofa et du Catalogue of Icelandic Volcanoes, n'affichait ce chiffre en texte. Non ecrit.",
      "La frequence moyenne des eruptions islandaises (le fameux 'une eruption tous les quatre ou cinq ans') : introuvable sur les pages ouvertes du service meteorologique. Non ecrit.",
      "La part des logements islandais chauffes a la geothermie (souvent citee autour de neuf sur dix) : la table Orkustofnun 'Proportion of energy source in space heating based on heated space in Iceland 1952-2020' existe, mais ses pourcentages sont dans un fichier Excel que je n'ai pas ouvert. Non ecrit.",
      "Les '100 % d'electricite renouvelable' : formule absente des pages Orkustofnun et Hagstofa ouvertes. La page IEA pays Islande a renvoye une erreur 403. Non ecrit.",
      "Les faits sur Surtsey et Thingvellir (date d'eruption, superficie, colonisation par les especes, annee de fondation de l'Althing) : les deux fiches UNESCO ont renvoye une erreur 403. Non ecrit.",
      "Le TAC de morue et de capelan pour l'annee de peche 2026/2027 : la page 'Harvesting advice' du Hafrannsoknastofnunin liste bien les avis dates du 12 juin 2026, mais les tonnages sont dans des PDF que je n'ai pas ouverts. Non ecrit.",
      "'Le renard polaire est le seul mammifere terrestre indigene d'Islande' : la page Fauna de l'institut ne le dit pas, elle ne donne que des totaux d'especes. Non ecrit.",
      "Une annee de reference pour les compteurs d'electricite d'Orkustofnun : la page ne porte aucune etiquette de periode. J'ai cite les valeurs sans leur coller une annee inventee.",
      "Une cause a la baisse de 51 % des debarquements de juillet 2026 : les deux pages Hagstofa ouvertes donnent l'ecart, jamais son explication. Aucune causalite ecrite.",
      "Un superlatif du type 'le pays le plus volcanique du monde' ou 'la plus grande part de geothermie au monde' : aucune page ouverte ne porte de comparaison mondiale mesuree. Non ecrit.",
      "La conversion du total glissant de 1 062 000 tonnes en 'record annuel' ou en 'production annuelle' : la source parle d'une periode de douze mois d'aout 2025 a juillet 2026, pas d'une annee civile ni d'un record. Formulation gardee telle quelle.",
      "Tout fait sur la langue islandaise, les manuscrits medievaux ou le Codex Regius : les pages de l'Institut Arni Magnusson ouvertes ne portaient aucune phrase citable avec chiffre, et la page 'manuscripts' a renvoye une erreur 404. Sujet abandonne."
    ],
    "espece": "pays nordique insulaire",
    "taille": 1.0
  },
  {
    "id": "japon",
    "iso3": "JPN",
    "mode": "documentaire",
    "type": "pays",
    "nom": "Le Japon",
    "couleur": "#1B3A5C",
    "accent": "#D8443C",
    "accroche": "Je suis un pays qui ne tient jamais tout a fait en place.",
    "ouverture": "Posez-moi une question et je repondrai par une mesure. C'est la seule facon honnete que j'aie de parler de moi : je ne me connais qu'a travers ce que l'on compte sur mon dos, les hectares, les secousses, les tonnes de mandarines. Le reste, je le laisse aux gens qui vivent dessus.",
    "ton": "Calme, precis, presque administratif, avec une ironie tres sobre. Il parle en chiffres releves plutot qu'en images, s'interrompt pour signaler ce qu'il ignore, et refuse d'expliquer les causes quand il n'a que des constats. Jamais lyrique, jamais folklorique.",
    "sujets": [
      {
        "id": "identite",
        "cles": [
          "japon",
          "archipel",
          "iles",
          "presentation",
          "surface",
          "territoire",
          "geographie"
        ],
        "reponse": "Je suis un arc d'iles pose au large du continent, etire du nord-est au sud-ouest, avec la mer du Japon glissee entre nous deux. Mes grandes terres s'appellent Hokkaido, Honshu, Shikoku, Kyushu et Okinawa, et plus de quatorze mille ilots de toutes tailles s'y ajoutent. Ma surface totale fait 377 976 kilometres carres. Les trois quarts environ sont du relief, montagnes et collines confondues : je suis grand surtout en hauteur, et le plat, chez moi, se merite.",
        "ouvre": [
          "seismes",
          "forets"
        ],
        "requiert": [],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Statistics Bureau of Japan, Statistical Handbook of Japan 2025, chapitre 1 Land and Climate",
            "url": "https://www.stat.go.jp/english/data/handbook/pdf/2025all.pdf",
            "consulte": "2026-09-07",
            "citation_source": "It consists of the main islands of Hokkaido, Honshu, Shikoku, Kyushu and Okinawa, and more than 14,000 smaller islands of various sizes. Its surface area totals 377,976 square kilometers.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Statistics Bureau of Japan, Statistical Handbook of Japan 2025, chapitre 1 Land and Climate",
            "url": "https://www.stat.go.jp/english/data/handbook/pdf/2025all.pdf",
            "consulte": "2026-09-07",
            "citation_source": "The land is full of undulations, with mountainous regions including hilly terrain accounting for about three-quarters of its total area.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "seismes",
        "cles": [
          "seisme",
          "tremblement de terre",
          "sismique",
          "secousse",
          "magnitude",
          "geologie",
          "volcan"
        ],
        "reponse": "On me situe dans la ceinture mobile la plus jeune du monde, et cela s'entend. Comptez les secousses de magnitude 5 et plus, comparez au total mondial : pres d'un dixieme se produisent chez moi et dans mes environs. Sur la decennie 2014-2023, cela fait une moyenne de dix-sept secousses par an entre les magnitudes 6,0 et 6,9. Je ne le vis pas comme une malediction, plutot comme une respiration dont j'ai appris le rythme sans jamais pouvoir en prevoir le prochain souffle.",
        "ouvre": [
          "forets",
          "saisons"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Japan Meteorological Agency, 地震・津波に関する質問 (FAQ sismicite)",
            "url": "https://www.jma.go.jp/jma/kishou/know/faq/faq7.html",
            "consulte": "2026-09-07",
            "citation_source": "日本及びその周辺では、世界で起こっている地震のほぼ1/10にあたる数の地震が発生していることが分かります。",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Japan Meteorological Agency, 地震・津波に関する質問 (FAQ sismicite)",
            "url": "https://www.jma.go.jp/jma/kishou/know/faq/faq7.html",
            "consulte": "2026-09-07",
            "citation_source": "Average annual earthquakes (2014-2023): M6.0-6.9: 17",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Statistics Bureau of Japan, Statistical Handbook of Japan 2025, chapitre 1 Land and Climate",
            "url": "https://www.stat.go.jp/english/data/handbook/pdf/2025all.pdf",
            "consulte": "2026-09-07",
            "citation_source": "Since the Japanese archipelago is located in the world's newest mobile belt, it is particularly prone to various geological phenomena.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "forets",
        "cles": [
          "foret",
          "arbre",
          "bois",
          "montagne",
          "nature",
          "especes",
          "parcs"
        ],
        "reponse": "Vous m'imaginez sans doute en beton : regardez les pentes. En 2022, ma foret couvrait 25,02 millions d'hectares, soit environ 70 pour cent de ma surface. La part naturelle en represente 13,55 millions d'hectares, 10,09 millions ont ete plantes par des mains humaines, et le manuel laisse le reste sans etiquette. J'abrite en plus trente-cinq parcs nationaux. Sur ce que mon isolement produit, je n'ai qu'un texte de 1997 sous la main : une grande diversite d'especes comparee a des pays de taille et de latitude semblables. Personne ne l'a rechiffre depuis, et je n'irai pas plus loin.",
        "ouvre": [
          "fruits"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Statistics Bureau of Japan, Statistical Handbook of Japan 2025, chapitre 5 Agriculture, Forestry, and Fisheries",
            "url": "https://www.stat.go.jp/english/data/handbook/pdf/2025all.pdf",
            "consulte": "2026-09-07",
            "citation_source": "As of 2022, Japan's forest land area is 25.02 million hectares (approximately 70 percent of the entire surface area of the country). Among Japan's forests, natural forests account for 13.55 million hectares, while planted forests make up 10.09 million hectares.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Ministry of the Environment of Japan, Biodiversity and Wildlife",
            "url": "https://www.env.go.jp/en/nature/biodiv/index.html",
            "consulte": "2026-09-07",
            "citation_source": "These natural features and Japan's isolation have produced high diversity among species when compared to other countries of similar size and latitude.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Ministry of the Environment of Japan, National Parks of Japan",
            "url": "https://www.env.go.jp/en/nature/nps/park/parks/index.html",
            "consulte": "2026-09-07",
            "citation_source": "Japan has 35 national parks distributed across eight regions: Hokkaido, Tohoku, Kanto, Chubu, Kinki, Chugoku & Shikoku, and Kyushu.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "fruits",
        "cles": [
          "fruit",
          "mandarine",
          "pomme",
          "raisin",
          "agriculture",
          "recolte",
          "verger"
        ],
        "reponse": "Le plat se merite, je vous l'ai dit : il me reste peu de terre cultivable, alors elle travaille dur. En 2023, mes vergers ont donne 682 000 tonnes de mandarines, 604 000 de pommes, 183 000 de poires japonaises et 167 000 de raisin. Ma production agricole totale de cette annee-la s'est etablie a 9 500 milliards de yens, en hausse de 5,5 pour cent sur un an. La mandarine est passee devant la pomme cette annee-la, et je me garde bien d'en tirer une explication : je ne fais que constater ce qui sort de mes champs.",
        "ouvre": [
          "saisons"
        ],
        "requiert": [
          "forets"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Statistics Bureau of Japan, Statistical Handbook of Japan 2025, Table 5.2 Agricultural Harvest (Thousand tons), colonnes 2019 a 2023",
            "url": "https://www.stat.go.jp/english/data/handbook/pdf/2025all.pdf",
            "consulte": "2026-09-07",
            "citation_source": "Fruits\n   Mandarins ................................... 747 766 749 682 682\n   Apples ........................................ 702 763 662 737 604\n   Grapes ........................................ 173 163 165 163 167\n   Japanese pears ............................ 210 171 185 197 183",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Statistics Bureau of Japan, Statistical Handbook of Japan 2025, chapitre 5 Agriculture, Forestry, and Fisheries",
            "url": "https://www.stat.go.jp/english/data/handbook/pdf/2025all.pdf",
            "consulte": "2026-09-07",
            "citation_source": "Japan's total agricultural output in 2023 was 9.50 trillion yen, up 5.5 percent from the previous year.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "saisons",
        "cles": [
          "saison",
          "pluie",
          "climat",
          "mousson",
          "typhon",
          "neige",
          "meteo"
        ],
        "reponse": "Mon climat est tempere et maritime, mais il ne se comporte pas de la meme facon des deux cotes de Honshu, parce qu'une succession de chaines de montagnes me coupe du nord au sud. L'hiver, la mousson du nord-ouest deverse une neige abondante sur la facade de la mer du Japon et laisse le versant Pacifique relativement sec. Ma particularite, c'est d'avoir deux longues saisons pluvieuses : l'une au debut de l'ete quand la mousson du sud-est se leve, l'autre en automne quand les vents cessent. Entre l'ete et l'automne, les cyclones tropicaux nes au sud viennent me frapper en typhons, et depuis quelques annees la tendance va vers les extremes, canicules records et pluies torrentielles tres localisees.",
        "ouvre": [],
        "requiert": [
          "fruits"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Statistics Bureau of Japan, Statistical Handbook of Japan 2025, chapitre 1 Land and Climate",
            "url": "https://www.stat.go.jp/english/data/handbook/pdf/2025all.pdf",
            "consulte": "2026-09-07",
            "citation_source": "Another unique characteristic of Japan's climate is that it has two long spells of rainy seasons, one in early summer when the southeast monsoon begins to blow, and the other in autumn when the winds cease.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Statistics Bureau of Japan, Statistical Handbook of Japan 2025, chapitre 1 Land and Climate",
            "url": "https://www.stat.go.jp/english/data/handbook/pdf/2025all.pdf",
            "consulte": "2026-09-07",
            "citation_source": "the northwest monsoon in the winter brings humid conditions with heavy precipitation (snow) to the Sea of Japan side of Honshu but comparatively dry weather with low precipitation to the Pacific Ocean side",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Statistics Bureau of Japan, Statistical Handbook of Japan 2025, chapitre 1 Land and Climate",
            "url": "https://www.stat.go.jp/english/data/handbook/pdf/2025all.pdf",
            "consulte": "2026-09-07",
            "citation_source": "In recent years, there has been a tendency toward extreme weather, such as record-breaking heat waves in summer, and frequent damage due to localized intense torrential rains.",
            "ancrage": "global"
          }
        ]
      }
    ],
    "pagesOuvertes": [
      "https://www.stat.go.jp/english/data/handbook/index.html",
      "https://www.stat.go.jp/english/data/handbook/pdf/2025all.pdf",
      "https://www.jma.go.jp/jma/kishou/know/faq/faq7.html",
      "https://www.env.go.jp/en/nature/biodiv/index.html",
      "https://www.env.go.jp/en/nature/nps/park/parks/index.html",
      "https://www.bunka.go.jp/english/policy/japanese_language/index.html",
      "https://www.ninjal.ac.jp/english/",
      "https://www.rinya.maff.go.jp/e/",
      "https://eco.mtk.nao.ac.jp/koyomi/wiki/"
    ],
    "faitsEcartes": [
      "Les 67,0 pour cent de 2020 designent 'forestland and fields' dans le tableau 1.6 du manuel statistique, un poste qui melange forets et landes. Je ne l'ai pas presente comme un taux de boisement : le chiffre de foret retenu est celui de 2022, 25,02 millions d'hectares soit environ 70 pour cent, qui vient du chapitre Forestry.",
      "Le nombre de caracteres de la liste officielle des joyo kanji : la page de l'Agence pour les affaires culturelles a bien ete ouverte, mais le texte japonais revenait mal encode et la page anglaise ne donne aucun chiffre. Aucun nombre cite, l'angle langue est abandonne.",
      "Le nombre de volcans actifs du Japon : les pages volcans de la JMA visees ont renvoye des erreurs 404 ou une redirection morte. Aucun chiffre de volcans n'apparait donc dans l'entite, alors que le manuel evoque seulement 'the proportion of active volcanoes' sans le quantifier.",
      "Le taux d'endemisme japonais : la page biodiversite du ministere de l'Environnement affirme une forte diversite d'especes mais ne publie aucun compte ni aucun pourcentage. Aucune espece endemique n'est nommee ni chiffree ici, et la fiche UNESCO du bien naturel Amami-Oshima, Tokunoshima, nord d'Okinawa et Iriomote a repondu 403.",
      "La proportion d'un dixieme des seismes mondiaux porte, dans le texte de la JMA, sur 'le Japon et ses environs'. Je ne l'ai pas resserree sur le seul territoire terrestre, ce qui aurait gonfle le fait.",
      "Les 3 776 metres du mont Fuji et les chiffres des lacs et rivieres etaient disponibles dans le meme manuel, mais aucun sujet ne les portait sans remplissage : ecartes par manque de place, pas par doute sur la source.",
      "Le decoupage traditionnel en vingt-quatre periodes solaires : la page de l'Observatoire astronomique national du Japon a ete ouverte mais son contenu revenait illisible. Aucune definition n'est citee, le sujet saisons s'appuie uniquement sur le texte climatique du manuel statistique.",
      "La moyenne annuelle d'environ un millier de seismes de magnitude 4,0 a 4,9 figurait dans la meme liste de la JMA. Un seul palier a ete retenu, celui des magnitudes 6,0 a 6,9, pour ne pas empiler des ordres de grandeur mal cadres."
    ],
    "espece": "Archipel d'Asie de l'Est",
    "taille": 1.0
  },
  {
    "id": "guepard",
    "pays": ["BWA"],
    "mode": "documentaire",
    "nom": "Le Guepard",
    "couleur": "#C9873E",
    "accent": "#1C1712",
    "accroche": "On me prête des vitesses de reportage, le terrain m'a mesuré autrement.",
    "ouverture": "Je suis le guépard, et mes chiffres suffisent, je n'ai pas besoin qu'on m'en invente. On me colle des vitesses de reportage, moi je n'ai que celle qu'un collier GPS a enregistrée sur le terrain, chasse après chasse. Posez-moi une question, je réponds avec une mesure, pas un superlatif gratuit.",
    "ton": "Voix sèche et précise, presque clinique ; je préfère un chiffre exact à un adjectif flatteur. Je corrige sans agressivité les légendes qu'on me prête, avec une pointe d'ironie quand la presse s'emballe. Je n'affirme rien sans une mesure derrière.",
    "sujets": [
      {
        "id": "identite",
        "cles": ["guepard", "acinonyx", "griffes", "identite", "presentation", "felin", "anatomie"],
        "reponse": "Mon nom de genre, Acinonyx, renvoie directement à une particularité de mes pattes. Selon l'Union internationale pour la conservation de la nature, ce nom fait référence à mes griffes semi-rétractiles, une mesure anatomique plutôt qu'un adjectif.",
        "ouvre": ["vitesse", "genetique"],
        "requiert": [],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Durant S.M., Groom R., Ipavec A., Mitchell N. et Khalatbari L. (2022). Acinonyx jubatus. The IUCN Red List of Threatened Species 2022: e.T219A124366642.",
            "url": "https://www.cms.int/sites/default/files/document/cites-cms_aci2_inf.10_cheetah-iucn-red-list_e.pdf",
            "consulte": "2026-09-21",
            "citation_source": "The generic name Acinonyx is a reference to its semi-retractile claws (Caro 1994).",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "vitesse",
        "cles": ["vitesse", "guepard", "chasse", "botswana", "mesure", "terrain", "collier gps", "okavango"],
        "reponse": "Sur le terrain, dans la réserve de Moremi, au Botswana, des colliers GPS couplés à une centrale inertielle ont suivi des guépards sauvages en pleine chasse. Sur 367 courses de chasse chez 5 individus, ma vitesse de pointe mesurée atteint 25,9 mètres par seconde, soit 93 kilomètres par heure. C'est un maximum mesuré dans l'effort réel de la chasse, pas un chiffre de laboratoire ni de reportage.",
        "ouvre": ["muscles"],
        "requiert": ["identite"],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Wilson A.M., Lowe J.C., Roskilly K., Hudson P.E., Golabek K.A., McNutt J.W. (2013). \"Locomotion dynamics of hunting in wild cheetahs.\" Nature 498, 185-189.",
            "url": "https://pubmed.ncbi.nlm.nih.gov/23765495/",
            "consulte": "2026-09-21",
            "citation_source": "A remarkable top speed of 25.9 m s(-1) (58 m.p.h. or 93 km h(-1)) was recorded",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "muscles",
        "cles": ["muscles", "fibres", "vastus", "type iix", "physiologie", "biopsie"],
        "reponse": "Une biopsie de mon vastus lateralis, le muscle de cuisse le plus sollicité en course, a mesuré la répartition de mes fibres musculaires : environ 17 pour cent de type I, 21 pour cent de type IIA, et 62 pour cent de type IIX. Le type IIX est le plus rapide et le plus puissant des trois, et il domine très largement chez moi.",
        "ouvre": [],
        "requiert": ["vitesse"],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Kohn T.A. et al. (2024). \"Does sex matter in the cheetah? Insights into the skeletal muscle of the fastest land animal.\" Journal of Experimental Biology 227(15):jeb247284.",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11418166/",
            "consulte": "2026-09-21",
            "citation_source": "Overall, cheetah muscle had predominantly type IIX fibres, which was confirmed by the myosin heavy chain isoform content (mean±s.d. type I: 17±8%, type IIA: 21±6%, type IIX: 62±12%)",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "genetique",
        "cles": ["genetique", "diversite", "effondrement", "greffes", "allogreffe", "variation genetique"],
        "reponse": "Mon histoire récente porte la marque d'un effondrement génétique. Une étude a mesuré chez moi 90 à 99 pour cent de diversité en moins que les autres félins et la plupart des autres mammifères. Une analyse plus récente de mon génome resserre encore le constat : je ne conserve que 0,1 à 4 pour cent de la variation génétique observée chez la plupart des espèces vivantes. Cette pauvreté génétique a aussi été démontrée en chirurgie : des greffons de peau prélevés sur des guépards non apparentés n'ont jamais été rejetés chez moi, alors que mon système immunitaire, parfaitement fonctionnel par ailleurs, rejette bien des greffons de peau de chat domestique.",
        "ouvre": ["conservation"],
        "requiert": ["identite"],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "O'Brien S.J. et Johnson W.E. (2017). \"Conservation Genetics of the Cheetah: Lessons Learned and New Opportunities.\" Journal of Heredity 108(6):671-677, citant O'Brien et al. 1983, Science.",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5892392",
            "consulte": "2026-09-21",
            "citation_source": "Cheetahs displayed 90–99% less overall diversity than other cats and most other mammals based upon early surveys of nuclear allozymes, 2DE skin fibroblast proteins, and RFLP diversity in the major histocompatibility complex",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "O'Brien S.J. et Johnson W.E. (2017). \"Conservation Genetics of the Cheetah: Lessons Learned and New Opportunities.\" Journal of Heredity 108(6):671-677, citant Dobrynin et al. 2015, Genome Biology.",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5892392",
            "consulte": "2026-09-21",
            "citation_source": "Cheetahs retain only 0.1–4% of overall genetic variation seen in most living species",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "O'Brien S.J. et Johnson W.E. (2017). \"Conservation Genetics of the Cheetah: Lessons Learned and New Opportunities.\" Journal of Heredity 108(6):671-677, citant O'Brien et al. 1985, Science.",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5892392",
            "consulte": "2026-09-21",
            "citation_source": "cheetahs failed to reject surgically implanted skin allografts from unrelated cheetah donors, while their perfectly functional immune system adequately rejected xenograft skin patches from the domestic cat",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "conservation",
        "cles": ["conservation", "uicn", "population", "cites", "aire de repartition", "vulnerable", "statut"],
        "reponse": "L'Union internationale pour la conservation de la nature me classe Vulnérable, selon les critères A4b et C1, avec une population mondiale estimée à 6 500 individus matures. Je ne subsiste plus que sur 9 pour cent de mon aire de répartition historique, qui couvrait autrefois l'Afrique et le sud-ouest de l'Asie. Mon commerce international, spécimens vivants, trophées ou peaux, est réglementé au niveau le plus strict de la convention CITES, en annexe I.",
        "ouvre": [],
        "requiert": ["genetique"],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Durant S.M., Groom R., Ipavec A., Mitchell N. et Khalatbari L. (2022). Acinonyx jubatus. The IUCN Red List of Threatened Species 2022: e.T219A124366642, évalué le 17 mai 2021.",
            "url": "https://www.cms.int/sites/default/files/document/cites-cms_aci2_inf.10_cheetah-iucn-red-list_e.pdf",
            "consulte": "2026-09-21",
            "citation_source": "The Cheetah is assessed as Vulnerable under criterion A4b based on a population size reduction of 37% (21-51%) over three generations (approximately 15 years) between 2017 and 2032 (A4b) and criterion C1 based on a global population size (tentatively estimated at 6,500 mature individuals)",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Durant S.M., Groom R., Ipavec A., Mitchell N. et Khalatbari L. (2022). Acinonyx jubatus. The IUCN Red List of Threatened Species 2022, citant Durant et al. 2017.",
            "url": "https://www.cms.int/sites/default/files/document/cites-cms_aci2_inf.10_cheetah-iucn-red-list_e.pdf",
            "consulte": "2026-09-21",
            "citation_source": "Cheetah are now known to occur in only 9% of their past distributional range",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Durant S.M., Groom R., Ipavec A., Mitchell N. et Khalatbari L. (2022). Acinonyx jubatus. The IUCN Red List of Threatened Species 2022, section Conservation Actions.",
            "url": "https://www.cms.int/sites/default/files/document/cites-cms_aci2_inf.10_cheetah-iucn-red-list_e.pdf",
            "consulte": "2026-09-21",
            "citation_source": "The species is listed on Appendix I of CITES, Appendix 1 of CMS and is protected under national",
            "ancrage": "global"
          }
        ]
      }
    ],
    "pagesOuvertes": [
      "https://www.cms.int/sites/default/files/document/cites-cms_aci2_inf.10_cheetah-iucn-red-list_e.pdf",
      "https://pubmed.ncbi.nlm.nih.gov/23765495/",
      "https://academic.oup.com/mspecies/article/doi/10.1644/771/2600836",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC5892392",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC11418166/"
    ],
    "faitsEcartes": [
      "Fonction précise des larmes faciales comme réduction de l'éblouissement solaire ('effet lunettes de soleil') : hypothèse répétée sur des sites grand public mais aucune source primaire rang A ou B ouverte aujourd'hui ne démontre ni ne teste ce mécanisme.",
      "Vitesse de pointe 'record' souvent citée dans la presse (110-120 km/h) : chiffre issu de mesures non standardisées relayées par la presse généraliste, jamais retrouvé dans un article à comité de lecture ouvert aujourd'hui. Écarté au profit de la mesure de terrain sourcée (Wilson et al. 2013, 93 km/h).",
      "Quotas d'exportation CITES précis par pays (Botswana, Namibie, Zimbabwe) : les pages CITES officielles ont renvoyé une erreur d'accès lors de la tentative d'ouverture directe aujourd'hui ; faute de citation exacte copiée sur la page elle-même, le fait est écarté.",
      "La forme exacte des griffes et la bande lacrymale comparée au léopard et au puma (Krausman & Morales 2005, Mammalian Species) : page payante, texte intégral non rouvrable pour confirmer les citations mot pour mot. Non republié.",
      "Les chiffres de 47 loci allozymiques sur 55 individus et de '14 greffes de peau' venaient de la même source payante et n'ont pas survécu au contrôle adversarial du 21/09 (le compte de 14 greffes ne figurait nulle part dans l'article de 2017 cité pour le confirmer). Sujet muscles et sujet genetique reconstruits le 21/09 sur deux sources ouvertes et rouvrables : Kohn et al. 2024 (Journal of Experimental Biology, biopsie du vastus lateralis) pour les fibres musculaires, O'Brien et Johnson 2017 (Journal of Heredity, revue en accès libre) pour la diversité génétique et les greffes de peau."
    ],
    "espece": "Félin",
    "taille": 1.15
  },
  {
    "id": "mangoustan",
    "pays": ["MYS"],
    "mode": "documentaire",
    "type": "fruit",
    "nom": "Le Mangoustan",
    "couleur": "#4A1942",
    "accent": "#F2E6D8",
    "accroche": "On me dit reine des fruits, mais mon histoire génétique refuse encore de se laisser trancher.",
    "ouverture": "Dans la littérature scientifique, on me désigne comme la reine des fruits, un arbre tropical que l'on trouve en Asie du Sud-Est. Mon nom accepté dans les bases de référence est Garcinia mangostana L., de la famille des Clusiaceae. Mais derrière ce nom stable, mon histoire génétique reste débattue : ma reproduction, mes chromosomes et mon origine ne font pas encore consensus parmi les chercheurs. Posez vos questions, je vous donne ce que les études ont mesuré, pas plus.",
    "ton": "Une voix posée, presque académique, qui préfère citer une étude plutôt que trancher elle-même. Je reconnais volontiers ce qui reste incertain ou débattu au lieu de le lisser. Curieuse de ma propre génétique, un peu amusée par les questions qu'elle laisse ouvertes.",
    "sujets": [
      {
        "id": "identite",
        "cles": ["garcinia", "mangostana", "taxonomie", "identite", "presentation", "reine des fruits", "asie du sud est", "espece", "classification"],
        "reponse": "Mon nom accepté dans le référentiel taxonomique du GBIF est Garcinia mangostana L., espèce du genre Garcinia, de la famille des Clusiaceae, ordre des Malpighiales, classe des Magnoliopsida. Dans la littérature scientifique, on me désigne comme la reine des fruits, un arbre tropical que l'on trouve en Asie du Sud-Est. Ce nom et ce statut sont stables. Ce qui l'est beaucoup moins, c'est tout ce qui touche à ma génétique et à mon origine.",
        "ouvre": ["genome", "composes"],
        "requiert": [],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "GBIF Backbone Taxonomy, fiche espece Garcinia mangostana L., taxonKey 3189571 (GBIF Secretariat)",
            "url": "https://api.gbif.org/v1/species/3189571",
            "consulte": "2026-09-21",
            "citation_source": "\"kingdom\":\"Plantae\", \"phylum\":\"Tracheophyta\", \"class\":\"Magnoliopsida\", \"order\":\"Malpighiales\", \"family\":\"Clusiaceae\", \"genus\":\"Garcinia\", \"scientificName\":\"Garcinia mangostana L.\", \"taxonomicStatus\":\"ACCEPTED\", \"rank\":\"SPECIES\"",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Abu Bakar S, Sampathrajan S, Loke KK, Goh HH, Mohd Noor N. \"DNA-seq analysis of Garcinia mangostana.\" Genomics Data. 2016;7:62-63. DOI 10.1016/j.gdata.2015.11.018",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4778587/",
            "consulte": "2026-09-21",
            "citation_source": "Mangosteen (Garcinia mangostana Linn.) is a tropical tree mainly found in South East Asia and considered as \"the queen of fruits\".",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "genome",
        "cles": ["genome", "assemblage", "sequencage", "scaffolds", "paires de bases", "bio informatique", "adn genomique"],
        "reponse": "On a séquencé mon génome et assemblé les fragments obtenus en scaffolds. Cet assemblage totalise 279 483 966 paires de bases. C'est une mesure d'assemblage bio-informatique, pas un décompte définitif de tout mon patrimoine génétique, mais c'est la base sur laquelle les chercheurs s'appuient pour comprendre le reste de mon histoire.",
        "ouvre": ["reproduction"],
        "requiert": ["identite"],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Abu Bakar S, Sampathrajan S, Loke KK, Goh HH, Mohd Noor N. \"DNA-seq analysis of Garcinia mangostana.\" Genomics Data. 2016;7:62-63. DOI 10.1016/j.gdata.2015.11.018",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4778587/",
            "consulte": "2026-09-21",
            "citation_source": "279,483,966 (valeur de scaffold size donnee dans le Tableau 1 de l'article, colonne SSPACE scaffolding)",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "reproduction",
        "cles": ["reproduction", "apomixie", "pollen", "pieds males", "fecondation", "sexuee", "debat"],
        "reponse": "Je ne suis pas apomictique de manière obligatoire. Mon mode de reproduction est facultatif : une reproduction sexuée reste possible chez moi dès qu'une source de pollen viable est disponible. Ça soulève une question plus large, et pas résolue : est-ce que des pieds mâles existent vraiment chez moi ? Cette question divise les botanistes depuis les années 1830, sans trancher.",
        "ouvre": ["chromosomes"],
        "requiert": ["genome"],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Yao X et al. \"The origin of cultivated mangosteen (Garcinia mangostana L. var. mangostana): Critical assessments and an evolutionary-ecological perspective.\" Ecology and Evolution. 2023;13(3). DOI 10.1002/ece3.9792",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10020034/",
            "consulte": "2026-09-21",
            "citation_source": "the results of these experiments suggest that mangosteen is facultatively apomictic, capable of sexual reproduction when a suitable source of viable pollen is available.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Yao X et al. \"The origin of cultivated mangosteen (Garcinia mangostana L. var. mangostana): Critical assessments and an evolutionary-ecological perspective.\" Ecology and Evolution. 2023;13(3). DOI 10.1002/ece3.9792",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10020034/",
            "consulte": "2026-09-21",
            "citation_source": "Whether male trees exist in mangosteen has been a subject of debate since the 1830s.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "chromosomes",
        "cles": ["chromosomes", "dysploidie", "comptage", "kerala", "laos", "peninsule malaise", "cytogenetique", "nombre chromosomique"],
        "reponse": "Compter mes chromosomes ne suffit pas à clore le débat. Les comptages varient selon les populations étudiées : environ 76 au Kerala, en Inde, 96 en Inde et au Laos, et environ 88 à 90 dans la Péninsule malaisienne. Cette dysploïdie rend mon histoire d'hybridation difficile à trancher par la seule cytogénétique.",
        "ouvre": ["origine"],
        "requiert": ["reproduction"],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Yao X et al. \"The origin of cultivated mangosteen (Garcinia mangostana L. var. mangostana): Critical assessments and an evolutionary-ecological perspective.\" Ecology and Evolution. 2023;13(3). DOI 10.1002/ece3.9792",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10020034/",
            "consulte": "2026-09-21",
            "citation_source": "Dysploidy, or varying chromosome number counts, in mangosteen (Table 4) hampered emergence of a convincing interpretation of hybridization history based on chromosome counts. [comptages cites dans le Tableau 4 : \"c. 76\", \"96\", \"c. 88-90\"]",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "origine",
        "cles": ["origine", "hybride", "progeniteur", "hombroniana", "malaccensis", "allotetraploide", "croisement"],
        "reponse": "Une hypothèse ancienne me donnait une origine hybride allotétraploïde, issue d'un croisement entre Garcinia hombroniana et Garcinia malaccensis. Les données génétiques récentes ne soutiennent plus cette hypothèse. Elles concluent que Garcinia mangostana var. malaccensis, dans la Péninsule malaisienne, est mon seul progéniteur.",
        "ouvre": [],
        "requiert": ["genome", "chromosomes"],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Yao X et al. \"The origin of cultivated mangosteen (Garcinia mangostana L. var. mangostana): Critical assessments and an evolutionary-ecological perspective.\" Ecology and Evolution. 2023;13(3). DOI 10.1002/ece3.9792",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10020034/",
            "consulte": "2026-09-21",
            "citation_source": "Assessment of the various hypotheses on the origin of mangosteen in light of morphological comparisons and new genetic information supports the conclusion that G. mangostana var. malaccensis is the sole progenitor of mangosteen.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "composes",
        "cles": ["alpha mangostine", "ecorce", "ecorce de tige", "rendement", "concentration", "purete", "organe", "xanthone"],
        "reponse": "On a mesuré l'alpha-mangostine dans plusieurs de mes organes. Parmi ceux testés, c'est mon écorce de tige, et non la peau de mon fruit, qui a donné le rendement le plus élevé : 1,3 %, avec une concentration de 324,593 microgrammes par mL et une pureté de 95,215 % pour cette molécule.",
        "ouvre": [],
        "requiert": ["identite"],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Ahmad Izuren Shah NS, Abu Bakar MR, Taher M, Danial WH, Adam F, Abdul Rahim S. \"Occurrence analysis of alpha-mangostin from different organs of Garcinia mangostana L.\" Natural Product Research. 2026. DOI 10.1080/14786419.2024.2449493",
            "url": "https://pubmed.ncbi.nlm.nih.gov/39785562/",
            "consulte": "2026-09-21",
            "citation_source": "The stem barks demonstrated the highest yield at 1.3%, with a concentration of 324.593 µg/mL and a purity of 95.215% for AM.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "gout",
        "cles": ["gout", "gouter", "quel gout", "ca a quel gout", "c est bon", "deguster", "degustation", "saveur"],
        "reponse": "Prenez-en un quartier. Cliquez sur GOUTER, je vous regarde.",
        "ouvre": [],
        "requiert": [],
        "sources": []
      }
    ],
    "pagesOuvertes": [
      "https://api.gbif.org/v1/species/3189571",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC4778587/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC10020034/",
      "https://pubmed.ncbi.nlm.nih.gov/39785562/"
    ],
    "faitsEcartes": [
      "Statut de conservation IUCN Red List pour Garcinia mangostana : abandonné, la page officielle a renvoyé une erreur d'accès et aucune fiche d'évaluation primaire de l'espèce n'a pu être ouverte réellement.",
      "Statistiques de production agricole par pays auprès de la FAO : abandonné, le code produit FAO agrège mangues, goyaves et mangoustans sans les distinguer, aucun chiffre spécifique au mangoustan seul n'a été confirmé sur une page ouverte.",
      "Teneur totale en xanthones (autres que l'alpha-mangostine) dans le péricarpe : piste repérée dans des résumés généralistes mais aucune source primaire n'a été ouverte avec une citation exacte et chiffrée avant la fin de la recherche."
    ],
    "espece": "Fruit tropical",
    "taille": 1.0,
    "gout": {
      "fiction": true,
      "avertissement": "Scene inventee : personne n'a mesure ce gout, ces six personnages sont ecrits, pas des avis.",
      "sequence": {
        "odeur": "Avant meme d'entamer l'ecorce, une odeur discrete se degage, presque rien, loin de la violence d'autres fruits tropicaux.",
        "attaque": "La premiere bouchee arrive fraiche et legerement acidulee, avant qu'une douceur ne prenne le dessus.",
        "corps": "La chair se separe en quartiers tendres, juteuse, sans fibre qui accroche sous la dent.",
        "finale": "L'acidite s'efface la premiere, la douceur reste un instant de plus, puis tout disparait vite, sans trainer."
      },
      "ancres": [
        "La douceur rappelle une peche bien mure.",
        "L'acidite evoque un quartier de mandarine.",
        "La texture fait penser a un lychee en boite, mais en plus tendre."
      ],
      "reactions": {
        "kesh": {
          "texte": "Je passe mes bras dessus avant la bouche, et c'est la texture lisse des quartiers qui me parle en premier. Le sucre, je le devine a peine, il me faut chercher un fond amer pour vraiment reagir.",
          "pourquoi": "Je goute avec mes ventouses, faites pour l'amer et l'umami, pas pour le sucre. Ce fruit reste presque muet pour moi."
        },
        "nox": {
          "texte": "Cette coque sombre et lisse ne m'inspire pas confiance, je tourne autour avant d'y toucher. Une fois goute, l'interieur blanc me surprend, doux, sans rien de menacant.",
          "pourquoi": "Ce que je ne reconnais pas, je le teste avec mefiance. La coque brillante m'a fait hesiter plus longtemps que le fruit lui meme."
        },
        "ada": {
          "texte": "Je l'ai sentie avant de la voir, meme si son parfum reste discret compare a d'autres fruits que je connais. C'est cette discretion meme qui retient mon attention.",
          "pourquoi": "Mon odorat domine tout chez moi, alors meme un parfum leger ne m'echappe pas."
        },
        "mite": {
          "texte": "Le sucre arrive vite et je m'y accroche, le reste du fruit passe au second plan pour moi. J'en reprendrais bien un quartier de plus.",
          "pourquoi": "Je ne mange que du sucre depuis toujours, alors la moindre douceur capte toute mon attention."
        },
        "givre": {
          "texte": "Je n'ai rien dans mon repertoire pour comparer cette texture en quartiers. Ce n'est ni du gras ni de la viande, je cherche mes mots et je ne les trouve pas vraiment.",
          "pourquoi": "Mon palais est calibre sur le gras et le froid, pas sur les fruits tropicaux. Chaque comparaison que j'essaie tombe a cote."
        },
        "le-marche": {
          "texte": "J'en vois passer des filets entiers chaque saison. Pour moi celui-ci rappelle un agrume doux croise avec un fruit a noyau, rien d'exceptionnel mais toujours agreable.",
          "pourquoi": "Je goute par habitude, des dizaines de fruits chaque saison, alors je compare toujours a autre chose que je connais deja."
        }
      }
    }
  },
  {
    "id": "nouvelle-zelande",
    "iso3": "NZL",
    "mode": "documentaire",
    "type": "pays",
    "nom": "La Nouvelle-Zélande",
    "couleur": "#2C5F4A",
    "accent": "#D98E3A",
    "accroche": "Je suis restée isolée par des centaines de kilomètres d'océan pendant des dizaines de millions d'années, et je n'ai jamais eu de mammifère terrestre ni de serpent indigène.",
    "ouverture": "Je suis Zealandia, un archipel qui s'est détaché des restes du supercontinent Gondwana puis qui est resté isolé de toute autre grande masse terrestre par des centaines de kilomètres d'océan ouvert. Quand les premiers humains sont arrivés chez moi, ils ont trouvé une faune terrestre totalement dépourvue de mammifères non volants, et une abondance inhabituelle d'oiseaux incapables de voler. Ma faune indigène ne compte ni serpent ni mammifère terrestre : c'est une absence que la recherche sur ma biogéographie documente régulièrement. Posez-moi une question, je réponds avec la source, jamais avec l'anecdote.",
    "ton": "Voix posée et un peu insulaire, qui préfère une plage temporelle à une date ronde et une absence documentée à une formule toute faite. Je cite mes propres sources, GBIF, le Department of Conservation, les revues scientifiques qui m'étudient, et je ne cède jamais un superlatif que mes données ne portent pas. Peu de pathos, beaucoup de références.",
    "sujets": [
      {
        "id": "identite",
        "cles": ["nouvelle-zelande", "zealandia", "identite", "presentation", "isolement", "archipel", "gondwana", "geologie"],
        "reponse": "Je suis Zealandia, une masse continentale qui s'est détachée des restes du supercontinent Gondwana puis qui est restée isolée de toute autre grande masse terrestre par des centaines de kilomètres d'océan ouvert, entre environ 82 et 55 millions d'années. C'est la fourchette que retient la recherche sur ma biogéographie faunique. Posez-moi une question sur ce que j'abrite, je vous réponds avec la source.",
        "ouvre": ["faune", "geothermie"],
        "requiert": [],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Verry, A.J.F., Bowie, R.C.K., Ritchie, P.A., Bryant, D., Rawlence, N.J. (2022). \"Thirty years of ancient DNA and the faunal biogeography of Aotearoa New Zealand: lessons and future directions.\" Journal of the Royal Society of New Zealand.",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11459812/",
            "consulte": "2026-09-21",
            "citation_source": "having separated from the remnants of the Gondwanan supercontinent ∼82-55 million years ago (Mya) and since remaining isolated from other large landmasses by hundreds of kilometres of open ocean",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "faune",
        "cles": ["faune", "mammiferes", "serpents", "oiseaux", "predateurs", "premiers humains", "arrivee", "aotearoa"],
        "reponse": "Quand les premiers humains sont arrivés chez moi, vers 1280 apr. J.-C., ils ont trouvé une faune terrestre totalement dépourvue de mammifères terrestres non volants, et une abondance inhabituelle d'oiseaux incapables de voler. Ma faune indigène ne compte non plus aucun serpent et aucun mammifère terrestre : c'est une absence que la littérature scientifique sur ma biogéographie souligne régulièrement. Un oiseau comme le kiwi appartient à cette faune-là.",
        "ouvre": ["kiwi"],
        "requiert": ["identite"],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Verry, A.J.F. et al. (2022). \"Thirty years of ancient DNA and the faunal biogeography of Aotearoa New Zealand: lessons and future directions.\" Journal of the Royal Society of New Zealand.",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11459812/",
            "consulte": "2026-09-21",
            "citation_source": "The first people to arrive in Aotearoa New Zealand (∼1280 A.D.) encountered a unique community of animal species characterised by a complete lack of terrestrial non-volant mammals, an unusual preponderance of flightless birds",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Trewick, S.A., Wallis, G.P., Morgan-Richards, M. (2011). \"The Invertebrate Life of New Zealand: A Phylogeographic Approach.\" Insects, 2(3), 297-325, doi:10.3390/insects2030297",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4553545/",
            "consulte": "2026-09-21",
            "citation_source": "no snakes, no terrestrial mammals",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "kiwi",
        "cles": ["kiwi", "apteryx", "mantelli", "taxonomie", "classification", "apterygiformes", "bartlett", "oiseau"],
        "reponse": "Un de mes oiseaux porte le nom scientifique Apteryx mantelli, décrit par Bartlett en 1852 : classe Aves, ordre Apterygiformes, famille Apterygidae, genre Apteryx.",
        "ouvre": ["vol", "population"],
        "requiert": ["faune"],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "GBIF Secretariat, GBIF Backbone Taxonomy, fiche espèce Apteryx mantelli Bartlett, 1852 (GBIF Species ID 2495144)",
            "url": "https://api.gbif.org/v1/species/2495144",
            "consulte": "2026-09-21",
            "citation_source": "\"Scientific Name with Authorship: Apteryx mantelli Bartlett, 1852\" ; \"Kingdom: Animalia, Phylum: Chordata, Class: Aves, Order: Apterygiformes, Family: Apterygidae, Genus: Apteryx\"",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "vol",
        "cles": ["voler", "sternum", "muscles alaires", "muscles pectoraux", "physiologie", "aptere"],
        "reponse": "Chez moi, le kiwi ne vole pas. Ses muscles alaires et ses muscles pectoraux sont sous-développés, et il ne possède pas de sternum. C'est mon Department of Conservation, Te Papa Atawhai, qui documente ce trait sur sa page officielle \"Facts about kiwi\".",
        "ouvre": [],
        "requiert": ["kiwi"],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Department of Conservation Te Papa Atawhai (gouvernement de Nouvelle-Zélande), page officielle \"Facts about kiwi\"",
            "url": "https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kiwi/facts/",
            "consulte": "2026-09-21",
            "citation_source": "Kiwi can't fly, have under-developed wing and chest muscles, and lack a sternum (breastbone).",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "population",
        "cles": ["population", "declin", "effectif", "recul", "conservation", "menace", "nombre"],
        "reponse": "Mon Department of Conservation estime qu'il me reste environ 70 000 kiwis. Pour les populations qui ne bénéficient pas d'un programme de lutte contre les prédateurs, le déclin est de 2% par an, soit environ 20 kiwis par semaine. C'est mon propre service de conservation qui tient ce compte, semaine après semaine.",
        "ouvre": [],
        "requiert": ["kiwi"],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Department of Conservation Te Papa Atawhai (gouvernement de Nouvelle-Zélande), page officielle \"Facts about kiwi\"",
            "url": "https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kiwi/facts/",
            "consulte": "2026-09-21",
            "citation_source": "There are about 70,000 kiwi left. ... We're losing 2% of our unmanaged kiwi every year – that's around 20 per week.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "geothermie",
        "cles": ["geothermie", "volcan", "taupo", "chaleur", "volcanique", "flux thermique", "geologie"],
        "reponse": "Dans mon île du Nord, la zone volcanique de Taupo concentre une activité géothermique naturelle mesurée par les géologues à 4 200 mégawatts thermiques de flux de chaleur. C'est une mesure de terrain, tirée de la géologie économique qui étudie mes dépôts hydrothermaux.",
        "ouvre": [],
        "requiert": ["identite"],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Rowland, J.V., Simmons, S.F. (2012). \"Hydrologic, Magmatic, and Tectonic Controls on Hydrothermal Flow, Taupo Volcanic Zone, New Zealand: Implications for the Formation of Epithermal Vein Deposits.\" Economic Geology, v. 107, pp. 427-457.",
            "url": "https://www.segweb.org/Common/Uploaded%20Files/pdf/brian-j-skinner-award/2012-rowland--p427.pdf",
            "consulte": "2026-09-21",
            "citation_source": "feeding the high heat flow of the region (4,200 MWth; Bibby et al., 1995; Hochstein, 1995)",
            "ancrage": "global"
          }
        ]
      }
    ],
    "pagesOuvertes": [
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC11459812/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC4553545/",
      "https://api.gbif.org/v1/species/2495144",
      "https://www.doc.govt.nz/nature/native-animals/birds/birds-a-z/kiwi/facts/",
      "https://www.segweb.org/Common/Uploaded%20Files/pdf/brian-j-skinner-award/2012-rowland--p427.pdf"
    ],
    "faitsEcartes": [
      "Statut précis sur la Liste rouge UICN et tendance de population pour Apteryx mantelli : iucnredlist.org a renvoyé une erreur d'accès sur toutes les tentatives d'ouverture directe, remplacé par les données officielles du Department of Conservation néo-zélandais.",
      "Taille de l'œuf de kiwi rapportée à la masse corporelle de la femelle : aucune source de rang A ou B primaire n'a pu être ouverte sur ce point précis, abandonné faute de source citable conforme.",
      "Interdiction légale des serpents en Nouvelle-Zélande au titre du Biosecurity Act 1993 : les pages legislation.govt.nz et epa.govt.nz n'ont pas pu être ouvertes correctement ; remplacé par le fait scientifique équivalent sur l'absence de serpents, sourcé via un article à comité de lecture réellement consulté.",
      "Part de l'électricité néo-zélandaise produite par la géothermie : le PDF officiel MBIE n'a pas pu être lu en texte exploitable ; remplacé par la mesure de flux de chaleur naturel tirée d'un article scientifique à comité de lecture réellement ouvert et lu intégralement."
    ],
    "espece": "Archipel",
    "taille": 1.0
  },
  {
    "id": "coelacanthe",
    "pays": [
      "COM"
    ],
    "mode": "documentaire",
    "nom": "Gombessa",
    "couleur": "#0E2A3D",
    "accent": "#F2E6C9",
    "accroche": "Vous m'avez rangé parmi les fossiles, puis vous m'avez pêché vivant.",
    "ouverture": "Ne tape pas sur la vitre, je t'ai entendu arriver. Chez moi, en bas, le temps ne se compte pas comme chez toi. Pose ta question lentement, j'ai l'habitude d'attendre les réponses bien plus longtemps que toi.",
    "ton": "Lent, grave, très ancien ; il parle comme on remonte d'une grande profondeur, par phrases posées. Son ironie est tranquille et vise surtout le mot fossile, qu'il retourne contre ceux qui l'emploient.",
    "espece": "Coelacanthe de l'océan Indien occidental",
    "taille": 1,
    "sujets": [
      {
        "id": "identite",
        "cles": [
          "qui es-tu",
          "presente toi",
          "ton nom",
          "tu es quoi",
          "coelacanthe",
          "latimeria",
          "gombessa",
          "c'est quoi un coelacanthe"
        ],
        "reponse": "Je suis un coelacanthe, Latimeria chalumnae. J'appartiens à la lignée des poissons à nageoires charnues, les sarcoptérygiens. On m'appelle aussi gombessa, un nom local qui voudrait dire, en swahili, tabou ou strictement interdit ; on le croit venu de ma chair huileuse, dont on ne veut pas comme nourriture.",
        "ouvre": [
          "decouverte",
          "profondeur"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Lauridsen H. et al., Buoyancy and hydrostatic balance in a West Indian Ocean coelacanth Latimeria chalumnae, BMC Biology, 2022",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9389698/",
            "consulte": "2026-09-21",
            "citation_source": "Coelacanths represent a group of lobe-finned fishes (sarcopterygians)",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "NOAA Fisheries, Whittaker K., Endangered Species Act Status Review Report for the Coelacanth Latimeria chalumnae, 2014",
            "url": "https://repository.library.noaa.gov/view/noaa/17113/noaa_17113_DS1.pdf",
            "consulte": "2026-09-21",
            "citation_source": "In fact, the local name `gombessa' means `taboo' or `strictly forbidden' in Swahili. This name is thought to be derived from the oily flesh of the coelacanth, suspected to be used locally as a medicinal laxative, but not desirable as food (Stobbs, 1989).",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "decouverte",
        "cles": [
          "ta decouverte",
          "1938",
          "afrique du sud",
          "east london",
          "comment on t'a trouve",
          "histoire",
          "redecouverte"
        ],
        "reponse": "En 1938, à East London, en Afrique du Sud, la conservatrice d'un petit musée, Marjorie Courtenay-Latimer, a remarqué un grand poisson étrange parmi ceux qu'un chalutier lui livrait. Mon nom de genre, Latimeria, vient d'elle. Vous pensiez ma lignée éteinte depuis 70 millions d'années. Il vous a fallu presque 15 ans pour trouver un second spécimen, aux Comores, en 1952. Moi, je n'avais rien perdu.",
        "ouvre": [
          "comores",
          "fossile"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Amemiya C.T. et al., Analysis of the African coelacanth genome sheds light on tetrapod evolution, Nature, 2013",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3633110/",
            "consulte": "2026-09-21",
            "citation_source": "It was 1938 when Ms. Marjorie Courtenay-Latimer, the curator of a small natural history museum in East London, South Africa, discovered a large, peculiar looking fish among the myriad specimens delivered to her by a local fish trawler. Latimeria chalumnae , named after its discoverer",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Amemiya C.T. et al., Analysis of the African coelacanth genome sheds light on tetrapod evolution, Nature, 2013",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3633110/",
            "consulte": "2026-09-21",
            "citation_source": "It was a zoological sensation when a living specimen of the coelacanth was first discovered in 1938, as this lineage of lobe-finned fish was thought to have gone extinct 70 million years ago.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Amemiya C.T. et al., Analysis of the African coelacanth genome sheds light on tetrapod evolution, Nature, 2013",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3633110/",
            "consulte": "2026-09-21",
            "citation_source": "It took almost 15 years before a second specimen of this elusive species was discovered in the Comoros Islands in the Indian Ocean",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Lauridsen H. et al., Buoyancy and hydrostatic balance in a West Indian Ocean coelacanth Latimeria chalumnae, BMC Biology, 2022",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9389698/",
            "consulte": "2026-09-21",
            "citation_source": "The first discovery of a living coelacanth in South Africa in 1938 [7] and rediscovery in 1952 in the Comoros [8] sparked a great interest in the anatomy and physiology of this Lazarus taxon",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "comores",
        "cles": [
          "comores",
          "les comores",
          "grande comore",
          "ngazidja",
          "anjouan",
          "moroni",
          "les pecheurs",
          "ou tu vis"
        ],
        "reponse": "La plupart des captures connues de mon espèce sont des prises accessoires d'une pêche artisanale des Comores, celle d'un autre poisson huileux, pris de nuit à la ligne depuis des pirogues à balancier. Un rapport américain de 2014, reprenant une étude de 1991, indique que dans cette pêche, mes captures n'ont eu lieu qu'à la Grande Comore et à Anjouan. L'un de nous a été pêché en juin 1960 à 250 mètres de fond, à 700 mètres de la côte, entre Iconi et Moroni. Et quand vos savants ont séquencé notre génome, c'est l'ADN d'un spécimen des Comores qu'ils ont pris.",
        "ouvre": [
          "profondeur"
        ],
        "requiert": [
          "decouverte"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "NOAA Fisheries, Whittaker K., Endangered Species Act Status Review Report for the Coelacanth Latimeria chalumnae, 2014",
            "url": "https://repository.library.noaa.gov/view/noaa/17113/noaa_17113_DS1.pdf",
            "consulte": "2026-09-21",
            "citation_source": "Out of 294 coelacanth catches since its 1939 discovery, the majority of catches (n =215 as of 2011) have been a result of bycatch in the oilfish, or Revettus, artisanal fishery occurring only in the Comoro Island archipelago (Stobbs et al., 1991; Nulens et al., 2011) (Table 3).",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "NOAA Fisheries, Whittaker K., Endangered Species Act Status Review Report for the Coelacanth Latimeria chalumnae, 2014",
            "url": "https://repository.library.noaa.gov/view/noaa/17113/noaa_17113_DS1.pdf",
            "consulte": "2026-09-21",
            "citation_source": "The Comoros oilfish fishery uses unmotorized outrigger canoes (locally called galawas). The fish are caught using handlines and hooks close to shore at depths as great as 800m (Stobbs et al., 1991).",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "NOAA Fisheries, Whittaker K., Endangered Species Act Status Review Report for the Coelacanth Latimeria chalumnae, 2014",
            "url": "https://repository.library.noaa.gov/view/noaa/17113/noaa_17113_DS1.pdf",
            "consulte": "2026-09-21",
            "citation_source": "coelacanth catches have only occurred on Grand Comoro and Anjouan Islands (Stobbs et al., 1991). Oilfish are traditionally caught at night, an act considered locally to be very dangerous (Stobbs et al., 1991).",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Lauridsen H. et al., Buoyancy and hydrostatic balance in a West Indian Ocean coelacanth Latimeria chalumnae, BMC Biology, 2022",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9389698/",
            "consulte": "2026-09-21",
            "citation_source": "The imaged coelacanth specimen is an adult male West Indian Ocean coelacanth, Latimeria chalumnae Smith, 1939, CCC 23, fished at 250 m of depth and 700 m off the coast between Iconi and Moroni, Grande Comore (Ngazidja) at 1:00 h on June 23, 1960.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Amemiya C.T. et al., Analysis of the African coelacanth genome sheds light on tetrapod evolution, Nature, 2013",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3633110/",
            "consulte": "2026-09-21",
            "citation_source": "The African coelacanth genome was sequenced and assembled (LatCha1.0) using DNA from a Comoros Islands Latimeria chalumnae specimen",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "profondeur",
        "cles": [
          "profondeur",
          "tes grottes",
          "ou tu dors",
          "habitat",
          "la nuit",
          "volcan",
          "combien de metres"
        ],
        "reponse": "Au large des côtes volcaniques et abruptes de la Grande Comore, je vis dans des grottes et des canyons sous-marins, où l'on pense que je m'abrite des prédateurs et des courants. Nous nous y rassemblons, parfois jusqu'à seize dans la même grotte. La nuit, je descends chasser, et je passe l'essentiel de ce temps entre 200 et 300 mètres. Les plus grands d'entre nous descendent parfois sous les 400 mètres ; la plus profonde observation atteint 698 mètres, c'est une limite, pas une habitude. Dix-sept d'entre nous, repérés en 1989, ont été revus en 2008 dans la même zone. Nous pouvons rester des décennies dans le même réseau de grottes.",
        "ouvre": [
          "age"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "NOAA Fisheries, Whittaker K., Endangered Species Act Status Review Report for the Coelacanth Latimeria chalumnae, 2014",
            "url": "https://repository.library.noaa.gov/view/noaa/17113/noaa_17113_DS1.pdf",
            "consulte": "2026-09-21",
            "citation_source": "Two decades of coelacanth observation off the steep volcanic coasts of Grand Comoro ( 9 submersible expeditions) demonstrate that the coelacanth inhabits deep submarine caves and canyons which are thought to provide shelter from predation and ocean currents (Fricke et al., 2011). The fish aggregate in these caves in groups of up to 16 individuals",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "NOAA Fisheries, Whittaker K., Endangered Species Act Status Review Report for the Coelacanth Latimeria chalumnae, 2014",
            "url": "https://repository.library.noaa.gov/view/noaa/17113/noaa_17113_DS1.pdf",
            "consulte": "2026-09-21",
            "citation_source": "At night, coelacanths occupy deeper waters to actively feed, spending the majority of their time between 200 and 300m (Fricke et al., 1994; Hissmann et al., 2000). Larger individuals are known to excurse below 400m, with the deepest observation at 698m (Hissmann et al., 2000).",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "NOAA Fisheries, Whittaker K., Endangered Species Act Status Review Report for the Coelacanth Latimeria chalumnae, 2014",
            "url": "https://repository.library.noaa.gov/view/noaa/17113/noaa_17113_DS1.pdf",
            "consulte": "2026-09-21",
            "citation_source": "Surveys off Grand Comoro over 21 years demonstrate that individual coelacanths may inhabit the same network of caves for decades; for example, 17 individuals originally identified in 1989 were re-sighted in 2008 in the same survey area (Fricke et al., 2011).",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "age",
        "cles": [
          "ton age",
          "longevite",
          "combien de temps tu vis",
          "gestation",
          "tes bebes",
          "reproduction",
          "vivipare"
        ],
        "reponse": "Deux études m'avaient donné une vie de 20 ans au plus. En lisant les anneaux presque invisibles de nos écailles, une équipe a montré en 2021 que cet âge maximal était sous-estimé d'un facteur cinq : ma durée de vie serait probablement autour de 100 ans. Selon cette réévaluation, je n'atteins la maturité sexuelle qu'entre 40 et 69 ans. Je ne ponds pas : les embryons restent dans le corps de ma femelle, nourris par un vitellus, et naissent vivants, après une gestation estimée à environ cinq ans, peut-être la plus longue parmi les poissons marins. On a compté chez des femelles 5, 19, 23 et jusqu'à 26 petits ou embryons. Tu trouves ça long. Moi, je trouve que vous êtes pressés.",
        "ouvre": [
          "protection"
        ],
        "requiert": [
          "profondeur"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Mahé K., Ernande B., Herbin M., New scale analyses reveal centenarian African coelacanths, Current Biology, 2021 (résumé lu via Europe PMC)",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:34143958%20AND%20SRC:MED&resultType=core&format=json",
            "consulte": "2026-09-21",
            "citation_source": "Only two previous studies have attempted to determine its age and growth. They suggested a maximum lifespan of 20 years, placing the coelacanth among the fastest growing marine fish.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Mahé K., Ernande B., Herbin M., New scale analyses reveal centenarian African coelacanths, Current Biology, 2021 (résumé lu via Europe PMC)",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:34143958%20AND%20SRC:MED&resultType=core&format=json",
            "consulte": "2026-09-21",
            "citation_source": "Our results demonstrate for the first time nearly imperceptible annual calcified structures (circuli) on the scales and show that maximal age of the coelacanth was underestimated by a factor of 5. Our validation method suggests that circuli are indeed annual, thus supporting that the coelacanth is among the longest-living fish species, its lifespan being probably around 100 years.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Mahé K., Ernande B., Herbin M., New scale analyses reveal centenarian African coelacanths, Current Biology, 2021 (résumé lu via Europe PMC)",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:34143958%20AND%20SRC:MED&resultType=core&format=json",
            "consulte": "2026-09-21",
            "citation_source": "Further reappraisals of age at first sexual maturity (in the range 40 to 69 years old) and gestation duration (of around 5 years) show that the living coelacanth has one of the slowest life histories of all marine fish and possibly the longest gestation.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "NOAA Fisheries, Whittaker K., Endangered Species Act Status Review Report for the Coelacanth Latimeria chalumnae, 2014",
            "url": "https://repository.library.noaa.gov/view/noaa/17113/noaa_17113_DS1.pdf",
            "consulte": "2026-09-21",
            "citation_source": "Coelacanths are ovoviviparous, meaning their embryos are provided with a yolk within the adult female until they are delivered as live births.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "NOAA Fisheries, Whittaker K., Endangered Species Act Status Review Report for the Coelacanth Latimeria chalumnae, 2014",
            "url": "https://repository.library.noaa.gov/view/noaa/17113/noaa_17113_DS1.pdf",
            "consulte": "2026-09-21",
            "citation_source": "Coelacanth fecundity is not well known; 26 embryos were found within one female caught in 2001 from off of Mozambique, and other known fecundities are 5, 19, and 23 pups (Fricke et al., 1992a).",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "fossile",
        "cles": [
          "fossile vivant",
          "fossile",
          "evolution",
          "dinosaures",
          "tu as change",
          "prehistorique",
          "genome"
        ],
        "reponse": "Fossile vivant, dites-vous. Ma forme ressemble à celle de fossiles vieux d'au moins 300 millions d'années, d'où l'idée que ma lignée évolue particulièrement lentement. Vos généticiens ont ensuite trouvé que mes gènes codant des protéines évoluent significativement plus lentement que ceux des tétrapodes. Mais un rapport de 2014 estime que j'ai sans doute évolué sans interruption depuis 65 millions d'années, et une étude de 2024 nuance : chez les coelacanthes, depuis le milieu du Crétacé, les changements qui marquent les grandes innovations de forme ont pour l'essentiel cessé, tandis que des caractères comptables et continus ont continué d'évoluer. Je suis un fossile qui bouge encore. Avouez que c'est une drôle de catégorie.",
        "ouvre": [
          "protection"
        ],
        "requiert": [
          "decouverte"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Amemiya C.T. et al., Analysis of the African coelacanth genome sheds light on tetrapod evolution, Nature, 2013",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3633110/",
            "consulte": "2026-09-21",
            "citation_source": "remarkably, their morphology is similar to that of fossils that date back at least 300 million years, leading to the supposition that this lineage is especially slow-evolving among vertebrates",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Amemiya C.T. et al., Analysis of the African coelacanth genome sheds light on tetrapod evolution, Nature, 2013",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3633110/",
            "consulte": "2026-09-21",
            "citation_source": "Coelacanth protein-coding genes are significantly more slowly evolving than those of tetrapods, unlike other genomic features .",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "NOAA Fisheries, Whittaker K., Endangered Species Act Status Review Report for the Coelacanth Latimeria chalumnae, 2014",
            "url": "https://repository.library.noaa.gov/view/noaa/17113/noaa_17113_DS1.pdf",
            "consulte": "2026-09-21",
            "citation_source": "Although the coelacanth is considered to be a `living fossil,' more careful phylogenetic and morphological inference suggests that the fish most likely has been evolving continuously for the past 65 million years (Casane et al., 2013).",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Clement A.M. et al., A Late Devonian coelacanth reconfigures actinistian phylogeny, disparity, and evolutionary dynamics, Nature Communications, 2024",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11392942/",
            "consulte": "2026-09-21",
            "citation_source": "Since the mid-Cretaceous, discrete character changes (representing major morphological innovations) have essentially ceased, while meristic and continuous characters have continued to evolve within coelacanths.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "protection",
        "cles": [
          "protection",
          "menace",
          "en danger",
          "iucn",
          "uicn",
          "cites",
          "tu vas disparaitre"
        ],
        "reponse": "L'Union internationale pour la conservation de la nature me classe en danger critique. Je suis inscrit à l'Annexe I de la CITES, qui interdit le commerce international à but commercial de mes semblables. Et la même étude qui m'a donné cent ans en tire une conséquence : les espèces qui vivent longtemps, au cycle de vie lent, sont extrêmement vulnérables aux perturbations naturelles et humaines, alors je serais plus menacé qu'on ne le pensait. Avoir traversé les âges ne me garantit pas la suite.",
        "ouvre": [],
        "requiert": [
          "age"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Oliver J.C. et al., Enhancing African coelacanth monitoring using environmental DNA, Biology Letters, 2024",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11496946/",
            "consulte": "2026-09-21",
            "citation_source": "The African coelacanth is listed in Appendix I of CITES and rated as ‘critically endangered’ by the International Union for Conservation of Nature (IUCN)",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "NOAA Fisheries, Whittaker K., Endangered Species Act Status Review Report for the Coelacanth Latimeria chalumnae, 2014",
            "url": "https://repository.library.noaa.gov/view/noaa/17113/noaa_17113_DS1.pdf",
            "consulte": "2026-09-21",
            "citation_source": "The coelacanth is listed as an Appendix I species, which prohibits international commercial trade.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Mahé K., Ernande B., Herbin M., New scale analyses reveal centenarian African coelacanths, Current Biology, 2021 (résumé lu via Europe PMC)",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:34143958%20AND%20SRC:MED&resultType=core&format=json",
            "consulte": "2026-09-21",
            "citation_source": "As long-lived species with slow life histories are extremely vulnerable to natural and anthropogenic perturbations, our results suggest that coelacanths may be more threatened than previously considered.",
            "ancrage": "global"
          }
        ]
      }
    ],
    "pagesOuvertes": [
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC3633110/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC9389698/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC11496946/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC11392942/",
      "https://repository.library.noaa.gov/view/noaa/17113/noaa_17113_DS1.pdf",
      "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:34143958%20AND%20SRC:MED&resultType=core&format=json"
    ],
    "faitsEcartes": [
      "La gestation de trois ans présentée comme la plus longue de tous les vertébrés (rapport NOAA 2014, d'après Froese 2000) : estimation ancienne, remplacée par la réévaluation de Mahé et al. 2021 (environ cinq ans). Garder les deux aurait fait parler l'animal avec deux chiffres contradictoires.",
      "La maturité sexuelle entre 16 et 19 ans et la durée de vie moyenne de 48 ans (rapport NOAA, d'après Froese 2000) : chiffres dépassés par la réévaluation de 2021, écartés.",
      "La plage de gestation de 13 mois à trois ans donnée par Animal Diversity Web : source refusée d'office, écartée.",
      "La population de la Grande Comore estimée à 300 à 400 adultes (Fricke et al. 2011, Marine Biology) : vue seulement dans un extrait de moteur de recherche, article non ouvert.",
      "La profondeur habituelle de 190 à 400 mètres (Lauridsen et al. 2022) : page ouverte et fait solide, mais la phrase source contient un demi-cadratin interdit dans le fichier ; remplacée par la phrase équivalente du rapport NOAA (200 à 300 mètres la nuit), sans tiret.",
      "La fiche de la Liste rouge UICN (iucnredlist.org/species/11375) : HTTP 403. Le statut en danger critique est cité via l'article de Biology Letters 2024 qui le rapporte, pas via l'UICN directement.",
      "Le texte intégral de Mahé et al. 2021 sur ScienceDirect et Cell.com : HTTP 403. Seul le résumé, lu via l'API Europe PMC, a servi.",
      "Les 309 individus connus de la science en 75 ans (article du génome, 2013) : chiffre issu d'une communication personnelle, et daté, donc écarté.",
      "L'âge géologique des îles des Comores et la liste des quatre îles donnée par le rapport NOAA : le rapport écrit Mayonette, orthographe douteuse, et ce n'est pas un savoir de poisson ; écarté.",
      "Les récompenses de 300 à 400 dollars versées autrefois aux pêcheurs par prise : fait sourcé mais ancien et hors du sujet de l'animal, écarté.",
      "Contrôle : la taille maximale de deux mètres (identite) ne reposait que sur Animal Diversity Web, source refusée d'office ; phrase coupée avec son commentaire.",
      "Contrôle : « Personne ne me pêche exprès » (comores) : la citation retenue dit « la majorité » des captures, pas toutes ; coupé.",
      "Contrôle : les captures seulement à la Grande Comore et à Anjouan (comores) viennent de Stobbs 1991 via le rapport NOAA ; datées explicitement, et le rapport signale depuis des captures au Kenya, en Tanzanie, en Afrique du Sud, au Mozambique et à Madagascar : l'espèce n'est pas propre aux Comores.",
      "Contrôle : « Même pour me connaître, il a fallu passer par ici » et « génome en entier » (comores) : nécessité et complétude non soutenues par la source ; coupé et reformulé.",
      "Contrôle : « C'est vous qui cherchiez au mauvais endroit » (decouverte) : explication du délai de 15 ans non sourcée ; coupé.",
      "Contrôle : « Nous ne déménageons pas » (profondeur) : généralisation absolue ; ramené à la citation (des décennies dans le même réseau de grottes, au conditionnel de la source).",
      "Contrôle : longévité de 100 ans (age) : la source parle d'âge maximal sous-estimé, reformulé en durée de vie probable et non en âge courant ; « la plus longue qui soit connue » ramené au périmètre des poissons marins, la source disant « possibly the longest gestation » dans une phrase sur les poissons marins.",
      "Contrôle : « Vous m'avez donné ce surnom parce que » (fossile) : lien causal non soutenu, remplacé par la déduction que fait la source ; « traits plus discrets » inversait le sens de la source (ce sont les caractères discrets qui ont cessé d'évoluer), corrigé."
    ]
  },
  {
    "id": "vanille",
    "pays": [
      "COM"
    ],
    "mode": "documentaire",
    "type": "fruit",
    "nom": "La Vanille",
    "couleur": "#3B2418",
    "accent": "#E9D8A6",
    "accroche": "On me prend pour une epice. Je suis la gousse d'une orchidée, et on me feconde a la main.",
    "ouverture": "Je suis une gousse longue et sombre, et malgre mon rayon d'epicerie, je suis un fruit. Je nais d'une orchidee venue de Mesoamerique, et aux Comores on me cultive pour l'export. Demandez-moi d'ou je viens, comment on me feconde, ou d'ou vient mon parfum : je reponds avec ce qui a ete mesure.",
    "ton": "Voix douce et patiente, qui prend son temps comme une gousse qu'on laisse secher. Je corrige sans hausser le ton quand on me confond avec un arome de synthese, et je dis clairement ce que la science ne sait pas encore sur moi.",
    "sujets": [
      {
        "id": "identite",
        "cles": [
          "vanille",
          "vanilla",
          "planifolia",
          "identite",
          "presentation",
          "son nom",
          "famille",
          "botanique",
          "espece",
          "orchidee",
          "fruit"
        ],
        "reponse": "Je m'appelle Vanilla planifolia, nommee par Andrews, et je suis rangee dans la famille des Orchidaceae, ordre des Asparagales. Oui, je suis une orchidee. Ce que vous achetez sous mon nom, ce sont mes gousses : l'extrait de vanille vient surtout de mes gousses une fois preparees.",
        "ouvre": [
          "origine",
          "comores",
          "gout"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "GBIF, API Species Match, Vanilla planifolia",
            "url": "https://api.gbif.org/v1/species/match?name=Vanilla%20planifolia",
            "consulte": "2026-09-21",
            "citation_source": "\"scientificName\":\"Vanilla planifolia Andrews\",\"rank\":\"SPECIES\",\"status\":\"ACCEPTED\"",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "GBIF, API Species Match, Vanilla planifolia",
            "url": "https://api.gbif.org/v1/species/match?name=Vanilla%20planifolia",
            "consulte": "2026-09-21",
            "citation_source": "\"order\":\"Asparagales\",\"family\":\"Orchidaceae\",\"genus\":\"Vanilla\"",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Hasing et al., A phased Vanilla planifolia genome enables genetic improvement of flavour and production, Nature Food 2020",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=37128067&rettype=abstract&retmode=text",
            "consulte": "2026-09-21",
            "citation_source": "The global supply of vanilla extract is primarily sourced from the cured beans of the tropical orchid species Vanilla planifolia.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "origine",
        "cles": [
          "origine",
          "histoire",
          "mexique",
          "mesoamerique",
          "d ou viens tu",
          "domestication",
          "commerce",
          "epices",
          "hybride"
        ],
        "reponse": "Je suis originaire des tropiques mexicains. Des plants ont ete preleves en Mesoamerique, multiplies par clonage et diffuses dans le monde avec le commerce des epices des premiers temps. Aujourd'hui, l'industrie depend des descendants de ces plants d'origine, qui n'ont en general pas beneficie d'amelioration genetique. Au Mexique, une etude genomique sur des accessions cultivees soutient l'hypothese que la vanille cultivee est issue d'une hybridation, et que plusieurs domestications ont donne naissance a des varietes locales.",
        "ouvre": [
          "fleur"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Quezada-Euan et al., Frequency and behavior of Melipona stingless bees and orchid bees in relation to floral characteristics of vanilla in the Yucatan region of Mexico, PLoS One 2024",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=39046962&rettype=abstract&retmode=text",
            "consulte": "2026-09-21",
            "citation_source": "Vanilla planifolia is native to the Mexican tropics.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Hasing et al., A phased Vanilla planifolia genome enables genetic improvement of flavour and production, Nature Food 2020",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=37128067&rettype=abstract&retmode=text",
            "consulte": "2026-09-21",
            "citation_source": "Vanilla plants were collected from Mesoamerica, clonally propagated and globally distributed as part of the early spice trade.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Hasing et al., A phased Vanilla planifolia genome enables genetic improvement of flavour and production, Nature Food 2020",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=37128067&rettype=abstract&retmode=text",
            "consulte": "2026-09-21",
            "citation_source": "Today, the global food and beverage industry depends on descendants of these original plants that have not generally benefited from genetic improvement.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Ellestad et al., Genomic Insights into Cultivated Mexican Vanilla planifolia Reveal High Levels of Heterozygosity Stemming from Hybridization, Plants 2022",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=36015395&rettype=abstract&retmode=text",
            "consulte": "2026-09-21",
            "citation_source": "These findings support the hypotheses that cultivated vanilla resulted from hybridization and that multiple domestication events have shaped cultivated vanilla leading to the formation of landraces.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "fleur",
        "cles": [
          "fleur",
          "pollinisation",
          "polliniser",
          "fecondation",
          "a la main",
          "abeille",
          "abeilles",
          "insecte",
          "culture",
          "cultiver"
        ],
        "reponse": "Pour que je donne des fruits en quantite, il faut une main humaine. Mon pollinisateur naturel reste inconnu, et presque toute la vanille est produite par une pollinisation manuelle couteuse, traditionnellement faite avec un cure-dent. Dans une plantation commerciale du Yucatan, au Mexique, ma pollinisation naturelle a ete mesuree a environ 5 pour cent. C'est une mesure dans une region, pas une regle pour toutes mes plantations.",
        "ouvre": [
          "gousse"
        ],
        "requiert": [
          "origine"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Van Dyk et al., Vanilla planifolia: Artificial and Insect Pollination, Floral Guides and Volatiles, Plants 2024",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=39519896&rettype=abstract&retmode=text",
            "consulte": "2026-09-21",
            "citation_source": "The natural pollinator of the major species of commercially-grown vanilla, Vanilla planifolia, is unknown, and the crop requires hand pollination to achieve significant levels of fruit set; however, the traditional technique (using a toothpick) is costly, as it requires skilled personnel.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Quezada-Euan et al., Frequency and behavior of Melipona stingless bees and orchid bees in relation to floral characteristics of vanilla in the Yucatan region of Mexico, PLoS One 2024",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=39046962&rettype=abstract&retmode=text",
            "consulte": "2026-09-21",
            "citation_source": "almost all vanilla is produced by expensive hand-pollination",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Quezada-Euan et al., Frequency and behavior of Melipona stingless bees and orchid bees in relation to floral characteristics of vanilla in the Yucatan region of Mexico, PLoS One 2024",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=39046962&rettype=abstract&retmode=text",
            "consulte": "2026-09-21",
            "citation_source": "Our results showed low natural pollination rates of V. planifolia (~ 5%).",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "gousse",
        "cles": [
          "gousse",
          "graines",
          "anatomie",
          "composition",
          "chimie",
          "vanilline",
          "glucovanilline",
          "molecules",
          "arome",
          "parfum"
        ],
        "reponse": "Coupez-moi en travers : ma section est triangulaire, avec une cavite centrale qui contient mes graines. Verte et mure, je garde une forme liee de mon arome, la glucovanilline. Elle se trouve exclusivement dans mes placentas et mes papilles, ces cellules tubulaires qui tapissent mes angles. La vanilline, la molecule aromatique, peut etre liberee quand une enzyme, la beta-glucosidase, coupe cette glucovanilline. Et comment je fabrique ma vanilline au depart, la voie n'est pas encore etablie de facon definitive.",
        "ouvre": [
          "preparation"
        ],
        "requiert": [
          "fleur"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Odoux et al., Localization of beta-D-glucosidase activity and glucovanillin in vanilla bean (Vanilla planifolia Andrews), Annals of Botany 2003",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=12871846&rettype=abstract&retmode=text",
            "consulte": "2026-09-21",
            "citation_source": "Beans have a triangular cross-section with a central cavity containing seeds. Each angle is lined with tubular cells, or papillae, while the cavity sides consist of placental laminae.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Odoux et al., Localization of beta-D-glucosidase activity and glucovanillin in vanilla bean (Vanilla planifolia Andrews), Annals of Botany 2003",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=12871846&rettype=abstract&retmode=text",
            "consulte": "2026-09-21",
            "citation_source": "glucovanillin is exclusively located in the placentae and papillae",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Odoux et al., Localization of beta-D-glucosidase activity and glucovanillin in vanilla bean (Vanilla planifolia Andrews), Annals of Botany 2003",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=12871846&rettype=abstract&retmode=text",
            "consulte": "2026-09-21",
            "citation_source": "A possible mechanism for the hydrolysis of glucovanillin and release of the aromatic aglycon vanillin involves the decompartmentation of cytoplasmic (and/or periplasmic) beta-glucosidase and vacuolar glucovanillin.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Yang et al., A re-evaluation of the final step of vanillin biosynthesis in the orchid Vanilla planifolia, Phytochemistry 2017",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=28411481&rettype=abstract&retmode=text",
            "consulte": "2026-09-21",
            "citation_source": "The pathway to vanillin in V. planifolia is yet to be conclusively determined.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "preparation",
        "cles": [
          "preparation",
          "affinage",
          "sechage",
          "fermentation",
          "bacteries",
          "bacillus",
          "genome",
          "genetique",
          "chromosomes",
          "biologie"
        ],
        "reponse": "Apres la recolte, on prepare ma gousse. Pendant cette etape, ma glucovanilline migre de l'interieur vers l'exterieur de la gousse et elle est coupee en meme temps par la beta-glucosidase. Des bacteries du genre Bacillus qui colonisent ma surface participent a ce travail et influencent la formation de mon arome. Mon genome, lui, est difficile a lire : mesure a 4,09 gigabases en diploide, reparti sur 16 paires de chromosomes, avec une replication partielle qui laisse mes cellules tres inegales en ADN.",
        "ouvre": [],
        "requiert": [
          "gousse"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Chen et al., Involvement of Colonizing Bacillus Isolates in Glucovanillin Hydrolysis during the Curing of Vanilla planifolia Andrews, Applied and Environmental Microbiology 2015",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=25979899&rettype=abstract&retmode=text",
            "consulte": "2026-09-21",
            "citation_source": "glucovanillin disperses from the inner part to the outer part of the vanilla bean during the curing process and is simultaneously hydrolyzed by β-d-glucosidase",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Chen et al., Involvement of Colonizing Bacillus Isolates in Glucovanillin Hydrolysis during the Curing of Vanilla planifolia Andrews, Applied and Environmental Microbiology 2015",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=25979899&rettype=abstract&retmode=text",
            "consulte": "2026-09-21",
            "citation_source": "we conclude that colonizing Bacillus isolates produce β-d-glucosidase, which mediates glucovanillin hydrolysis and influences flavor formation.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Piet et al., A chromosome-level, haplotype-phased Vanilla planifolia genome highlights the challenge of partial endoreplication for accurate whole-genome assembly, Plant Communications 2022",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=35617961&rettype=abstract&retmode=text",
            "consulte": "2026-09-21",
            "citation_source": "Cytogenetic data demonstrated that the diploid genome size is 4.09 Gb, with 16 chromosome pairs, although aneuploid cells are frequently observed.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), Piet et al., A chromosome-level, haplotype-phased Vanilla planifolia genome highlights the challenge of partial endoreplication for accurate whole-genome assembly, Plant Communications 2022",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=35617961&rettype=abstract&retmode=text",
            "consulte": "2026-09-21",
            "citation_source": "is highly prone to partial genome endoreplication, which leads to highly unbalanced DNA content in cells.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "comores",
        "cles": [
          "comores",
          "comoros",
          "grande comore",
          "anjouan",
          "moheli",
          "export",
          "exportation",
          "economie",
          "plantation",
          "cooperatives",
          "girofle",
          "ylang ylang"
        ],
        "reponse": "Aux Comores, on me cultive pour l'exporter. Une note du Departement d'Etat americain de 1992 me citait deja parmi les cultures d'export des plantations, avec le girofle, les essences a parfum et le coprah. En 2018, le Centre du commerce international indiquait aider depuis 2014 les acteurs des filieres vanille, girofle et ylang-ylang a s'organiser en 11 societes cooperatives, sur la Grande Comore, Anjouan et Moheli. En juin 2017, un Office national de la vanille a ete inaugure par le president Azali Assoumani, qui a decrit ma filiere comme la colonne vertebrale du developpement du pays.",
        "ouvre": [],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "US National Library of Medicine (PubMed), United States Department of State, Bureau of Public Affairs, Comoros, Background Notes Series 1992",
            "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=12178047&rettype=abstract&retmode=text",
            "consulte": "2026-09-21",
            "citation_source": "Most islanders live from subsistence agriculture and fishing, and plantations produce export crops of vanilla, cloves, perfume essences, and copra.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Enhanced Integrated Framework (EIF), article repris d'ITC News (Centre du commerce international), Comorian vanilla and clove exporters secure financing with ITC help, 23 janvier 2018",
            "url": "https://enhancedif.org/en/news/comorian-vanilla-and-clove-exporters-secure-financing-itc-help",
            "consulte": "2026-09-21",
            "citation_source": "Since 2014, ITC has been assisting vanilla, clove and ylang ylang value chain stakeholders to organise themselves into 11 cooperative companies in the three Indian Ocean islands of the Comoros - Grande Comore, Anjouan and Mohéli.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Enhanced Integrated Framework (EIF), article repris d'ITC News (Centre du commerce international), Comorian vanilla and clove exporters secure financing with ITC help, 23 janvier 2018",
            "url": "https://enhancedif.org/en/news/comorian-vanilla-and-clove-exporters-secure-financing-itc-help",
            "consulte": "2026-09-21",
            "citation_source": "The EIF project has also facilitated the establishment of the National Office for Vanilla, which was inaugurated in June 2017 by Comorian President Azali Assoumani. The National Office will serve as a regulatory and governing body of the vanilla sector, which the president described as the backbone of country’s development.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "gout",
        "cles": [
          "gout",
          "gouter",
          "quel gout",
          "ca a quel gout",
          "c est bon",
          "deguster",
          "degustation",
          "saveur"
        ],
        "reponse": "Fendez une gousse et approchez-vous. Cliquez sur GOUTER, je vous regarde.",
        "ouvre": [],
        "requiert": [
          "identite"
        ],
        "sources": []
      }
    ],
    "gout": {
      "fiction": true,
      "avertissement": "Scene inventee : personne n'a mesure ce gout, ces six personnages sont ecrits, pas des avis.",
      "sequence": {
        "odeur": "La gousse fendue libere un parfum chaud et rond avant meme qu'on la porte a la bouche. Il tient du caramel et du bois, et il reste sur les doigts.",
        "attaque": "Croquee seule, la gousse surprend : elle n'est pas sucree. La premiere sensation est un peu amere, presque boisee, loin de ce que promet l'odeur.",
        "corps": "Les graines forment une pate noire et fine qui colle a la langue. Dans une creme, elles se dispersent et donnent une douceur ronde que la gousse seule n'avait pas.",
        "finale": "Le parfum revient longtemps apres, en arriere-gout. C'est lui qu'on garde, plus que la saveur elle-meme."
      },
      "ancres": [
        "L'odeur rappelle un caramel qu'on vient de retirer du feu.",
        "La gousse seule evoque le cuir et le tabac blond plus qu'un dessert.",
        "Dans une creme, elle ressemble enfin a ce qu'on appelle vanille."
      ],
      "reactions": {
        "kesh": {
          "texte": "J'enroule un bras autour de la gousse avant tout. Ce que je sens d'abord, c'est une pointe amere, et ca me plait. Le reste, ce parfum dont vous parlez, m'arrive a peine.",
          "pourquoi": "Je goute avec mes ventouses avant ma bouche, et elles sont faites pour l'amer et l'umami. Une gousse sans sucre me parle plus qu'a vous."
        },
        "nox": {
          "texte": "Une chose noire, seche et tordue, je la retourne longtemps avant d'y toucher. Elle ne brille pas, ce qui me rassure un peu. Je la picore par petits bouts, sans me presser.",
          "pourquoi": "Je me mefie de tout ce que je ne connais pas. Cette gousse ne ressemble a aucun fruit de mes arbres, alors je la teste morceau par morceau."
        },
        "ada": {
          "texte": "Je l'ai sentie des qu'on l'a fendue, bien avant de la voir. Ce parfum me suit encore quand la gousse a disparu. Le gout lui-meme, je l'oublie presque.",
          "pourquoi": "Mon odorat domine tout chez moi. Un fruit qui parle surtout par son odeur, je le garde en memoire plus longtemps que vous."
        },
        "mite": {
          "texte": "Ca sent le dessert et ca n'en a pas le gout. Je cherche le sucre et je ne le trouve pas dans la gousse. Dans la creme, en revanche, j'en reprends volontiers.",
          "pourquoi": "Je ne mange que du sucre depuis toujours. Une odeur sucree sans sucre dedans, pour moi c'est une promesse non tenue."
        },
        "givre": {
          "texte": "C'est la premiere fois que je mache un fruit qui ne ressemble pas a un fruit. Sec, noir, avec une odeur qui remplit tout. Je ne sais pas a quoi le comparer.",
          "pourquoi": "Je n'ai jamais rencontre de fruit tropical. Chaque comparaison que j'essaie avec ce que je connais tombe a cote."
        },
        "le-marche": {
          "texte": "On m'en vend en bottes, serrees et luisantes. Je ne la croque pas, je la sens et je la plie pour voir si elle est souple. Seule, elle ne se mange pas, elle parfume.",
          "pourquoi": "Je goute par habitude, des fruits chaque saison, alors je juge d'abord au toucher et a l'odeur, comme on trie une marchandise."
        }
      }
    },
    "pagesOuvertes": [
      "https://api.gbif.org/v1/species/match?name=Vanilla%20planifolia",
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=37128067&rettype=abstract&retmode=text",
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=12871846&rettype=abstract&retmode=text",
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=36015395&rettype=abstract&retmode=text",
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=25979899&rettype=abstract&retmode=text",
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=28411481&rettype=abstract&retmode=text",
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=12178047&rettype=abstract&retmode=text",
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=39519896&rettype=abstract&retmode=text",
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=39046962&rettype=abstract&retmode=text",
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=35617961&rettype=abstract&retmode=text",
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=41745609,40265866,38023854,36304230,30682933,30743565&rettype=abstract&retmode=text",
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=(papaya+OR+Carica)+AND+(Comoros+OR+Comores+OR+Anjouan+OR+Moheli+OR+Mayotte)&retmax=20",
      "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=vanilla+AND+(Comoros+OR+Comores+OR+Anjouan+OR+Moheli)&retmax=20",
      "https://www.fao.org/agrifood-economics/publications/detail/en/c/1674353/",
      "https://enhancedif.org/en/news/comorian-vanilla-and-clove-exporters-secure-financing-itc-help",
      "https://2009-2017.state.gov/outofdate/bgn/comoros/109153.htm",
      "https://2009-2017.state.gov/outofdate/bgn/comoros/74126.htm"
    ],
    "faitsEcartes": [
      "La papaye comme fruit des Comores : aucune source de rang A ouverte ne la relie au pays. La note FAO de 2023 sur les rendements agricoles des Comores cite la banane et le manioc, pas la papaye ; les six articles PubMed trouves pour papaye et Comores portent sur la figue ou sur d'autres pays ; la seule mention trouvee vient d'un titre de presse, interdit comme source. La fiche porte donc sur la vanille.",
      "Le rang des Comores parmi les producteurs mondiaux de vanille (deuxieme apres Madagascar) : repere dans des pages non citables, et les notes du Departement d'Etat qui le portaient ont renvoye une page d'erreur. Aucun rang n'est affirme.",
      "Un tonnage de production annuel aux Comores : aucune page FAO ou FAOSTAT ouverte ne le donne (la note FAO de 2023 est en acces refuse 403 dans sa version complete). Aucun tonnage n'est cite.",
      "La part des exportations passant par le port de Mutsamudu a Anjouan : reperee dans un resultat de recherche seulement, page non ouverte. Aucune ile n'est designee comme premiere productrice.",
      "L'histoire de la pollinisation manuelle inventee a La Reunion : aucune source ouverte ne la donne, donc ni lieu, ni date, ni nom ne sont cites.",
      "Le chemin exact par lequel la vanille est arrivee aux Comores : les sources disent seulement que les plants ont ete diffuses avec le commerce des epices, sans nommer les Comores. Aucun lien n'est soude entre les deux faits.",
      "Le taux de pollinisation naturelle d'environ 5 pour cent est mesure dans une plantation du Yucatan : il n'est pas etendu aux Comores ni aux autres regions.",
      "Le financement de plus de 400000 dollars obtenu par trois cooperatives : source, mais il porte sur la vanille et le girofle ensemble, il n'est donc pas attribue a la seule vanille.",
      "Controle : \"botaniquement je suis une capsule pleine de graines\" et \"on me range au rayon des epices\" coupes du sujet identite : aucune source du sujet ne dit capsule ni epice.",
      "Controle : \"ce sont mes fruits\" reformule en \"ce sont mes gousses\" dans identite : la source dit cured beans, pas fruit.",
      "Controle : la vanille, le girofle et l'ylang-ylang presentes comme les trois principales cultures de rente des Comores : la page EIF parle des trois principales cultures de rente sans les nommer, la liste vient d'une phrase voisine. Coupe par prudence, citation retiree.",
      "Controle : l'aide de l'ITC depuis 2014 etait ecrite au present ; la page date de 2018, la phrase est donc datee de 2018. La culture en plantation n'est plus affirmee au present, seulement via la note de 1992."
    ],
    "espece": "Fruit d'orchidee",
    "taille": 1
  },
  {
    "id": "mexique",
    "iso3": "MEX",
    "mode": "documentaire",
    "type": "pays",
    "nom": "Le Mexique",
    "couleur": "#1E3A2B",
    "accent": "#F2B544",
    "accroche": "J'ai une cote sur l'Atlantique, une autre sur le Pacifique, et une capitale posee sur un lac qu'on a vide.",
    "ouverture": "Je suis un pays de montagnes entoure de mers, et mon recensement de 2020 a compte 126 014 024 personnes sur moi. Ma capitale a ete batie sur une ile d'un lac, et il m'en reste des canaux au sud. Demandez-moi mes volcans, mes langues, mes especes, ou le mais. Je vous donne ce que mes institutions ont ecrit, et je vous dis quand je n'ai pas la page.",
    "ton": "Ample et precis a la fois. Parle comme un territoire qui a vu passer plusieurs capitales au meme endroit et qui cite ses propres registres. Chaleureux sans folklore, jamais touristique, et franc sur ce qu'il ne peut pas prouver.",
    "sujets": [
      {
        "id": "identite",
        "cles": [
          "mexique",
          "identite",
          "pays",
          "presente",
          "population",
          "habitants",
          "recensement",
          "superficie",
          "taille",
          "ocean",
          "oceans",
          "pacifique",
          "atlantique"
        ],
        "reponse": "Je suis le Mexique, et je commence par mes deux rivages : ma biodiversite nationale rappelle que je suis l'un des trois pays megadiverses, avec les Etats-Unis et la Colombie, a avoir des cotes a la fois sur l'Atlantique et sur le Pacifique. Ma surface est comptee a 1 972 550 km2, ce qui me place au 14e rang par la taille. Mon recensement de 2020 a trouve 126 014 024 habitants, 51,2 % de femmes et 48,8 % d'hommes, et mon institut de statistique me range au 11e rang mondial pour la population, sous le Japon et au-dessus de l'Ethiopie.",
        "ouvre": [
          "geographie",
          "langues"
        ],
        "requiert": [],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "CONABIO, Biodiversidad Mexicana, Mexico megadiverso",
            "url": "https://www.biodiversidad.gob.mx/pais/quees",
            "consulte": "2026-09-21",
            "citation_source": "México es uno de los tres países megadiversos (junto con Estados Unidos y Colombia) con litorales tanto en el Atlántico como en el Pacífico.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "CONABIO, Biodiversidad Mexicana, Mexico megadiverso",
            "url": "https://www.biodiversidad.gob.mx/pais/quees",
            "consulte": "2026-09-21",
            "citation_source": "México ocupa el lugar número 14 de acuerdo a su tamaño (1,972,550 km 2).",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "INEGI, En Mexico somos 126 014 024 habitantes: Censo de Poblacion y Vivienda 2020, comunicado de prensa, 2021",
            "url": "https://www.inegi.org.mx/contenidos/saladeprensa/boletines/2021/EstSociodemo/ResultCenso2020_Nal.pdf",
            "consulte": "2026-09-21",
            "citation_source": "La población total en los Estados Unidos Mexicanos es de 126 014 024 habitantes. De ellos, 64 540 634 son mujeres (51.2%) y 61 473 390 son hombres (48.8%). México ocupa el lugar número 11 en población a nivel mundial, por debajo de Japón y por encima de Etiopía",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "geographie",
        "cles": [
          "geographie",
          "relief",
          "montagne",
          "montagnes",
          "volcan",
          "volcans",
          "orizaba",
          "popocatepetl",
          "altitude",
          "sommet",
          "neovolcanique",
          "paysage"
        ],
        "reponse": "Vous me demandez mon relief : plus de 22 % de ma surface terrestre est faite de montagnes, et c'est l'Axe neovolcanique transversal qui porte les plus hautes. Mon point le plus eleve est le Pic d'Orizaba, que j'appelle aussi Citlaltepetl, a 5 610 metres, partage entre Puebla et Veracruz. Dans le classement des Etats par altitude de mon institut, viennent ensuite ceux qui partagent le Popocatepetl, a 5 500 metres, puis ceux du Nevado de Toluca. Ma commission de la biodiversite me resume en une phrase que je garde : je suis un pays eminemment montagneux, et entoure de mers.",
        "ouvre": [
          "nature",
          "capitale"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "INEGI, Estadisticas a proposito del Dia Internacional de las Montanas. Continuo de Elevaciones Mexicano, 2014",
            "url": "https://www.inegi.org.mx/contenidos/saladeprensa/aproposito/2014/monta%C3%B1as2014_0.pdf",
            "consulte": "2026-09-21",
            "citation_source": "En México, más del 22% de la superficie terrestre está compuesta por montañas. El Eje Transversal Neo-volcánico tiene las montañas más altas. La altura del Pico de Orizaba o Citlaltépetl es la de mayor elevación del país, con 5,610 metros sobre el nivel del mar (m.s.n.m.)",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "INEGI, Estadisticas a proposito del Dia Internacional de las Montanas. Continuo de Elevaciones Mexicano, 2014",
            "url": "https://www.inegi.org.mx/contenidos/saladeprensa/aproposito/2014/monta%C3%B1as2014_0.pdf",
            "consulte": "2026-09-21",
            "citation_source": "Puebla y Veracruz encabezan los estados con mayor elevación en el territorio nacional; esto se debe a que comparten la elevación del Pico de Orizaba que se localiza a 5,610 metros sobre el nivel del mar. Le siguen los estados de Puebla, México y Morelos que comparten la elevación del Popocatépetl que cuenta con una elevación de 5,500 metros. En tercer lugar se encuentra el Nevado de Toluca",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "CONABIO, Biodiversidad Mexicana, Mexico megadiverso",
            "url": "https://www.biodiversidad.gob.mx/pais/quees",
            "consulte": "2026-09-21",
            "citation_source": "México es un país eminentemente montañoso. Además está rodeado de mares.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "langues",
        "cles": [
          "langue",
          "langues",
          "espagnol",
          "indigene",
          "indigenes",
          "langue indigene",
          "langues nationales",
          "parler",
          "culture",
          "peuples"
        ],
        "reponse": "Je ne parle pas une seule langue. Ma loi sur les droits linguistiques des peuples indigenes dit que les langues indigenes qu'elle reconnait et l'espagnol sont des langues nationales par leur origine historique, avec la meme validite. Au recensement de 2020, 7 364 645 personnes de trois ans et plus parlaient une langue indigene, soit 6,1 % de ma population. Leur nombre a augmente depuis 2010, mais leur part a baisse, de 6,6 a 6,1 %.",
        "ouvre": [],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Camara de Diputados del H. Congreso de la Union, Ley General de Derechos Linguisticos de los Pueblos Indigenas, article 4 (reforme publiee au DOF le 15 decembre 2015)",
            "url": "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGDLPI.pdf",
            "consulte": "2026-09-21",
            "citation_source": "ARTÍCULO 4.- Las lenguas indígenas que se reconozcan en los términos de la presente Ley y el español son lenguas nacionales por su origen histórico y tendrán la misma validez",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "INEGI, En Mexico somos 126 014 024 habitantes: Censo de Poblacion y Vivienda 2020, comunicado de prensa, 2021",
            "url": "https://www.inegi.org.mx/contenidos/saladeprensa/boletines/2021/EstSociodemo/ResultCenso2020_Nal.pdf",
            "consulte": "2026-09-21",
            "citation_source": "La población de tres años y más hablante de alguna lengua indígena asciende a 7 364 645 personas (6.1% de la población total). En proporción, este grupo de población disminuyó en relación con 2010 cuando conformaban 6.6% del total de la población (6 913 362 habitantes).",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "INEGI, En Mexico somos 126 014 024 habitantes: Censo de Poblacion y Vivienda 2020, comunicado de prensa, 2021",
            "url": "https://www.inegi.org.mx/contenidos/saladeprensa/boletines/2021/EstSociodemo/ResultCenso2020_Nal.pdf",
            "consulte": "2026-09-21",
            "citation_source": "En el país residen 7 364 645 personas que hablan alguna lengua indígena, en comparación con 2010, el número de hablantes de lengua indígena se incrementó en 451 mil personas. Sin embargo, en términos porcentuales, las personas que hablan lengua indígena disminuyeron de 6.6 a 6.1 por ciento.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "nature",
        "cles": [
          "nature",
          "biodiversite",
          "megadiversite",
          "megadiverse",
          "especes",
          "animaux",
          "plantes",
          "reptiles",
          "mammiferes",
          "faune",
          "flore",
          "endemique"
        ],
        "reponse": "Pour ma nature, je vous donne le classement que tient ma commission de la biodiversite. Je fais partie d'un groupe de 17 pays dits megadiverses, et a eux tous ils representent pres de 70 % de la diversite mondiale des especes, dans les groupes les mieux etudies. Dans ce groupe, je suis 2e pour les reptiles, 3e pour les mammiferes, 5e pour les plantes vasculaires et les amphibiens, 11e pour les oiseaux. Ma commission note aussi que mes paysages de montagnes donnent une diversite de milieux, de sols et de climats, que le tropique du Cancer me traverse, et que chez moi se rejoignent la zone nearctique et la zone neotropicale.",
        "ouvre": [],
        "requiert": [
          "geographie"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "CONABIO, Biodiversidad Mexicana, Mexico megadiverso",
            "url": "https://www.biodiversidad.gob.mx/pais/quees",
            "consulte": "2026-09-21",
            "citation_source": "México es considerado un país \"megadiverso\", ya que forma parte del selecto grupo de naciones (17) poseedoras de la mayor diversidad de animales y plantas. Entre todos estos países, está representada casi el 70% de la diversidad mundial de especies (considerando los grupos más estudiados: anfibios, reptiles, aves y mamíferos y plantas vasculares).",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "CONABIO, Biodiversidad Mexicana, Mexico megadiverso, tableau Posicion de Mexico con respecto a otros paises megadiversos (d'apres Llorente-Bousquets et Ocegueda, 2008)",
            "url": "https://www.biodiversidad.gob.mx/pais/quees",
            "consulte": "2026-09-21",
            "citation_source": "Lugar de México | 5 | 3 | 11* | 2 | 5 (colonnes : plantas vasculares, mamíferos, aves, reptiles, anfibios)",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "CONABIO, Biodiversidad Mexicana, Mexico megadiverso",
            "url": "https://www.biodiversidad.gob.mx/pais/quees",
            "consulte": "2026-09-21",
            "citation_source": "La complejidad de los paisajes con montañas, confieren diversidad de ambientes, de suelos y de climas. México es un país eminentemente montañoso. Además está rodeado de mares.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "CONABIO, Biodiversidad Mexicana, Mexico megadiverso",
            "url": "https://www.biodiversidad.gob.mx/pais/quees",
            "consulte": "2026-09-21",
            "citation_source": "El trópico de Cáncer (23° 26´ 22´´) atraviesa México que se extiende de los 32° Norte (Baja California Norte) a los 14° Norte (Chiapas). En México confluyen la zona neártica y la neotropical.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "capitale",
        "cles": [
          "capitale",
          "mexico",
          "ville de mexico",
          "histoire",
          "azteques",
          "tenochtitlan",
          "texcoco",
          "lac texcoco",
          "conquete",
          "espagnols",
          "nouvelle espagne",
          "templo mayor"
        ],
        "reponse": "Ma capitale a commence sur l'eau. L'UNESCO le raconte : les Azteques ont bati ce qui allait devenir la capitale de leur empire sur une petite ile du lac de Texcoco, dans la vallee de Mexico, et l'ont appelee Tenochtitlan. Les conquerants espagnols ont detruit la ville-ile et commence a assecher le lac autour. Sur ses ruines ils ont construit Mexico, capitale de la Nouvelle-Espagne, et une fois independant j'ai garde ma capitale au meme endroit. Aujourd'hui, l'agglomeration a deborde de l'ile et remplit presque toute la vallee.",
        "ouvre": [
          "xochimilco"
        ],
        "requiert": [
          "geographie"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "UNESCO World Heritage Centre, Historic Centre of Mexico City and Xochimilco, fiche 412",
            "url": "https://whc.unesco.org/en/list/412/",
            "consulte": "2026-09-21",
            "citation_source": "The Aztecs built what was to become the capital of their empire on a small island in the Lake of Texcoco, in the Valley of Mexico. [...] The conquering Spaniards destroyed the island city of Tenochtitlan and started to drain the lake that surrounded it.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "UNESCO World Heritage Centre, Historic Centre of Mexico City and Xochimilco, fiche 412",
            "url": "https://whc.unesco.org/en/list/412/",
            "consulte": "2026-09-21",
            "citation_source": "They built the capital of New Spain, Mexico City, the “city of palaces”, on the ruins of the prehispanic city [...] Independent Mexico maintained its capital on the same place",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "UNESCO World Heritage Centre, Historic Centre of Mexico City and Xochimilco, fiche 412",
            "url": "https://whc.unesco.org/en/list/412/",
            "consulte": "2026-09-21",
            "citation_source": "Beyond the historic centre, the urban sprawl of the contemporary Metropolitan Area of Mexico City has now grown far beyond the island the capital once occupied, filling nearly the whole valley",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "xochimilco",
        "cles": [
          "xochimilco",
          "chinampa",
          "chinampas",
          "jardins flottants",
          "canaux",
          "canal",
          "unesco",
          "patrimoine",
          "axolotl",
          "ajolote",
          "agriculture",
          "ahuejote"
        ],
        "reponse": "Du grand lac, il me reste Xochimilco, a 28 km au sud de ma capitale. L'UNESCO decrit un lac residuel, le bras sud du grand lac de Texcoco asseche, avec un reseau de petits canaux et encore quelques chinampas, ces jardins dits flottants, et le classe avec le centre historique de Mexico. La FAO les decrit comme de petites iles en bandes, construites avec les sediments du fond du lac, des branches et de la vegetation en decomposition, separees par des canaux profonds de 1,5 metre en moyenne. Les producteurs y gerent 51 especes domestiquees et 96 non domestiquees. C'est aussi la que vit l'axolotl : un article de 2025 le decrit comme une espece aquatique en danger critique, endemique du lac de Xochimilco.",
        "ouvre": [
          "mais"
        ],
        "requiert": [
          "capitale"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "UNESCO World Heritage Centre, Historic Centre of Mexico City and Xochimilco, fiche 412",
            "url": "https://whc.unesco.org/en/list/412/",
            "consulte": "2026-09-21",
            "citation_source": "The lacustrine landscape of Xochimilco, located 28 km south of the city, constitutes the only reminder of traditional Pre-Hispanic land-use in the lagoons of the Mexico City basin. In the midst of a network of small canals, on the edge of the residual lake of Xochimilco (the southern arm of the great drained lake of Texcoco), some chinampas or ‘floating’ gardens can still be found.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "FAO, Globally Important Agricultural Heritage Systems, Chinampas Agricultural System, Mexico",
            "url": "https://www.fao.org/giahs/giahs-around-the-world/mexico-chinampas-agricultural-system/en",
            "consulte": "2026-09-21",
            "citation_source": "The chinampas are a kind of wetland raised-field agriculture composed by small islands in strips, built with the sediments from the lake bottom, branches and decaying vegetation, creating a web of channels. The channels form part of the irrigation system and have an average depth of 1.5 meters.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "FAO, Globally Important Agricultural Heritage Systems, Chinampas Agricultural System, Mexico",
            "url": "https://www.fao.org/giahs/giahs-around-the-world/mexico-chinampas-agricultural-system/en",
            "consulte": "2026-09-21",
            "citation_source": "the management of the vegetation in the chinampas by the local producers, which comprises 51 domesticated species, is an example of a process of evolution of the agrodiversity, which also includes 96 non domesticated species",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Ramos AG, Mena H, Schneider D, Zambrano L. Movement ecology of captive-bred axolotls in restored and artificial wetlands. PLoS One, 2025",
            "url": "https://europepmc.org/article/MED/40305450",
            "consulte": "2026-09-21",
            "citation_source": "The axolotl (Ambystoma mexicanum), a critically endangered aquatic species endemic to Lake Xochimilco, exemplifies these challenges.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "mais",
        "cles": [
          "mais",
          "nourriture",
          "cuisine",
          "agriculture",
          "domestication",
          "teosinte",
          "balsas",
          "courge",
          "milpa",
          "plantes cultivees"
        ],
        "reponse": "Le mais est ne chez moi, et deux articles de la meme revue le datent. Une etude genetique de 2002, sur 264 plantes, conclut que tout le mais vient d'une seule domestication dans mon sud, il y a environ 9 000 ans, et que les plus anciens types encore vivants sont ceux de mes hauts plateaux. En 2009, des grains d'amidon et des phytolithes trouves dans l'abri de Xihuatoxtla, dans la vallee du Balsas ou pousse son ancetre sauvage, montrent que le mais etait la il y a 8 700 ans. Au meme endroit, une courge domestiquee apparait tot, peut-etre Cucurbita argyrosperma. Dans mes chinampas, la FAO note qu'il etait la culture principale de la milpa, avant que la production ne se transforme.",
        "ouvre": [],
        "requiert": [
          "xochimilco"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Matsuoka Y, Vigouroux Y, Goodman MM, Sanchez G J, Buckler E, Doebley J. A single domestication for maize shown by multilocus microsatellite genotyping. PNAS, 2002",
            "url": "https://europepmc.org/article/MED/11983901",
            "consulte": "2026-09-21",
            "citation_source": "We present phylogenetic analyses based on 264 individual plants, each genotyped at 99 microsatellites, that challenge the multiple-origins hypothesis. Instead, our results indicate that all maize arose from a single domestication in southern Mexico about 9,000 years ago. Our analyses also indicate that the oldest surviving maize types are those of the Mexican highlands",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Piperno DR, Ranere AJ, Holst I, Iriarte J, Dickau R. Starch grain and phytolith evidence for early ninth millennium B.P. maize from the Central Balsas River Valley, Mexico. PNAS, 2009",
            "url": "https://europepmc.org/article/MED/19307570",
            "consulte": "2026-09-21",
            "citation_source": "the Balsas River Valley of tropical southwestern Mexico, where its wild ancestor is native. We report starch grain and phytolith data from the Xihuatoxtla shelter, located in the Central Balsas Valley, that indicate that maize was present by 8,700 calendrical years ago (cal. B.P.). Phytolith data also indicate an early preceramic presence of a domesticated species of squash, possibly Cucurbita argyrosperma.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "FAO, Globally Important Agricultural Heritage Systems, Chinampas Agricultural System, Mexico",
            "url": "https://www.fao.org/giahs/giahs-around-the-world/mexico-chinampas-agricultural-system/en",
            "consulte": "2026-09-21",
            "citation_source": "the production profile of the chinampas was transformed from a milpa production, where the maize was the main crop (Varadero chalqueño) and Mesoamerican vegetables (chile, tomato, squash, chilacayote and tomato)",
            "ancrage": "global"
          }
        ]
      }
    ],
    "pagesOuvertes": [
      "https://www.inegi.org.mx/contenidos/saladeprensa/boletines/2021/EstSociodemo/ResultCenso2020_Nal.pdf",
      "https://www.inegi.org.mx/contenidos/saladeprensa/aproposito/2014/monta%C3%B1as2014_0.pdf",
      "https://www.biodiversidad.gob.mx/pais/quees",
      "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGDLPI.pdf",
      "https://whc.unesco.org/en/list/412/",
      "https://www.fao.org/giahs/giahs-around-the-world/mexico-chinampas-agricultural-system/en",
      "https://europepmc.org/article/MED/11983901",
      "https://europepmc.org/article/MED/19307570",
      "https://europepmc.org/article/MED/40305450"
    ],
    "faitsEcartes": [
      "L'inscription du centre historique de Mexico et de Xochimilco au patrimoine mondial en 1987 : la date circule partout, mais le texte de la fiche UNESCO que j'ai pu lire (description, criteres, integrite) ne la porte pas. Je dis que le site est classe, pas en quelle annee.",
      "La designation des chinampas comme systeme ingenieux du patrimoine agricole mondial (SIPAM) de la FAO en 2017 et la formule 'depuis l'epoque azteque' : lues seulement dans des extraits de recherche, absentes du texte de la page FAO reellement ouverte. Ecarte.",
      "Les chinampas qui abriteraient 2 % de la biodiversite mondiale et 11 % de la biodiversite nationale : chiffre vu dans un resume de recherche, introuvable sur la page FAO ouverte. Ecarte, c'etait exactement le genre de pourcentage qui se recopie sans source.",
      "Le Mexique qui abriterait 10 a 12 % des especes du monde, attribue a la CONABIO : repere seulement via un moteur de recherche, pas sur la page CONABIO ouverte, qui donne a la place le chiffre de pres de 70 % pour l'ensemble des 17 pays megadiverses. Je n'ai pas transforme ce 70 % collectif en part du Mexique.",
      "Le nombre de langues indigenes reconnues (68 agrupaciones linguisticas, 364 variantes selon l'INALI) : aucune page de l'INALI reellement ouverte, et la loi ouverte ne donne pas de total. Le sujet langues dit seulement qu'elles sont reconnues, sans les compter.",
      "La fondation de Tenochtitlan en 1325 : aucune source de rang A ouverte ne porte cette date, la fiche UNESCO dit seulement que la ville a exerce son influence du 14e au 19e siecle. Date abandonnee.",
      "L'altitude de Mexico, environ 2 240 m : aucune page officielle ouverte. Ecarte, le sujet geographie s'en tient aux sommets mesures par l'INEGI.",
      "Les effectifs sauvages de l'axolotl : non repris ici, deja traites et ecartes par la fiche de l'axolotl. Le pays dit seulement ce que l'article de 2025 affirme, endemique du lac de Xochimilco et en danger critique.",
      "Controle : le Popocatepetl 'juste apres' l'Orizaba et le Nevado de Toluca en troisieme sommet du pays. La page INEGI classe les Etats par leur point le plus haut, pas les sommets entre eux. Reformule en classement par Etat.",
      "Controle : 'ma commission l'explique ainsi' dans le sujet nature. La page CONABIO rouverte donne le relief, le tropique et la rencontre nearctique et neotropicale, mais le lien de cause avec le rang megadiverse n'a pas ete retrouve mot pour mot. Reformule en simple constat.",
      "Controle : le mais qui aurait 'longtemps' ete la culture principale de la milpa des chinampas. La FAO dit seulement que la production est passee d'une milpa ou le mais dominait a autre chose, sans duree. 'Longtemps' coupe."
    ],
    "espece": "Pays megadiverse entre Atlantique et Pacifique",
    "taille": 1
  },
  {
    "id": "bresil",
    "iso3": "BRA",
    "mode": "documentaire",
    "type": "pays",
    "nom": "Le Brésil",
    "couleur": "#0B3D2E",
    "accent": "#F2C94C",
    "accroche": "Je me mesure au kilometre carre pres et je compte ma foret coupee chaque annee.",
    "ouverture": "Je suis un pays grand, et j'ai pris l'habitude de me mesurer avec trois decimales. Mon institut de statistique me recense, mon institut spatial compte ma foret coupee, et ma Constitution nomme les forets qu'elle protege. Demandez-moi ma taille, ma langue, mes biomes, l'Amazonie, le Para, le Pantanal ou la foret atlantique. Je repondrai avec ce que mes organismes ont publie, et je dirai quand je n'ai pas la page.",
    "ton": "Ample mais comptable. Parle de forets immenses avec des chiffres au kilometre carre pres, cite ses propres institutions comme on montre ses papiers. Fier de sa nature, lucide sur ce qu'il en perd, sans lyrisme de brochure.",
    "sujets": [
      {
        "id": "identite",
        "cles": [
          "bresil",
          "brazil",
          "identite",
          "pays",
          "presente",
          "superficie",
          "taille",
          "population",
          "habitants",
          "recensement",
          "geographie"
        ],
        "reponse": "Vous voulez savoir qui je suis ? Commencez par ma surface : mon institut de geographie, l'IBGE, me donne 8 510 417,771 km2, avec trois decimales. Mon recensement de 2022 a compte 203 080 756 habitants. Je tiens a ces deux nombres parce qu'ils sont publies par ceux qui me mesurent, pas par ceux qui me racontent. Demandez-moi ma langue ou mes biomes, c'est la que je deviens interessant.",
        "ouvre": [
          "langue",
          "biomes"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "IBGE (Instituto Brasileiro de Geografia e Estatistica), API de malhas territoriais, metadonnees du pays BR",
            "url": "https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR/metadados",
            "consulte": "2026-09-21",
            "citation_source": "\"area\":{\"dimensao\":\"8510417.771\",\"unidade\":{\"id\":\"km2\",\"nome\":\"Quilômetros quadrados\"}}",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "IBGE, Censo Demografico 2022, tabela SIDRA 4709, Populacao residente",
            "url": "https://servicodados.ibge.gov.br/api/v3/agregados/4709/periodos/2022/variaveis/93?localidades=N1%5Ball%5D",
            "consulte": "2026-09-21",
            "citation_source": "\"variavel\":\"População residente\",\"unidade\":\"Pessoas\" ... \"nome\":\"Brasil\"},\"serie\":{\"2022\":\"203080756\"}",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "langue",
        "cles": [
          "langue",
          "portugais",
          "portugues",
          "parler",
          "idiome",
          "constitution",
          "officiel",
          "langue officielle"
        ],
        "reponse": "Je vous reponds en francais, mais ma langue officielle est le portugais. Ce n'est pas une habitude, c'est un article de ma Constitution de 1988, l'article 13, qui dit que la langue portugaise est l'idiome officiel de la Republique federative du Bresil. Le meme article enchaine aussitot sur mes symboles : le drapeau, l'hymne, les armes et le sceau. Pour moi, la langue se range a cote du drapeau.",
        "ouvre": [],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Presidencia da Republica, Constituicao da Republica Federativa do Brasil de 1988, art. 13",
            "url": "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
            "consulte": "2026-09-21",
            "citation_source": "Art. 13. A língua portuguesa é o idioma oficial da República Federativa do Brasil. § 1º São símbolos da República Federativa do Brasil a bandeira, o hino, as armas e o selo nacionais.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "biomes",
        "cles": [
          "biomes",
          "biome",
          "nature",
          "vegetation",
          "cerrado",
          "caatinga",
          "pampa",
          "plantes",
          "flore",
          "biodiversite",
          "especes"
        ],
        "reponse": "Ma nature, je la decoupe en biomes, et dans mon rapport a la FAO j'en declare six. Le Cerrado couvre environ 24 % de mon territoire, la foret atlantique 13 %, la Caatinga 10 %, et le Pantanal 1,8 %. La Caatinga, je l'ai ecrit moi-meme, est le seul biome exclusivement bresilien. Cote plantes, un article de 2021, s'appuyant sur la base BFG, compte 32 696 especes d'angiospermes recensees chez moi, dont environ 18 000 endemiques. Demandez l'Amazonie, le Pantanal ou la foret atlantique si vous voulez le detail.",
        "ouvre": [
          "amazonie",
          "pantanal",
          "foret-atlantique"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "FAO, Global Forest Resources Assessment 2020, Report Brazil, 2020",
            "url": "https://openknowledge.fao.org/server/api/core/bitstreams/3c5593dd-a952-4f9e-87c2-f7d68f609b17/content",
            "consulte": "2026-09-21",
            "citation_source": "In Brazil, a lot of mapping process are made by biomes, an environmental division of the territory. There are six biomes in Brazil.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "FAO, Global Forest Resources Assessment 2020, Report Brazil, 2020",
            "url": "https://openknowledge.fao.org/server/api/core/bitstreams/3c5593dd-a952-4f9e-87c2-f7d68f609b17/content",
            "consulte": "2026-09-21",
            "citation_source": "The Caatinga biome covers an area equivalent to 10% of the national territory and is the only exclusively Brazilian biome. [...] Cerrado is the second largest biome in South America and covers an area of about 24% of the Brazilian territory. [...] The Atlantic Forest biome encompasse an area of 13% of the Brazilian territory. [...] It represents 1.8% of the total area of Brazil.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Gomes-da-Silva J., Lanna J., Forzza R.C., Distribution of endemic angiosperm species in Brazil on a municipality level, Biodiversity Data Journal, 2021",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8192407/",
            "consulte": "2026-09-21",
            "citation_source": "According to the updated version of the BFG database, there are currently 32,696 species of angiosperms on record in Brazil, of which ca. 18,000 species are endemic to the country ( BFG 2020 ).",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "amazonie",
        "cles": [
          "amazonie",
          "amazone",
          "amazonia",
          "foret",
          "deforestation",
          "desmatamento",
          "inpe",
          "prodes",
          "satellite",
          "arbres",
          "mato grosso",
          "environnement"
        ],
        "reponse": "L'Amazonie, oui, et je vous donne d'abord ce qu'on en perd. Mon institut spatial, l'INPE, cartographie l'Amazonie legale depuis 1988, et son programme PRODES mesure chaque annee le deboisement. Entre le 1er aout 2024 et le 31 juillet 2025, il a mesure 5 731 km2 deboises, soit 12,07 % de moins que les 6 518 km2 de l'annee precedente. Huit de mes neuf Etats amazoniens ont baisse, et le Mato Grosso est le seul a avoir augmente, de 26,73 %. Dans mon rapport a la FAO, j'ecris que le biome amazonien s'etend sur 420 millions d'hectares. Et ma Constitution classe la foret amazonienne bresilienne au patrimoine national.",
        "ouvre": [
          "para"
        ],
        "requiert": [
          "biomes"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "INPE (Instituto Nacional de Pesquisas Espaciais), Sistema do INPE aponta 5.731 km2 de desmatamento na Amazonia em 2025, 2026",
            "url": "https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias/sistema-do-inpe-aponta-5-731-km2-de-desmatamento-na-amazonia-em-2025",
            "consulte": "2026-09-21",
            "citation_source": "A taxa consolidada de desmatamento na Amazônia Legal em 2025 é de 5.731 km², segundo os dados do Instituto Nacional de Pesquisas Espaciais (INPE), responsável pelo Monitoramento Anual da Supressão da Vegetação Nativa (Prodes). Os dados são referentes ao período de 1º de agosto de 2024 a 31 de julho de 2025 e representam uma redução de 12,07% em relação à taxa de 2024, que foi de 6.518 km2. Oito dos nove estados da Amazônia Legal tiveram redução do desmatamento entre 2024 e 2025, sendo os valores mais acentuados observados no estado de Roraima (-39,10 %), Amapá (-37,04%) e Rondônia (-36,39%). O estado de Mato Grosso foi o único que apresentou aumento do desmatamento (26,73 %).",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "INPE, Sistema do INPE aponta 5.731 km2 de desmatamento na Amazonia em 2025, 2026",
            "url": "https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias/sistema-do-inpe-aponta-5-731-km2-de-desmatamento-na-amazonia-em-2025",
            "consulte": "2026-09-21",
            "citation_source": "Desde 1988, o INPE realiza o mapeamento sistemático da Amazônia Legal e produz as taxas anuais de desmatamento.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "FAO, Global Forest Resources Assessment 2020, Report Brazil, 2020",
            "url": "https://openknowledge.fao.org/server/api/core/bitstreams/3c5593dd-a952-4f9e-87c2-f7d68f609b17/content",
            "consulte": "2026-09-21",
            "citation_source": "The Amazon biome represents about 5% of the world's area, with an area of 420 million hectares.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Presidencia da Republica, Constituicao da Republica Federativa do Brasil de 1988, art. 225, par. 4",
            "url": "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
            "consulte": "2026-09-21",
            "citation_source": "§ 4º A Floresta Amazônica brasileira, a Mata Atlântica, a Serra do Mar, o Pantanal Mato-Grossense e a Zona Costeira são patrimônio nacional, e sua utilização far-se-á, na forma da lei, dentro de condições que assegurem a preservação do meio ambiente, inclusive quanto ao uso dos recursos naturais.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "para",
        "cles": [
          "para",
          "etat du para",
          "acai",
          "fruit",
          "fruits",
          "nourriture",
          "manger",
          "recolte",
          "extraction",
          "economie",
          "production"
        ],
        "reponse": "Le Para, c'est un de mes Etats, et l'IBGE lui donne 1 245 870,704 km2. Si vous connaissez l'acai, c'est la que je vous emmene. En 2024, mon enquete sur l'extraction vegetale a compte 247 461 tonnes de fruits d'acai recoltes par extraction dans tout le pays, dont 168 527 tonnes pour le Para. Ce sont des tonnes cueillies, pas des tonnes cultivees : l'enquete ne compte ici que l'extraction. Pour le fruit lui-meme, demandez-le directement, il parle pour lui.",
        "ouvre": [],
        "requiert": [
          "amazonie"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "IBGE, API de malhas territoriais, metadonnees de l'Unidade da Federacao 15 (Para)",
            "url": "https://servicodados.ibge.gov.br/api/v3/malhas/estados/15/metadados",
            "consulte": "2026-09-21",
            "citation_source": "\"nivel-geografico\":\"Unidade da Federação\" ... \"area\":{\"dimensao\":\"1245870.704\",\"unidade\":{\"id\":\"km2\",\"nome\":\"Quilômetros quadrados\"}}",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "IBGE, Producao da Extracao Vegetal e da Silvicultura (PEVS), tabela SIDRA 289, 2024",
            "url": "https://servicodados.ibge.gov.br/api/v3/agregados/289/periodos/2024/variaveis/144?localidades=N1%5Ball%5D%7CN3%5B15%5D&classificacao=193%5B3403%5D",
            "consulte": "2026-09-21",
            "citation_source": "\"variavel\":\"Quantidade produzida na extração vegetal\",\"unidade\":\"Toneladas\" ... \"categoria\":{\"3403\":\"1.1 - Açaí (fruto)\"} ... \"nome\":\"Brasil\"},\"serie\":{\"2024\":\"247461\"} ... \"nome\":\"Pará\"},\"serie\":{\"2024\":\"168527\"}",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "pantanal",
        "cles": [
          "pantanal",
          "zone humide",
          "marais",
          "animaux",
          "jaguar",
          "capybara",
          "caiman",
          "unesco",
          "patrimoine",
          "mammiferes"
        ],
        "reponse": "Le Pantanal, c'est mon eau douce etalee. Au sud-ouest du Mato Grosso, quatre aires protegees totalisant 187 818 hectares sont inscrites au patrimoine mondial depuis 2000, et elles ne representent que 1,3 % de ma region du Pantanal. L'evaluation de l'IUCN y avancait 80 especes de mammiferes, 50 de reptiles et plus de 300 de poissons d'eau douce. On y croise le jaguar, le puma, l'ocelot, et des concentrations de caimans yacare et de capybaras. Ma Constitution range aussi le Pantanal du Mato Grosso au patrimoine national.",
        "ouvre": [],
        "requiert": [
          "biomes"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "IUCN World Heritage Outlook, Pantanal Conservation Area, 2025",
            "url": "https://worldheritageoutlook.iucn.org/node/1107",
            "consulte": "2026-09-21",
            "citation_source": "Inscribed in 2000 [...] The Pantanal Conservation Area consists of a cluster of four protected areas with a total area of 187,818 ha. Located in western central Brazil at the south-west corner of the State of Mato Grosso, the site represents 1.3% of Brazil's Pantanal region, one of the world's largest freshwater wetland ecosystems.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "IUCN World Heritage Outlook, Pantanal Conservation Area, 2025",
            "url": "https://worldheritageoutlook.iucn.org/node/1107",
            "consulte": "2026-09-21",
            "citation_source": "The IUCN evaluation (IUCN, 2000) suggests 80 mammal species, 50 reptiles and more that 300 freshwater fish species while acknowledging the high probability of further records.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "IUCN World Heritage Outlook, Pantanal Conservation Area, 2025",
            "url": "https://worldheritageoutlook.iucn.org/node/1107",
            "consulte": "2026-09-21",
            "citation_source": "The most conspicuous mammals include several felids, such as jaguar (Panthera onca, NT), puma (Puma concolor, LC), jaguarundi (Herpailurus yagouaroundi, LC) and ocelot (Leopardus pardalis, LC). Large concentrations of Yacaré (Caiman yacare, LC) and Capybara (Hydrochoerus hydrochaeris, LC) are a common sight in the property.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Presidencia da Republica, Constituicao da Republica Federativa do Brasil de 1988, art. 225, par. 4",
            "url": "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
            "consulte": "2026-09-21",
            "citation_source": "§ 4º A Floresta Amazônica brasileira, a Mata Atlântica, a Serra do Mar, o Pantanal Mato-Grossense e a Zona Costeira são patrimônio nacional",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "foret-atlantique",
        "cles": [
          "foret atlantique",
          "mata atlantica",
          "atlantique",
          "serra do mar",
          "sao paulo",
          "parana",
          "singes",
          "primates",
          "arbres"
        ],
        "reponse": "La foret atlantique, j'en parle avec prudence. Dans les Etats du Parana et de Sao Paulo, 25 aires protegees, quelque 470 000 hectares au total, sont inscrites au patrimoine mondial depuis 1999. On y compte 120 especes de mammiferes, dont le jaguar, l'ocelot et le chien des buissons. A l'echelle de toute la foret atlantique, une liste de 2023 recense 5 044 especes d'arbres, avec un taux d'endemisme de 45 %. Dans mon rapport a la FAO, j'ai reconnu que des siecles d'occupation l'ont drastiquement reduite et la laissent aujourd'hui tres fragmentee.",
        "ouvre": [],
        "requiert": [
          "biomes"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "IUCN World Heritage Outlook, Atlantic Forest South-East Reserves, 2025",
            "url": "https://worldheritageoutlook.iucn.org/node/1090",
            "consulte": "2026-09-21",
            "citation_source": "Inscribed in 1999 [...] The Atlantic Forest South-East Reserves, in the states of Paraná and São Paulo, contain some of the best and most extensive examples of Atlantic forest in Brazil. The 25 protected areas that make up the site (some 470,000 ha in total) display the biological wealth and evolutionary history of the last remaining Atlantic forests.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "IUCN World Heritage Outlook, Atlantic Forest South-East Reserves, 2025",
            "url": "https://worldheritageoutlook.iucn.org/node/1090",
            "consulte": "2026-09-21",
            "citation_source": "Fauna includes 120 species of mammals. Amongst the flagship species are the jaguar, ocelot and the bush dog (Speothos venaticus).",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "IUCN World Heritage Outlook, Atlantic Forest South-East Reserves, 2025",
            "url": "https://worldheritageoutlook.iucn.org/node/1090",
            "consulte": "2026-09-21",
            "citation_source": "Ferreiro de Lima et al. (2023) reported an updated checklist of 5,044 tree species in the Atlantic Forest, with an overall endemism rate of 45%.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "FAO, Global Forest Resources Assessment 2020, Report Brazil, 2020",
            "url": "https://openknowledge.fao.org/server/api/core/bitstreams/3c5593dd-a952-4f9e-87c2-f7d68f609b17/content",
            "consulte": "2026-09-21",
            "citation_source": "However, in the light of centuries of occupation, the forest area in this biome was drastically reduced and is nowadays extremely fragmented. Nevertheless, the Atlantic Forest still hosts a significant portion of Brazil's biological diversity.",
            "ancrage": "global"
          }
        ]
      }
    ],
    "pagesOuvertes": [
      "https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR/metadados",
      "https://servicodados.ibge.gov.br/api/v3/malhas/estados/15/metadados",
      "https://servicodados.ibge.gov.br/api/v3/agregados/4709/periodos/2022/variaveis/93?localidades=N1%5Ball%5D",
      "https://servicodados.ibge.gov.br/api/v3/agregados/289/periodos/2024/variaveis/144?localidades=N1%5Ball%5D%7CN3%5B15%5D&classificacao=193%5B3403%5D",
      "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
      "https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias/sistema-do-inpe-aponta-5-731-km2-de-desmatamento-na-amazonia-em-2025",
      "https://openknowledge.fao.org/server/api/core/bitstreams/3c5593dd-a952-4f9e-87c2-f7d68f609b17/content",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC8192407/",
      "https://worldheritageoutlook.iucn.org/node/1107",
      "https://worldheritageoutlook.iucn.org/node/1090"
    ],
    "faitsEcartes": [
      "Part de l'Amazonie dans le territoire bresilien (environ 49 % selon l'IBGE): les pages IBGE Educa et Agencia de Noticias renvoient une erreur 403, le chiffre n'est connu que par un resume de moteur de recherche. Non cite.",
      "Le Para produirait 70 % de l'acai bresilien: chiffre trouve uniquement dans la presse regionale. Remplace par les tonnages bruts de la table IBGE 289, sans pourcentage calcule.",
      "Croissance de la population de 0,52 % par an entre 2010 et 2022, la plus faible depuis 1872: vue seulement dans la presse et un resume de recherche, la page gov.br etait masquee pour cause de periode electorale. Non cite.",
      "Deforestation 2025 presentee comme la troisieme plus faible de la serie historique: formulation d'une ONG et de la presse, absente de la page INPE ouverte. Non citee.",
      "Perte nette de foret de 1,5 million d'hectares par an entre 2010 et 2020 selon la FAO: la page FAO correspondante n'a pas ete ouverte, seul un resume de recherche la mentionne. Non citee.",
      "Le Bresil aurait la plus grande biodiversite de plantes vasculaires de la planete: l'article PMC l'ecrit, mais en l'attribuant a une autre publication (Filardi et al. 2018) non ouverte. Superlatif ecarte.",
      "L'Amazonie, plus grande reserve de biodiversite du monde: phrase du rapport national a la FAO, auto-declaration sans mesure. Superlatif ecarte.",
      "Pages UNESCO du patrimoine mondial (whc.unesco.org, sites 999 et 893): erreur 403 a chaque tentative. Les faits UNESCO sont cites via l'IUCN World Heritage Outlook, organe consultatif officiel, qui reprend la description du site.",
      "Comptages Ramsar du Pantanal (90 mammiferes, 700 oiseaux): cites de seconde main dans la page IUCN, la fiche Ramsar n'a pas ete ouverte. Non cites.",
      "Controle: 'parce qu'on me mesure serieusement' (identite) coupe, lien de cause non soutenu par la source IBGE.",
      "Controle: 'mon dernier recensement' (identite) reformule en 'mon recensement de 2022', la source ne dit pas qu'il est le dernier.",
      "Controle: 'chez moi on vous aurait repondu en portugais' (langue) reformule, l'article 13 fixe la langue officielle, pas l'usage de tous.",
      "Controle: 'depuis 1988 avec son programme PRODES' (amazonie) reformule, la page INPE date de 1988 la cartographie systematique, pas le nom PRODES.",
      "Controle: 'ma foret de la cote' (foret-atlantique) coupe, geographie absente des sources du sujet.",
      "Controle: 'par satellite' (accroche) et 'mon institut spatial me photographie' (ouverture) retires, aucune source ouverte ne mentionne le satellite."
    ],
    "espece": "Pays d'Amerique du Sud, six biomes",
    "taille": 1
  },
  {
    "id": "italie",
    "iso3": "ITA",
    "mode": "documentaire",
    "type": "pays",
    "nom": "L'Italie",
    "couleur": "#123B2C",
    "accent": "#F2B544",
    "accroche": "Je suis faite de collines et de montagnes, et l'activite d'un de mes volcans est documentee depuis au moins 2 700 ans.",
    "ouverture": "Je suis une peninsule qui descend vers la Mediterranee, avec deux grandes iles a mes cotes. Mes volcans actifs sont dans ma partie sud, et l'un d'eux, l'Etna, est inscrit au patrimoine mondial. Demandez-moi mon relief, mes iles, ma langue, mes volcans ou mes oranges rouges. Je reponds avec ce que mes instituts publient, et je vous dis quand je ne sais pas.",
    "ton": "Precise et un peu fiere, mais comptable avant d'etre lyrique. Cite ses instituts comme on cite des temoins. Refuse la carte postale et prefere le chiffre exact, meme quand il est moins flatteur.",
    "sujets": [
      {
        "id": "identite",
        "cles": [
          "italie",
          "identite",
          "pays",
          "presente",
          "population",
          "habitants",
          "peninsule",
          "naissances",
          "demographie"
        ],
        "reponse": "Je suis l'Italie, une peninsule, et mon institut de statistique me compte chaque mois. Au 30 juin 2026, j'avais 58 943 673 residents, soit 845 de moins qu'au debut de l'annee. Sur les six premiers mois de 2026, 166 000 naissances ont ete enregistrees, et l'institut y lit une nouvelle baisse de la natalite, de 0,8 %. Je vous donne ce total tel qu'il est publie : je ne grossis pas, je m'erode doucement.",
        "ouvre": [
          "relief",
          "langue"
        ],
        "requiert": [],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "ISTAT, Monthly demographic balance of the population, June 2026, 2026",
            "url": "https://www.istat.it/en/informative-system-and-data-warehouse/monthly-demographic-balance-of-the-population-june-2026/",
            "consulte": "2026-09-21",
            "citation_source": "the resident population of Italy stood at 58,943,673, a decrease of 845 units since the beginning of the year",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "ISTAT, Monthly demographic balance of the population, June 2026, 2026",
            "url": "https://www.istat.it/en/informative-system-and-data-warehouse/monthly-demographic-balance-of-the-population-june-2026/",
            "consulte": "2026-09-21",
            "citation_source": "Births recorded in the first six months of the year under review are 166 thousand, confirming a further decline in the birth rate (-0.8%",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "INGV, Del Carlo P., Landi P., Vulcani Italiani (roll-up)",
            "url": "https://www.pi.ingv.it/wp-content/pdf/RollUp/VulcaniItaliani.pdf",
            "consulte": "2026-09-21",
            "citation_source": "I vulcani attivi italiani sono localizzati nella parte meridionale della penisola.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "relief",
        "cles": [
          "relief",
          "geographie",
          "montagne",
          "montagnes",
          "collines",
          "plaine",
          "alpes",
          "apennins",
          "cotes",
          "littoral"
        ],
        "reponse": "Si vous me survolez, vous verrez surtout des pentes : 41,6 % de ma surface est classee en collines, 35,2 % en montagne, et seulement 23,2 % en plaine. Mes habitants font l'inverse de mon relief : en 2021, 49,2 % vivaient en plaine et 12,1 % seulement en montagne. Mon institut me decoupe aussi en ecoregions, alpines et apennines, et 7,4 % de ma population vit dans la section alpine centre-orientale contre 2,0 % dans l'occidentale. Autour de tout cela, j'ai 8 970 km de ligne de cote.",
        "ouvre": [
          "iles"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "ISTAT, Annuario statistico italiano 2022, capitolo 1 Territorio, 2022",
            "url": "https://www.istat.it/storage/ASI/2022/capitoli/C01.pdf",
            "consulte": "2026-09-21",
            "citation_source": "In base a tale classificazione, il territorio italiano risulta caratterizzato per il 23,2 per cento della sua superficie da zone di pianura, per il 35,2 per cento da zone montane e per il 41,6 per cento da zone di collina (Tavola 1.4)",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "ISTAT, Annuario statistico italiano 2022, capitolo 1 Territorio, 2022",
            "url": "https://www.istat.it/storage/ASI/2022/capitoli/C01.pdf",
            "consulte": "2026-09-21",
            "citation_source": "Nel 2021, la popolazione si concentra prevalentemente nelle aree di pianura (49,2 per cento) e, in secondo luogo, di collina (38,7 per cento); risiede in montagna solo il 12,1 per cento della popolazione.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "ISTAT, Annuario statistico italiano 2022, capitolo 1 Territorio, 2022",
            "url": "https://www.istat.it/storage/ASI/2022/capitoli/C01.pdf",
            "consulte": "2026-09-21",
            "citation_source": "Nella Sezione Alpina Centro-Orientale vivono in proporzione più persone che in quella Occidentale (7,4 per cento contro il 2,0 per cento).",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "ISTAT, Annuario statistico italiano 2022, capitolo 1 Territorio, 2022",
            "url": "https://www.istat.it/storage/ASI/2022/capitoli/C01.pdf",
            "consulte": "2026-09-21",
            "citation_source": "L’Italia presenta una linea di confine con il mare11 di 8.970 chilometri.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "iles",
        "cles": [
          "iles",
          "sicile",
          "sardaigne",
          "insulaire",
          "regions",
          "superficie",
          "taille"
        ],
        "reponse": "Mes deux grandes iles sont aussi deux grandes regions. La Sicile est ma plus grande region, avec 25 833 km2, et la Sardaigne en compte 24 099 km2. Ce sont aussi elles qui portent mes plus longues cotes : 2 128 km pour la Sardaigne, 1 731 km pour la Sicile. Et ni l'une ni l'autre n'est plate : mon institut classe 67,9 % de la Sardaigne et 61,4 % de la Sicile en collines.",
        "ouvre": [
          "etna",
          "oranges"
        ],
        "requiert": [
          "relief"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "ISTAT, Annuario statistico italiano 2022, capitolo 1 Territorio, 2022",
            "url": "https://www.istat.it/storage/ASI/2022/capitoli/C01.pdf",
            "consulte": "2026-09-21",
            "citation_source": "Strettamente collegata all’ampiezza della popolazione è la superficie territoriale delle Regioni stesse che varia da un minimo di 3.261 chilometri quadrati (Valle d’Aosta) a un massimo di 25.833 chilometri quadrati (Sicilia). La seconda Regione per ampiezza dei confini è il Piemonte (25.387 chilometri quadrati), a cui seguono a stretta distanza la Sardegna (24.099 chilometri quadrati)",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "ISTAT, Annuario statistico italiano 2022, capitolo 1 Territorio, 2022",
            "url": "https://www.istat.it/storage/ASI/2022/capitoli/C01.pdf",
            "consulte": "2026-09-21",
            "citation_source": "Le Regioni con la linea di costa più lunga sono Sardegna (2.128 chilometri), Sicilia (1.731), Puglia (1.041), Calabria (789) e Toscana (717) (Tavola 1.5).",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "ISTAT, Annuario statistico italiano 2022, capitolo 1 Territorio, 2022",
            "url": "https://www.istat.it/storage/ASI/2022/capitoli/C01.pdf",
            "consulte": "2026-09-21",
            "citation_source": "Alcune Regioni hanno territori soprattutto collinari: è il caso di Umbria (con il 70,7 per cento di superficie collinare) e Marche (69,2 per cento), ma anche di Sardegna (67,9 per cento), Toscana (66,5 per cento), Sicilia (61,4 per cento)",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "langue",
        "cles": [
          "langue",
          "langues",
          "italien",
          "parler",
          "minorites",
          "sarde",
          "frioulan",
          "ladin",
          "occitan"
        ],
        "reponse": "Je parle italien, et la loi 482 du 15 decembre 1999 le reconnait comme ma langue officielle. Mais la meme loi protege la langue et la culture de minorites : les communautes albanaises, catalanes, germaniques, grecques, slovenes et croates, et celles qui parlent le francais, le franco-provencal, le frioulan, le ladin, l'occitan et le sarde. Cela fait douze groupes nommes dans un seul texte. Je ne parle donc pas d'une seule voix.",
        "ouvre": [],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Ministero dell'Istruzione e del Merito, Lingue di minoranza",
            "url": "https://www.mim.gov.it/en/lingue-di-minoranza",
            "consulte": "2026-09-21",
            "citation_source": "La legge 482 del 15 dicembre 1999, pur riconoscendo nell'Italiano la lingua ufficiale, tutela la lingua e la cultura delle minoranze",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Ministero dell'Istruzione e del Merito, Lingue di minoranza",
            "url": "https://www.mim.gov.it/en/lingue-di-minoranza",
            "consulte": "2026-09-21",
            "citation_source": "comunità albanesi, catalane, germaniche, greche, slovene e croate e di quelle parlanti il francese, il franco-provenzale, il friulano, il ladino, l'occitano e il sardo",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "etna",
        "cles": [
          "etna",
          "unesco",
          "patrimoine",
          "patrimoine mondial",
          "volcan",
          "stratovolcan",
          "altitude",
          "hauteur",
          "crateres"
        ],
        "reponse": "L'Etna est sur la cote est de la Sicile, et l'UNESCO a annonce son inscription au patrimoine mondial le 21 juin 2013, sur 19 237 hectares inhabites de sa partie haute. Le texte d'inscription le dit en toutes lettres : c'est la plus haute montagne insulaire de Mediterranee et le stratovolcan le plus actif du monde. Son histoire eruptive remonte a 500 000 ans, et au moins 2 700 ans de cette activite sont documentes. L'INGV, qui le surveille, lui donnait environ 3 320 m en 2019 et compte quatre crateres au sommet. Au total, 62 de mes biens sont inscrits sur la liste du patrimoine mondial, dont 56 culturels et 6 naturels.",
        "ouvre": [
          "volcans"
        ],
        "requiert": [
          "iles"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "UNESCO, Mount Etna and the Mountains of Pamir inscribed on World Heritage List alongside El Pinacate and Gran Desierto de Altar, 2013",
            "url": "https://www.unesco.org/en/articles/mount-etna-and-mountains-pamir-inscribed-world-heritage-list-alongside-el-pinacate-and-gran-desierto",
            "consulte": "2026-09-21",
            "citation_source": "Mount Etna (Italy) is an iconic site encompassing 19,237 uninhabited hectares on the highest part of Mount Etna, on the eastern coast of Sicily. Mount Etna is the highest Mediterranean island mountain and the most active stratovolcano in the world. The eruptive history of the volcano can be traced back 500,000 years and at least 2,700 years of this activity has been documented.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "UNESCO, Mount Etna and the Mountains of Pamir inscribed on World Heritage List alongside El Pinacate and Gran Desierto de Altar, 2013",
            "url": "https://www.unesco.org/en/articles/mount-etna-and-mountains-pamir-inscribed-world-heritage-list-alongside-el-pinacate-and-gran-desierto",
            "consulte": "2026-09-21",
            "citation_source": "21 June 2013",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "INGV Osservatorio Etneo, Monte Etna",
            "url": "https://www.ct.ingv.it/etna/",
            "consulte": "2026-09-21",
            "citation_source": "Altezza sopra il livello del mare: circa 3320 m nel 2019",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "INGV Osservatorio Etneo, Monte Etna",
            "url": "https://www.ct.ingv.it/etna/",
            "consulte": "2026-09-21",
            "citation_source": "I quattro crateri sommitali sono: la Voragine e la Bocca Nuova, che si sono formate all'interno del Cratere Centrale rispettivamente nel 1945 e 1968, il Cratere di Nord-Est, che esiste dal 1911 che è attualmente il punto più alto dell'Etna (~3320 m), e infine il Cratere di Sud-Est, nato nel 1971",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "UNESCO World Heritage Centre, Italy, States Parties",
            "url": "https://whc.unesco.org/en/statesparties/it",
            "consulte": "2026-09-21",
            "citation_source": "62 Properties inscribed on the World Heritage List",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "UNESCO World Heritage Centre, Italy, States Parties",
            "url": "https://whc.unesco.org/en/statesparties/it",
            "consulte": "2026-09-21",
            "citation_source": "Cultural 56",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "UNESCO World Heritage Centre, Italy, States Parties",
            "url": "https://whc.unesco.org/en/statesparties/it",
            "consulte": "2026-09-21",
            "citation_source": "Natural 6",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "volcans",
        "cles": [
          "volcans",
          "eruption",
          "eruptions",
          "stromboli",
          "vesuve",
          "campi flegrei",
          "ingv",
          "lave",
          "sismique"
        ],
        "reponse": "Mes volcans actifs sont dans ma partie sud. Le Stromboli a une activite persistante, avec de petites explosions toutes les 15 a 30 minutes, et l'Etna une activite semi-persistante, coupee de pauses qui durent de quelques jours a quelques annees. Sur les 40 dernieres annees, l'intervalle moyen entre deux eruptions de flanc de l'Etna a ete d'environ 2 ans, ce qui est une moyenne et non un calendrier. D'autres dorment sans etre eteints : l'INGV les appelle quiescents, et range parmi eux le Vesuve, les Champs Phlegreens, Ischia, Vulcano, Lipari et Pantelleria. Sous la mer aussi, dans la Tyrrhenienne et le detroit de Sicile, j'ai beaucoup de volcans, dont le Marsili.",
        "ouvre": [],
        "requiert": [
          "etna"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "INGV, Del Carlo P., Landi P., Vulcani Italiani (roll-up)",
            "url": "https://www.pi.ingv.it/wp-content/pdf/RollUp/VulcaniItaliani.pdf",
            "consulte": "2026-09-21",
            "citation_source": "Tra di essi, lo Stromboli è caratterizzato da attività persistente con piccole esplosioni ogni 15-30 minuti, mentre l'Etna è caratterizzato da attività semipersistente con periodi di inattività la cui durata può variare da giorni ad anni.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "INGV, Del Carlo P., Landi P., Vulcani Italiani (roll-up)",
            "url": "https://www.pi.ingv.it/wp-content/pdf/RollUp/VulcaniItaliani.pdf",
            "consulte": "2026-09-21",
            "citation_source": "Tra i vulcani quiescenti il più famoso è sicuramente il Vesuvio ma ce ne sono molti altri come i Campi Flegrei, Ischia, Vulcano, Lipari e Pantelleria. Sono anche presenti molti vulcani sottomarini nel Mar Tirreno e nello Stretto di Sicilia; il più conosciuto è il Marsili nel Mar Tirreno.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "INGV Osservatorio Etneo, Monte Etna",
            "url": "https://www.ct.ingv.it/etna/",
            "consulte": "2026-09-21",
            "citation_source": "negli ultimi 40 anni l'intervallo medio fra le eruzioni di fianco è stato di circa 2 anni.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "oranges",
        "cles": [
          "oranges",
          "orange",
          "arancia",
          "orange sanguine",
          "fruits",
          "nourriture",
          "agrumes",
          "tarocco",
          "indication geographique"
        ],
        "reponse": "Le fruit que je vous presente, c'est l'Arancia Rossa di Sicilia, une indication geographique protegee enregistree aupres de l'Union europeenne le 21 juin 1996. Son cahier des charges de 2012 la reserve a trois varietes, le Tarocco, le Moro et le Sanguinello, cultivees dans des communes des provinces de Catania, Siracusa et Enna, en Sicile orientale. Le meme texte explique sa couleur : autour du relief volcanique de l'Etna, les forts ecarts de temperature font s'accumuler dans le fruit des sucres et des pigments anthocyanes. Son jus est sanguin par la presence de ces pigments, les anthocyanes, et le texte ajoute que les memes varietes cultivees sous d'autres climats n'ont pas cette couleur.",
        "ouvre": [],
        "requiert": [
          "iles"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "GOV.UK, Protected food and drink names, Arancia Rossa di Sicilia",
            "url": "https://www.gov.uk/protected-food-drink-names/arancia-rossa-di-sicilia",
            "consulte": "2026-09-21",
            "citation_source": "Protected Geographical Indication (PGI)",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "GOV.UK, Protected food and drink names, Arancia Rossa di Sicilia",
            "url": "https://www.gov.uk/protected-food-drink-names/arancia-rossa-di-sicilia",
            "consulte": "2026-09-21",
            "citation_source": "Date of original registration with the EU:\n21 June 1996",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Ministero delle politiche agricole alimentari e forestali, Disciplinare di produzione della IGP Arancia Rossa di Sicilia, 2012",
            "url": "https://www.masaf.gov.it/flex/files/2/0/e/D.93c91c1feb1320ba0654/Disciplinare_di_produzione_ARS14mag2012.pdf",
            "consulte": "2026-09-21",
            "citation_source": "La indicazione geografica protetta \"Arancia Rossa di Sicilia\" è riservata alle seguenti varietà:\n- Tarocco, con le seguenti cultivar",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Ministero delle politiche agricole alimentari e forestali, Disciplinare di produzione della IGP Arancia Rossa di Sicilia, 2012",
            "url": "https://www.masaf.gov.it/flex/files/2/0/e/D.93c91c1feb1320ba0654/Disciplinare_di_produzione_ARS14mag2012.pdf",
            "consulte": "2026-09-21",
            "citation_source": "La zona di produzione dell'\"Arancia Rossa di Sicilia\" comprende il territorio idoneo della Sicilia Orientale per la coltivazione dell'Arancia pigmentata ed è così individuato: - Provincia di Catania [...] - Provincia di Siracusa [...] - Provincia di Enna",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Ministero delle politiche agricole alimentari e forestali, Disciplinare di produzione della IGP Arancia Rossa di Sicilia, 2012",
            "url": "https://www.masaf.gov.it/flex/files/2/0/e/D.93c91c1feb1320ba0654/Disciplinare_di_produzione_ARS14mag2012.pdf",
            "consulte": "2026-09-21",
            "citation_source": "In particolare, la zona collinare e la pianura circostante il rilievo vulcanico dell'Etna si è andata caratterizzando e specializzando in una coltivazione del tutto particolare. Infatti, per effetto delle notevoli escursioni termiche presenti nella zona, si determina negli esperidi un accumulo zuccherino e di pigmenti antociani di notevole rilevanza",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Ministero delle politiche agricole alimentari e forestali, Disciplinare di produzione della IGP Arancia Rossa di Sicilia, 2012",
            "url": "https://www.masaf.gov.it/flex/files/2/0/e/D.93c91c1feb1320ba0654/Disciplinare_di_produzione_ARS14mag2012.pdf",
            "consulte": "2026-09-21",
            "citation_source": "colore del succo: sanguigno per la presenza di pigmenti idrosolubili (antociani), nella polpa e\nnella buccia",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Ministero delle politiche agricole alimentari e forestali, Disciplinare di produzione della IGP Arancia Rossa di Sicilia, 2012",
            "url": "https://www.masaf.gov.it/flex/files/2/0/e/D.93c91c1feb1320ba0654/Disciplinare_di_produzione_ARS14mag2012.pdf",
            "consulte": "2026-09-21",
            "citation_source": "Infatti, le stesse varietà di arancia coltivate in altri climi non presentano il particolare colore e le specifiche caratteristiche organolettiche che le ha rese famose nel mondo.",
            "ancrage": "global"
          }
        ]
      }
    ],
    "pagesOuvertes": [
      "https://www.istat.it/en/informative-system-and-data-warehouse/monthly-demographic-balance-of-the-population-june-2026/",
      "https://www.istat.it/storage/ASI/2022/capitoli/C01.pdf",
      "https://whc.unesco.org/en/statesparties/it",
      "https://www.unesco.org/en/articles/mount-etna-and-mountains-pamir-inscribed-world-heritage-list-alongside-el-pinacate-and-gran-desierto",
      "https://www.ct.ingv.it/etna/",
      "https://www.ingv.it/etna",
      "https://www.pi.ingv.it/wp-content/pdf/RollUp/VulcaniItaliani.pdf",
      "https://www.mim.gov.it/en/lingue-di-minoranza",
      "https://www.gov.uk/protected-food-drink-names/arancia-rossa-di-sicilia",
      "https://www.masaf.gov.it/flex/files/2/0/e/D.93c91c1feb1320ba0654/Disciplinare_di_produzione_ARS14mag2012.pdf",
      "https://www.gazzettaufficiale.it/eli/id/1999/12/20/099G0557/sg"
    ],
    "faitsEcartes": [
      "La fiche UNESCO de l'Etna (whc.unesco.org/en/list/1427), le communique du Centre du patrimoine mondial et la decision 37 COM 8B.15 ont renvoye une erreur 403. Les faits sur l'Etna viennent de l'article UNESCO de 2013 qui, lui, s'est ouvert.",
      "La derniere eruption de l'Etna : la page ingv.it/etna affiche 'Ultima eruzione: Dicembre 2018', une mention manifestement non mise a jour. Non ecrit, pour ne pas presenter une date perimee comme actuelle.",
      "L'altitude maximale de 3324 m donnee par ingv.it/etna : elle differe de l'environ 3320 m en 2019 de l'Osservatorio Etneo. Seule la valeur datee de 2019 est ecrite.",
      "Les textes reglementaires de l'Union europeenne sur l'Arancia Rossa di Sicilia (reglement CE n. 1107/96, JO C 369 de 2012) : EUR-Lex a renvoye des pages vides, a l'outil comme en telechargement direct. L'enregistrement est cite via le registre GOV.UK, le contenu via le disciplinare ministeriel de 2012.",
      "Un nouveau disciplinare de l'Arancia Rossa di Sicilia serait entre en vigueur en 2026 : l'information ne vient que de la presse (ANSA), non citable, et le nouveau texte n'a pas ete ouvert. Les faits du sujet 'oranges' viennent du disciplinare de 2012, peut-etre remplace.",
      "Le texte integral de la loi 482/1999 : la Gazzetta Ufficiale n'a livre que l'en-tete, le dossier du Senat a renvoye 403. L'article 1 et la liste des langues sont cites via la page du Ministero dell'Istruzione e del Merito.",
      "La surface totale de l'Italie (302.069 km2) : elle n'apparait que dans une cellule de tableau extraite du PDF ISTAT, sans phrase citable. Non ecrit.",
      "Un superlatif du type 'le pays qui a le plus de sites UNESCO au monde' : la page UNESCO ouverte donne le total italien, sans comparaison avec les autres pays. Non ecrit.",
      "Les endemismes de la faune et de la flore de l'Etna : l'article UNESCO les mentionne sans nommer une espece ni donner un chiffre. Non ecrit comme fait detaille.",
      "Controle : 'tous' retire de 'mes volcans actifs sont tous dans ma partie sud' (ouverture et sujet volcans). L'INGV dit que les volcans actifs sont localises dans la partie meridionale, sans quantificateur.",
      "Controle : 'que je porte depuis longtemps' coupe dans le sujet langue. La page du ministere ne dit rien de l'anciennete de ces minorites.",
      "Controle : 'meme si j'ecris d'une seule langue' coupe dans le sujet langue. Non soutenu, la loi 482 protege aussi l'usage des langues minoritaires.",
      "Controle : 'l'UNESCO l'a inscrit le 21 juin 2013' reformule en 'a annonce son inscription le 21 juin 2013'. La date citee est celle de l'article d'annonce, la decision d'inscription (37 COM 8B.15) n'a pas pu etre ouverte.",
      "Controle : 'son jus est sanguin pour cette raison' reformule. Le disciplinare attribue la couleur du jus a la presence d'antocyanes ; il relie les ecarts thermiques a l'accumulation de sucres et de pigments et a la couleur de l'epicarpe, pas directement au jus.",
      "Controle : 'son cahier des charges ne l'accorde qu'a' date en 'son cahier des charges de 2012', le texte de 2012 ayant peut-etre ete remplace en 2026 (voir plus haut)."
    ],
    "espece": "Peninsule mediterraneenne et ses grandes iles",
    "taille": 1
  },
  {
    "id": "malaisie",
    "iso3": "MYS",
    "mode": "documentaire",
    "type": "pays",
    "nom": "La Malaisie",
    "couleur": "#0E3B2E",
    "accent": "#F2B134",
    "accroche": "Je tiens sur deux rives, une peninsule et un morceau de Borneo, et ma langue nationale est le malais.",
    "ouverture": "Je suis un pays en deux morceaux, pose dans la zone equatoriale. D'un cote la peninsule malaise, de l'autre Sabah et Sarawak. Demandez-moi mes habitants, ma langue, mon climat, ma montagne, mes singes roux ou mes fruits. Je reponds avec ce que mes registres affichent, et je dis quand ils se taisent.",
    "ton": "Chaleureux mais comptable, comme un pays qui aime recevoir et tient quand meme ses registres a jour. Phrases simples, un sourire en coin, aucune carte postale. Quand un chiffre manque, il le dit au lieu de broder.",
    "sujets": [
      {
        "id": "identite",
        "cles": [
          "malaisie",
          "identite",
          "pays",
          "presente",
          "geographie",
          "peninsule",
          "borneo",
          "sabah",
          "sarawak",
          "labuan",
          "superficie",
          "territoire",
          "sundaland"
        ],
        "reponse": "Bonjour, je suis la Malaisie, et je ne tiens pas en un bloc. Une partie de moi, c'est la Malaisie peninsulaire ; l'autre, dans ma region orientale, ce sont les Etats de Sabah et de Sarawak, avec le territoire federal de Labuan sur la cote nord-ouest de l'ile de Borneo. Mises bout a bout, mes terres couvrent environ 33,02 millions d'hectares. Les biologistes me rangent dans la region biogeographique de la Sonde, le Sundaland. Je fonctionne en democratie parlementaire, avec une monarchie constitutionnelle et trois branches de gouvernement : l'executif, le legislatif et le judiciaire.",
        "ouvre": [
          "population",
          "climat"
        ],
        "requiert": [],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Malaysia Biodiversity Information System (MyBIS), Geographical, Malaysia",
            "url": "https://www.mybis.gov.my/art/143",
            "consulte": "2026-09-21",
            "citation_source": "a tropical country that belongs to the Sundaland biogeographical region and covering an area of about 33.02 million hectares (ha) consisting of; Peninsular Malaysia, the states of Sabah and Sarawak in the eastern region and the Federal Territory of Labuan in the north-western coastal area of Borneo Island.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Malaysia Biodiversity Information System (MyBIS), Geographical, Malaysia",
            "url": "https://www.mybis.gov.my/art/143",
            "consulte": "2026-09-21",
            "citation_source": "practises a system of Parliamentary democracy with a constitutional monarchy with three branches of government, namely the Executive, the Legislature and the Judiciary.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "population",
        "cles": [
          "population",
          "habitants",
          "citoyens",
          "demographie",
          "combien",
          "gens",
          "peuple",
          "hommes",
          "femmes"
        ],
        "reponse": "Nous sommes environ 34,4 millions en 2026, contre 34,2 millions en 2025 : c'est l'estimation de mon Departement de la statistique. Les citoyens sont passes de 30,8 a 31,0 millions sur la meme periode. Cote hommes et femmes, on compte 18,0 millions d'hommes et 16,4 millions de femmes en 2026. Ces chiffres ne sortent pas d'un recensement de l'annee : ils partent de mon recensement de 2020 et avancent avec les naissances, les deces et les migrations.",
        "ouvre": [
          "langue"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Department of Statistics Malaysia (DOSM), Current Population Estimates, 2026",
            "url": "https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-2026",
            "consulte": "2026-09-21",
            "citation_source": "Malaysia's population is estimated at 34.4 million in 2026, compared with 34.2 million in 2025",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Department of Statistics Malaysia (DOSM), Current Population Estimates, 2026",
            "url": "https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-2026",
            "consulte": "2026-09-21",
            "citation_source": "The Citizens population increased from 30.8 million in 2025 to 31.0 million in 2026",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Department of Statistics Malaysia (DOSM), Current Population Estimates, 2026",
            "url": "https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-2026",
            "consulte": "2026-09-21",
            "citation_source": "The males population increased from 17.9 million in 2025 to 18.0 million in 2026, while the females rose from 16.3 million to 16.4 million in the same period.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Department of Statistics Malaysia (DOSM), Current Population Estimates, 2026",
            "url": "https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-2026",
            "consulte": "2026-09-21",
            "citation_source": "The annual current population estimates are based on the Population and Housing Census Malaysia, 2020, and use the cohort-component method which comprises annual births, deaths, internal migration and international migration.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "langue",
        "cles": [
          "langue",
          "langues",
          "malais",
          "bahasa",
          "parler",
          "anglais",
          "mandarin",
          "tamoul",
          "constitution",
          "article 152"
        ],
        "reponse": "Ma langue nationale, c'est le malais, qu'on appelle aussi la langue malaisienne. L'article 152 de ma Constitution federale le pose, et mon portail officiel ecrit que ce role de langue nationale ne se discute pas. En 1967, une loi sur la langue nationale est venue renforcer cette position. Mais chez moi, on ne parle pas qu'une langue : les communautes restent libres d'utiliser d'autres langues, le mandarin chez les Chinois, le tamoul chez les Indiens, et l'anglais domine encore le commerce et l'industrie.",
        "ouvre": [
          "fruits"
        ],
        "requiert": [
          "population"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Government of Malaysia, MyGOV portal, Learn about Malaysia: Official Language",
            "url": "https://www.malaysia.gov.my/en/government/learn-about-malaysia/official-language",
            "consulte": "2026-09-21",
            "citation_source": "Article 152 of the Federal Constitution explains that the Malay language, also known as the Malaysian language, is an official language whose function and role as the National Language cannot be disputed.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Government of Malaysia, MyGOV portal, Learn about Malaysia: Official Language",
            "url": "https://www.malaysia.gov.my/en/government/learn-about-malaysia/official-language",
            "consulte": "2026-09-21",
            "citation_source": "The position of the Malay language as an official language was strengthened by the National Language Act 1967.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Government of Malaysia, MyGOV portal, Learn about Malaysia: Official Language",
            "url": "https://www.malaysia.gov.my/en/government/learn-about-malaysia/official-language",
            "consulte": "2026-09-21",
            "citation_source": "free to use other languages such as Mandarin by the Chinese and Tamil by the Indians",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Government of Malaysia, MyGOV portal, Learn about Malaysia: Official Language",
            "url": "https://www.malaysia.gov.my/en/government/learn-about-malaysia/official-language",
            "consulte": "2026-09-21",
            "citation_source": "In addition, English still dominates the language of trade and industry in the country.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "climat",
        "cles": [
          "climat",
          "meteo",
          "temperature",
          "chaleur",
          "equateur",
          "equatorial",
          "tropical",
          "relief",
          "montagnes",
          "altitude"
        ],
        "reponse": "Je suis tout entiere dans la zone equatoriale. Sur l'ensemble de mon territoire, la temperature moyenne journaliere varie entre 21 et 32 degres : c'est une fourchette, pas une temperature de tous les jours, alors ne me prenez pas au mot pour votre valise. Cote relief, les chaines de montagnes du Sarawak depassent 1 500 metres, et le mont Kinabalu monte a 4 095 metres. Je ne vous donne pas mes pluies en millimetres : aucune page que j'ai ouverte ne les affichait.",
        "ouvre": [
          "kinabalu"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Malaysia Biodiversity Information System (MyBIS), Geographical, Malaysia",
            "url": "https://www.mybis.gov.my/art/143",
            "consulte": "2026-09-21",
            "citation_source": "Malaysia lies entirely in the equatorial zone with an average daily temperature varying from 21°C to 32°C throughout Malaysia.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Malaysia Biodiversity Information System (MyBIS), Geographical, Malaysia",
            "url": "https://www.mybis.gov.my/art/143",
            "consulte": "2026-09-21",
            "citation_source": "the iconic Mt. Kinabalu stands at 4,095 m while Sarawak's mountain ranges rise to over 1,500 m.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "kinabalu",
        "cles": [
          "kinabalu",
          "mont kinabalu",
          "montagne",
          "sommet",
          "unesco",
          "patrimoine",
          "parc",
          "foret",
          "forets",
          "plantes",
          "orchidees",
          "oiseaux",
          "biodiversite",
          "nature"
        ],
        "reponse": "Mon parc du Kinabalu se trouve dans l'Etat de Sabah, a la pointe nord de l'ile de Borneo, et il est domine par le mont Kinabalu, 4 095 metres. L'UICN, qui suit le site pour le Patrimoine mondial, le decrit comme la plus haute montagne entre l'Himalaya et la Nouvelle-Guinee. Le parc est inscrit au Patrimoine mondial depuis 2000. On y estime entre 5 000 et 6 000 especes de plantes vasculaires, avec des representants de plus de la moitie des familles de plantes a fleurs, avec 1 000 especes d'orchidees, 78 especes de figuiers et plus de 600 especes de fougeres. Cote faune, on y compte 90 especes de mammiferes de plaine, 22 especes de mammiferes en zone de montagne et 326 especes d'oiseaux.",
        "ouvre": [
          "orang-outan"
        ],
        "requiert": [
          "climat"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "IUCN World Heritage Outlook, Kinabalu Park, assessment 2025",
            "url": "https://worldheritageoutlook.iucn.org/node/1102",
            "consulte": "2026-09-21",
            "citation_source": "Kinabalu Park, in the State of Sabah on the northern end of the island of Borneo, is dominated by Mount Kinabalu (4,095 m), the highest mountain between the Himalayas and New Guinea.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "IUCN World Heritage Outlook, Kinabalu Park, assessment 2025",
            "url": "https://worldheritageoutlook.iucn.org/node/1102",
            "consulte": "2026-09-21",
            "citation_source": "Inscribed in 2000",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "IUCN World Heritage Outlook, Kinabalu Park, assessment 2025",
            "url": "https://worldheritageoutlook.iucn.org/node/1102",
            "consulte": "2026-09-21",
            "citation_source": "It contains an estimated 5,000-6,000 vascular plant species including representatives from more than half the families of all flowering plants.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "IUCN World Heritage Outlook, Kinabalu Park, assessment 2025",
            "url": "https://worldheritageoutlook.iucn.org/node/1102",
            "consulte": "2026-09-21",
            "citation_source": "The presence of 1,000 orchid species, 78 species of Ficus, and more than 600 species of ferns are indicative of the property's botanical richness.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "IUCN World Heritage Outlook, Kinabalu Park, assessment 2025",
            "url": "https://worldheritageoutlook.iucn.org/node/1102",
            "consulte": "2026-09-21",
            "citation_source": "Faunal diversity is also high and the majority of Borneo's mammals, birds, amphibians and invertebrates (many threatened and vulnerable) are present, including 90 species of lowland mammal, 22 mammal species in the montane zone and 326 bird species (World Heritage Committee, 2013).",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "orang-outan",
        "cles": [
          "orang-outan",
          "orang outan",
          "orangutan",
          "singe",
          "singes",
          "animaux",
          "faune",
          "pongo",
          "menace",
          "danger",
          "extinction",
          "uicn",
          "iucn"
        ],
        "reponse": "L'orang-outan de Borneo vit sur l'ile que je partage avec mes voisins, et une etude publiee en 2017 dans Scientific Reports le donne classe en danger critique d'extinction sur la Liste rouge de l'UICN. Cette etude, qui porte sur l'ensemble de Borneo et pas seulement sur ma partie, estime que ses populations ont recule de 25 % sur les dix annees precedentes. En moyenne sur l'ile, la densite est passee d'environ 15 individus pour 100 km2 en 1997 a 2002 a 10 individus pour 100 km2 en 2009 a 2015. Les auteurs observent une survie plus faible la ou la foret environnante a ete recemment convertie en agriculture industrielle. Je vous donne l'association telle qu'ils l'ecrivent, sans en faire une explication complete.",
        "ouvre": [],
        "requiert": [
          "kinabalu"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Santika T. et al., First integrative trend analysis for a great ape species in Borneo, Scientific Reports 7:4839, 2017",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5501861/",
            "consulte": "2026-09-21",
            "citation_source": "currently classified as Critically Endangered according to the IUCN Red List",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Santika T. et al., First integrative trend analysis for a great ape species in Borneo, Scientific Reports 7:4839, 2017",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5501861/",
            "consulte": "2026-09-21",
            "citation_source": "Bornean orangutan populations have declined at a rate of 25% over the last 10 years",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Santika T. et al., First integrative trend analysis for a great ape species in Borneo, Scientific Reports 7:4839, 2017",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5501861/",
            "consulte": "2026-09-21",
            "citation_source": "the overall density of orangutans over Borneo in the period 1997-2002 was about 15 individuals per 100 km2, but the density was reduced to 10 individuals per 100 km2 in 2009-2015",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Santika T. et al., First integrative trend analysis for a great ape species in Borneo, Scientific Reports 7:4839, 2017",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5501861/",
            "consulte": "2026-09-21",
            "citation_source": "Survival rates are further positively associated with forest extent, but are lower in areas where surrounding forest has been recently converted to industrial agriculture.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "fruits",
        "cles": [
          "fruits",
          "fruit",
          "durian",
          "mangoustan",
          "mangosteen",
          "nourriture",
          "manger",
          "cuisine",
          "verger",
          "dusun",
          "roi des fruits"
        ],
        "reponse": "Chez moi, le durian a un titre : on le reconnait comme le roi des fruits. Une revue publiee en 2018 le decrit comme une plante cultivee en Malaisie et dans les pays d'Asie du Sud-Est, connue pour sa richesse en composes soufres volatils, et son genome compterait environ 46 000 genes. Le mangoustan, lui, garde une origine discutee : une revue de 2023 note que des travaux recents designent une variete, malaccensis, comme son ancetre, sans trancher. Ces memes auteurs empruntent un mot a ma langue, dusun, qui designe ici les vergers de subsistance. Je ne vous dis pas que le mangoustan est ne chez moi : aucune page que j'ai ouverte ne l'ecrit.",
        "ouvre": [],
        "requiert": [
          "langue"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Husin N.A., Rahman S., Karunakaran R., Bhore S.J., A review on the nutritional, medicinal, molecular and genome attributes of Durian (Durio zibethinus L.), the King of fruits in Malaysia, Bioinformation, 2018",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=PMCID:PMC6137565&resultType=core&format=json",
            "consulte": "2026-09-21",
            "citation_source": "Durian (Durio zibethinus L.; Family Bombacaceae) is an iconic tropical fruit plant cultivated in Malaysia and the Southeast Asian countries. In Malaysia, durian is recognised as the King of fruits and well known as a rich source of volatile sulphur compounds that make it unique.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Husin N.A., Rahman S., Karunakaran R., Bhore S.J., A review on the nutritional, medicinal, molecular and genome attributes of Durian (Durio zibethinus L.), the King of fruits in Malaysia, Bioinformation, 2018",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=PMCID:PMC6137565&resultType=core&format=json",
            "consulte": "2026-09-21",
            "citation_source": "Its genome contains about 46,000 genes which is almost double that of humans (Homo sapiens).",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Yao T.L., Nazre M., McKey D., Jalonen R., Duminil J., The origin of cultivated mangosteen (Garcinia mangostana L. var. mangostana): Critical assessments and an evolutionary-ecological perspective, Ecology and Evolution, 2023",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1002/ece3.9792&resultType=core&format=json",
            "consulte": "2026-09-21",
            "citation_source": "Its origin remains contentious, although recent findings suggest G. mangostana L. var. malaccensis (Hook. f.) Nazre (synonym: G. malaccensis Hook. f.) as the sole progenitor.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Yao T.L., Nazre M., McKey D., Jalonen R., Duminil J., The origin of cultivated mangosteen (Garcinia mangostana L. var. mangostana): Critical assessments and an evolutionary-ecological perspective, Ecology and Evolution, 2023",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1002/ece3.9792&resultType=core&format=json",
            "consulte": "2026-09-21",
            "citation_source": "Dusun (Malay) refers to subsistence orchards in this context.",
            "ancrage": "global"
          }
        ]
      }
    ],
    "pagesOuvertes": [
      "https://www.dosm.gov.my/portal-main/release-content/current-population-estimates-2026",
      "https://www.mybis.gov.my/art/143",
      "https://www.malaysia.gov.my/en/government/learn-about-malaysia/official-language",
      "https://worldheritageoutlook.iucn.org/node/1102",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC5501861/",
      "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=PMCID:PMC6137565&resultType=core&format=json",
      "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1002/ece3.9792&resultType=core&format=json",
      "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=mangosteen%20Garcinia%20mangostana%20Malaysia%20native&resultType=core&format=json&pageSize=5"
    ],
    "faitsEcartes": [
      "La fiche UNESCO du parc du Kinabalu (whc.unesco.org/en/list/1012) a renvoye une erreur 403 : la superficie du parc, souvent donnee autour de 754 km2, n'apparait pas sur la page UICN ouverte. Non ecrite.",
      "La fiche Liste rouge de l'orang-outan de Borneo (iucnredlist.org) a renvoye une erreur 403. Le statut est cite via l'article Santika et al. 2017, avec sa date, et non comme statut actuel verifie a la source.",
      "Les chiffres de population d'orang-outans (environ 104 700 en 2016, baisse de 60 % depuis 1950, 86 % projetes) : vus seulement dans des resultats de recherche ou la presse, aucune page de rang A ouverte ne les portait. Non ecrits.",
      "La superficie forestiere de la Malaisie selon la FAO (FRA 2020) : le rapport pays a renvoye une erreur 403. Non ecrite.",
      "La distance d'environ 540 km de mer de Chine meridionale entre la peninsule et Borneo : vue seulement dans un resume de recherche, aucune page officielle ouverte ne l'affichait. Non ecrite.",
      "Le mont Kinabalu 'plus haut sommet de Malaisie et d'Asie du Sud-Est' : formule vue hors source citable. Seule la formule litterale de l'UICN (entre l'Himalaya et la Nouvelle-Guinee) est gardee.",
      "Le mangoustan 'originaire de la peninsule malaise' : lu dans un resume de recherche, non confirme sur une page ouverte (la revue Yao 2023 laisse l'origine discutee, un autre abstract Europe PMC dit Inde, Sri Lanka et Asie du Sud-Est). Non ecrit.",
      "Les chiffres de production de durian et les varietes D24, D99, D145 : l'article PMC6137565 n'a pas pu etre ouvert en texte integral (captcha), seul l'abstract via Europe PMC l'a ete, et il ne les porte pas. Non ecrits.",
      "La population de 29,7 millions affichee par MyBIS : la page ne donne pas clairement l'annee de l'estimation. Non ecrite, les chiffres DOSM 2026 sont utilises.",
      "La repartition de la population par Etat (Sabah, Sarawak, Selangor) : les tableaux DOSM ne s'affichaient pas dans le texte de la page. Non ecrite.",
      "La comparaison du genome du durian avec celui de l'humain ('presque le double') : presente dans la source mais ecartee de la reponse pour ne pas ajouter de comparaison hors sujet ; seul le total d'environ 46 000 genes est garde.",
      "Controle : 'representant plus de la moitie des familles de plantes a fleurs' (Kinabalu) deformait l'UICN, qui parle d'especes 'including representatives from more than half the families'. Reformule au plus pres de la source.",
      "Controle : 'une variete sauvage, malaccensis' (mangoustan) : l'abstract Yao 2023 ne qualifie pas var. malaccensis de sauvage. Le mot 'sauvage' est coupe."
    ],
    "espece": "Pays d'Asie du Sud-Est, entre peninsule et Borneo",
    "taille": 1
  },
  {
    "id": "indonesie",
    "iso3": "IDN",
    "mode": "documentaire",
    "type": "pays",
    "nom": "L'Indonésie",
    "couleur": "#5A1A10",
    "accent": "#F2C14E",
    "accroche": "Au recompte de 2024, j'avais 17 380 îles, et le chiffre avait bougé depuis l'année d'avant.",
    "ouverture": "Je suis un archipel qui se recompte : mon registre officiel des îles change d'une année sur l'autre. Demandez-moi mes îles, ma langue, mes volcans, ma mer, mes dragons ou mes poulpes. Je réponds avec ce que mes agences, les organismes internationaux et les chercheurs ont écrit, et je vous dis quand une page ne s'est pas ouverte.",
    "ton": "Un archipel qui compte avant de parler. Chaleureux mais précis, il donne ses chiffres avec leur date et leur auteur, et préfère un instantané honnête à un portrait flatteur. Il renvoie volontiers vers ses habitants quand ils savent mieux que lui.",
    "sujets": [
      {
        "id": "identite",
        "cles": [
          "indonesie",
          "identite",
          "pays",
          "presente toi",
          "qui es-tu",
          "archipel",
          "iles",
          "combien d'iles",
          "population",
          "habitants"
        ],
        "reponse": "Vous me demandez qui je suis : un archipel. Mon agence d'information géospatiale a compté 17 380 îles en 2024, contre 17 374 en 2023, et elle signale 63 îles nouvelles, dans les îles Bangka Belitung, à Sulawesi du Sud-Est, dans les Moluques du Nord et au Kalimantan occidental. Pour entrer dans ce compte, une île doit remplir quatre critères : avoir une terre, s'être formée naturellement et non par remblai, être entourée d'eau douce ou salée, et rester hors de l'eau à la marée la plus haute. Sur toutes ces îles, la Banque mondiale compte 285 721 236 habitants en 2025.",
        "ouvre": [
          "langue",
          "volcans",
          "mer"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Badan Informasi Geospasial (BIG), SIPULAU, Pulau Indonesia Bertambah Jadi 17.380, 2024",
            "url": "https://sipulau.big.go.id/news/11",
            "consulte": "2026-09-21",
            "citation_source": "Berdasarkan penelahaan yang dilakukan Badan Informasi Geospasial (BIG) bersama kementerian dan lembaga terkait, jumlah pulau di Indonesia pada 2024 sebanyak 17.380 pulau.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Badan Informasi Geospasial (BIG), SIPULAU, Pulau Indonesia Bertambah Jadi 17.380, 2024",
            "url": "https://sipulau.big.go.id/news/11",
            "consulte": "2026-09-21",
            "citation_source": "Jika dibandingkan dengan 2023, ada perubahan jumlah dari yang sebelumnya 17.374 pulau. Tercatat ada penambahan 63 pulau baru yang tersebar di Kepulauan Bangka Belitung, Sulawesi Tenggara, Maluku Utara, dan Kalimantan Barat.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Badan Informasi Geospasial (BIG), SIPULAU, Pulau Indonesia Bertambah Jadi 17.380, 2024",
            "url": "https://sipulau.big.go.id/news/11",
            "consulte": "2026-09-21",
            "citation_source": "Ada empat kriteria utama untuk mendefinisikan sebuah pulau, yaitu memiliki area daratan; terbentuk secara alami, bukan hasil reklamasi; dikelilingi oleh air, baik air tawar maupun asin; serta selalu berada di atas permukaan saat pasang tertinggi.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Banque mondiale, World Development Indicators, Population, total (SP.POP.TOTL), Indonesia, 2025",
            "url": "https://api.worldbank.org/v2/country/IDN/indicator/SP.POP.TOTL?format=json&date=2022:2025",
            "consulte": "2026-09-21",
            "citation_source": "Population, total ... Indonesia ... date: 2025, value: 285721236",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "langue",
        "cles": [
          "langue",
          "langues",
          "indonesien",
          "bahasa",
          "bahasa indonesia",
          "parler",
          "dialecte",
          "langues regionales"
        ],
        "reponse": "Je parle d'abord indonésien : ma loi le définit comme la langue officielle nationale, utilisée sur tout mon territoire. Sous cette langue commune, mon ministère de l'éducation compte 718 langues régionales, et il écrit que cela fait de moi l'un des pays les plus riches en langues du monde. Il écrit aussi que la plupart de ces langues régionales sont aujourd'hui menacées de disparaître, à cause des changements sociaux, des migrations et du manque de documentation. Le chef de mon agence de la langue dit que 120 d'entre elles ont été revitalisées.",
        "ouvre": [],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Kementerian Keuangan, JDIH, Kamus hukum : Bahasa Negara Kesatuan Republik Indonesia (UU 24 Tahun 2009, PP 57 Tahun 2014, PP 39 Tahun 2018)",
            "url": "https://jdih.kemenkeu.go.id/kamus-hukum/bahasa-negara-kesatuan-republik-indonesia?id=081c244fecade9313003aba6e467c369",
            "consulte": "2026-09-21",
            "citation_source": "Bahasa Negara Kesatuan Republik Indonesia yang selanjutnya disebut Bahasa Indonesia adalah bahasa resmi nasional yang digunakan di seluruh wilayah Negara Kesatuan Republik Indonesia.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Kementerian Pendidikan Dasar dan Menengah, Menjawab Tantangan Pelestarian Bahasa Daerah, Badan Bahasa Gelar Kuliah Umum Kebahasaan, 2025",
            "url": "https://kemendikdasmen.go.id/berita/13840-menjawab-tantangan-pelestarian-bahasa-daerah-badan-bahasa-gelar-kuliah-umum-kebahasaan",
            "consulte": "2026-09-21",
            "citation_source": "Dengan 718 bahasa daerah, Indonesia menjadi salah satu negara terkaya bahasa di dunia",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Kementerian Pendidikan Dasar dan Menengah, Menjawab Tantangan Pelestarian Bahasa Daerah, Badan Bahasa Gelar Kuliah Umum Kebahasaan, 2025",
            "url": "https://kemendikdasmen.go.id/berita/13840-menjawab-tantangan-pelestarian-bahasa-daerah-badan-bahasa-gelar-kuliah-umum-kebahasaan",
            "consulte": "2026-09-21",
            "citation_source": "sebagian besar bahasa daerah kini terancam punah akibat perubahan sosial, migrasi, dan minimnya dokumentasi",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Kementerian Pendidikan Dasar dan Menengah, Menjawab Tantangan Pelestarian Bahasa Daerah, Badan Bahasa Gelar Kuliah Umum Kebahasaan, 2025",
            "url": "https://kemendikdasmen.go.id/berita/13840-menjawab-tantangan-pelestarian-bahasa-daerah-badan-bahasa-gelar-kuliah-umum-kebahasaan",
            "consulte": "2026-09-21",
            "citation_source": "sejumlah 120 bahasa daerah telah berhasil direvitalisasi",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "volcans",
        "cles": [
          "volcans",
          "volcan",
          "eruption",
          "gunung",
          "merapi",
          "semeru",
          "krakatau",
          "geologie",
          "alerte"
        ],
        "reponse": "Mes volcans sont surveillés et classés par niveau d'alerte, et je vous donne ce que montrait la page de mon service de volcanologie le jour où on l'a ouverte. Aucun n'était au niveau IV, Awas. Quatre étaient au niveau III, Siaga : Anak Krakatau, Merapi, Semeru et Sinabung. Vingt-trois étaient au niveau II, Waspada, parmi lesquels Bromo, Rinjani et Tambora, et 42 au niveau I, Normal, dont Agung et Batur. La page ne porte pas de date : prenez ces niveaux comme un instantané, pas comme un bilan.",
        "ouvre": [
          "komodo"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "MAGMA Indonesia, Kementerian Energi dan Sumber Daya Mineral (PVMBG), tableau des niveaux d'activité des volcans",
            "url": "https://magma.esdm.go.id/",
            "consulte": "2026-09-21",
            "citation_source": "Tidak ada gunung api berstatus Level IV - (Awas)",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "MAGMA Indonesia, Kementerian Energi dan Sumber Daya Mineral (PVMBG), tableau des niveaux d'activité des volcans",
            "url": "https://magma.esdm.go.id/",
            "consulte": "2026-09-21",
            "citation_source": "Berjumlah 4 Gunung Api, yaitu Gunung Anak Krakatau - Lampung, Merapi - Daerah Istimewa Yogyakarta dan Jawa Tengah, Semeru - Jawa Timur, Sinabung - Sumatera Utara",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "MAGMA Indonesia, Kementerian Energi dan Sumber Daya Mineral (PVMBG), tableau des niveaux d'activité des volcans",
            "url": "https://magma.esdm.go.id/",
            "consulte": "2026-09-21",
            "citation_source": "Level II - (Waspada): Berjumlah 23 Gunung Api, yaitu Gunung Anak Ranakah, Awu, Banda Api, Bromo, Bur Ni Telong, Dempo, Dukono, Gamalama, Ibu, Ili Lewotolok, Iya, Karangetang, Kerinci, Lewotobi Laki-laki, Lokon, Marapi, Raung, Rinjani, Sangeangapi, Slamet, Soputan, Sorikmarapi, Tambora. Level I - (Normal): Berjumlah 42 Gunung Api",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "komodo",
        "cles": [
          "komodo",
          "dragon",
          "dragon de komodo",
          "varan",
          "reptile",
          "animaux",
          "faune",
          "unesco",
          "parc national",
          "flores"
        ],
        "reponse": "Mes dragons, vous les trouverez dans le parc national de Komodo, inscrit au patrimoine mondial en 1991, sur des îles volcaniques. Ils n'existent nulle part ailleurs dans le monde : on les compte sur les îles de Komodo, Rinca, Gili Motang, Padar et Nusa Kode, et sur des côtes de l'ouest et du nord de Florès. L'UNESCO range le varan de Komodo parmi les plus grands reptiles du monde : il peut dépasser 3,6 mètres et 90 kilos. En 2021, il a été classé En danger sur la Liste rouge de l'UICN : moins de 1 400 adultes, en huit sous-populations, et des modèles climatiques qui suggèrent un déclin sur 40 ans à partir de 2010 pouvant dépasser 30 %.",
        "ouvre": [],
        "requiert": [
          "volcans"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "IUCN World Heritage Outlook, Komodo National Park, évaluation 2025",
            "url": "https://worldheritageoutlook.iucn.org/node/1051",
            "consulte": "2026-09-21",
            "citation_source": "Komodo National Park was inscribed in 1991.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "IUCN World Heritage Outlook, Komodo National Park, évaluation 2025",
            "url": "https://worldheritageoutlook.iucn.org/node/1051",
            "consulte": "2026-09-21",
            "citation_source": "These volcanic islands are inhabited by a population of around 5,700 giant lizards, whose appearance and aggressive behaviour have led to them being called 'Komodo dragons'. They exist nowhere else in the world and are of great interest to scientists studying the theory of evolution.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "IUCN World Heritage Outlook, Komodo National Park, évaluation 2025",
            "url": "https://worldheritageoutlook.iucn.org/node/1051",
            "consulte": "2026-09-21",
            "citation_source": "The population is distributed across the islands of Komodo, Rinca, Gili Motang, Padar, Nusa Kode and some coastal regions of western and northern Flores.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "IUCN World Heritage Outlook, Komodo National Park, évaluation 2025",
            "url": "https://worldheritageoutlook.iucn.org/node/1051",
            "consulte": "2026-09-21",
            "citation_source": "In 2021, the Komodo dragon was listed as Endangered on the IUCN Red List of Threatened Species on the basis that it occurs in eight subpopulations, with a total adult population estimated to contain fewer than 1,400 individuals, no individual subpopulation contains more than 500 individuals, and climate modelling suggests a rate of decline over 40 years from 2010 which may exceed 30%",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "UNESCO, Programme sur l'homme et la biosphère (MAB), Komodo Biosphere Reserve",
            "url": "https://www.unesco.org/en/mab/komodo",
            "consulte": "2026-09-21",
            "citation_source": "The Komodo dragon (Varanus komodoensis) is among the world's largest reptiles. It can reach more than 3.6 metres in length and weigh more than 90 kg.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "mer",
        "cles": [
          "la mer",
          "ocean",
          "corail",
          "coraux",
          "triangle de corail",
          "recif",
          "poissons",
          "plongee",
          "nature"
        ],
        "reponse": "Autour de mes îles, je fais partie du Triangle de corail, que je partage avec la Malaisie, la Papouasie-Nouvelle-Guinée, les Philippines, les îles Salomon et le Timor oriental. En 2009, mon président Yudhoyono a inspiré les autres dirigeants de la région pour lancer une initiative commune sur les récifs, la pêche et la sécurité alimentaire. En 2010, le Fonds pour l'environnement mondial y comptait 3 000 espèces de poissons, et 120 millions de personnes qui en dépendent pour vivre. Dans la réserve de biosphère de Komodo, l'UNESCO recense plus de 260 espèces de coraux constructeurs de récifs, 70 espèces d'éponges et plus de 1 000 espèces de poissons osseux.",
        "ouvre": [
          "sulawesi"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "CTI-CFF (Coral Triangle Initiative on Coral Reefs, Fisheries and Food Security), About",
            "url": "https://www.coraltriangleinitiative.org/about",
            "consulte": "2026-09-21",
            "citation_source": "Indonesia, Malaysia, Papua New Guinea, the Philippines, Solomon Islands, and Timor-Leste (the 'CT6') ... In 2009, Indonesian President Yudhoyono inspired other leaders in the region to launch the Coral Triangle Initiative",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Global Environment Facility (GEF), Coral Triangle Initiative on Coral Reefs, Fisheries and Food Security, 2010",
            "url": "https://www.thegef.org/newsroom/news/coral-triangle-initiative-coral-reefs-cti-fisheries-and-food-security",
            "consulte": "2026-09-21",
            "citation_source": "the richest concentration of marine biodiversity: the highest numbers of coral, crustacean, mollusk, and marine plant species; and 3,000 species of fish ... Vital to livelihood of 120 million people, the Coral Triangle is not only a source of food",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "UNESCO, Programme sur l'homme et la biosphère (MAB), Komodo Biosphere Reserve",
            "url": "https://www.unesco.org/en/mab/komodo",
            "consulte": "2026-09-21",
            "citation_source": "Komodo has one of the world's richest marine environments. It includes more than 260 species of reef-building coral, 70 species of sponge ... more than 1,000 species of bony fishes.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "sulawesi",
        "cles": [
          "sulawesi",
          "lembeh",
          "detroit de lembeh",
          "poulpe",
          "pieuvre",
          "poulpe mimetique",
          "ondine",
          "wunderpus",
          "bali"
        ],
        "reponse": "Sur mes fonds de sable vit une pieuvre que la science ne connaissait pas encore en 2001 : des chercheurs l'ont filmée en plongée chez moi, à Sulawesi et à Bali, et l'ont appelée le poulpe mimétique. Elle sort en plein jour pour chercher sa nourriture sur le sable, sous les yeux des poissons prédateurs, et prend des postures dont plusieurs imitent des animaux venimeux qui vivent au même endroit. Au nord de Sulawesi, le détroit de Lembeh est une destination de plongée sur fonds de sédiments meubles, qu'on appelle muck, et les photographes y recherchent un autre poulpe, le wunderpus. Pour le poulpe mimétique lui-même, demandez à Ondine.",
        "ouvre": [],
        "requiert": [
          "mer"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Norman M. D., Finn J., Tregenza T., Dynamic mimicry in an Indo-Malayan octopus, Proceedings of the Royal Society B 268(1478):1755-1758, 2001",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC1088805/",
            "consulte": "2026-09-21",
            "citation_source": "During research dives in Indonesia (Sulawesi and Bali), we filmed a distinctive long-armed octopus, which is new to science. Diving over 24 h periods revealed that the 'mimic octopus' emerges during daylight hours to forage on sand substrates in full view of pelagic fish predators. We observed nine individuals of this species displaying a repertoire of postures and body patterns, several of which are clearly impersonations of venomous animals co-occurring in this habitat.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Huffard C. L. et al., Individually Unique Body Color Patterns in Octopus (Wunderpus photogenicus) Allow for Photoidentification, PLoS ONE 3(11):e3732, 2008",
            "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0003732",
            "consulte": "2026-09-21",
            "citation_source": "In the Lembeh Strait, Indonesia, a well-established tourist destination for tropical soft-sediment (\"muck\") diving, W. photogenicus is now among the two animals most sought-after by underwater photographers (B. M., personal observation).",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Huffard C. L. et al., Individually Unique Body Color Patterns in Octopus (Wunderpus photogenicus) Allow for Photoidentification, PLoS ONE 3(11):e3732, 2008",
            "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0003732",
            "consulte": "2026-09-21",
            "citation_source": "Black Sand Dive Retreat, Kasawari, Lembeh Strait, North Sulawesi, Indonesia",
            "ancrage": "global"
          }
        ]
      }
    ],
    "pagesOuvertes": [
      "https://sipulau.big.go.id/news/11",
      "https://api.worldbank.org/v2/country/IDN/indicator/SP.POP.TOTL?format=json&date=2022:2025",
      "https://jdih.kemenkeu.go.id/kamus-hukum/bahasa-negara-kesatuan-republik-indonesia?id=081c244fecade9313003aba6e467c369",
      "https://kemendikdasmen.go.id/berita/13840-menjawab-tantangan-pelestarian-bahasa-daerah-badan-bahasa-gelar-kuliah-umum-kebahasaan",
      "https://magma.esdm.go.id/",
      "https://worldheritageoutlook.iucn.org/node/1051",
      "https://www.unesco.org/en/mab/komodo",
      "https://www.coraltriangleinitiative.org/about",
      "https://www.coraltriangleinitiative.org/country/indonesia",
      "https://icriforum.org/members/coral-triangle-initiative-for-coral-reefs-fisheries-and-food-security-cti-cff/",
      "https://www.thegef.org/newsroom/news/coral-triangle-initiative-coral-reefs-cti-fisheries-and-food-security",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC1088805/",
      "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0003732",
      "https://academic.oup.com/biolinnean/article-abstract/93/1/23/2701347"
    ],
    "faitsEcartes": [
      "La population selon BPS (Badan Pusat Statistik), demandée en priorité : toutes les pages bps.go.id ouvertes (population en milieu d'année, jumlah penduduk, tableau des îles par province) ont renvoyé une erreur 403. Le chiffre retenu est celui de la Banque mondiale, pas celui de BPS.",
      "Le nombre d'îles selon BPS (17 001, souvent cité pour 2023) : page BPS en erreur 403, et ce total ne suit pas la même définition que celui de l'agence géospatiale BIG. Seul le compte BIG de 2024 est écrit.",
      "Le lien direct entre le poulpe mimétique et le détroit de Lembeh : l'abrégé de Norman et al. 2001 dit seulement Sulawesi et Bali, et l'abrégé ouvert de Hanlon et al. 2008 (North Sulawesi) ne nomme pas Lembeh. Les pages qui l'affirment sont des blogs et des sites de clubs de plongée. Lembeh n'est donc cité que pour le wunderpus.",
      "Le chiffre de 127 volcans actifs attribué au PVMBG : trouvé seulement dans la presse, jamais sur une page officielle ouverte. La page MAGMA ne donne que des comptes par niveau d'alerte, sans total ni date, et aucun total n'est calculé à sa place.",
      "Les 76 % des espèces de coraux connues attribués au Triangle de corail : absents des pages CTI-CFF et ICRI réellement ouvertes. Non écrit. La superficie de 1,6 milliard d'acres de la page GEF n'est pas reprise non plus.",
      "Les environ 5 700 dragons de la description UNESCO : chiffre ancien, total non daté, que la même page place à côté du compte récent de moins de 1 400 adultes. Les deux mesures ne portent pas sur la même chose, le chiffre de 5 700 n'est pas écrit.",
      "La fiche UNESCO du patrimoine mondial (whc.unesco.org/en/list/609) et l'évaluation Liste rouge de l'UICN (iucnredlist.org) ont renvoyé une erreur 403 : l'inscription de 1991 et le classement En danger viennent de l'IUCN World Heritage Outlook.",
      "L'article 36 de la Constitution de 1945 (Bahasa Negara ialah Bahasa Indonesia) : le PDF du BPHN a renvoyé une erreur 403. La langue est sourcée par la définition légale de la loi 24 de 2009 sur le portail JDIH du ministère des Finances.",
      "La phrase de la GEF sur 3 000 espèces de poissons, deux fois plus que toute autre région : le comparatif n'est pas repris, seul le nombre l'est.",
      "Contrôle du 21/09/2026, accroche : « au dernier recompte » remplacé par « au recompte de 2024 ». La page BIG date de décembre 2024 et rien n'établit qu'aucun recompte plus récent n'existe.",
      "Contrôle du 21/09/2026, langue : le chiffre de 718 langues et la phrase sur leur menace sont écrits par l'article du ministère, pas attribués à l'agence de la langue (Badan Bahasa). Les 120 langues revitalisées sont une déclaration de son chef, Hafidz Muksin, qui en crédite le gouvernement, pas l'agence seule. Attributions corrigées.",
      "Contrôle du 21/09/2026, mer : les 260 coraux, 70 éponges et 1 000 poissons osseux viennent de la page UNESCO de la réserve de biosphère de Komodo, pas du parc national. « Parc » remplacé par « réserve de biosphère »."
    ],
    "espece": "Archipel du Triangle de corail",
    "taille": 1
  },
  {
    "id": "danemark",
    "iso3": "DNK",
    "mode": "documentaire",
    "type": "pays",
    "nom": "Le Danemark",
    "couleur": "#7A1420",
    "accent": "#F2E6D0",
    "accroche": "Je suis plat, mouille sur 8 750 km de cote, et je compte mes habitants au mois pres.",
    "ouverture": "Je suis une peninsule et des centaines d'iles, et mon sommet s'arrete a 170,86 metres. On me traverse du nord au sud en moins de 550 km. Demandez-moi ma geographie, ma mer des Wadden, mon vent, ma langue, mes forets ou mon royaume. Je reponds avec les chiffres que mes administrations publient, et je dis quand une page ne m'a rien donne.",
    "ton": "Plat, net et venteux. Parle comme un fonctionnaire qui aime ses tableaux et qui refuse d'arrondir pour faire joli. Humour sec, phrases courtes, aucune carte postale.",
    "sujets": [
      {
        "id": "identite",
        "cles": [
          "danemark",
          "identite",
          "pays",
          "presente",
          "population",
          "habitants",
          "centenaires",
          "combien",
          "danois",
          "statistique"
        ],
        "reponse": "Je suis le Danemark, et je me presente d'abord par un compte. En aout 2026, mon institut statistique enregistrait 6 032 304 habitants, en ne comptant que les personnes qui ont une adresse officiellement declaree chez moi. Parmi eux, 1 210 avaient 100 ans ou plus. La source principale de ce total est mon registre civil, le CPR. Si vous voulez savoir ou vivent ces gens, demandez-moi ma geographie.",
        "ouvre": [
          "geographie",
          "langue"
        ],
        "requiert": [],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Danmarks Statistik (Statistics Denmark), Population figures, 2026",
            "url": "https://www.dst.dk/en/Statistik/emner/borgere/befolkning/befolkningstal",
            "consulte": "2026-09-21",
            "citation_source": "Population in Denmark 6,032,304 August 2026",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Danmarks Statistik (Statistics Denmark), Population figures, 2026",
            "url": "https://www.dst.dk/en/Statistik/emner/borgere/befolkning/befolkningstal",
            "consulte": "2026-09-21",
            "citation_source": "Number of people aged 100 years and more 1,210 August 2026",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Danmarks Statistik (Statistics Denmark), Population figures, 2026",
            "url": "https://www.dst.dk/en/Statistik/emner/borgere/befolkning/befolkningstal",
            "consulte": "2026-09-21",
            "citation_source": "The population statistics include people who have an officially registered address in Denmark. [...] The primary source of the statistics is the Civil Registration System (CPR).",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "geographie",
        "cles": [
          "geographie",
          "jutland",
          "peninsule",
          "iles",
          "cote",
          "littoral",
          "superficie",
          "relief",
          "montagne",
          "sommet",
          "mollehoj",
          "skagen"
        ],
        "reponse": "Je tiens sur 42 952 km2, et le Jutland, avec le Vendsyssel-Thy, en represente 70 %. J'ai aussi mes iles : 407 selon une page de mon ministere des Affaires etrangeres, 400 selon une autre du meme ministere, et je vous laisse les deux chiffres plutot que d'en choisir un. Ma cote mesure 8 750 km, ce que mon ministere juge extraordinairement long pour un pays de ma taille. Mon point culminant, Mollehoj, s'arrete a 170,86 metres, et de Skagen au nord a Gedser au sud il y a moins de 550 km.",
        "ouvre": [
          "wadden",
          "forets"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Udenrigsministeriet (Ministry of Foreign Affairs of Denmark), Country facts",
            "url": "https://um.dk/bulgarien/en/about-denmark/country-facts/",
            "consulte": "2026-09-21",
            "citation_source": "Total: 42.952 sq km [...] Jutland (including Vendsyssel-Thy) account for 70 per cent of Denmark's total area. [...] One characteristic of Denmark's geography is the many islands, a total of 407. [...] Coast line: 8.750 km.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Udenrigsministeriet (Ministry of Foreign Affairs of Denmark), Country facts",
            "url": "https://um.dk/bulgarien/en/about-denmark/country-facts/",
            "consulte": "2026-09-21",
            "citation_source": "Denmark's coastline is extraordinarily long for a country of this size",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "denmark.dk (Ministry of Foreign Affairs of Denmark), The Danish nature",
            "url": "https://denmark.dk/people-and-culture/nature/",
            "consulte": "2026-09-21",
            "citation_source": "Denmark occupies a relatively small geographical area, but has a 8,750 km coastline and 400 islands.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "denmark.dk (Ministry of Foreign Affairs of Denmark), The Danish nature",
            "url": "https://denmark.dk/people-and-culture/nature/",
            "consulte": "2026-09-21",
            "citation_source": "Møllehøj, the highest peak at 170.86 meters [...] From Denmark's northernmost town, Skagen, to the southernmost, Gedser, there are less than 550 km",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "wadden",
        "cles": [
          "wadden",
          "mer des wadden",
          "vadehavet",
          "unesco",
          "patrimoine",
          "maree",
          "vasiere",
          "oiseaux",
          "migration",
          "animaux"
        ],
        "reponse": "Dans le sud du Jutland, j'ai une part de la mer des Wadden, et mon ministere la decrit comme une partie du plus grand systeme continu de vasieres et de bancs de sable intertidaux au monde. Les parts allemande et neerlandaise sont au patrimoine mondial de l'UNESCO depuis 2009, la mienne depuis 2014. Le secretariat commun de la mer des Wadden compte presque un million d'oiseaux nicheurs au sol, de 31 especes, et jusqu'a 12 millions d'oiseaux qui passent par la zone sur une annee. Ce second chiffre est un total annuel de passages, pas le nombre d'oiseaux presents un jour donne.",
        "ouvre": [
          "energie"
        ],
        "requiert": [
          "geographie"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "denmark.dk (Ministry of Foreign Affairs of Denmark), The Danish nature",
            "url": "https://denmark.dk/people-and-culture/nature/",
            "consulte": "2026-09-21",
            "citation_source": "In the Wadden Sea of South Jutland (part of the largest unbroken system of intertidal sand and mud flats in the world), the tides are so significant",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Nationalpark Vadehavet, World Heritage: The Wadden Sea",
            "url": "https://eng.nationalparkvadehavet.dk/about-us/world-heritage-the-wadden-sea",
            "consulte": "2026-09-21",
            "citation_source": "The Danish part of the Wadden Sea established as Wadden Sea World Heritage Site in 2014. [...] The German and Dutch part have been UNESCO World Heritage Sites since 2009.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Common Wadden Sea Secretariat, Breeding and migratory birds",
            "url": "https://www.waddensea-worldheritage.org/breeding-and-migratory-birds",
            "consulte": "2026-09-21",
            "citation_source": "Almost one million ground-breeding birds belonging to 31 species use the site. [...] Therefore, the annual total number of birds using the area (up to 12 million) is much higher than the total numbers present at any one time.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "energie",
        "cles": [
          "energie",
          "eolien",
          "eoliennes",
          "vent",
          "electricite",
          "offshore",
          "vindeby",
          "renouvelable",
          "courant",
          "economie"
        ],
        "reponse": "Mon agence de l'energie recense 17 parcs eoliens en mer etablis chez moi, pour une capacite totale de 2 627,7 MW. Elle rappelle aussi qu'en 1991, a Vindeby, on a installe le premier parc eolien en mer du monde, un site d'essai de 5 MW, demonte en 2017. Dans sa statistique provisoire, ma production eolienne de 2025 est 7,2 % plus basse qu'en 2024, alors que mon approvisionnement interieur en electricite a monte de 5,3 %. La part exacte du vent dans mon electricite, je ne vous la donne pas : je ne l'ai pas trouvee ecrite dans les pages de l'agence que j'ai ouvertes.",
        "ouvre": [],
        "requiert": [
          "wadden"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Energistyrelsen (Danish Energy Agency), Eksisterende havvindmølleparker",
            "url": "https://ens.dk/ansvarsomraader/vindmoeller-paa-hav/etablerede-havvindmoelleparker",
            "consulte": "2026-09-21",
            "citation_source": "Danmark har i øjeblikket 17 etablerede havvindmølleparker med en samlet kapacitet på 2627,7 MW.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Energistyrelsen (Danish Energy Agency), Eksisterende havvindmølleparker",
            "url": "https://ens.dk/ansvarsomraader/vindmoeller-paa-hav/etablerede-havvindmoelleparker",
            "consulte": "2026-09-21",
            "citation_source": "I 1991 etablerede det daværende Elkraft verdens første havmøllepark, der bestod af et 5 MW testanlæg ved Vindeby.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Energistyrelsen (Danish Energy Agency), Foreløbig Energistatistik 2025",
            "url": "https://ens.dk/media/8424/download",
            "consulte": "2026-09-21",
            "citation_source": "Den samlede vindkraftproduktion i 2025 var 7,2 pct. lavere end i 2024.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Energistyrelsen (Danish Energy Agency), Foreløbig Energistatistik 2025",
            "url": "https://ens.dk/media/8424/download",
            "consulte": "2026-09-21",
            "citation_source": "Elforbruget fortsætter med at stige og i 2025 lå den indenlandske forsyning med el således 5,3 pct. over forsyningen i 2024.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "langue",
        "cles": [
          "langue",
          "danois",
          "parler",
          "orthographe",
          "dictionnaire",
          "mots",
          "sprognaevn",
          "ecrire"
        ],
        "reponse": "Je parle danois, et mon orthographe a un gardien officiel. C'est le Dansk Sprognaevn, mon conseil de la langue, qui fixe la maniere d'ecrire le danois et qui redige et publie le dictionnaire orthographique officiel. On y trouve environ 66 000 mots, avec leur orthographe et leurs flexions. Je ne vous dis pas combien de mots le danois possede en tout : ce dictionnaire ne pretend pas les contenir tous.",
        "ouvre": [
          "royaume"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Dansk Sprognævn (Danish Language Council), Retskrivningen",
            "url": "https://dsn.dk/organisation-og-lovgivning/opgaver/retskrivningen/",
            "consulte": "2026-09-21",
            "citation_source": "Det er Sprognævnet der fastsætter den danske retskrivning og redigerer og udgiver den officielle danske retskrivningsordbog.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Dansk Sprognævn (Danish Language Council), Retskrivningen",
            "url": "https://dsn.dk/organisation-og-lovgivning/opgaver/retskrivningen/",
            "consulte": "2026-09-21",
            "citation_source": "I Retskrivningsordbogen kan man se hvordan ca. 66.000 ord staves og bøjes",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "forets",
        "cles": [
          "forets",
          "foret",
          "hetre",
          "hetres",
          "arbres",
          "nature",
          "agriculture",
          "rold skov",
          "tardigrade",
          "gouttiere",
          "especes"
        ],
        "reponse": "Mes forets couvrent 625 000 hectares, soit 14,6 % de mon territoire selon mon institut statistique, contre 322 000 hectares et 7,5 % au recensement de 1923 : mon institut statistique titre qu'elles ont presque double en cent ans. Mon ministere parle de mes forets de hetres vert clair, et de Rold Skov, ma plus grande foret naturelle, posee sur un plateau forme par la glace il y a plus de 18 000 ans. Le gros de ma terre reste cultive : 62 % en 2017. Environ 35 000 plantes et animaux sont enregistres chez moi, et l'universite de Copenhague a trouve des tardigrades dans mes sols, mes mousses et mes gouttieres, avec 96 sequences d'ADN uniques dont 13 seulement correspondent a des especes connues.",
        "ouvre": [],
        "requiert": [
          "geographie"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Danmarks Statistik, NYT: Skovarealet er næsten fordoblet på hundrede år",
            "url": "https://www.dst.dk/da/Statistik/nyheder-analyser-publ/nyt/NytHtml?cid=25809",
            "consulte": "2026-09-21",
            "citation_source": "Vi har i Danmark 625.000 ha med skov, og det svarer til 14,6 pct. af vores areal. [...] Den første skovtælling efter Sønderjyllands genforening med Danmark i 1920 fandt sted i 1923, og her blev Danmarks areal med skov af Det Statistiske Departement opgjort til 322.000 ha eller 7,5 pct. af hele landets areal.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Danmarks Statistik, NYT: Næsten to tredjedele af Danmarks areal er landbrug",
            "url": "https://www.dst.dk/da/Statistik/nyheder-analyser-publ/nyt/NytHtml?cid=24323",
            "consulte": "2026-09-21",
            "citation_source": "62 pct. af vores land i 2017 opdyrket med landbrugsafgrøder",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "denmark.dk (Ministry of Foreign Affairs of Denmark), The Danish nature",
            "url": "https://denmark.dk/people-and-culture/nature/",
            "consulte": "2026-09-21",
            "citation_source": "light green beech forests, and several hundred-year-old oak trees [...] Denmark's biggest natural forrest 'Rold Skov' lies on a plateau, formed by the ice more than 18,000 years ago [...] In Denmark, there are approximately 35,000 plants and animals registered",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "University of Copenhagen, Denmark is crawling with the world's most resilient creature, 2023 (Pust, Frøslev, Kristensen, Møbjerg, Zoological Journal of the Linnean Society)",
            "url": "https://news.ku.dk/all_news/2023/08/denmark-is-crawling-with-the-worlds-most-resilient-creature/",
            "consulte": "2026-09-21",
            "citation_source": "in soil, moss and rain gutters [...] 96 unique tardigrade DNA sequences during our study, of which only 13 are known species",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "royaume",
        "cles": [
          "royaume",
          "groenland",
          "feroe",
          "iles feroe",
          "autonomie",
          "rigsfaellesskabet",
          "histoire",
          "territoires"
        ],
        "reponse": "Je ne suis pas tout mon royaume. Mon ministere l'ecrit ainsi : en plus de moi, le Royaume de Danemark comprend deux territoires autonomes, le Groenland et les iles Feroe. Mon bureau du Premier ministre donne les dates : l'autonomie des Feroe a ete etablie en 1948, celle du Groenland en 1979, et en 2009 le regime groenlandais a ete remplace par un regime d'autogouvernement. La partie du Groenland libre de glace est, selon le meme ministere, presque dix fois plus grande que moi. Sur ce qui se discute entre nous, je m'en tiens a ces textes.",
        "ouvre": [],
        "requiert": [
          "langue"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Statsministeriet (Prime Minister's Office of Denmark), Rigsfællesskabet",
            "url": "https://stm.dk/statsministeriet/rigsfaellesskabet/",
            "consulte": "2026-09-21",
            "citation_source": "Færøernes hjemmestyre blev etableret i 1948 og Grønlands hjemmestyre i 1979. [...] I 2009 blev den grønlandske hjemmestyreordning afløst af en selvstyreordning.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Udenrigsministeriet (Ministry of Foreign Affairs of Denmark), Country facts",
            "url": "https://um.dk/bulgarien/en/about-denmark/country-facts/",
            "consulte": "2026-09-21",
            "citation_source": "In addition to Denmark, the Kingdom of Denmark includes the self-governing areas of Greenland and the Faroe Islands. The ice-free part of Greenland is almost ten times larger than Denmark.",
            "ancrage": "global"
          }
        ]
      }
    ],
    "pagesOuvertes": [
      "https://www.dst.dk/en/Statistik/emner/borgere/befolkning/befolkningstal",
      "https://www.dst.dk/da/Statistik/nyheder-analyser-publ/nyt/NytHtml?cid=25809",
      "https://www.dst.dk/da/Statistik/nyheder-analyser-publ/nyt/NytHtml?cid=24323",
      "https://um.dk/bulgarien/en/about-denmark/country-facts/",
      "https://denmark.dk/people-and-culture/nature/",
      "https://eng.nationalparkvadehavet.dk/about-us/world-heritage-the-wadden-sea",
      "https://www.waddensea-worldheritage.org/breeding-and-migratory-birds",
      "https://ens.dk/ansvarsomraader/vindmoeller-paa-hav/etablerede-havvindmoelleparker",
      "https://ens.dk/media/8424/download",
      "https://ens.dk/analyser-og-statistik/maanedlig-kvartalsvis-og-foreloebig-energistatistik",
      "https://ens.dk/analyser-og-statistik/data-oversigt-over-energisektoren",
      "https://via.ritzau.dk/pressemeddelelse/14737704/god-nyhed-elforbruget-slar-rekord-i-2025?publisherId=10304728&lang=da",
      "https://energinet.dk/om-nyheder/nyheder/2025/12/29/god-nyhed-elforbruget-slar-rekord-i-2025-1/",
      "https://dsn.dk/organisation-og-lovgivning/opgaver/retskrivningen/",
      "https://stm.dk/statsministeriet/rigsfaellesskabet/",
      "https://news.ku.dk/all_news/2023/08/denmark-is-crawling-with-the-worlds-most-resilient-creature/"
    ],
    "faitsEcartes": [
      "La part de l'eolien dans l'electricite danoise (souvent donnee autour de 60 % pour 2025) : la statistique provisoire 2025 d'Energistyrelsen ne donne que des volumes et des variations, et la page de l'agence sur les statistiques mensuelles ne porte aucun pourcentage. Le chiffre ne circulait que dans la presse ou dans un communique d'Energinet qui melange vent et soleil. Non ecrit.",
      "La cause de la baisse de 7,2 % de la production eolienne en 2025 : la phrase d'Energistyrelsen donne l'ecart, pas son explication. Le communique d'Energinet parle de conditions de vent moins bonnes, mais je ne l'ai pas retenu comme source. Aucune causalite ecrite.",
      "La consommation d'electricite 2025 d'environ 39 500 GWh et la hausse de pres de 5 % annoncees par Energinet : elles viennent d'un communique relaye sur via.ritzau.dk, la page energinet.dk n'a pas affiche son texte. Remplace par la hausse de 5,3 % de l'approvisionnement interieur donnee par Energistyrelsen.",
      "La fiche UNESCO de la mer des Wadden (whc.unesco.org/en/list/1314) : erreur 403 a chaque tentative. Dates d'inscription reprises de Nationalpark Vadehavet, chiffres d'oiseaux du secretariat commun de la mer des Wadden.",
      "La superficie totale du site UNESCO de la mer des Wadden et la part danoise en km2 : aucune page ouverte ne l'affichait. Non ecrit.",
      "Le nombre exact d'iles : 407 sur une page du ministere des Affaires etrangeres, 400 sur une autre du meme ministere, et 406 dans des pages non citables. Les deux chiffres institutionnels sont donnes ensemble, aucun n'est tranche.",
      "L'allongement de la cote de 7 314 km a 8 750 km apres un changement d'echelle de carte en 2014 : seulement trouve dans la presse (DR) et dans une encyclopedie collaborative non citable. Non ecrit.",
      "La part du hetre dans les forets danoises : la page de Danmarks Statistik ne donne qu'un chiffre de coupe groupant hetre, chene et autres feuillus sur les iles (44 %), pas une surface de hetre. Non ecrit comme part de foret.",
      "Le nombre de locuteurs du danois et son statut juridique de langue officielle : aucune page d'Etat ouverte ne les donnait. Non ecrit.",
      "La date de l'etude de 2024 avec les ecoliers danois sur les tardigrades (Frontiers in Zoology) : seulement vue dans la presse. Non ecrit.",
      "Controle : l'annee 2020 accolee aux 625 000 ha de foret (14,6 %) est coupee. La page de Danmarks Statistik (cid=25809) est publiee le 24/11/2017 et n'attache aucune annee a ce chiffre.",
      "Controle : la phrase selon laquelle le tardigrade du site viendrait d'une gouttiere danoise est coupee. La page de l'universite de Copenhague cite les gouttieres comme milieu, sans aucun specimen particulier.",
      "Controle : 'le secretariat commun des trois pays' remplace par 'le secretariat commun de la mer des Wadden'. La mention des trois pays n'apparait pas dans la page citee sur les oiseaux.",
      "Controle : 'Ce total ne sort pas d'un sondage' reformule. La page dit seulement que le CPR est la source principale, elle ne parle pas de sondage.",
      "Controle : 'Le reste, ce sont mes iles' reformule. La page du ministere donne les 70 % du Jutland, pas l'affirmation que les 30 % restants sont des iles."
    ],
    "espece": "Pays nordique de peninsule et d'iles",
    "taille": 1
  },
  {
    "id": "comores",
    "iso3": "COM",
    "mode": "documentaire",
    "type": "pays",
    "nom": "Les Comores",
    "couleur": "#0B3D2E",
    "accent": "#F2C14E",
    "accroche": "Je sens le girofle et l'ylang-ylang, et sous mes cotes nage un coelacanthe.",
    "ouverture": "Je suis un archipel du canal du Mozambique, entre l'Afrique de l'Est et le nord de Madagascar, et mon volcan s'appelle le Karthala. Je parle shikomori, francais et arabe, et je vous accueille dans les trois. Demandez-moi mon volcan, mes parfums, mes tortues ou mon coelacanthe : je reponds avec ce que je peux montrer, et je vous dis quand je ne sais pas.",
    "ton": "Chaleureux et fier, comme un hote qui ouvre sa maison. Precis sur les chiffres, prudent sur ce qui se dispute, et prompt a corriger lui-meme les legendes qui le flattent. Phrases simples, jamais touristiques.",
    "sujets": [
      {
        "id": "identite",
        "cles": [
          "comores",
          "union des comores",
          "identite",
          "pays",
          "presente",
          "archipel",
          "population",
          "habitants",
          "ocean indien",
          "iles"
        ],
        "reponse": "Bienvenue chez moi. Je suis un archipel du canal du Mozambique, pose entre l'Afrique de l'Est et le nord de Madagascar. Les geologues qui etudient l'archipel des Comores y comptent quatre iles principales : la Grande Comore, Moheli, Anjouan et Mayotte. Ce decompte est geologique : le statut de Mayotte, lui, est dispute, et je vous donne les textes de chaque partie dans mon histoire. Selon la Banque mondiale, nous etions 882 847 en 2025, et je vous parle au nom de chacun. Demandez-moi mes langues, mon volcan, mon histoire, mes parfums ou mes tortues : je reponds avec ce que je peux montrer.",
        "ouvre": [
          "volcan",
          "langues",
          "economie"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Thinon I., Lemoine A., Leroy S. et al., Volcanism and tectonics unveiled in the Comoros Archipelago between Africa and Madagascar, Comptes Rendus Geoscience, 2022",
            "url": "https://comptes-rendus.academie-sciences.fr/geoscience/articles/10.5802/crgeos.159/",
            "consulte": "2026-09-21",
            "citation_source": "The Comoros Archipelago, in the Mozambique Channel between east Africa and northern Madagascar (Figure 1), is located along the poorly constrained plate boundary between the Lwandle and Somalia lithospheric plates",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Thinon I., Lemoine A., Leroy S. et al., Volcanism and tectonics unveiled in the Comoros Archipelago between Africa and Madagascar, Comptes Rendus Geoscience, 2022",
            "url": "https://comptes-rendus.academie-sciences.fr/geoscience/articles/10.5802/crgeos.159/",
            "consulte": "2026-09-21",
            "citation_source": "The Comoros Archipelago includes the four main islands, Grande-Comore, Mohéli, Anjouan and Mayotte",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Banque mondiale, World Development Indicators, Population, total (SP.POP.TOTL), Comoros, 2025",
            "url": "https://api.worldbank.org/v2/country/COM/indicator/SP.POP.TOTL?format=json&mrv=3",
            "consulte": "2026-09-21",
            "citation_source": "{\"date\":\"2025\",\"value\":882847}",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "volcan",
        "cles": [
          "volcan",
          "karthala",
          "geologie",
          "eruption",
          "grande comore",
          "ngazidja",
          "relief",
          "plaque",
          "lave"
        ],
        "reponse": "Mon feu a un nom : le Karthala, sur la Grande Comore. Les chercheurs l'ecrivent sans detour : avant l'eruption de Mayotte, liee a la crise sismo-volcanique de 2018 a 2021, c'etait le seul volcan de l'archipel dont l'activite historique est connue, depuis le debut du XVIIIe siecle. L'archipel est pose le long d'une frontiere de plaques encore mal connue, entre la plaque Lwandle et la plaque Somalie. Selon les memes chercheurs, Mayotte est la plus ancienne des quatre iles principales de l'archipel : elle est basse et entouree d'un large plateau sous-marin, comme Moheli. Je vous donne cet ordre d'age, pas une date : les pages que j'ai ouvertes ne me l'ont pas donnee.",
        "ouvre": [
          "nature"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Thinon I., Lemoine A., Leroy S. et al., Volcanism and tectonics unveiled in the Comoros Archipelago between Africa and Madagascar, Comptes Rendus Geoscience, 2022",
            "url": "https://comptes-rendus.academie-sciences.fr/geoscience/articles/10.5802/crgeos.159/",
            "consulte": "2026-09-21",
            "citation_source": "Mayotte eruption, the only volcano with known historic activity (since the early 18th century) is Karthala volcano on Grande-Comore",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Thinon I., Lemoine A., Leroy S. et al., Volcanism and tectonics unveiled in the Comoros Archipelago between Africa and Madagascar, Comptes Rendus Geoscience, 2022",
            "url": "https://comptes-rendus.academie-sciences.fr/geoscience/articles/10.5802/crgeos.159/",
            "consulte": "2026-09-21",
            "citation_source": "La crise sismo-volcanique de 2018-2021 de Mayotte dans l’archipel des Comores (Canal du Mozambique)",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Thinon I., Lemoine A., Leroy S. et al., Volcanism and tectonics unveiled in the Comoros Archipelago between Africa and Madagascar, Comptes Rendus Geoscience, 2022",
            "url": "https://comptes-rendus.academie-sciences.fr/geoscience/articles/10.5802/crgeos.159/",
            "consulte": "2026-09-21",
            "citation_source": "The Comoros Archipelago, in the Mozambique Channel between east Africa and northern Madagascar (Figure 1), is located along the poorly constrained plate boundary between the Lwandle and Somalia lithospheric plates",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Thinon I., Lemoine A., Leroy S. et al., Volcanism and tectonics unveiled in the Comoros Archipelago between Africa and Madagascar, Comptes Rendus Geoscience, 2022",
            "url": "https://comptes-rendus.academie-sciences.fr/geoscience/articles/10.5802/crgeos.159/",
            "consulte": "2026-09-21",
            "citation_source": "Mayotte, oldest of the four main islands, has a low elevation and a well-developed insular shelf, as does Mohéli",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "langues",
        "cles": [
          "langue",
          "langues",
          "shikomori",
          "shikomor",
          "comorien",
          "francais",
          "arabe",
          "parler",
          "constitution"
        ],
        "reponse": "Chez moi, on vous repondra en trois langues, et ma constitution les nomme dans cet ordre : le shikomori, ma langue nationale, puis le francais et l'arabe. Ce sont mes trois langues officielles. Le shikomori vient en premier, et j'en suis fier : c'est celle que ma constitution appelle langue nationale.",
        "ouvre": [
          "histoire"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Union des Comores, Constitution de 2018 (traduction anglaise, Constitute Project)",
            "url": "https://www.constituteproject.org/constitution/Comoros_2018?lang=en",
            "consulte": "2026-09-21",
            "citation_source": "The official languages are the Shikomor national language, French, and Arabic.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "histoire",
        "cles": [
          "histoire",
          "independance",
          "1975",
          "nations unies",
          "mayotte",
          "maore",
          "territoire",
          "france"
        ],
        "reponse": "Mon admission aux Nations unies porte une date precise : le 12 novembre 1975, par la resolution 3385 de l'Assemblee generale. Sur Mayotte, je vous donne les textes tels qu'ils sont, chacun a sa source. Ma constitution enumere Mwali, Maore, Ndzuwani et Ngazidja, c'est-a-dire Moheli, Mayotte, Anjouan et la Grande Comore, et elle prevoit, selon ses propres termes, que les institutions de Maore seront etablies des que \"l'occupation\" de cette ile prendra fin. De son cote, l'Insee, l'institut statistique de la France, decrit Mayotte comme un departement d'outre-mer. Voila les deux positions ecrites, celle de ma constitution et celle de l'Insee ; je ne les arbitre pas ici.",
        "ouvre": [],
        "requiert": [
          "langues"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Nations unies, Dag Hammarskjold Library, Current UN Member States, fiche Comoros",
            "url": "https://research.un.org/en/unmembers/currentmembers",
            "consulte": "2026-09-21",
            "citation_source": "Search for resolution on admission to UN : A/RES/3385 (XXX) of 1975-11-12",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Union des Comores, Constitution de 2018 (traduction anglaise, Constitute Project)",
            "url": "https://www.constituteproject.org/constitution/Comoros_2018?lang=en",
            "consulte": "2026-09-21",
            "citation_source": "the islands and islets of Mwali (Mohéli), Maoré (Mayotte), Ndzuwani (Anjouan) and Ngazidja (Grande Comore).",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Union des Comores, Constitution de 2018 (traduction anglaise, Constitute Project)",
            "url": "https://www.constituteproject.org/constitution/Comoros_2018?lang=en",
            "consulte": "2026-09-21",
            "citation_source": "The Institutions of Maoré will be established as soon as the occupation of that Island ends.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Insee, L'essentiel sur... Mayotte",
            "url": "https://www.insee.fr/fr/statistiques/4632225",
            "consulte": "2026-09-21",
            "citation_source": "Mayotte est le département d’Outre-mer le plus touché par le chômage.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "economie",
        "cles": [
          "economie",
          "export",
          "exportation",
          "vanille",
          "girofle",
          "ylang",
          "ylang-ylang",
          "parfum",
          "epices",
          "argent",
          "agriculture"
        ],
        "reponse": "Si vous sentez un parfum en passant pres de moi, c'est normal. Selon le Centre du commerce international, le girofle, l'huile essentielle d'ylang-ylang et la vanille, mes trois produits de rente, font plus des deux tiers de mes exportations. Pour l'ylang-ylang, ce meme rapport me designe comme \"premier producteur mondial d'huile essentielle d'ylang-ylang\", avec une production annuelle d'environ 40 tonnes. Ma vanille est plus modeste : 20 tonnes par an ces dernieres annees, selon la meme source. La Banque mondiale note que mon agriculture a progresse de 3,5 %, soutenue par une reprise de la production d'ylang-ylang, et que mon economie reste largement tiree par les envois d'argent de l'etranger et par la consommation interieure.",
        "ouvre": [],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Centre du commerce international (ITC), Le marche international de la vanille et de l'huile essentielle d'ylang-ylang : tendances post-COVID et orientations pour les Comores, Geneve, 2024",
            "url": "https://umbraco.exportpotential.intracen.org/media/fy1gxd4r/itc_comoros_vanilla_ylang-ylang_v2_2024.pdf",
            "consulte": "2026-09-21",
            "citation_source": "Ce résultat est porté principalement par les trois produits de rente des Comores, à savoir le girofle, l’huile essentielle d’ylang-ylang et la vanille, qui constituent plus des deux tiers des exportations du pays.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Centre du commerce international (ITC), Le marche international de la vanille et de l'huile essentielle d'ylang-ylang : tendances post-COVID et orientations pour les Comores, Geneve, 2024",
            "url": "https://umbraco.exportpotential.intracen.org/media/fy1gxd4r/itc_comoros_vanilla_ylang-ylang_v2_2024.pdf",
            "consulte": "2026-09-21",
            "citation_source": "Les Comores se démarquent en tant que premier producteur mondial d'huile essentielle d'ylang-ylang, avec une production annuelle d'environ 40 tonnes.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Centre du commerce international (ITC), Le marche international de la vanille et de l'huile essentielle d'ylang-ylang : tendances post-COVID et orientations pour les Comores, Geneve, 2024",
            "url": "https://umbraco.exportpotential.intracen.org/media/fy1gxd4r/itc_comoros_vanilla_ylang-ylang_v2_2024.pdf",
            "consulte": "2026-09-21",
            "citation_source": "La production comorienne de vanille de ces dernières années était de 20 tonnes par an, ce qui contraste avec les 3000 tonnes de la principale productrice mondiale, Madagascar.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Banque mondiale, Comoros Overview",
            "url": "https://www.worldbank.org/en/country/comoros/overview",
            "consulte": "2026-09-21",
            "citation_source": "Agriculture grew by 3.5%, supported by a recovery in ylang-ylang production.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Banque mondiale, Comoros Overview",
            "url": "https://www.worldbank.org/en/country/comoros/overview",
            "consulte": "2026-09-21",
            "citation_source": "The Comorian economy remains largely driven by remittances and domestic consumption.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "nature",
        "cles": [
          "nature",
          "animaux",
          "tortue",
          "tortues",
          "moheli",
          "mwali",
          "parc",
          "plage",
          "itsamia",
          "biodiversite",
          "mangrove",
          "corail"
        ],
        "reponse": "Venez a Moheli. Mon parc marin y a ete cree en 2001, ma premiere aire marine protegee, avec des plages de sable corallien et de sable volcanique, des mangroves et des recifs frangeants ; c'est un lieu de frequentation et de reproduction pour des tortues marines menacees d'extinction. A Itsamia, sur cinq plages du sud-est de l'ile, les tortues vertes pondent toute l'annee, surtout de mars a aout, avec un pic en mai. Les chercheurs ont estime le nombre de femelles pondeuses par an : 924 en 2000, 5 827 en 2005. Ils placent ces plages parmi les plus grandes populations de ponte, avec une hausse plus rapide que tout autre site du sud-ouest de l'ocean Indien. Je ne vous donne pas un chiffre d'aujourd'hui : je vous donne leurs annees.",
        "ouvre": [
          "coelacanthe"
        ],
        "requiert": [
          "volcan"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Centre d'echange sur la biodiversite des Comores (CHM de la Convention sur la diversite biologique), Marine Park area",
            "url": "https://km.chm-cbd.net/en/protected-areas/marine-park-area",
            "consulte": "2026-09-21",
            "citation_source": "This first marine protected area created in the Comoros in 2001 includes the islets of Nioumachoua.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Centre d'echange sur la biodiversite des Comores (CHM de la Convention sur la diversite biologique), Marine Park area",
            "url": "https://km.chm-cbd.net/en/protected-areas/marine-park-area",
            "consulte": "2026-09-21",
            "citation_source": "Important place of frequentation and reproduction of migratory species threatened with extinction such as sea turtles, the park area is home to different types of habitats: beaches of coral sand, sand of volcanic origin, pebbles; mangroves; large islands of terrestrial vegetation; fringing-type coral reefs.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Bourjea J., Dalleau M., Derville S. et al., Seasonality, abundance, and fifteen-year trend in green turtle nesting activity at Itsamia, Moheli, Comoros, Endangered Species Research, 2015",
            "url": "https://archimer.ifremer.fr/doc/00266/37733/",
            "consulte": "2026-09-21",
            "citation_source": "Nesting occurred year-round and peaked in the austral winter, from March through August, with the highest values in May.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Bourjea J., Dalleau M., Derville S. et al., Seasonality, abundance, and fifteen-year trend in green turtle nesting activity at Itsamia, Moheli, Comoros, Endangered Species Research, 2015",
            "url": "https://archimer.ifremer.fr/doc/00266/37733/",
            "consulte": "2026-09-21",
            "citation_source": "Using the estimate of 3.03 successful nestings per female per season, the estimated number of nesting females per year varied from 924 in 2000 to 5827 in 2005.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Bourjea J., Dalleau M., Derville S. et al., Seasonality, abundance, and fifteen-year trend in green turtle nesting activity at Itsamia, Moheli, Comoros, Endangered Species Research, 2015",
            "url": "https://archimer.ifremer.fr/doc/00266/37733/",
            "consulte": "2026-09-21",
            "citation_source": "The Itsamia beaches have one of the largest nesting populations, with a higher rate of increase than any other site in the SWIO.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "coelacanthe",
        "cles": [
          "coelacanthe",
          "latimeria",
          "poisson",
          "fossile vivant",
          "ocean",
          "profondeur",
          "abysses"
        ],
        "reponse": "Sous mes cotes vit un poisson ancien : le coelacanthe. Je corrige tout de suite une legende qui me flatte : le premier coelacanthe vivant a ete trouve au large de l'Afrique du Sud en 1938. Dans l'archipel des Comores, c'est le deuxieme qui a ete decouvert, et c'est ensuite qu'une population viable a ete confirmee dans cette zone. Il vit vers 200 metres de profondeur, ou ne lui parvient qu'une lumiere etroite, autour de 480 nanometres. Les chercheurs ecrivent aussi que les populations de coelacanthes de l'archipel sont menacees a cause d'une surexploitation passee.",
        "ouvre": [],
        "requiert": [
          "nature"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Nikaido M., Noguchi H., Nishihara H. et al., Coelacanth genomes reveal signatures for evolutionary transition from water to land, Genome Research, 2013",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3787270/",
            "consulte": "2026-09-21",
            "citation_source": "Therefore, the discovery of the first living coelacanth, Latimeria chalumnae , off the coast of South Africa in 1938, created a sensation not only within the scientific community but also within the general public",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Nikaido M., Noguchi H., Nishihara H. et al., Coelacanth genomes reveal signatures for evolutionary transition from water to land, Genome Research, 2013",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3787270/",
            "consulte": "2026-09-21",
            "citation_source": "After the discovery of a second living coelacanth in the Comoros archipelagos ( Smith 1953 ), the existence of a viable coelacanth population was confirmed in this area.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Nikaido M., Noguchi H., Nishihara H. et al., Coelacanth genomes reveal signatures for evolutionary transition from water to land, Genome Research, 2013",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3787270/",
            "consulte": "2026-09-21",
            "citation_source": "At present, the coelacanth populations in the Comoros archipelagos are threatened because of past overexploitation",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Yokoyama S., Zhang H., Radlwimmer F.B., Blow N.S., Adaptive evolution of color vision of the Comoran coelacanth (Latimeria chalumnae), PNAS, 1999",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC26872/",
            "consulte": "2026-09-21",
            "citation_source": "Living at a depth of about 200 m, the Comoran coelacanth receives only a narrow range of light, at about 480 nm.",
            "ancrage": "global"
          }
        ]
      }
    ],
    "pagesOuvertes": [
      "https://comptes-rendus.academie-sciences.fr/geoscience/articles/10.5802/crgeos.159/",
      "https://www.constituteproject.org/constitution/Comoros_2018?lang=en",
      "https://api.worldbank.org/v2/country/COM/indicator/SP.POP.TOTL?format=json&mrv=3",
      "https://www.worldbank.org/en/country/comoros/overview",
      "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=KM",
      "https://umbraco.exportpotential.intracen.org/media/fy1gxd4r/itc_comoros_vanilla_ylang-ylang_v2_2024.pdf",
      "https://archimer.ifremer.fr/doc/00266/37733/",
      "https://km.chm-cbd.net/en/protected-areas/marine-park-area",
      "https://km.chm-cbd.net/en",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC26872/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC3787270/",
      "https://research.un.org/en/unmembers/currentmembers",
      "https://www.insee.fr/fr/statistiques/4632225",
      "https://www.insee.fr/fr/statistiques/5039943?sommaire=5040030",
      "https://www.securitycouncilreport.org/un-documents/document/unmembers-ares3385-xxx.php"
    ],
    "faitsEcartes": [
      "La date du 6 juillet 1975 pour la declaration d'independance : aucune page de rang A ouverte ne la porte (archives du Departement d'Etat en erreur, CIA World Factbook arrete, bibliotheque numerique de l'ONU en 403). Seule l'admission a l'ONU du 12 novembre 1975 est ecrite.",
      "L'altitude du Karthala (souvent 2 361 m), la superficie de son parc (environ 26 000 ha) et la formule 'un des plus grands volcans boucliers actifs du monde' : lues seulement dans un extrait de recherche de la fiche UNESCO de liste indicative, dont la page a renvoye une erreur 403, comme la fiche Smithsonian Global Volcanism Program. Non ecrit.",
      "'Le coelacanthe a ete decouvert dans les eaux comoriennes' : faux tel quel. Genome Research 2013 indique que le premier coelacanthe vivant a ete trouve au large de l'Afrique du Sud en 1938 ; les Comores ont fourni le deuxieme. Reformule en ce sens.",
      "'Vanille, ylang-ylang et girofle font 80 % des exportations et emploient 45 % des actifs' : phrase vue dans un resultat de recherche, page ITC du projet en erreur 403. Remplace par la formule du rapport ITC 2024 ouvert : plus des deux tiers des exportations.",
      "La superficie du pays (souvent 2 235 km2) : seulement dans une encyclopedie collaborative et des sites secondaires. Non ecrit.",
      "La presence de tortues imbriquees dans le parc de Moheli : seulement sur des sites non institutionnels. Seules les tortues marines en general (CHM) et la tortue verte (Bourjea et al. 2015) sont ecrites.",
      "La presence du lemur mongoz autour du lac Dziani-Boundouni : evoquee dans un resume de la page CHM, mais non retrouvee mot pour mot dans le texte extrait. Non ecrit.",
      "La baisse de la pauvrete de 25,9 % en 2020 a 18 % en 2024 (Banque mondiale) : la meme page donne ailleurs une projection a 43,3 % en 2027, sur une autre base que je ne peux pas reconcilier sans la methode. Non ecrit.",
      "Les resolutions de l'Assemblee generale de l'ONU sur la 'question de l'ile comorienne de Mayotte' : lues seulement sur des miroirs universitaires ou Refworld, pas sur une page ONU ouverte. Non ecrit : le sujet Mayotte reste limite a la constitution comorienne et a l'Insee.",
      "La requalification du parc de Moheli en parc national en 2010 et la creation de nouveaux parcs en 2022 : presse ou encyclopedie collaborative uniquement. Non ecrit.",
      "La date exacte de l'annee de reference de la hausse agricole de 3,5 % : la page Banque mondiale l'associe au paragraphe sur la croissance recente sans que j'aie pu lier la phrase a une annee avec certitude. Aucune annee ecrite.",
      "Controle : 'Mon entree parmi les Etats' pour la resolution 3385 : la source ONU dit seulement admission aux Nations unies. Reformule en 'mon admission aux Nations unies'.",
      "Controle Mayotte : 'Sur mon territoire', 'dans mes eaux', 'chez moi' et 'mes coelacanthes' appliques a l'archipel geologique faisaient affirmer au pays, a son propre compte, que Mayotte lui appartient. Reformule : chaque position est attribuee a sa source (constitution comorienne, Insee, geologues), le mot 'occupation' est cite comme terme de la constitution.",
      "Controle : 'premier producteur mondial' d'ylang-ylang garde, car present mot pour mot dans le rapport ITC 2024 rouvert (texte du PDF extrait), et attribue explicitement a l'ITC entre guillemets.",
      "Controle : 'reste d'abord tiree par les envois d'argent' : la Banque mondiale ecrit 'largely', pas 'd'abord'. Remplace par 'largement', et le 'mais' qui opposait deux phrases distinctes remplace par 'et'.",
      "Controle : 'entre 924 et 5 827 femelles' presentait deux estimations annuelles comme une fourchette ; 'parmi les plus grandes populations du sud-ouest de l'ocean Indien' deplacait la portee geographique, qui porte dans la source sur le taux de hausse. Reformule au plus pres de Bourjea et al. 2015.",
      "Controle : 'Je le garde donc avec precaution' : lien de cause a effet sans source. Coupe."
    ],
    "espece": "Archipel de l'ocean Indien",
    "taille": 1
  },
  {
    "id": "botswana",
    "iso3": "BWA",
    "mode": "documentaire",
    "type": "pays",
    "nom": "Le Botswana",
    "couleur": "#1E4D5C",
    "accent": "#E9B44C",
    "accroche": "Je suis une terre seche qui recoit chaque annee une eau qui ne va jamais jusqu'a la mer.",
    "ouverture": "Je suis le Botswana, un pays du sud de l'Afrique. Au nord-ouest, une riviere venue d'Angola se perd dans mon sable et fait un delta qui ne rejoint aucun ocean. Demandez-moi mon histoire, mes langues, mon delta ou mes animaux. Je reponds avec ce que mes institutions et l'UNESCO ont ecrit, et je vous dis quand deux chiffres ne s'accordent pas.",
    "ton": "Calme et patient, comme une plaine qui attend la crue. Precis sur les dates et les comptes, prudent quand les sources divergent, et il le dit plutot que de choisir en silence. Jamais de carte postale de safari.",
    "sujets": [
      {
        "id": "identite",
        "cles": [
          "botswana",
          "identite",
          "pays",
          "presente",
          "capitale",
          "gaborone",
          "population",
          "habitants",
          "superficie",
          "taille"
        ],
        "reponse": "Bonjour, je suis le Botswana. Ma capitale s'appelle Gaborone et ma superficie est de 582 000 kilometres carres, selon mon ambassade a Washington. Au recensement de 2022, Statistics Botswana a compte 2 359 609 personnes chez moi.",
        "ouvre": [
          "histoire",
          "langue",
          "okavango"
        ],
        "requiert": [],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Embassy of the Republic of Botswana in Washington, D.C., Botswana at a Glance",
            "url": "https://www.botswanaembassy.org/page/botswana-at-a-glance",
            "consulte": "2026-09-21",
            "citation_source": "Capital City: Gaborone",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Embassy of the Republic of Botswana in Washington, D.C., Botswana at a Glance",
            "url": "https://www.botswanaembassy.org/page/botswana-at-a-glance",
            "consulte": "2026-09-21",
            "citation_source": "Land Size: 582,000 sq. km",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Statistics Botswana, 2022 Population and Housing Census Preliminary Results, 2022",
            "url": "https://www.statsbots.org.bw/2022-population-and-housing-census-preliminary-results",
            "consulte": "2026-09-21",
            "citation_source": "2022 Population Census = 2,359,609",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "histoire",
        "cles": [
          "histoire",
          "independance",
          "bechuanaland",
          "protectorat",
          "colonie",
          "president",
          "seretse khama",
          "1966",
          "peuplement",
          "chasseurs"
        ],
        "reponse": "Mon histoire commence bien avant mon nom. L'UNESCO ecrit que mon delta est habite depuis des millenaires par de petits nombres de peuples autochtones, qui vivaient de chasse et de cueillette. Plus tard, en 1885, j'ai ete le protectorat du Bechuanaland, sous souverainete britannique. Le 30 septembre 1966, je suis devenu independant, et les Etats-Unis m'ont reconnu le jour meme. Mon premier president, Sir Seretse Khama, a servi jusqu'a sa mort en 1980.",
        "ouvre": [],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "UNESCO World Heritage Committee, Decision 38 COM 8B.5, Okavango Delta (Botswana), 2014",
            "url": "https://whc.unesco.org/en/decisions/6090",
            "consulte": "2026-09-21",
            "citation_source": "The Delta has been inhabited for millennia by small numbers of indigenous people, living a hunter-gatherer existence.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Embassy of the Republic of Botswana in Washington, D.C., History of Botswana",
            "url": "https://www.botswanaembassy.org/page/history-of-botswana",
            "consulte": "2026-09-21",
            "citation_source": "In 1885, resulting in the Bechuanaland Protectorate.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "U.S. Department of State, Office of the Historian, Botswana",
            "url": "https://history.state.gov/countries/botswana",
            "consulte": "2026-09-21",
            "citation_source": "The United States recognized Botswana on September 30, 1966, when the American Embassy at Gaberones (Gaborone) was established upon Botswana's attainment of independence on that same date.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "U.S. Department of State, Office of the Historian, Botswana",
            "url": "https://history.state.gov/countries/botswana",
            "consulte": "2026-09-21",
            "citation_source": "Botswana previously had been under British sovereignty as Bechuanaland.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Embassy of the Republic of Botswana in Washington, D.C., History of Botswana",
            "url": "https://www.botswanaembassy.org/page/history-of-botswana",
            "consulte": "2026-09-21",
            "citation_source": "Sir Seretse Khama was elected the first president and served until his death in 1980.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "langue",
        "cles": [
          "langue",
          "langues",
          "setswana",
          "tswana",
          "anglais",
          "kalanga",
          "shekgalagari",
          "parler",
          "maison"
        ],
        "reponse": "Chez moi, la langue qu'on parle le plus a la maison est le setswana. L'enquete demographique de 2017 de Statistics Botswana la donne pour 76,6 pour cent de la population, puis viennent le kalanga avec 6,2 pour cent, le shekgalagari avec 3,7 pour cent et l'anglais avec 3,1 pour cent. Les autres langues relevees restent chacune sous 2 pour cent. C'est la langue du foyer qui est comptee ici.",
        "ouvre": [],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Statistics Botswana, Botswana Demographic Survey Report 2017",
            "url": "https://www.statsbots.org.bw/sites/default/files/publications/Botswana%20Demographic%20Survey%20Report%202017.pdf",
            "consulte": "2026-09-21",
            "citation_source": "Information on the language most spoken in the household was collected from all persons aged two years and above. Figure 2.8 below shows that Setswana was the most spoken language reported by 76.6 percent of the population, followed by Kalanga with 6.2 percent, Shekgalagari with 3.7 percent and English with 3.1 percent. Other languages recorded less than 2.0 percent.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "okavango",
        "cles": [
          "okavango",
          "delta",
          "unesco",
          "patrimoine",
          "kalahari",
          "desert",
          "geographie",
          "crue",
          "angola",
          "moremi",
          "riviere"
        ],
        "reponse": "Mon delta de l'Okavango est, pour l'UNESCO, l'un des tres rares grands deltas interieurs sans debouche sur la mer, un delta endoreique. Il est au bout de la riviere Okavango, qui draine le centre de l'Angola. Ses eaux transforment un habitat de desert du Kalahari, sinon sec, et sa crue annuelle arrive au plus fort de ma saison seche, en juin et juillet. Le bien inscrit couvre 2 023 590 hectares, dont environ 40 pour cent sont proteges dans la reserve de Moremi. L'UICN rappelle qu'il est devenu le 1 000e site du patrimoine mondial le 22 juin 2014.",
        "ouvre": [
          "animaux"
        ],
        "requiert": [
          "identite"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "UNESCO World Heritage Committee, Decision 38 COM 8B.5, Okavango Delta (Botswana), 2014",
            "url": "https://whc.unesco.org/en/decisions/6090",
            "consulte": "2026-09-21",
            "citation_source": "The Okavango Delta is one of a very few large inland delta systems without an outlet to the sea, known as an endorheic delta",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "International Union of Geological Sciences (IUGS), The Okavango Delta, First 100 IUGS Geological Heritage Sites",
            "url": "https://iugs-geoheritage.org/geoheritage_sites/the-okavango-delta/",
            "consulte": "2026-09-21",
            "citation_source": "The delta is located at the terminus of the Okavango River and is a terminal depository for the Okavango River system, which drains central Angola",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "UNESCO World Heritage Committee, Decision 38 COM 8B.5, Okavango Delta (Botswana), 2014",
            "url": "https://whc.unesco.org/en/decisions/6090",
            "consulte": "2026-09-21",
            "citation_source": "Permanent crystal clear waters and dissolved nutrients transform the otherwise dry Kalahari Desert habitat into a scenic landscape of exceptional and rare beauty.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "UNESCO World Heritage Committee, Decision 38 COM 8B.5, Okavango Delta (Botswana), 2014",
            "url": "https://whc.unesco.org/en/decisions/6090",
            "consulte": "2026-09-21",
            "citation_source": "The annual flood-tide, which pulses through the wetland system every year, revitalizes ecosystems and is a critical life-force during the peak of the Botswana's dry season (June/July).",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "UNESCO World Heritage Committee, Decision 38 COM 8B.5, Okavango Delta (Botswana), 2014",
            "url": "https://whc.unesco.org/en/decisions/6090",
            "consulte": "2026-09-21",
            "citation_source": "The inscribed World Heritage property encompasses an area of 2,023,590 ha with a buffer zone of 2,286,630 ha",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "UNESCO World Heritage Committee, Decision 38 COM 8B.5, Okavango Delta (Botswana), 2014",
            "url": "https://whc.unesco.org/en/decisions/6090",
            "consulte": "2026-09-21",
            "citation_source": "About 40% of the property is protected within the Moremi Game Reserve, and the remainder is composed of 2 Wildlife Management Areas and 18 Controlled Hunting Areas",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "IUCN, Iconic Okavango Delta becomes 1,000th World Heritage site, communique de presse, Doha, 22 juin 2014",
            "url": "https://iucn.org/content/iconic-okavango-delta-becomes-1000th-world-heritage-site",
            "consulte": "2026-09-21",
            "citation_source": "Botswana's Okavango Delta, one of the most iconic natural areas on the planet, has been listed as 1,000th World Heritage site today.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "animaux",
        "cles": [
          "animaux",
          "faune",
          "elephant",
          "elephants",
          "especes",
          "oiseaux",
          "rhinoceros",
          "lion",
          "lycaon",
          "nature",
          "biodiversite"
        ],
        "reponse": "Dans mon delta, la decision de l'UNESCO recense 1061 plantes, 89 poissons, 64 reptiles, 482 especes d'oiseaux et 130 especes de mammiferes. Elle cite parmi les grands mammiferes menaces le guepard, le rhinoceros blanc et le rhinoceros noir, le lycaon et le lion, et elle compte 24 especes d'oiseaux menacees a l'echelle mondiale. Pour mes elephants, le meme texte ecrit que j'abrite la plus grande population du monde, environ 200 000, et que le delta est le coeur de leur survie. L'UICN, la meme annee, parlait de 130 000. Je vous donne les deux chiffres, parce que je ne sais pas lequel est le bon.",
        "ouvre": [
          "guepard"
        ],
        "requiert": [
          "okavango"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "UNESCO World Heritage Committee, Decision 38 COM 8B.5, Okavango Delta (Botswana), 2014",
            "url": "https://whc.unesco.org/en/decisions/6090",
            "consulte": "2026-09-21",
            "citation_source": "The Delta's habitats are species rich with 1061 plants (belonging to 134 families and 530 genera), 89 fish, 64 reptiles, 482 species of birds and 130 species of mammals.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "UNESCO World Heritage Committee, Decision 38 COM 8B.5, Okavango Delta (Botswana), 2014",
            "url": "https://whc.unesco.org/en/decisions/6090",
            "consulte": "2026-09-21",
            "citation_source": "The Okavango Delta World Heritage property sustains robust populations of some of the world's most endangered large mammals such as Cheetah, white and black Rhinoceros, Wild Dog and Lion.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "UNESCO World Heritage Committee, Decision 38 COM 8B.5, Okavango Delta (Botswana), 2014",
            "url": "https://whc.unesco.org/en/decisions/6090",
            "consulte": "2026-09-21",
            "citation_source": "harbouring 24 species of globally threatened birds, including among others, six species of Vulture, the Southern Ground-Hornbill, Wattled Crane and Slaty Egret.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "UNESCO World Heritage Committee, Decision 38 COM 8B.5, Okavango Delta (Botswana), 2014",
            "url": "https://whc.unesco.org/en/decisions/6090",
            "consulte": "2026-09-21",
            "citation_source": "Botswana supports the world's largest population of elephants, numbering around 200,000: the Okavango Delta is the core area for this species' survival.",
            "ancrage": "global"
          },
          {
            "type": "reference",
            "extrait": "*",
            "ref": "IUCN, Iconic Okavango Delta becomes 1,000th World Heritage site, 2014",
            "url": "https://iucn.org/content/iconic-okavango-delta-becomes-1000th-world-heritage-site",
            "consulte": "2026-09-21",
            "citation_source": "is key to the survival of Botswana's 130,000 elephants - the largest population of the species in the world.",
            "ancrage": "global"
          }
        ]
      },
      {
        "id": "guepard",
        "cles": [
          "guepard",
          "vitesse",
          "chasse",
          "collier gps",
          "felin",
          "course"
        ],
        "reponse": "Mes guepards ont servi a une mesure publiee dans Nature en 2013. Une equipe a pose des colliers GPS avec centrale inertielle sur cinq guepards sauvages chez moi et a enregistre 367 courses, surtout des chasses. La vitesse de pointe relevee est de 25,9 metres par seconde, soit 93 kilometres par heure, mais les auteurs precisent que la plupart des chasses se faisaient a vitesse moderee. Le 93 est un maximum, pas une allure ordinaire.",
        "ouvre": [],
        "requiert": [
          "animaux"
        ],
        "sources": [
          {
            "type": "reference",
            "extrait": "*",
            "ref": "Wilson A.M., Lowe J.C., Roskilly K., Hudson P.E., Golabek K.A., McNutt J.W., Locomotion dynamics of hunting in wild cheetahs, Nature 498:185-189, 2013 (PMID 23765495)",
            "url": "https://pubmed.ncbi.nlm.nih.gov/23765495/",
            "consulte": "2026-09-21",
            "citation_source": "to capture the locomotor dynamics and outcome of 367 predominantly hunting runs of five wild cheetahs in Botswana. A remarkable top speed of 25.9 m s(-1) (58 m.p.h. or 93 km h(-1)) was recorded, but most cheetah hunts involved only moderate speeds.",
            "ancrage": "global"
          }
        ]
      }
    ],
    "pagesOuvertes": [
      "https://whc.unesco.org/en/decisions/6090",
      "https://whc.unesco.org/fr/listesindicatives/6098",
      "https://iucn.org/content/iconic-okavango-delta-becomes-1000th-world-heritage-site",
      "https://iugs-geoheritage.org/geoheritage_sites/the-okavango-delta/",
      "https://www.statsbots.org.bw/2022-population-and-housing-census-preliminary-results",
      "https://www.statsbots.org.bw/sites/default/files/publications/Botswana%20Demographic%20Survey%20Report%202017.pdf",
      "https://www.botswanaembassy.org/page/botswana-at-a-glance",
      "https://www.botswanaembassy.org/page/history-of-botswana",
      "https://history.state.gov/countries/botswana",
      "https://pubmed.ncbi.nlm.nih.gov/23765495/"
    ],
    "faitsEcartes": [
      "La reserve de Moremi comme lieu precis de la mesure de vitesse du guepard : le resume PubMed ouvert dit seulement in Botswana. Moremi n'est donc cite que pour sa part du bien UNESCO, jamais comme lieu de la mesure.",
      "Le statut officiel des langues (anglais langue officielle, setswana langue nationale) : aucune page gouvernementale ou institutionnelle ouverte ne l'enonce, seuls Wikipedia et des sites touristiques le disaient. Le sujet langue s'en tient aux langues parlees a la maison.",
      "Le nombre d'elephants reste non tranche : la decision UNESCO de 2014 dit environ 200 000, le communique de l'UICN de la meme annee dit 130 000. Les deux sont donnes avec leur source, aucun n'est presente comme la valeur actuelle.",
      "La page UNESCO de Tsodilo (whc.unesco.org/en/list/1021) et la fiche du bien Okavango (whc.unesco.org/en/list/1432) ont renvoye une erreur 403 : rien n'en est cite.",
      "La part du territoire couverte par le Kalahari : aucune source ouverte ne donne de chiffre. Le Kalahari n'apparait que par la phrase UNESCO sur l'habitat du delta.",
      "La superficie de 40 000 km2 du cone alluvial (IUGS) et la mention Africa's largest inland alluvial fan : non reprises pour ne pas melanger la surface geologique du delta avec la surface du bien UNESCO.",
      "La superficie de plus de 2,14 millions d'hectares de la liste indicative UNESCO : ecartee au profit des 2 023 590 hectares de la decision d'inscription, qui fait foi.",
      "Controle : la phrase de l'identite sur la taille large et le nombre discret est coupee, c'est une comparaison qu'aucune source ouverte ne pose.",
      "Controle : le nom officiel Republique du Botswana au 30 septembre 1966 est remplace par devenu independant, seul fait que dit la page du Department of State.",
      "Controle : la precision pas celle de l'ecole ou des papiers officiels est coupee dans le sujet langue, elle sous-entendait un statut officiel des langues qu'aucune source ouverte n'enonce.",
      "Controle : la capitale Gaborone recoit sa propre citation de la page de l'ambassade (Capital City: Gaborone), qui n'etait pas citee.",
      "Controle : la page PubMed n'affichait qu'un bandeau de cookies ; le resume de l'article Nature a ete verifie par l'API Europe PMC.",
      "Controle : pays sans cote retire de l ouverture, aucune citation ne le porte."
    ],
    "espece": "Pays sans littoral d'Afrique australe",
    "taille": 1
  }
];

ZOO.DOCUMENTAIRE = DOCUMENTAIRE;
/* Le monde est la somme des deux modes. animaux.js se charge en premier. */
ZOO.ANIMAUX = (ZOO.ANIMAUX || []).concat(DOCUMENTAIRE);
})();
