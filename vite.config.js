import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "es2022",
    sourcemap: false,
    // la carte du monde pese plus lourd que tout le reste : elle a son propre fichier, mis en cache a part
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks: id => (/world-atlas|d3-geo|topojson|i18n-iso-countries|d3-array/.test(id) ? "carte" : undefined),
      },
    },
  },
});
