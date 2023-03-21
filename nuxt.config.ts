// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
