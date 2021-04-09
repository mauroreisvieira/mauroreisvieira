const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                print: { raw: 'print' },
            },
            keyframes: {
                cursor: {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0 },
                },
            },
            animation: {
                cursor: 'cursor 1s ease-in-out infinite',
            },
            fontFamily: {
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                black: '#1c1b1b',
                gray: colors.trueGray,
                brand: {
                    light: '#f1427d',
                    DEFAULT: '#e91e63',
                    dark: '#da2160',
                },
                violet: colors.violet,
            },
            typography: (theme) => ({
                light: {
                    css: [
                        {
                            color: theme('colors.white'),
                            strong: {
                                color: theme('colors.white'),
                            },
                            'ol > li::before': {
                                color: theme('colors.gray.400'),
                            },
                            'ul > li::before': {
                                backgroundColor: theme('colors.gray.600'),
                            },
                            hr: {
                                borderColor: theme('colors.gray.200'),
                            },
                            blockquote: {
                                color: theme('colors.gray.200'),
                                borderLeftColor: theme('colors.gray.600'),
                            },
                            h1: {
                                color: theme('colors.white'),
                            },
                            h2: {
                                color: theme('colors.white'),
                            },
                            h3: {
                                color: theme('colors.white'),
                            },
                            h4: {
                                color: theme('colors.white'),
                            },
                            h5: {
                                color: theme('colors.white'),
                            },
                            'figure figcaption': {
                                color: theme('colors.gray.400'),
                            },
                            pre: {
                                color: theme('colors.gray.200'),
                                backgroundColor: theme('colors.gray.800'),
                            },
                            thead: {
                                color: theme('colors.white'),
                                borderBottomColor: theme('colors.gray.400'),
                            },
                            'tbody tr': {
                                borderBottomColor: theme('colors.gray.600'),
                            },
                        },
                    ],
                },
            }),
            boxShadow: {
                border: 'inset 0 -2px 0 0 currentColor',
            },
        },
    },
    variants: {
        extend: {
            typography: ['dark'],
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
