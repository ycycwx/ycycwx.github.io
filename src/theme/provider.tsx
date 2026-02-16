'use client';

import {ThemeProvider} from 'next-themes';
import type {ReactNode} from 'react';

export const Provider = ({children}: {children: ReactNode}) => {
    return (
        <ThemeProvider
            attribute="data-color-mode"
            defaultTheme="system"
            enableSystem
            themes={['light', 'dark']}
            storageKey="color-mode"
            value={{light: 'light', dark: 'dark'}}
        >
            {children}
        </ThemeProvider>
    );
};
