// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
  googleFonts: {
    families: {
      "Instrument Serif": [400, "400i", 500, "500i", 600, "600i", 700, "700i"],
      "Tilt Warp": [400, 500, 600, 700],
      "Geist": [400, 500, 600, 700],
    },
  },
});
