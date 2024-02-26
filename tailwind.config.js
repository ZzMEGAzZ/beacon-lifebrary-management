/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {},
            fontSize: {
                xs: 'clamp(0.5rem, 0.2rem + 1vw, 0.75rem)',
                sm: 'clamp(0.7rem, 0.3rem + 1vw, 1rem)',
                md: 'clamp(0.9rem, 0.4rem + 1vw, 1.25rem)',
                base: 'clamp(1rem, 0.5rem + 1.25vw, 1.5rem)',
                lg: 'clamp(1.15rem, 0.6rem + 1.5vw, 2rem)',
                xl: 'clamp(1.3rem, 0.7rem + 2vw, 3rem)',
                '2xl': 'clamp(1.45rem, 0.8rem + 2.2vw, 4rem)',
                '3xl': 'clamp(1.6rem, 0.9rem + 2.5vw, 5rem)',
                '4xl': 'clamp(1.75rem, 1rem + 2.7vw, 6rem)',
                '5xl': 'clamp(2rem, 1.1rem + 2.9vw, 7rem)',
            },
        },
        FontFace: {
            Kanit: ['Kanit', 'sans-serif'],
        },
    },
    plugins: [],
};
