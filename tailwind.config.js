/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            padding: '4rem',
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
