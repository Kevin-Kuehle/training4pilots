// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['./assets/scss/main.scss'],
    components: true,

    app: {
        rootId: 'app',
        rootTag: 'body',
    },

    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                    // Add any other PostCSS plugins you need here
                },
            },
        },
    },

    modules: ["@nuxtjs/tailwindcss"]
})