import { css } from './.nuxt/types/tailwind.config.d'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['./assets/scss/main.scss'],
    components: true,
    app: {
        rootId: 'app',
        rootTag: 'body',
    },

    tailwindcss: {
        cssPath: '~/assets/scss/modules/_tailwindcss.scss',
        configPath: '~/tailwind.config.ts',
    },

    modules: ['@nuxt/ui', '@nuxtjs/tailwindcss'],
    compatibilityDate: '2024-07-27',
})
