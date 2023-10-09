import {defineConfig} from '@pandacss/dev';

export default defineConfig({
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
        extend: {},
    },

    // The output directory for your css system
    outdir: 'styled-system',
});
