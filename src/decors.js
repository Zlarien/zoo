/*
  Les decors realistes, un par terrain. Chaque fonction peint son paysage a
  chaque image ; les couches immobiles sont peintes une fois dans un canvas
  hors ecran range dans son cache, seuls les elements vivants sont redessines.
  Un terrain absent de cette table garde son decor simple de terrains.js.
*/

/* ------------------------------------------------------------ savane */
function decorSavane(ctx, w, h, t, cache) {
  // generateur a graine fixe (mulberry32)
  function graine(s) {
    let a = s >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      let x = a;
      x = Math.imul(x ^ (x >>> 15), x | 1);
      x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
      return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
    };
  }
  function mel(a, b, u) {
    return [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u, a[2] + (b[2] - a[2]) * u];
  }
  function rgba(c, al) {
    return "rgba(" + (c[0] | 0) + "," + (c[1] | 0) + "," + (c[2] | 0) + "," + al + ")";
  }
  function palette(stops, u) {
    if (u <= stops[0][0]) return stops[0][1];
    for (let i = 1; i < stops.length; i++) {
      if (u <= stops[i][0]) {
        const a = stops[i - 1], b = stops[i];
        return mel(a[1], b[1], (u - a[0]) / (b[0] - a[0]));
      }
    }
    return stops[stops.length - 1][1];
  }
  // bruit de valeur 1D lisse, somme de plusieurs octaves
  function bruit(seed) {
    const r = graine(seed), tab = [];
    for (let i = 0; i < 256; i++) tab.push(r());
    function v(x) {
      const i = Math.floor(x), f = x - i, s = f * f * (3 - 2 * f);
      return tab[i & 255] * (1 - s) + tab[(i + 1) & 255] * s;
    }
    return function (x) {
      return v(x) * 0.55 + v(x * 2.1 + 7) * 0.28 + v(x * 4.3 + 13) * 0.12 + v(x * 9.7 + 29) * 0.05;
    };
  }

  const HOR = 0.515;
  const SOL = [[0, [150, 100, 64]], [0.07, [132, 88, 55]], [0.3, [104, 69, 43]],
    [0.6, [74, 49, 32]], [1, [30, 20, 15]]];
  const CIEL = [[0, [24, 17, 38]], [0.3, [50, 30, 62]], [0.55, [102, 52, 78]],
    [0.75, [168, 84, 70]], [0.9, [206, 118, 70]], [1, [222, 146, 86]]];

  // acacia parasol : tronc fourchu, couronne plate etagee
  function acacia(c, x, y, taille, col, rim, seed) {
    const r = graine(seed);
    const th = taille, R = taille * (1.05 + r() * 0.3), cy = y - th;
    const pen = (r() - 0.5) * taille * 0.25;
    c.fillStyle = col;
    c.strokeStyle = col;
    c.lineCap = "round";
    const fx = x + pen, fy = y - th * (0.42 + r() * 0.12);
    c.beginPath();
    const lb = Math.max(0.6, taille * 0.05);
    c.moveTo(x - lb, y);
    c.quadraticCurveTo(x - lb * 0.6 + pen * 0.3, (y + fy) / 2, fx - lb * 0.5, fy);
    c.lineTo(fx + lb * 0.5, fy);
    c.quadraticCurveTo(x + lb * 0.6 + pen * 0.3, (y + fy) / 2, x + lb, y);
    c.closePath();
    c.fill();
    const nb = 3 + ((r() * 3) | 0);
    for (let i = 0; i < nb; i++) {
      const u = nb === 1 ? 0 : i / (nb - 1) * 2 - 1;
      const bx = x + u * R * (0.55 + r() * 0.2), by = cy + R * 0.02;
      c.lineWidth = Math.max(0.5, taille * (0.022 + r() * 0.012));
      c.beginPath();
      c.moveTo(fx, fy);
      c.quadraticCurveTo(fx + (bx - fx) * 0.3, fy - (fy - by) * 0.75, bx, by);
      c.stroke();
    }
    // deux etages de feuillage, dessous presque plat
    const etages = [[0, 1, 46], [-R * 0.1, 0.62, 24]];
    const hauts = [];
    for (const [dy, ech, n] of etages) {
      c.beginPath();
      for (let i = 0; i < n; i++) {
        const u = r() * 2 - 1, f = 1 - u * u;
        const px = x + u * R * ech;
        const rx = R * ech * (0.09 + r() * 0.1) * (0.55 + 0.45 * f);
        const ry = rx * (0.3 + r() * 0.15);
        const py = cy + dy - Math.sqrt(f) * R * 0.1 * r() - ry * 0.2;
        c.moveTo(px + rx, py);
        c.ellipse(px, py, rx, ry, 0, 0, Math.PI * 2);
        if (py - ry < cy + dy - R * 0.05) hauts.push([px, py, rx, ry]);
      }
      c.fill();
    }
    if (rim) {
      c.strokeStyle = rim;
      c.lineWidth = Math.max(0.6, taille * 0.012);
      c.beginPath();
      for (const [px, py, rx, ry] of hauts) {
        c.moveTo(px + rx * Math.cos(-2.6), py + ry * Math.sin(-2.6));
        c.ellipse(px, py, rx, ry, 0, -2.6, -0.5);
      }
      c.stroke();
    }
  }

  // un nuage en bandes, dessous eclaire par le soleil bas
  function peindreNuage(c, cw, ch, seed) {
    const r = graine(seed);
    // quelques amas le long du nuage, pour casser la forme de boudin
    const amas = [];
    const na = 3 + ((r() * 3) | 0);
    for (let i = 0; i < na; i++) amas.push([cw * (0.15 + 0.7 * (i + r() * 0.8) / na), 0.4 + r() * 0.6]);
    const passes = [[[70, 46, 78], 0.38, -0.08, 1], [[206, 112, 96], 0.3, 0.12, 0.8], [[248, 170, 110], 0.28, 0.24, 0.45]];
    for (const [col, al, dyp, ech] of passes) {
      for (let i = 0; i < 34; i++) {
        const am = amas[(r() * na) | 0];
        const px = am[0] + (r() - 0.5) * cw * 0.3;
        const py = ch * (0.55 - am[1] * 0.25 * r() + dyp);
        const rr = ch * (0.1 + r() * 0.14) * am[1] * ech + ch * 0.04;
        if (px - rr * 3 < 0 || px + rr * 3 > cw || py - rr * 1.8 < 0 || py + rr * 1.8 > ch) continue;
        const g = c.createRadialGradient(px, py, 0, px, py, rr * 1.8);
        g.addColorStop(0, rgba(col, al));
        g.addColorStop(0.6, rgba(col, al * 0.4));
        g.addColorStop(1, rgba(col, 0));
        c.fillStyle = g;
        c.save();
        c.translate(px, py);
        c.scale(1.7, 1);
        c.translate(-px, -py);
        c.fillRect(px - rr * 1.8, py - rr * 1.8, rr * 3.6, rr * 3.6);
        c.restore();
      }
    }
  }

  function peindreCiel(c, w, h) {
    const H = h * HOR;
    const g = c.createLinearGradient(0, 0, 0, H + 2);
    for (const [u, col] of CIEL) g.addColorStop(u, rgba(col, 1));
    c.fillStyle = g;
    c.fillRect(0, 0, w, H + 4);
    const sx = w * 0.7, rs = Math.max(10, 0.018 * Math.hypot(w, h)), sy = H - rs * 0.55 - h * 0.012;
    // grand halo chaud
    let rg = c.createRadialGradient(sx, sy, 0, sx, sy, Math.max(w, h) * 0.55);
    rg.addColorStop(0, "rgba(255,170,95,0.42)");
    rg.addColorStop(0.25, "rgba(240,130,80,0.16)");
    rg.addColorStop(1, "rgba(200,90,80,0)");
    c.fillStyle = rg;
    c.fillRect(0, 0, w, H + 4);
    rg = c.createRadialGradient(sx, sy, rs * 0.8, sx, sy, rs * 5);
    rg.addColorStop(0, "rgba(255,214,150,0.55)");
    rg.addColorStop(1, "rgba(255,180,110,0)");
    c.fillStyle = rg;
    c.fillRect(sx - rs * 5, sy - rs * 5, rs * 10, rs * 10);
    // disque du soleil, bord doux
    rg = c.createRadialGradient(sx, sy, 0, sx, sy, rs * 1.15);
    rg.addColorStop(0, "rgba(255,244,214,1)");
    rg.addColorStop(0.75, "rgba(255,214,150,1)");
    rg.addColorStop(1, "rgba(255,190,120,0)");
    c.fillStyle = rg;
    c.beginPath();
    c.arc(sx, sy, rs * 1.15, 0, Math.PI * 2);
    c.fill();
    // cirrus hauts, fins et roses
    const r = graine(71);
    c.save();
    for (let i = 0; i < 9; i++) {
      const cx = r() * w, cyy = h * (0.12 + r() * 0.26), L = w * (0.12 + r() * 0.22);
      const e = h * (0.003 + r() * 0.004);
      const gc = c.createLinearGradient(cx - L, 0, cx + L, 0);
      const al = 0.05 + r() * 0.07;
      gc.addColorStop(0, "rgba(220,130,120,0)");
      gc.addColorStop(0.5, "rgba(226,140,120," + al + ")");
      gc.addColorStop(1, "rgba(220,130,120,0)");
      c.fillStyle = gc;
      c.beginPath();
      c.ellipse(cx, cyy, L, e, (r() - 0.5) * 0.04, 0, Math.PI * 2);
      c.fill();
    }
    c.restore();
    // assombrir le haut pour le titre et le menu
    const gt = c.createLinearGradient(0, 0, 0, h * 0.22);
    gt.addColorStop(0, "rgba(10,6,20,0.45)");
    gt.addColorStop(1, "rgba(10,6,20,0)");
    c.fillStyle = gt;
    c.fillRect(0, 0, w, h * 0.22);
    return { sx, sy, rs };
  }

  function peindreTerre(c, w, h, soleil) {
    const H = h * HOR, m = Math.min(w, h * 1.2);
    const sx = soleil.sx;
    // collines lointaines, voilees par la brume
    const n1 = bruit(11), n2 = bruit(23), n3 = bruit(37);
    function colline(nz, freq, base, amp, col1, col2, top) {
      const g = c.createLinearGradient(0, H - amp - h * 0.01, 0, H + 1);
      g.addColorStop(0, col1);
      g.addColorStop(1, col2);
      c.fillStyle = g;
      c.beginPath();
      c.moveTo(0, H + 2);
      for (let x = 0; x <= w + 4; x += 4) {
        const v = nz(x / w * freq);
        c.lineTo(x, H - base - Math.pow(v, 1.6) * amp - top(x));
      }
      c.lineTo(w, H + 2);
      c.closePath();
      c.fill();
    }
    colline(n1, 3.2, h * 0.004, h * 0.065, "rgba(150,86,98,1)", "rgba(196,120,96,1)", () => 0);
    colline(n2, 5.5, h * 0.002, h * 0.028, "rgba(112,64,82,1)", "rgba(160,96,84,1)", () => 0);
    // rideau d'arbres et buissons sur l'horizon
    const r = graine(97);
    c.fillStyle = "rgba(86,50,64,0.9)";
    c.beginPath();
    for (let x = 0; x < w; x += 2 + r() * 5) {
      const d = n3(x / w * 14);
      if (d < 0.38) continue;
      const hh = h * (0.002 + (d - 0.38) * 0.03) * (0.6 + r() * 0.6);
      const rx = hh * (1.2 + r() * 1.8);
      c.moveTo(x + rx, H - hh * 0.5);
      c.ellipse(x, H - hh * 0.5, rx, hh * 0.7, 0, 0, Math.PI * 2);
    }
    c.fill();
    const nArb = Math.round(4 + w / 90);
    for (let i = 0; i < nArb; i++) {
      const x = r() * w, ta = h * (0.008 + r() * 0.014);
      acacia(c, x, H + 1, ta, "rgba(78,44,58,0.92)", null, 200 + i);
    }
    // sol : degrade chaud vers sombre
    const gs = c.createLinearGradient(0, H, 0, h);
    for (let i = 0; i <= 10; i++) gs.addColorStop(i / 10, rgba(palette(SOL, i / 10), 1));
    c.fillStyle = gs;
    c.fillRect(0, H, w, h - H);
    // chenal de l'Okavango : un fil d'eau qui renvoie le ciel
    const yl = H + h * 0.009;
    c.beginPath();
    const n4 = bruit(53);
    c.moveTo(w * 0.18, yl);
    for (let x = w * 0.18; x <= w * 0.96; x += 6) {
      const e = h * 0.0035 * Math.sin((x - w * 0.18) / (w * 0.78) * Math.PI) * (0.4 + n4(x / w * 8));
      c.lineTo(x, yl - e);
    }
    for (let x = w * 0.96; x >= w * 0.18; x -= 6) {
      const e = h * 0.003 * Math.sin((x - w * 0.18) / (w * 0.78) * Math.PI) * (0.4 + n4(x / w * 8 + 3));
      c.lineTo(x, yl + e);
    }
    c.closePath();
    const ge = c.createLinearGradient(0, 0, w, 0);
    ge.addColorStop(0, "rgba(150,90,100,0.35)");
    ge.addColorStop(0.7, "rgba(236,170,110,0.6)");
    ge.addColorStop(1, "rgba(160,96,96,0.3)");
    c.fillStyle = ge;
    c.fill();
    // plaques d'herbe plus sombres ou plus claires, aplaties par la perspective
    for (let i = 0; i < 70; i++) {
      const u = Math.pow(r(), 1.3);
      const y = H + (h - H) * u, x = r() * w;
      const rx = w * (0.02 + r() * 0.08) * (0.3 + u), ry = rx * (0.06 + u * 0.12);
      c.fillStyle = r() < 0.6 ? "rgba(40,24,16," + (0.05 + u * 0.08) + ")" : "rgba(210,150,90," + (0.03 + (1 - u) * 0.03) + ")";
      c.beginPath();
      c.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
      c.fill();
    }
    // texture d'herbe : des milliers de brins, par bandes de profondeur
    const NB = 14, dens = 0.018;
    c.lineCap = "round";
    for (let b = 0; b < NB; b++) {
      const u0 = Math.pow(b / NB, 1.35), u1 = Math.pow((b + 1) / NB, 1.35), um = (u0 + u1) / 2;
      const y0 = H + (h - H) * u0, y1 = H + (h - H) * u1;
      const n = Math.floor(w * (y1 - y0) * dens * (0.6 + um));
      const base = palette(SOL, um);
      const ecart = 0.07 + um * 0.22;
      const tons = [mel(base, [18, 12, 10], ecart), mel(base, [236, 178, 104], ecart * 0.8), mel(base, [196, 150, 90], ecart * 0.4)];
      for (let tn = 0; tn < 3; tn++) {
        c.strokeStyle = rgba(tons[tn], 0.85);
        c.lineWidth = 0.5 + um * 1.3;
        c.beginPath();
        for (let i = 0; i < n / 3; i++) {
          const x = r() * w, y = y0 + (y1 - y0) * r();
          const uu = (y - H) / (h - H);
          const hb = h * (0.003 + 0.05 * Math.pow(uu, 1.7)) * (0.5 + r());
          const pe = hb * (0.1 + r() * 0.4) * (r() < 0.8 ? 1 : -1);
          c.moveTo(x, y);
          c.quadraticCurveTo(x + pe * 0.2, y - hb * 0.6, x + pe, y - hb);
        }
        c.stroke();
      }
    }
    // lumiere rasante du soleil sur la plaine
    c.save();
    c.globalCompositeOperation = "lighter";
    c.translate(sx, H);
    c.scale(1, 0.18);
    const gl = c.createRadialGradient(0, 0, 0, 0, 0, w * 0.6);
    gl.addColorStop(0, "rgba(255,160,90,0.18)");
    gl.addColorStop(1, "rgba(255,160,90,0)");
    c.fillStyle = gl;
    c.fillRect(-w * 0.6, 0, w * 1.2, w * 0.6);
    c.restore();
    // brume chaude posee sur l'horizon
    const gb = c.createLinearGradient(0, H - h * 0.05, 0, H + h * 0.04);
    gb.addColorStop(0, "rgba(236,150,100,0)");
    gb.addColorStop(0.55, "rgba(236,150,100,0.22)");
    gb.addColorStop(1, "rgba(236,150,100,0)");
    c.fillStyle = gb;
    c.fillRect(0, H - h * 0.05, w, h * 0.09);
    // acacias de moyenne distance, voiles
    const mids = [[0.14, 0.9, 5], [0.36, 0.7, 6], [0.57, 1.0, 7], [0.84, 0.8, 8]];
    for (const [fx, ec, sd] of mids) {
      acacia(c, w * fx, H + h * 0.004, m * 0.032 * ec, "rgba(66,38,46,0.86)", null, 400 + sd);
    }
    // grands acacias sur les bords, en contre-jour
    acacia(c, w * 0.03, h * 0.6, m * 0.13, "rgba(28,17,22,1)", "rgba(240,150,90,0.35)", 911);
    acacia(c, w * 0.975, h * 0.555, m * 0.075, "rgba(38,23,28,1)", "rgba(240,150,90,0.4)", 913);
    // avant-plan : herbes hautes sombres, cailloux dans les coins
    for (let b = 0; b < 3; b++) {
      c.strokeStyle = ["rgba(24,15,11,0.95)", "rgba(52,34,22,0.9)", "rgba(150,104,60,0.6)"][b];
      c.lineWidth = 1.2 + (2 - b) * 0.5;
      c.beginPath();
      const nn = Math.floor(w * 0.35);
      for (let i = 0; i < nn; i++) {
        const x = r() * w, y = h * (0.9 + r() * 0.12);
        const hb = h * (0.03 + r() * 0.06);
        const pe = hb * (0.05 + r() * 0.35);
        c.moveTo(x, y);
        c.quadraticCurveTo(x + pe * 0.2, y - hb * 0.6, x + pe, y - hb);
      }
      c.stroke();
    }
    function caillou(x, y, s) {
      c.fillStyle = "rgba(34,24,20,1)";
      c.beginPath();
      c.ellipse(x, y, s, s * 0.55, 0, Math.PI, 0);
      c.lineTo(x + s, y + 2);
      c.lineTo(x - s, y + 2);
      c.fill();
      c.fillStyle = "rgba(200,130,80,0.18)";
      c.beginPath();
      c.ellipse(x + s * 0.25, y - s * 0.3, s * 0.45, s * 0.14, -0.2, 0, Math.PI * 2);
      c.fill();
    }
    caillou(w * 0.06, h * 0.955, m * 0.03);
    caillou(w * 0.1, h * 0.975, m * 0.018);
    caillou(w * 0.93, h * 0.965, m * 0.024);
    // vignette douce
    const gv = c.createRadialGradient(w * 0.55, h * 0.55, Math.min(w, h) * 0.3, w * 0.5, h * 0.5, Math.hypot(w, h) * 0.62);
    gv.addColorStop(0, "rgba(8,5,12,0)");
    gv.addColorStop(1, "rgba(8,5,12,0.5)");
    c.fillStyle = gv;
    c.fillRect(0, 0, w, h);
    const gbas = c.createLinearGradient(0, h * 0.84, 0, h);
    gbas.addColorStop(0, "rgba(10,6,6,0)");
    gbas.addColorStop(1, "rgba(10,6,6,0.45)");
    c.fillStyle = gbas;
    c.fillRect(0, h * 0.84, w, h * 0.16);
    // grain tres fin contre les aplats
    for (let i = 0; i < (w * h) / 700; i++) {
      c.fillStyle = r() < 0.5 ? "rgba(0,0,0,0.05)" : "rgba(255,220,180,0.03)";
      c.fillRect(r() * w, H + r() * (h - H), 1, 1);
    }
  }

  function creerToile(cw, ch, k) {
    const o = new OffscreenCanvas(Math.max(1, Math.ceil(cw * k)), Math.max(1, Math.ceil(ch * k)));
    const c = o.getContext("2d");
    c.scale(k, k);
    return { o, c };
  }

  // echelle reelle du contexte, pour des couches nettes en haute densite
  let k = 1;
  try {
    const mt = ctx.getTransform && ctx.getTransform();
    if (mt && mt.a) k = Math.min(2, Math.max(1, Math.hypot(mt.a, mt.b)));
  } catch (e) { k = 1; }
  const off = typeof OffscreenCanvas !== "undefined";

  if (cache.w !== w || cache.h !== h || cache.k !== k || !cache.pret) {
    cache.w = w; cache.h = h; cache.k = k; cache.pret = true;
    const r = graine(4242);
    // nuages
    cache.nuages = [];
    for (let i = 0; i < 6; i++) {
      const cw = Math.max(w, h * 1.4) * (0.22 + r() * 0.25), ch = h * (0.06 + r() * 0.04);
      const nu = { cw, ch, seed: 500 + i, x0: r() * (w + cw), y: h * (0.08 + r() * 0.22), v: 0.004 + r() * 0.006, spr: null };
      if (off) {
        const s = creerToile(cw, ch, k);
        peindreNuage(s.c, cw, ch, nu.seed);
        nu.spr = s.o;
      }
      cache.nuages.push(nu);
    }
    // oiseaux lointains
    cache.oiseaux = [];
    for (let i = 0; i < 7; i++) {
      cache.oiseaux.push({ x0: r() * w, y: h * (0.2 + r() * 0.12), v: 0.012 + r() * 0.008, s: 2.5 + r() * 2.5, ph: r() * 6.28 });
    }
    // poussiere dans la lumiere
    const np = 55;
    cache.pous = new Float32Array(np * 5);
    for (let i = 0; i < np; i++) {
      cache.pous.set([w * (0.4 + r() * 0.6), h * (0.3 + r() * 0.55), 0.6 + r() * 1.2, r() * 6.28, 0.004 + r() * 0.008], i * 5);
    }
    // brins animes : deux plans (milieu bas, avant)
    function brins(n, y0, y1, hmin, hmax, seed) {
      const rr = graine(seed), a = new Float32Array(n * 5);
      for (let i = 0; i < n; i++) {
        a.set([rr() * w, y0 + (y1 - y0) * rr(), h * (hmin + (hmax - hmin) * rr()), rr() * 6.28, (rr() * 3) | 0], i * 5);
      }
      return a;
    }
    cache.brinsM = brins(Math.floor(w * 0.16), h * 0.82, h * 0.9, 0.012, 0.03, 61);
    cache.brinsA = brins(Math.floor(w * 0.22), h * 0.9, h * 1.02, 0.035, 0.09, 62);
    if (off) {
      const sc = creerToile(w, h, k);
      cache.soleil = peindreCiel(sc.c, w, h);
      cache.ciel = sc.o;
      const st = creerToile(w, h, k);
      peindreTerre(st.c, w, h, cache.soleil);
      cache.terre = st.o;
      // tache de lumiere pour le vent qui couche l'herbe
      const sh = creerToile(256, 64, 1);
      const gg = sh.c.createRadialGradient(128, 32, 0, 128, 32, 32);
      gg.addColorStop(0, "rgba(240,180,110,1)");
      gg.addColorStop(1, "rgba(240,180,110,0)");
      sh.c.translate(128, 32);
      sh.c.scale(4, 1);
      sh.c.translate(-128, -32);
      sh.c.fillStyle = gg;
      sh.c.fillRect(0, 0, 256, 64);
      cache.lustre = sh.o;
    } else {
      cache.ciel = null;
      cache.terre = null;
      cache.soleil = null;
    }
  }

  const H = h * HOR;
  // 1. ciel
  if (cache.ciel) ctx.drawImage(cache.ciel, 0, 0, w, h);
  else cache.soleil = peindreCiel(ctx, w, h);

  // 2. nuages qui derivent
  for (const nu of cache.nuages) {
    const x = ((nu.x0 + t * nu.v) % (w + nu.cw)) - nu.cw;
    if (nu.spr) ctx.drawImage(nu.spr, x, nu.y, nu.cw, nu.ch);
    else {
      ctx.save();
      ctx.translate(x, nu.y);
      peindreNuage(ctx, nu.cw, nu.ch, nu.seed);
      ctx.restore();
    }
  }

  // 3. oiseaux lointains, battements lents
  ctx.strokeStyle = "rgba(26,16,30,0.75)";
  ctx.lineWidth = 1.1;
  ctx.lineCap = "round";
  ctx.beginPath();
  for (const o of cache.oiseaux) {
    const x = ((o.x0 + t * o.v) % (w + 120)) - 60;
    const y = o.y + Math.sin(t * 0.0004 + o.ph) * h * 0.01;
    const fl = Math.sin(t * 0.007 + o.ph), s = o.s;
    ctx.moveTo(x - s, y - fl * s * 0.6);
    ctx.quadraticCurveTo(x - s * 0.4, y - s * 0.35, x, y);
    ctx.quadraticCurveTo(x + s * 0.4, y - s * 0.35, x + s, y - fl * s * 0.6);
  }
  ctx.stroke();

  // 4. terre, avec la bande d'horizon qui ondule dans la chaleur
  if (cache.terre) {
    const k2 = cache.k, T = cache.terre;
    const ya = Math.floor(H - h * 0.03), yb = Math.ceil(H + h * 0.012);
    ctx.drawImage(T, 0, 0, T.width, ya * k2, 0, 0, w, ya);
    ctx.drawImage(T, 0, yb * k2, T.width, T.height - yb * k2, 0, yb, w, h - yb);
    const pas = 2;
    for (let y = ya; y < yb; y += pas) {
      const d = 1 - Math.abs(y - H) / (h * 0.035);
      const dx = Math.sin(t * 0.0021 + y * 0.9) * 0.9 * d + Math.sin(t * 0.0013 + y * 0.37) * 0.5 * d;
      ctx.drawImage(T, 0, y * k2, T.width, pas * k2, dx, y, w, pas);
    }
  } else {
    peindreTerre(ctx, w, h, cache.soleil);
  }

  // vent : une onde qui traverse la plaine, lustre et brins la suivent
  function vent(x) {
    return Math.sin(t * 0.0006 - x * 0.003) * 0.6 + Math.sin(t * 0.00023 - x * 0.0011 + 1.3) * 0.4;
  }

  // 5. reflets du vent sur l'herbe, tres discrets
  if (cache.lustre) {
    const L = cache.lustre, vit = 0.2, per = w + 1200;
    ctx.globalAlpha = 0.05;
    for (let i = 0; i < 4; i++) {
      const x = ((t * vit + i * per / 4) % per) - 600;
      const y = h * (0.64 + i * 0.055);
      const lw = w * 0.35 * (0.7 + i * 0.15), lh = h * (0.015 + i * 0.008);
      ctx.drawImage(L, x - lw / 2, y - lh / 2, lw, lh);
    }
    ctx.globalAlpha = 1;
  }

  // 6. poussiere doree en suspension
  const P = cache.pous, sxs = cache.soleil ? cache.soleil.sx : w * 0.7;
  const coul = ["rgba(255,214,160,0.16)", "rgba(255,214,160,0.3)", "rgba(255,224,180,0.45)"];
  for (let b = 0; b < 3; b++) {
    ctx.fillStyle = coul[b];
    ctx.beginPath();
    for (let i = b; i < P.length / 5; i += 3) {
      const j = i * 5;
      const y0 = h * 0.3, span = h * 0.55;
      let y = P[j + 1] - t * P[j + 4] * 0.4;
      y = y0 + (((y - y0) % span) + span) % span;
      const x = P[j] + Math.sin(t * 0.0005 + P[j + 3]) * 18 + vent(P[j]) * 6;
      const vis = 0.5 + 0.5 * Math.sin(t * 0.0011 + P[j + 3] * 3);
      const pr = 1 - Math.min(1, Math.abs(x - sxs) / (w * 0.45));
      const s = P[j + 2] * vis * (0.4 + pr);
      if (s < 0.25) continue;
      ctx.moveTo(x + s, y);
      ctx.arc(x, y, s, 0, Math.PI * 2);
    }
    ctx.fill();
  }

  // 7. herbes qui ondulent : plan du milieu bas puis avant-plan
  function dessinerBrins(A, cols, lw, amp) {
    for (let b = 0; b < cols.length; b++) {
      ctx.strokeStyle = cols[b];
      ctx.lineWidth = lw[b];
      ctx.beginPath();
      for (let j = 0; j < A.length; j += 5) {
        if (A[j + 4] !== b) continue;
        const x = A[j], y = A[j + 1], hb = A[j + 2];
        const sw = 0.14 + amp * vent(x) + 0.05 * Math.sin(t * 0.0025 + A[j + 3]);
        const tx = x + hb * sw, ty = y - hb * (1 - sw * sw * 0.35);
        ctx.moveTo(x, y);
        ctx.quadraticCurveTo(x + hb * sw * 0.15, y - hb * 0.55, tx, ty);
      }
      ctx.stroke();
    }
  }
  ctx.lineCap = "round";
  dessinerBrins(cache.brinsM, ["rgba(60,40,26,0.7)", "rgba(120,84,50,0.55)", "rgba(190,136,80,0.4)"], [1, 1, 0.8], 0.16);
  dessinerBrins(cache.brinsA, ["rgba(20,13,10,0.95)", "rgba(46,30,20,0.92)", "rgba(196,134,72,0.55)"], [2, 1.5, 1.1], 0.22);
}

/* ---------------------------------------------------------- banquise */
function decorBanquise(ctx, w, h, t, cache) {
  const HZ = 0.505;   // horizon marin
  const BORD = 0.538; // bord de la banquise
  const TAU = Math.PI * 2;

  // generateur a graine fixe (mulberry32)
  function graine(n) {
    let a = n >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      let z = a;
      z = Math.imul(z ^ (z >>> 15), z | 1);
      z ^= z + Math.imul(z ^ (z >>> 7), z | 61);
      return ((z ^ (z >>> 14)) >>> 0) / 4294967296;
    };
  }

  function toile(lw, lh) {
    if (typeof OffscreenCanvas === "undefined") return null;
    try {
      const o = new OffscreenCanvas(Math.max(1, Math.ceil(lw)), Math.max(1, Math.ceil(lh)));
      const c = o.getContext("2d");
      return c ? { o, c } : null;
    } catch (e) { return null; }
  }

  // un bloc de glace : face a contre-jour, chapeau de neige, lisere rose
  function bloc(c, x, y, s, R, p, fin) {
    const L = s * (1 + R() * 1.1);
    const H = s * (0.4 + R() * 0.9);
    const pente = (R() - 0.5) * 0.7;
    const pts = [
      [x - L / 2, y],
      [x - L / 2 + L * (0.02 + R() * 0.1), y - H * (0.55 + R() * 0.3) * (1 + pente)],
      [x - L / 2 + L * (0.12 + R() * 0.16), y - H * (1 + pente)],
      [x + L / 2 - L * (0.12 + R() * 0.2), y - H * (1 - pente)],
      [x + L / 2 - L * (0.0 + R() * 0.08), y - H * (0.45 + R() * 0.3) * (1 - pente)],
      [x + L / 2, y],
    ];
    const trace = () => { c.beginPath(); pts.forEach((q, i) => (i ? c.lineTo(q[0], q[1]) : c.moveTo(q[0], q[1]))); c.closePath(); };
    c.fillStyle = p.face; trace(); c.fill();
    // facette laterale plus claire, cote couchant
    c.fillStyle = p.flanc;
    c.beginPath();
    c.moveTo(pts[3][0], pts[3][1]); c.lineTo(pts[4][0], pts[4][1]); c.lineTo(pts[5][0], pts[5][1]);
    c.lineTo(pts[3][0] - L * 0.08, y); c.closePath(); c.fill();
    // assombrissement au pied
    c.fillStyle = p.ombre;
    c.beginPath();
    c.moveTo(pts[0][0], y); c.lineTo(pts[1][0], y - H * 0.3); c.lineTo(pts[4][0], y - H * 0.25); c.lineTo(pts[5][0], y);
    c.closePath(); c.fill();
    // croute de neige posee sur l arete du dessus
    const ep = H * (0.06 + R() * 0.05) + 0.6;
    const mx = (pts[2][0] + pts[3][0]) / 2 + (R() - 0.5) * L * 0.15;
    const my = (pts[2][1] + pts[3][1]) / 2 - H * (0.02 + R() * 0.08);
    c.fillStyle = p.face;
    c.beginPath(); c.moveTo(pts[2][0], pts[2][1]); c.lineTo(mx, my); c.lineTo(pts[3][0], pts[3][1]); c.closePath(); c.fill();
    c.fillStyle = p.dessus;
    c.beginPath();
    c.moveTo(pts[2][0] - L * 0.02, pts[2][1] + ep * 0.3);
    c.lineTo(pts[2][0], pts[2][1] - ep * 0.6);
    c.lineTo(mx, my - ep * 0.7);
    c.lineTo(pts[3][0], pts[3][1] - ep * 0.6);
    c.lineTo(pts[3][0] + L * 0.02, pts[3][1] + ep * 0.3);
    c.lineTo(mx, my + ep);
    c.closePath(); c.fill();
    c.strokeStyle = p.lisere;
    c.lineWidth = fin ? 0.6 : 1;
    c.beginPath();
    c.moveTo(pts[2][0], pts[2][1] - ep * 0.6); c.lineTo(mx, my - ep * 0.7); c.lineTo(pts[3][0], pts[3][1] - ep * 0.6);
    c.stroke();
    if (!fin) {
      c.strokeStyle = p.fissure;
      c.lineWidth = 0.8;
      const fx = pts[2][0] + (pts[3][0] - pts[2][0]) * (0.2 + R() * 0.6);
      c.beginPath();
      c.moveTo(fx, Math.max(pts[2][1], pts[3][1]) + ep * 0.6);
      c.lineTo(fx + (R() - 0.5) * L * 0.15, y - H * 0.5);
      c.lineTo(fx + (R() - 0.5) * L * 0.25, y - H * 0.1);
      c.stroke();
    }
    // congere au pied
    c.fillStyle = p.neige;
    c.beginPath();
    c.ellipse(x + L * 0.05, y, L * 0.7, H * 0.22 + 0.6, 0, 0, TAU);
    c.fill();
  }

  // couleur du plateau a une hauteur donnee (pour enterrer les blocs)
  function neigeA(y) {
    const u = Math.max(0, Math.min(1, (y - h * BORD) / (h * (1 - BORD))));
    const A = [[0, 140, 142, 170], [0.15, 116, 124, 156], [0.45, 86, 100, 138], [0.75, 58, 72, 104], [1, 33, 41, 66]];
    for (let i = 1; i < A.length; i++) {
      if (u <= A[i][0]) {
        const k = (u - A[i - 1][0]) / (A[i][0] - A[i - 1][0]);
        const m = j => Math.round(A[i - 1][j] + (A[i][j] - A[i - 1][j]) * k);
        return `rgb(${m(1)},${m(2)},${m(3)})`;
      }
    }
    return "rgb(33,41,66)";
  }

  function peindreFond(c) {
    const R = graine(1979);
    const H = h * HZ, E = h * BORD;
    const SX = w * 0.68; // soleil sous l'horizon

    // ciel
    let g = c.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, "#060b1e");
    g.addColorStop(0.3, "#0c1634");
    g.addColorStop(0.58, "#1e2750");
    g.addColorStop(0.8, "#3e3e68");
    g.addColorStop(0.93, "#6c5a7a");
    g.addColorStop(1, "#94768a");
    c.fillStyle = g;
    c.fillRect(0, 0, w, H + 2);
    // lueur du soleil couche
    c.save();
    c.translate(SX, H);
    c.scale(1, 0.32);
    g = c.createRadialGradient(0, 0, 0, 0, 0, w * 0.6);
    g.addColorStop(0, "rgba(214,150,150,0.38)");
    g.addColorStop(0.4, "rgba(170,110,140,0.14)");
    g.addColorStop(1, "rgba(120,80,130,0)");
    c.fillStyle = g;
    c.fillRect(-w * 1.2, -H / 0.32, w * 2.4, H / 0.32);
    c.restore();

    // etoiles, plus rares vers l'horizon
    for (let i = 0; i < 260; i++) {
      const x = R() * w, y = Math.pow(R(), 1.5) * H * 0.78;
      const a = (1 - y / (H * 0.82)) * (0.18 + 0.55 * R() * R());
      const r = 0.35 + R() * R() * 1.1;
      c.fillStyle = `rgba(222,228,255,${a.toFixed(3)})`;
      c.beginPath(); c.arc(x, y, r, 0, TAU); c.fill();
    }

    // stratus bas, sombres dessus et roses dessous
    for (let i = 0; i < 9; i++) {
      const x = R() * w, y = H * (0.8 + R() * 0.16);
      const rx = w * (0.07 + R() * 0.16), ry = h * (0.0025 + R() * 0.005);
      c.fillStyle = "rgba(52,44,80,0.32)";
      c.beginPath(); c.ellipse(x, y, rx, ry, 0, 0, TAU); c.fill();
      c.fillStyle = "rgba(200,140,150,0.10)";
      c.beginPath(); c.ellipse(x + rx * 0.05, y + ry * 0.7, rx * 0.8, ry * 0.45, 0, 0, TAU); c.fill();
    }

    // cote lointaine : relief bas, par troncons
    c.fillStyle = "rgba(74,70,108,0.85)";
    c.beginPath();
    c.moveTo(0, H + 1);
    const pas = w / 160;
    const crete = [];
    for (let x = 0; x <= w + pas; x += pas) {
      const u = x / w;
      const env = Math.max(0, Math.sin(u * 7.1 + 0.6)) * 0.8 + Math.max(0, Math.sin(u * 3.3 - 1.2)) * 0.5;
      const y = H - h * 0.022 * env * (0.55 + 0.25 * Math.sin(u * 61) + 0.2 * Math.sin(u * 137 + 1)) - R() * h * 0.0012 * env;
      crete.push([x, y]);
      c.lineTo(x, y);
    }
    c.lineTo(w, H + 1);
    c.closePath(); c.fill();
    c.strokeStyle = "rgba(196,160,180,0.35)";
    c.lineWidth = 0.8;
    c.beginPath();
    for (let i = 0; i < crete.length; i++) {
      const p = crete[i];
      if (p[1] > H - 1.5) { c.moveTo(p[0], p[1]); continue; }
      c.lineTo(p[0], p[1]);
    }
    c.stroke();

    // mer calme
    g = c.createLinearGradient(0, H, 0, E + 4);
    g.addColorStop(0, "#6a5c78");
    g.addColorStop(0.25, "#443e5e");
    g.addColorStop(0.6, "#262a46");
    g.addColorStop(1, "#141a30");
    c.fillStyle = g;
    c.fillRect(0, H, w, E - H + 6);
    // traine de lumiere sous le soleil
    c.save();
    c.translate(SX, H);
    c.scale(1, 0.08);
    g = c.createRadialGradient(0, 0, 0, 0, 0, w * 0.3);
    g.addColorStop(0, "rgba(220,160,160,0.22)");
    g.addColorStop(1, "rgba(220,160,160,0)");
    c.fillStyle = g;
    c.fillRect(-w * 0.35, 0, w * 0.7, (E - H) / 0.08);
    c.restore();
    // rides fixes
    for (let i = 0; i < 160; i++) {
      const y = H + (E - H) * Math.pow(R(), 0.8);
      const d = (y - H) / (E - H);
      c.fillStyle = R() < 0.5 ? `rgba(190,160,190,${(0.05 + 0.05 * (1 - d)).toFixed(3)})` : "rgba(8,10,24,0.12)";
      c.fillRect(R() * w, y, w * (0.005 + 0.03 * d) * (0.4 + R()), 0.6 + d * 0.6);
    }
    c.fillStyle = "rgba(230,190,200,0.28)";
    c.fillRect(0, H - 0.5, w, 1);

    // icebergs tabulaires
    const bergs = [
      { x: 0.03, l: 0.11, hh: 0.017 }, { x: 0.24, l: 0.045, hh: 0.011 },
      { x: 0.4, l: 0.15, hh: 0.021 }, { x: 0.61, l: 0.035, hh: 0.009 },
      { x: 0.79, l: 0.08, hh: 0.015 }, { x: 0.93, l: 0.1, hh: 0.019 },
    ];
    for (const b of bergs) {
      const x0 = b.x * w, L = b.l * w, base = H + h * 0.0018, top = base - b.hh * h;
      const lumiereAGauche = x0 + L / 2 > SX;
      // reflet casse en bandes
      for (let k = 0; k < 7; k++) {
        const yy = base + k * b.hh * h * 0.14;
        c.fillStyle = `rgba(160,146,178,${(0.3 * (1 - k / 7)).toFixed(3)})`;
        c.fillRect(x0 + L * 0.02 + (R() - 0.5) * 3, yy, L * (0.96 - R() * 0.06), b.hh * h * 0.08);
      }
      // face
      g = c.createLinearGradient(0, top, 0, base);
      g.addColorStop(0, "#b3a8c2");
      g.addColorStop(1, "#8784a6");
      c.fillStyle = g;
      c.beginPath();
      c.moveTo(x0, base);
      c.lineTo(x0 + L * 0.012, top + b.hh * h * 0.1);
      const n = 14;
      for (let k = 1; k < n; k++) c.lineTo(x0 + L * (k / n), top + (R() - 0.5) * b.hh * h * 0.06);
      c.lineTo(x0 + L * 0.985, top + b.hh * h * 0.08);
      c.lineTo(x0 + L, base);
      c.closePath(); c.fill();
      // flanc a l'ombre
      const fl = L * 0.07;
      c.fillStyle = "rgba(78,80,118,0.85)";
      c.beginPath();
      if (lumiereAGauche) {
        c.moveTo(x0 + L - fl, base); c.lineTo(x0 + L - fl, top + b.hh * h * 0.05);
        c.lineTo(x0 + L * 0.985, top + b.hh * h * 0.08); c.lineTo(x0 + L, base);
      } else {
        c.moveTo(x0, base); c.lineTo(x0 + L * 0.012, top + b.hh * h * 0.1);
        c.lineTo(x0 + fl, top + b.hh * h * 0.05); c.lineTo(x0 + fl, base);
      }
      c.closePath(); c.fill();
      // cannelures verticales
      for (let k = 0; k < L / 6; k++) {
        const xx = x0 + R() * L;
        c.fillStyle = `rgba(80,80,122,${(0.12 + R() * 0.16).toFixed(3)})`;
        c.fillRect(xx, top + b.hh * h * (0.15 + R() * 0.2), 0.8, b.hh * h * (0.4 + R() * 0.45));
      }
      c.fillStyle = "rgba(226,206,222,0.55)";
      c.fillRect(x0 + L * 0.02, top - 0.5, L * 0.96, 1);
      c.fillStyle = "rgba(24,24,48,0.55)";
      c.fillRect(x0, base - 0.5, L, 1);
    }

    // glacons sur la mer
    for (let i = 0; i < 70; i++) {
      const y = H + (E - H) * (0.12 + 0.88 * Math.pow(R(), 0.7));
      const d = (y - H) / (E - H);
      const rx = w * (0.0015 + 0.009 * d) * (0.4 + R());
      const ry = rx * (0.14 + R() * 0.08);
      const x = R() * w;
      c.fillStyle = "rgba(12,14,30,0.4)";
      c.beginPath(); c.ellipse(x + rx * 0.08, y + ry * 0.8, rx, ry * 0.7, 0, 0, TAU); c.fill();
      c.fillStyle = `rgba(${150 + Math.round(R() * 20)},${148 + Math.round(R() * 16)},${178 + Math.round(R() * 14)},0.85)`;
      c.beginPath();
      for (let k = 0; k < 7; k++) {
        const an = (k / 7) * TAU, q = 0.75 + R() * 0.35;
        const px = x + Math.cos(an) * rx * q, py = y + Math.sin(an) * ry * q;
        if (k === 0) c.moveTo(px, py); else c.lineTo(px, py);
      }
      c.closePath(); c.fill();
    }

    // plateau de glace
    const bord = [];
    for (let i = 0; i <= 111; i++) {
      const x = -4 + (i / 111) * (w + 12);
      bord.push([x, E + (R() - 0.5) * h * 0.0035 + Math.sin(x * 0.013) * h * 0.0018 + Math.sin(x * 0.0041 + 1) * h * 0.0022]);
    }
    const chemin = () => {
      c.beginPath();
      c.moveTo(-4, h + 2);
      for (const p of bord) c.lineTo(p[0], p[1]);
      c.lineTo(w + 8, h + 2);
      c.closePath();
    };
    // ombre portee du bord dans l'eau
    c.fillStyle = "rgba(10,12,28,0.55)";
    c.beginPath();
    c.moveTo(-4, h);
    for (const p of bord) c.lineTo(p[0], p[1] - 1.6);
    c.lineTo(w + 8, h);
    c.closePath(); c.fill();
    g = c.createLinearGradient(0, E - 3, 0, h);
    g.addColorStop(0, "rgb(140,142,170)");
    g.addColorStop(0.15, "rgb(116,124,156)");
    g.addColorStop(0.45, "rgb(86,100,138)");
    g.addColorStop(0.75, "rgb(58,72,104)");
    g.addColorStop(1, "rgb(33,41,66)");
    c.fillStyle = g;
    chemin(); c.fill();
    c.save();
    chemin(); c.clip();
    // lumiere rasante venue du couchant
    c.save();
    c.translate(SX, E);
    c.scale(1, 0.22);
    g = c.createRadialGradient(0, 0, 0, 0, 0, w * 0.55);
    g.addColorStop(0, "rgba(214,160,170,0.2)");
    g.addColorStop(0.5, "rgba(170,130,160,0.07)");
    g.addColorStop(1, "rgba(170,130,160,0)");
    c.fillStyle = g;
    c.fillRect(-w * 1.2, 0, w * 2.4, (h - E) / 0.22);
    c.restore();
    // grandes plages d'ombre et de lumiere, tres douces
    for (let i = 0; i < 18; i++) {
      const y = E + (h - E) * (0.08 + 0.92 * R());
      const d = (y - h * HZ) / (h - h * HZ);
      const rx = w * (0.1 + 0.25 * R()), fl = 0.08 + 0.1 * d;
      const clair = R() < 0.45;
      c.save();
      c.translate(R() * w, y);
      c.scale(1, fl);
      g = c.createRadialGradient(0, 0, 0, 0, 0, rx);
      g.addColorStop(0, clair ? "rgba(196,200,230,0.07)" : "rgba(18,26,58,0.12)");
      g.addColorStop(1, clair ? "rgba(196,200,230,0)" : "rgba(18,26,58,0)");
      c.fillStyle = g;
      c.fillRect(-rx, -rx, rx * 2, rx * 2);
      c.restore();
    }
    // ondulations de congeres
    for (let i = 0; i < 26; i++) {
      const y = E + (h - E) * (0.05 + 0.95 * Math.pow(R(), 1.3));
      const d = (y - h * HZ) / (h - h * HZ);
      const rx = w * (0.06 + 0.18 * R()) * (0.4 + d), ry = h * 0.02 * d * (0.5 + R());
      const x = R() * w;
      const k = y < h * 0.8 ? 0.6 : 1;
      c.fillStyle = `rgba(205,210,235,${(0.04 * k).toFixed(3)})`;
      c.beginPath(); c.ellipse(x, y, rx, ry, 0, Math.PI, TAU); c.fill();
      c.fillStyle = `rgba(16,22,48,${(0.06 * k).toFixed(3)})`;
      c.beginPath(); c.ellipse(x + rx * 0.1, y, rx * 0.9, ry * 0.5, 0, 0, Math.PI); c.fill();
    }
    // sastrugi : stries de vent claires et leur ombre
    for (let i = 0; i < 1300; i++) {
      const y = E + (h - E) * Math.pow(R(), 1.7);
      const d = (y - h * HZ) / (h - h * HZ);
      const len = w * (0.003 + 0.028 * d) * (0.35 + R());
      const th = Math.max(0.45, 2.4 * d * (0.5 + R() * 0.7));
      let a = 0.05 + 0.1 * d;
      if (y < h * 0.8) a *= 0.5;
      const x = R() * w;
      const inc = (R() - 0.5) * 0.06;
      c.fillStyle = `rgba(214,218,242,${a.toFixed(3)})`;
      c.beginPath(); c.ellipse(x, y, len / 2, th / 2, inc, 0, TAU); c.fill();
      c.fillStyle = `rgba(16,22,50,${(a * 1.3).toFixed(3)})`;
      c.beginPath(); c.ellipse(x + len * 0.04, y + th * 0.9, len * 0.45, th * 0.45, inc, 0, TAU); c.fill();
    }
    c.restore();
    // lisere du bord, touche par le couchant
    c.strokeStyle = "rgba(222,196,214,0.55)";
    c.lineWidth = 1;
    c.beginPath();
    bord.forEach((p, i) => (i ? c.lineTo(p[0], p[1]) : c.moveTo(p[0], p[1])));
    c.stroke();

    // cretes de pression lointaines, peu contrastees
    const loin = { face: "rgb(100,106,142)", flanc: "rgba(150,140,172,0.6)", ombre: "rgba(80,88,124,0.6)", dessus: "rgb(152,152,182)", lisere: "rgba(226,200,214,0.5)", fissure: "rgba(70,76,110,0.6)" };
    const cretes = [
      { y: 0.551, x0: -0.02, x1: 0.56, n: 170, s: 0.0065 },
      { y: 0.566, x0: 0.46, x1: 1.03, n: 150, s: 0.009 },
    ];
    const blocs = [];
    for (const cr of cretes) {
      for (let i = 0; i < cr.n; i++) {
        const u = (i + R() * 0.8) / cr.n;
        const x = w * (cr.x0 + (cr.x1 - cr.x0) * u);
        const env = Math.pow(Math.sin(Math.PI * u), 0.6) * (0.65 + 0.35 * Math.sin(u * 17 + cr.y * 80));
        const y = h * (cr.y + Math.sin(u * 6 + cr.y * 50) * 0.0035 + (R() - 0.5) * 0.0016);
        blocs.push({ x, y, s: h * cr.s * (0.3 + env * 0.9) * (0.7 + R() * 0.5) });
      }
    }
    // ombre douce qui ancre les cretes
    for (const b of blocs) {
      c.fillStyle = "rgba(40,48,86,0.05)";
      c.beginPath(); c.ellipse(b.x, b.y + b.s * 0.2, b.s * 2.4, b.s * 0.5, 0, 0, TAU); c.fill();
    }
    blocs.sort((a, b) => a.y - b.y);
    for (const b of blocs) {
      loin.neige = neigeA(b.y);
      bloc(c, b.x, b.y, b.s, R, loin, true);
    }

    // crete d'avant-plan, tout en bas et sur les bords
    const pres = { face: "#333e5e", flanc: "rgba(120,112,150,0.55)", ombre: "rgba(20,26,48,0.5)", dessus: "#7a82a4", lisere: "rgba(236,202,214,0.6)", fissure: "rgba(18,22,40,0.7)" };
    const av = [];
    for (let i = 0; i < 70; i++) {
      const u = R();
      const bordx = Math.abs(u - 0.5) * 2; // 0 au centre, 1 aux bords
      if (R() > 0.25 + bordx * 0.9) continue;
      const x = u * w;
      const y = h * (0.95 + Math.sin(u * 7) * 0.02 + R() * 0.05) - bordx * h * 0.03;
      av.push({ x, y, s: h * (0.014 + 0.03 * R()) * (0.6 + bordx * 0.8) });
    }
    // amas des coins
    for (let i = 0; i < 16; i++) {
      const gauche = i % 2 === 0;
      const x = gauche ? R() * w * 0.07 : w - R() * w * 0.07;
      av.push({ x, y: h * (0.84 + R() * 0.16), s: h * (0.02 + R() * 0.03) });
    }
    av.sort((a, b) => a.y - b.y);
    for (const b of av) {
      pres.neige = neigeA(b.y);
      bloc(c, b.x, b.y, b.s, R, pres, false);
    }

    // vignettage
    const m = Math.max(w, h);
    g = c.createRadialGradient(w * 0.5, h * 0.48, m * 0.3, w * 0.5, h * 0.48, m * 0.85);
    g.addColorStop(0, "rgba(3,5,16,0)");
    g.addColorStop(1, "rgba(3,5,16,0.55)");
    c.fillStyle = g;
    c.fillRect(0, 0, w, h);
  }

  function preparerAnim() {
    const R = graine(4242);
    const A = { rideaux: [], reflets: [], volutes: [], grains: [], scint: [] };
    A.rideaux.push({ x0: 0.22, x1: 1.05, yb: 0.3, amp: 0.035, haut: 0.2, alpha: 0.42, ph: 0.4, v: 1 });
    A.rideaux.push({ x0: 0.38, x1: 0.92, yb: 0.2, amp: 0.028, haut: 0.13, alpha: 0.2, ph: 2.1, v: -0.7 });
    for (let i = 0; i < 60; i++) {
      const u = Math.pow(R(), 0.8);
      A.reflets.push({ x: R(), u, l: (0.004 + 0.02 * u) * (0.4 + R()), ph: R() * TAU, v: 0.0006 + R() * 0.0012 });
    }
    for (let i = 0; i < 18; i++) {
      const bas = i < 11;
      const y = bas ? 0.84 + R() * 0.15 : 0.62 + R() * 0.18;
      const d = (y - HZ) / (1 - HZ);
      A.volutes.push({ x: R(), y, d, l: (0.25 + R() * 0.35) * (0.5 + d), e: (0.008 + R() * 0.012) * d, a: bas ? 0.1 + R() * 0.08 : 0.035 + R() * 0.03, v: 0.012 + 0.03 * d * (0.6 + R() * 0.8), ph: R() * TAU });
    }
    for (let i = 0; i < 64; i++) {
      const y = 0.8 + R() * 0.2;
      const d = (y - HZ) / (1 - HZ);
      A.grains.push({ x: R(), y, d, v: (0.08 + R() * 0.12) * d, ph: R() * TAU, a: 0.18 + R() * 0.3 });
    }
    for (let i = 0; i < 16; i++) A.scint.push({ x: R(), y: Math.pow(R(), 1.4) * 0.3, ph: R() * TAU, v: 0.001 + R() * 0.002, r: 0.6 + R() * 0.7 });
    return A;
  }

  // ------------------------------------------------ cache
  let s = 1;
  try {
    const m = ctx.getTransform && ctx.getTransform();
    if (m && m.a) s = Math.min(2, Math.max(1, m.a));
  } catch (e) { s = 1; }
  const cle = w + "x" + h + "@" + s;
  if (cache.cle !== cle) {
    cache.cle = cle;
    cache.anim = preparerAnim();
    cache.fond = null;
    const f = toile(w * s, h * s);
    if (f) {
      f.c.setTransform(s, 0, 0, s, 0, 0);
      peindreFond(f.c);
      cache.fond = f.o;
    }
    if (!cache.rayon) {
      const r = toile(4, 256);
      if (r) {
        const g = r.c.createLinearGradient(0, 0, 0, 256);
        g.addColorStop(0, "rgba(150,90,200,0)");
        g.addColorStop(0.3, "rgba(110,110,210,0.14)");
        g.addColorStop(0.62, "rgba(60,200,150,0.45)");
        g.addColorStop(0.9, "rgba(90,245,165,0.95)");
        g.addColorStop(0.965, "rgba(150,255,190,1)");
        g.addColorStop(1, "rgba(120,255,180,0)");
        r.c.fillStyle = g;
        r.c.fillRect(0, 0, 4, 256);
        cache.rayon = r.o;
      }
      const v = toile(256, 32);
      if (v) {
        v.c.translate(128, 16);
        v.c.scale(1, 0.125);
        const g = v.c.createRadialGradient(0, 0, 0, 0, 0, 128);
        g.addColorStop(0, "rgba(215,225,248,1)");
        g.addColorStop(0.5, "rgba(200,212,240,0.45)");
        g.addColorStop(1, "rgba(200,212,240,0)");
        v.c.fillStyle = g;
        v.c.fillRect(-128, -128, 256, 256);
        cache.volute = v.o;
      }
    }
  }
  const A = cache.anim;
  if (cache.rayon && cache.cleAurore !== cle) {
    cache.cleAurore = cle;
    cache.aurores = A.rideaux.map(r => {
      const xa = r.x0 * w, xb = r.x1 * w, hT = h * r.haut * 1.35, q = 0.6;
      const v = [0, 41000].map(tt => {
        const T = toile((xb - xa) * q, hT * q);
        if (!T) return null;
        T.c.scale(q, q);
        T.c.globalCompositeOperation = "lighter";
        const base = hT - h * r.haut * 0.1;
        for (let passe = 0; passe < 2; passe++) {
          const pasA = passe ? Math.max(2.5, w / 520) : Math.max(12, w / 90);
          const larg = passe ? pasA * 1.8 : pasA * 2.2;
          for (let x = xa; x < xb; x += pasA) {
            const u = (x - xa) / (xb - xa);
            const X = (x / w) * 1600;
            const env = Math.pow(Math.sin(Math.PI * u), 1.4);
            const hh = h * r.haut * (0.75 + 0.25 * Math.sin(X * 0.009 + tt * 0.0003 + r.ph));
            const ray = 0.5 + 0.5 * Math.sin(X * 0.043 + tt * 0.00035 + Math.sin(X * 0.011 + tt * 0.0001) * 2.2) * Math.sin(X * 0.0171 - tt * 0.00021);
            const al = passe ? r.alpha * env * (0.2 + 0.8 * ray * ray) * 0.6 : r.alpha * env * 0.1;
            if (al < 0.006) continue;
            T.c.globalAlpha = Math.min(1, al);
            const hp = passe ? hh : hh * 1.35;
            T.c.drawImage(cache.rayon, x - xa - larg / 2, base - hp + (passe ? 0 : hh * 0.1), larg, hp);
          }
        }
        // une ImageBitmap se decoupe plus vite qu une toile
        try { if (T.o.transferToImageBitmap) return T.o.transferToImageBitmap(); } catch (e) { /* on garde la toile */ }
        return T.o;
      });
      return v[0] && v[1] ? { a: v[0], b: v[1] } : null;
    });
  }

  // ------------------------------------------------ fond
  if (cache.fond) ctx.drawImage(cache.fond, 0, 0, w, h);
  else peindreFond(ctx);

  ctx.save();
  // etoiles qui scintillent
  ctx.fillStyle = "rgb(232,236,255)";
  for (const e of A.scint) {
    ctx.globalAlpha = 0.25 + 0.45 * Math.max(0, Math.sin(t * e.v + e.ph));
    ctx.fillRect(e.x * w, e.y * h, e.r, e.r);
  }

  // aurore australe : rideaux precalcules, decoupes en tranches qui ondulent
  ctx.globalCompositeOperation = "lighter";
  let M = null;
  try { const q = ctx.getTransform && ctx.getTransform(); if (q && typeof q.a === "number") M = q; } catch (e) { M = null; }
  for (let ri = 0; ri < A.rideaux.length; ri++) {
    const r = A.rideaux[ri];
    const NT = ri ? 24 : 40;
    const xa = r.x0 * w, xb = r.x1 * w, lt = (xb - xa) / NT;
    const tex = cache.aurores && cache.aurores[ri];
    const hT = h * r.haut * 1.35;
    // ligne basse du rideau, continue d'une tranche a l'autre
    const ligne = x => {
      const X = (x / w) * 1600;
      return h * (r.yb + r.amp * (Math.sin(X * 0.0021 + t * 0.00011 * r.v + r.ph) + 0.45 * Math.sin(X * 0.0063 - t * 0.00019 + r.ph * 2)));
    };
    let b0 = ligne(xa);
    for (let j = 0; j < NT; j++) {
      const u = (j + 0.5) / NT;
      const x = xa + j * lt;
      const X = ((x + lt / 2) / w) * 1600;
      const b1 = ligne(x + lt);
      const base = b0;
      const pente = (b1 - b0) / lt;
      b0 = b1;
      const k = 0.8 + 0.2 * Math.sin(X * 0.0005 + t * 0.00013 + r.ph);
      const pulse = 0.78 + 0.22 * Math.sin(t * 0.0004 + X * 0.002);
      const m = 0.5 + 0.5 * Math.sin(t * 0.00045 * r.v + u * 7 + r.ph);
      const hd = hT * k;
      if (tex) {
        const sw = tex.a.width / NT;
        const y0 = base - hd + h * r.haut * 0.1;
        // cisaillement vertical : la tranche suit la pente, sans marche
        if (M) { ctx.setTransform(M); ctx.transform(1, pente, 0, 1, x, 0); } else ctx.translate(x, 0);
        ctx.globalAlpha = pulse * m;
        ctx.drawImage(tex.a, j * sw, 0, sw, tex.a.height, 0, y0, lt + 0.8, hd);
        ctx.globalAlpha = pulse * (1 - m);
        ctx.drawImage(tex.b, j * sw, 0, sw, tex.b.height, 0, y0, lt + 0.8, hd);
        if (M) ctx.setTransform(M); else ctx.translate(-x, 0);
      } else {
        ctx.globalAlpha = r.alpha * Math.sin(Math.PI * u) * pulse * 0.5;
        ctx.fillStyle = "rgb(70,220,150)";
        ctx.fillRect(x, base - hd * 0.4, lt + 0.8, hd * 0.4);
      }
    }
  }
  // la mer rend un peu du vert de l'aurore
  const H = h * HZ, E = h * BORD;
  ctx.globalAlpha = 0.05 + 0.025 * Math.sin(t * 0.0003);
  ctx.fillStyle = "rgb(60,200,140)";
  ctx.fillRect(w * 0.3, H + 1, w * 0.65, (E - H) * 0.55);

  // scintillements sur l'eau
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "rgb(236,204,218)";
  for (const f of A.reflets) {
    const k = Math.sin(t * f.v + f.ph);
    if (k <= 0.2) continue;
    ctx.globalAlpha = (k - 0.2) * (0.5 - 0.25 * f.u);
    const y = H + 1.5 + (E - H - 4) * f.u;
    ctx.fillRect(f.x * w + Math.sin(t * 0.0004 + f.ph) * 3, y, f.l * w, 0.7 + f.u * 0.5);
  }

  // neige soufflee au ras du sol
  for (const v of A.volutes) {
    const L = v.l * w, P = w + L * 2;
    const x = ((v.x * P + t * v.v) % P) - L;
    const y = v.y * h + Math.sin(t * 0.0006 + v.ph) * 2;
    const e = Math.max(3, v.e * h);
    ctx.globalAlpha = v.a * (0.7 + 0.3 * Math.sin(t * 0.0009 + v.ph));
    if (cache.volute) ctx.drawImage(cache.volute, x, y - e / 2, L, e);
    else { ctx.fillStyle = "rgb(210,220,245)"; ctx.fillRect(x, y - e / 4, L, e / 2); }
  }
  ctx.fillStyle = "rgb(225,232,250)";
  for (const g of A.grains) {
    const P = w + 40;
    const x = ((g.x * P + t * g.v) % P) - 20;
    const y = g.y * h + Math.sin(t * 0.003 + g.ph) * 3 * g.d;
    ctx.globalAlpha = g.a;
    ctx.fillRect(x, y, 2 + 5 * g.d, 0.6 + 0.8 * g.d);
  }
  ctx.restore();
}

/* ------------------------------------------------------------- foret */
function decorForet(ctx, w, h, t, cache) {
  const PI2 = Math.PI * 2;
  const HOR = h * 0.52; // horizon : pied des troncs les plus lointains
  const u = Math.max(w, h * 0.8) / 1600; // echelle des details
  const SX = w * 0.78, SY = -h * 0.12; // source de lumiere, haut droite

  // generateur a graine fixe
  function rng(graine) {
    let a = graine >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) | 0;
      let r = Math.imul(a ^ (a >>> 15), 1 | a);
      r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }
  function toile(W, H) {
    if (typeof OffscreenCanvas === "undefined") return null;
    try {
      const c = new OffscreenCanvas(Math.max(1, Math.ceil(W)), Math.max(1, Math.ceil(H)));
      const x = c.getContext("2d");
      return x ? { c, x } : null;
    } catch (e) { return null; }
  }
  // flou : on dessine net dans une couche, puis on la floute en une seule fois
  let pile = null;
  function flou(c, px) {
    if (px > 0 && c.canvas && typeof OffscreenCanvas !== "undefined" && "filter" in c) {
      const tmp = toile(c.canvas.width, c.canvas.height);
      if (tmp) {
        const m = c.getTransform();
        tmp.x.setTransform(m.a, m.b, m.c, m.d, m.e, m.f);
        pile = { c, tmp, px: px * m.a };
        return tmp.x;
      }
    }
    pile = null;
    return c;
  }
  function finFlou() {
    if (!pile) return;
    const c = pile.c;
    c.save();
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.filter = "blur(" + pile.px + "px)";
    c.drawImage(pile.tmp.c, 0, 0);
    c.restore();
    pile = null;
  }

  // un tronc de hetre : lisse, gris, evase a la base, eclaire a droite
  function tronc(c, R, x, base, larg, lean, teinte, detail) {
    const top = -h * 0.05, n = 14, g = [];
    const ph = R() * 10;
    for (let i = 0; i <= n; i++) {
      const f = i / n, y = base + (top - base) * f;
      const cx = x + lean * (base - y) + Math.sin(f * 3.2 + ph) * larg * 0.12;
      const d = base - y;
      const lw = larg * (1 - 0.22 * f) + larg * 0.9 * Math.exp(-d / (larg * 0.9));
      g.push([cx, y, lw * 0.5]);
    }
    const gr = c.createLinearGradient(x - larg, 0, x + larg, 0);
    gr.addColorStop(0, teinte[0]);
    gr.addColorStop(0.45, teinte[1]);
    gr.addColorStop(0.78, teinte[2]);
    gr.addColorStop(1, teinte[0]);
    c.fillStyle = gr;
    c.beginPath();
    c.moveTo(g[0][0] - g[0][2], g[0][1]);
    for (const p of g) c.lineTo(p[0] - p[2], p[1]);
    for (let i = g.length - 1; i >= 0; i--) c.lineTo(g[i][0] + g[i][2], g[i][1]);
    c.closePath();
    c.fill();
    // branches qui montent en V, typiques du hetre
    if (detail > 0) {
      const nb = 1 + Math.floor(R() * 2);
      for (let b = 0; b < nb; b++) {
        const k = 9 + Math.floor(R() * 4), p = g[k];
        const cote = R() < 0.5 ? -1 : 1;
        const lb = larg * (detail > 1 ? 0.14 + R() * 0.08 : 0.3 + R() * 0.15);
        c.strokeStyle = teinte[1];
        c.lineCap = "round";
        c.lineWidth = lb;
        c.beginPath();
        c.moveTo(p[0], p[1]);
        const ex = detail > 1 ? 0.6 + R() * 0.5 : 2.5 + R() * 2;
        c.quadraticCurveTo(p[0] + cote * larg * ex * 0.4, p[1] - h * 0.08, p[0] + cote * larg * ex, -h * 0.06);
        c.stroke();
      }
    }
    // rides horizontales et lichens pales
    if (detail > 1) {
      const nr = Math.floor((base - top) / (larg * 0.7));
      for (let i = 0; i < nr; i++) {
        const f = R(), idx = Math.min(n, Math.floor(f * n)), p = g[idx];
        const y = base + (top - base) * f;
        c.strokeStyle = "rgba(20,22,20," + (0.08 + R() * 0.12) + ")";
        c.lineWidth = Math.max(0.6, larg * 0.03);
        c.beginPath();
        const dx = p[2] * (0.3 + R() * 0.6);
        c.moveTo(p[0] - dx, y);
        c.quadraticCurveTo(p[0], y - larg * 0.05, p[0] - dx + dx * (0.6 + R()), y + larg * 0.02);
        c.stroke();
        if (R() < 0.5) {
          c.fillStyle = "rgba(150,165,140," + (0.05 + R() * 0.1) + ")";
          c.beginPath();
          c.ellipse(p[0] + (R() - 0.5) * p[2] * 1.4, y, larg * (0.05 + R() * 0.12), larg * (0.03 + R() * 0.06), 0, 0, PI2);
          c.fill();
        }
      }
      // mousse a la base
      for (let i = 0; i < 40; i++) {
        const a = R();
        c.fillStyle = "rgba(" + (52 + a * 30 | 0) + "," + (66 + a * 30 | 0) + ",30," + (0.25 + R() * 0.4) + ")";
        c.beginPath();
        c.ellipse(g[0][0] + (R() - 0.5) * g[0][2] * 2.2, base - R() * larg * 0.9, larg * (0.06 + R() * 0.12), larg * (0.03 + R() * 0.06), 0, 0, PI2);
        c.fill();
      }
    }
  }

  // une fronde de fougere
  function fronde(c, R, x, y, L, ang, coul, a) {
    const n = 16;
    c.strokeStyle = coul;
    c.fillStyle = coul;
    c.globalAlpha = a;
    c.lineWidth = Math.max(0.7, L * 0.012);
    let px = x, py = y, dir = ang;
    const courbe = (R() - 0.5) * 0.08 + (Math.cos(ang) > 0 ? 0.045 : -0.045);
    c.beginPath();
    c.moveTo(px, py);
    const pts = [];
    for (let i = 1; i <= n; i++) {
      dir += courbe;
      px += Math.cos(dir) * L / n;
      py += Math.sin(dir) * L / n;
      c.lineTo(px, py);
      pts.push([px, py, dir, i / n]);
    }
    c.stroke();
    for (const p of pts) {
      const lp = L * 0.2 * Math.sin(Math.PI * Math.min(1, p[3] * 1.1)) + 0.5;
      for (const s of [-1, 1]) {
        const d = p[2] + s * 1.1;
        c.beginPath();
        c.ellipse(p[0] + Math.cos(d) * lp * 0.5, p[1] + Math.sin(d) * lp * 0.5, lp * 0.5, lp * 0.13, d, 0, PI2);
        c.fill();
      }
    }
    c.globalAlpha = 1;
  }
  function touffe(c, R, x, y, L, coul, a) {
    const nf = 5 + Math.floor(R() * 4);
    for (let i = 0; i < nf; i++) {
      const ang = -Math.PI / 2 + (i / (nf - 1) - 0.5) * 2.6 + (R() - 0.5) * 0.3;
      fronde(c, R, x, y, L * (0.7 + R() * 0.4), ang, coul, a);
    }
  }

  // la scene fixe
  function peindre(c) {
    let d = c;
    const R = rng(4242);
    // ciel de sous-bois, lueur chaude au loin
    const gc = c.createLinearGradient(0, 0, 0, HOR);
    gc.addColorStop(0, "#161c1c");
    gc.addColorStop(0.4, "#27302d");
    gc.addColorStop(0.8, "#4b4a3e");
    gc.addColorStop(1, "#5e5444");
    c.fillStyle = gc;
    c.fillRect(0, 0, w, HOR + 2);
    const gl = c.createRadialGradient(w * 0.66, HOR * 0.78, 0, w * 0.66, HOR * 0.78, Math.max(w, h) * 0.55);
    gl.addColorStop(0, "rgba(160,120,80,0.38)");
    gl.addColorStop(0.5, "rgba(120,95,70,0.12)");
    gl.addColorStop(1, "rgba(120,95,70,0)");
    c.fillStyle = gl;
    c.fillRect(0, 0, w, HOR + 2);

    // feuillage lointain, brumeux
    d = flou(c, 6 * u + 2);
    for (let i = 0; i < 260 * (w / 1600 + 0.3); i++) {
      const x = R() * w, y = Math.pow(R(), 1.6) * h * 0.34;
      const l = 0.15 + R() * 0.2;
      d.fillStyle = "rgba(" + (40 + l * 60 | 0) + "," + (48 + l * 55 | 0) + "," + (36 + l * 35 | 0) + ",0.35)";
      d.beginPath();
      d.ellipse(x, y, (30 + R() * 60) * u, (18 + R() * 30) * u, R() * 3, 0, PI2);
      d.fill();
    }
    finFlou();

    // trois plans de troncs, du plus lointain au plus proche
    const plans = [
      { n: 46, l: [3, 6], base: HOR, flou: 2.2, t: ["#5a5b53", "#6c6c62", "#7c7768"], d: 0 },
      { n: 26, l: [7, 12], base: HOR + h * 0.014, flou: 1.2, t: ["#454842", "#585a53", "#6f6a5d"], d: 1 },
      { n: 12, l: [14, 24], base: HOR + h * 0.038, flou: 0.4, t: ["#33362f", "#4a4c46", "#686455"], d: 2 },
    ];
    let solPeint = false;
    for (const p of plans) {
      if (!solPeint && p.d === 1) {
        peindreSol(c, R);
        solPeint = true;
      }
      d = flou(c, p.flou * u + (p.d === 0 ? 0.8 : 0));
      const nn = Math.max(6, Math.round(p.n * (0.45 + 0.55 * w / 1600)));
      for (let i = 0; i < nn; i++) {
        let x = ((i + 0.2 + R() * 0.6) / nn) * w;
        let larg = (p.l[0] + R() * (p.l[1] - p.l[0])) * u * (w < 600 ? 1.3 : 1);
        // le plan le plus proche fuit le centre, la ou vivent les animaux
        if (p.d === 2 && x > w * 0.3 && x < w * 0.7) { larg *= 0.6; if (R() < 0.5) continue; }
        tronc(d, R, x, p.base + (R() - 0.5) * h * 0.008 * (p.d + 1), larg, (R() - 0.5) * 0.04, p.t, p.d);
      }
      finFlou();
      // voile de brume entre les plans
      const gv = c.createLinearGradient(0, 0, 0, HOR + h * 0.02);
      gv.addColorStop(0, "rgba(70,72,64,0.05)");
      gv.addColorStop(0.7, "rgba(98,92,76,0.22)");
      gv.addColorStop(1, "rgba(98,92,76,0.3)");
      c.fillStyle = gv;
      c.fillRect(0, 0, w, HOR + h * 0.02);
    }

    // canopee proche : touches sombres et bronze en haut du cadre
    d = flou(c, 0.8 * u);
    for (let i = 0; i < 2600 * (w / 1600 + 0.25); i++) {
      const x = R() * w, y = Math.pow(R(), 2.4) * h * 0.24 - h * 0.02;
      const vers = Math.max(0, 1 - Math.hypot(x - SX, y - SY) / (w * 0.9));
      const l = R();
      const r = 30 + l * 20 + vers * 70, g = 34 + l * 18 + vers * 44, b = 22 + l * 8 + vers * 16;
      d.fillStyle = "rgba(" + (r | 0) + "," + (g | 0) + "," + (b | 0) + "," + (0.35 + R() * 0.45) + ")";
      d.beginPath();
      d.ellipse(x, y, (2.5 + R() * 5) * u * 1.3, (1.2 + R() * 2.4) * u * 1.3, R() * 3, 0, PI2);
      d.fill();
    }
    finFlou();

    // brume basse fixe sur l'horizon
    const gb = c.createLinearGradient(0, HOR - h * 0.08, 0, HOR + h * 0.05);
    gb.addColorStop(0, "rgba(120,112,94,0)");
    gb.addColorStop(0.5, "rgba(120,112,94,0.2)");
    gb.addColorStop(1, "rgba(120,112,94,0)");
    c.fillStyle = gb;
    c.fillRect(0, HOR - h * 0.07, w, h * 0.16);

    // grands troncs proches, coupes par le cadre
    const proches = [
      { x: -w * 0.012, l: Math.max(34, w * 0.07), base: h * 1.02, lean: 0.015 },
      { x: w * 0.1, l: Math.max(14, w * 0.024), base: h * 0.9, lean: -0.01 },
      { x: w * 0.975, l: Math.max(40, w * 0.085), base: h * 1.04, lean: -0.02 },
      { x: w * 0.885, l: Math.max(12, w * 0.02), base: h * 0.88, lean: 0.012 },
    ];
    for (const p of proches) {
      tronc(c, R, p.x, p.base, p.l, p.lean, ["#1c1e1b", "#34372f", "#5c5a4c"], 2);
    }

    // fougeres de premier plan, tout en bas
    d = flou(c, 1.2 * u);
    for (let i = 0; i < 7 + w / 160; i++) {
      const x = R() * w;
      const bord = Math.min(x, w - x) / w;
      if (bord > 0.28 && R() < 0.75) continue;
      touffe(d, R, x, h * (1.0 + R() * 0.04), h * (0.1 + R() * 0.07) * (bord < 0.2 ? 1.3 : 0.8), R() < 0.5 ? "#2c3d1e" : "#374726", 0.95);
    }
    finFlou();

    // vignette
    const vg = c.createRadialGradient(w * 0.5, h * 0.55, Math.min(w, h) * 0.3, w * 0.5, h * 0.55, Math.hypot(w, h) * 0.62);
    vg.addColorStop(0, "rgba(6,8,6,0)");
    vg.addColorStop(1, "rgba(6,8,6,0.55)");
    c.fillStyle = vg;
    c.fillRect(0, 0, w, h);
  }

  // sol : tapis de feuilles de hetre cuivrees, mousse, fougeres lointaines
  function peindreSol(c, R) {
    const gs = c.createLinearGradient(0, HOR, 0, h);
    gs.addColorStop(0, "#5d5040");
    gs.addColorStop(0.18, "#56432f");
    gs.addColorStop(0.55, "#453222");
    gs.addColorStop(1, "#231810");
    c.fillStyle = gs;
    c.fillRect(0, HOR - 1, w, h - HOR + 1);
    const N = Math.round(7000 * (w * h) / (1920 * 1080)) + 1200;
    for (let i = 0; i < N; i++) {
      const f = Math.pow(R(), 0.75), y = HOR + (h - HOR) * f;
      const x = R() * w;
      const s = (1 + f * 9) * u * 1.3;
      // bande calme derriere les animaux : moins de contraste
      const calme = (y > h * 0.58 && y < h * 0.8) ? 0.45 : 1;
      const lum = (26 - f * 10) + (R() - 0.5) * 14 * calme;
      const hue = 18 + R() * 16, sat = 30 + R() * 26 - (1 - f) * 12;
      c.fillStyle = "hsla(" + hue + "," + sat + "%," + lum + "%," + (0.35 + R() * 0.4) + ")";
      c.beginPath();
      c.ellipse(x, y, s, s * (0.3 + R() * 0.25), R() * 3.14, 0, PI2);
      c.fill();
    }
    // taches de mousse
    for (let i = 0; i < 40 + w / 30; i++) {
      const f = Math.pow(R(), 0.8), y = HOR + (h - HOR) * f, x = R() * w;
      const s = (6 + f * 60) * u * (0.6 + R());
      c.fillStyle = "rgba(" + (62 + R() * 20 | 0) + "," + (76 + R() * 20 | 0) + ",36," + (0.08 + R() * 0.12) + ")";
      c.beginPath();
      c.ellipse(x, y, s, s * 0.28, 0, 0, PI2);
      c.fill();
    }
    // fougeres lointaines, pales, dans la brume
    for (let i = 0; i < 10 + w / 90; i++) {
      const f = R() * 0.22, y = HOR + (h - HOR) * f + 2, x = R() * w;
      touffe(c, R, x, y, (8 + f * 90) * u * (0.7 + R() * 0.6), "#4e5634", 0.35 + f);
    }
  }

  // rais de lumiere, un par toile basse resolution
  function peindreRai(c, k, W, H, q) {
    let d = c;
    const R = rng(900 + k);
    const x0 = (0.45 + k * 0.13 + R() * 0.05) * W, lg = (0.03 + R() * 0.035) * W;
    const pied = (0.1 + k * 0.18 + R() * 0.08) * W - W * 0.1;
    const bas = H * (0.66 + R() * 0.1);
    d = flou(c, 10 * q);
    const g = d.createLinearGradient(x0, 0, pied, bas);
    g.addColorStop(0, "rgba(255,214,150,0.55)");
    g.addColorStop(0.6, "rgba(240,200,150,0.25)");
    g.addColorStop(1, "rgba(230,200,160,0)");
    d.fillStyle = g;
    d.beginPath();
    d.moveTo(x0 - lg * 0.3, -10);
    d.lineTo(x0 + lg * 0.3, -10);
    d.lineTo(pied + lg * 1.6, bas);
    d.lineTo(pied - lg * 0.6, bas);
    d.closePath();
    d.fill();
    finFlou();
  }
  // bande de brume raccordable a l'horizontale
  function peindreBrume(c, k, W, H, q) {
    let d = c;
    const R = rng(77 + k);
    d = flou(c, 8 * q);
    for (let i = 0; i < 26; i++) {
      const x = R() * W, y = H * (0.35 + R() * 0.35), rx = W * (0.05 + R() * 0.09), ry = H * (0.12 + R() * 0.18);
      d.fillStyle = "rgba(190,182,160," + (0.25 + R() * 0.35) + ")";
      for (const dx of [-W, 0, W]) {
        d.beginPath();
        d.ellipse(x + dx, y, rx, ry, 0, 0, PI2);
        d.fill();
      }
    }
    finFlou();
  }

  const RAIS = 4;
  const zoneRai = { h: h * 0.9 };
  const bandes = [{ y: HOR - h * 0.09, hh: h * 0.12, v: 0.006, a: 0.15 }, { y: HOR + h * 0.05, hh: h * 0.1, v: -0.004, a: 0.14 }];

  // precalcul, refait seulement si la taille change
  let dpr = 1;
  try { const m = ctx.getTransform && ctx.getTransform(); if (m && m.a > 0) dpr = m.a; } catch (e) { dpr = 1; }
  const q = Math.min(2, dpr);
  const cle = w + "x" + h + "@" + q;
  if (cache.cle !== cle) {
    cache.cle = cle;
    cache.fond = null; cache.rais = null; cache.brumes = null;
    const f = toile(w * q, h * q);
    if (f) {
      f.x.scale(q, q);
      peindre(f.x);
      cache.fond = f.c;
      const qr = 0.25;
      cache.rais = [];
      for (let k = 0; k < RAIS; k++) {
        const r = toile(w * qr, zoneRai.h * qr);
        if (r) { peindreRai(r.x, k, w * qr, zoneRai.h * qr, qr); cache.rais.push(r.c); }
      }
      cache.brumes = [];
      for (let k = 0; k < bandes.length; k++) {
        const b = toile(w * qr, bandes[k].hh * qr);
        if (b) { peindreBrume(b.x, k, w * qr, bandes[k].hh * qr, qr); cache.brumes.push(b.c); }
      }
    }
    // feuilles qui tombent et poussieres : parametres fixes
    const R = rng(31337);
    const nf = Math.round(10 + w / 110);
    cache.feuilles = [];
    for (let i = 0; i < nf; i++) {
      cache.feuilles.push({
        x: R() * w, y0: R(), v: 0.018 + R() * 0.022, amp: 20 + R() * 50, fs: 0.0004 + R() * 0.0006,
        ph: R() * 6.28, spin: 0.0015 + R() * 0.003, s: (4 + R() * 4) * Math.max(0.7, u),
        c: "hsl(" + (18 + R() * 18 | 0) + "," + (45 + R() * 25 | 0) + "%," + (32 + R() * 16 | 0) + "%)",
      });
    }
    cache.poussieres = [];
    for (let i = 0; i < 40; i++) {
      cache.poussieres.push({ x: R(), y: R(), v: 0.004 + R() * 0.008, ph: R() * 6.28, s: 0.8 + R() * 1.4 });
    }
  }

  // image fixe
  if (cache.fond) ctx.drawImage(cache.fond, 0, 0, w, h);
  else peindre(ctx);

  // rais qui respirent
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  for (let k = 0; k < RAIS; k++) {
    const a = 0.3 + 0.16 * Math.sin(t * 0.00035 + k * 1.9) + 0.05 * Math.sin(t * 0.0011 + k);
    ctx.globalAlpha = Math.max(0, a);
    if (cache.rais && cache.rais[k]) ctx.drawImage(cache.rais[k], 0, 0, w, zoneRai.h);
    else peindreRai(ctx, k, w, zoneRai.h, 1);
  }
  // poussieres dans la lumiere
  ctx.fillStyle = "rgb(255,226,170)";
  for (const p of cache.poussieres) {
    const x = ((p.x * w + t * p.v * 0.6) % w + w) % w;
    const y = h * 0.1 + ((p.y * h * 0.5 + t * p.v * 0.3) % (h * 0.5));
    ctx.globalAlpha = 0.18 + 0.18 * Math.sin(t * 0.0012 + p.ph);
    ctx.fillRect(x, y, p.s, p.s);
  }
  ctx.restore();

  // brume qui derive au ras du sol
  ctx.save();
  for (let k = 0; k < bandes.length; k++) {
    const b = bandes[k];
    ctx.globalAlpha = b.a * (0.85 + 0.15 * Math.sin(t * 0.0002 + k));
    let dx = (t * b.v) % w;
    if (dx > 0) dx -= w;
    if (cache.brumes && cache.brumes[k]) {
      ctx.drawImage(cache.brumes[k], dx, b.y, w, b.hh);
      ctx.drawImage(cache.brumes[k], dx + w, b.y, w, b.hh);
    } else {
      ctx.fillStyle = "rgba(190,182,160,0.3)";
      ctx.beginPath();
      ctx.ellipse(w * 0.5 + dx * 0.1, b.y + b.hh * 0.5, w * 0.6, b.hh * 0.3, 0, 0, PI2);
      ctx.fill();
    }
  }
  ctx.restore();

  // feuilles qui tombent en tournoyant
  for (const f of cache.feuilles) {
    ctx.save();
    const cyc = h * 1.15;
    const y = ((f.y0 * cyc + t * f.v) % cyc) - h * 0.08;
    const x = f.x + Math.sin(t * f.fs + f.ph) * f.amp;
    const rot = Math.sin(t * f.fs * 1.3 + f.ph) * 1.2 + t * f.spin * 0.3;
    const plat = Math.cos(t * f.spin + f.ph);
    ctx.globalAlpha = y > h * 0.35 && y < h * 0.8 ? 0.55 : 0.85;
    ctx.fillStyle = f.c;
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.scale(1, 0.25 + 0.75 * Math.abs(plat));
    ctx.beginPath();
    ctx.ellipse(0, 0, f.s, f.s * 0.55, 0, 0, PI2);
    ctx.fill();
    ctx.restore();
  }
}

/* ------------------------------------------------------- eaux-douces */
function decorEauxDouces(ctx, w, h, t, cache) {
  const PI2 = Math.PI * 2;
  const H = h * 0.515;            // horizon
  const WL = H + h * 0.008;       // ligne d'eau de la chinampa du fond
  const SUNX = w * 0.56;

  // generateur a graine fixe
  function rng(seed) {
    let a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      let r = Math.imul(a ^ (a >>> 15), 1 | a);
      r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }
  function lerp(a, b, k) { return a + (b - a) * k; }

  // echelle reelle du contexte (devicePixelRatio)
  let sc = 1;
  try {
    const m = ctx.getTransform && ctx.getTransform();
    if (m && m.a > 0) sc = Math.min(2, m.a);
  } catch (e) { sc = 1; }

  const OC = typeof OffscreenCanvas !== "undefined" ? OffscreenCanvas : null;

  /* ---------------------------------------------------------- geometrie */
  function geometrie() {
    const G = {};
    // berges : bord d'eau de chaque chinampa laterale
    G.left = { fx: w * 0.17, fy: WL, nx: -w * 0.02, ny: h * 0.63 };
    G.right = { fx: w * 0.83, fy: WL, nx: w * 1.02, ny: h * 0.655 };
    // ahuejotes (saules colonnaires) sur chaque berge
    G.trees = [];
    function rangee(b, side, seed, n) {
      const R = rng(seed);
      for (let i = 0; i < n; i++) {
        const p = Math.pow((i + 0.3 + R() * 0.4) / n, 1.25);
        const bx = lerp(b.fx, b.nx, p) - side * (w * 0.004 + p * w * 0.03);
        const by = lerp(b.fy, b.ny, p) - h * (0.002 + p * 0.012);
        const ht = h * lerp(0.05, 0.95, Math.pow(p, 1.7)) * (0.85 + R() * 0.3);
        const tw = Math.min(ht * 0.2, w * (0.015 + 0.1 * p) + 6);
        G.trees.push({ x: bx, y: by, ht: ht, tw: tw, seed: seed * 31 + i, side: side, p: p });
      }
    }
    rangee(G.left, 1, 11, 13);
    rangee(G.right, -1, 23, 12);
    G.trees.sort(function (a, b) { return a.p - b.p; });

    // roseaux animes : touffes aux coins bas et le long des berges
    G.reeds = [];
    const R = rng(77);
    function touffe(x0, x1, y0, y1, lmin, lmax, n, edge) {
      for (let i = 0; i < n; i++) {
        const x = lerp(x0, x1, R());
        const k = edge < 0 ? (x - x0) / (x1 - x0) : 1 - (x - x0) / (x1 - x0);
        G.reeds.push({
          x: x, y: lerp(y0, y1, R()),
          L: h * lerp(lmin, lmax, R()) * (0.45 + 0.55 * (1 - k)),
          lean: (R() - 0.5) * 0.35 + edge * 0.08,
          wb: 1.5 + R() * 3 * (w > 700 ? 1 : 0.7),
          ph: R() * PI2, sp: 0.6 + R() * 0.6,
          c: R() < 0.45 ? 0 : (R() < 0.7 ? 1 : 2),
          cat: R() < 0.13
        });
      }
    }
    const nn = w > 700 ? 1 : 0.6;
    touffe(-w * 0.02, w * 0.24, h * 0.97, h * 1.03, 0.05, 0.2, Math.round(70 * nn), -1);
    touffe(w * 0.78, w * 1.02, h * 0.97, h * 1.03, 0.05, 0.19, Math.round(64 * nn), 1);
    touffe(-w * 0.01, w * 0.07, h * 0.8, h * 0.95, 0.06, 0.16, Math.round(16 * nn), -1);
    touffe(w * 0.94, w * 1.01, h * 0.82, h * 0.95, 0.06, 0.15, Math.round(14 * nn), 1);
    // petits roseaux sur le bord des berges
    for (let i = 0; i < 30; i++) {
      const b = i < 15 ? G.left : G.right;
      const p = 0.25 + R() * 0.7;
      G.reeds.push({
        x: lerp(b.fx, b.nx, p) + (R() - 0.5) * 8, y: lerp(b.fy, b.ny, p) + 2,
        L: h * (0.012 + 0.04 * p) * (0.6 + R() * 0.6), lean: (R() - 0.5) * 0.4,
        wb: 1 + R() * 1.5, ph: R() * PI2, sp: 0.5 + R() * 0.5, c: R() < 0.5 ? 0 : 1, cat: R() < 0.15
      });
    }

    // reflets de lumiere sur l'eau
    G.glints = [];
    const Rg = rng(505);
    for (let i = 0; i < 80; i++) {
      const f = Math.pow(Rg(), 1.9);
      const spread = w * (0.03 + 0.35 * f);
      G.glints.push({
        f: f, y: lerp(WL + 2, h, f),
        x: SUNX + (Rg() - 0.5) * 2 * spread,
        len: (5 + 55 * f) * Math.min(1, w / 1200) + 3,
        ph: Rg() * PI2, ph2: Rg() * PI2
      });
    }
    // ronds dans l'eau, loin des entites
    G.rings = [
      { x: w * 0.1, y: h * 0.75, T: 7300, o: 0 },
      { x: w * 0.9, y: h * 0.8, T: 9100, o: 3100 },
      { x: w * 0.36, y: h * 0.9, T: 8200, o: 5600 },
      { x: w * 0.7, y: h * 0.93, T: 10400, o: 1500 }
    ];
    // oiseaux (aigrettes) lointains
    G.birds = [];
    const Rb = rng(909);
    for (let i = 0; i < 4; i++) {
      G.birds.push({ y: h * (0.12 + Rb() * 0.16), T: 70000 + Rb() * 50000, o: Rb(), s: 3 + Rb() * 3, fp: Rb() * PI2 });
    }
    return G;
  }

  /* --------------------------------------------------- ahuejote peint */
  function arbre(g, tr, col) {
    const R = rng(tr.seed);
    const x = tr.x, by = tr.y, ht = tr.ht, tw = tr.tw;
    const lean = (R() - 0.5) * 0.06;
    // tronc
    g.fillStyle = col.trunk;
    g.beginPath();
    g.moveTo(x - tw * 0.06, by);
    g.lineTo(x - tw * 0.03 + lean * ht * 0.3, by - ht * 0.35);
    g.lineTo(x + tw * 0.03 + lean * ht * 0.3, by - ht * 0.35);
    g.lineTo(x + tw * 0.06, by);
    g.closePath();
    g.fill();
    // silhouette de la couronne
    const N = 28;
    const pts = [];
    function prof(s) { return Math.pow(Math.sin(Math.PI * Math.min(1, s)), 0.55) * (1 - 0.35 * s); }
    for (let side = -1; side <= 1; side += 2) {
      for (let i = 0; i <= N; i++) {
        const s = side < 0 ? i / N : 1 - i / N;
        const yy = by - ht * (0.12 + 0.88 * s);
        const hw = tw * 0.5 * prof(s) * (0.78 + R() * 0.4);
        pts.push([x + lean * ht * s + side * hw, yy]);
      }
    }
    g.fillStyle = col.dark;
    g.beginPath();
    g.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) g.lineTo(pts[i][0], pts[i][1]);
    g.closePath();
    g.fill();
    // touches de feuillage, groupees par couleur
    const nd = Math.max(60, Math.min(2200, (ht * tw) / 28));
    const paths = [[], [], []];
    for (let i = 0; i < nd; i++) {
      const s = Math.pow(R(), 0.9);
      const u = (R() * 2 - 1);
      const hw = tw * 0.5 * prof(s);
      const px = x + lean * ht * s + u * hw * 0.95;
      const py = by - ht * (0.12 + 0.88 * s) + (R() - 0.5) * tw * 0.1;
      const lit = u * tr.side;           // cote tourne vers le couchant
      let c = 0;
      if (lit > 0.35 && R() < 0.75) c = lit > 0.75 && R() < 0.5 ? 2 : 1;
      else if (R() < 0.25) c = 1;
      const r = tw * (0.018 + R() * 0.035) + 0.5;
      paths[c].push(px, py, r * (1.4 + R()), r, R() * 0.6 - 0.3 + Math.PI / 2);
    }
    const fills = [col.mid, col.lit, col.rim];
    for (let c = 0; c < 3; c++) {
      const a = paths[c];
      g.fillStyle = fills[c];
      g.beginPath();
      for (let i = 0; i < a.length; i += 5) {
        g.moveTo(a[i] + a[i + 2], a[i + 1]);
        g.ellipse(a[i], a[i + 1], a[i + 2], a[i + 3], a[i + 4], 0, PI2);
      }
      g.fill();
    }
  }

  // petit ahuejote lointain, simple silhouette
  function arbreLoin(g, x, by, ht, tw, R) {
    g.beginPath();
    g.moveTo(x - tw * 0.1, by);
    for (let i = 0; i <= 10; i++) {
      const s = i / 10;
      g.lineTo(x - tw * 0.5 * Math.pow(Math.sin(Math.PI * Math.min(1, s * 0.95 + 0.05)), 0.6) * (0.8 + R() * 0.4), by - ht * s);
    }
    for (let i = 10; i >= 0; i--) {
      const s = i / 10;
      g.lineTo(x + tw * 0.5 * Math.pow(Math.sin(Math.PI * Math.min(1, s * 0.95 + 0.05)), 0.6) * (0.8 + R() * 0.4), by - ht * s);
    }
    g.closePath();
    g.fill();
  }

  /* --------------------------------------- couche fixe : ciel et eau */
  function peindreFond(g, G) {
    // ciel
    let gr = g.createLinearGradient(0, 0, 0, WL);
    gr.addColorStop(0, "#0c1024");
    gr.addColorStop(0.28, "#1a1a36");
    gr.addColorStop(0.55, "#342745");
    gr.addColorStop(0.76, "#5c394d");
    gr.addColorStop(0.9, "#8a5151");
    gr.addColorStop(1, "#a86a55");
    g.fillStyle = gr;
    g.fillRect(0, 0, w, WL + 1);
    // halo du couchant
    gr = g.createRadialGradient(SUNX, H, 0, SUNX, H, w * 0.55);
    gr.addColorStop(0, "rgba(255,176,110,.32)");
    gr.addColorStop(0.35, "rgba(220,120,90,.12)");
    gr.addColorStop(1, "rgba(200,100,90,0)");
    g.fillStyle = gr;
    g.fillRect(0, 0, w, WL + 1);
    // etoiles tres discretes
    const Rs = rng(3);
    for (let i = 0; i < 70; i++) {
      const y = Math.pow(Rs(), 1.6) * h * 0.3;
      const a = (0.06 + Rs() * 0.3) * (1 - y / (h * 0.3));
      g.fillStyle = "rgba(220,225,255," + a.toFixed(3) + ")";
      const s = 0.6 + Rs() * 0.9;
      g.fillRect(Rs() * w, y, s, s);
    }
    // nuages en longues nappes peintes
    const Rc = rng(41);
    for (let k = 0; k < 16; k++) {
      const cy = h * (0.16 + Rc() * 0.3);
      const cx = Rc() * w;
      const L = w * (0.18 + Rc() * 0.4);
      const th = h * (0.004 + Rc() * 0.012);
      const low = (cy / h - 0.16) / 0.3;   // 0 haut, 1 bas
      const body = "rgba(" + Math.round(lerp(40, 110, low)) + "," + Math.round(lerp(36, 62, low)) + "," + Math.round(lerp(64, 84, low)) + ",0.10)";
      const lite = "rgba(" + Math.round(lerp(150, 235, low)) + "," + Math.round(lerp(96, 138, low)) + "," + Math.round(lerp(110, 108, low)) + ",0.07)";
      g.fillStyle = body;
      g.beginPath();
      for (let i = 0; i < 26; i++) {
        const s = i / 25;
        const ex = cx - L / 2 + s * L;
        const ey = cy + (Rc() - 0.5) * th;
        const rx = L * (0.05 + Rc() * 0.06), ry = th * (0.5 + Rc()) * Math.sin(Math.PI * s + 0.2);
        if (ry <= 0) continue;
        g.moveTo(ex + rx, ey);
        g.ellipse(ex, ey, rx, ry, 0, 0, PI2);
      }
      g.fill();
      g.fillStyle = lite;
      g.beginPath();
      for (let i = 0; i < 14; i++) {
        const s = 0.1 + 0.8 * (i / 13);
        const ex = cx - L / 2 + s * L;
        const ey = cy + th * 0.6;
        const rx = L * (0.04 + Rc() * 0.05), ry = th * 0.35 + 0.5;
        g.moveTo(ex + rx, ey);
        g.ellipse(ex, ey, rx, ry, 0, 0, PI2);
      }
      g.fill();
    }

    // volcans : Iztaccihuatl a gauche, Popocatepetl a droite
    const u = Math.min(w, h * 1.5);
    const vh = Math.min(h * 0.085, u * 0.14);
    function volcan(points, body, snowFn, seed) {
      const R = rng(seed);
      gr = g.createLinearGradient(0, H - vh, 0, H);
      gr.addColorStop(0, body[0]);
      gr.addColorStop(1, body[1]);
      g.fillStyle = gr;
      g.beginPath();
      g.moveTo(points[0][0], H + 2);
      for (let i = 0; i < points.length; i++) g.lineTo(points[i][0], points[i][1]);
      g.lineTo(points[points.length - 1][0], H + 2);
      g.closePath();
      g.fill();
      // neige rosee par le couchant, bord inferieur en ravines
      g.fillStyle = "rgba(226,168,168,.5)";
      g.beginPath();
      let started = false;
      const low = [];
      for (let i = 0; i < points.length; i++) {
        const d = snowFn(points[i][0], points[i][1]);
        if (d > 0) {
          if (!started) { g.moveTo(points[i][0], points[i][1]); started = true; } else g.lineTo(points[i][0], points[i][1]);
          low.push([points[i][0], points[i][1] + d * (0.6 + R() * 0.8)]);
        }
      }
      for (let i = low.length - 1; i >= 0; i--) g.lineTo(low[i][0], low[i][1]);
      g.closePath();
      if (started) g.fill();
      // face eclairee
      g.fillStyle = "rgba(200,120,110,.08)";
      g.beginPath();
      g.moveTo(points[0][0], H + 2);
      for (let i = 0; i < points.length / 2; i++) g.lineTo(points[i][0], points[i][1]);
      g.lineTo(points[Math.floor(points.length / 2)][0], H + 2);
      g.closePath();
      g.fill();
    }
    // Popocatepetl : cone regulier au sommet tronque
    const pcx = w * 0.5 + u * 0.17, phw = u * 0.2;
    const pp = [];
    const Rp = rng(5);
    for (let i = 0; i <= 60; i++) {
      const d = (i / 60) * 2 - 1;
      const ad = Math.max(0, Math.abs(d) - 0.05) / 0.95;
      pp.push([pcx + d * phw, H - vh * Math.pow(1 - ad, 1.55) + (Rp() - 0.5) * vh * 0.02]);
    }
    volcan(pp, ["#4c3a57", "#7a4f5e"], function (x, y) { return y < H - vh * 0.68 ? vh * 0.12 : 0; }, 6);
    // Iztaccihuatl : longue crete, tete, poitrine, genoux
    const icx = w * 0.5 - u * 0.19, ihw = u * 0.26;
    const ip = [];
    const bumps = [[-0.55, 0.62, 0.16], [-0.2, 0.8, 0.22], [0.2, 0.7, 0.2], [0.55, 0.55, 0.18]];
    for (let i = 0; i <= 70; i++) {
      const d = (i / 70) * 2 - 1;
      let v = 0;
      for (let b = 0; b < bumps.length; b++) {
        const e = (d - bumps[b][0]) / bumps[b][2];
        v = Math.max(v, bumps[b][1] * Math.exp(-e * e));
      }
      v = Math.max(v, 0.55 * (1 - Math.pow(Math.abs(d), 1.4)));
      ip.push([icx + d * ihw, H - vh * 0.72 * v + (Rp() - 0.5) * vh * 0.015]);
    }
    volcan(ip, ["#4a3a56", "#764d5d"], function (x, y) { return y < H - vh * 0.36 ? vh * 0.07 : 0; }, 8);
    // voile de brume a la base des volcans
    gr = g.createLinearGradient(0, H - vh * 0.7, 0, H);
    gr.addColorStop(0, "rgba(170,100,95,0)");
    gr.addColorStop(1, "rgba(170,105,95,.55)");
    g.fillStyle = gr;
    g.fillRect(0, H - vh * 0.7, w, vh * 0.7 + 1);

    // eau : reflet assombri du ciel
    gr = g.createLinearGradient(0, WL, 0, h);
    gr.addColorStop(0, "#6a454e");
    gr.addColorStop(0.07, "#4c3446");
    gr.addColorStop(0.3, "#2a2236");
    gr.addColorStop(0.65, "#161926");
    gr.addColorStop(1, "#090d15");
    g.fillStyle = gr;
    g.fillRect(0, WL, w, h - WL);
    // colonne de lumiere du couchant
    g.save();
    g.translate(SUNX, WL);
    g.scale(1, 3.2);
    gr = g.createRadialGradient(0, 0, 0, 0, 0, w * 0.2);
    gr.addColorStop(0, "rgba(240,150,100,.2)");
    gr.addColorStop(1, "rgba(240,150,100,0)");
    g.fillStyle = gr;
    g.fillRect(-w * 0.2, 0, w * 0.4, w * 0.2);
    g.restore();

    // reflets inverses, limites a l'eau
    g.save();
    g.beginPath();
    g.rect(0, WL, w, h - WL);
    g.clip();
    // chinampa du fond et ses arbres
    g.save();
    g.translate(0, 2 * WL);
    g.scale(1, -1);
    g.globalAlpha = 0.75;
    rangeeFond(g, "#2a2230", "#30252f");
    g.restore();
    // arbres des berges
    const rc = { trunk: "#120f16", dark: "#15121a", mid: "#1b1820", lit: "#2a1f24", rim: "#3d2a2a" };
    for (let i = 0; i < G.trees.length; i++) {
      const tr = G.trees[i];
      g.save();
      g.translate(0, 2 * tr.y);
      g.scale(1, -1);
      g.globalAlpha = 0.7;
      arbre(g, tr, rc);
      g.restore();
    }
    // texture horizontale peinte
    const Rw = rng(99);
    for (let i = 0; i < 420; i++) {
      const f = Math.pow(Rw(), 1.3);
      const y = lerp(WL + 1, h, f);
      const x = Rw() * w;
      const L = (10 + Rw() * 90) * (0.3 + f * 1.5) * Math.min(1.4, w / 1200 + 0.3);
      const light = Rw() < 0.5;
      g.fillStyle = light ? "rgba(200,150,150," + (0.02 + 0.03 * (1 - f)).toFixed(3) + ")" : "rgba(5,6,12,0.07)";
      g.fillRect(x, y, L, 1 + f * 2);
    }
    g.restore();
    // premier plan d'eau plus sombre
    gr = g.createLinearGradient(0, h * 0.82, 0, h);
    gr.addColorStop(0, "rgba(4,6,10,0)");
    gr.addColorStop(1, "rgba(4,6,10,.45)");
    g.fillStyle = gr;
    g.fillRect(0, h * 0.82, w, h * 0.18);
  }

  // chinampa du fond : bande basse et rangee d'ahuejotes brumeux
  function rangeeFond(g, c1, c2) {
    const R = rng(17);
    g.fillStyle = c1;
    g.fillRect(0, WL - h * 0.006, w, h * 0.006 + 0.5);
    g.beginPath();
    for (let i = 0; i < 120; i++) {
      const x = w * (0.03 + 0.94 * R()), r = Math.min(h, w * 1.2) * (0.004 + R() * 0.01);
      g.moveTo(x + r * 1.6, WL - h * 0.005);
      g.ellipse(x, WL - h * 0.005, r * 1.6, r, 0, Math.PI, PI2);
    }
    g.fill();
    for (let i = 0; i < 260; i++) {
      const x = w * (0.04 + 0.92 * R());
      const ht = Math.min(h, w * 1.2) * (0.008 + Math.pow(R(), 1.5) * 0.034);
      g.fillStyle = R() < 0.5 ? c1 : c2;
      if (R() < 0.7) arbreLoin(g, x, WL - h * 0.004, ht, ht * (0.22 + R() * 0.1), R);
      else {
        g.beginPath();
        g.ellipse(x, WL - h * 0.004, ht * 0.5, ht * 0.28, 0, Math.PI, PI2);
        g.fill();
      }
    }
  }

  /* ---------------------------------- couche fixe : berges et arbres */
  function peindreBerges(g, G) {
    // chinampa du fond
    rangeeFond(g, "#3a2c3c", "#43323f");
    let gr = g.createLinearGradient(0, H - h * 0.05, 0, WL);
    gr.addColorStop(0, "rgba(160,95,95,0)");
    gr.addColorStop(1, "rgba(160,100,95,.28)");
    g.fillStyle = gr;
    g.fillRect(w * 0.05, H - h * 0.05, w * 0.9, WL - H + h * 0.05);
    // terre des chinampas laterales
    function berge(b, side, seed) {
      const R = rng(seed);
      const edge = [];
      for (let i = 0; i <= 30; i++) {
        const p = i / 30;
        edge.push([lerp(b.fx, b.nx, p) + (R() - 0.5) * (2 + p * 10), lerp(b.fy, b.ny, p)]);
      }
      const xo = side > 0 ? -5 : w + 5;
      // sous-bois : masse de vegetation basse qui monte vers le premier plan
      const top = [];
      for (let i = 0; i <= 60; i++) {
        const p = i / 60;
        const ex = lerp(b.fx, b.nx, p) - side * w * (0.004 + p * 0.02);
        const ey = lerp(b.fy, b.ny, p) - h * (0.01 + 0.15 * Math.pow(p, 1.5)) * (0.7 + 0.5 * R());
        top.push([ex, ey]);
      }
      g.fillStyle = "#17161b";
      g.beginPath();
      g.moveTo(edge[0][0], edge[0][1]);
      for (let i = 0; i < top.length; i++) g.lineTo(top[i][0], top[i][1]);
      g.lineTo(xo, top[top.length - 1][1]);
      g.lineTo(xo, b.ny + 4);
      for (let i = edge.length - 1; i >= 0; i--) g.lineTo(edge[i][0], edge[i][1]);
      g.closePath();
      g.fill();
      // feuillage peint du sous-bois
      const uc = ["rgba(38,40,36,.8)", "rgba(58,54,44,.7)", "rgba(112,78,62,.45)"];
      for (let c = 0; c < 3; c++) {
        g.fillStyle = uc[c];
        g.beginPath();
        for (let i = 0; i < 700; i++) {
          const p = Math.pow(R(), 0.8);
          const j = Math.min(60, Math.round(p * 60));
          const tx = top[j][0], ty = top[j][1];
          const by2 = lerp(b.fy, b.ny, p);
          const dep = R();
          const ex = tx - side * R() * w * (0.01 + p * 0.12);
          const ey = lerp(ty, by2, c === 2 ? dep * 0.25 : dep);
          if (c === 2 && R() < 0.5) continue;
          const r = (0.8 + p * 6) * (0.6 + R() * 0.7);
          g.moveTo(ex + r, ey);
          g.ellipse(ex, ey, r * 1.3, r * 0.8, R(), 0, PI2);
        }
        g.fill();
      }
      // mur de la chinampa : racines et pieux, bande sombre sous le bord
      g.fillStyle = "#0e0d12";
      g.beginPath();
      g.moveTo(edge[0][0], edge[0][1]);
      for (let i = 0; i < edge.length; i++) g.lineTo(edge[i][0], edge[i][1]);
      for (let i = edge.length - 1; i >= 0; i--) {
        const p = i / 30;
        g.lineTo(edge[i][0] + side * p * 3, edge[i][1] + h * (0.002 + p * 0.016));
      }
      g.closePath();
      g.fill();
      // herbes sur le dessus
      g.fillStyle = "rgba(52,58,44,.55)";
      g.beginPath();
      for (let i = 0; i < 220; i++) {
        const p = R();
        const ex = lerp(b.fx, b.nx, p) - side * R() * w * (0.02 + p * 0.1);
        const ey = lerp(b.fy, b.ny, p) - R() * h * (0.004 + p * 0.03);
        const r = 1 + p * 5;
        g.moveTo(ex + r, ey);
        g.ellipse(ex, ey, r * 1.8, r * 0.7, 0, 0, PI2);
      }
      g.fill();
      // liseret humide qui capte le ciel
      g.strokeStyle = "rgba(190,120,105,.22)";
      g.lineWidth = 1;
      g.beginPath();
      for (let i = 0; i < edge.length; i++) {
        const p = i / 30;
        const yy = edge[i][1] + h * (0.002 + p * 0.016);
        if (i === 0) g.moveTo(edge[i][0], yy); else g.lineTo(edge[i][0] + side * p * 3, yy);
      }
      g.stroke();
      // jacinthes d'eau flottantes au pied de la berge
      const cols = ["#1a2620", "#26352a", "#344531"];
      for (let c = 0; c < 3; c++) {
        g.fillStyle = cols[c];
        g.beginPath();
        for (let i = 0; i < 90; i++) {
          const p = 0.15 + R() * 0.85;
          const ex = lerp(b.fx, b.nx, p) + side * R() * w * (0.005 + p * 0.05);
          const ey = lerp(b.fy, b.ny, p) + h * (0.003 + p * 0.02) + R() * h * p * 0.012;
          const r = (1 + p * 7) * (0.6 + R() * 0.6) * (1 - c * 0.2);
          g.moveTo(ex + r, ey - c * r * 0.3);
          g.ellipse(ex, ey - c * r * 0.3, r, r * 0.45, 0, 0, PI2);
        }
        g.fill();
      }
      g.fillStyle = "rgba(150,130,190,.45)";
      g.beginPath();
      for (let i = 0; i < 14; i++) {
        const p = 0.4 + R() * 0.6;
        const ex = lerp(b.fx, b.nx, p) + side * R() * w * p * 0.04;
        const ey = lerp(b.fy, b.ny, p) + h * (0.004 + p * 0.02) - p * 5;
        const r = 0.8 + p * 2;
        g.moveTo(ex + r, ey);
        g.arc(ex, ey, r, 0, PI2);
      }
      g.fill();
      // buissons bas entre les arbres
      g.fillStyle = "#1a1d1c";
      g.beginPath();
      for (let i = 0; i < 26; i++) {
        const p = Math.pow(R(), 0.8);
        const ex = lerp(b.fx, b.nx, p) - side * R() * w * p * 0.05;
        const ey = lerp(b.fy, b.ny, p) - h * 0.003;
        const r = h * (0.006 + p * 0.03);
        g.moveTo(ex + r, ey);
        g.ellipse(ex, ey, r, r * 0.6, 0, Math.PI, PI2);
      }
      g.fill();
    }
    berge(G.left, 1, 61);
    berge(G.right, -1, 62);
    // ahuejotes, du plus lointain au plus proche
    for (let i = 0; i < G.trees.length; i++) {
      const tr = G.trees[i];
      const k = tr.p;
      const col = {
        trunk: "rgb(" + Math.round(lerp(58, 22, k)) + "," + Math.round(lerp(44, 20, k)) + "," + Math.round(lerp(54, 24, k)) + ")",
        dark: "rgb(" + Math.round(lerp(56, 18, k)) + "," + Math.round(lerp(44, 24, k)) + "," + Math.round(lerp(56, 24, k)) + ")",
        mid: "rgb(" + Math.round(lerp(64, 30, k)) + "," + Math.round(lerp(52, 38, k)) + "," + Math.round(lerp(60, 32, k)) + ")",
        lit: "rgb(" + Math.round(lerp(84, 50, k)) + "," + Math.round(lerp(62, 52, k)) + "," + Math.round(lerp(62, 38, k)) + ")",
        rim: "rgba(150,94,72,.5)"
      };
      arbre(g, tr, col);
    }
    // feuilles flottantes au premier plan
    const Rf = rng(303);
    const fc = ["#121a16", "#1c271f", "#2a3627"];
    for (let c = 0; c < 3; c++) {
      g.fillStyle = fc[c];
      g.beginPath();
      for (let i = 0; i < 40; i++) {
        const left = i < 20;
        const x = left ? Rf() * w * 0.3 : w * (0.7 + Rf() * 0.3);
        const y = h * (0.9 + Rf() * 0.1);
        const r = (8 + Rf() * 16) * Math.min(1, w / 1000 + 0.35) * (1 - c * 0.18);
        const a0 = Rf() * PI2;
        g.moveTo(x, y - c * 1.5);
        g.ellipse(x, y - c * 1.5, r, r * 0.35, 0, a0 + 0.3, a0 + PI2 - 0.05);
        g.closePath();
      }
      g.fill();
    }
    // vignette : bords et coins plus sombres, le centre ressort
    gr = g.createRadialGradient(w * 0.5, h * 0.58, Math.min(w, h) * 0.25, w * 0.5, h * 0.58, Math.max(w, h) * 0.8);
    gr.addColorStop(0, "rgba(6,5,12,0)");
    gr.addColorStop(1, "rgba(6,5,12,.5)");
    g.fillStyle = gr;
    g.fillRect(0, 0, w, h);
  }

  /* ------------------------------------------------ calques animes */
  function roseaux(c, G) {
    const cols = ["#0d110f", "#18201a", "#2c2a22"];
    for (let k = 0; k < 3; k++) {
      c.fillStyle = cols[k];
      c.beginPath();
      for (let i = 0; i < G.reeds.length; i++) {
        const r = G.reeds[i];
        if (r.c !== k) continue;
        const sw = Math.sin(t * 0.00075 * r.sp + r.ph + r.x * 0.004) * 0.7 + Math.sin(t * 0.0017 * r.sp + r.ph * 2) * 0.3;
        const tx = r.x + r.lean * r.L + sw * r.L * 0.07;
        const ty = r.y - r.L;
        const cx = r.x + r.lean * r.L * 0.25 + sw * r.L * 0.02;
        const cy = r.y - r.L * 0.55;
        c.moveTo(r.x - r.wb, r.y);
        c.quadraticCurveTo(cx - r.wb * 0.4, cy, tx, ty);
        c.quadraticCurveTo(cx + r.wb * 0.4, cy, r.x + r.wb, r.y);
      }
      c.fill();
    }
    // epis de tule (massettes)
    c.strokeStyle = "#241810";
    c.lineCap = "round";
    c.lineWidth = w > 700 ? 4.5 : 3.2;
    c.beginPath();
    for (let i = 0; i < G.reeds.length; i++) {
      const r = G.reeds[i];
      if (!r.cat) continue;
      const sw = Math.sin(t * 0.00075 * r.sp + r.ph + r.x * 0.004) * 0.7 + Math.sin(t * 0.0017 * r.sp + r.ph * 2) * 0.3;
      const tx = r.x + r.lean * r.L * 0.9 + sw * r.L * 0.06;
      const ty = r.y - r.L * 0.9;
      const dx = r.lean * r.L * 0.12 + sw * r.L * 0.012;
      c.moveTo(tx, ty);
      c.lineTo(tx - dx, ty + r.L * 0.12);
    }
    c.stroke();
    c.lineCap = "butt";
  }

  function anime(c, G, base) {
    // ondulation des reflets : bandes decalees horizontalement
    if (base) {
      let y = WL + 1;
      while (y < h) {
        const f = (y - WL) / (h - WL);
        let sh = 1.5 + f * 5;
        if (y + sh > h) sh = h - y;
        const dx = (Math.sin(y * 0.11 + t * 0.0013) * 0.6 + Math.sin(y * 0.031 - t * 0.0008) * 0.4) * (0.4 + f * 4.5);
        c.drawImage(base, 0, y * sc, w * sc, sh * sc, dx, y, w, sh);
        y += sh;
      }
    }
    // eclats de lumiere
    c.lineCap = "round";
    for (let i = 0; i < G.glints.length; i++) {
      const g = G.glints[i];
      const a = (0.24 - 0.18 * g.f) * (0.35 + 0.65 * Math.max(0, Math.sin(t * 0.0011 + g.ph)));
      if (a < 0.02) continue;
      const x = g.x + Math.sin(t * 0.0004 + g.ph2) * (3 + 18 * g.f);
      c.strokeStyle = g.f < 0.3 ? "rgba(248,178,120," + a.toFixed(3) + ")" : "rgba(200,150,150," + (a * 0.8).toFixed(3) + ")";
      c.lineWidth = 0.8 + g.f * 1.6;
      c.beginPath();
      c.moveTo(x - g.len / 2, g.y);
      c.lineTo(x + g.len / 2, g.y);
      c.stroke();
    }
    c.lineCap = "butt";
    // ronds dans l'eau
    c.lineWidth = 1;
    for (let i = 0; i < G.rings.length; i++) {
      const r = G.rings[i];
      const k = ((t + r.o) % r.T) / r.T;
      if (k > 0.45) continue;
      const q = k / 0.45;
      const R0 = (6 + q * 50) * Math.min(1, w / 1000 + 0.4);
      for (let j = 0; j < 2; j++) {
        const rr = R0 * (1 - j * 0.35);
        c.strokeStyle = "rgba(210,160,150," + ((1 - q) * 0.2).toFixed(3) + ")";
        c.beginPath();
        c.ellipse(r.x, r.y, rr, rr * 0.28, 0, 0, PI2);
        c.stroke();
      }
    }
  }

  function dessus(c, G, mist) {
    // brume qui derive lentement sur l'eau
    const bands = [
      { y: 0.528, hh: 0.035, a: 0.2, v: 0.000012, L: 0.9 },
      { y: 0.56, hh: 0.03, a: 0.11, v: -0.000009, L: 0.7 },
      { y: 0.6, hh: 0.028, a: 0.07, v: 0.000016, L: 0.8 }
    ];
    for (let b = 0; b < bands.length; b++) {
      const B = bands[b];
      const L = w * B.L;
      const span = w + L;
      for (let k = 0; k < 2; k++) {
        let x = ((t * B.v * w + k * span * 0.5 + b * 300) % span + span) % span - L;
        c.globalAlpha = B.a;
        if (mist) c.drawImage(mist, x, h * B.y - h * B.hh, L, h * B.hh * 2);
        else {
          c.fillStyle = "rgba(200,170,190,.3)";
          c.fillRect(x, h * B.y - h * B.hh * 0.5, L, h * B.hh);
        }
      }
    }
    c.globalAlpha = 1;
    // aigrettes lointaines qui traversent le ciel
    c.strokeStyle = "rgba(18,14,24,.75)";
    c.lineWidth = 1.2;
    c.beginPath();
    for (let i = 0; i < G.birds.length; i++) {
      const B = G.birds[i];
      const k = ((t / B.T) + B.o) % 1;
      const x = -40 + k * (w + 80);
      const y = B.y + Math.sin(k * 9 + B.fp) * h * 0.01;
      const f = Math.sin(t * 0.006 + B.fp) * B.s * 0.7;
      c.moveTo(x - B.s * 1.6, y - f);
      c.quadraticCurveTo(x - B.s * 0.6, y - f * 0.3 - 1, x, y);
      c.quadraticCurveTo(x + B.s * 0.6, y - f * 0.3 - 1, x + B.s * 1.6, y - f);
    }
    c.stroke();
    roseaux(c, G);
  }

  /* --------------------------------------------------- orchestration */
  const cle = w + "x" + h + "@" + sc;
  if (cache.cle !== cle) {
    cache.cle = cle;
    cache.G = geometrie();
    cache.base = null; cache.berges = null; cache.mist = null;
    if (OC) {
      try {
        const cw = Math.max(1, Math.round(w * sc)), ch = Math.max(1, Math.round(h * sc));
        cache.base = new OC(cw, ch);
        let g = cache.base.getContext("2d");
        g.scale(sc, sc);
        peindreFond(g, cache.G);
        cache.berges = new OC(cw, ch);
        g = cache.berges.getContext("2d");
        g.scale(sc, sc);
        peindreBerges(g, cache.G);
        cache.mist = new OC(256, 64);
        g = cache.mist.getContext("2d");
        g.translate(128, 32);
        g.scale(4, 1);
        const gr = g.createRadialGradient(0, 0, 0, 0, 0, 32);
        gr.addColorStop(0, "rgba(215,185,200,1)");
        gr.addColorStop(0.5, "rgba(200,170,190,.5)");
        gr.addColorStop(1, "rgba(200,170,190,0)");
        g.fillStyle = gr;
        g.fillRect(-32, -32, 64, 64);
      } catch (e) {
        cache.base = null; cache.berges = null; cache.mist = null;
      }
    }
  }
  const G = cache.G;
  if (cache.base && cache.berges) {
    ctx.drawImage(cache.base, 0, 0, w, h);
    anime(ctx, G, cache.base);
    ctx.drawImage(cache.berges, 0, 0, w, h);
  } else {
    // sans OffscreenCanvas : tout est dessine directement
    peindreFond(ctx, G);
    anime(ctx, G, null);
    peindreBerges(ctx, G);
  }
  dessus(ctx, G, cache.mist);
}

/* ------------------------------------------------------------- recif */
function decorRecif(ctx, w, h, t, cache) {
  const PI = Math.PI, TAU = PI * 2;

  // generateur a graine fixe (mulberry32)
  function graine(s) {
    let a = s >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      let x = Math.imul(a ^ (a >>> 15), 1 | a);
      x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x;
      return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
    };
  }
  // bruit 1D lisse et periodique
  function bruit(s) {
    const r = graine(s), v = [];
    for (let i = 0; i < 256; i++) v.push(r());
    return function (x) {
      const i = Math.floor(x), f = x - i, u = (1 - Math.cos(f * PI)) / 2;
      const a = v[i & 255], b = v[(i + 1) & 255];
      return a + (b - a) * u;
    };
  }
  function rgb(hx) { const n = parseInt(hx.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
  function mix(a, b, k) { return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k]; }
  function css(c, al) { return "rgba(" + (c[0] | 0) + "," + (c[1] | 0) + "," + (c[2] | 0) + "," + (al === undefined ? 1 : al) + ")"; }
  function borne(v, a, b) { return v < a ? a : v > b ? b : v; }

  const EAU = rgb("#2b6a7e"), SOMBRE = rgb("#061318"), CLAIR = rgb("#d8efe4");
  const hz = 0.515 * h;
  const U = Math.max(Math.min(w, h), 520) / 1000;
  const portrait = h > w;
  const E = w * (portrait ? 0.14 : 0.19);
  function prof(y) { return borne((y - hz) / (h - hz), 0, 1); }
  function echelle(y) { return U * (0.4 + 1.1 * prof(y)); }
  function voile(y) { return 0.06 + 0.66 * Math.pow(1 - prof(y), 1.6); }
  function teinte(c, k) { return mix(c, EAU, k); }

  let ratio = 1;
  if (ctx.canvas && ctx.canvas.width && w) ratio = borne(ctx.canvas.width / w, 1, 2);
  const OFF = typeof OffscreenCanvas !== "undefined";

  /* ---------- plan de la scene, calcule une fois par taille ---------- */
  function roche(cote, x) {
    const d = cote ? (w - x) / E : x / E;
    const n = cache.nr ? cache.nr(x / (40 * U) + cote * 50) : 0.5;
    const monte = Math.pow(Math.max(0, 1 - d / 1.25), 1.5);
    return hz + 0.05 * h - (portrait ? 0.2 : 0.24) * h * monte - 0.025 * h * n * monte;
  }
  // pied du massif : la ligne ou la roche rejoint le sable, qui descend vers le spectateur
  function pied(cote, x) {
    const d = cote ? (w - x) / E : x / E;
    const q = Math.max(0, 1 - d / 1.35);
    const n = cache.nr ? cache.nr(x / (25 * U) + 200 + cote * 30) : 0.5;
    return hz + 0.05 * h + (h * 1.08 - hz - 0.05 * h) * Math.pow(q, 0.75) + (n - 0.5) * 0.03 * h * q;
  }
  function plan() {
    cache.nr = bruit(71);
    const r = graine(4242);
    const items = [];
    const HT = { cerveau: 46, table: 44, branche: 105, doigts: 46, tubes: 88 };
    const PAL = {
      cerveau: ["#8a7c4c", "#7e6a58", "#6e7a4e", "#86686c", "#9a8a5a"],
      table: ["#7c886a", "#8a7e5e", "#6a7e78", "#8e8a68"],
      branche: ["#8a7a58", "#76688a", "#6a8076", "#907c62"],
      doigts: ["#a09470", "#8e8c72", "#9a8a78"],
      tubes: ["#6c4a7a", "#7a5072", "#5e4c7c"],
    };
    const POINTES = ["#b4bcdc", "#c4acc8", "#ccc89c", "#a8d0c8"];
    function choix(l) { return l[(r() * l.length) | 0]; }
    function ajoute(x, yb, type, s) {
      items.push({ x, yb, type, s, c: rgb(choix(PAL[type])), tip: rgb(choix(POINTES)), seed: (r() * 1e9) | 0 });
    }
    // amas des bords, poses sur la roche
    for (let cote = 0; cote < 2; cote++) {
      for (let k = 0; k < (portrait ? 30 : 64); k++) {
        const u = Math.pow(r(), 1.1) * 1.25;
        const x = cote ? w - u * E : u * E;
        const top = roche(cote, x), bas = Math.max(top + 6, pied(cote, x));
        const z = r(), haut = z < 0.45;
        const yb = haut ? top + 4 + r() * 0.05 * h : z < 0.75 ? bas - r() * 0.04 * h : top + r() * (bas - top);
        const q = r();
        const type = haut ? (q < 0.35 ? "table" : q < 0.7 ? "branche" : q < 0.85 ? "tubes" : "cerveau")
          : (q < 0.4 ? "cerveau" : q < 0.65 ? "doigts" : q < 0.85 ? "branche" : "table");
        ajoute(x, yb, type, echelle(yb) * (0.7 + r() * 0.6));
      }
    }
    // rangee du bas, basse au centre pour laisser les entites lisibles
    const nb = portrait ? 11 : 20;
    for (let k = 0; k < nb; k++) {
      const x = ((k + r()) / nb) * w;
      const yb = h * (0.9 + r() * 0.15);
      const q = r();
      let type = q < 0.35 ? "cerveau" : q < 0.55 ? "doigts" : q < 0.72 ? "table" : q < 0.88 ? "branche" : "tubes";
      let s = echelle(yb) * (0.7 + r() * 0.5);
      if (x > E * 0.8 && x < w - E * 0.8) {
        const smax = (yb - 0.83 * h) / HT[type];
        if (s > smax) { type = "cerveau"; s = Math.min(s, (yb - 0.83 * h) / HT.cerveau); }
        if (s < 0.25 * U) continue;
      }
      ajoute(x, yb, type, s);
    }
    // petites patates lointaines, tres voilees
    for (let k = 0; k < 10; k++) {
      const g = r() < 0.5;
      const x = g ? E * 0.7 + r() * (0.33 * w - E * 0.7) : w - E * 0.7 - r() * (0.33 * w - E * 0.7);
      const yb = hz + (0.008 + r() * 0.05) * h;
      ajoute(x, yb, choix(["cerveau", "branche", "table", "cerveau"]), echelle(yb) * (0.6 + r() * 0.5));
    }
    items.sort((a, b) => a.yb - b.yb);

    // gorgones en eventail, enracinees dans la roche des bords
    const fans = [];
    const nf = portrait ? 1 : 2;
    for (let cote = 0; cote < 2; cote++) {
      for (let k = 0; k < nf; k++) {
        const u = portrait ? 0.15 + r() * 0.3 : 0.12 + k * 0.38 + r() * 0.15;
        const x = cote ? w - u * E : u * E;
        const H = (portrait ? 0.15 : 0.23) * h * (0.8 + r() * 0.35) * (k ? 0.8 : 1);
        fans.push({ x, y: roche(cote, x) + 0.02 * h, H, W: H * 0.9, ph: r() * TAU, seed: (r() * 1e9) | 0,
          c: rgb(choix(["#a4503e", "#9c5a44", "#8c4a5e", "#a86a48"])) });
      }
    }
    fans.sort((a, b) => a.y - b.y);

    // fouets de mer
    const fouets = [];
    for (let cote = 0; cote < 2; cote++) {
      for (let k = 0; k < (portrait ? 3 : 6); k++) {
        const x = cote ? w - r() * E * 1.05 : r() * E * 1.05;
        const y = roche(cote, x) + r() * 0.05 * h;
        fouets.push({ x, y, L: (0.09 + r() * 0.1) * h, pen: (cote ? -1 : 1) * (0.05 + r() * 0.25), ph: r() * TAU });
      }
    }

    // anemones au premier plan, dans les coins
    const anem = [
      { x: 0.1 * w, y: 0.95 * h, R: 48 * U * 1.3 },
      { x: 0.87 * w, y: 0.975 * h, R: 54 * U * 1.3 },
      { x: 0.36 * w, y: 1.02 * h, R: 40 * U * 1.3 },
    ].map(a => {
      const tent = [], n = 64;
      for (let i = 0; i < n; i++) tent.push({ a: r() * TAU, d: 0.2 + 0.75 * Math.sqrt(r()), l: a.R * (0.6 + r() * 0.6), p: r() * TAU, v: r() < 0.5 });
      tent.sort((p, q) => Math.sin(p.a) * p.d - Math.sin(q.a) * q.d);
      return Object.assign(a, { tent, ph: r() * TAU, poisson: a.x < 0.5 * w || a.R > 50 * U * 1.3 });
    });

    // bancs de poissons lointains
    const bancs = [
      { y: 0.2 * h, v: 0.012, n: 90, L: 8 * U, dir: 1, al: 0.42, rx: 150 * U, ry: 34 * U, x0: 0.1 },
      { y: 0.31 * h, v: -0.008, n: 70, L: 6 * U, dir: -1, al: 0.3, rx: 120 * U, ry: 26 * U, x0: 0.6 },
      { y: 0.42 * h, v: 0.005, n: 50, L: 4.5 * U, dir: 1, al: 0.2, rx: 90 * U, ry: 16 * U, x0: 0.35 },
    ].map(b => {
      const f = [];
      for (let i = 0; i < b.n; i++) {
        const a = r() * TAU, d = Math.sqrt(r());
        f.push({ dx: Math.cos(a) * d * b.rx, dy: Math.sin(a) * d * b.ry, p: r() * TAU, s: 0.75 + r() * 0.5 });
      }
      return Object.assign(b, { f, ph: r() * TAU });
    });

    // rayons de lumiere, soleil en haut a droite
    const rayons = [];
    for (let k = 0; k < 8; k++) {
      rayons.push({ x: (0.18 + k * 0.12 + (r() - 0.5) * 0.08) * w, l: (0.5 + r() * 0.3) * h,
        w0: (18 + r() * 50) * U, a: 0.05 + r() * 0.07, ph: r() * TAU, sp: 0.6 + r() * 0.8 });
    }
    return { items, fans, fouets, anem, bancs, rayons };
  }

  /* ---------- petits outils de dessin ---------- */
  function ombre(g, x, y, rx, ry, k) {
    g.save();
    g.translate(x, y);
    g.scale(1, ry / rx);
    const gr = g.createRadialGradient(0, 0, 0, 0, 0, rx);
    gr.addColorStop(0, "rgba(4,18,22," + 0.35 * (1 - k) + ")");
    gr.addColorStop(1, "rgba(4,18,22,0)");
    g.fillStyle = gr;
    g.beginPath(); g.arc(0, 0, rx, 0, TAU); g.fill();
    g.restore();
  }
  function trace(g, pts, dx, dy, ferme) {
    g.beginPath();
    g.moveTo(pts[0][0] + dx, pts[0][1] + dy);
    for (let i = 1; i < pts.length; i++) g.lineTo(pts[i][0] + dx, pts[i][1] + dy);
    if (ferme) g.closePath();
  }

  /* ---------- coraux ---------- */
  function cerveau(g, it, k, r) {
    const R = 40 * it.s * (0.8 + r() * 0.5), ry = R * (0.6 + r() * 0.18);
    const cx = it.x, cy = it.yb - ry * 0.8;
    ombre(g, cx, it.yb, R * 1.25, R * 0.28, k);
    const b = teinte(it.c, k), cl = teinte(mix(it.c, CLAIR, 0.3), k), sb = teinte(mix(it.c, SOMBRE, 0.62), k * 0.8);
    const gr = g.createRadialGradient(cx - R * 0.3, cy - ry * 0.7, R * 0.05, cx, cy, R * 1.15);
    gr.addColorStop(0, css(cl)); gr.addColorStop(0.5, css(b)); gr.addColorStop(1, css(sb));
    g.save();
    g.beginPath(); g.ellipse(cx, cy, R, ry, 0, 0, TAU);
    g.fillStyle = gr; g.fill(); g.clip();
    g.lineCap = "round"; g.lineJoin = "round";
    const nS = 8 + ((R / 2.5) | 0), pas = R * 0.06;
    for (let i = 0; i < nS; i++) {
      let px = cx + (r() - 0.5) * R * 1.9, py = cy + (r() - 0.5) * ry * 1.9, a = r() * TAU;
      const pts = [[px, py]];
      for (let j = 0; j < 26; j++) {
        a += (r() - 0.5) * 1.4;
        px += Math.cos(a) * pas; py += Math.sin(a) * pas * 0.8;
        pts.push([px, py]);
      }
      trace(g, pts, 0, 0); g.strokeStyle = css(sb, 0.6); g.lineWidth = R * 0.05; g.stroke();
      trace(g, pts, -R * 0.015, -R * 0.022); g.strokeStyle = css(cl, 0.35); g.lineWidth = R * 0.022; g.stroke();
    }
    // volume : bord assombri
    const vo = g.createRadialGradient(cx - R * 0.25, cy - ry * 0.5, R * 0.3, cx, cy, R * 1.05);
    vo.addColorStop(0, "rgba(0,0,0,0)"); vo.addColorStop(1, css(mix(SOMBRE, EAU, k), 0.55));
    g.fillStyle = vo; g.fillRect(cx - R, cy - ry, R * 2, ry * 2);
    g.restore();
  }

  function table(g, it, k, r) {
    const b = teinte(it.c, k), cl = teinte(mix(it.c, CLAIR, 0.3), k), sb = teinte(mix(it.c, SOMBRE, 0.65), k * 0.8);
    const etages = r() < 0.4 ? 2 : 1;
    let W = 68 * it.s * (0.8 + r() * 0.5), lift = 24 * it.s * (0.7 + r() * 0.6);
    ombre(g, it.x, it.yb, W * 1.0, W * 0.2, k);
    for (let e = 0; e < etages; e++) {
      const th = W * 0.2, cx = it.x + (r() - 0.5) * W * 0.3, cy = it.yb - lift;
      g.fillStyle = css(sb);
      g.beginPath();
      g.moveTo(it.x - 7 * it.s, it.yb); g.lineTo(cx - 3 * it.s, cy); g.lineTo(cx + 3 * it.s, cy); g.lineTo(it.x + 7 * it.s, it.yb);
      g.fill();
      const n = 36, pts = [], ph = r() * 10;
      for (let i = 0; i < n; i++) {
        const a = (i / n) * TAU, rad = 1 + 0.12 * Math.sin(a * 3 + ph) + 0.07 * Math.sin(a * 7 + ph * 2);
        pts.push([cx + Math.cos(a) * W * rad, cy + Math.sin(a) * th * rad]);
      }
      trace(g, pts, 0, th * 0.55, true); g.fillStyle = css(mix(sb, SOMBRE, 0.3)); g.fill();
      const gr = g.createLinearGradient(cx, cy - th, cx, cy + th);
      gr.addColorStop(0, css(cl)); gr.addColorStop(1, css(b));
      trace(g, pts, 0, 0, true); g.fillStyle = gr; g.fill();
      g.save(); g.clip();
      g.strokeStyle = css(sb, 0.35); g.lineWidth = Math.max(0.6, 0.8 * it.s);
      g.beginPath();
      for (let i = 0; i < 46; i++) {
        const a = r() * TAU;
        g.moveTo(cx + Math.cos(a) * W * 0.12, cy + Math.sin(a) * th * 0.12);
        g.lineTo(cx + Math.cos(a) * W * 1.1, cy + Math.sin(a) * th * 1.1);
      }
      g.stroke();
      g.restore();
      // levre avant, epaisseur du plateau
      g.strokeStyle = css(mix(b, SOMBRE, 0.25)); g.lineWidth = th * 0.35;
      g.beginPath();
      for (let i = 0; i <= n / 2; i++) { const p = pts[i]; if (i === 0) g.moveTo(p[0], p[1] + th * 0.12); else g.lineTo(p[0], p[1] + th * 0.12); }
      g.stroke();
      trace(g, pts, 0, 0, true); g.strokeStyle = css(cl, 0.55); g.lineWidth = Math.max(0.8, 1.1 * it.s); g.stroke();
      W *= 0.7; lift += 20 * it.s * (0.8 + r() * 0.5);
    }
  }

  function branche(g, it, k, r) {
    const b = teinte(it.c, k), cl = teinte(mix(it.c, CLAIR, 0.3), k), sb = teinte(mix(it.c, SOMBRE, 0.65), k * 0.8);
    const tip = teinte(it.tip, k);
    const segs = [], s = it.s;
    function br(x0, y0, a, len, wd, d) {
      const x1 = x0 + Math.cos(a) * len, y1 = y0 + Math.sin(a) * len;
      segs.push([x0, y0, x1, y1, wd, d]);
      if (d <= 0) return;
      const n = 2 + (r() < 0.35 ? 1 : 0);
      for (let i = 0; i < n; i++) {
        const na = (a + (r() - 0.5) * 1.25) * 0.82 + (-PI / 2) * 0.18;
        br(x1, y1, na, len * (0.68 + r() * 0.16), wd * 0.74, d - 1);
      }
    }
    const nT = 3 + ((r() * 3) | 0);
    for (let i = 0; i < nT; i++) br(it.x + (r() - 0.5) * 22 * s, it.yb, -PI / 2 + (r() - 0.5) * 1.4, 27 * s * (0.8 + r() * 0.4), 7 * s, 4);
    ombre(g, it.x, it.yb, 45 * s, 9 * s, k);
    g.lineCap = "round";
    for (const q of segs) { g.strokeStyle = css(sb); g.lineWidth = q[4] + 1.6 * s; g.beginPath(); g.moveTo(q[0], q[1]); g.lineTo(q[2], q[3]); g.stroke(); }
    for (const q of segs) {
      g.strokeStyle = css(mix(b, tip, (1 - q[5] / 4) * 0.45)); g.lineWidth = q[4];
      g.beginPath(); g.moveTo(q[0], q[1]); g.lineTo(q[2], q[3]); g.stroke();
    }
    g.strokeStyle = css(cl, 0.4);
    for (const q of segs) {
      const o = q[4] * 0.28;
      g.lineWidth = q[4] * 0.3; g.beginPath(); g.moveTo(q[0] - o, q[1]); g.lineTo(q[2] - o, q[3]); g.stroke();
    }
    g.fillStyle = css(mix(tip, CLAIR, 0.1));
    for (const q of segs) if (q[5] === 0) { g.beginPath(); g.arc(q[2], q[3], q[4] * 0.55, 0, TAU); g.fill(); }
  }

  function doigts(g, it, k, r) {
    const s = it.s, b = teinte(it.c, k), cl = teinte(mix(it.c, CLAIR, 0.35), k), sb = teinte(mix(it.c, SOMBRE, 0.6), k * 0.8);
    ombre(g, it.x, it.yb, 48 * s, 10 * s, k);
    g.fillStyle = css(sb);
    g.beginPath(); g.ellipse(it.x, it.yb - 7 * s, 36 * s, 11 * s, 0, 0, TAU); g.fill();
    const f = [];
    for (let i = 0; i < 18; i++) {
      const fx = it.x + (r() - 0.5) * 62 * s, fy = it.yb - 8 * s + (r() - 0.5) * 9 * s;
      const len = (16 + r() * 24) * s, a = -PI / 2 + (fx - it.x) / (36 * s) * 0.55 + (r() - 0.5) * 0.35;
      f.push([fx, fy, fx + Math.cos(a) * len, fy + Math.sin(a) * len]);
    }
    f.sort((p, q) => p[1] - q[1]);
    g.lineCap = "round";
    for (const p of f) {
      g.strokeStyle = css(sb); g.lineWidth = 9 * s; g.beginPath(); g.moveTo(p[0], p[1]); g.lineTo(p[2], p[3]); g.stroke();
      g.strokeStyle = css(b); g.lineWidth = 7 * s; g.beginPath(); g.moveTo(p[0], p[1]); g.lineTo(p[2], p[3]); g.stroke();
      g.strokeStyle = css(cl, 0.55); g.lineWidth = 2.6 * s;
      g.beginPath(); g.moveTo((p[0] + p[2] * 2) / 3 - 1.4 * s, (p[1] + p[3] * 2) / 3); g.lineTo(p[2] - 1.4 * s, p[3] - 1 * s); g.stroke();
    }
  }

  function tubes(g, it, k, r) {
    const s = it.s, b = teinte(it.c, k), cl = teinte(mix(it.c, CLAIR, 0.3), k), sb = teinte(mix(it.c, SOMBRE, 0.65), k * 0.8);
    const n = 3 + ((r() * 3) | 0);
    ombre(g, it.x, it.yb, 40 * s, 8 * s, k);
    const l = [];
    for (let i = 0; i < n; i++) l.push({ x: it.x + (i - (n - 1) / 2) * 12 * s + (r() - 0.5) * 6 * s, ht: (40 + r() * 50) * s, wd: 11 * s * (0.8 + r() * 0.4), pen: (r() - 0.5) * 0.3 });
    l.sort((p, q) => p.ht - q.ht).reverse();
    for (const q of l) {
      const tx = q.x + q.pen * q.ht, ty = it.yb - q.ht, d = q.wd / 2;
      const gr = g.createLinearGradient(q.x - d, 0, q.x + d, 0);
      gr.addColorStop(0, css(sb)); gr.addColorStop(0.35, css(cl)); gr.addColorStop(0.7, css(b)); gr.addColorStop(1, css(sb));
      g.fillStyle = gr;
      g.beginPath(); g.moveTo(q.x - d * 0.85, it.yb); g.lineTo(tx - d, ty); g.lineTo(tx + d, ty); g.lineTo(q.x + d * 0.85, it.yb); g.fill();
      g.fillStyle = css(mix(sb, SOMBRE, 0.5));
      g.beginPath(); g.ellipse(tx, ty, d, d * 0.32, 0, 0, TAU); g.fill();
      g.strokeStyle = css(cl, 0.7); g.lineWidth = Math.max(0.8, 1.2 * s); g.stroke();
    }
  }

  function massif(g, cote) {
    const pts = [], x0 = cote ? w + 10 : -10, x1 = cote ? w - E * 1.35 : E * 1.35;
    for (let i = 0; i <= 60; i++) { const x = x0 + (x1 - x0) * (i / 60); pts.push([x, roche(cote, x)]); }
    const bas = [];
    for (let i = 60; i >= 0; i--) { const x = x0 + (x1 - x0) * (i / 60); bas.push([x, pied(cote, x)]); }
    // ombre portee sur le sable le long du pied
    g.save();
    trace(g, bas, 0, 3 * U, false);
    g.strokeStyle = "rgba(6,24,28,0.16)"; g.lineWidth = 46 * U; g.lineJoin = "round"; g.stroke();
    g.restore();
    const all = pts.concat(bas);
    const top = roche(cote, x0);
    const gr = g.createLinearGradient(0, top, 0, h);
    gr.addColorStop(0, css(teinte(rgb("#6a7462"), 0.35))); gr.addColorStop(0.45, css(teinte(rgb("#3e4a44"), 0.2))); gr.addColorStop(1, css(rgb("#263230")));
    trace(g, all, 0, 0, true);
    g.fillStyle = gr; g.fill();
    g.save(); g.clip();
    const r = graine(900 + cote);
    for (let i = 0; i < 160; i++) {
      const x = cote ? w - r() * E * 1.35 : r() * E * 1.35, y = roche(cote, x) + r() * (h - roche(cote, x));
      const rr = (4 + r() * 16) * echelle(y);
      g.fillStyle = r() < 0.5 ? "rgba(150,170,140,0.07)" : "rgba(0,0,0,0.14)";
      g.beginPath(); g.ellipse(x, y, rr * 1.4, rr, 0, 0, TAU); g.fill();
    }
    g.restore();
  }

  /* ---------- couche du fond ---------- */
  function fond(g) {
    const r = graine(17);
    const gE = g.createLinearGradient(0, 0, 0, hz);
    gE.addColorStop(0, "#2a7a84"); gE.addColorStop(0.3, "#1d6576"); gE.addColorStop(0.72, "#164f68"); gE.addColorStop(1, "#1e5a70");
    g.fillStyle = gE; g.fillRect(0, 0, w, hz + 2);
    // lueur de la surface vers le soleil
    g.save(); g.translate(w * 0.66, -h * 0.05); g.scale(1.6, 1);
    const gs = g.createRadialGradient(0, 0, 0, 0, 0, h * 0.5);
    gs.addColorStop(0, "rgba(150,220,215,0.28)"); gs.addColorStop(1, "rgba(150,220,215,0)");
    g.fillStyle = gs; g.fillRect(-w, 0, 2 * w, h * 0.6); g.restore();
    // brume de l'horizon
    const gb = g.createLinearGradient(0, hz - 0.2 * h, 0, hz);
    gb.addColorStop(0, "rgba(43,106,126,0)"); gb.addColorStop(1, "rgba(43,106,126,0.55)");
    g.fillStyle = gb; g.fillRect(0, hz - 0.2 * h, w, 0.2 * h + 2);
    // silhouettes lointaines du recif
    const couches = [[0.045, 0.1, 0.35], [0.075, 0.2, 0.55]];
    for (let c = 0; c < couches.length; c++) {
      const n = bruit(30 + c), n2 = bruit(40 + c), hm = couches[c][0] * h;
      g.beginPath(); g.moveTo(0, hz + 6);
      for (let x = 0; x <= w + 6; x += 5) {
        const e = Math.abs(x / w - 0.5) * 2, pr = 0.2 + 0.8 * e * e;
        g.lineTo(x, hz - hm * pr * (0.3 + 0.7 * n(x / (110 * U))) - hm * 0.3 * pr * n2(x / (12 * U)));
      }
      g.lineTo(w, hz + 6); g.closePath();
      const gc = g.createLinearGradient(0, hz - hm, 0, hz);
      gc.addColorStop(0, css(mix(EAU, SOMBRE, couches[c][1] + 0.08))); gc.addColorStop(1, css(mix(EAU, SOMBRE, couches[c][1] * 0.3)));
      g.fillStyle = gc; g.fill();
    }
    // sable
    const gS = g.createLinearGradient(0, hz, 0, h);
    gS.addColorStop(0, css(EAU)); gS.addColorStop(0.08, "#487a80"); gS.addColorStop(0.3, "#5e837c");
    gS.addColorStop(0.65, "#6b8374"); gS.addColorStop(1, "#6e7c68");
    g.fillStyle = gS; g.fillRect(0, hz, w, h - hz);
    // taches de lumiere diffuse sur le sable
    for (let i = 0; i < 9; i++) {
      const x = r() * w, y = hz + (0.15 + r() * 0.85) * (h - hz), R = (120 + r() * 220) * U;
      g.save(); g.translate(x, y); g.scale(1, 0.3);
      const gl = g.createRadialGradient(0, 0, 0, 0, 0, R);
      gl.addColorStop(0, r() < 0.6 ? "rgba(210,230,200,0.06)" : "rgba(5,25,30,0.08)"); gl.addColorStop(1, "rgba(0,0,0,0)");
      g.fillStyle = gl; g.beginPath(); g.arc(0, 0, R, 0, TAU); g.fill(); g.restore();
    }
    // rides du sable, en perspective
    const nR = 80, nb = bruit(55), nc = bruit(56);
    for (let j = 1; j < nR; j++) {
      const y0 = hz + (h - hz) * Math.pow(j / nR, 1.7), p = prof(y0);
      const amp = (0.8 + 4 * p) * U, pas = 7 + 6 * p, ph = r() * 10;
      const lw = 0.6 + 2.4 * p;
      for (let pass = 0; pass < 2; pass++) {
        g.beginPath();
        let on = false;
        for (let x = -pas; x <= w + pas; x += pas) {
          const y = y0 + Math.sin(x * 0.006 / U + ph) * amp * 2 + (nb(x / (60 * U) + j * 7) - 0.5) * amp * 5 + (pass ? 0 : lw * 1.1);
          const vis = nc(x / (35 * U) + j * 13) > 0.32;
          if (vis && !on) { g.moveTo(x, y); on = true; } else if (vis) g.lineTo(x, y); else on = false;
        }
        g.strokeStyle = pass ? "rgba(205,225,200," + (0.03 + 0.07 * p) + ")" : "rgba(15,40,42," + (0.04 + 0.12 * p) + ")";
        g.lineWidth = lw; g.stroke();
      }
    }
    // grain du sable
    for (let i = 0; i < 3500; i++) {
      const y = hz + Math.pow(r(), 0.8) * (h - hz), p = prof(y), x = r() * w, s = (0.4 + 1.4 * p) * U * 1.4;
      g.fillStyle = r() < 0.5 ? "rgba(220,230,205," + 0.1 * p + ")" : "rgba(10,30,30," + 0.14 * p + ")";
      g.fillRect(x, y, s, s * 0.7);
    }
    // debris de corail sur le sable, hors du centre
    for (let i = 0; i < 90; i++) {
      const y = hz + (0.1 + Math.pow(r(), 0.7) * 0.9) * (h - hz), x = r() * w;
      if (y < 0.82 * h && x > 0.25 * w && x < 0.75 * w) continue;
      const p = prof(y), s = echelle(y), a = r() * PI;
      g.strokeStyle = css(teinte(rgb("#a8a48c"), voile(y)), 0.55);
      g.lineWidth = (2 + r() * 2.5) * s; g.lineCap = "round";
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * 9 * s, y + Math.sin(a) * 3 * s * p); g.stroke();
    }
  }

  /* ---------- couche des coraux du premier plan ---------- */
  function avant(g, L) {
    massif(g, 0); massif(g, 1);
    const F = { cerveau, table, branche, doigts, tubes };
    for (const it of L.items) F[it.type](g, it, voile(it.yb), graine(it.seed));
    // vignette douce et fond plus sombre dans les coins
    const R = Math.hypot(w, h) * 0.62;
    const gv = g.createRadialGradient(w * 0.5, h * 0.48, R * 0.45, w * 0.5, h * 0.5, R);
    gv.addColorStop(0, "rgba(2,12,20,0)"); gv.addColorStop(1, "rgba(2,12,20,0.55)");
    g.fillStyle = gv; g.fillRect(0, 0, w, h);
  }

  /* ---------- eventail de gorgone, dessine a l'origine (0,0) vers le haut ---------- */
  function eventail(g, f, k) {
    const r = graine(f.seed), segs = [];
    function br(x0, y0, a, len, wd, d) {
      const x1 = x0 + Math.cos(a) * len, y1 = y0 + Math.sin(a) * len;
      segs.push([x0, y0, x1, y1, wd]);
      if (d <= 0) return;
      for (let i = 0; i < 2; i++) {
        let na = a + (i ? 1 : -1) * (0.22 + r() * 0.38);
        if (x1 > 0.4) na -= 0.35; if (x1 < -0.4) na += 0.35;
        na = borne(na, -PI + 0.2, -0.2);
        br(x1, y1, na, len * (0.8 + r() * 0.1), wd * 0.72, d - 1);
      }
    }
    br(0, 0, -PI / 2 + (r() - 0.5) * 0.2, 0.15, 0.04, 9);
    let mx = 1e9, Mx = -1e9, my = 0;
    for (const q of segs) { mx = Math.min(mx, q[2]); Mx = Math.max(Mx, q[2]); my = Math.min(my, q[3]); }
    const sx = f.W / Math.max(0.1, Mx - mx), sy = f.H / Math.max(0.1, -my), ox = -(mx + Mx) / 2;
    const P = segs.map(q => [(q[0] + ox) * sx, q[1] * sy, (q[2] + ox) * sx, q[3] * sy, q[4] * f.H]);
    const b = teinte(f.c, k), sb = teinte(mix(f.c, SOMBRE, 0.55), k * 0.8), cl = teinte(mix(f.c, CLAIR, 0.25), k);
    // voile translucide : le reseau serre vu de loin
    g.fillStyle = css(b, 0.07);
    for (let i = 0; i < P.length; i += 2) { g.beginPath(); g.arc(P[i][2], P[i][3], f.H * 0.045, 0, TAU); g.fill(); }
    // maillage fin entre branches voisines
    g.lineCap = "round";
    g.strokeStyle = css(b, 0.5); g.lineWidth = Math.max(0.5, f.H * 0.003);
    g.beginPath();
    const lim = f.H * 0.075;
    for (let i = 0; i < P.length; i++) {
      let n = 0;
      for (let j = i + 1; j < P.length && n < 5; j++) {
        const dx = P[j][2] - P[i][2], dy = P[j][3] - P[i][3];
        if (dx * dx + dy * dy < lim * lim) { g.moveTo(P[i][2], P[i][3]); g.lineTo(P[j][2], P[j][3]); n++; }
      }
    }
    g.stroke();
    for (const q of P) { g.strokeStyle = css(sb); g.lineWidth = q[4] + 1; g.beginPath(); g.moveTo(q[0], q[1]); g.lineTo(q[2], q[3]); g.stroke(); }
    for (const q of P) { g.strokeStyle = css(b); g.lineWidth = q[4]; g.beginPath(); g.moveTo(q[0], q[1]); g.lineTo(q[2], q[3]); g.stroke(); }
    g.strokeStyle = css(cl, 0.35);
    for (const q of P) if (q[4] > 1.5) { g.lineWidth = q[4] * 0.35; g.beginPath(); g.moveTo(q[0] - q[4] * 0.2, q[1]); g.lineTo(q[2] - q[4] * 0.2, q[3]); g.stroke(); }
  }

  /* ---------- rayon de lumiere en sprite ---------- */
  function spriteRayon() {
    const W = 64, H = 256, c = new OffscreenCanvas(W, H), g = c.getContext("2d");
    for (let y = 0; y < H; y += 2) {
      const q = y / H, lw = W * (0.35 + 0.65 * q), al = Math.pow(1 - q, 1.4) * Math.min(1, q * 12);
      const gr = g.createLinearGradient((W - lw) / 2, 0, (W + lw) / 2, 0);
      gr.addColorStop(0, "rgba(190,240,230,0)"); gr.addColorStop(0.5, "rgba(190,240,230," + al + ")"); gr.addColorStop(1, "rgba(190,240,230,0)");
      g.fillStyle = gr; g.fillRect(0, y, W, 2);
    }
    return c;
  }

  function rayon(g, ry, x, al) {
    g.save();
    g.translate(x, -10);
    g.rotate(0.28);
    g.globalAlpha = al;
    if (cache.ray) g.drawImage(cache.ray, -ry.w0 * 1.5, 0, ry.w0 * 3, ry.l);
    else {
      const gr = g.createLinearGradient(0, 0, 0, ry.l);
      gr.addColorStop(0, "rgba(190,240,230,0.8)"); gr.addColorStop(1, "rgba(190,240,230,0)");
      g.fillStyle = gr;
      g.beginPath(); g.moveTo(-ry.w0 * 0.5, 0); g.lineTo(ry.w0 * 0.5, 0); g.lineTo(ry.w0 * 1.5, ry.l); g.lineTo(-ry.w0 * 1.5, ry.l); g.fill();
    }
    g.restore();
  }
  function groupesRayons() {
    const res = 0.5, m = 40 * U, gh = 0.85 * h, out = [];
    for (let k = 0; k < 3; k++) {
      const c = new OffscreenCanvas(Math.ceil((w + 2 * m) * res), Math.ceil(gh * res)), g = c.getContext("2d");
      g.scale(res, res); g.translate(m, 0);
      g.globalCompositeOperation = "lighter";
      cache.L.rayons.forEach((ry, i) => { if (i % 3 === k) rayon(g, ry, ry.x, ry.a); });
      out.push({ c, m, gh });
    }
    return out;
  }

  /* ---------- tuile de caustiques, voronoi periodique ---------- */
  function tuileCaustique() {
    const S = 256, c = new OffscreenCanvas(S, S), g = c.getContext("2d");
    const img = g.createImageData(S, S), d = img.data, r = graine(99), P = [];
    for (let i = 0; i < 20; i++) P.push([r() * S, r() * S]);
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      let d1 = 1e9, d2 = 1e9;
      for (let i = 0; i < P.length; i++) {
        let dx = Math.abs(x - P[i][0]), dy = Math.abs(y - P[i][1]);
        if (dx > S / 2) dx = S - dx; if (dy > S / 2) dy = S - dy;
        const dd = dx * dx + dy * dy;
        if (dd < d1) { d2 = d1; d1 = dd; } else if (dd < d2) d2 = dd;
      }
      const v = Math.sqrt(d2) - Math.sqrt(d1);
      let bb = Math.max(0, 1 - v / 11); bb = bb * bb * bb;
      const o = (y * S + x) * 4;
      d[o] = 215; d[o + 1] = 250; d[o + 2] = 235; d[o + 3] = (bb * 255) | 0;
    }
    g.putImageData(img, 0, 0);
    return c;
  }

  /* ---------- bandes de caustiques precalculees : chaque bande glisse, sans motif ---------- */
  function bandesCaustiques() {
    const res = 1, l = [], S = 256, nb = 8;
    function bande(y0, bh, sx, sy, vx, vy, al) {
      const Tx = S * sx, Ty = S * sy;
      const cw = Math.ceil((w + Tx + 2) * res), chh = Math.ceil((bh + Ty + 2) * res);
      const c = new OffscreenCanvas(cw, chh), g = c.getContext("2d");
      g.scale(res, res);
      for (let y = 0; y < bh + Ty + 2; y += Ty) for (let x = 0; x < w + Tx + 2; x += Tx) g.drawImage(cache.tuile, x, y, Tx + 0.5, Ty + 0.5);
      l.push({ c, y0, bh, Tx, Ty, vx, vy, al });
    }
    for (let b = 0; b < nb; b++) {
      const y0 = hz + (h - hz) * Math.pow(b / nb, 1.3), y1 = hz + (h - hz) * Math.pow((b + 1) / nb, 1.3);
      const p = prof((y0 + y1) / 2), al = 0.03 + 0.15 * p * p;
      for (let c = 0; c < 2; c++) {
        const sc = U * (0.3 + 1.0 * p) * (c ? 1.35 : 1), sy = sc * (0.35 + 0.3 * p);
        bande(y0, y1 - y0 + 0.5, sc, sy, (c ? -0.009 : 0.012) * sc, (c ? 0.008 : 0.013) * sy, al * (c ? 0.8 : 1));
      }
    }
    // reflets sous la surface, une bande etiree qui s efface vers le bas
    bande(0, 0.1 * h, 3.2 * U, 0.5 * U, 0.012 * U, 0, 0.06);
    const sf = l[l.length - 1], g = sf.c.getContext("2d");
    g.setTransform(res, 0, 0, res, 0, 0);
    g.globalCompositeOperation = "destination-in";
    const gr = g.createLinearGradient(0, 0, 0, 0.1 * h);
    gr.addColorStop(0, "rgba(0,0,0,1)"); gr.addColorStop(1, "rgba(0,0,0,0)");
    g.fillStyle = gr;
    g.fillRect(0, 0, sf.c.width, sf.c.height);
    return { res, l };
  }

  /* ---------- construction du cache ---------- */
  if (!cache.L || cache.w !== w || cache.h !== h || cache.ratio !== ratio) {
    cache.w = w; cache.h = h; cache.ratio = ratio;
    cache.L = plan();
    cache.back = cache.front = null; cache.fanSpr = [];
    if (OFF) {
      try {
        const mk = () => {
          const c = new OffscreenCanvas(Math.ceil(w * ratio), Math.ceil(h * ratio)), g = c.getContext("2d");
          if (!g) throw 0;
          g.setTransform(ratio, 0, 0, ratio, 0, 0);
          return [c, g];
        };
        const [cb, gb] = mk(); fond(gb); cache.back = cb;
        const [cf, gf] = mk(); avant(gf, cache.L); cache.front = cf;
        for (const f of cache.L.fans) {
          const pad = f.H * 0.05, W = f.W + 2 * pad, H = f.H + 2 * pad;
          const c = new OffscreenCanvas(Math.ceil(W * ratio), Math.ceil(H * ratio)), g = c.getContext("2d");
          g.setTransform(ratio, 0, 0, ratio, 0, 0); g.translate(W / 2, H - pad);
          eventail(g, f, voile(f.y));
          cache.fanSpr.push({ c, W, H, pad });
        }
        if (!cache.ray) cache.ray = spriteRayon();

        if (!cache.tuile) cache.tuile = tuileCaustique();
        cache.caus = bandesCaustiques();
        cache.rayG = groupesRayons();
      } catch (e) { cache.back = cache.front = null; cache.fanSpr = []; cache.caus = null; cache.rayG = null; }
    }
  }
  const L = cache.L;

  /* ---------- image courante ---------- */
  // 1. fond statique
  if (cache.back) ctx.drawImage(cache.back, 0, 0, w, h); else fond(ctx);

  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  // 2. caustiques qui dansent sur le sable, et reflets de la surface
  if (cache.caus) {
    const res = cache.caus.res;
    for (const bd of cache.caus.l) {
      ctx.globalAlpha = bd.al * (0.85 + 0.15 * Math.sin(t * 0.0007 + bd.y0 * 0.01));
      let ox = (t * bd.vx) % bd.Tx; if (ox < 0) ox += bd.Tx;
      let oy = (t * bd.vy) % bd.Ty; if (oy < 0) oy += bd.Ty;
      ctx.drawImage(bd.c, ox * res, oy * res, w * res, bd.bh * res, 0, bd.y0, w, bd.bh);
    }
    ctx.globalAlpha = 1;
  }
  // 3. rayons qui respirent
  if (cache.rayG) {
    // trois groupes de rayons precalcules, chacun respire et derive a son rythme
    for (let k = 0; k < cache.rayG.length; k++) {
      const G = cache.rayG[k];
      ctx.globalAlpha = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * 0.00032 * (0.7 + 0.35 * k) + k * 2.1));
      ctx.drawImage(G.c, Math.sin(t * 0.00009 + k * 1.7) * 22 * U - G.m, 0, w + 2 * G.m, G.gh);
    }
    ctx.globalAlpha = 1;
  } else {
    for (const ry of L.rayons) {
      const al = ry.a * (0.45 + 0.55 * (0.5 + 0.5 * Math.sin(t * 0.00032 * ry.sp + ry.ph)));
      rayon(ctx, ry, ry.x + Math.sin(t * 0.00009 + ry.ph) * 25 * U, al);
    }
  }
  ctx.restore();

  // 4. bancs de poissons lointains qui derivent
  for (const b of L.bancs) {
    const span = w + 2 * b.rx + 200 * U;
    let cx = (b.x0 * w + t * b.v * U) % span; if (cx < 0) cx += span; cx -= b.rx + 100 * U;
    const cy = b.y + Math.sin(t * 0.00021 + b.ph) * 18 * U;
    ctx.fillStyle = css(mix(EAU, SOMBRE, 0.6), b.al);
    ctx.beginPath();
    const d = b.dir;
    for (const f of b.f) {
      const x = cx + f.dx + Math.sin(t * 0.0005 + f.dy * 0.04 + b.ph) * 12 * U;
      const y = cy + f.dy + Math.sin(t * 0.0009 + f.p) * 2.5 * U + Math.sin(t * 0.0003 + f.dx * 0.02) * 6 * U;
      const l = b.L * f.s, q = Math.sin(t * 0.012 + f.p) * l * 0.08;
      ctx.moveTo(x + d * l * 0.5, y);
      ctx.lineTo(x, y - l * 0.22);
      ctx.lineTo(x - d * l * 0.38, y);
      ctx.lineTo(x - d * l * 0.62, y - l * 0.2 + q);
      ctx.lineTo(x - d * l * 0.56, y + q * 0.5);
      ctx.lineTo(x - d * l * 0.62, y + l * 0.2 + q);
      ctx.lineTo(x - d * l * 0.38, y);
      ctx.lineTo(x, y + l * 0.2);
      ctx.closePath();
    }
    ctx.fill();
  }

  // 5. fouets de mer et gorgones qui ondulent, derriere les coraux
  ctx.lineCap = "round";
  for (let pass = 0; pass < 2; pass++) {
    ctx.beginPath();
    for (const f of L.fouets) {
      const sw = Math.sin(t * 0.0008 + f.ph) * f.L * 0.13;
      ctx.moveTo(f.x, f.y);
      ctx.quadraticCurveTo(f.x + f.pen * f.L * 0.3 + sw * 0.3, f.y - f.L * 0.55, f.x + f.pen * f.L + sw, f.y - f.L * 0.95);
    }
    ctx.strokeStyle = pass ? css(teinte(rgb("#9a7446"), 0.3)) : css(teinte(rgb("#3a2a1a"), 0.3));
    ctx.lineWidth = (pass ? 2.2 : 3.6) * U;
    ctx.stroke();
  }
  for (let i = 0; i < L.fans.length; i++) {
    const f = L.fans[i], sk = Math.sin(t * 0.00055 + f.ph) * 0.07, sx = 1 - 0.05 * (0.5 + 0.5 * Math.sin(t * 0.0004 + f.ph * 1.7));
    ctx.save();
    ctx.translate(f.x, f.y);
    ctx.transform(sx, 0, sk, 1, 0, 0);
    const sp = cache.fanSpr[i];
    if (sp) ctx.drawImage(sp.c, -sp.W / 2, -(sp.H - sp.pad), sp.W, sp.H);
    else eventail(ctx, f, voile(f.y));
    ctx.restore();
  }

  // 6. coraux du premier plan
  if (cache.front) ctx.drawImage(cache.front, 0, 0, w, h); else avant(ctx, L);

  // 7. anemones et poissons-clowns : leurs tentacules epais coutent cher, et ils
  // bougent lentement, donc on les peint dans une couche rafraichie a 20 images par seconde
  const peindreAnemones = ctx => {
  for (const a of L.anem) {
    const R = a.R, yd = a.y - R * 0.55, tw = R * 0.1;
    const cT = rgb("#a8986a"), cD = rgb("#4a3424"), cP = rgb("#cfc49a");
    ctx.fillStyle = "#3a2230";
    ctx.beginPath(); ctx.ellipse(a.x, a.y - R * 0.2, R * 0.8, R * 0.42, 0, 0, TAU); ctx.fill();
    for (let cote = 0; cote < 2; cote++) {
      const P = [];
      for (let i = 0; i < a.tent.length; i++) {
        const tn = a.tent[i], sn = Math.sin(tn.a);
        if ((sn >= 0) !== (cote === 1)) continue;
        const cs = Math.cos(tn.a), sx0 = a.x + cs * R * 0.9 * tn.d, sy0 = yd + sn * R * 0.3 * tn.d;
        const dx = cs * (0.25 + 0.6 * tn.d), dy = -0.8 + sn * 0.25 + tn.d * 0.2;
        const wx = Math.sin(t * 0.0011 + a.ph + tn.p * 0.4 + i * 0.12) * tn.l * 0.3;
        const wy = Math.cos(t * 0.0008 + a.ph + tn.p) * tn.l * 0.08;
        const ex = sx0 + dx * tn.l + wx, ey = sy0 + dy * tn.l + wy;
        P.push([sx0, sy0, sx0 + dx * tn.l * 0.55 + wx * 0.3, sy0 + dy * tn.l * 0.55 + wy * 0.3, ex, ey]);
      }
      const base = cote ? cT : mix(cT, SOMBRE, 0.3);
      for (let pass = cote ? 0 : 1; pass < 2; pass++) {
        ctx.beginPath();
        for (const p of P) { ctx.moveTo(p[0], p[1]); ctx.quadraticCurveTo(p[2], p[3], p[4], p[5]); }
        ctx.strokeStyle = pass ? css(base) : css(cD); ctx.lineWidth = pass ? tw : tw + 1.6 * U;
        ctx.stroke();
      }
      ctx.beginPath();
      for (const p of P) { ctx.moveTo(p[2] * 0.3 + p[4] * 0.7, p[3] * 0.3 + p[5] * 0.7); ctx.lineTo(p[4], p[5]); }
      ctx.strokeStyle = css(cote ? cP : mix(cP, SOMBRE, 0.3)); ctx.lineWidth = tw * 0.8; ctx.stroke();
      if (!cote) {
        ctx.fillStyle = css(rgb("#7c6a44"));
        ctx.beginPath(); ctx.ellipse(a.x, yd, R * 0.85, R * 0.26, 0, 0, TAU); ctx.fill();
      }
    }
    if (a.poisson) {
      for (let n = 0; n < 2; n++) {
        const ang = t * 0.00045 * (n ? 1.3 : 1) + a.ph + n * 2.4;
        const fx = a.x + Math.cos(ang) * R * 0.95, fy = a.y - R * (1.25 + n * 0.25) + Math.sin(ang * 1.9) * R * 0.2;
        const lf = R * (n ? 0.3 : 0.38), sxs = borne(-Math.sin(ang) * 3, -1, 1);
        ctx.save();
        ctx.translate(fx, fy); ctx.scale(sxs, 1);
        ctx.fillStyle = "#b85a2a";
        ctx.beginPath(); ctx.moveTo(-lf * 0.42, 0); ctx.lineTo(-lf * 0.68, -lf * 0.2); ctx.lineTo(-lf * 0.68, lf * 0.2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(0, 0, lf * 0.5, lf * 0.27, 0, 0, TAU); ctx.fill();
        ctx.fillStyle = "#e8e6dc";
        ctx.beginPath(); ctx.ellipse(lf * 0.2, 0, lf * 0.07, lf * 0.24, 0, 0, TAU); ctx.fill();
        ctx.beginPath(); ctx.ellipse(-lf * 0.08, 0, lf * 0.07, lf * 0.26, 0, 0, TAU); ctx.fill();
        ctx.beginPath(); ctx.ellipse(-lf * 0.4, 0, lf * 0.04, lf * 0.12, 0, 0, TAU); ctx.fill();
        ctx.fillStyle = "#1a1210";
        ctx.beginPath(); ctx.arc(lf * 0.34, -lf * 0.05, lf * 0.04, 0, TAU); ctx.fill();
        ctx.restore();
      }
    }
  }
  };
  if (OFF && cache.back) {
    if (!cache.anem || cache.anemW !== w || cache.anemH !== h) {
      cache.anem = new OffscreenCanvas(Math.ceil(w * ratio), Math.ceil(h * ratio));
      cache.anemG = cache.anem.getContext("2d");
      cache.anemW = w; cache.anemH = h; cache.anemT = -1e9;
    }
    if (t - cache.anemT >= 50 || t < cache.anemT) {
      const g = cache.anemG;
      g.setTransform(1, 0, 0, 1, 0, 0);
      g.clearRect(0, 0, cache.anem.width, cache.anem.height);
      g.setTransform(ratio, 0, 0, ratio, 0, 0);
      peindreAnemones(g);
      cache.anemT = t;
    }
    ctx.drawImage(cache.anem, 0, 0, w, h);
  } else peindreAnemones(ctx);
}

/* --------------------------------------------------------- tropiques */
function decorTropiques(ctx, w, h, t, cache) {
  const TAU = Math.PI * 2;
  const OC = typeof OffscreenCanvas !== "undefined" ? OffscreenCanvas : null;

  // generateur a graine fixe (mulberry32), jamais de Math.random
  function graine(s) {
    let a = s >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      let r = Math.imul(a ^ (a >>> 15), 1 | a);
      r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }
  function c(k, a) {
    return "rgba(" + (k[0] | 0) + "," + (k[1] | 0) + "," + (k[2] | 0) + "," + a + ")";
  }
  function mel(p, q, k) {
    return [p[0] + (q[0] - p[0]) * k, p[1] + (q[1] - p[1]) * k, p[2] + (q[2] - p[2]) * k];
  }

  // palette
  const BRUME = [178, 170, 122];
  const OR = [236, 200, 128];
  const NUIT = [16, 22, 15];
  const FEUIL = [34, 46, 28];
  const FEUIL2 = [52, 62, 34];
  const LUM = [150, 138, 70];

  // echelle reelle du contexte, pour une couche nette
  let sc = 1;
  try {
    const m = ctx.getTransform ? ctx.getTransform() : null;
    if (m && m.a > 0) sc = Math.min(2, m.a);
  } catch (e) { sc = 1; }

  function toile(W, H) {
    const cv = new OC(Math.max(1, Math.ceil(W * sc)), Math.max(1, Math.ceil(H * sc)));
    const g = cv.getContext("2d");
    g.scale(sc, sc);
    return { cv: cv, g: g };
  }
  // un lutin : image precalculee si possible, sinon dessin direct
  function lutin(W, H, ox, oy, dessin) {
    if (OC) {
      const L = toile(W, H);
      L.g.translate(ox, oy);
      dessin(L.g);
      return { cv: L.cv, W: W, H: H, ox: ox, oy: oy };
    }
    return { dessin: dessin, W: W, H: H, ox: ox, oy: oy };
  }
  function poser(sp, x, y, rot, a, s) {
    ctx.save();
    ctx.translate(x, y);
    if (rot) ctx.rotate(rot);
    if (s && s !== 1) ctx.scale(s, s);
    ctx.globalAlpha = a;
    if (sp.cv) ctx.drawImage(sp.cv, -sp.ox, -sp.oy, sp.W, sp.H);
    else sp.dessin(ctx);
    ctx.restore();
  }
  function tache(g, x, y, rx, ry, rot) {
    g.beginPath();
    g.ellipse(x, y, Math.max(0.3, rx), Math.max(0.3, ry), rot, 0, TAU);
    g.fill();
  }
  // une touche en forme de feuille, pointue aux deux bouts
  function lame(g, x, y, L, W, rot) {
    const cx = Math.cos(rot), sx = Math.sin(rot);
    const ax = x - cx * L, ay = y - sx * L, bx = x + cx * L, by = y + sx * L;
    g.beginPath();
    g.moveTo(ax, ay);
    g.quadraticCurveTo(x - sx * W * 2, y + cx * W * 2, bx, by);
    g.quadraticCurveTo(x + sx * W * 2, y - cx * W * 2, ax, ay);
    g.fill();
  }

  /* ---------------------------------------------------- les plantes */

  // feuille de bananier : nervure qui retombe, limbe dechire en lanieres
  function feuilleBananier(g, x, y, a, L, col, lit, R) {
    const n = 28;
    const pts = [];
    for (let i = 0; i <= n; i++) {
      const u = i / n;
      pts.push([x + Math.cos(a) * L * u, y + Math.sin(a) * L * u + L * 0.55 * u * u * (0.35 + 0.65 * Math.abs(Math.cos(a)))]);
    }
    for (let s = -1; s <= 1; s += 2) {
      for (let i = 1; i < n; i++) {
        const u = i / n;
        const p = pts[i], q = pts[i + 1];
        const dx = q[0] - p[0], dy = q[1] - p[1];
        const d = Math.hypot(dx, dy) || 1;
        const nx = -dy / d * s, ny = dx / d * s;
        let lg = L * 0.15 * Math.pow(Math.sin(Math.PI * Math.min(1, u * 1.08)), 0.6);
        if (R() < 0.3) lg *= 0.55 + R() * 0.4; // dechirure
        const k = 0.15 + R() * 0.3 + (s > 0 ? 0.12 : 0);
        g.fillStyle = c(mel(col, lit, k), 1);
        g.beginPath();
        g.moveTo(p[0], p[1]);
        g.lineTo(q[0], q[1]);
        g.lineTo(q[0] + nx * lg + dx * 0.9, q[1] + ny * lg + dy * 0.9);
        g.lineTo(p[0] + nx * lg * 0.97 + dx * 0.95, p[1] + ny * lg * 0.97 + dy * 0.95);
        g.closePath();
        g.fill();
        // bord seche, jaune brun
        if (R() < 0.35) {
          g.fillStyle = c([112, 96, 52], 0.55);
          tache(g, p[0] + nx * lg * 0.9 + dx, p[1] + ny * lg * 0.9 + dy, d * 0.6, lg * 0.12, Math.atan2(dy, dx));
        }
      }
    }
    g.strokeStyle = c(mel(col, [150, 150, 96], 0.45), 0.8);
    g.lineWidth = Math.max(0.8, L * 0.012);
    g.beginPath();
    g.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i <= n; i++) g.lineTo(pts[i][0], pts[i][1]);
    g.stroke();
  }

  // palme de cocotier : rachis courbe et folioles fines
  function palme(g, x, y, a, L, col, lit, R) {
    const n = 30;
    let px = x, py = y;
    g.lineCap = "round";
    for (let i = 1; i <= n; i++) {
      const u = i / n;
      const qx = x + Math.cos(a) * L * u;
      const qy = y + Math.sin(a) * L * u + L * 0.7 * u * u * (0.3 + 0.7 * Math.abs(Math.cos(a)));
      const dx = qx - px, dy = qy - py;
      const d = Math.hypot(dx, dy) || 1;
      g.strokeStyle = c(mel(col, lit, 0.2 + R() * 0.25), 0.95);
      g.lineWidth = Math.max(0.6, L * 0.006 * (1.4 - u));
      g.beginPath(); g.moveTo(px, py); g.lineTo(qx, qy); g.stroke();
      const lg = L * 0.2 * Math.sin(Math.PI * Math.min(1, u * 1.1 + 0.05));
      for (let s = -1; s <= 1; s += 2) {
        const nx = -dy / d * s, ny = dx / d * s;
        const ex = qx + nx * lg * 0.55 + dx / d * lg * 0.35;
        const ey = qy + ny * lg * 0.55 + dy / d * lg * 0.35 + lg * 0.55;
        g.strokeStyle = c(mel(col, lit, R() * 0.35), 0.9);
        g.lineWidth = Math.max(0.6, L * 0.007);
        g.beginPath(); g.moveTo(qx, qy); g.quadraticCurveTo(qx + nx * lg * 0.5, qy + ny * lg * 0.5, ex, ey); g.stroke();
      }
      px = qx; py = qy;
    }
  }

  // fronde de fougere
  function fougere(g, x, y, a, L, col, lit, R) {
    const n = 22;
    let px = x, py = y;
    for (let i = 1; i <= n; i++) {
      const u = i / n;
      const qx = x + Math.cos(a) * L * u;
      const qy = y + Math.sin(a) * L * u + L * 0.35 * u * u;
      const dx = qx - px, dy = qy - py;
      const d = Math.hypot(dx, dy) || 1;
      g.strokeStyle = c(col, 1);
      g.lineWidth = Math.max(0.6, L * 0.01 * (1.3 - u));
      g.beginPath(); g.moveTo(px, py); g.lineTo(qx, qy); g.stroke();
      const lg = L * 0.16 * Math.pow(1 - u, 0.7) + L * 0.02;
      for (let s = -1; s <= 1; s += 2) {
        const nx = -dy / d * s, ny = dx / d * s;
        const ang = Math.atan2(ny + dy / d * 0.6, nx + dx / d * 0.6);
        g.fillStyle = c(mel(col, lit, R() * 0.4 + (s > 0 ? 0.15 : 0)), 1);
        tache(g, qx + Math.cos(ang) * lg * 0.5, qy + Math.sin(ang) * lg * 0.5, lg * 0.52, lg * 0.14 + 0.4, ang);
      }
      px = qx; py = qy;
    }
  }

  // oreille d'elephant (alocasia), feuille en coeur tres large
  function oreille(g, L, col, lit) {
    const p = L * 0.36;
    g.lineCap = "round";
    g.strokeStyle = c(mel(col, lit, 0.2), 1);
    g.lineWidth = Math.max(1, L * 0.028);
    g.beginPath(); g.moveTo(0, 0); g.quadraticCurveTo(L * 0.03, -p * 0.5, 0, -p); g.stroke();
    const sy = -p, W = L * 0.36;
    g.beginPath();
    g.moveTo(0, sy - L * 0.05);
    g.bezierCurveTo(-W * 0.3, sy + L * 0.02, -W * 1.02, sy + L * 0.05, -W * 0.96, sy - L * 0.12);
    g.bezierCurveTo(-W * 0.92, sy - L * 0.36, -W * 0.42, sy - L * 0.52, 0, -L);
    g.bezierCurveTo(W * 0.42, sy - L * 0.52, W * 0.92, sy - L * 0.36, W * 0.96, sy - L * 0.12);
    g.bezierCurveTo(W * 1.02, sy + L * 0.05, W * 0.3, sy + L * 0.02, 0, sy - L * 0.05);
    g.closePath();
    const gr = g.createLinearGradient(-W, sy, W * 0.6, -L);
    gr.addColorStop(0, c(mel(col, NUIT, 0.3), 1));
    gr.addColorStop(0.6, c(col, 1));
    gr.addColorStop(1, c(mel(col, lit, 0.35), 1));
    g.fillStyle = gr;
    g.fill();
    g.strokeStyle = c(lit, 0.28);
    g.lineWidth = Math.max(0.8, L * 0.006);
    g.stroke();
    // nervures
    g.strokeStyle = c(mel(col, [150, 156, 100], 0.4), 0.7);
    g.lineWidth = Math.max(0.8, L * 0.01);
    g.beginPath(); g.moveTo(0, sy - L * 0.05); g.quadraticCurveTo(L * 0.01, sy - L * 0.35, 0, -L * 0.98); g.stroke();
    g.lineWidth = Math.max(0.5, L * 0.005);
    for (let k = 0; k < 6; k++) {
      const yk = sy - L * 0.06 - (L - p) * 0.8 * (k / 6);
      const ext = W * 0.9 * (1 - k / 7);
      for (let s = -1; s <= 1; s += 2) {
        g.beginPath();
        g.moveTo(0, yk);
        g.quadraticCurveTo(s * ext * 0.5, yk - L * 0.02, s * ext, yk - L * 0.1);
        g.stroke();
      }
    }
    for (let s = -1; s <= 1; s += 2) {
      g.beginPath(); g.moveTo(0, sy - L * 0.05); g.quadraticCurveTo(s * W * 0.5, sy, s * W * 0.85, sy - L * 0.08); g.stroke();
    }
  }

  // geant de la foret a contreforts, silhouette plus ou moins voilee
  function geant(g, x, base, top, tw, col, lit, R) {
    g.fillStyle = c(col, 1);
    for (let k = 0; k < 5; k++) {
      const s = k % 2 ? 1 : -1;
      const reach = tw * (1.4 + R() * 2.4);
      const hb = tw * (2.2 + R() * 3.2);
      g.beginPath();
      g.moveTo(x + s * tw * 0.25, base - hb);
      g.quadraticCurveTo(x + s * tw * 0.5, base - hb * 0.2, x + s * reach, base);
      g.lineTo(x - s * tw * 0.1, base);
      g.closePath();
      g.fill();
    }
    const lean = (R() - 0.5) * tw * 3;
    const H = base - top;
    g.beginPath();
    g.moveTo(x - tw * 0.5, base);
    g.bezierCurveTo(x - tw * 0.42, base - H * 0.4, x - tw * 0.34 + lean, top + H * 0.3, x - tw * 0.28 + lean, top);
    g.lineTo(x + tw * 0.28 + lean, top);
    g.bezierCurveTo(x + tw * 0.34 + lean, top + H * 0.3, x + tw * 0.42, base - H * 0.4, x + tw * 0.5, base);
    g.closePath();
    g.fill();
    // lumiere rasante sur le flanc droit
    g.strokeStyle = c(lit, 0.28);
    g.lineWidth = Math.max(0.6, tw * 0.16);
    g.beginPath();
    g.moveTo(x + tw * 0.4, base - tw);
    g.bezierCurveTo(x + tw * 0.38, base - H * 0.4, x + tw * 0.3 + lean, top + H * 0.3, x + tw * 0.24 + lean, top);
    g.stroke();
    // branches puis couronne en chou-fleur
    g.strokeStyle = c(col, 1);
    g.lineCap = "round";
    const cw = tw * (9 + R() * 6);
    for (let k = 0; k < 4; k++) {
      g.lineWidth = tw * (0.35 - k * 0.05);
      g.beginPath();
      g.moveTo(x + lean, top + tw);
      g.quadraticCurveTo(x + lean + (R() - 0.5) * cw * 0.3, top - tw, x + lean + (R() - 0.5) * cw * 0.8, top - tw * (1.5 + R() * 2));
      g.stroke();
    }
    // couronne : amas irreguliers de petites feuilles, plus clairs au sommet
    for (let k = 0; k < 16; k++) {
      const u = R() * 2 - 1;
      const bx = x + lean + u * cw * 0.5;
      const by = top - tw * 1.2 - (1 - u * u) * tw * 3 * R();
      const r = tw * (1.4 + R() * 1.8) * (1 - Math.abs(u) * 0.3);
      g.fillStyle = c(mel(col, NUIT, 0.05), 0.35);
      tache(g, bx, by, r * 0.8, r * 0.45, 0);
      for (let j = 0; j < 26; j++) {
        const a = R() * TAU, d = Math.sqrt(R()) * r;
        const px = bx + Math.cos(a) * d * 1.2, py = by + Math.sin(a) * d * 0.7;
        const hl = py < by ? 0.25 : 0.05;
        g.fillStyle = c(mel(col, lit, R() * hl), 0.85);
        lame(g, px, py, r * 0.22, r * 0.07, R() * TAU);
      }
    }
  }

  function voile(g, y0, y1, a, col) {
    const gr = g.createLinearGradient(0, y0, 0, y1);
    gr.addColorStop(0, c(col, 0));
    gr.addColorStop(0.55, c(col, a));
    gr.addColorStop(1, c(col, a * 0.85));
    g.fillStyle = gr;
    g.fillRect(0, y0, w, y1 - y0);
  }

  /* --------------------------------------------- la couche fixe */
  function fond(g) {
    const S = h * 0.515;
    const m = Math.min(w, h);
    const R = graine(20260921);

    // air chaud et humide, soleil bas derriere la foret
    const ga = g.createLinearGradient(0, 0, 0, S);
    ga.addColorStop(0, "#121810");
    ga.addColorStop(0.3, "#283020");
    ga.addColorStop(0.72, "#57563b");
    ga.addColorStop(1, "#6f6547");
    g.fillStyle = ga;
    g.fillRect(0, 0, w, S + 2);
    const sx = w * 0.64, sy = h * 0.3;
    const gl = g.createRadialGradient(sx, sy, 0, sx, sy, Math.max(w, h) * 0.6);
    gl.addColorStop(0, "rgba(228,190,112,0.42)");
    gl.addColorStop(0.3, "rgba(196,164,96,0.16)");
    gl.addColorStop(1, "rgba(196,164,96,0)");
    g.fillStyle = gl;
    g.fillRect(0, 0, w, S + 2);

    // perches lointaines, a peine visibles dans la brume
    for (let k = 0; k < Math.round(w / 40); k++) {
      const x = R() * w;
      g.strokeStyle = c(mel(BRUME, [96, 100, 76], 0.4 + R() * 0.3), 0.35);
      g.lineWidth = 1 + R() * 2;
      g.beginPath();
      g.moveTo(x, S);
      g.lineTo(x + (R() - 0.5) * 8, h * (0.18 + R() * 0.12));
      g.stroke();
    }

    // plan 1 : geants tres voiles
    // mur de feuillage tres lointain, fondu dans la brume
    for (let k = 0; k < Math.round(w * 1.2); k++) {
      const x = R() * w;
      const y = h * (0.16 + R() * 0.3);
      const r = m * (0.003 + R() * 0.007);
      g.fillStyle = c(mel(BRUME, [120, 124, 92], 0.3 + R() * 0.3), 0.18);
      lame(g, x, y, r, r * 0.35, R() * TAU);
    }
    voile(g, h * 0.12, S, 0.3, BRUME);
    const n1 = Math.max(4, Math.round(w / 240));
    for (let k = 0; k < n1; k++) {
      const x = ((k + 0.3 + R() * 0.4) / n1) * w;
      geant(g, x, S - h * 0.005, h * (0.13 + R() * 0.08), m * (0.012 + R() * 0.006), mel(BRUME, [104, 110, 84], 0.45), [220, 200, 140], R);
    }
    voile(g, h * 0.08, S, 0.38, BRUME);
    // plan 2 : plus proches, plus sombres
    const n2 = Math.max(3, Math.round(w / 360));
    for (let k = 0; k < n2; k++) {
      const x = ((k + 0.2 + R() * 0.6) / n2) * w;
      geant(g, x, S + h * 0.002, h * (0.1 + R() * 0.07), m * (0.02 + R() * 0.008), [82, 86, 62], [210, 180, 110], R);
    }
    voile(g, h * 0.1, S, 0.28, BRUME);

    // sous-bois et verger a l'horizon, tres doux
    for (let k = 0; k < Math.round(w / 3); k++) {
      const x = R() * w;
      const y = S - R() * R() * h * 0.05;
      const r = m * (0.006 + R() * 0.014);
      g.fillStyle = c(mel([88, 90, 62], BRUME, R() * 0.4), 0.55);
      tache(g, x, y, r * 1.3, r, 0);
    }
    const pas = Math.max(56, w * 0.085);
    for (let x = pas * 0.3 + R() * pas * 0.4; x < w; x += pas * (0.8 + R() * 0.4)) {
      const r = m * (0.03 + R() * 0.012);
      const cy = S - r * 1.9;
      g.strokeStyle = c([70, 62, 46], 0.7);
      g.lineWidth = Math.max(1, r * 0.14);
      g.beginPath(); g.moveTo(x, S); g.lineTo(x + (R() - 0.5) * r * 0.3, cy); g.stroke();
      g.fillStyle = c(mel([70, 76, 50], BRUME, 0.3), 0.6);
      tache(g, x, cy, r * 1.05, r * 0.75, 0);
      for (let j = 0; j < 40; j++) {
        const a = R() * TAU, d = Math.sqrt(R()) * r;
        const hl = Math.sin(a) < 0 ? 0.45 : 0.1;
        g.fillStyle = c(mel([70, 76, 50], BRUME, hl * R() + 0.1), 0.75);
        lame(g, x + Math.cos(a) * d * 1.15, cy + Math.sin(a) * d * 0.8, r * 0.16, r * 0.06, R() * TAU);
      }
      for (let j = 0; j < 5; j++) {
        g.fillStyle = c([176, 120, 64], 0.35);
        tache(g, x + (R() - 0.5) * r * 1.4, cy + (R() - 0.3) * r * 0.8, r * 0.07, r * 0.07, 0);
      }
    }
    voile(g, S - h * 0.14, S + h * 0.01, 0.34, [170, 160, 116]);

    // palmiers et bananiers lointains sur les cotes
    const cotes = [[0.24, 0.3, 0.06], [0.79, 0.34, -0.05], [0.93, 0.26, 0.03]];
    for (const q of cotes) {
      const bx = w * q[0], hh = h * q[1];
      const col = mel([80, 84, 60], BRUME, 0.35);
      g.strokeStyle = c(col, 1);
      g.lineWidth = Math.max(1.5, m * 0.006);
      g.beginPath(); g.moveTo(bx, S); g.quadraticCurveTo(bx + m * q[2] * 0.2, S - hh * 0.6, bx + m * q[2], S - hh); g.stroke();
      for (let k = 0; k < 10; k++) palme(g, bx + m * q[2], S - hh, -Math.PI / 2 + (k - 4.5) * 0.62, m * 0.13, col, [190, 170, 110], R);
    }

    // canopee sombre en haut, bord inferieur irregulier
    const bord = x => h * (0.1 + 0.04 * Math.sin(x / w * 7.3 + 1) + 0.025 * Math.sin(x / w * 19 + 2)) + h * 0.14 * Math.pow(Math.abs(x / w - 0.52) * 2, 3);
    g.fillStyle = c(NUIT, 1);
    g.beginPath();
    g.moveTo(0, 0);
    for (let x = 0; x <= w + 8; x += 8) g.lineTo(x, bord(x) * 0.8);
    g.lineTo(w, 0);
    g.closePath();
    g.fill();
    const nb = Math.round(w * 1.3);
    for (let k = 0; k < nb; k++) {
      const x = R() * w;
      const yb = bord(x);
      const y = Math.pow(R(), 0.6) * yb * 1.08;
      const r = m * (0.008 + R() * 0.022);
      const bas = y / yb;
      let col = mel(NUIT, FEUIL, R() * 0.8 * bas);
      g.fillStyle = c(col, 0.9);
      lame(g, x, y, r, r * 0.3, R() * TAU);
      // bords translucides, eclaires par derriere
      if (bas > 0.7 && R() < 0.22) {
        g.fillStyle = c(mel(FEUIL2, LUM, R() * 0.6), 0.5);
        lame(g, x + r * 0.3, y + r * 0.2, r * 0.6, r * 0.18, R() * TAU);
      }
    }
    // grappes qui pendent du bord
    for (let k = 0; k < Math.round(w / 22); k++) {
      const x = R() * w;
      let y = bord(x) * 0.95;
      const lg = 3 + Math.floor(R() * 6);
      for (let j = 0; j < lg; j++) {
        const r = m * (0.006 + R() * 0.01);
        g.fillStyle = c(mel(NUIT, FEUIL2, R() * 0.6), 0.9);
        lame(g, x + (R() - 0.5) * r * 2, y, r, r * 0.35, Math.PI / 2 + (R() - 0.5) * 0.8);
        y += r * 1.1;
      }
    }
    // trouees de ciel dans la canopee, loin du titre et du menu
    for (let k = 0; k < 45; k++) {
      const zone = R() < 0.6;
      const x = zone ? w * (0.38 + R() * 0.3) : w * (0.7 + R() * 0.26);
      const y = zone ? h * (0.03 + R() * 0.1) : h * (0.1 + R() * 0.1);
      if (y > bord(x) * 0.9) continue;
      const r = m * (0.0015 + R() * 0.005);
      g.fillStyle = c(mel(OR, BRUME, R() * 0.5), 0.25 + R() * 0.3);
      lame(g, x, y, r * 1.6, r * 0.6, R() * TAU);
    }

    // lianes fixes
    g.lineCap = "round";
    const lianes = [[0.07, 0.62, 2.2], [0.16, 0.42, 1.2], [0.3, 0.3, 1], [0.72, 0.31, 1], [0.84, 0.46, 1.6], [0.95, 0.6, 2]];
    for (const l of lianes) {
      const x = w * l[0], y0 = bord(x) * 0.7, y1 = h * l[1];
      g.strokeStyle = c([30, 30, 20], 0.85);
      g.lineWidth = l[2] * Math.max(1, m * 0.0016);
      g.beginPath();
      g.moveTo(x, y0);
      g.bezierCurveTo(x + m * 0.04, y0 + (y1 - y0) * 0.4, x - m * 0.03, y0 + (y1 - y0) * 0.7, x + m * 0.01, y1);
      g.stroke();
      for (let j = 0; j < 8; j++) {
        const u = R();
        const px = x + m * 0.01 * Math.sin(u * 6), py = y0 + (y1 - y0) * u;
        g.fillStyle = c(mel(NUIT, FEUIL2, 0.5), 0.9);
        tache(g, px + m * 0.006, py, m * 0.007, m * 0.003, 0.6);
      }
    }

    // sol de laterite, rouge sous la brume
    const gs = g.createLinearGradient(0, S, 0, h);
    gs.addColorStop(0, "#75674a");
    gs.addColorStop(0.1, "#6a4731");
    gs.addColorStop(0.4, "#5a3322");
    gs.addColorStop(0.75, "#3e2217");
    gs.addColorStop(1, "#1e110b");
    g.fillStyle = gs;
    g.fillRect(0, S, w, h - S);
    // stries lointaines
    for (let k = 0; k < 40; k++) {
      const y = S + Math.pow(R(), 2) * h * 0.08;
      g.strokeStyle = c(R() < 0.5 ? [120, 84, 56] : [70, 40, 26], 0.18);
      g.lineWidth = 1;
      const x = R() * w;
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + w * (0.05 + R() * 0.15), y); g.stroke();
    }
    // taches de lumiere tamisee sur le sol
    for (let k = 0; k < 9; k++) {
      const x = w * (0.2 + R() * 0.65), y = h * (0.58 + R() * 0.3);
      const r = m * (0.05 + R() * 0.08);
      const gr = g.createRadialGradient(x, y, 0, x, y, r);
      gr.addColorStop(0, "rgba(220,150,90,0.1)");
      gr.addColorStop(1, "rgba(220,150,90,0)");
      g.fillStyle = gr;
      g.save(); g.translate(x, y); g.scale(1, 0.3); g.translate(-x, -y);
      g.fillRect(x - r, y - r, r * 2, r * 2);
      g.restore();
    }
    // litiere de feuilles, en perspective, plus dense et contrastee en bas
    const tons = [[120, 70, 40], [96, 52, 30], [124, 86, 50], [66, 36, 22], [104, 44, 28], [118, 84, 50], [48, 28, 18], [40, 24, 16]];
    const nl = Math.min(4200, Math.round(w * h / 420));
    for (let k = 0; k < nl; k++) {
      const p = Math.pow(R(), 0.8);
      const y = S + (h - S) * p;
      const x = R() * w;
      const sz = m * (0.002 + 0.016 * p * p) * (0.6 + R() * 0.8);
      const calme = y < h * 0.82 && x > w * 0.15 && x < w * 0.85;
      g.fillStyle = c(tons[Math.floor(R() * tons.length)], calme ? 0.2 : 0.42);
      const ang = (R() - 0.5) * 2.4 + (R() < 0.5 ? 0 : Math.PI);
      lame(g, x, y, sz, sz * (0.18 + R() * 0.12) * (0.6 + p), ang);
    }
    // petits cailloux et mottes
    for (let k = 0; k < 120; k++) {
      const p = Math.pow(R(), 0.6);
      const y = S + (h - S) * p, x = R() * w;
      const sz = m * (0.001 + 0.006 * p);
      g.fillStyle = c([34, 18, 12], 0.35);
      tache(g, x, y + sz * 0.4, sz * 1.2, sz * 0.5, 0);
      g.fillStyle = c([150, 96, 64], 0.3);
      tache(g, x, y, sz, sz * 0.55, 0);
    }
    // buissons bas a cheval sur l'horizon, pour fondre sol et foret
    for (let k = 0; k < Math.round(w / 1.6); k++) {
      const x = R() * w, y = S + h * 0.012 - Math.pow(R(), 1.5) * h * 0.035;
      const r = m * (0.004 + R() * 0.01);
      g.fillStyle = c(mel([78, 80, 54], BRUME, 0.2 + R() * 0.35), 0.5);
      lame(g, x, y, r, r * 0.3, -Math.PI / 2 + (R() - 0.5) * 1.8);
    }
    for (let k = 0; k < Math.round(w / 4); k++) {
      const x = R() * w, y = S + h * 0.01 + R() * h * 0.012;
      g.strokeStyle = c(mel([90, 88, 58], BRUME, R() * 0.4), 0.45);
      g.lineWidth = 1;
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + (R() - 0.5) * 5, y - m * (0.006 + R() * 0.014)); g.stroke();
    }
    voile(g, S - h * 0.03, S + h * 0.05, 0.22, [150, 124, 90]);

    // grand tronc a gauche, avec contreforts et mousse
    {
      const x = w * 0.03, tw = m * 0.055, base = h * 0.64;
      geant(g, x, base, -h * 0.05, tw, [30, 28, 20], [150, 130, 80], R);
      for (let k = 0; k < 70; k++) {
        const y = base - R() * (base + h * 0.02);
        g.fillStyle = c(mel([46, 58, 32], [90, 96, 54], R() * 0.4), 0.5);
        tache(g, x - tw * 0.3 + R() * tw * 0.6, y, tw * 0.12, tw * 0.05, R());
      }
      g.fillStyle = "rgba(10,8,6,0.4)";
      tache(g, x + tw, base + h * 0.005, tw * 3, h * 0.012, 0);
    }
    // bananiers de lisiere a gauche
    {
      const bx = w * 0.12, by = h * 0.6, H = Math.min(m * 0.55, h * 0.36, w * 0.32);
      const col = [44, 54, 30];
      g.fillStyle = "rgba(14,10,6,0.35)";
      tache(g, bx, by + h * 0.005, H * 0.3, h * 0.012, 0);
      for (let k = 0; k < 3; k++) {
        const dx = (k - 1) * H * 0.07, hh = H * (k === 1 ? 0.5 : 0.38);
        const tx = bx + dx * 1.8, ty = by - hh;
        const gr = g.createLinearGradient(bx - H * 0.05, 0, bx + H * 0.05, 0);
        gr.addColorStop(0, "#2a2e1c"); gr.addColorStop(0.7, "#4a4a2c"); gr.addColorStop(1, "#2e2e1c");
        g.strokeStyle = gr;
        g.lineWidth = H * 0.04;
        g.lineCap = "round";
        g.beginPath(); g.moveTo(bx + dx, by); g.lineTo(tx, ty); g.stroke();
        for (let j = 0; j < 5; j++) {
          feuilleBananier(g, tx, ty, -Math.PI / 2 + (j - 2) * 0.62 + (R() - 0.5) * 0.3, H * (0.42 + R() * 0.16), col, [150, 140, 72], R);
        }
      }
    }
    // cocotier penche a droite
    {
      const bx = w * 0.9, by = h * 0.585, hh = h * 0.43, lean = -Math.min(m, w * 0.5) * 0.1;
      const tx = bx + lean, ty = by - hh;
      g.fillStyle = "rgba(14,10,6,0.35)";
      tache(g, bx, by + h * 0.004, m * 0.06, h * 0.01, 0);
      for (let i = 0; i < 40; i++) {
        const u = i / 40, v = (i + 1) / 40;
        const x0 = bx + lean * u * u, y0 = by - hh * u;
        const x1 = bx + lean * v * v, y1 = by - hh * v;
        g.strokeStyle = c(mel([58, 50, 36], [120, 100, 64], (i % 3 === 0) ? 0.05 : 0.35), 1);
        g.lineWidth = m * (0.022 - 0.01 * u);
        g.lineCap = "butt";
        g.beginPath(); g.moveTo(x0, y0); g.lineTo(x1, y1); g.stroke();
      }
      g.lineCap = "round";
      for (let k = 0; k < 14; k++) {
        palme(g, tx, ty, -Math.PI / 2 + (k - 6.5) * 0.44 + (R() - 0.5) * 0.2, m * (0.2 + R() * 0.07), [40, 50, 28], [140, 132, 70], R);
      }
      for (let k = 0; k < 5; k++) {
        g.fillStyle = c(mel([60, 54, 30], [110, 96, 50], R() * 0.5), 1);
        tache(g, tx + (R() - 0.5) * m * 0.03, ty + m * (0.01 + R() * 0.015), m * 0.011, m * 0.011, 0);
      }
    }
    // fougeres au pied des cotes
    const fg = [[0.02, 0.8, -0.6], [0.07, 0.78, -1.1], [0.2, 0.76, -1.9], [0.83, 0.76, -1.3], [0.92, 0.8, -2.2], [0.99, 0.78, -2.6]];
    for (const f of fg) {
      for (let j = 0; j < 4; j++) fougere(g, w * f[0], h * f[1], f[2] + (j - 1.5) * 0.35, Math.min(m * 0.14, w * 0.1), [42, 54, 30], [120, 120, 64], R);
    }

    // vignette douce et grain de peinture
    const vg = g.createRadialGradient(w * 0.5, h * 0.55, m * 0.3, w * 0.5, h * 0.55, Math.hypot(w, h) * 0.62);
    vg.addColorStop(0, "rgba(8,6,4,0)");
    vg.addColorStop(1, "rgba(8,6,4,0.55)");
    g.fillStyle = vg;
    g.fillRect(0, 0, w, h);
    for (let k = 0; k < Math.min(5000, Math.round(w * h / 500)); k++) {
      g.fillStyle = R() < 0.5 ? "rgba(255,240,200,0.035)" : "rgba(0,0,0,0.06)";
      g.fillRect(R() * w, R() * h, 1.2, 1.2);
    }
  }

  /* --------------------------------------------- preparation */
  const cle = w + "x" + h + "@" + sc;
  if (cache.cle !== cle) {
    cache.cle = cle;
    const m = Math.min(w, h);
    const e = Math.min(m, w * 0.55);
    cache.fond = null;
    if (OC) {
      const L = toile(w, h);
      fond(L.g);
      cache.fond = L.cv;
    }
    // rayon de lumiere : un cone doux, ancre en haut
    cache.rayon = lutin(120, 400, 60, 0, g => {
      for (let k = 0; k < 6; k++) {
        const a = 6 + k * 5, b = 22 + k * 8;
        const gr = g.createLinearGradient(0, 0, 0, 400);
        gr.addColorStop(0, "rgba(255,224,150,0)");
        gr.addColorStop(0.1, "rgba(255,224,150,0.16)");
        gr.addColorStop(0.55, "rgba(255,214,140,0.08)");
        gr.addColorStop(1, "rgba(255,214,140,0)");
        g.fillStyle = gr;
        g.beginPath(); g.moveTo(-a, 0); g.lineTo(a, 0); g.lineTo(b, 400); g.lineTo(-b, 400); g.closePath(); g.fill();
      }
    });
    // bandes de brume raccordables a l'infini
    function bande(seed, H, col, amax, n) {
      return lutin(w, H, 0, 0, g => {
        const R = graine(seed);
        for (let k = 0; k < n; k++) {
          const x = R() * w, y = H * (0.35 + R() * 0.3);
          const rx = Math.max(40, w * (0.07 + R() * 0.1)), ry = H * (0.18 + R() * 0.2);
          for (let d = -1; d <= 1; d++) {
            g.save();
            g.translate(x + d * w, y);
            g.scale(1, ry / rx);
            const gr = g.createRadialGradient(0, 0, 0, 0, 0, rx);
            gr.addColorStop(0, c(col, amax));
            gr.addColorStop(1, c(col, 0));
            g.fillStyle = gr;
            g.fillRect(-rx, -rx, rx * 2, rx * 2);
            g.restore();
          }
        }
      });
    }
    cache.brumes = [
      { sp: bande(11, h * 0.22, [196, 186, 140], 0.2, 16), y: h * 0.3, v: 0.006 },
      { sp: bande(23, h * 0.12, [200, 182, 136], 0.16, 14), y: h * 0.43, v: 0.011 },
      { sp: bande(37, h * 0.08, [180, 150, 112], 0.1, 12), y: h * 0.5, v: -0.008 },
    ];
    cache.lueur = lutin(24, 24, 12, 12, g => {
      const gr = g.createRadialGradient(0, 0, 0, 0, 0, 12);
      gr.addColorStop(0, "rgba(246,250,176,1)");
      gr.addColorStop(0.25, "rgba(220,236,130,0.5)");
      gr.addColorStop(1, "rgba(200,220,110,0)");
      g.fillStyle = gr;
      g.fillRect(-12, -12, 24, 24);
    });
    // feuilles d'avant-plan, chacune son lutin, ancre a la tige
    const F = [];
    const col = [30, 40, 24], lit = [128, 124, 66];
    function oreilleL(L, seed) { return lutin(L * 0.82, L * 1.06, L * 0.41, L * 1.02, g => oreille(g, L, col, lit)); }
    function banL(L, seed, cote) {
      return lutin(L * 1.2, L * 1.15, L * 0.6, L * 1.08, g => feuilleBananier(g, 0, 0, -Math.PI / 2 + 0.35 * cote, L, [34, 44, 26], [130, 124, 64], graine(seed)));
    }
    function fouL(L, seed, cote) {
      return lutin(L * 1.3, L * 1.2, L * 0.65, L * 1.1, g => {
        const R = graine(seed);
        for (let j = 0; j < 3; j++) fougere(g, 0, 0, -Math.PI / 2 + (j - 1) * 0.45 + 0.2 * cote, L * (0.8 + j * 0.1), [30, 42, 24], [110, 112, 60], R);
      });
    }
    const Lb = Math.min(h * 0.19, m * 0.3);
    F.push({ sp: oreilleL(e * 0.46), x: -e * 0.03, y: h * 1.01, r: 0.42, a: 0.03, f: 0.00055, p: 0.3 });
    F.push({ sp: banL(e * 0.34, 5, 1), x: -e * 0.04, y: h * 0.8, r: 0.95, a: 0.05, f: 0.00042, p: 1.7 });
    F.push({ sp: fouL(e * 0.3, 7, 1), x: w * 0.01, y: h * 1.03, r: 0.75, a: 0.045, f: 0.0007, p: 2.4 });
    F.push({ sp: oreilleL(e * 0.5), x: w + e * 0.03, y: h * 1.02, r: -0.48, a: 0.03, f: 0.0005, p: 4.1 });
    F.push({ sp: banL(e * 0.34, 9, -1), x: w + e * 0.04, y: h * 0.74, r: -1.0, a: 0.05, f: 0.00038, p: 0.9 });
    F.push({ sp: fouL(e * 0.28, 13, -1), x: w * 0.985, y: h * 1.03, r: -0.8, a: 0.045, f: 0.00066, p: 5.2 });
    F.push({ sp: fouL(Lb, 17, 1), x: w * 0.3, y: h * 1.06, r: -0.3, a: 0.04, f: 0.0006, p: 3.3 });
    F.push({ sp: oreilleL(Lb * 0.95), x: w * 0.46, y: h * 1.07, r: 0.12, a: 0.025, f: 0.00048, p: 1.1 });
    F.push({ sp: fouL(Lb * 0.9, 19, -1), x: w * 0.66, y: h * 1.06, r: 0.35, a: 0.04, f: 0.00064, p: 2.2 });
    F.push({ sp: banL(Lb, 21, -1), x: w * 0.8, y: h * 1.08, r: -0.1, a: 0.035, f: 0.0005, p: 4.6 });
    cache.feuilles = F;
    // lucioles, dans les zones qui ne genent pas les fruits
    const R = graine(4242);
    cache.lucioles = [];
    for (let k = 0; k < 22; k++) {
      const cote = k % 3;
      const x = cote === 0 ? R() * 0.18 : cote === 1 ? 0.82 + R() * 0.18 : 0.2 + R() * 0.6;
      const y = cote === 2 ? 0.2 + R() * 0.13 : 0.3 + R() * 0.52;
      cache.lucioles.push({ x: x, y: y, ph: R() * TAU, v: 0.0002 + R() * 0.0003, f: 0.0008 + R() * 0.0012, s: 0.5 + R() * 0.6 });
    }
    cache.gouttes = [];
    for (let k = 0; k < 7; k++) {
      cache.gouttes.push({ x: k < 4 ? 0.04 + R() * 0.14 : 0.82 + R() * 0.15, y0: 0.18 + R() * 0.08, y1: 0.8 + R() * 0.15, per: 2600 + R() * 3400, ph: R() * 6000 });
    }
    cache.poussieres = [];
    for (let k = 0; k < 26; k++) cache.poussieres.push({ u: R(), v: R(), ph: R() * TAU });
  }

  /* --------------------------------------------- chaque image */
  const m = Math.min(w, h);
  ctx.save();
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = "source-over";
  if (cache.fond) ctx.drawImage(cache.fond, 0, 0, w, h);
  else fond(ctx);

  // brume qui derive
  for (const b of cache.brumes) {
    const W = b.sp.W;
    let off = (t * b.v) % W;
    if (off < 0) off += W;
    poser(b.sp, -off, b.y - b.sp.H / 2, 0, 1);
    poser(b.sp, W - off, b.y - b.sp.H / 2, 0, 1);
  }

  // rayons obliques sortant des trouees
  ctx.globalCompositeOperation = "screen";
  const sR = (h * 0.8) / 400;
  const orig = [0.46, 0.53, 0.6, 0.72, 0.8];
  for (let i = 0; i < orig.length; i++) {
    const a = 0.55 + 0.45 * Math.sin(t * 0.00021 + i * 1.9) * Math.sin(t * 0.00013 + i);
    const larg = Math.max(0.6, m / 900);
    ctx.save();
    ctx.translate(w * orig[i], h * 0.06);
    ctx.rotate(0.34 + 0.02 * Math.sin(t * 0.00009 + i));
    ctx.scale(larg * (0.7 + (i % 2) * 0.5), sR);
    ctx.globalAlpha = Math.max(0, a) * 0.75;
    const sp = cache.rayon;
    if (sp.cv) ctx.drawImage(sp.cv, -sp.ox, -sp.oy, sp.W, sp.H);
    else sp.dessin(ctx);
    ctx.restore();
  }
  // poussieres dans les rayons
  ctx.fillStyle = "rgba(255,232,170,1)";
  for (const p of cache.poussieres) {
    const u = (p.u + t * 0.000004) % 1;
    const x = w * (0.4 + p.v * 0.4) - u * h * 0.25 + Math.sin(t * 0.0004 + p.ph) * 6;
    const y = h * (0.1 + u * 0.3);
    ctx.globalAlpha = 0.25 * (0.5 + 0.5 * Math.sin(t * 0.001 + p.ph));
    ctx.fillRect(x, y, 1.4, 1.4);
  }
  ctx.globalCompositeOperation = "source-over";

  // lianes qui se balancent
  ctx.lineCap = "round";
  ctx.strokeStyle = "rgba(26,26,18,0.9)";
  const lv = [[0.11, 0.13, 0.5], [0.2, 0.14, 0.33], [0.87, 0.16, 0.52]];
  for (let i = 0; i < lv.length; i++) {
    const x = w * lv[i][0], y0 = h * lv[i][1], y1 = h * lv[i][2];
    const b = Math.sin(t * 0.0005 + i * 2.1) * m * 0.012;
    ctx.globalAlpha = 1;
    ctx.lineWidth = Math.max(1.2, m * 0.0022);
    ctx.beginPath();
    ctx.moveTo(x, y0);
    ctx.bezierCurveTo(x + m * 0.02 + b * 0.3, y0 + (y1 - y0) * 0.4, x - m * 0.015 + b * 0.7, y0 + (y1 - y0) * 0.75, x + b, y1);
    ctx.stroke();
  }

  // gouttes qui tombent des feuilles
  ctx.lineWidth = 1.2;
  for (const d of cache.gouttes) {
    const u = ((t + d.ph) % d.per) / d.per;
    if (u > 0.5) continue;
    const k = u / 0.5;
    const y = h * (d.y0 + (d.y1 - d.y0) * k * k);
    const x = w * d.x;
    ctx.globalAlpha = 0.45 * (1 - k * 0.6);
    ctx.strokeStyle = "rgba(220,226,200,1)";
    ctx.beginPath(); ctx.moveTo(x, y - 6 - k * 8); ctx.lineTo(x, y); ctx.stroke();
  }

  // lucioles
  ctx.globalCompositeOperation = "screen";
  for (const l of cache.lucioles) {
    const x = w * l.x + Math.sin(t * l.v + l.ph) * m * 0.03;
    const y = h * l.y + Math.sin(t * l.v * 1.7 + l.ph * 2) * m * 0.015;
    const b = Math.pow(Math.max(0, Math.sin(t * l.f + l.ph)), 3);
    if (b < 0.02) continue;
    poser(cache.lueur, x, y, 0, b * 0.8, l.s * Math.max(0.8, m / 800));
  }
  ctx.globalCompositeOperation = "source-over";

  // feuilles d'avant-plan qui se balancent
  for (const f of cache.feuilles) {
    const r = f.r + f.a * Math.sin(t * f.f + f.p) + f.a * 0.4 * Math.sin(t * f.f * 2.3 + f.p * 1.3);
    poser(f.sp, f.x, f.y, r, 1);
  }
  ctx.restore();
}

/* ----------------------------------------------------------- vergers */
function decorVergers(ctx, w, h, t, cache) {
  if (!(w > 0 && h > 0)) return;
  const PI2 = Math.PI * 2;
  const BRUME = [58, 56, 86];

  // generateur a graine fixe (mulberry32)
  function graine(n) {
    let s = n >>> 0;
    return function () {
      s = (s + 0x6D2B79F5) >>> 0;
      let x = s;
      x = Math.imul(x ^ (x >>> 15), x | 1);
      x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
      return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
    };
  }
  function mix(a, b, k) {
    return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k];
  }
  function rgba(c, a) {
    return "rgba(" + (c[0] | 0) + "," + (c[1] | 0) + "," + (c[2] | 0) + "," + (a === undefined ? 1 : a) + ")";
  }
  function ell(c, x, y, rx, ry, rot) {
    c.beginPath();
    c.ellipse(x, y, rx > 0.1 ? rx : 0.1, ry > 0.1 ? ry : 0.1, rot || 0, 0, PI2);
    c.fill();
  }
  function borne(v, a, b) { return v < a ? a : v > b ? b : v; }
  function toile(W, H) {
    if (typeof OffscreenCanvas === "undefined") return null;
    try {
      const o = new OffscreenCanvas(Math.max(1, Math.ceil(W)), Math.max(1, Math.ceil(H)));
      const c = o.getContext("2d");
      return c ? { o: o, c: c } : null;
    } catch (e) { return null; }
  }

  // echelle reelle du contexte (devicePixelRatio)
  let ech = 1;
  try {
    const m = ctx.getTransform && ctx.getTransform();
    if (m && m.a > 0) ech = Math.min(3, Math.hypot(m.a, m.b));
  } catch (e) { ech = 1; }

  /* ---------------------------------------------------------- geometrie */
  function geometrie() {
    const H = h * 0.52;
    const cx = w * 0.63;
    const demi = Math.max(w * 0.6, h * 0.8);
    const sy = h * 0.29;
    function bosse(x, px, lg, amp) { const d = (x - px) / lg; return amp * Math.exp(-d * d); }
    function profil(x) {
      let u = Math.abs(x - cx) / demi;
      if (u > 1) u = 1;
      u = Math.max(0, (u - 0.03) / 0.97);
      let y = sy + (H - sy) * (1 - Math.pow(1 - u, 2.15));
      // cones secondaires et cratere sommital
      y -= bosse(x, cx - demi * 0.42, demi * 0.035, h * 0.011);
      y -= bosse(x, cx - demi * 0.66, demi * 0.03, h * 0.007);
      y -= bosse(x, cx + demi * 0.5, demi * 0.04, h * 0.009);
      y -= bosse(x, cx + demi * 0.28, demi * 0.02, h * 0.004);
      y -= bosse(x, cx - demi * 0.035, demi * 0.012, h * 0.004);
      y += bosse(x, cx + demi * 0.012, demi * 0.01, h * 0.003);
      y += Math.sin(x * 0.021) * h * 0.0012 + Math.sin(x * 0.057 + 1) * h * 0.0006;
      return Math.min(y, H + 2);
    }
    function colline(x) {
      const u = x / w;
      return H + h * 0.004 - h * (0.016 + 0.009 * Math.sin(u * 4.3 + 0.5) + 0.006 * Math.sin(u * 9.7 + 1.9) + 0.003 * Math.sin(u * 23 + 0.4));
    }
    const N = 11, haut = H + h * 0.004, bas = h * 0.87;
    const L = [];
    for (let k = 0; k <= N; k++) L.push(haut + (bas - haut) * Math.pow(k / N, 1.45));
    function bande(k) { return k < N ? L[k + 1] - L[k] : L[N] - L[N - 1]; }
    function ligne(k, x) {
      const b = bande(k), u = x / w;
      return L[k] + b * (0.12 * Math.sin(u * 2.4 + k * 1.7) + 0.05 * Math.sin(u * 6.3 + k * 2.9));
    }
    function murHaut(k, x) { return ligne(k, x) + bande(k) * 0.5; }

    const rnd = graine(4242);
    // etoiles : peu nombreuses, plus denses en haut
    const etoiles = [];
    const ne = Math.round(40 + (w * h) / 22000);
    for (let i = 0; i < ne; i++) {
      const y = Math.pow(rnd(), 1.7) * h * 0.34;
      const x = rnd() * w;
      if (y > profil(x) - h * 0.03) continue;
      const b = rnd();
      etoiles.push([x, y, b > 0.93 ? 1.5 : b > 0.7 ? 1.1 : 0.75, (1 - y / (h * 0.36)) * (0.25 + b * 0.55), rnd() * PI2, 0.0006 + rnd() * 0.0016]);
    }
    // villages sur les basses pentes, loin du centre
    const lumieres = [];
    const villages = [[0.08, 0.02], [0.2, 0.012], [0.8, 0.018], [0.93, 0.01]];
    for (const v of villages) {
      const n = Math.round(6 + rnd() * 8);
      for (let i = 0; i < n; i++) {
        const x = (v[0] + (rnd() - 0.5) * 0.05) * w;
        const top = Math.max(profil(x), colline(x));
        const y = top + h * (0.002 + rnd() * 0.01);
        if (y > H + h * 0.003) continue;
        lumieres.push([x, y, 0.35 + rnd() * 0.45, rnd() * PI2, 0.0008 + rnd() * 0.002]);
      }
    }
    const R = Math.min(h * 0.19, w * 0.2);
    return { H: H, cx: cx, demi: demi, sy: sy, profil: profil, colline: colline, N: N, L: L,
      bande: bande, ligne: ligne, murHaut: murHaut, etoiles: etoiles, lumieres: lumieres, R: R };
  }

  // contraste reduit derriere les entites
  function contraste(y) {
    const a = h * 0.38, b = h * 0.8;
    if (y < a - h * 0.06 || y > b + h * 0.06) return 1;
    if (y < a) return 1 - 0.55 * (1 - (a - y) / (h * 0.06));
    if (y > b) return 1 - 0.55 * (1 - (y - b) / (h * 0.06));
    return 0.45;
  }
  function zoneCalme(x, y) {
    return x > w * 0.24 && x < w * 0.76 && y > h * 0.4 && y < h * 0.84;
  }

  /* -------------------------------------------------------------- arbre */
  function arbre(c, x, y, r, rnd, fog, ctr, avecOr, rec, riche) {
    const f = function (col) { return mix(col, BRUME, fog); };
    c.fillStyle = rgba(f([6, 8, 12]), 0.45);
    ell(c, x + r * 0.22, y + r * 0.03, r * 1.05, r * 0.18);
    c.fillStyle = rgba(f([22, 17, 16]));
    c.fillRect(x - r * 0.06, y - r * 0.5, r * 0.12, r * 0.5);
    const cy = y - r * 0.9;
    c.fillStyle = rgba(f([9, 17, 16]));
    ell(c, x, cy, r * 0.98, r * 0.86);
    const n = Math.max(7, Math.min(riche ? 320 : 90, Math.round(r * (riche ? 2.4 : 1.4))));
    for (let i = 0; i < n; i++) {
      const a = rnd() * PI2, d = Math.sqrt(rnd()) * r * 0.78;
      const bx = x + Math.cos(a) * d, by = cy + Math.sin(a) * d * 0.86;
      const br = r * (0.15 + rnd() * 0.2) * (riche ? 0.62 : 1);
      let l = 0.5 + 0.5 * (cy - by) / (r * 0.86);
      l = borne(l * 0.8 + rnd() * 0.25, 0, 1);
      l = borne(0.45 + (l - 0.45) * ctr, 0, 1);
      c.fillStyle = rgba(f(mix([8, 16, 15], [44, 70, 63], l * 0.9)));
      ell(c, bx, by, br, br * (0.75 + rnd() * 0.35), rnd() * 3);
    }
    // feuilles de bord : silhouette dentelee
    if (r > 10) {
      const m = Math.round(r * (riche ? 3.2 : 1.1));
      for (let i = 0; i < m; i++) {
        const a = rnd() * PI2, d = r * (0.8 + rnd() * 0.2);
        const bx = x + Math.cos(a) * d, by = cy + Math.sin(a) * d * 0.86;
        const l = borne(0.45 + (0.5 + 0.5 * Math.sin(-a) - 0.45) * ctr, 0, 1) * 0.8;
        c.fillStyle = rgba(f(mix([8, 16, 15], [40, 64, 58], l)));
        const fl = r * (riche ? 0.05 : 0.07);
        ell(c, bx, by, fl * 1.6, fl * 0.7, a + (rnd() - 0.5));
      }
    }
    // lisere chaud du couchant sur le haut
    c.fillStyle = rgba(f([150, 112, 98]), (riche ? 0.07 : 0.12) * ctr);
    const lm = Math.max(3, Math.round(r * (riche ? 0.5 : 0.35)));
    const lt = riche ? 0.04 : 0.1;
    for (let i = 0; i < lm; i++) {
      const a = -Math.PI * (0.2 + rnd() * 0.6), d = r * (0.8 + rnd() * 0.15);
      ell(c, x + Math.cos(a) * d, cy + Math.sin(a) * d * 0.86, r * lt, r * lt * 0.5, a + Math.PI / 2);
    }
    // oranges : petites et sourdes
    if (avecOr) {
      const no = Math.min(riche ? 16 : 9, Math.round(r * 0.22));
      const ro = Math.max(0.8, r * (riche ? 0.035 : 0.045));
      for (let i = 0; i < no; i++) {
        const a = rnd() * PI2, d = Math.sqrt(rnd()) * r * 0.72;
        const ox = x + Math.cos(a) * d, oy = cy + Math.sin(a) * d * 0.8;
        if (oy < cy - r * 0.35) continue;
        c.fillStyle = rgba(f(riche ? [118, 54, 28] : [146, 70, 32]), riche ? 0.8 : 0.55 + 0.35 * ctr);
        ell(c, ox, oy, ro, ro);
        if (ro > 1.6) {
          c.fillStyle = rgba(f([190, 116, 66]), 0.5 * ctr);
          ell(c, ox - ro * 0.3, oy - ro * 0.35, ro * 0.4, ro * 0.35);
        }
      }
    }
    // reflets pour le frisson du feuillage
    if (rec && r > 3) {
      const m = Math.min(6, Math.max(1, Math.round(r / 7)));
      for (let i = 0; i < m; i++) {
        if (rnd() > 0.55) continue;
        const a = -Math.PI * (0.1 + rnd() * 0.8), d = Math.sqrt(rnd()) * r * 0.85;
        rec.push([x + Math.cos(a) * d, cy + Math.sin(a) * d * 0.86, Math.max(1, r * 0.045), rnd() * PI2, 0.4 * ctr * (1 - fog)]);
      }
    }
  }

  function trace(c, f, x0, x1, pas, suite) {
    if (suite) c.lineTo(x0, f(x0));
    else c.moveTo(x0, f(x0));
    for (let x = x0 + pas; x < x1; x += pas) c.lineTo(x, f(x));
    c.lineTo(x1, f(x1));
  }

  /* ------------------------------------------------------ couches fixes */
  function peindre(c, g, rec) {
    const H = g.H, rnd = graine(1907);
    const pas = Math.max(3, w / 220);

    // ciel du soir
    const gs = c.createLinearGradient(0, 0, 0, H);
    gs.addColorStop(0, "rgb(7,13,34)");
    gs.addColorStop(0.35, "rgb(18,30,66)");
    gs.addColorStop(0.62, "rgb(48,50,92)");
    gs.addColorStop(0.8, "rgb(104,76,100)");
    gs.addColorStop(0.92, "rgb(168,100,84)");
    gs.addColorStop(1, "rgb(200,124,82)");
    c.fillStyle = gs;
    c.fillRect(0, 0, w, H + 4);
    const gl = c.createRadialGradient(w * 0.38, H, 0, w * 0.38, H, Math.max(w, h) * 0.55);
    gl.addColorStop(0, "rgba(236,150,92,0.26)");
    gl.addColorStop(0.45, "rgba(196,108,96,0.09)");
    gl.addColorStop(1, "rgba(0,0,0,0)");
    c.fillStyle = gl;
    c.fillRect(0, 0, w, H + 4);

    // cirrus fins eclaires par le dessous
    for (let i = 0; i < 9; i++) {
      const y = h * (0.33 + rnd() * 0.14);
      const x = w * (0.3 + rnd() * 0.75);
      const lg = w * (0.08 + rnd() * 0.16);
      for (let j = 0; j < 6; j++) {
        c.fillStyle = rgba(mix([130, 96, 124], [214, 140, 118], (y / H - 0.6) * 2.2), 0.035 + rnd() * 0.03);
        ell(c, x + (rnd() - 0.5) * lg, y + (rnd() - 0.5) * h * 0.006, lg * (0.3 + rnd() * 0.5), h * (0.0015 + rnd() * 0.003), (rnd() - 0.5) * 0.04);
      }
    }

    // traine ancienne du panache, tres diluee
    for (let i = 0; i < 26; i++) {
      const p = i / 25;
      c.fillStyle = rgba([120, 112, 136], 0.035 * (1 - p * 0.7));
      ell(c, g.cx + g.demi * (0.05 + p * 0.9), g.sy - h * (0.03 + p * 0.07) + Math.sin(p * 5) * h * 0.006,
        h * (0.04 + p * 0.07), h * (0.012 + p * 0.018), -0.08);
    }

    // l'Etna
    c.beginPath();
    c.moveTo(0, H + 4);
    trace(c, g.profil, 0, w, pas, true);
    c.lineTo(w, H + 4);
    c.closePath();
    const ge = c.createLinearGradient(0, g.sy, 0, H);
    ge.addColorStop(0, "rgb(24,26,48)");
    ge.addColorStop(0.6, "rgb(38,36,62)");
    ge.addColorStop(1, "rgb(62,52,80)");
    c.fillStyle = ge;
    c.fill();
    c.save();
    c.clip();
    // coulees et ravines qui descendent du sommet
    for (let i = 0; i < 70; i++) {
      const cote = rnd() < 0.5 ? -1 : 1;
      const u0 = rnd() * 0.25, u1 = u0 + 0.15 + rnd() * 0.5;
      const x0 = g.cx + cote * u0 * g.demi, x1 = g.cx + cote * u1 * g.demi + (rnd() - 0.5) * g.demi * 0.05;
      const clair = rnd() < 0.35;
      c.strokeStyle = clair ? "rgba(84,76,110,0.10)" : "rgba(14,14,28,0.22)";
      c.lineWidth = 0.6 + rnd() * 1.6;
      c.beginPath();
      c.moveTo(x0, g.profil(x0) + 1);
      const xm = (x0 + x1) / 2 + (rnd() - 0.5) * g.demi * 0.04;
      c.quadraticCurveTo(xm, g.profil(xm) + h * 0.004, x1, g.profil(x1) + h * (0.002 + rnd() * 0.01));
      c.stroke();
    }
    // bois sombres des basses pentes
    for (let i = 0; i < 260; i++) {
      const x = rnd() * w;
      const top = g.profil(x);
      if (top > H - h * 0.004) continue;
      const y = top + (H - top) * (0.45 + rnd() * 0.55);
      c.fillStyle = rgba([30, 30, 50], 0.35);
      ell(c, x, y, h * (0.002 + rnd() * 0.004), h * (0.0012 + rnd() * 0.002));
    }
    // flanc gauche touche par la lueur du couchant, flanc droit dans l'ombre
    const gx = c.createLinearGradient(g.cx - g.demi * 0.8, 0, g.cx + g.demi * 0.6, 0);
    gx.addColorStop(0, "rgba(160,108,122,0.16)");
    gx.addColorStop(0.5, "rgba(120,90,120,0.04)");
    gx.addColorStop(1, "rgba(10,10,26,0.18)");
    c.fillStyle = gx;
    c.fillRect(0, g.sy - 4, w, H - g.sy + 8);
    // brume chaude au pied
    const gb = c.createLinearGradient(0, H - h * 0.09, 0, H);
    gb.addColorStop(0, "rgba(120,90,112,0)");
    gb.addColorStop(1, "rgba(150,104,112,0.38)");
    c.fillStyle = gb;
    c.fillRect(0, H - h * 0.09, w, h * 0.1);
    c.restore();
    // contre-jour sur la crete
    c.beginPath();
    trace(c, g.profil, Math.max(0, g.cx - g.demi * 0.55), Math.min(w, g.cx + g.demi * 0.55), pas);
    c.strokeStyle = "rgba(200,128,108,0.07)";
    c.lineWidth = 4;
    c.stroke();
    c.strokeStyle = "rgba(230,156,120,0.16)";
    c.lineWidth = 1.1;
    c.stroke();

    // collines du plan moyen
    c.beginPath();
    c.moveTo(0, H + h * 0.03);
    trace(c, g.colline, 0, w, pas, true);
    c.lineTo(w, H + h * 0.03);
    c.closePath();
    const gc = c.createLinearGradient(0, H - h * 0.035, 0, H + h * 0.02);
    gc.addColorStop(0, "rgb(46,40,66)");
    gc.addColorStop(1, "rgb(40,36,58)");
    c.fillStyle = gc;
    c.fill();
    for (let i = 0; i < Math.round(w / 5); i++) {
      const x = rnd() * w, y = g.colline(x) + h * 0.003 + rnd() * h * 0.014;
      c.fillStyle = rgba([32, 30, 50], 0.3);
      ell(c, x, y, h * (0.0025 + rnd() * 0.003), h * (0.0018 + rnd() * 0.002));
    }

    // terrasses, du fond vers l'avant
    for (let k = 0; k < g.N; k++) {
      const b = g.bande(k), fog = Math.pow(1 - k / g.N, 1.8) * 0.75;
      const f = function (col) { return mix(col, BRUME, fog); };
      const y0 = g.L[k];
      const ctr = contraste(y0 + b * 0.5);
      // sol du replat, etendu jusqu'en bas
      c.beginPath();
      trace(c, function (x) { return g.ligne(k, x); }, 0, w, pas);
      c.lineTo(w, h);
      c.lineTo(0, h);
      c.closePath();
      const gsol = c.createLinearGradient(0, y0 - b * 0.2, 0, y0 + b * 0.7);
      gsol.addColorStop(0, rgba(f([44, 36, 32])));
      gsol.addColorStop(1, rgba(f([30, 25, 24])));
      c.fillStyle = gsol;
      c.fill();
      if (b > 12) {
        for (let i = 0; i < w / 5; i++) {
          const x = rnd() * w, y = g.ligne(k, x) + rnd() * b * 0.45;
          c.fillStyle = rgba(f(rnd() < 0.5 ? [46, 52, 38] : [24, 22, 20]), 0.5 * ctr + 0.2);
          c.fillRect(x, y, 1, 1 + rnd() * b * 0.05);
        }
      }
      // muret de pierre volcanique
      const bm = function (x) { return g.murHaut(k, x); };
      const bb = function (x) { return g.ligne(k + 1, x); };
      c.beginPath();
      trace(c, bm, 0, w, pas);
      c.lineTo(w, bb(w));
      for (let x = w; x > 0; x -= pas) c.lineTo(x, bb(x));
      c.lineTo(0, bb(0));
      c.closePath();
      const hm = b * 0.5;
      const gm = c.createLinearGradient(0, y0 + b * 0.35, 0, y0 + b * 1.1);
      gm.addColorStop(0, rgba(f(mix([30, 29, 36], [44, 42, 50], ctr))));
      gm.addColorStop(1, rgba(f([13, 13, 18])));
      c.fillStyle = gm;
      c.fill();
      if (hm > 4) {
        c.save();
        c.clip();
        const sh = borne(hm / (hm > 26 ? 3 : 2), 2.5, 26);
        for (let ry = -sh * 0.3; ry < hm + sh; ry += sh) {
          let x = -rnd() * sh * 2;
          while (x < w) {
            const sw = sh * (1.1 + rnd() * 1.3);
            const lum = borne(0.35 + (rnd() * 0.5 - ry / hm * 0.3) * ctr, 0, 1);
            c.fillStyle = rgba(f(mix([16, 16, 22], [66, 63, 72], lum)));
            const yy = bm(x + sw / 2) + ry + sh * 0.5;
            ell(c, x + sw / 2, yy, sw * 0.46, sh * 0.44, (rnd() - 0.5) * 0.25);
            if (sh > 5) {
              c.fillStyle = rgba(f([118, 110, 126]), 0.1 * ctr);
              ell(c, x + sw * 0.45, yy - sh * 0.22, sw * 0.3, sh * 0.12);
            }
            x += sw;
          }
        }
        c.restore();
      }
      c.beginPath();
      trace(c, bm, 0, w, pas);
      c.strokeStyle = rgba(f([96, 90, 104]), 0.22 * ctr);
      c.lineWidth = 1;
      c.stroke();
      // rang d'orangers sur le replat
      const r = b * 0.6;
      const ecart = r * 2.75;
      let x = -rnd() * ecart;
      while (x < w + r) {
        const xx = x + (rnd() - 0.5) * ecart * 0.15;
        const yy = g.ligne(k, xx) + b * (0.3 + rnd() * 0.08);
        const rr = r * (0.88 + rnd() * 0.24);
        const ct = Math.min(ctr, contraste(yy - rr));
        arbre(c, xx, yy, rr, rnd, fog, ct, !zoneCalme(xx, yy - rr), rec, false);
        x += ecart * (0.9 + rnd() * 0.2);
      }
    }

    // premier plan : herbes seches, pierres
    const yf = g.L[g.N];
    c.beginPath();
    trace(c, function (x) { return g.ligne(g.N, x); }, 0, w, pas);
    c.lineTo(w, h);
    c.lineTo(0, h);
    c.closePath();
    const gf = c.createLinearGradient(0, yf, 0, h);
    gf.addColorStop(0, "rgb(36,30,28)");
    gf.addColorStop(1, "rgb(13,11,13)");
    c.fillStyle = gf;
    c.fill();
    // taches de terre et de feuilles tombees
    for (let i = 0; i < 60; i++) {
      const x = rnd() * w, y = yf + h * 0.01 + rnd() * (h - yf);
      c.fillStyle = rnd() < 0.5 ? "rgba(10,9,12,0.28)" : "rgba(58,50,44,0.16)";
      ell(c, x, y, h * (0.02 + rnd() * 0.05), h * (0.004 + rnd() * 0.008), (rnd() - 0.5) * 0.1);
    }
    const nh = Math.round(w / 2.4);
    c.lineWidth = 1;
    for (let i = 0; i < nh; i++) {
      const x = rnd() * w;
      const p = Math.pow(rnd(), 0.6);
      const y = yf + h * 0.01 + p * (h - yf);
      const lg = h * (0.006 + p * 0.028) * (0.6 + rnd() * 0.6);
      c.strokeStyle = rgba(mix([22, 26, 22], [66, 70, 52], rnd() * 0.8), 0.55 + rnd() * 0.35);
      c.beginPath();
      for (let j = 0; j < 4; j++) {
        const dx = (rnd() - 0.5) * lg * 0.7;
        c.moveTo(x + j * 1.3, y);
        c.quadraticCurveTo(x + dx * 0.4, y - lg * 0.6, x + dx, y - lg * (0.7 + rnd() * 0.3));
      }
      c.stroke();
    }
    for (let i = 0; i < 14; i++) {
      const bord = rnd() < 0.5 ? rnd() * 0.28 : 0.72 + rnd() * 0.28;
      const x = bord * w, y = h * (0.92 + rnd() * 0.08), rr = h * (0.008 + rnd() * 0.018);
      c.fillStyle = "rgb(18,18,24)";
      ell(c, x, y, rr * 1.4, rr, (rnd() - 0.5) * 0.4);
      c.fillStyle = "rgba(100,96,112,0.16)";
      ell(c, x - rr * 0.3, y - rr * 0.45, rr * 0.8, rr * 0.3);
    }
    for (let i = 0; i < 5; i++) {
      const x = (rnd() < 0.5 ? rnd() * 0.2 : 0.8 + rnd() * 0.2) * w, y = h * (0.93 + rnd() * 0.06);
      c.fillStyle = "rgba(128,58,28,0.7)";
      ell(c, x, y, h * 0.004, h * 0.0036);
    }

    // voile calme derriere les entites
    const gv = c.createRadialGradient(w * 0.5, h * 0.62, 0, w * 0.5, h * 0.62, Math.max(w * 0.34, h * 0.3));
    gv.addColorStop(0, "rgba(38,40,66,0.30)");
    gv.addColorStop(0.6, "rgba(38,40,66,0.16)");
    gv.addColorStop(1, "rgba(38,40,66,0)");
    c.fillStyle = gv;
    c.fillRect(0, h * 0.3, w, h * 0.65);
    // brume basse sur les terrasses lointaines
    const gh = c.createLinearGradient(0, H - h * 0.01, 0, H + h * 0.07);
    gh.addColorStop(0, "rgba(150,104,112,0.10)");
    gh.addColorStop(1, "rgba(80,70,100,0)");
    c.fillStyle = gh;
    c.fillRect(0, H - h * 0.01, w, h * 0.08);
    // vignette
    const M = Math.max(w, h);
    const gg = c.createRadialGradient(w * 0.5, h * 0.52, M * 0.3, w * 0.5, h * 0.52, M * 0.85);
    gg.addColorStop(0, "rgba(4,5,12,0)");
    gg.addColorStop(1, "rgba(4,5,12,0.5)");
    c.fillStyle = gg;
    c.fillRect(0, 0, w, h);
  }

  /* ------------------------------------------------ arbres de bord, bougent */
  function peindreBord(c, x, y, R, graineN, rec) {
    arbre(c, x, y, R, graine(graineN), 0, 1, true, rec, true);
  }
  function sprite(R, graineN) {
    const W = R * 2.6, Hs = R * 2.3;
    const tl = toile(W * ech, Hs * ech);
    if (!tl) return null;
    tl.c.scale(ech, ech);
    peindreBord(tl.c, W / 2, Hs - R * 0.1, R, graineN, null);
    return { o: tl.o, W: W, H: Hs, bx: W / 2, by: Hs - R * 0.1 };
  }
  function puff(teinte) {
    const tl = toile(64, 64);
    if (!tl) return null;
    const g = tl.c.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, "rgba(" + teinte + ",1)");
    g.addColorStop(0.5, "rgba(" + teinte + ",0.45)");
    g.addColorStop(1, "rgba(" + teinte + ",0)");
    tl.c.fillStyle = g;
    tl.c.fillRect(0, 0, 64, 64);
    return tl.o;
  }

  /* ------------------------------------------------------- construction */
  const cle = w + "x" + h + "@" + ech;
  if (cache.cle !== cle) {
    cache.cle = cle;
    cache.g = geometrie();
    cache.reflets = [];
    const tl = toile(w * ech, h * ech);
    if (tl) {
      tl.c.scale(ech, ech);
      peindre(tl.c, cache.g, cache.reflets);
      cache.fond = tl.o;
    } else {
      cache.fond = null;
      cache.refletsFaits = false;
    }
    cache.bordG = sprite(cache.g.R, 77);
    cache.bordD = sprite(cache.g.R * 0.9, 91);
    cache.fumee = puff("150,140,162");
    cache.fumeeChaude = puff("196,132,116");
  }
  const g = cache.g;

  if (cache.fond) {
    ctx.drawImage(cache.fond, 0, 0, w, h);
  } else {
    // sans OffscreenCanvas : peinture directe a chaque image
    const rec = cache.refletsFaits ? null : cache.reflets;
    peindre(ctx, g, rec);
    cache.refletsFaits = true;
  }

  /* ---------------------------------------------------------- animation */
  ctx.save();
  // changer globalAlpha a chaque point coute cher : on range les points
  // par paliers d'opacite et on remplit un seul chemin par palier
  const NS = 8;
  if (!cache.seaux) { cache.seaux = []; for (let i = 0; i < NS; i++) cache.seaux.push([]); }
  const seaux = cache.seaux;
  function vider() { for (let i = 0; i < NS; i++) seaux[i].length = 0; }
  function ranger(a, amax, x, y, lx, ly) {
    if (a < amax * 0.04) return;
    const s = Math.min(NS - 1, Math.floor((a / amax) * NS));
    seaux[s].push(x, y, lx, ly);
  }
  function remplir(amax) {
    for (let i = 0; i < NS; i++) {
      const q = seaux[i];
      if (!q.length) continue;
      ctx.globalAlpha = ((i + 0.5) / NS) * amax;
      ctx.beginPath();
      for (let j = 0; j < q.length; j += 4) ctx.rect(q[j], q[j + 1], q[j + 2], q[j + 3]);
      ctx.fill();
    }
  }
  // etoiles qui scintillent
  ctx.fillStyle = "rgb(236,236,255)";
  const et = g.etoiles;
  vider();
  for (let i = 0; i < et.length; i++) {
    const e = et[i];
    ranger(e[3] * (0.6 + 0.4 * Math.sin(t * e[5] + e[4])), 0.8, e[0], e[1], e[2], e[2]);
  }
  remplir(0.8);
  // Venus, basse sur l'horizon
  if (g.profil(w * 0.16) > h * 0.415) {
    ctx.globalAlpha = 0.75 + 0.1 * Math.sin(t * 0.0009);
    ctx.fillStyle = "rgb(255,246,226)";
    ell(ctx, w * 0.16, h * 0.4, 1.4, 1.4);
    ctx.globalAlpha = 0.12;
    ell(ctx, w * 0.16, h * 0.4, 4, 4);
  }

  // lueur du cratere et panache qui derive
  const sx = g.cx - g.demi * 0.005, sy = g.profil(sx);
  const pulse = 0.5 + 0.5 * Math.sin(t * 0.0007) * Math.sin(t * 0.00023 + 1);
  const lr = h * 0.022;
  const gl = ctx.createRadialGradient(sx, sy, 0, sx, sy, lr);
  gl.addColorStop(0, "rgba(232,104,56," + (0.28 + 0.14 * pulse) + ")");
  gl.addColorStop(1, "rgba(232,104,56,0)");
  ctx.globalAlpha = 1;
  ctx.fillStyle = gl;
  ctx.fillRect(sx - lr, sy - lr, lr * 2, lr * 2);
  const NP = 24;
  for (let i = 0; i < NP; i++) {
    let p = t / 80000 + i / NP;
    p -= Math.floor(p);
    const px = sx + p * g.demi * 0.5 + Math.sin(p * 7 + i) * h * 0.004;
    const py = sy - h * 0.006 - p * h * 0.075 - p * p * h * 0.02 + Math.sin(p * 5 + t * 0.00025 + i * 1.3) * h * 0.004;
    const rr = h * (0.01 + p * 0.05) * (0.85 + 0.3 * ((i * 0.618) % 1));
    const a = 0.3 * Math.pow(Math.sin(Math.PI * p), 0.8) * (1 - p * 0.35);
    const img = p < 0.18 && cache.fumeeChaude ? cache.fumeeChaude : cache.fumee;
    ctx.globalAlpha = a;
    if (img) ctx.drawImage(img, px - rr, py - rr * 0.7, rr * 2, rr * 1.4);
    else { ctx.fillStyle = "rgb(150,140,162)"; ell(ctx, px, py, rr, rr * 0.7); }
  }

  // lumieres des villages
  ctx.fillStyle = "rgb(255,196,128)";
  const lu = g.lumieres;
  vider();
  for (let i = 0; i < lu.length; i++) {
    const l = lu[i];
    ranger(l[2] * (0.75 + 0.25 * Math.sin(t * l[4] + l[3])), 0.8, l[0], l[1], 1.2, 1.2);
  }
  remplir(0.8);

  // frisson du feuillage : reflets qui s'allument au passage d'un souffle
  ctx.fillStyle = "rgb(126,158,146)";
  const rf = cache.reflets;
  vider();
  for (let i = 0; i < rf.length; i++) {
    const q = rf[i];
    const souffle = 0.5 + 0.5 * Math.sin(q[0] * 0.005 - t * 0.0006);
    ranger(q[4] * souffle * souffle * (0.5 + 0.5 * Math.sin(t * 0.004 + q[3])), 0.4, q[0], q[1], q[2], q[2] * 0.7);
  }
  remplir(0.4);
  ctx.globalAlpha = 1;

  // orangers de bord, balances doucement
  const R = g.R;
  const bords = [
    [cache.bordG, R, 77, w * 0.02, h + R * 0.12, 0],
    [cache.bordD, R * 0.9, 91, w * 0.985, h + R * 0.1, 2.1],
  ];
  for (let i = 0; i < 2; i++) {
    const b = bords[i];
    const ang = 0.012 * Math.sin(t * 0.00055 + b[5]) + 0.006 * Math.sin(t * 0.0013 + b[5] * 2);
    ctx.save();
    ctx.translate(b[3], b[4]);
    ctx.rotate(ang);
    if (b[0]) ctx.drawImage(b[0].o, -b[0].bx, -b[0].by, b[0].W, b[0].H);
    else peindreBord(ctx, 0, 0, b[1], b[2], null);
    ctx.restore();
  }
  ctx.restore();
}

/* --------------------------------------------------------- archipels */
function decorArchipels(ctx, w, h, t, cache) {
  const H0 = h * 0.515; // ligne ou l'eau touche le fond du fjord
  const S = Math.max(0.45, Math.min(w / 1920, h / 1080));

  // generateur pseudo aleatoire a graine fixe (mulberry32)
  function rng(seed) {
    let a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      let x = a;
      x = Math.imul(x ^ (x >>> 15), x | 1);
      x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
      return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
    };
  }
  // bruit 1D lisse et sa version fractale
  function bruit(seed) {
    const r = rng(seed), n = 64, tab = [];
    for (let i = 0; i < n; i++) tab.push(r() * 2 - 1);
    return function (x) {
      const i = Math.floor(x), f = x - i, s = f * f * (3 - 2 * f);
      const a = tab[((i % n) + n) % n], b = tab[(((i + 1) % n) + n) % n];
      return a + (b - a) * s;
    };
  }
  function fbm(nz, x, oct) {
    let v = 0, amp = 0.5, fr = 1;
    for (let o = 0; o < oct; o++) { v += nz(x * fr + o * 17.3) * amp; fr *= 2.13; amp *= 0.5; }
    return v;
  }
  function poly(c, pts) {
    c.beginPath();
    c.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) c.lineTo(pts[i][0], pts[i][1]);
    c.closePath();
  }
  function lin(c, x0, y0, x1, y1, stops) {
    const g = c.createLinearGradient(x0, y0, x1, y1);
    for (const s of stops) g.addColorStop(s[0], s[1]);
    return g;
  }
  function rad(c, x, y, r, stops) {
    const g = c.createRadialGradient(x, y, 0, x, y, r);
    for (const s of stops) g.addColorStop(s[0], s[1]);
    return g;
  }

  /* ---------- formes : falaises et pic, calculees une fois ---------- */
  // bord d'une falaise : liste de points (x, y) de haut en bas
  function bordFalaise(seed, cotes, jitter) {
    const nz = bruit(seed), pts = [];
    const n = 70;
    for (let i = 0; i <= n; i++) {
      const u = i / n;
      // interpolation entre les points cles
      let k = 0;
      while (k < cotes.length - 2 && u > cotes[k + 1][1]) k++;
      const a = cotes[k], b = cotes[k + 1];
      const f = (u - a[1]) / (b[1] - a[1]);
      const s = f * f * (3 - 2 * f);
      const x = a[0] + (b[0] - a[0]) * s;
      const y = cotes[0][2] + (H0 - cotes[0][2]) * u;
      pts.push([x * w + fbm(nz, u * 9, 4) * jitter * w, y]);
    }
    pts[pts.length - 1][1] = H0 + 1;
    return pts;
  }
  function crete(seed, x0, x1, y0, y1, amp) {
    const nz = bruit(seed), pts = [];
    const n = 50;
    for (let i = 0; i <= n; i++) {
      const u = i / n;
      pts.push([x0 + (x1 - x0) * u, y0 + (y1 - y0) * u + fbm(nz, u * 6, 4) * amp]);
    }
    return pts;
  }
  function formes() {
    const F = {};
    // falaise gauche proche : haut, bord, pied
    const topL = crete(11, 0, w * 0.27, h * 0.02, h * 0.1, h * 0.03);
    const faceL = bordFalaise(12, [[0.27, 0, 0.1 * h], [0.29, 0.25], [0.315, 0.55], [0.345, 0.85], [0.39, 1]], 0.012);
    faceL[0][1] = topL[topL.length - 1][1];
    F.L = [[0, -2]].concat(topL, faceL, [[0, H0 + 1]]);
    F.faceL = faceL;
    // falaise droite proche
    const topR = crete(21, w, w * 0.79, h * 0.0, h * 0.075, h * 0.03);
    const faceR = bordFalaise(22, [[0.79, 0, 0.075 * h], [0.77, 0.3], [0.735, 0.6], [0.7, 0.87], [0.655, 1]], 0.012);
    faceR[0][1] = topR[topR.length - 1][1];
    F.R = [[w, -2]].concat(topR, faceR, [[w, H0 + 1]]);
    F.faceR = faceR;
    // falaises du second plan, plus bleues
    const topL2 = crete(31, w * 0.2, w * 0.395, h * 0.3, h * 0.215, h * 0.045);
    const faceL2 = bordFalaise(32, [[0.395, 0, 0.215 * h], [0.41, 0.3], [0.44, 0.75], [0.475, 1]], 0.01);
    faceL2[0][1] = topL2[topL2.length - 1][1];
    F.L2 = topL2.concat(faceL2, [[w * 0.2, H0 + 1]]);
    const topR2 = crete(41, w * 0.82, w * 0.645, h * 0.36, h * 0.28, h * 0.045);
    const faceR2 = bordFalaise(42, [[0.645, 0, 0.28 * h], [0.63, 0.35], [0.605, 0.8], [0.585, 1]], 0.01);
    faceR2[0][1] = topR2[topR2.length - 1][1];
    F.R2 = topR2.concat(faceR2, [[w * 0.82, H0 + 1]]);
    // crete lointaine derriere le pic
    F.far = [[w * 0.25, H0 + 1]].concat(crete(51, w * 0.25, w * 0.85, h * 0.4, h * 0.37, h * 0.035), [[w * 0.85, H0 + 1]]);
    // le pain de sucre
    const ax = w * 0.555, ay = h * 0.105;
    const hb = Math.max(w * 0.12, h * 0.17);
    const nz = bruit(61), pk = [];
    const n = 60;
    for (let i = 0; i <= n; i++) { // flanc gauche, de la base au sommet
      const u = i / n;
      pk.push([ax - hb * Math.pow(1 - u, 1.15) + fbm(nz, u * 9, 5) * hb * 0.05 * (1 - u) * Math.min(1, u * 3), H0 - (H0 - ay) * u]);
    }
    for (let i = n; i >= 0; i--) { // flanc droit, du sommet a la base
      const u = i / n;
      pk.push([ax + hb * 0.95 * Math.pow(1 - u, 0.95) + fbm(nz, 40 + u * 9, 5) * hb * 0.05 * (1 - u) * Math.min(1, u * 3), H0 - (H0 - ay) * u]);
    }
    F.pic = pk; F.ax = ax; F.ay = ay; F.hb = hb;
    return F;
  }

  /* ---------- peinture d'une masse boisee ---------- */
  // texture de canopee : une tuile repetable, peinte une fois
  function tuile(seed, teintes, dens, lum) {
    if (!OC) return null;
    const T = Math.round(300 * Math.max(0.7, S));
    const cv = new OC(T, T), c = cv.getContext("2d", { willReadFrequently: true });
    const r = rng(seed), rr = 3.2 * S * dens;
    const nb = Math.min(7000, (T * T) / (rr * rr * 2.2));
    for (let i = 0; i < nb; i++) {
      const x = r() * T, y = r() * T;
      const col = teintes[(r() * teintes.length) | 0];
      const al = 0.35 + r() * 0.5, ex = rr * (0.6 + r()), ey = rr * (0.45 + r() * 0.6);
      const hl = r() < 0.25, ha = 0.25 + r() * 0.3;
      for (let ox = -T; ox <= T; ox += T) for (let oy = -T; oy <= T; oy += T) {
        const px = x + ox, py = y + oy;
        if (px < -2 * rr || px > T + 2 * rr || py < -2 * rr || py > T + 2 * rr) continue;
        c.fillStyle = col; c.globalAlpha = al;
        c.beginPath(); c.ellipse(px, py, ex, ey, 0, 0, Math.PI * 2); c.fill();
        if (hl) { // accroche de lumiere sur le haut du houppier
          c.fillStyle = lum; c.globalAlpha = ha;
          c.beginPath(); c.ellipse(px - rr * 0.3, py - rr * 0.35, rr * 0.45, rr * 0.3, 0, 0, Math.PI * 2); c.fill();
        }
      }
    }
    return cv;
  }
  function foret(c, pts, seed, base, teintes, dens, lum) {
    poly(c, pts);
    c.fillStyle = base;
    c.fill();
    const tl = tuile(seed, teintes, dens, lum);
    if (tl && c.createPattern) {
      const pat = c.createPattern(tl, "repeat");
      if (pat) { c.fillStyle = pat; c.fill(); }
    }
  }
  // traits de roche nue, glissements de terrain sur la paroi
  function roche(c, pts, seed, n, x0, x1, ya, yb, col) {
    const r = rng(seed);
    c.save();
    poly(c, pts);
    c.clip();
    c.strokeStyle = col;
    c.lineCap = "round";
    for (let i = 0; i < n; i++) {
      let x = x0 + r() * (x1 - x0), y = ya + r() * (yb - ya) * 0.7;
      const len = (0.03 + r() * 0.12) * h;
      c.lineWidth = (2 + r() * 6) * S;
      c.globalAlpha = 0.08 + r() * 0.2;
      c.beginPath();
      c.moveTo(x, y);
      const steps = 8;
      for (let k = 0; k < steps; k++) { x += (r() - 0.5) * 5 * S; y += len / steps; c.lineTo(x, y); }
      c.stroke();
    }
    c.globalAlpha = 1;
    c.restore();
  }

  /* ---------- tout ce qui est au dessus de l'eau ---------- */
  function peindreHaut(c, F) {
    // ciel de fin de journee
    c.fillStyle = lin(c, 0, 0, 0, H0, [[0, "#0a101d"], [0.4, "#17223a"], [0.75, "#3a3b4f"], [1, "#6a5458"]]);
    c.fillRect(0, 0, w, H0 + 1);
    c.fillStyle = rad(c, w * 0.5, H0 * 0.92, w * 0.42, [[0, "rgba(214,150,118,0.32)"], [0.5, "rgba(170,110,110,0.12)"], [1, "rgba(120,90,110,0)"]]);
    c.fillRect(0, 0, w, H0 + 1);
    // stratus fins eclaires par dessous
    const r = rng(7);
    for (let i = 0; i < 14; i++) {
      const x = w * (0.3 + r() * 0.45), y = h * (0.05 + r() * 0.28);
      c.fillStyle = rad(c, 0, 0, 1, [[0, "rgba(228,176,150,0.10)"], [1, "rgba(228,176,150,0)"]]);
      c.save();
      c.translate(x, y);
      c.scale(w * (0.05 + r() * 0.08), h * (0.004 + r() * 0.006));
      c.beginPath(); c.arc(0, 0, 1, 0, Math.PI * 2); c.fill();
      c.restore();
    }
    // crete lointaine, noyee dans la brume
    poly(c, F.far);
    c.fillStyle = lin(c, 0, h * 0.34, 0, H0, [[0, "#39394a"], [1, "#2a3140"]]);
    c.fill();

    // le pic
    const pk = F.pic;
    c.save();
    poly(c, pk);
    c.fillStyle = lin(c, 0, F.ay, 0, H0, [[0, "#4a4550"], [0.35, "#343845"], [1, "#222b38"]]);
    c.fill();
    c.clip();
    // flanc ouest qui prend la derniere lumiere
    c.fillStyle = lin(c, F.ax - F.hb, 0, F.ax + F.hb * 0.3, 0, [[0, "rgba(196,140,120,0.22)"], [0.55, "rgba(170,120,115,0.10)"], [1, "rgba(0,0,0,0)"]]);
    c.fillRect(F.ax - F.hb * 1.2, 0, F.hb * 2.4, H0);
    // flanc est dans l'ombre
    c.fillStyle = lin(c, F.ax, 0, F.ax + F.hb, 0, [[0, "rgba(10,14,24,0)"], [0.25, "rgba(10,14,24,0.35)"], [1, "rgba(10,14,24,0.5)"]]);
    c.fillRect(F.ax, 0, F.hb * 1.2, H0);
    // ravines qui descendent du sommet
    const rp = rng(62);
    c.lineCap = "round";
    for (let i = 0; i < 55; i++) {
      const u = 0.1 + rp() * 0.75;
      const side = rp() < 0.5 ? -1 : 1;
      let x = F.ax + side * F.hb * (rp() * 0.9) * (1 - u * 0.9), y = F.ay + (H0 - F.ay) * u * 0.6;
      const lg = (0.03 + rp() * 0.12) * h;
      c.strokeStyle = rp() < 0.7 ? "rgba(14,17,26,0.28)" : "rgba(170,150,150,0.08)";
      c.lineWidth = (1.2 + rp() * 3) * S;
      c.beginPath(); c.moveTo(x, y);
      for (let k = 0; k < 6; k++) { x += side * (1 + rp() * 3) * S + (rp() - 0.5) * 3 * S; y += lg / 6; c.lineTo(x, y); }
      c.stroke();
    }
    c.restore();
    // foret au pied du pic
    const nzb = bruit(64), bas = [];
    for (const p of pk) bas.push([p[0], Math.max(p[1], H0 - (H0 - F.ay) * 0.3 + fbm(nzb, (p[0] / w) * 14, 4) * h * 0.07 + Math.abs(p[0] - F.ax) / F.hb * h * 0.04)]);
    foret(c, bas, 63, "#222c38", ["#202a36", "#26303c", "#1c2632", "#2a3440"], 0.7, "#3c434d");
    c.fillStyle = "rgba(70,76,94,0.25)";
    poly(c, bas); c.fill();

    // falaises du second plan
    foret(c, F.R2, 43, "#1b2531", ["#1a2430", "#212c38", "#16202b", "#26313c"], 0.8, "#39424c");
    roche(c, F.R2, 44, 30, w * 0.58, w * 0.7, h * 0.3, H0, "rgba(70,78,90,0.35)");
    foret(c, F.L2, 33, "#18222e", ["#17212c", "#1e2934", "#131c26", "#23303a"], 0.8, "#39424c");
    roche(c, F.L2, 34, 30, w * 0.38, w * 0.48, h * 0.24, H0, "rgba(70,78,90,0.35)");
    // voile de brume sur le second plan
    c.fillStyle = lin(c, 0, h * 0.2, 0, H0, [[0, "rgba(60,66,84,0.18)"], [1, "rgba(80,86,104,0.3)"]]);
    poly(c, F.L2); c.fill();
    poly(c, F.R2); c.fill();

    // falaises proches, foret tres sombre et bleutee
    const teintes = ["#0b1418", "#0e191b", "#08100f", "#111d1f", "#0c1614", "#14201f"];
    foret(c, F.L, 13, "#0a1215", teintes, 1, "#223032");
    roche(c, F.L, 14, 45, w * 0.18, w * 0.4, h * 0.08, H0, "rgba(58,66,74,0.3)");
    foret(c, F.R, 23, "#0a1215", teintes, 1, "#223032");
    roche(c, F.R, 24, 45, w * 0.64, w * 0.84, h * 0.07, H0, "rgba(58,66,74,0.3)");
    // liseres de lumiere sur les aretes des parois
    c.lineWidth = 1.4 * S;
    c.strokeStyle = "rgba(150,130,130,0.16)";
    for (const face of [F.faceL, F.faceR]) {
      c.beginPath();
      c.moveTo(face[0][0], face[0][1]);
      for (const p of face) c.lineTo(p[0], p[1]);
      c.stroke();
    }
    // brume posee sur l'eau au fond
    c.fillStyle = lin(c, 0, H0 - h * 0.07, 0, H0, [[0, "rgba(110,120,140,0)"], [1, "rgba(120,125,145,0.16)"]]);
    c.fillRect(0, H0 - h * 0.07, w, h * 0.07 + 1);
    // assombrit les bords du haut pour le titre et le menu
    c.fillStyle = lin(c, 0, 0, 0, h * 0.2, [[0, "rgba(4,6,10,0.35)"], [1, "rgba(4,6,10,0)"]]);
    c.fillRect(0, 0, w, h * 0.2);
  }

  /* ---------- la berge ---------- */
  function rive(x) {
    const u = x / w;
    return h * (0.705 + 0.01 * Math.sin(u * 7.3 + 1.1) + 0.006 * Math.sin(u * 17 + 2)) - h * 0.09 * Math.pow(Math.abs(u - 0.5) * 2, 3);
  }
  function peindreBerge(c) {
    const n = 80;
    c.beginPath();
    c.moveTo(0, h);
    for (let i = 0; i <= n; i++) { const x = (i / n) * w; c.lineTo(x, rive(x)); }
    c.lineTo(w, h);
    c.closePath();
    c.fillStyle = lin(c, 0, h * 0.62, 0, h, [[0, "#1b1d21"], [0.35, "#141619"], [1, "#07080a"]]);
    c.fill();
    c.save();
    c.clip();
    // bande mouillee au bord de l'eau
    c.strokeStyle = "rgba(6,9,12,0.7)";
    c.lineWidth = 5 * S;
    c.beginPath();
    for (let i = 0; i <= n; i++) { const x = (i / n) * w; c[i ? "lineTo" : "moveTo"](x, rive(x) + 3 * S); }
    c.stroke();
    // galets, petits et fondus au loin, gros et contrastes devant
    const r = rng(71);
    // grain fin du gravier sur toute la berge
    if (OC && c.createPattern) {
      const T = 160, cv = new OC(T, T), g2 = cv.getContext("2d", { willReadFrequently: true });
      for (let i = 0; i < 1400; i++) {
        const g = (14 + r() * 26) | 0;
        g2.fillStyle = "rgb(" + g + "," + (g + 2) + "," + (g + 4) + ")";
        const sz = (0.8 + r() * 1.6) * S;
        g2.fillRect(r() * T, r() * T, sz * 1.6, sz);
      }
      const pat = c.createPattern(cv, "repeat");
      if (pat) { c.fillStyle = pat; c.globalAlpha = 0.8; c.fillRect(0, h * 0.55, w, h * 0.45); c.globalAlpha = 1; }
    }
    // galets, tries du fond vers l'avant pour se recouvrir juste
    const nb = Math.round(2600 * Math.max(0.35, (w * h) / (1920 * 1080)));
    const gal = [];
    for (let i = 0; i < nb; i++) {
      const x = r() * w;
      const y0 = rive(x);
      const y = y0 + (h - y0) * Math.pow(r(), 0.55);
      gal.push([x, y, r(), r(), r(), r(), r()]);
    }
    gal.sort((p, q) => p[1] - q[1]);
    for (const q of gal) {
      const x = q[0], y = q[1];
      const d = Math.max(0, (y - h * 0.62) / (h * 0.38)); // 0 au fond, 1 devant
      const rr = (0.9 + Math.pow(d, 2.4) * 13 * (0.4 + q[2])) * S;
      const devant = y > h * 0.86 ? 1 : Math.max(0, (y - h * 0.8) / (h * 0.06));
      const g = 18 + q[3] * 18 + devant * q[4] * 30;
      const chaud = q[5] < 0.3 ? 5 : 0; // quelques galets bruns
      const rx = rr * (0.8 + q[6] * 0.6), ry = rr * (0.36 + q[4] * 0.22), rot = (q[5] - 0.5) * 0.7;
      c.fillStyle = "rgba(2,3,4," + (0.3 + devant * 0.35) + ")";
      c.beginPath(); c.ellipse(x + rr * 0.1, y + ry * 0.45, rx * 1.02, ry * 0.9, rot, 0, Math.PI * 2); c.fill();
      c.fillStyle = rr < 3 * S ? "rgb(" + ((g + 4) | 0) + "," + ((g + 6) | 0) + "," + ((g + 8) | 0) + ")" : lin(c, 0, y - ry, 0, y + ry, [[0, "rgb(" + ((g + 10 + chaud) | 0) + "," + ((g + 12) | 0) + "," + ((g + 14 - chaud) | 0) + ")"], [1, "rgb(" + ((g * 0.55) | 0) + "," + ((g * 0.58) | 0) + "," + ((g * 0.62) | 0) + ")"]]);
      c.beginPath(); c.ellipse(x, y, rx, ry, rot, 0, Math.PI * 2); c.fill();
    }
    // mousse : des plaques faites de fines touffes, en bas et sur les bords
    const rm = rng(72);
    const mousses = ["#15231a", "#1b2c1d", "#22361f", "#122017", "#2a4024"];
    for (let pi = 0; pi < 34; pi++) {
      const cote = rm();
      let px, py;
      if (cote < 0.4) { px = Math.pow(rm(), 1.5) * w * 0.28; py = h * (0.84 + rm() * 0.16); }
      else if (cote < 0.8) { px = w - Math.pow(rm(), 1.5) * w * 0.28; py = h * (0.84 + rm() * 0.16); }
      else { px = rm() * w; py = h * (0.93 + rm() * 0.07); }
      const pr = (25 + rm() * 60) * S;
      for (let i = 0; i < 90; i++) {
        const a = rm() * Math.PI * 2, dd = Math.sqrt(rm());
        const x = px + Math.cos(a) * dd * pr * 1.6, y = py + Math.sin(a) * dd * pr * 0.5;
        if (y < rive(x) + 8 * S) continue;
        c.fillStyle = mousses[(rm() * mousses.length) | 0];
        c.globalAlpha = (0.25 + rm() * 0.4) * (1 - dd * 0.6);
        const rr = (1 + rm() * 2.6) * S;
        c.beginPath(); c.ellipse(x, y, rr * 1.3, rr, 0, 0, Math.PI * 2); c.fill();
      }
    }
    c.globalAlpha = 1;
    c.restore();
    // gros blocs moussus dans les coins
    function bloc(cx, cy, rx, ry, seed) {
      const rb = rng(seed), pts = [];
      for (let i = 0; i < 24; i++) {
        const a = (i / 24) * Math.PI * 2;
        const k = 1 + (rb() - 0.5) * 0.12;
        pts.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k * (Math.sin(a) > 0 ? 1.2 : 1)]);
      }
      poly(c, pts);
      c.fillStyle = lin(c, 0, cy - ry, 0, cy + ry, [[0, "#23282b"], [0.5, "#131619"], [1, "#050607"]]);
      c.fill();
      c.save(); c.clip();
      c.fillStyle = lin(c, 0, cy - ry, 0, cy, [[0, "rgba(40,62,36,0.9)"], [1, "rgba(24,38,24,0)"]]);
      c.fillRect(cx - rx * 1.2, cy - ry * 1.2, rx * 2.4, ry * 1.3);
      for (let i = 0; i < 160; i++) {
        c.fillStyle = rb() < 0.5 ? "#2c4428" : "#1c2f1c";
        c.globalAlpha = 0.5;
        const x = cx + (rb() - 0.5) * rx * 1.8, y = cy - ry + rb() * ry * 0.9;
        c.beginPath(); c.arc(x, y, (1 + rb() * 3) * S, 0, Math.PI * 2); c.fill();
      }
      c.globalAlpha = 1;
      c.restore();
    }
    bloc(w * 0.03, h * 0.97, Math.max(w * 0.1, 60 * S), h * 0.07, 81);
    bloc(w * 0.15, h * 1.0, Math.max(w * 0.07, 40 * S), h * 0.045, 82);
    bloc(w * 0.99, h * 0.95, Math.max(w * 0.11, 60 * S), h * 0.08, 83);
    // fougeres arborescentes en silhouette dans les coins
    function fronde(bx, by, ang, lg, courbe, seed) {
      const rf = rng(seed);
      const n = 26;
      let x = bx, y = by, a = ang;
      const pts = [];
      for (let i = 0; i <= n; i++) { pts.push([x, y, a]); a += courbe / n; x += Math.cos(a) * lg / n; y += Math.sin(a) * lg / n; }
      c.strokeStyle = "#05080a";
      c.lineWidth = 2 * S;
      c.beginPath(); c.moveTo(bx, by);
      for (const p of pts) c.lineTo(p[0], p[1]);
      c.stroke();
      c.fillStyle = "#060a0b";
      for (let i = 2; i < n; i++) {
        const p = pts[i];
        const f = Math.sin((i / n) * Math.PI) * lg * 0.16;
        for (const s of [-1, 1]) {
          const aa = p[2] + s * (1.1 + rf() * 0.2);
          c.beginPath();
          c.moveTo(p[0], p[1]);
          c.quadraticCurveTo(p[0] + Math.cos(aa - s * 0.3) * f * 0.6, p[1] + Math.sin(aa - s * 0.3) * f * 0.6 + f * 0.1, p[0] + Math.cos(aa) * f, p[1] + Math.sin(aa) * f + f * 0.25);
          c.quadraticCurveTo(p[0] + Math.cos(aa + s * 0.3) * f * 0.5, p[1] + Math.sin(aa + s * 0.3) * f * 0.5, p[0] + Math.cos(p[2]) * 4 * S, p[1] + Math.sin(p[2]) * 4 * S);
          c.fill();
        }
      }
    }
    const lf = Math.min(w * 0.22, h * 0.26);
    fronde(-w * 0.01, h * 1.02, -1.25, lf, 1.3, 91);
    fronde(-w * 0.02, h * 0.98, -0.75, lf * 0.9, 1.0, 92);
    fronde(w * 0.02, h * 1.03, -1.6, lf * 0.7, 1.5, 93);
    fronde(w * 1.01, h * 1.02, -1.9, lf * 0.95, -1.3, 94);
    fronde(w * 1.02, h * 0.97, -2.4, lf * 0.8, -0.9, 95);
  }

  /* ---------- nuage bas, fait de nappes douces ---------- */
  function peindreNuage(c, cx, cy, cw, ch, seed, teinte) {
    const r = rng(seed);
    for (let i = 0; i < 46; i++) {
      const a = r() * Math.PI * 2, d = Math.sqrt(r());
      const x = cx + Math.cos(a) * d * cw * 0.26, y = cy + Math.sin(a) * d * ch * 0.14;
      const rr = (0.1 + r() * 0.12) * cw * (1 - d * 0.4);
      c.save();
      c.translate(x, y);
      c.scale(rr, Math.min(rr * (ch / cw) * 1.6, ch * 0.3));
      c.fillStyle = rad(c, 0, 0, 1, [[0, "rgba(" + teinte + ",0.16)"], [1, "rgba(" + teinte + ",0)"]]);
      c.beginPath(); c.arc(0, 0, 1, 0, Math.PI * 2); c.fill();
      c.restore();
    }
  }
  const NUAGES = [
    { x: 0.27, y: 0.12, cw: 0.42, ch: 0.12, a: 0.95, v: 0.000031, ph: 0.4, s: 101, tn: "178,176,188" },
    { x: 0.6, y: 0.25, cw: 0.3, ch: 0.07, a: 0.75, v: 0.000024, ph: 2.1, s: 102, tn: "200,170,165" },
    { x: 0.86, y: 0.2, cw: 0.36, ch: 0.1, a: 0.85, v: 0.000028, ph: 4.0, s: 103, tn: "165,168,184" },
    { x: 0.5, y: 0.49, cw: 0.7, ch: 0.05, a: 0.55, v: 0.000019, ph: 1.3, s: 104, tn: "150,156,176" },
  ];

  /* ---------- precalcul ---------- */
  const m = ctx.getTransform ? ctx.getTransform() : null;
  const k = Math.min(2, Math.max(1, (m && m.a) || 1));
  const OC = typeof OffscreenCanvas !== "undefined" ? OffscreenCanvas : null;
  if (cache.w !== w || cache.h !== h || cache.k !== k) {
    cache.w = w; cache.h = h; cache.k = k;
    cache.F = formes();
    // cascade : suit la paroi droite, un peu en retrait de l'arete
    const cs = [];
    const xb = w * 0.855, yT = h * 0.13;
    const rc = rng(5);
    let x = xb;
    for (let i = 0; i <= 30; i++) {
      const y = yT + (H0 - yT) * (i / 30);
      x += (rc() - 0.45) * 2.2 * S;
      cs.push([x, y]);
    }
    cache.cas = cs;
    // clapotis : reflets fixes dont l'eclat varie
    const rr = rng(6), rid = [];
    for (let i = 0; i < 90; i++) {
      const v = Math.pow(rr(), 1.3);
      const y = H0 + 2 + v * (h * 0.71 - H0);
      rid.push({ x: rr() * w, y, l: (8 + v * 60 * rr()) * S + 4, p: rr() * 6.28, s: 0.0006 + rr() * 0.0012 });
    }
    cache.rid = rid;
    cache.rive = [];
    for (let i = 0; i <= 80; i++) { const xx = (i / 80) * w; cache.rive.push([xx, rive(xx)]); }
    cache.ok = false;
    if (OC) {
      const mk = (cw, ch) => {
        const cv = new OC(Math.max(1, Math.ceil(cw * k)), Math.max(1, Math.ceil(ch * k)));
        const c = cv.getContext("2d", { willReadFrequently: true });
        c.scale(k, k);
        return [cv, c];
      };
      const [cH, xH] = mk(w, H0 + 2);
      peindreHaut(xH, cache.F);
      // reflet : le haut en miroir, assombri
      const hw = h - H0;
      const [cE, xE] = mk(w, hw);
      xE.fillStyle = "#070c12";
      xE.fillRect(0, 0, w, hw);
      xE.save();
      xE.globalAlpha = 0.62;
      xE.translate(0, H0);
      xE.scale(1, -1);
      xE.drawImage(cH, 0, 0, w, H0 + 2);
      xE.restore();
      xE.fillStyle = lin(xE, 0, 0, 0, hw, [[0, "rgba(8,14,22,0.25)"], [0.3, "rgba(7,12,20,0.5)"], [1, "rgba(4,7,12,0.8)"]]);
      xE.fillRect(0, 0, w, hw);
      const [cB, xB] = mk(w, h);
      peindreBerge(xB);
      const nu = [];
      for (const n of NUAGES) {
        const cw = n.cw * w, ch = n.ch * h;
        const [cv, c] = mk(cw, ch);
        peindreNuage(c, cw / 2, ch / 2, cw, ch, n.s, n.tn);
        nu.push(cv);
      }
      // peint sur le processeur, puis fige en bitmap envoye une fois au GPU
      const fige = cv => (cv.transferToImageBitmap ? cv.transferToImageBitmap() : cv);
      cache.cH = fige(cH); cache.cE = fige(cE); cache.cB = fige(cB); cache.nu = nu.map(fige);
      cache.ok = true;
    }
  }
  const F = cache.F;

  /* ---------- image courante ---------- */
  if (cache.ok) ctx.drawImage(cache.cH, 0, 0, w, H0 + 2);
  else peindreHaut(ctx, F);

  // cascade qui ruisselle
  const cs = cache.cas;
  function trace() {
    ctx.beginPath();
    ctx.moveTo(cs[0][0], cs[0][1]);
    for (let i = 1; i < cs.length; i++) ctx.lineTo(cs[i][0], cs[i][1]);
  }
  ctx.save();
  ctx.lineCap = "round";
  trace();
  ctx.strokeStyle = "rgba(170,185,200,0.07)";
  ctx.lineWidth = 12 * S;
  ctx.stroke();
  ctx.strokeStyle = "rgba(170,185,200,0.10)";
  ctx.lineWidth = 6 * S;
  ctx.stroke();
  ctx.strokeStyle = "rgba(190,205,215,0.22)";
  ctx.lineWidth = 2.2 * S;
  ctx.stroke();
  if (ctx.setLineDash) {
    ctx.setLineDash([10 * S, 16 * S]);
    ctx.lineDashOffset = -t * 0.09 * S;
    ctx.strokeStyle = "rgba(225,232,240,0.38)";
    ctx.lineWidth = 1.6 * S;
    trace(); ctx.stroke();
    ctx.setLineDash([4 * S, 22 * S]);
    ctx.lineDashOffset = -t * 0.14 * S;
    ctx.strokeStyle = "rgba(235,240,245,0.3)";
    ctx.lineWidth = 1.1 * S;
    trace(); ctx.stroke();
    ctx.setLineDash([]);
  }
  // embruns au pied
  const pied = cs[cs.length - 1];
  const pul = 1 + Math.sin(t * 0.0021) * 0.12;
  ctx.fillStyle = rad(ctx, pied[0], pied[1], 26 * S * pul, [[0, "rgba(190,200,215,0.22)"], [1, "rgba(190,200,215,0)"]]);
  ctx.fillRect(pied[0] - 30 * S, pied[1] - 30 * S, 60 * S, 34 * S);
  ctx.restore();

  // nuages bas qui derivent lentement
  for (let i = 0; i < NUAGES.length; i++) {
    const n = NUAGES[i];
    const dx = Math.sin(t * n.v + n.ph) * w * 0.05 + Math.sin(t * n.v * 2.3 + n.ph * 2) * w * 0.012;
    const dy = Math.sin(t * n.v * 1.7 + n.ph) * h * 0.006;
    const cw = n.cw * w, ch = n.ch * h;
    const x = n.x * w - cw / 2 + dx, y = n.y * h - ch / 2 + dy;
    ctx.globalAlpha = n.a;
    if (cache.ok) ctx.drawImage(cache.nu[i], x, y, cw, ch);
    else peindreNuage(ctx, x + cw / 2, y + ch / 2, cw, ch, n.s, n.tn);
  }
  ctx.globalAlpha = 1;

  // eau : le reflet en bandes qui ondulent
  const hw = h - H0;
  const yMax = h * 0.73;
  if (cache.ok) {
    const cE = cache.cE;
    ctx.fillStyle = "#070c12";
    ctx.fillRect(0, H0, w, yMax - H0);
    let y = 0;
    while (H0 + y < yMax) {
      const d = y / (yMax - H0);
      const pas = 1.5 + d * 4;
      const dx = Math.sin(y * 0.09 / S - t * 0.0011) * (0.4 + d * 3.2) * S + Math.sin(y * 0.031 / S + t * 0.0007) * d * 2 * S;
      ctx.drawImage(cE, 0, y * k, w * k, Math.ceil(pas * k), dx, H0 + y, w, pas + 0.5);
      y += pas;
    }
    // le reste sous la berge, fixe
    ctx.drawImage(cE, 0, (yMax - H0) * k, w * k, (hw - (yMax - H0)) * k, 0, yMax, w, hw - (yMax - H0));
  } else {
    ctx.fillStyle = lin(ctx, 0, H0, 0, h, [[0, "#141c28"], [1, "#05080d"]]);
    ctx.fillRect(0, H0, w, hw);
  }
  // reflet mouvant de la cascade
  ctx.fillStyle = "rgba(180,195,210,0.07)";
  for (let i = 0; i < 6; i++) {
    const yy = H0 + 3 + i * 7 * S;
    ctx.fillRect(pied[0] - 2 * S + Math.sin(t * 0.002 + i) * 2 * S, yy, 4 * S, 4 * S);
  }
  // clapotis
  ctx.fillStyle = "rgb(170,180,200)";
  const rid = cache.rid;
  for (let i = 0; i < rid.length; i++) {
    const q = rid[i];
    const a = Math.sin(t * q.s + q.p);
    if (a <= 0.2) continue;
    ctx.globalAlpha = (a - 0.2) * 0.14;
    const x = q.x + Math.sin(t * 0.0003 + q.p) * 6 * S;
    ctx.fillRect(x, q.y, q.l, 1);
  }
  ctx.globalAlpha = 1;
  // ligne claire du fond, la ou le ciel se reflete
  ctx.fillStyle = "rgba(200,160,150,0.12)";
  ctx.fillRect(w * 0.44, H0, w * 0.2, 1);

  // berge
  if (cache.ok) {
    const y0 = h * 0.58;
    ctx.drawImage(cache.cB, 0, y0 * k, w * k, (h - y0) * k, 0, y0, w, h - y0);
  } else peindreBerge(ctx);
  // l'eau qui lape le bord des galets
  const rv = cache.rive;
  ctx.strokeStyle = "rgba(170,188,205,1)";
  ctx.lineWidth = 1.1 * S;
  ctx.globalAlpha = 0.1 + 0.06 * Math.sin(t * 0.0013);
  ctx.beginPath();
  const lap = 1.5 * S * Math.sin(t * 0.0013);
  for (let i = 0; i < rv.length; i++) ctx[i ? "lineTo" : "moveTo"](rv[i][0], rv[i][1] - lap);
  ctx.stroke();
  ctx.globalAlpha = 1;
}

/* ----------------------------------------------------------- islande */
function decorIslande(ctx, w, h, t, cache) {
  "use strict";
  const PI2 = Math.PI * 2;
  const HOR = 0.525; // horizon, en fraction de h

  /* generateur a graine fixe */
  function graine(s) {
    return function () {
      s = (s + 0x6D2B79F5) | 0;
      let r = Math.imul(s ^ (s >>> 15), 1 | s);
      r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }
  function hache(i, s) {
    const v = Math.sin(i * 127.1 + s * 311.7) * 43758.5453;
    return v - Math.floor(v);
  }
  function bruit(x, s) {
    const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f);
    return hache(i, s) * (1 - u) + hache(i + 1, s) * u;
  }
  function fbm(x, s, oct) {
    let v = 0, a = 0.5, f = 1, tot = 0;
    for (let o = 0; o < oct; o++) { v += a * bruit(x * f, s + o * 17); tot += a; a *= 0.5; f *= 2.03; }
    return v / tot;
  }
  function borne(v, a, b) { return v < a ? a : v > b ? b : v; }
  function mix(c1, c2, k) {
    return [c1[0] + (c2[0] - c1[0]) * k, c1[1] + (c2[1] - c1[1]) * k, c1[2] + (c2[2] - c1[2]) * k];
  }
  function rgb(c, a) {
    return "rgba(" + (c[0] | 0) + "," + (c[1] | 0) + "," + (c[2] | 0) + "," + (a === undefined ? 1 : a) + ")";
  }

  const sol = h * HOR;

  /* ---------- profils du relief ---------- */
  const vx = w * 0.7, vdemi = Math.max(w * 0.3, h * 0.5), vsom = h * 0.355;
  function volcan(x) {
    const u = Math.abs(x - vx) / vdemi;
    if (u >= 1) return sol + 2;
    const rug = (fbm(x / (h * 0.03), 3, 4) - 0.5) * h * 0.012 * Math.pow(Math.min(1, u * 2), 2);
    if (u < 0.07) return vsom + h * 0.004 * (1 - Math.cos((u / 0.07) * Math.PI)) + rug * 0.3;
    const s = (u - 0.07) / 0.93;
    return vsom + (sol + 2 - vsom) * (1 - Math.pow(1 - s, 2.3)) + rug;
  }
  function neigeVolcan(x) {
    const base = vsom + (sol - vsom) * 0.5;
    const langues = Math.pow(fbm(x / (h * 0.03), 9, 3), 1.5) * h * 0.035 - h * 0.01;
    return base + (fbm(x / (h * 0.05), 5, 3) - 0.5) * h * 0.04 + langues;
  }
  const gx = w * 0.2, gdemi = Math.max(w * 0.36, h * 0.5), gsom = h * 0.452;
  function calotte(x) {
    const u = (x - gx) / gdemi;
    if (Math.abs(u) >= 1) return sol + 2;
    const d = Math.pow(1 - u * u, 0.45);
    return sol + 2 - (sol + 2 - gsom) * d + (fbm(x / (h * 0.05), 11, 3) - 0.5) * h * 0.006;
  }
  function collines(x) {
    return sol - h * (0.006 + 0.022 * fbm(x / (h * 0.09), 21, 4)) - h * 0.012 * Math.pow(bruit(x / (h * 0.25), 23), 2);
  }

  function tracerProfil(c, f, pas, bas) {
    bas = bas || h * 0.6;
    c.beginPath();
    c.moveTo(-2, bas);
    for (let x = -2; x <= w + pas; x += pas) c.lineTo(x, f(x));
    c.lineTo(w + 2, bas);
    c.closePath();
  }

  /* ---------- couche ciel ---------- */
  function peindreCiel(c) {
    const g = c.createLinearGradient(0, 0, 0, sol);
    g.addColorStop(0, "#02040a");
    g.addColorStop(0.45, "#050b17");
    g.addColorStop(0.8, "#0a1522");
    g.addColorStop(1, "#122230");
    c.fillStyle = g;
    c.fillRect(0, 0, w, sol + 4);
    // lueur verte basse, l'aurore eclaire la brume de l'horizon
    const lg = c.createRadialGradient(w * 0.6, sol, 0, w * 0.6, sol, w * 0.7);
    lg.addColorStop(0, "rgba(40,90,70,0.16)");
    lg.addColorStop(1, "rgba(40,90,70,0)");
    c.fillStyle = lg;
    c.fillRect(0, 0, w, sol + 4);
    // voie lactee a peine visible
    const r = graine(77);
    for (let i = 0; i < 260; i++) {
      const k = r();
      const x = k * w, y = h * (0.05 + 0.3 * (1 - k)) + (r() - 0.5) * h * 0.12;
      const rr = h * (0.02 + r() * 0.05);
      const rg = c.createRadialGradient(x, y, 0, x, y, rr);
      rg.addColorStop(0, "rgba(120,130,160,0.018)");
      rg.addColorStop(1, "rgba(120,130,160,0)");
      c.fillStyle = rg;
      c.fillRect(x - rr, y - rr, rr * 2, rr * 2);
    }
    // etoiles fixes, pales
    const n = Math.round(w * h / 2600);
    for (let i = 0; i < n; i++) {
      const x = r() * w, y = Math.pow(r(), 1.3) * sol * 0.95;
      const fond = 1 - borne((y / sol - 0.6) / 0.35, 0, 1);
      const a = (0.15 + r() * 0.45) * fond;
      const z = r() < 0.9 ? 0.6 : 1.1;
      c.fillStyle = r() < 0.2 ? "rgba(255,225,200," + a + ")" : "rgba(210,225,255," + a + ")";
      c.fillRect(x, y, z, z);
    }
  }

  /* ---------- couche relief et sol ---------- */
  function peindreTerre(c, lueur) {
    // calotte glaciaire
    tracerProfil(c, calotte, 4);
    let g = c.createLinearGradient(0, gsom, 0, sol);
    g.addColorStop(0, lueur ? "rgba(150,255,200,1)" : "#46515d");
    g.addColorStop(1, lueur ? "rgba(150,255,200,0.2)" : "#29323c");
    c.fillStyle = g;
    c.fill();
    if (!lueur) {
      // stries de crevasses et nunataks sombres
      const r = graine(31);
      c.save(); tracerProfil(c, calotte, 4); c.clip();
      for (let i = 0; i < 40; i++) {
        const x = gx + (r() - 0.5) * gdemi * 1.7, y = calotte(x) + r() * h * 0.03;
        c.fillStyle = "rgba(20,28,38," + (0.08 + r() * 0.12) + ")";
        c.beginPath(); c.ellipse(x, y, h * (0.01 + r() * 0.03), h * 0.0015, 0, 0, PI2); c.fill();
      }
      const gl = c.createLinearGradient(gx - gdemi, 0, gx + gdemi, 0);
      gl.addColorStop(0, "rgba(4,8,16,0.35)"); gl.addColorStop(0.45, "rgba(4,8,16,0)"); gl.addColorStop(1, "rgba(4,8,16,0.3)");
      c.fillStyle = gl; c.fillRect(gx - gdemi, gsom - 5, gdemi * 2, sol - gsom + 8);
      c.restore();
    }

    // volcan : roche sombre puis neige, avec un cote ombre
    tracerProfil(c, volcan, 3);
    if (!lueur) {
      g = c.createLinearGradient(0, vsom, 0, sol);
      g.addColorStop(0, "#232a33");
      g.addColorStop(1, "#171d24");
      c.fillStyle = g;
      c.fill();
    }
    c.save(); tracerProfil(c, volcan, 3); c.clip();
    c.beginPath();
    c.moveTo(vx - vdemi, vsom - 10);
    for (let x = vx - vdemi; x <= vx + vdemi; x += 2) c.lineTo(x, neigeVolcan(x));
    c.lineTo(vx + vdemi, vsom - 10);
    c.closePath();
    g = c.createLinearGradient(0, vsom, 0, sol);
    g.addColorStop(0, lueur ? "rgba(150,255,200,1)" : "#6b7785");
    g.addColorStop(1, lueur ? "rgba(150,255,200,0.3)" : "#434d59");
    c.fillStyle = g;
    c.fill();
    if (!lueur) {
      // arretes rocheuses qui percent la neige
      const r = graine(57);
      c.strokeStyle = "rgba(25,31,40,0.22)";
      for (let i = 0; i < 18; i++) {
        const x0 = vx + (r() - 0.5) * vdemi * 0.9, y0 = volcan(x0) + h * (0.004 + r() * 0.02);
        const dx = (x0 - vx) * 0.25;
        c.lineWidth = 0.5 + r() * 0.8;
        c.beginPath(); c.moveTo(x0, y0);
        c.quadraticCurveTo(x0 + dx * 0.5, y0 + h * 0.03, x0 + dx, y0 + h * (0.04 + r() * 0.05));
        c.stroke();
      }
      // ombre du flanc est
      g = c.createLinearGradient(vx - vdemi * 0.4, 0, vx + vdemi * 0.6, 0);
      g.addColorStop(0, "rgba(4,8,16,0)");
      g.addColorStop(0.45, "rgba(4,8,16,0.1)");
      g.addColorStop(1, "rgba(4,8,16,0.55)");
      c.fillStyle = g;
      c.fillRect(vx - vdemi, vsom - 10, vdemi * 2, sol - vsom + 12);
      // brume au pied
      g = c.createLinearGradient(0, sol - h * 0.07, 0, sol);
      g.addColorStop(0, "rgba(18,32,44,0)");
      g.addColorStop(1, "rgba(18,32,44,0.75)");
      c.fillStyle = g;
      c.fillRect(0, sol - h * 0.07, w, h * 0.07);
    }
    c.restore();
    if (lueur) return;

    // collines basses devant la calotte, brumeuses
    tracerProfil(c, collines, 4);
    g = c.createLinearGradient(0, sol - h * 0.04, 0, sol);
    g.addColorStop(0, "#1a2530");
    g.addColorStop(1, "#16212a");
    c.fillStyle = g;
    c.fill();

    // plaine de toundra
    g = c.createLinearGradient(0, sol, 0, h);
    g.addColorStop(0, "#1c2629");
    g.addColorStop(0.12, "#172020");
    g.addColorStop(0.5, "#121916");
    g.addColorStop(1, "#0b0f0e");
    c.fillStyle = g;
    c.fillRect(0, sol, w, h - sol);
    const r = graine(101);
    for (let i = 0; i < 26; i++) {
      const y = sol + Math.pow(r(), 1.5) * (h * 0.8 - sol);
      const pr = (y - sol) / (h - sol);
      const x = r() * w, rx = w * (0.08 + r() * 0.2), ry = h * (0.004 + pr * 0.05);
      const clair = r() < 0.55;
      const ng = c.createRadialGradient(x, y, 0, x, y, rx);
      ng.addColorStop(0, clair ? "rgba(110,130,140,0.06)" : "rgba(0,0,0,0.18)");
      ng.addColorStop(1, "rgba(0,0,0,0)");
      c.fillStyle = ng;
      c.save(); c.translate(x, y); c.scale(1, ry / rx); c.translate(-x, -y);
      c.fillRect(x - rx, y - rx, rx * 2, rx * 2); c.restore();
    }
    // ondulations du terrain : chaque croupe a un bord eclaire et une ombre
    for (let k = 0; k < 4; k++) {
      const y0 = sol + h * (0.012 + 0.045 * k * (1 + k * 0.35));
      const amp = h * (0.004 + k * 0.004);
      const pl = (x) => y0 - amp * fbm(x / (h * (0.15 + k * 0.08)), 61 + k, 3) * 2;
      tracerProfil(c, pl, 6, h);
      const og = c.createLinearGradient(0, y0 - amp * 2, 0, y0 + h * 0.05);
      og.addColorStop(0, "rgba(120,140,145,0.12)");
      og.addColorStop(0.1, "rgba(10,16,16,0.3)");
      og.addColorStop(1, "rgba(18,25,22,0)");
      c.fillStyle = og;
      c.fill();
    }
    // plaques de neige en grappes, plus grandes en approchant
    for (let i = 0; i < 380; i++) {
      const p = Math.pow(r(), 1.5);
      const y = sol + 2 + p * (h * 0.8 - sol);
      const pr = (y - sol) / (h - sol);
      const x = r() * w;
      const rx = h * (0.008 + pr * 0.07) * (0.5 + r());
      const a = 0.03 + (1 - pr) * 0.03;
      c.fillStyle = "rgba(140,160,172," + a + ")";
      const m = 2 + Math.floor(r() * 4);
      for (let k = 0; k < m; k++) {
        const ex = x + (r() - 0.5) * rx * 1.6, ey = y + (r() - 0.5) * rx * 0.12;
        const er = rx * (0.3 + r() * 0.6);
        c.beginPath(); c.ellipse(ex, ey, er, er * (0.1 + pr * 0.12), (r() - 0.5) * 0.06, 0, PI2); c.fill();
      }
    }
    // touffes de laiche et pierres
    for (let i = 0; i < 900; i++) {
      const p = Math.pow(r(), 1.4);
      const y = sol + 2 + p * (h * 0.8 - sol);
      const pr = (y - sol) / (h - sol);
      const z = 0.4 + pr * 2.4;
      c.fillStyle = r() < 0.5 ? "rgba(76,86,66,0.13)" : "rgba(5,8,7,0.25)";
      c.beginPath(); c.ellipse(r() * w, y, z * (0.8 + r()), z * 0.45, 0, 0, PI2); c.fill();
    }
    // source chaude au loin, a droite
    const sx = w * 0.885, sy = sol + h * 0.006;
    c.fillStyle = "rgba(10,14,16,0.8)";
    c.beginPath(); c.ellipse(sx, sy, h * 0.03, h * 0.004, 0, 0, PI2); c.fill();
    c.fillStyle = "rgba(90,140,150,0.35)";
    c.beginPath(); c.ellipse(sx, sy - 0.5, h * 0.022, h * 0.0025, 0, 0, PI2); c.fill();

    // champ de lave moussu : rangees de bosses, du fond vers l'avant
    const mousseH = [74, 84, 68], mousseB = [20, 24, 20], loin = [19, 26, 28];
    function bosse(x, y, rx, ry, fade, rr) {
      const m = 22, pts = [];
      for (let k = 0; k <= m; k++) {
        const a = Math.PI + (k / m) * Math.PI;
        const q = 1 + (rr() - 0.5) * 0.35;
        pts.push([x + Math.cos(a) * rx * q, y + Math.sin(a) * ry * q * (0.8 + 0.4 * Math.abs(Math.sin(a * 2 + x)))]);
      }
      c.fillStyle = "rgba(0,0,0," + (0.35 * fade) + ")";
      c.beginPath(); c.ellipse(x + rx * 0.1, y + ry * 0.08, rx * 1.05, ry * 0.22, 0, 0, PI2); c.fill();
      c.beginPath();
      c.moveTo(pts[0][0], pts[0][1]);
      for (let k = 1; k < pts.length; k++) {
        const a = pts[k - 1], b = pts[k];
        c.quadraticCurveTo(a[0], a[1], (a[0] + b[0]) / 2, (a[1] + b[1]) / 2);
      }
      c.lineTo(pts[m][0], y + ry * 0.12);
      c.lineTo(pts[0][0], y + ry * 0.12);
      c.closePath();
      const gg = c.createRadialGradient(x - rx * 0.25, y - ry * 0.75, 0, x - rx * 0.1, y - ry * 0.4, rx * 1.1);
      gg.addColorStop(0, rgb(mix(loin, mousseH, fade)));
      gg.addColorStop(0.55, rgb(mix(loin, mix(mousseH, mousseB, 0.5), fade)));
      gg.addColorStop(1, rgb(mix(loin, mousseB, fade)));
      c.fillStyle = gg;
      c.fill();
      if (fade < 0.25) return;
      c.save(); c.clip();
      // mousse en taches, roche noire qui affleure, givre au sommet
      const n = Math.min(260, Math.round(rx * ry / 7));
      for (let k = 0; k < n; k++) {
        const a = rr() * Math.PI, d = Math.sqrt(rr());
        const px = x - Math.cos(a) * rx * d, py = y - Math.sin(a) * ry * d;
        const z = (0.5 + rr() * 1.5) * (rx / 90 + 0.5);
        const ty = rr();
        c.fillStyle = ty < 0.45 ? "rgba(112,124,100," + 0.13 * fade + ")"
          : ty < 0.8 ? "rgba(10,13,10," + 0.3 * fade + ")"
          : "rgba(56,66,52," + 0.3 * fade + ")";
        c.beginPath(); c.ellipse(px, py, z, z * 0.6, rr() * 3, 0, PI2); c.fill();
      }
      for (let k = 0; k < n * 0.25; k++) {
        const a = Math.PI * (0.3 + rr() * 0.4), d = 0.75 + rr() * 0.25;
        const px = x - Math.cos(a) * rx * d, py = y - Math.sin(a) * ry * d + ry * 0.05;
        c.fillStyle = "rgba(170,185,195," + 0.12 * fade + ")";
        c.fillRect(px, py, 1 + rr() * rx * 0.05, 0.8 + rr());
      }
      c.restore();
    }
    const rb = graine(202);
    const rangs = 16;
    for (let i = 0; i < rangs; i++) {
      const p = i / (rangs - 1);
      const y = h * (0.79 + 0.27 * Math.pow(p, 1.25));
      const pr = (y - sol) / (h - sol);
      const base = h * (0.012 + 0.12 * Math.pow(pr, 2.6));
      const fade = borne((y - h * 0.8) / (h * 0.1), 0.12, 1);
      let x = -rb() * base * 2;
      while (x < w + base * 2) {
        const rx = base * (0.7 + rb() * 0.8);
        // dans la bande calme, seules les bords portent du relief
        const bord = Math.min(x, w - x) / w;
        const f = y < h * 0.86 && bord > 0.14 ? fade * 0.55 : fade;
        bosse(x, y, rx, rx * (0.42 + rb() * 0.2), f, rb);
        x += rx * (0.8 + rb() * 0.6);
      }
    }
    // gros blocs de lave sur les bords, montant plus haut
    for (let i = 0; i < 7; i++) {
      const gauche = i % 2 === 0;
      const k = Math.floor(i / 2);
      const y = h * (0.8 + k * 0.06);
      const rx = h * (0.07 + k * 0.03) * (0.8 + rb() * 0.4);
      const x = gauche ? rx * (0.1 + rb() * 0.5) : w - rx * (0.1 + rb() * 0.5);
      bosse(x, y, rx, rx * 0.55, 0.9, rb);
    }

    // voile sombre en haut pour le titre et le menu, vignette
    g = c.createLinearGradient(0, 0, 0, h * 0.14);
    g.addColorStop(0, "rgba(0,0,0,0.25)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    c.fillStyle = g;
    c.fillRect(0, 0, w, h * 0.14);
    g = c.createRadialGradient(w / 2, h * 0.55, Math.min(w, h) * 0.35, w / 2, h * 0.55, Math.max(w, h) * 0.85);
    g.addColorStop(0, "rgba(0,0,0,0)");
    g.addColorStop(1, "rgba(0,0,0,0.5)");
    c.fillStyle = g;
    c.fillRect(0, 0, w, h);
  }

  /* ---------- preparation, une fois par taille ---------- */
  const OC = typeof OffscreenCanvas !== "undefined" ? OffscreenCanvas : null;
  let ech = 1;
  if (OC && ctx.getTransform) {
    const m = ctx.getTransform();
    if (m && m.a) ech = Math.min(2, m.a);
  }
  const cle = w + "x" + h + "@" + ech;
  if (OC && cache.cle !== cle) {
    const W = Math.max(1, Math.ceil(w * ech)), H = Math.max(1, Math.ceil(h * ech));
    const neuf = () => { const o = new OC(W, H); const c = o.getContext("2d"); c.scale(ech, ech); return [o, c]; };
    const [ciel, cc] = neuf(); peindreCiel(cc);
    const [terre, tc] = neuf(); peindreTerre(tc, false);
    const [lueur, lc] = neuf(); peindreTerre(lc, true);
    // rayon d'aurore : vert en bas, violet en haut, bords doux
    const ray = new OC(16, 256), rc = ray.getContext("2d");
    let g = rc.createLinearGradient(0, 0, 0, 256);
    g.addColorStop(0, "rgba(120,60,200,0)");
    g.addColorStop(0.28, "rgba(160,80,230,0.5)");
    g.addColorStop(0.62, "rgba(70,210,150,0.6)");
    g.addColorStop(0.9, "rgba(150,255,190,1)");
    g.addColorStop(0.96, "rgba(120,255,180,0.5)");
    g.addColorStop(1, "rgba(80,220,150,0)");
    rc.fillStyle = g; rc.fillRect(0, 0, 16, 256);
    rc.globalCompositeOperation = "destination-in";
    g = rc.createLinearGradient(0, 0, 16, 0);
    g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(0.5, "rgba(0,0,0,1)"); g.addColorStop(1, "rgba(0,0,0,0)");
    rc.fillStyle = g; rc.fillRect(0, 0, 16, 256);
    // bouffee de vapeur
    const puff = new OC(64, 64), pc = puff.getContext("2d");
    g = pc.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, "rgba(200,215,225,1)"); g.addColorStop(0.5, "rgba(190,205,215,0.4)"); g.addColorStop(1, "rgba(190,205,215,0)");
    pc.fillStyle = g; pc.fillRect(0, 0, 64, 64);
    // halo diffus sous l'aurore
    const halo = new OC(128, 64), hc = halo.getContext("2d");
    g = hc.createRadialGradient(64, 32, 0, 64, 32, 64);
    g.addColorStop(0, "rgba(60,200,130,0.5)"); g.addColorStop(1, "rgba(60,200,130,0)");
    hc.fillStyle = g; hc.fillRect(0, 0, 128, 64);
    // etoiles qui scintillent
    const r = graine(4242), etoiles = [];
    for (let i = 0; i < 70; i++) {
      etoiles.push({ x: r() * w, y: Math.pow(r(), 1.5) * sol * 0.85, z: 0.9 + r() * 1.1,
        f: 0.0008 + r() * 0.0025, p: r() * PI2, a: 0.35 + r() * 0.5 });
    }
    Object.assign(cache, { cle, ciel, terre, lueur, ray, puff, halo, etoiles });
  }

  /* ---------- intensite de l'aurore ---------- */
  const glob = 0.72 + 0.18 * Math.sin(t * 0.00021) + 0.1 * Math.sin(t * 0.00053 + 1.3);
  const rideaux = [
    { x0: 0.16, x1: 1.04, y: 0.3, amp: 0.05, hr: 0.24, a: 0.4, ph: 0 },
    { x0: -0.04, x1: 0.8, y: 0.21, amp: 0.035, hr: 0.15, a: 0.22, ph: 2.1 },
  ];

  if (!OC) {
    /* repli sans OffscreenCanvas : tout en direct, sans sprites */
    peindreCiel(ctx);
    for (const R of rideaux) {
      ctx.fillStyle = "rgba(90,230,160," + (R.a * 0.4 * glob) + ")";
      for (let x = R.x0 * w; x < R.x1 * w; x += 12) {
        const yb = h * (R.y + R.amp * Math.sin(x / w * 4 + t * 0.0001 + R.ph));
        ctx.fillRect(x, yb - R.hr * h, 12, R.hr * h);
      }
    }
    peindreTerre(ctx, false);
    return;
  }

  /* ---------- rendu par image ---------- */
  ctx.drawImage(cache.ciel, 0, 0, w, h);
  // scintillement
  for (const e of cache.etoiles) {
    const s = 0.5 + 0.5 * Math.sin(t * e.f + e.p) * Math.sin(t * e.f * 0.37 + e.p * 2);
    ctx.fillStyle = "rgba(225,235,255," + (e.a * (0.3 + 0.7 * s)) + ")";
    ctx.fillRect(e.x, e.y, e.z, e.z);
  }
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  ctx.globalAlpha = 0.16 * glob;
  ctx.drawImage(cache.halo, w * 0.05, h * 0.12, w * 1.1, h * 0.36);
  const pas = Math.max(5, w / 150);
  for (const R of rideaux) {
    const xa = R.x0 * w, xb = R.x1 * w, larg = xb - xa;
    for (let x = xa; x < xb; x += pas) {
      const u = (x - xa) / larg;
      const env = Math.sin(u * Math.PI);
      const k = x / w;
      const yb = h * (R.y + R.amp * Math.sin(k * 3.3 + t * 0.00007 + R.ph)
        + R.amp * 0.4 * Math.sin(k * 8.1 - t * 0.00013 + R.ph * 2));
      const plis = 0.5 + 0.5 * Math.sin(k * 11 + t * 0.00031 + R.ph) * Math.sin(k * 4.7 - t * 0.00017);
      const rais = 0.5 + 0.5 * Math.sin(k * 61 + t * 0.0009) * Math.sin(k * 23 - t * 0.0006 + R.ph);
      // plus discret en haut a gauche, derriere le titre
      const titre = 1 - 0.6 * borne(1 - k * 2.5, 0, 1);
      const a = R.a * glob * env * (0.25 + 0.75 * plis) * rais * titre;
      if (a < 0.01) continue;
      const hr = h * R.hr * (0.7 + 0.5 * plis);
      ctx.globalAlpha = a;
      ctx.drawImage(cache.ray, x - pas * 1.4, yb - hr, pas * 2.8, hr * 1.1);
    }
  }
  ctx.restore();
  ctx.drawImage(cache.terre, 0, 0, w, h);
  // la neige prend la teinte de l'aurore
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  ctx.globalAlpha = 0.035 + 0.035 * glob;
  const hy = h * 0.34, hh = sol - hy + 2;
  ctx.drawImage(cache.lueur, 0, hy * ech, cache.lueur.width, hh * ech, 0, hy, w, hh);
  ctx.restore();
  // vapeur de la source chaude
  const sx = w * 0.885, sy = sol + h * 0.004;
  for (let i = 0; i < 14; i++) {
    const ph = (t * 0.000045 + i / 14) % 1;
    const z = h * (0.01 + ph * 0.045);
    const x = sx + Math.sin(ph * 3 + i * 1.7) * h * 0.006 + ph * h * 0.03;
    const y = sy - ph * h * 0.1;
    ctx.globalAlpha = 0.16 * Math.sin(Math.PI * ph) * (1 - ph * 0.5);
    ctx.drawImage(cache.puff, x - z, y - z * 0.8, z * 2, z * 1.6);
  }
  ctx.globalAlpha = 1;
}

/* ------------------------------------------------------------- japon */
function decorJapon(ctx, w, h, t, cache) {
  "use strict";
  const PI = Math.PI;
  const OC = typeof OffscreenCanvas !== "undefined" ? OffscreenCanvas : null;

  // generateur pseudo aleatoire a graine fixe
  function graine(s) {
    let a = s >>> 0;
    return function () {
      a = (a + 0x6d2b79f5) >>> 0;
      let r = Math.imul(a ^ (a >>> 15), 1 | a);
      r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }
  function hache(i, s) {
    let x = Math.imul((i | 0) ^ Math.imul(s, 0x9e3779b1), 0x27d4eb2d);
    x ^= x >>> 15; x = Math.imul(x, 0x85ebca6b); x ^= x >>> 13;
    return (x >>> 0) / 4294967296;
  }
  function bruit(x, s) {
    const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f);
    return hache(i, s) * (1 - u) + hache(i + 1, s) * u;
  }
  function fbm(x, s) {
    return (bruit(x, s) * 0.5 + bruit(x * 2.13, s + 7) * 0.25 +
      bruit(x * 4.37, s + 13) * 0.125 + bruit(x * 8.71, s + 29) * 0.0625) / 0.9375;
  }
  function borne(v, a, b) { return v < a ? a : v > b ? b : v; }

  // geometrie de la scene
  const paysage = w >= h;
  const HZ = h * 0.515;                      // rive lointaine
  // en portrait le cone se tasse pour garder ses proportions
  const R = Math.min((HZ - h * 0.155) * 2.35, w * 1.15);
  const H = R / 2.3 < HZ - h * 0.155 ? R / 2.3 : HZ - h * 0.155;
  const PY = HZ - H;                          // sommet du Fuji
  const cx = w * (paysage ? 0.6 : 0.57);
  const ELEV = 0.05;                         // inclinaison du regard

  // profil du cone : s de 0 (sommet) a 1 (pied)
  function prof(s) {
    const s0 = 0.022;
    if (s < s0) return 0.004 * s / s0;
    const u = (s - s0) / (1 - s0);
    return 0.004 + 0.996 * (0.55 * (1 - Math.pow(1 - u, 2.6)) + 0.45 * u);
  }
  function crete(x) {
    const s = Math.abs(x - cx) / R;
    let y = PY + H * prof(Math.min(s, 1.2));
    y += (fbm((x - cx) / R * 7, 3) - 0.5) * H * 0.012 * Math.min(1, s * 8);
    if (x > cx) y -= H * 0.014 * Math.exp(-Math.pow((s - 0.34) / 0.045, 2));
    return y;
  }
  function pointCone(s, phi) {
    return [cx + s * R * Math.sin(phi), PY + H * prof(s) + s * R * Math.cos(phi) * ELEV];
  }

  // echelle en pixels reels pour rester net en haute densite
  let sc = 1;
  if (typeof ctx.getTransform === "function") {
    const m = ctx.getTransform();
    if (m && m.a > 0) sc = Math.min(2, m.a);
  }

  /* ------------------------------------------------ peintures statiques */

  function peindreCiel(c) {
    const g = c.createLinearGradient(0, 0, 0, HZ);
    g.addColorStop(0, "#0a0f2c");
    g.addColorStop(0.3, "#1a1b45");
    g.addColorStop(0.55, "#35295a");
    g.addColorStop(0.75, "#633b64");
    g.addColorStop(0.9, "#99566a");
    g.addColorStop(1, "#bb6e69");
    c.fillStyle = g;
    c.fillRect(0, 0, w, HZ + 2);
    // lueur du soleil couche, a droite
    const gl = c.createRadialGradient(w * 0.82, HZ, 0, w * 0.82, HZ, Math.max(w, h) * 0.55);
    gl.addColorStop(0, "rgba(236,150,104,0.38)");
    gl.addColorStop(0.4, "rgba(200,110,110,0.14)");
    gl.addColorStop(1, "rgba(160,90,120,0)");
    c.fillStyle = gl;
    c.fillRect(0, 0, w, HZ + 2);
    // voile froid a gauche
    const gf = c.createLinearGradient(0, 0, w, 0);
    gf.addColorStop(0, "rgba(20,24,70,0.22)");
    gf.addColorStop(0.5, "rgba(20,24,70,0)");
    c.fillStyle = gf;
    c.fillRect(0, 0, w, HZ + 2);
    // premieres etoiles, tres discretes
    const r = graine(71);
    const n = Math.round(w * h / 22000);
    for (let i = 0; i < n; i++) {
      const x = r() * w, y = Math.pow(r(), 1.8) * h * 0.3;
      const a = (0.1 + r() * 0.45) * (1 - y / (h * 0.32));
      c.fillStyle = "rgba(225,225,255," + a.toFixed(3) + ")";
      const tl = r() < 0.08 ? 1.6 : 1;
      c.fillRect(x, y, tl, tl);
    }
    // voiles de cirrus figes, tres pales
    const rc = graine(19);
    for (let k = 0; k < 7; k++) {
      const y = h * (0.06 + rc() * 0.22), x = rc() * w, lg = w * (0.2 + rc() * 0.3);
      const gg = c.createLinearGradient(x - lg / 2, 0, x + lg / 2, 0);
      const col = y > h * 0.2 ? "190,120,140" : "120,110,170";
      gg.addColorStop(0, "rgba(" + col + ",0)");
      gg.addColorStop(0.5, "rgba(" + col + "," + (0.05 + rc() * 0.06).toFixed(3) + ")");
      gg.addColorStop(1, "rgba(" + col + ",0)");
      c.fillStyle = gg;
      c.beginPath();
      c.ellipse(x, y, lg / 2, h * (0.003 + rc() * 0.004), (rc() - 0.5) * 0.04, 0, PI * 2);
      c.fill();
    }
  }

  function cheminFuji(c) {
    c.beginPath();
    const x0 = cx - R * 1.05, x1 = cx + R * 1.05;
    c.moveTo(x0, HZ + 4);
    for (let x = x0; x <= x1; x += 2) c.lineTo(x, Math.min(crete(x), HZ + 4));
    c.lineTo(x1, HZ + 4);
    c.closePath();
  }

  function peindreFuji(c, rg) {
    // roche : ombre a gauche, lumiere du couchant a droite
    const gr = c.createLinearGradient(cx - R * 0.8, 0, cx + R * 0.8, 0);
    gr.addColorStop(0, "#1c1c3c");
    gr.addColorStop(0.45, "#26254a");
    gr.addColorStop(0.62, "#302c52");
    gr.addColorStop(1, "#43335a");
    c.save();
    cheminFuji(c);
    c.fillStyle = gr;
    c.fill();
    c.clip();

    // ravines de roche sombres
    const rr = graine(5);
    c.lineCap = "round";
    for (let k = 0; k < 110; k++) {
      const phi = (rr() * 2 - 1) * 1.55;
      const s0 = 0.04 + rr() * 0.2, s1 = s0 + 0.15 + rr() * 0.5;
      c.strokeStyle = "rgba(8,8,26," + (0.05 + rr() * 0.1).toFixed(3) + ")";
      c.lineWidth = 0.6 + rr() * 1.4;
      c.beginPath();
      for (let j = 0; j <= 12; j++) {
        const p = pointCone(s0 + (s1 - s0) * j / 12, phi + (rr() - 0.5) * 0.004);
        if (j === 0) c.moveTo(p[0], p[1]); else c.lineTo(p[0], p[1]);
      }
      c.stroke();
    }

    // neige : limite en doigts le long des couloirs
    function limite(phi) {
      let s = 0.2 + 0.025 * Math.sin(phi * 3 + 1) + 0.03 * (fbm(phi * 4 + 9, 23) - 0.5);
      for (const g of rg) s += g.p * Math.exp(-Math.pow((phi - g.phi) / g.l, 2));
      return s > 0.34 ? 0.34 + (s - 0.34) * 0.35 : s;
    }
    const gn = c.createLinearGradient(cx - R * 0.42, 0, cx + R * 0.42, 0);
    gn.addColorStop(0, "#5f5c86");
    gn.addColorStop(0.35, "#8e87ac");
    gn.addColorStop(0.55, "#b9a8c2");
    gn.addColorStop(0.8, "#d8b3bd");
    gn.addColorStop(1, "#e2b7b4");
    c.fillStyle = gn;
    c.beginPath();
    const N = 360;
    for (let i = 0; i <= N; i++) {
      const phi = -PI / 2 + PI * i / N;
      const p = pointCone(limite(phi), phi);
      if (i === 0) c.moveTo(p[0], p[1]); else c.lineTo(p[0], p[1]);
    }
    c.lineTo(cx + R, PY - 30);
    c.lineTo(cx - R, PY - 30);
    c.closePath();
    c.fill();

    // stries de neige sous la limite
    const rs = graine(9);
    for (let k = 0; k < 90; k++) {
      const phi = (rs() * 2 - 1) * 1.5;
      const s0 = limite(phi) - 0.01, s1 = s0 + 0.03 + rs() * rs() * 0.22;
      const lum = phi > 0 ? "220,180,190" : "130,125,165";
      c.strokeStyle = "rgba(" + lum + "," + (0.12 + rs() * 0.26).toFixed(3) + ")";
      c.lineWidth = 0.5 + rs() * 1.6;
      c.beginPath();
      for (let j = 0; j <= 8; j++) {
        const p = pointCone(s0 + (s1 - s0) * j / 8, phi);
        if (j === 0) c.moveTo(p[0], p[1]); else c.lineTo(p[0], p[1]);
      }
      c.stroke();
    }
    // aretes rocheuses dans la neige
    for (let k = 0; k < 70; k++) {
      const phi = (rs() * 2 - 1) * 1.5;
      const s0 = 0.03 + rs() * 0.08, s1 = Math.min(limite(phi), s0 + 0.05 + rs() * 0.2);
      c.strokeStyle = "rgba(40,36,72," + (0.12 + rs() * 0.22).toFixed(3) + ")";
      c.lineWidth = 0.4 + rs() * 1.1;
      c.beginPath();
      for (let j = 0; j <= 8; j++) {
        const p = pointCone(s0 + (s1 - s0) * j / 8, phi);
        if (j === 0) c.moveTo(p[0], p[1]); else c.lineTo(p[0], p[1]);
      }
      c.stroke();
    }
    // ombre propre sur le flanc gauche
    const go = c.createLinearGradient(cx - R * 0.5, 0, cx + R * 0.1, 0);
    go.addColorStop(0, "rgba(14,14,40,0.45)");
    go.addColorStop(1, "rgba(14,14,40,0)");
    c.fillStyle = go;
    c.fillRect(cx - R * 1.1, PY - 10, R * 1.2, H + 20);
    // brume de l'air vers le pied
    const gb = c.createLinearGradient(0, PY + H * 0.3, 0, HZ);
    gb.addColorStop(0, "rgba(150,88,118,0)");
    gb.addColorStop(0.7, "rgba(150,88,118,0.32)");
    gb.addColorStop(1, "rgba(170,100,115,0.6)");
    c.fillStyle = gb;
    c.fillRect(cx - R * 1.1, PY, R * 2.2, H + 6);
    c.restore();
    // liseré de lumiere sur l'arete droite
    c.strokeStyle = "rgba(240,190,185,0.22)";
    c.lineWidth = 1;
    c.beginPath();
    for (let x = cx + 2; x < cx + R * 0.55; x += 2) {
      const y = crete(x);
      if (x === cx + 2) c.moveTo(x, y); else c.lineTo(x, y);
    }
    c.stroke();
  }

  function sapins(c, y0, x0, x1, hmin, hmax, pas, graineS, couleurs, erable) {
    const r = graine(graineS);
    for (let x = x0; x < x1; x += pas * (0.5 + r())) {
      const hg = hmin + (hmax - hmin) * Math.pow(r(), 1.5);
      const lg = hg * (0.28 + r() * 0.12);
      const base = y0 + r() * pas * 0.3;
      if (erable && r() < erable) {
        c.fillStyle = couleurs.erable[(r() * couleurs.erable.length) | 0];
        for (let j = 0; j < 5; j++) {
          c.beginPath();
          c.arc(x + (r() - 0.5) * lg * 1.6, base - hg * (0.2 + r() * 0.35), lg * (0.35 + r() * 0.3), 0, PI * 2);
          c.fill();
        }
        continue;
      }
      c.fillStyle = couleurs.pin[(r() * couleurs.pin.length) | 0];
      c.beginPath();
      c.moveTo(x - lg, base);
      const et = 4;
      for (let k = 0; k < et; k++) {
        const a = k / et, b = (k + 1) / et;
        c.lineTo(x - lg * (1 - a) * 0.95, base - hg * a);
        c.lineTo(x - lg * (1 - b) * 0.55, base - hg * b * 0.97);
      }
      c.lineTo(x, base - hg);
      for (let k = et - 1; k >= 0; k--) {
        const a = k / et, b = (k + 1) / et;
        c.lineTo(x + lg * (1 - b) * 0.55, base - hg * b * 0.97);
        c.lineTo(x + lg * (1 - a) * 0.95, base - hg * a);
      }
      c.closePath();
      c.fill();
    }
  }

  function peindreCollines(c) {
    // collines lointaines, voilees
    c.fillStyle = "#3d2e56";
    c.beginPath();
    c.moveTo(0, HZ + 2);
    for (let x = 0; x <= w + 4; x += 4) {
      const u = x / w;
      let y = HZ - h * (0.012 + 0.03 * fbm(u * 3.2, 11));
      y -= h * 0.07 * Math.pow(Math.max(0, 1 - u / 0.33), 1.6) * (0.75 + 0.5 * fbm(u * 9, 12));
      c.lineTo(x, y);
    }
    c.lineTo(w, HZ + 2);
    c.closePath();
    c.fill();
    const gv = c.createLinearGradient(0, HZ - h * 0.1, 0, HZ);
    gv.addColorStop(0, "rgba(120,72,106,0.1)");
    gv.addColorStop(1, "rgba(150,86,110,0.5)");
    c.fillStyle = gv;
    c.fill();
    // collines plus proches, boisees
    c.fillStyle = "#231f3a";
    c.beginPath();
    c.moveTo(0, HZ + 2);
    for (let x = 0; x <= w + 4; x += 3) {
      const u = x / w;
      let y = HZ - h * (0.006 + 0.016 * fbm(u * 5.3, 17));
      y -= h * 0.035 * Math.pow(Math.max(0, (u - 0.74) / 0.26), 1.3);
      y -= h * 0.02 * Math.pow(Math.max(0, 1 - u / 0.2), 1.4);
      y -= (hache(x | 0, 3) - 0.5) * h * 0.003;
      c.lineTo(x, y);
    }
    c.lineTo(w, HZ + 2);
    c.closePath();
    c.fill();
    const gv2 = c.createLinearGradient(0, HZ - h * 0.05, 0, HZ);
    gv2.addColorStop(0, "rgba(90,58,96,0.12)");
    gv2.addColorStop(1, "rgba(110,66,96,0.35)");
    c.fillStyle = gv2;
    c.fill();
    // lisiere de la rive lointaine
    sapins(c, HZ + 0.5, -4, w + 4, h * 0.006, h * 0.017, Math.max(2.5, w / 420), 31,
      { pin: ["#15162a", "#191a30", "#1d1c33", "#141526"], erable: ["#3a1f2c", "#43222c", "#33202c"] }, 0.12);
    c.fillStyle = "#141425";
    c.fillRect(0, HZ - 1, w, 3);
    // ligne d'eau claire
    c.fillStyle = "rgba(230,160,150,0.22)";
    c.fillRect(0, HZ + 1.5, w, 0.8);
  }

  // avancee boisee a gauche, a mi distance
  function peindreAvancee(c) {
    const y0 = h * 0.565, xf = w * (paysage ? 0.24 : 0.3);
    c.fillStyle = "#101221";
    c.beginPath();
    c.moveTo(0, y0);
    for (let x = 0; x <= xf; x += 3) {
      const u = x / xf;
      c.lineTo(x, y0 - h * 0.012 * (1 - u * u) - h * 0.003 * fbm(u * 6, 51));
    }
    c.lineTo(xf, y0);
    c.closePath();
    c.fill();
    const r = graine(88);
    const cols = { pin: ["#0d0f1c", "#10121f", "#121425", "#0f1120"], erable: ["#361720", "#40191f", "#2e1520"] };
    for (let x = -6; x < xf; x += Math.max(4, w / 260) * (0.6 + r())) {
      const u = Math.max(0, x / xf);
      const top = h * (0.03 + 0.06 * (1 - u) * (1 - u)) * (0.6 + r() * 0.5);
      sapins(c, y0 - h * 0.01 * (1 - u * u), x, x + 1, top * 0.8, top, 2, (x * 13) | 0, cols, 0.07);
    }
    // voile de distance
    const g = c.createLinearGradient(0, y0 - h * 0.1, 0, y0);
    g.addColorStop(0, "rgba(80,50,90,0.1)");
    g.addColorStop(1, "rgba(80,50,90,0.25)");
    c.fillStyle = g;
    c.globalCompositeOperation = "source-atop";
    c.fillRect(0, y0 - h * 0.12, xf + 10, h * 0.13);
    c.globalCompositeOperation = "source-over";
    return y0;
  }

  function pin(c, bx, by, hg, pente, sg, ps) {
    const r = graine(sg);
    const ex = bx + pente * hg, ey = by - hg;
    const kx = bx - pente * hg * 0.35, ky = by - hg * 0.55;
    function pt(u) {
      const a = (1 - u) * (1 - u), b = 2 * (1 - u) * u, d = u * u;
      return [a * bx + b * kx + d * ex, a * by + b * ky + d * ey];
    }
    c.fillStyle = "#0a0b12";
    const nt = Math.max(60, Math.ceil(hg / 1.5));
    for (let i = 0; i <= nt; i++) {
      const u = i / nt, p = pt(u);
      c.beginPath();
      c.arc(p[0], p[1], ps * 0.05 * (1 - 0.72 * u) + 1, 0, PI * 2);
      c.fill();
    }
    // touffe d'aiguilles : dome irregulier, bord herisse, liseré de ciel
    function touffe(px, py, pw) {
      const ph = pw * (0.4 + r() * 0.15);
      c.fillStyle = "#0b0d14";
      c.beginPath();
      const n = 26;
      for (let i = 0; i <= n; i++) {
        const a = PI + PI * i / n;
        const rr = 1 + (hache(i + ((px * 7) | 0), 91) - 0.5) * 0.35;
        const x = px + Math.cos(a) * pw * rr, y = py + Math.sin(a) * ph * rr;
        if (i === 0) c.moveTo(x, y); else c.lineTo(x, y);
      }
      c.quadraticCurveTo(px, py + ph * 0.45, px - pw, py);
      c.fill();
      c.lineCap = "round";
      for (let j = 0; j < 110; j++) {
        const a = PI + 0.08 + r() * (PI - 0.16), d = 0.85 + r() * 0.2;
        const nx = px + Math.cos(a) * pw * d, ny = py + Math.sin(a) * ph * d;
        const ang = a + (r() - 0.5) * 0.8;
        const l = pw * (0.06 + r() * 0.08);
        const haut = Math.sin(a) < -0.55;
        c.strokeStyle = haut && r() < 0.5 ? "rgba(110,80,112,0.5)" : "#0c0f16";
        c.lineWidth = 0.9;
        c.beginPath();
        c.moveTo(nx, ny);
        c.lineTo(nx + Math.cos(ang) * l, ny + Math.sin(ang) * l);
        c.stroke();
      }
    }
    const branches = 6;
    for (let k = 0; k < branches; k++) {
      const u = 0.42 + 0.58 * k / (branches - 1);
      const p = pt(u);
      const cote = k === branches - 1 ? 0.2 : (k % 2 === 0 ? 1 : -0.6);
      const lb = ps * (0.16 + 0.1 * r()) * (1 - 0.5 * u);
      const px = p[0] + cote * lb, py = p[1] - ps * (0.01 + r() * 0.03);
      c.strokeStyle = "#0a0b12";
      c.lineWidth = Math.max(1.2, ps * 0.014 * (1 - u * 0.5));
      c.beginPath();
      c.moveTo(p[0], p[1]);
      c.quadraticCurveTo((p[0] + px) / 2, p[1] + ps * 0.025, px, py);
      c.stroke();
      const pw = ps * (0.075 + 0.05 * r()) * (1 - 0.35 * u);
      const nb = 3 + ((r() * 3) | 0);
      for (let j = 0; j < nb; j++) {
        const ox = (j - (nb - 1) / 2) * pw * 0.9 + (r() - 0.5) * pw * 0.4;
        const oy = -Math.abs(ox) * 0.12 + (r() - 0.5) * pw * 0.2 - (j === ((nb / 2) | 0) ? pw * 0.12 : 0);
        c.strokeStyle = "#0a0b12";
        c.lineWidth = 1;
        c.beginPath(); c.moveTo(px, py); c.lineTo(px + ox, py + oy); c.stroke();
        touffe(px + ox, py + oy, pw * (0.55 + r() * 0.4));
      }
    }
  }

  function erable(c, bx, by, hg, sg) {
    const r = graine(sg);
    c.strokeStyle = "#0b0a10";
    c.lineCap = "round";
    const branches = [];
    function branche(x, y, a, l, lw, n) {
      const x2 = x + Math.cos(a) * l, y2 = y + Math.sin(a) * l;
      c.lineWidth = lw;
      c.beginPath();
      c.moveTo(x, y);
      c.quadraticCurveTo(x + Math.cos(a + 0.3) * l * 0.5, y + Math.sin(a + 0.3) * l * 0.5, x2, y2);
      c.stroke();
      if (n <= 0) { branches.push([x2, y2]); return; }
      branche(x2, y2, a - 0.35 - r() * 0.3, l * 0.72, lw * 0.62, n - 1);
      branche(x2, y2, a + 0.3 + r() * 0.35, l * 0.7, lw * 0.62, n - 1);
    }
    branche(bx, by, -PI / 2 - 0.25, hg * 0.38, Math.max(3, hg * 0.06), 4);
    // feuillage rouge sombre, par grappes
    const teintes = ["#260d14", "#321118", "#40161c", "#4c1c20", "#582323", "#37121a"];
    for (const b of branches) {
      c.fillStyle = "#240d13";
      c.beginPath();
      c.ellipse(b[0], b[1] + hg * 0.01, hg * 0.085, hg * 0.055, 0, 0, PI * 2);
      c.fill();
      for (let j = 0; j < 90; j++) {
        const a = r() * PI * 2, d = Math.sqrt(r()) * hg * 0.1;
        const x = b[0] + Math.cos(a) * d, y = b[1] + Math.sin(a) * d * 0.7;
        const haut = y < b[1];
        c.fillStyle = teintes[(r() * 4 + (haut ? 2 : 0)) | 0];
        c.beginPath();
        c.arc(x, y, 1 + r() * hg * 0.009, 0, PI * 2);
        c.fill();
      }
    }
  }

  function berge(x) {
    const u = x / w;
    return h * (0.888 + 0.01 * Math.sin(u * 5 + 1) + 0.016 * (fbm(u * 8, 41) - 0.5)) -
      h * 0.032 * Math.pow(Math.abs(u - 0.5) * 2, 2);
  }

  function peindreBerge(c) {
    // sol de la berge
    const g = c.createLinearGradient(0, h * 0.85, 0, h);
    g.addColorStop(0, "#15131c");
    g.addColorStop(1, "#08070b");
    c.fillStyle = g;
    c.beginPath();
    c.moveTo(0, h + 2);
    for (let x = 0; x <= w + 4; x += 3) c.lineTo(x, berge(x));
    c.lineTo(w, h + 2);
    c.closePath();
    c.fill();
    // bord mouille qui accroche le ciel
    c.strokeStyle = "rgba(220,150,150,0.16)";
    c.lineWidth = 1;
    c.beginPath();
    for (let x = 0; x <= w + 4; x += 3) {
      if (x === 0) c.moveTo(x, berge(x) + 0.5); else c.lineTo(x, berge(x) + 0.5);
    }
    c.stroke();
    // galets
    const r = graine(61);
    for (let k = 0; k < 14; k++) {
      const x = r() * w, rx = h * (0.006 + r() * 0.014), y = berge(x) + rx * 0.3;
      c.fillStyle = "#121119";
      c.beginPath();
      c.ellipse(x, y, rx, rx * 0.55, 0, 0, PI * 2);
      c.fill();
      c.strokeStyle = "rgba(170,120,135,0.22)";
      c.lineWidth = 0.8;
      c.beginPath();
      c.ellipse(x, y, rx * 0.92, rx * 0.5, 0, PI * 1.1, PI * 1.9);
      c.stroke();
      c.fillStyle = "rgba(200,140,140,0.05)";
      c.fillRect(x - rx, y + rx * 0.5, rx * 2, 1);
    }
    // herbes rases
    c.lineCap = "round";
    for (let k = 0; k < Math.round(w / 2.2); k++) {
      const x = r() * w, y = berge(x) + r() * h * 0.015;
      const l = h * (0.006 + r() * 0.016), a = -PI / 2 + (r() - 0.5) * 0.9;
      c.strokeStyle = r() < 0.15 ? "rgba(140,100,115,0.35)" : (r() < 0.5 ? "#16181c" : "#1b1c22");
      c.lineWidth = 0.8 + r() * 0.8;
      c.beginPath();
      c.moveTo(x, y);
      c.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l);
      c.stroke();
    }
    // pin noir sur le bord gauche
    const hp = h * 0.66;
    pin(c, w * 0.035, h * 1.02, hp, 0.13, 7, Math.min(hp, w * 0.62));
    // erable sur le bord droit
    const he = Math.min(h * 0.34, w * 0.34);
    erable(c, w * 0.965, berge(w * 0.965) + h * 0.02, he, 12);
    // vignettage : haut pour le titre et le menu, coins du bas
    const gh = c.createLinearGradient(0, 0, 0, h * 0.2);
    gh.addColorStop(0, "rgba(4,5,16,0.38)");
    gh.addColorStop(1, "rgba(4,5,16,0)");
    c.fillStyle = gh;
    c.fillRect(0, 0, w, h * 0.2);
    const gc = c.createRadialGradient(w / 2, h * 0.55, Math.min(w, h) * 0.45, w / 2, h * 0.55, Math.max(w, h) * 0.85);
    gc.addColorStop(0, "rgba(3,3,10,0)");
    gc.addColorStop(1, "rgba(3,3,10,0.4)");
    c.fillStyle = gc;
    c.fillRect(0, 0, w, h);
  }

  function peindreEauSimple(c) {
    const g = c.createLinearGradient(0, HZ, 0, h);
    g.addColorStop(0, "#7a4a66");
    g.addColorStop(0.15, "#3c2c56");
    g.addColorStop(0.5, "#1c1c3c");
    g.addColorStop(1, "#0d0f22");
    c.fillStyle = g;
    c.fillRect(0, HZ, w, h - HZ);
  }

  /* ------------------------------------------------ sprites animes */

  function spriteBrume(c, W, Hh) {
    const g = c.createRadialGradient(W / 2, Hh / 2, 0, W / 2, Hh / 2, W / 2);
    g.addColorStop(0, "rgba(210,170,200,1)");
    g.addColorStop(0.5, "rgba(190,150,190,0.45)");
    g.addColorStop(1, "rgba(180,140,180,0)");
    c.fillStyle = g;
    c.save();
    c.translate(0, Hh / 2);
    c.scale(1, Hh / W);
    c.translate(0, -W / 2);
    c.fillRect(0, 0, W, W);
    c.restore();
  }

  function spriteStratus(c, W, Hh, sg) {
    const r = graine(sg);
    try { c.filter = "blur(" + (Hh * 0.06 * sc).toFixed(1) + "px)"; } catch (e) { /* rien */ }
    for (let k = 0; k < 46; k++) {
      const x = W * (0.1 + r() * 0.8), y = Hh * (0.35 + r() * 0.3);
      const rx = W * (0.05 + r() * 0.12) * (1 - Math.abs(x / W - 0.5)), ry = Hh * (0.08 + r() * 0.12);
      const g = c.createLinearGradient(0, y - ry, 0, y + ry);
      g.addColorStop(0, "rgba(110,90,140,0.10)");
      g.addColorStop(1, "rgba(225,150,150,0.14)");
      c.fillStyle = g;
      c.beginPath();
      c.ellipse(x, y, rx, ry, 0, 0, PI * 2);
      c.fill();
    }
  }

  function spriteLenticulaire(c, W, Hh) {
    const couches = [[0.5, 0.64, 0.44, 0.15], [0.53, 0.45, 0.34, 0.12], [0.49, 0.3, 0.22, 0.09]];
    try { c.filter = "blur(" + (Hh * 0.05 * sc).toFixed(1) + "px)"; } catch (e) { /* rien */ }
    for (const q of couches) {
      const x = W * q[0], y = Hh * q[1], rx = W * q[2], ry = Hh * q[3];
      for (let i = 0; i < 9; i++) {
        const f = 1 - i * 0.085;
        const g = c.createLinearGradient(0, y - ry * f, 0, y + ry * f);
        g.addColorStop(0, "rgba(96,80,130,0.08)");
        g.addColorStop(0.55, "rgba(170,120,150,0.1)");
        g.addColorStop(1, "rgba(236,166,160,0.13)");
        c.fillStyle = g;
        c.beginPath();
        c.ellipse(x, y, rx * f, ry * f, 0, 0, PI * 2);
        c.fill();
      }
    }
  }

  // une image figee se dessine plus vite qu'un canvas
  function fige(cv) {
    return typeof cv.transferToImageBitmap === "function" ? cv.transferToImageBitmap() : cv;
  }
  function toile(W, Hh) {
    const cv = new OC(Math.max(1, Math.ceil(W * sc)), Math.max(1, Math.ceil(Hh * sc)));
    const c = cv.getContext("2d");
    c.setTransform(sc, 0, 0, sc, 0, 0);
    return [cv, c];
  }

  /* ------------------------------------------------ construction du cache */

  function ravines() {
    const r = graine(13), out = [];
    for (let k = 0; k < 70; k++) {
      out.push({ phi: (r() * 2 - 1) * 1.5, l: 0.006 + r() * 0.02, p: 0.02 + r() * r() * 0.13 });
    }
    return out;
  }

  const cle = w + "x" + h + "@" + sc + (OC ? "o" : "d");
  if (cache.cle !== cle) {
    for (const k in cache) delete cache[k];
    cache.cle = cle;
    cache.rg = ravines();
    // reflets et roseaux : positions fixes
    const r = graine(404);
    cache.eclats = [];
    for (let k = 0; k < 170; k++) {
      const d = Math.pow(r(), 1.4);
      const y = HZ + 3 + d * (h * 0.88 - HZ);
      const m = r();
      let x;
      if (m < 0.45) x = w * 0.82 + (r() - 0.5) * w * 0.45;
      else if (m < 0.75) x = cx + (r() - 0.5) * R * 0.4;
      else x = r() * w;
      const calme = y > h * 0.55 && y < h * 0.8 && Math.abs(x - w / 2) < w * 0.25;
      cache.eclats.push({
        x, y, l: 2 + d * 26 * (0.5 + r()),
        a: (0.07 + r() * 0.22) * (calme ? 0.55 : 1) * (1 - d * 0.4),
        v: 0.0006 + r() * 0.0016, ph: r() * PI * 2
      });
    }
    cache.roseaux = [];
    for (let k = 0; k < 34; k++) {
      const gauche = r() < 0.55;
      const x = gauche ? w * (0.1 + r() * 0.14) : w * (0.78 + r() * 0.12);
      cache.roseaux.push({
        x, y: berge(x) + h * 0.004, l: h * (0.04 + r() * 0.08), a: (r() - 0.5) * 0.3,
        ph: r() * PI * 2, v: 0.0006 + r() * 0.0006, pl: r() < 0.4, lw: 0.8 + r() * 0.9
      });
    }
    cache.nuages = [];
    for (let k = 0; k < 4; k++) {
      cache.nuages.push({ y: h * (0.07 + k * 0.065 + r() * 0.03), dx: r(), v: 0.003 + r() * 0.003,
        W: w * (0.35 + r() * 0.25), Hh: h * (0.03 + r() * 0.02), a: 0.55 + r() * 0.4, sg: 900 + k });
    }
    cache.brumes = [];
    for (let k = 0; k < 7; k++) {
      cache.brumes.push({ y: HZ + h * (-0.012 + r() * 0.05), dx: r(), v: 0.005 + r() * 0.006,
        W: w * (0.45 + r() * 0.35), Hh: h * (0.022 + r() * 0.02), a: 0.1 + r() * 0.1 });
    }

    if (OC) {
      // ciel, montagne, rive lointaine
      const A = toile(w, HZ + 4);
      peindreCiel(A[1]); peindreFuji(A[1], cache.rg); peindreCollines(A[1]);
      // lac : reflet inverse, adouci, assombri
      const pad = 10, RH = h - HZ + 4;
      const Rf = toile(w + pad * 2, RH), rc = Rf[1];
      peindreEauSimple(rc);
      rc.save();
      rc.setTransform(1, 0, 0, -1, 0, Math.round(HZ * sc) + 1);
      rc.globalAlpha = 0.27;
      try { rc.filter = "blur(" + (1.2 * sc).toFixed(1) + "px)"; } catch (e) { /* rien */ }
      for (let k = 0; k < 3; k++) {
        rc.drawImage(A[0], 0, 0, A[0].width, A[0].height, 0, -k * 3 * sc, (w + pad * 2) * sc, A[0].height);
      }
      rc.restore();
      rc.filter = "none";
      const ge = rc.createLinearGradient(0, 0, 0, RH);
      ge.addColorStop(0, "rgba(40,26,56,0.12)");
      ge.addColorStop(0.2, "rgba(22,18,44,0.35)");
      ge.addColorStop(0.6, "rgba(12,12,30,0.62)");
      ge.addColorStop(1, "rgba(6,8,20,0.7)");
      rc.fillStyle = ge;
      rc.fillRect(0, 0, w + pad * 2, RH);
      // fines rides sombres figees
      const rr = graine(77);
      for (let k = 0; k < 140; k++) {
        const d = Math.pow(rr(), 1.3), y = 2 + d * RH;
        rc.fillStyle = "rgba(6,6,18," + (0.05 + rr() * 0.12).toFixed(3) + ")";
        rc.fillRect(rr() * (w + pad * 2) - 40, y, 20 + d * 200 * rr(), 1 + d * 1.5);
      }
      cache.A = fige(A[0]); cache.R = fige(Rf[0]); cache.pad = pad; cache.RH = RH;
      // avancee boisee et son reflet
      const Mv = toile(w, h * 0.6);
      const yM = peindreAvancee(Mv[1]);
      const M = toile(w, h);
      M[1].drawImage(Mv[0], 0, 0, Mv[0].width, Mv[0].height, 0, 0, w, h * 0.6);
      M[1].save();
      M[1].translate(0, yM * 2);
      M[1].scale(1, -1);
      M[1].globalAlpha = 0.42;
      M[1].drawImage(Mv[0], 0, 0, Mv[0].width, Mv[0].height, 0, 1, w, h * 0.6);
      M[1].restore();
      M[1].globalCompositeOperation = "source-atop";
      const gm = M[1].createLinearGradient(0, yM, 0, yM + h * 0.1);
      gm.addColorStop(0, "rgba(10,10,26,0.2)");
      gm.addColorStop(1, "rgba(10,10,26,0.7)");
      M[1].fillStyle = gm;
      M[1].fillRect(0, yM, w, h * 0.12);
      M[1].globalCompositeOperation = "source-over";
      M[1].fillStyle = "rgba(210,150,150,0.14)";
      M[1].fillRect(0, yM, w * (paysage ? 0.24 : 0.3), 0.8);
      cache.M = fige(M[0]);
      // berge, arbres des bords, vignettage
      const F = toile(w, h);
      peindreBerge(F[1]);
      cache.F = fige(F[0]);
      // sprites
      const B = toile(512, 64); spriteBrume(B[1], 512, 64); cache.brumeS = fige(B[0]);
      const L = toile(R * 0.42, h * 0.085); spriteLenticulaire(L[1], R * 0.42, h * 0.085);
      cache.lent = fige(L[0]); cache.lentW = R * 0.42; cache.lentH = h * 0.085;
      for (const n of cache.nuages) {
        const S = toile(n.W, n.Hh); spriteStratus(S[1], n.W, n.Hh, n.sg); n.S = fige(S[0]);
      }
    }
  }

  /* ------------------------------------------------ dessin de l'image */

  if (OC && cache.A) {
    ctx.drawImage(cache.A, 0, 0, w, HZ + 4);
    // reflet qui ondule, par bandes horizontales
    const Rc = cache.R, pad = cache.pad, RH = cache.RH;
    let y = 0;
    while (y < RH) {
      const d = y / RH;
      const bh = 2.2 + d * 6.5;
      const amp = 0.4 + d * 4.5;
      const dx = Math.sin(y * 0.21 / (0.3 + d) - t * 0.0016) * amp * 0.6 +
        Math.sin(y * 0.047 + t * 0.0009) * amp * 0.4;
      ctx.drawImage(Rc, 0, Math.floor(y * sc), Rc.width, Math.max(1, Math.ceil(bh * sc)),
        -pad + dx, HZ + y, w + pad * 2, bh + 0.6);
      y += bh;
    }
  } else {
    peindreCiel(ctx); peindreFuji(ctx, cache.rg); peindreCollines(ctx); peindreEauSimple(ctx);
  }

  // nuages fins qui passent
  for (const n of cache.nuages) {
    const x = ((n.dx * (w + n.W) + t * 0.001 * n.v * w) % (w + n.W)) - n.W;
    ctx.globalAlpha = n.a;
    if (n.S) ctx.drawImage(n.S, x, n.y - n.Hh / 2, n.W, n.Hh);
    else { ctx.fillStyle = "rgba(200,140,150,0.08)"; ctx.fillRect(x, n.y, n.W, 2); }
  }
  // nuage lenticulaire au dessus du sommet, presque immobile
  const lw = OC ? cache.lentW : R * 0.42, lh = OC ? cache.lentH : h * 0.085;
  const lx = cx - lw * 0.42 + Math.sin(t * 0.00007) * R * 0.02;
  const ly = PY - h * 0.075 + Math.sin(t * 0.00011) * h * 0.003;
  ctx.globalAlpha = 0.8 + 0.12 * Math.sin(t * 0.00023);
  if (cache.lent) ctx.drawImage(cache.lent, lx, ly, lw, lh);
  ctx.globalAlpha = 1;

  // eclats de lumiere sur l'eau
  // regroupes par niveau d'opacite : six remplissages par image
  const NIV = 6;
  for (let k = 0; k < NIV; k++) {
    ctx.fillStyle = "rgba(240,192,184," + ((k + 0.5) * 0.05).toFixed(3) + ")";
    ctx.beginPath();
    for (const e of cache.eclats) {
      const s = Math.sin(t * e.v + e.ph);
      if (s <= 0.1) continue;
      if (Math.min(NIV - 1, Math.floor(e.a * s / 0.05)) !== k) continue;
      ctx.rect(e.x + Math.sin(t * 0.0005 + e.ph) * 3, e.y, e.l * (0.6 + 0.4 * s), 1);
    }
    ctx.fill();
  }

  // brume qui derive au ras de l'eau
  for (const b of cache.brumes) {
    const x = ((b.dx * (w + b.W) + t * 0.001 * b.v * w) % (w + b.W)) - b.W;
    ctx.globalAlpha = b.a * (0.8 + 0.2 * Math.sin(t * 0.0003 + b.dx * 9));
    if (cache.brumeS) ctx.drawImage(cache.brumeS, x, b.y - b.Hh / 2, b.W, b.Hh);
  }
  ctx.globalAlpha = 1;

  if (OC && cache.M) ctx.drawImage(cache.M, 0, 0, w, h);
  else peindreAvancee(ctx);

  if (OC && cache.F) ctx.drawImage(cache.F, 0, 0, w, h);
  else peindreBerge(ctx);

  // roseaux et susuki qui ondulent sur la berge
  ctx.lineCap = "round";
  for (const q of cache.roseaux) {
    const a = -PI / 2 + q.a + Math.sin(t * q.v + q.ph) * 0.06 + Math.sin(t * 0.00031 + q.x * 0.01) * 0.03;
    const tx = q.x + Math.cos(a) * q.l, ty = q.y + Math.sin(a) * q.l;
    ctx.strokeStyle = "#0e0e14";
    ctx.lineWidth = q.lw;
    ctx.beginPath();
    ctx.moveTo(q.x, q.y);
    ctx.quadraticCurveTo(q.x + Math.cos(a) * q.l * 0.1, q.y - q.l * 0.55, tx, ty);
    ctx.stroke();
    if (q.pl) {
      ctx.strokeStyle = "rgba(196,150,150,0.32)";
      ctx.lineWidth = q.lw + 1.4;
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(tx + Math.cos(a + 0.5) * q.l * 0.16, ty + Math.sin(a + 0.5) * q.l * 0.16 + q.l * 0.05);
      ctx.stroke();
    }
  }
}

/* ----------------------------------------------------------- comores */
function decorComores(ctx, w, h, t, cache) {
  "use strict";
  const PI2 = Math.PI * 2;
  const HOR = 0.52; // horizon, en fraction de h
  const H0 = h * HOR;
  const S = Math.max(0.45, Math.min(w / 1920, h / 1080));

  /* generateur a graine fixe */
  function graine(s) {
    return function () {
      s = (s + 0x6D2B79F5) | 0;
      let r = Math.imul(s ^ (s >>> 15), 1 | s);
      r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }
  function hache(i, s) {
    const v = Math.sin(i * 127.1 + s * 311.7) * 43758.5453;
    return v - Math.floor(v);
  }
  function bruit(x, s) {
    const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f);
    return hache(i, s) * (1 - u) + hache(i + 1, s) * u;
  }
  function fbm(x, s, oct) {
    let v = 0, a = 0.5, f = 1, tot = 0;
    for (let o = 0; o < oct; o++) { v += a * bruit(x * f, s + o * 17); tot += a; a *= 0.5; f *= 2.03; }
    return v / tot;
  }
  function borne(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lisse(v) { v = borne(v, 0, 1); return v * v * (3 - 2 * v); }
  function mix(c1, c2, k) {
    return [c1[0] + (c2[0] - c1[0]) * k, c1[1] + (c2[1] - c1[1]) * k, c1[2] + (c2[2] - c1[2]) * k];
  }
  function rgb(c, a) {
    return "rgba(" + (c[0] | 0) + "," + (c[1] | 0) + "," + (c[2] | 0) + "," + (a === undefined ? 1 : a) + ")";
  }
  function lin(c, x0, y0, x1, y1, stops) {
    const g = c.createLinearGradient(x0, y0, x1, y1);
    for (const s of stops) g.addColorStop(s[0], s[1]);
    return g;
  }
  function rad(c, x, y, r, stops) {
    const g = c.createRadialGradient(x, y, 0, x, y, r);
    for (const s of stops) g.addColorStop(s[0], s[1]);
    return g;
  }

  /* ---------- profils ---------- */
  const sunX = w * 0.1;
  const vx = w * 0.64, vdemi = Math.max(w * 0.5, h * 0.52), vsom = h * 0.25;
  const xPied = vx - vdemi;
  // cones secondaires sur les flancs
  const CONES = [[-0.62, 0.035, 0.022], [-0.4, 0.028, 0.016], [0.47, 0.04, 0.02], [0.7, 0.03, 0.014]];
  function volcan(x) {
    const d = (x - vx) / vdemi, u = Math.abs(d);
    if (u >= 1) return H0 + 2;
    const hv = H0 - vsom;
    let f;
    if (u < 0.1) {
      // plateau sommital et caldeira
      f = 1 - 0.006 * (u / 0.1) - 0.012 * Math.max(0, 1 - Math.pow(u / 0.06, 2));
    } else {
      // bouclier : dos rond en haut, pied tres etale
      const s = (u - 0.1) / 0.9;
      const cloche = (1 - s) * (1 - s) * (1 + 2 * s);
      f = 0.994 * (0.6 * cloche + 0.4 * Math.pow(1 - s, 2.2));
    }
    let y = H0 - hv * f;
    for (const c of CONES) {
      const q = (d - c[0]) / c[1];
      y -= h * c[2] * Math.exp(-q * q);
    }
    y += (fbm(x / (h * 0.025), 3, 4) - 0.5) * h * 0.008 * Math.min(1, u * 3);
    return y;
  }
  // contrefort boise, plus proche
  function contrefort(x) {
    const s = lisse((x - xPied - vdemi * 0.25) / (vdemi * 0.5));
    return H0 + 2 - s * h * (0.022 + 0.03 * fbm(x / (h * 0.08), 21, 4));
  }
  function cote(x) {
    const s = lisse((x - xPied) / (w * 0.3));
    return H0 + s * (h * 0.024 + (fbm(x / (h * 0.02), 71, 3) - 0.5) * h * 0.006);
  }
  const xR = Math.max(w * 0.45, xPied + w * 0.3);
  function recif(x) {
    if (x >= xR) return cote(x);
    const s = lisse(x / xR);
    return H0 + h * 0.075 + (cote(xR) - H0 - h * 0.075) * s + Math.sin(x / (h * 0.05)) * h * 0.002 * (1 - s);
  }
  // bord de l'avant-plan, remonte seulement sur les bords
  function rive(x) {
    const u = x / w;
    return h * (0.874 + (fbm(u * 6, 91, 4) - 0.5) * 0.03)
      - h * 0.075 * Math.pow(Math.abs(u - 0.5) * 2, 3);
  }
  function profil(c, f, pas, bas) {
    c.beginPath();
    c.moveTo(-2, bas);
    for (let x = -2; x <= w + pas; x += pas) c.lineTo(x, f(x));
    c.lineTo(w + 2, bas);
    c.closePath();
  }
  // terre : du relief jusqu'au trait de cote
  function masse(c, f, pas) {
    c.beginPath();
    c.moveTo(-2, cote(-2));
    for (let x = -2; x <= w + pas; x += pas) c.lineTo(x, Math.min(f(x), cote(x)));
    for (let x = w + pas; x >= -2; x -= pas) c.lineTo(x, cote(x) + 1);
    c.closePath();
  }

  /* ---------- ciel ---------- */
  function peindreCiel(c) {
    c.fillStyle = lin(c, 0, 0, 0, H0, [[0, "#0c0a1c"], [0.28, "#1d1531"], [0.52, "#3a2143"], [0.72, "#633245"], [0.88, "#8f4a40"], [1, "#a85a3c"]]);
    c.fillRect(0, 0, w, H0 + 2);
    // lueur du soleil couche, a l'ouest
    c.fillStyle = rad(c, sunX, H0, Math.max(w, h) * 0.55, [[0, "rgba(238,150,78,0.38)"], [0.35, "rgba(200,100,70,0.14)"], [1, "rgba(150,70,80,0)"]]);
    c.fillRect(0, 0, w, H0 + 2);
    c.fillStyle = rad(c, sunX, H0 + h * 0.01, h * 0.08, [[0, "rgba(255,190,110,0.35)"], [1, "rgba(255,170,100,0)"]]);
    c.fillRect(0, H0 - h * 0.1, w * 0.5, h * 0.12);
    // premieres etoiles, tres pales
    const r = graine(91);
    const n = Math.round(w * h / 9000);
    for (let i = 0; i < n; i++) {
      const x = r() * w, y = Math.pow(r(), 1.6) * H0 * 0.5;
      const a = (0.1 + r() * 0.3) * (1 - y / (H0 * 0.5));
      c.fillStyle = "rgba(220,215,240," + a + ")";
      const z = r() < 0.9 ? 0.7 : 1.1;
      c.fillRect(x, y, z, z);
    }
  }

  /* ---------- nuages en nappes ---------- */
  function peindreNuage(c, cx, cy, cw, ch, seed, teinte) {
    const r = graine(seed);
    for (let i = 0; i < 40; i++) {
      const a = r() * PI2, d = Math.sqrt(r());
      const x = cx + Math.cos(a) * d * cw * 0.3, y = cy + Math.sin(a) * d * ch * 0.16;
      const rr = (0.08 + r() * 0.12) * cw * (1 - d * 0.4);
      c.save();
      c.translate(x, y);
      c.scale(rr, Math.min(rr * (ch / cw) * 1.4, ch * 0.3));
      c.fillStyle = rad(c, 0, 0, 1, [[0, "rgba(" + teinte + ",0.17)"], [1, "rgba(" + teinte + ",0)"]]);
      c.beginPath(); c.arc(0, 0, 1, 0, PI2); c.fill();
      c.restore();
    }
  }
  const hN = Math.min(h, w * 0.9); // epaisseur des nuages
  const NUAGES = [
    { x: 0.24, y: 0.1, cw: 0.5, ch: 0.1, a: 0.75, v: 0.000021, ph: 0.3, s: 11, tn: "140,105,150" },
    { x: 0.74, y: 0.07, cw: 0.46, ch: 0.08, a: 0.65, v: 0.000017, ph: 2.2, s: 12, tn: "120,95,145" },
    { x: 0.36, y: 0.23, cw: 0.42, ch: 0.06, a: 0.85, v: 0.000026, ph: 4.1, s: 13, tn: "215,128,96" },
    { x: 0.86, y: 0.29, cw: 0.36, ch: 0.05, a: 0.7, v: 0.000019, ph: 1.4, s: 14, tn: "190,112,104" },
    { x: 0.12, y: 0.43, cw: 0.32, ch: 0.035, a: 0.8, v: 0.000023, ph: 5.2, s: 15, tn: "235,145,90" },
    // brume accrochee au flanc, devant le volcan
    { x: 0.6, y: 0.41, cw: 0.66, ch: 0.1, a: 0.32, v: 0.000014, ph: 3.3, s: 16, tn: "130,105,135", devant: true },
  ];

  /* ---------- volcan, contrefort et cote ---------- */
  function canopee(c, f, n, seed, teintes, lum, y0) {
    const r = graine(seed);
    for (let i = 0; i < n; i++) {
      const x = r() * w;
      const top = f(x);
      const y = Math.max(top, y0) + r() * (cote(x) - Math.max(top, y0));
      const pr = (y - vsom) / (H0 - vsom);
      const z = (0.8 + r() * 1.6) * S * (0.6 + pr * 0.6);
      c.fillStyle = teintes[(r() * teintes.length) | 0];
      c.globalAlpha = 0.3 + r() * 0.35;
      c.beginPath(); c.ellipse(x, y, z * 1.3, z * 0.8, 0, 0, PI2); c.fill();
      if (r() < 0.2) {
        c.fillStyle = lum; c.globalAlpha = 0.14;
        c.beginPath(); c.ellipse(x - z * 0.3, y - z * 0.35, z * 0.55, z * 0.3, 0, 0, PI2); c.fill();
      }
    }
    c.globalAlpha = 1;
  }
  function peindreTerre(c) {
    // le Karthala
    masse(c, volcan, 3);
    c.fillStyle = lin(c, 0, vsom, 0, H0 + h * 0.03, [[0, "#2a2232"], [0.2, "#212429"], [0.45, "#18251e"], [1, "#0f1913"]]);
    c.fill();
    c.save();
    masse(c, volcan, 3);
    c.clip();
    // flanc ouest qui prend la derniere lumiere
    c.fillStyle = lin(c, xPied, 0, vx + vdemi * 0.1, 0, [[0, "rgba(214,118,78,0.2)"], [0.6, "rgba(180,100,90,0.07)"], [1, "rgba(0,0,0,0)"]]);
    c.fillRect(xPied - 4, vsom - 10, vdemi * 1.2, H0 - vsom + h * 0.05);
    // foret en bas des pentes
    canopee(c, volcan, Math.round(7000 * Math.max(0.3, (w * h) / (1920 * 1080))), 31,
      ["#141f18", "#16231b", "#122017", "#18261d", "#132019"], "#26302a", vsom + (H0 - vsom) * 0.3);
    // ravines qui descendent du plateau
    const rp = graine(57);
    c.lineCap = "round";
    for (let i = 0; i < 40; i++) {
      const d = (rp() - 0.5) * 1.5;
      let x = vx + d * vdemi, y = volcan(x) + h * (0.006 + rp() * 0.015);
      const lg = h * (0.03 + rp() * 0.07);
      c.strokeStyle = rp() < 0.75 ? "rgba(8,10,12,0.1)" : "rgba(170,120,110,0.04)";
      c.lineWidth = (1 + rp() * 2) * S;
      c.beginPath(); c.moveTo(x, y);
      // la ravine suit la pente, vers l'exterieur
      for (let k = 0; k < 7; k++) { x += d * vdemi * 0.03 + (rp() - 0.5) * 3 * S; y += lg / 7; c.lineTo(x, y); }
      c.stroke();
    }
    // coulees de lave anciennes, plus sombres
    for (let i = 0; i < 6; i++) {
      const d = (rp() - 0.5) * 1.4;
      let x = vx + d * vdemi, y = volcan(x) + h * 0.02;
      c.strokeStyle = "rgba(8,9,12,0.09)";
      c.lineWidth = (5 + rp() * 7) * S;
      c.beginPath(); c.moveTo(x, y);
      for (let k = 0; k < 10; k++) { x += Math.sign(d) * (2 + rp() * 4) * S; y += h * 0.012; c.lineTo(x, y); }
      c.stroke();
    }
    // flanc est dans l'ombre
    c.fillStyle = lin(c, vx, 0, vx + vdemi, 0, [[0, "rgba(8,8,18,0)"], [0.35, "rgba(8,8,18,0.25)"], [1, "rgba(8,8,18,0.5)"]]);
    c.fillRect(vx, vsom - 10, vdemi + 4, H0 - vsom + h * 0.05);
    // voile de brume violette sur le haut, l'air du soir
    c.fillStyle = lin(c, 0, vsom, 0, H0, [[0, "rgba(80,60,100,0.14)"], [0.5, "rgba(80,60,100,0.04)"], [1, "rgba(80,60,100,0.1)"]]);
    c.fillRect(0, vsom - 10, w, H0 - vsom + 10);
    c.restore();
    // liseret chaud sur la crete
    c.strokeStyle = "rgba(230,140,96,0.18)";
    c.lineWidth = 1.2 * S;
    c.beginPath();
    for (let x = Math.max(0, xPied); x <= vx + vdemi * 0.15; x += 3) c[x === Math.max(0, xPied) ? "moveTo" : "lineTo"](x, volcan(x) + 0.8);
    c.stroke();

    // contrefort boise
    masse(c, contrefort, 4);
    c.fillStyle = lin(c, 0, H0 - h * 0.05, 0, H0 + h * 0.03, [[0, "#131d17"], [1, "#0e1611"]]);
    c.fill();
    c.save();
    masse(c, contrefort, 4);
    c.clip();
    canopee(c, contrefort, Math.round(1600 * Math.max(0.3, (w * h) / (1920 * 1080))), 41,
      ["#101a14", "#15211a", "#0c140f", "#1a271d"], "#343a2e", 0);
    // petits cocotiers en silhouette le long du rivage
    const rc = graine(44);
    c.strokeStyle = "rgba(6,9,8,0.9)";
    c.fillStyle = "rgba(6,9,8,0.9)";
    for (let i = 0; i < 26; i++) {
      const x = xPied + vdemi * 0.3 + rc() * (w - xPied), y = cote(x) - h * 0.002;
      const hh = h * (0.012 + rc() * 0.012), lean = (rc() - 0.5) * hh * 0.5;
      c.lineWidth = Math.max(0.6, S);
      c.beginPath(); c.moveTo(x, y); c.quadraticCurveTo(x + lean * 0.3, y - hh * 0.6, x + lean, y - hh); c.stroke();
      for (let k = 0; k < 6; k++) {
        const a = -Math.PI + k * (Math.PI / 5) + (rc() - 0.5) * 0.3;
        const lg = hh * 0.4;
        c.beginPath(); c.moveTo(x + lean, y - hh);
        c.quadraticCurveTo(x + lean + Math.cos(a) * lg, y - hh + Math.sin(a) * lg * 0.6, x + lean + Math.cos(a) * lg * 1.3, y - hh + lg * 0.35);
        c.stroke();
      }
    }
    c.restore();

    // cote de basalte noir
    c.beginPath();
    for (let x = -2; x <= w + 4; x += 4) c[x === -2 ? "moveTo" : "lineTo"](x, cote(x) - h * 0.005 * lisse((x - xPied) / (w * 0.05)) - (fbm(x / (h * 0.01), 81, 2) - 0.5) * h * 0.002);
    for (let x = w + 4; x >= -2; x -= 4) c.lineTo(x, cote(x) + 1.5);
    c.closePath();
    c.fillStyle = "#07080a";
    c.fill();
    // ecume blanche au pied des roches
    c.strokeStyle = "rgba(210,190,190,0.2)";
    c.lineWidth = 1 * S;
    c.beginPath();
    for (let x = Math.max(-2, xPied); x <= w + 4; x += 4) c[x <= Math.max(-2, xPied) ? "moveTo" : "lineTo"](x, cote(x) + 1.5);
    c.stroke();
  }

  /* ---------- l'eau : teintes posees sur le reflet ---------- */
  function teinterEau(c, hw) {
    // mer du large, sombre et violette
    c.fillStyle = lin(c, 0, 0, 0, hw, [[0, "rgba(40,24,50,0.25)"], [0.3, "rgba(14,16,34,0.45)"], [1, "rgba(4,6,14,0.8)"]]);
    c.fillRect(0, 0, w, hw);
    // lagon turquoise, derriere la barriere de corail
    c.save();
    c.beginPath();
    c.moveTo(-2, recif(-2) - H0);
    for (let x = -2; x <= w + 4; x += 4) c.lineTo(x, recif(x) - H0);
    c.lineTo(w + 4, hw);
    c.lineTo(-2, hw);
    c.closePath();
    c.fillStyle = lin(c, 0, h * 0.02, 0, h * 0.36, [[0, "rgba(24,92,96,0.34)"], [0.35, "rgba(14,70,76,0.42)"], [1, "rgba(4,24,30,0.62)"]]);
    c.fill();
    c.clip();
    // fonds clairs de sable sous l'eau, par taches
    const r = graine(61);
    for (let i = 0; i < 18; i++) {
      const x = r() * w, y = h * (0.06 + r() * 0.24);
      const rx = w * (0.05 + r() * 0.12), ry = h * (0.006 + (y / h) * 0.05);
      c.save(); c.translate(x, y); c.scale(1, ry / rx);
      c.fillStyle = rad(c, 0, 0, rx, [[0, r() < 0.6 ? "rgba(60,150,140,0.1)" : "rgba(0,10,14,0.2)"], [1, "rgba(0,0,0,0)"]]);
      c.fillRect(-rx, -rx, rx * 2, rx * 2);
      c.restore();
    }
    c.restore();
  }

  /* ---------- cocotiers ---------- */
  const L = Math.min(w * 0.2, h * 0.21);
  const etroit = Math.min(1, (w / h) * 1.2); // ecran etroit : couronnes au bord
  const PALMIERS = [
    { bx: w * 0.01, by: h * 1.03, L: L, lg: 4.2, dx: 0.85, s: 102, ph: 0 },
    { bx: w * 0.99, by: h * 1.03, L: L * 1.05, lg: 4.7, dx: -0.75, s: 103, ph: 3.1 },
  ];
  for (const P of PALMIERS) {
    const hh = Math.min(h * (P.lg / 4.3) * 0.72, Math.max(P.L * P.lg, h * (P.lg / 4.3) * 0.5));
    P.tx = P.bx + P.L * P.dx * etroit; P.ty = P.by - hh;
    P.cx = P.bx + (P.tx - P.bx) * 0.85; P.cy = P.by - hh * 0.42;
    P.wt = P.L * 0.09;
  }
  function tronc(c, P) {
    const n = 44;
    let px = P.bx, py = P.by;
    for (let i = 1; i <= n; i++) {
      const u = i / n, v = 1 - u;
      const x = v * v * P.bx + 2 * v * u * P.cx + u * u * P.tx;
      const y = v * v * P.by + 2 * v * u * P.cy + u * u * P.ty;
      c.strokeStyle = i % 3 === 0 ? "#0d0c0c" : "#14110e";
      c.lineWidth = P.wt * (1 - 0.45 * u);
      c.lineCap = "butt";
      c.beginPath(); c.moveTo(px, py); c.lineTo(x, y); c.stroke();
      // liseret chaud cote ouest
      c.strokeStyle = "rgba(170,96,64,0.16)";
      c.lineWidth = Math.max(0.6, P.wt * 0.14);
      const o = P.wt * (1 - 0.45 * u) * 0.38;
      c.beginPath(); c.moveTo(px - o, py); c.lineTo(x - o, y); c.stroke();
      px = x; py = y;
    }
  }
  // une palme : rachis courbe et folioles qui pendent
  function palme(c, a, Lp, r) {
    const n = 34;
    const tombe = 0.25 + 0.65 * Math.abs(Math.cos(a));
    const ouest = Math.cos(a) < 0 ? 1 : 0.25;
    let px = 0, py = 0;
    c.lineCap = "round";
    for (let i = 1; i <= n; i++) {
      const u = i / n;
      const qx = Math.cos(a) * Lp * u;
      const qy = Math.sin(a) * Lp * u + Lp * 0.62 * tombe * u * u;
      const dx = qx - px, dy = qy - py;
      const d = Math.hypot(dx, dy) || 1;
      c.strokeStyle = "#0b0c0b";
      c.lineWidth = Math.max(0.8, Lp * 0.016 * (1.3 - u));
      c.beginPath(); c.moveTo(px, py); c.lineTo(qx, qy); c.stroke();
      const lg = Lp * 0.22 * Math.sin(Math.PI * Math.min(1, u * 1.02 + 0.06)) * (0.85 + r() * 0.3);
      for (let s = -1; s <= 1; s += 2) {
        const nx = -dy / d * s, ny = dx / d * s;
        // foliole : part du rachis puis pend sous son poids
        const ex = qx + nx * lg * 0.35 + dx / d * lg * 0.35;
        const ey = qy + ny * lg * 0.35 + dy / d * lg * 0.35 + lg * 0.5;
        c.strokeStyle = rgb(mix([7, 9, 8], [80, 48, 38], r() * 0.25 * ouest), 1);
        c.lineWidth = Math.max(0.9, Lp * 0.017 * (1.1 - u * 0.5));
        c.beginPath(); c.moveTo(qx, qy); c.quadraticCurveTo(qx + nx * lg * 0.55, qy + ny * lg * 0.55, ex, ey); c.stroke();
      }
      px = qx; py = qy;
    }
  }
  // couronne, en deux groupes qui se balancent chacun
  function couronne(c, P, groupe) {
    const r = graine(P.s * 7 + groupe);
    const n = 16;
    for (let k = groupe; k < n; k += 2) {
      const a = -Math.PI - 0.55 + k * ((Math.PI + 1.1) / (n - 1)) + (r() - 0.5) * 0.16;
      // les palmes du haut sont plus courtes
      const haut = Math.max(0, -Math.sin(a));
      palme(c, a, P.L * (0.95 - 0.3 * haut * haut + r() * 0.2), r);
    }
    if (groupe === 1) {
      // coeur et noix de coco
      c.fillStyle = "#0a0a09";
      c.beginPath(); c.ellipse(0, P.L * 0.02, P.wt * 0.8, P.wt * 0.55, 0, 0, PI2); c.fill();
      for (let k = 0; k < 5; k++) {
        c.fillStyle = k % 2 ? "#15120c" : "#1e1810";
        c.beginPath(); c.arc((r() - 0.5) * P.wt * 1.1, P.wt * (0.35 + r() * 0.4), P.wt * 0.32, 0, PI2); c.fill();
      }
    }
  }

  /* ---------- avant-plan : basalte noir et flaques ---------- */
  function peindreAvant(c) {
    const n = 80;
    c.beginPath();
    c.moveTo(0, h);
    for (let i = 0; i <= n; i++) { const x = (i / n) * w; c.lineTo(x, rive(x)); }
    c.lineTo(w, h);
    c.closePath();
    c.fillStyle = lin(c, 0, h * 0.72, 0, h, [[0, "#111216"], [0.4, "#0b0c0f"], [1, "#040506"]]);
    c.fill();
    c.save();
    c.clip();
    // blocs de basalte, du fond vers l'avant
    const rb = graine(202);
    function bloc(x, y, rx, ry, fade) {
      const m = 18, pts = [];
      for (let k = 0; k <= m; k++) {
        const a = Math.PI + (k / m) * Math.PI;
        const q = 1 + (rb() - 0.5) * 0.4;
        pts.push([x + Math.cos(a) * rx * q, y + Math.sin(a) * ry * q]);
      }
      c.beginPath();
      c.moveTo(pts[0][0], pts[0][1]);
      for (let k = 1; k < pts.length; k++) {
        const a = pts[k - 1], b = pts[k];
        c.quadraticCurveTo(a[0], a[1], (a[0] + b[0]) / 2, (a[1] + b[1]) / 2);
      }
      c.lineTo(pts[m][0], y + ry * 0.3);
      c.lineTo(pts[0][0], y + ry * 0.3);
      c.closePath();
      c.fillStyle = lin(c, x - rx * 0.4, y - ry, x + rx * 0.3, y + ry * 0.2,
        [[0, rgb(mix([12, 12, 15], [32, 26, 30], fade))], [0.5, rgb(mix([9, 9, 12], [15, 15, 19], fade))], [1, "#040405"]]);
      c.fill();
      if (fade < 0.3) return;
      // eclat mouille du ciel sur l'arete ouest
      c.strokeStyle = "rgba(210,130,96," + (0.1 * fade) + ")";
      c.lineWidth = Math.max(0.7, rx * 0.025);
      c.beginPath();
      for (let k = 2; k < m * 0.45; k++) c[k === 2 ? "moveTo" : "lineTo"](pts[k][0], pts[k][1] + 1);
      c.stroke();
      // alveoles de la roche
      const nb = Math.min(40, Math.round(rx * ry / 60));
      for (let k = 0; k < nb; k++) {
        const a = rb() * Math.PI, d = Math.sqrt(rb());
        c.fillStyle = rb() < 0.8 ? "rgba(0,0,0,0.35)" : "rgba(90,80,96,0.05)";
        const z = (0.6 + rb() * 1.6) * (rx / 80 + 0.5);
        c.beginPath(); c.ellipse(x - Math.cos(a) * rx * d * 0.9, y - Math.sin(a) * ry * d * 0.8, z, z * 0.6, 0, 0, PI2); c.fill();
      }
    }
    const rangs = 12;
    for (let i = 0; i < rangs; i++) {
      const p = i / (rangs - 1);
      const base = h * (0.016 + 0.14 * Math.pow(p, 1.8));
      let x = -rb() * base;
      while (x < w + base) {
        const rx = base * (0.7 + rb() * 0.8);
        const y0 = rive(x);
        const y = y0 + (h - y0) * Math.pow(p, 1.1) + h * 0.006;
        const bord = Math.min(x, w - x) / w;
        const fade = 0.25 + 0.55 * p;
        bloc(x, y, rx, rx * (0.35 + rb() * 0.2), bord < 0.15 ? Math.min(1, fade + 0.3) : fade);
        x += rx * (0.8 + rb() * 0.6);
      }
    }
    // flaques qui gardent le ciel du soir
    // flaques irregulieres, un reflet sourd du ciel
    const FL = [[0.34, 0.95, 0.05], [0.66, 0.975, 0.07]];
    const rf = graine(303);
    for (const f of FL) {
      const x = w * f[0], y = h * f[1], rx = Math.max(w * f[2], h * f[2] * 0.6), ry = rx * 0.12;
      c.beginPath();
      for (let k = 0; k <= 20; k++) {
        const a = (k / 20) * PI2, q = 0.75 + rf() * 0.35;
        c[k ? "lineTo" : "moveTo"](x + Math.cos(a) * rx * q, y + Math.sin(a) * ry * q);
      }
      c.closePath();
      c.fillStyle = lin(c, 0, y - ry, 0, y + ry, [[0, "#3c2530"], [0.6, "#1d1522"], [1, "#0c0a10"]]);
      c.fill();
    }
    c.restore();
    // bande mouillee le long de l'eau
    c.strokeStyle = "rgba(4,6,8,0.7)";
    c.lineWidth = 4 * S;
    c.beginPath();
    for (let i = 0; i <= n; i++) { const x = (i / n) * w; c[i ? "lineTo" : "moveTo"](x, rive(x) + 2.5 * S); }
    c.stroke();
    // troncs des cocotiers
    for (const P of PALMIERS) tronc(c, P);
    // voile en haut pour le titre et le menu, vignette
    c.fillStyle = lin(c, 0, 0, 0, h * 0.16, [[0, "rgba(0,0,0,0.3)"], [1, "rgba(0,0,0,0)"]]);
    c.fillRect(0, 0, w, h * 0.16);
    const vg = c.createRadialGradient(w / 2, h * 0.55, Math.min(w, h) * 0.35, w / 2, h * 0.55, Math.max(w, h) * 0.85);
    vg.addColorStop(0, "rgba(0,0,0,0)");
    vg.addColorStop(1, "rgba(0,0,0,0.5)");
    c.fillStyle = vg;
    c.fillRect(0, 0, w, h);
  }

  /* ---------- preparation, une fois par taille ---------- */
  const OC = typeof OffscreenCanvas !== "undefined" ? OffscreenCanvas : null;
  const mt = ctx.getTransform ? ctx.getTransform() : null;
  const k = Math.min(2, Math.max(1, mt && typeof mt.a === "number" && mt.a ? mt.a : 1));
  const cle = w + "x" + h + "@" + k;
  if (cache.cle !== cle) {
    cache.cle = cle;
    cache.ok = false;
    // reflets du soleil couchant et clapotis du lagon
    const r = graine(6), glints = [];
    for (let i = 0; i < 110; i++) {
      const v = Math.pow(r(), 1.2);
      const y = H0 + 2 + v * (h * 0.86 - H0);
      const colonne = i < 70;
      const x = colonne ? sunX + (r() - 0.5) * (w * 0.04 + v * w * 0.22) : r() * w;
      glints.push({ x, y, l: ((colonne ? 6 : 4) + v * 40 * r()) * S + 2, p: r() * PI2, s: 0.0007 + r() * 0.0014,
        chaud: colonne ? 1 : 0 });
    }
    cache.glints = glints;
    cache.rive = [];
    for (let i = 0; i <= 80; i++) { const x = (i / 80) * w; cache.rive.push([x, rive(x)]); }
    cache.recif = [];
    for (let x = 0; x <= xR; x += Math.max(4, xR / 60)) cache.recif.push([x, recif(x)]);
    const re = graine(4242), et = [];
    for (let i = 0; i < 26; i++) et.push({ x: re() * w, y: Math.pow(re(), 1.6) * H0 * 0.42, f: 0.0008 + re() * 0.002, p: re() * PI2, a: 0.25 + re() * 0.35 });
    cache.etoiles = et;
    if (OC) {
      const mk = (cw, ch) => {
        const cv = new OC(Math.max(1, Math.ceil(cw * k)), Math.max(1, Math.ceil(ch * k)));
        const c = cv.getContext("2d");
        c.scale(k, k);
        return [cv, c];
      };
      const hT = h * 0.6;
      const [cC, xC] = mk(w, H0 + 2); peindreCiel(xC);
      const [cT, xT] = mk(w, hT); peindreTerre(xT);
      // reflet : ciel et relief en miroir, puis les teintes de l'eau
      const hw = h - H0;
      const [cE, xE] = mk(w, hw);
      xE.fillStyle = "#0a0b16";
      xE.fillRect(0, 0, w, hw);
      xE.save();
      xE.globalAlpha = 0.55;
      xE.translate(0, H0);
      xE.scale(1, -1);
      xE.drawImage(cC, 0, 0, w, H0 + 2);
      xE.drawImage(cT, 0, 0, w, hT);
      xE.restore();
      teinterEau(xE, hw);
      const [cB, xB] = mk(w, h); peindreAvant(xB);
      const nu = [];
      for (const q of NUAGES) {
        const cw = q.cw * w, ch = q.ch * hN;
        const [cv, c] = mk(cw, ch);
        peindreNuage(c, cw / 2, ch / 2, cw, ch, q.s, q.tn);
        nu.push(cv);
      }
      // bouffee de brume du sommet
      const [cP, xP] = mk(64, 64);
      xP.fillStyle = rad(xP, 32, 32, 32, [[0, "rgba(170,150,170,1)"], [0.5, "rgba(160,140,160,0.4)"], [1, "rgba(160,140,160,0)"]]);
      xP.fillRect(0, 0, 64, 64);
      // couronnes, un lutin par groupe de palmes
      const cour = [];
      for (const P of PALMIERS) {
        const g = [];
        for (let gr = 0; gr < 2; gr++) {
          const [cv, c] = mk(P.L * 2.6, P.L * 3.0);
          c.translate(P.L * 1.3, P.L * 1.1);
          couronne(c, P, gr);
          g.push(cv);
        }
        cour.push(g);
      }
      const fige = cv => (cv.transferToImageBitmap ? cv.transferToImageBitmap() : cv);
      Object.assign(cache, { cC: fige(cC), cT: fige(cT), hT, cE: fige(cE), cB: fige(cB), nu: nu.map(fige), cP: fige(cP),
        cour: cour.map(g => g.map(fige)), ok: true });
    }
  }

  /* ---------- repli sans OffscreenCanvas : tout en direct ---------- */
  if (!cache.ok) {
    peindreCiel(ctx);
    for (const q of NUAGES) peindreNuage(ctx, q.x * w, q.y * h, q.cw * w, q.ch * hN, q.s, q.tn);
    ctx.fillStyle = "#0a0b16";
    ctx.fillRect(0, H0, w, h - H0);
    ctx.save(); ctx.translate(0, H0); teinterEau(ctx, h - H0); ctx.restore();
    peindreTerre(ctx);
    peindreAvant(ctx);
    for (const P of PALMIERS) {
      for (let gr = 0; gr < 2; gr++) { ctx.save(); ctx.translate(P.tx, P.ty); couronne(ctx, P, gr); ctx.restore(); }
    }
    return;
  }

  /* ---------- rendu par image ---------- */
  ctx.drawImage(cache.cC, 0, 0, w, H0 + 2);
  for (const e of cache.etoiles) {
    const s = 0.5 + 0.5 * Math.sin(t * e.f + e.p);
    ctx.fillStyle = "rgba(225,220,245," + (e.a * (0.3 + 0.7 * s)) + ")";
    ctx.fillRect(e.x, e.y, 1.1, 1.1);
  }
  // nuages qui derivent, derriere le volcan
  function nuage(i) {
    const q = NUAGES[i];
    const dx = Math.sin(t * q.v + q.ph) * w * 0.05 + Math.sin(t * q.v * 2.3 + q.ph * 2) * w * 0.012;
    const dy = Math.sin(t * q.v * 1.7 + q.ph) * h * 0.005;
    const cw = q.cw * w, ch = q.ch * hN;
    ctx.globalAlpha = q.a;
    ctx.drawImage(cache.nu[i], q.x * w - cw / 2 + dx, q.y * h - ch / 2 + dy, cw, ch);
  }
  for (let i = 0; i < NUAGES.length; i++) if (!NUAGES[i].devant) nuage(i);
  ctx.globalAlpha = 1;

  // eau : le reflet en bandes qui ondulent avec la houle
  const hw = h - H0, yMax = h * 0.9;
  const cE = cache.cE;
  let y = 0;
  while (H0 + y < yMax) {
    const d = y / (yMax - H0);
    const pas = 1.5 + d * 4.5;
    const dx = Math.sin(y * 0.08 / S - t * 0.0009) * (0.4 + d * 3.4) * S + Math.sin(y * 0.027 / S + t * 0.0005) * d * 2.4 * S;
    ctx.drawImage(cE, 0, y * k, w * k, Math.ceil(pas * k), dx, H0 + y, w, pas + 0.5);
    y += pas;
  }
  ctx.drawImage(cE, 0, (yMax - H0) * k, w * k, (hw - (yMax - H0)) * k, 0, yMax, w, hw - (yMax - H0));
  // reflets et clapotis
  const gl = cache.glints;
  for (let i = 0; i < gl.length; i++) {
    const q = gl[i];
    const a = Math.sin(t * q.s + q.p);
    if (a <= 0.15) continue;
    ctx.fillStyle = q.chaud ? "rgb(240,160,100)" : "rgb(150,190,190)";
    ctx.globalAlpha = (a - 0.15) * (q.chaud ? 0.3 : 0.1);
    ctx.fillRect(q.x + Math.sin(t * 0.0003 + q.p) * 5 * S, q.y, q.l, 1);
  }
  ctx.globalAlpha = 1;
  // ecume sur la barriere de corail
  const rc = cache.recif;
  if (rc.length > 1 && ctx.setLineDash) {
    ctx.strokeStyle = "rgba(220,200,200,1)";
    ctx.lineWidth = 1.2 * S;
    for (let j = 0; j < 2; j++) {
      ctx.globalAlpha = 0.08 + 0.06 * Math.sin(t * 0.0011 + j * 2.4);
      ctx.setLineDash([(14 + j * 9) * S, (22 + j * 14) * S]);
      ctx.lineDashOffset = -t * (0.004 + j * 0.003) * S;
      ctx.beginPath();
      for (let i = 0; i < rc.length; i++) ctx[i ? "lineTo" : "moveTo"](rc[i][0], rc[i][1] + j * 1.5 * S);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    ctx.globalAlpha = 1;
  }

  // relief, puis brume et fumee du sommet
  ctx.drawImage(cache.cT, 0, 0, w, cache.hT);
  for (let i = 0; i < NUAGES.length; i++) if (NUAGES[i].devant) nuage(i);
  const fx = vx - vdemi * 0.03;
  for (let i = 0; i < 12; i++) {
    const ph = (t * 0.00003 + i / 12) % 1;
    const z = h * (0.012 + ph * 0.05);
    const x = fx + (i % 3 - 1) * vdemi * 0.05 + ph * w * 0.07 + Math.sin(ph * 4 + i) * h * 0.006;
    const yy = vsom - h * 0.004 - ph * h * 0.07;
    ctx.globalAlpha = 0.13 * Math.sin(Math.PI * ph) * (1 - ph * 0.4);
    ctx.drawImage(cache.cP, x - z * 1.4, yy - z * 0.6, z * 2.8, z * 1.2);
  }
  ctx.globalAlpha = 1;

  // avant-plan
  ctx.drawImage(cache.cB, 0, 0, w, h);
  // l'eau qui lape le basalte
  const rv = cache.rive;
  ctx.strokeStyle = "rgba(190,200,205,1)";
  ctx.lineWidth = 1.2 * S;
  for (let j = 0; j < 2; j++) {
    const ph = t * 0.0009 + j * Math.PI;
    const lap = (1.5 + j) * S * Math.sin(ph);
    ctx.globalAlpha = 0.07 + 0.06 * (0.5 + 0.5 * Math.sin(ph));
    ctx.beginPath();
    for (let i = 0; i < rv.length; i++) ctx[i ? "lineTo" : "moveTo"](rv[i][0], rv[i][1] - lap - j * 3 * S);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  // palmes qui se balancent dans l'alize
  for (let p = 0; p < PALMIERS.length; p++) {
    const P = PALMIERS[p];
    for (let gr = 0; gr < 2; gr++) {
      const rot = 0.012 + Math.sin(t * (0.00055 + gr * 0.00013) + P.ph + gr * 1.7) * 0.03
        + Math.sin(t * 0.0013 + P.ph * 2 + gr) * 0.008;
      ctx.save();
      ctx.translate(P.tx, P.ty);
      ctx.rotate(rot);
      ctx.drawImage(cache.cour[p][gr], -P.L * 1.3, -P.L * 1.1, P.L * 2.6, P.L * 3.0);
      ctx.restore();
    }
  }
}

const TABLE = {
  "savane": decorSavane,
  "banquise": decorBanquise,
  "foret": decorForet,
  "eaux-douces": decorEauxDouces,
  "recif": decorRecif,
  "tropiques": decorTropiques,
  "vergers": decorVergers,
  "archipels": decorArchipels,
  "islande": decorIslande,
  "japon": decorJapon,
  "comores": decorComores,
};

const caches = {};

export function dessinerDecorRealiste(ctx, id, w, h, t) {
  const f = TABLE[id];
  if (!f) return false;
  f(ctx, w, h, t, caches[id] || (caches[id] = {}));
  return true;
}

export const DECORS_REALISTES = Object.keys(TABLE);
