# Prompts pour les modèles 3D et les décors

Ce fichier sert à générer les vrais modèles du Zoo. Chaque fichier obtenu remplace, entité par entité, le dessin 2D actuel, sans rien casser : le site garde le dessin 2D tant qu'aucun modèle n'est posé.

## Règles communes

**Modèles 3D (Meshy, text-to-3D)**
- Format : `.glb`. Maillage de 8 000 à 20 000 triangles. Texture 1024 px (2048 px maximum).
- Réglages : style « Realistic », pose de référence neutre (T-pose pour un bipède, A-pose pour un quadrupède).
- Rig et animations : à demander seulement pour les quadrupèdes et les oiseaux. Meshy sait rigger les quadrupèdes. Pour les céphalopodes, les insectes et les fruits, pas de rig : je les anime en code dans three.js (ondulation, battement, balancement).
- Livraison : un fichier par entité, nommé comme l'entité (`guepard.glb`), à déposer dans `public/modeles/`.
- Je compresse ensuite chaque fichier avec gltf-transform, comme pour Bunny.

**Décors peints (Claude Design ou un générateur d'images)**
- Format 16:9, 2560 x 1440 px, découpé en 3 calques PNG transparents : `fond` (ciel et lointain), `milieu`, `avant` (bords et bas seulement).
- Cette découpe permet la parallaxe et l'animation par-dessus.
- L'horizon doit tomber à la moitié de la hauteur. La bande centrale doit rester calme, car les animaux s'y tiennent.
- Luminosité basse à moyenne, parce que le texte du site est blanc.
- Livraison : dans `public/decors/<nom>/`.

Suffixe à ajouter à chaque prompt 3D :
> `single isolated subject, neutral studio lighting, physically based materials, accurate anatomy and proportions, no base, no text, no props`

## Animaux (Meshy, avec rig et animations quand c'est possible)

| Fichier | Prompt | Rig et animations |
|---|---|---|
| `elephante.glb` | African bush elephant (Loxodonta africana), adult female, grey wrinkled skin, very large ears shaped like the African continent, curved ivory tusks, long ringed trunk, pillar legs, small tufted tail | Quadrupède : Idle, Walk |
| `guepard.glb` | Cheetah (Acinonyx jubatus), slender long-legged body, golden tan coat covered with solid round black spots, black tear marks from inner eyes to mouth, small round head and ears, long spotted tail ending in black rings and a white tip | Quadrupède : Idle, Walk, Run |
| `manchot-empereur.glb` | Emperor penguin (Aptenodytes forsteri), adult standing upright, black head and back, white belly, bright yellow-orange ear patches fading into a pale yellow chest, thin black beak with an orange-pink stripe on the lower mandible, black feet | Bipède simplifié : Idle, Walk (dandinement) |
| `corbeau.glb` | Rook (Corvus frugilegus), glossy black plumage with blue-purple sheen, long straight grey-black beak with bare whitish-grey skin at its base, shaggy feathered thighs, rounded tail, perched pose | Oiseau : Idle, Hop, Fly |
| `braise-vampire-commune.glb` | Common vampire bat (Desmodus rotundus), short grey-brown fur, flat U-shaped nose pad, pointed ears, dark brown wing membranes with visible finger bones, long thumbs, wings half spread | Sans rig : battement fait en code |
| `abeille-domestique-vrille.glb` | Western honey bee (Apis mellifera) worker, dark head with large compound eyes and elbowed antennae, fuzzy brown thorax, golden amber abdomen with dark brown bands, two pairs of translucent veined wings, six thin legs | Sans rig : ailes animées en code |
| `axolotl.glb` | Leucistic axolotl (Ambystoma mexicanum), pale pink smooth skin, broad flat head with a gentle smile, three feathery bright pink-red external gills on each side of the head, four small limbs, long tail with a dorsal fin | Sans rig : ondulation en code |
| `tardigrade.glb` | Tardigrade (water bear), microscopic animal enlarged, plump segmented barrel-shaped translucent beige body, eight short stubby legs each ending in tiny claws, rounded head with a tubular mouth | Sans rig : pattes animées en code |
| `poulpe.glb` | Common octopus (Octopus vulgaris), sac-shaped mantle, large prominent eyes, eight curling arms with pale suckers on the underside, mottled reddish-brown skin | Sans rig : bras animés en code |
| `poulpe-mimetique.glb` | Mimic octopus (Thaumoctopus mimicus), small mantle, very long thin arms spread wide, bold chocolate-brown and cream-white banding on arms and mantle, eyes on short stalks | Sans rig : bras animés en code |

Les personnages de fiction (Nox le corbeau, Huit le poulpe, Ada l'éléphante) réutilisent `corbeau.glb`, `poulpe.glb` et `elephante.glb`.

## Fruits (Meshy, sans rig)

| Fichier | Prompt |
|---|---|
| `durian.glb` | Durian fruit (Durio zibethinus), large oval green-yellow husk entirely covered with hard pyramidal thorns, short woody stem, one segment split open revealing creamy pale yellow custard-like flesh pods |
| `fruit-baobab.glb` | Baobab fruit (Adansonia digitata), elongated oval hard velvety grey-green pod hanging from a long stalk, with a cracked-open half showing dry chalky white pulp chunks and dark seeds |
| `orange-sanguine-sicile.glb` | Sicilian blood orange (Moro), one whole orange with slightly reddish textured peel and a small green leaf at the stem, next to a half cut open showing deep blood-red segments and a thin white pith ring |
| `acai.glb` | Acai berries (Euterpe oleracea), a hanging bunch of many small round matte purple-black berries attached to thin brown branching strands of a palm fruit cluster |
| `mangoustan.glb` | Mangosteen (Garcinia mangostana), round smooth dark purple fruit with a thick green four-lobed calyx and a short stem, next to an opened fruit showing a thick purple rind and white pearly segments inside |

## Pays

Les pays restent des cartes, tracées en code à partir des vrais contours : ils n'ont pas besoin de modèle 3D. Si tu veux une version en relief plus tard, la piste est un relief extrudé à partir des données d'altitude, généré en code. Pas besoin de prompt pour ça.

## Décors peints (Claude Design ou générateur d'images)

Suffixe à ajouter à chaque prompt :
> `realistic painterly illustration, wide 16:9 landscape, horizon at mid height, calm uncluttered center band, low to medium brightness, no people, no animals, no text`

| Dossier | Prompt |
|---|---|
| `savane` | Botswana savanna at sunset near the Okavango Delta, golden dry grass in layers, umbrella acacia silhouettes, low distant hills, orange and violet sky, low sun with soft haze |
| `banquise` | Antarctic sea ice at polar twilight, snow plain with pressure ridges, distant tabular icebergs on a dark calm sea with floating ice, faint green aurora australis |
| `foret` | Danish beech forest at dusk, smooth grey beech trunks in depth layers, ferns and moss, carpet of fallen leaves, slanted light shafts through mist |
| `eaux-douces` | Xochimilco canals south of Mexico City at dusk, calm dark water, chinampa banks with willows and reeds, distant volcano silhouettes on the horizon |
| `recif` | Shallow coral reef off Sulawesi, Indonesia, underwater, sunlight rays from the surface, rippled pale sand, branching and table corals, sea fans, anemones, distant fish schools |
| `tropiques` | Malaysian tropical rainforest edge near a fruit orchard, buttress-root trees in mist, banana and palm leaves, red earth, green-gold filtered light |
| `vergers` | Terraced blood orange orchards in eastern Sicily at blue hour, dark round orange trees on volcanic stone walls, Mount Etna in the distance with a faint plume |
| `archipels` | Milford Sound fjord in New Zealand at late afternoon, sheer forested cliffs, sugarloaf peak, calm dark water with reflections, a thin waterfall, low clouds on the summits |
| `islande` | Iceland winter night, moss-covered old lava field, tundra plain, distant snow-capped volcano and pale ice cap, green and violet aurora borealis, stars |
| `japon` | Mount Fuji at dusk seen across Lake Kawaguchi, snow-capped symmetrical cone, pink-violet sky, calm lake reflecting the mountain, dark pine shores, light mist on the water |

## Ordre conseillé

1. `guepard`, `elephante`, `manchot-empereur`. Ce sont des quadrupèdes et un oiseau, le cas où Meshy rigge le mieux : on valide toute la chaîne sur eux.
2. Les 5 fruits, sans rig, donc rapides.
3. Le reste des animaux.
4. Les décors peints, en commençant par la savane.

Chaque lot se teste dès qu'il est déposé, sans attendre les autres.
