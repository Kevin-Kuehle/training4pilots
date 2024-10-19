import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default <Partial<Config>>{
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ],
    theme: {
        extend: {
            colors: {
                secondary: {
                    DEFAULT: '#D4BB89',
                    100: '#F9F6F2',
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
