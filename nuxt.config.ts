// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite:{
        optimizeDeps: {
            include: ["cross-fetch"]
        }
    },
    modules: ['@nuxtjs/tailwindcss'],
    css: [
        'maz-ui/css/main.css',
    ],
    build: {
        transpile: ['maz-ui'], // ⚠️ important ⚠️
    },
    app:{
        head:{
            title: "PT Mohamed Osama", // for all pages
        }
    }
})
