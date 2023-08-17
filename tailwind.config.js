/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                lg: '2rem',
            },

        },
        extend: {
            colors: {
                themeBlue: '#0192FE',
                themeMediumBlue: 'rgba(1, 146, 254, 0.60)',
                themeLightBlue: '#F0F6FF'
            },
            lineHeight: {
                extraLoose: '62px',
            },
        },
    },
    plugins: [],
}
