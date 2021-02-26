const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            keyframes: {
                cursor: {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0 },
                },
            },
            animation: {
                cursor: 'cursor 1s ease-in-out infinite'
            },
            fontFamily: {
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                gray: colors.trueGray,
                brand: {
                    light: '#7e57c2',
                    DEFAULT: '#673ab7',
                    dark: '#5e35b1',
                }
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
        },
    },
    variants: {
        extend: {
            typography: ['dark'],
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
