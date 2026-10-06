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
  }
];

window.ZOO = window.ZOO || {};
window.ZOO.DOCUMENTAIRE = DOCUMENTAIRE;
/* Le monde est la somme des deux modes. animaux.js se charge en premier. */
window.ZOO.ANIMAUX = (window.ZOO.ANIMAUX || []).concat(DOCUMENTAIRE);
})();
