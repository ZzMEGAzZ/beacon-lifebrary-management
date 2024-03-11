/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                Primary: {
                    light: '#D55560',
                    DEFAULT: '#EE2E40',
                    dark: '#B42935',
                },
                Secondary: {
                    light: '#FFC300',
                    DEFAULT: '#EE9E00',
                    dark: '#B37E00',
                },
                Black: '#222222',
                Gray: {
                    light: '#E5E5E5',
                    DEFAULT: '#B2B2B2',
                    dark: '#3A3A3A',
                },
                Danger: '#EE2E40',
                Success: '#00A86B',
                Warning: '#FFC300',
                Info: '#00A2FF',
                Bg: '#F9F9F9'
            },
            fontSize: {
                xs: 'clamp(0.4rem, 0.2rem + 0.2vw, 0.75rem)',
                sm: 'clamp(0.6rem, 0.3rem + 0.2vw, 1rem)',
                md: 'clamp(0.8rem, 0.4rem + 0.3vw, 1.25rem)',
                base: 'clamp(1rem, 0.5rem + 0.5vw, 1.5rem)',
                lg: 'clamp(1.15rem, 0.6rem + 0.5vw, 2rem)',
                xl: 'clamp(1.3rem, 0.7rem + 0.8vw, 3rem)',
                '2xl': 'clamp(1.45rem, 0.8rem + 0.8vw, 4rem)',
                '3xl': 'clamp(1.6rem, 0.9rem + 0.8vw, 5rem)',
                '4xl': 'clamp(1.75rem, 1rem + 1vw, 6rem)',
                '5xl': 'clamp(2rem, 1.1rem + 1vw, 7rem)',
            },
            borderRadius: {
                DEFAULT: 'clamp(0.25rem, 0.1rem + 1vw, 0.5rem)',
                md: 'clamp(0.5rem, 0.2rem + 1vw, 0.75rem)',
                lg: 'clamp(0.75rem, 0.3rem + 1vw, 1rem)',
                xl: 'clamp(1rem, 0.4rem + 1vw, 1.25rem)',
                '2xl': 'clamp(1.25rem, 0.5rem + 1vw, 1.5rem)',
                '3xl': 'clamp(1.5rem, 0.6rem + 1vw, 1.75rem)',
            },
        },
        FontFace: {
            Kanit: ['Kanit', 'sans-serif'],
        },
    },
    plugins: [],
};
