const {resolve} = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
    root: true,
    extends: [
        'plugin:@next/next/recommended',
    ],
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
