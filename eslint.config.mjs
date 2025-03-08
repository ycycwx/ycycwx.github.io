import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {FlatCompat} from '@eslint/eslintrc';
import config from '@yotsubacy/config/eslint';
import {globalIgnores} from 'eslint/config';

const compat = new FlatCompat({
    baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
});

export default config(
    ['node', 'browser', 'react', 'typescript'],
    {
        languageOptions: {
            parserOptions: {
                projectService: {
                    allowDefaultProject: ['*.{js,mjs,cjs}'],
                },
                tsconfigRootDir: import.meta.dirname,
            },
        },
        settings: {
            'import/resolver': {
                typescript: {
                    project: import.meta.dirname,
                },
            },
        },
    },
    globalIgnores([
        'out',
        '.*',
        '**/*.d.ts',
        'styled-system/**/*.mjs',
    ]),
    ...compat.extends('next/core-web-vitals')
);
