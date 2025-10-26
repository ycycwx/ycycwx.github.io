import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import config from '@yotsubacy/config/eslint';
import {globalIgnores} from 'eslint/config';

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
    ...nextVitals,
    ...nextTs,
    globalIgnores([
        'out',
        '.*',
        '**/*.d.ts',
        'styled-system/**/*.mjs',
    ])
);
