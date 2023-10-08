const {resolve} = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    root: true,
    extends: ['next/core-web-vitals'],
    overrides: [
        {
            files: ['*.tsx', '*.ts'],
            excludedFiles: ['*.d.ts'],
            extends: [
                require.resolve('@yotsubacy/config/eslint/browser'),
                require.resolve('@yotsubacy/config/eslint/react'),
                require.resolve('@yotsubacy/config/eslint/typescript'),
            ],
            parserOptions: {
                project,
            },
            settings: {
                'import/resolver': {
                    typescript: {
                        project,
                    },
                },
            },
        },
        {
            files: ['*.cjs', '*.js', '*.mjs'],
            excludedFiles: ['styled-system/**/*.mjs'],
            extends: [require.resolve('@yotsubacy/config/eslint/node')],
        },
    ],
};
