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
    runtimeConfig:{
        OnlineWebhookUrl: process.env.ONLINE_WEBHOOK_URL,
        ClinicWebhookUrl: process.env.CLINIC_WEBHOOK_URL
    },
    app:{
        head:{
            title: "PT Mohamed Osama", // for all pages
        }
    }
})
