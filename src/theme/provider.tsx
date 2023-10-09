'use client';

import {type ReactNode} from 'react';
import {ThemeProvider} from 'next-themes';

export const Provider = ({children}: {children: ReactNode}) => {
    return <ThemeProvider>{children}</ThemeProvider>;
};
