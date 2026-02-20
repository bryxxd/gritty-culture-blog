// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
  googleFonts: {
    families: {
      "Instrument Serif": {
        wght: [400],
        ital: [400],
      },
      "Tilt Warp": [400, 500, 600, 700],
      "Geist": [400, 500, 600, 700],
    },
    download: true,
  },
  runtimeConfig: {
    public: {
      wpGraphqlUrl: process.env.NUXT_PUBLIC_WP_GRAPHQL_URL,
    }
  }
});