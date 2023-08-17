/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
            },

        },
        extend: {
            colors: {
                themeBlue: '#0192FE',
            },
            lineHeight: {
                extraLoose: '62px',
            },
        },
    },
    plugins: [],
}
