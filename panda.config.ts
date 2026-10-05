import {defineConfig} from '@pandacss/dev';

export default defineConfig({
    presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],

    optimize: {
        removeUnusedTokens: true,
        removeUnusedKeyframes: true,
    },

    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: [
        './mdx-components.tsx',
        './src/**/*.{js,jsx,ts,tsx}',
        './pages/**/*.{js,jsx,ts,tsx}',
    ],

    // Files to exclude
    exclude: [],

    conditions: {
        light: '[data-color-mode=light] &',
        dark: '[data-color-mode=dark] &',
    },

    // Useful for theme customization
    theme: {
        extend: {
            tokens: {
                colors: {
                    // Keep the site's existing grayscale when upgrading Panda.
                    gray: {
                        50: {value: '#f9fafb'},
                        100: {value: '#f3f4f6'},
                        200: {value: '#e5e7eb'},
                        300: {value: '#d1d5db'},
                        400: {value: '#9ca3af'},
                        500: {value: '#6b7280'},
                        600: {value: '#4b5563'},
                        700: {value: '#374151'},
                        800: {value: '#1f2937'},
                        900: {value: '#111827'},
                        950: {value: '#030712'},
                    },
                },
            },
        },
    },

    // The output directory for your css system
    outdir: 'styled-system',
});
