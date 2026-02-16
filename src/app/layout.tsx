import './globals.css';
import {Provider} from '@/theme/provider';
import {css} from '../../styled-system/css';
import type {PropsWithChildren} from 'react';
import type {Metadata} from 'next';

export const metadata = {
    title: 'Ycycwx Blog',
    description: 'Ycycwx Blog',
} satisfies Metadata;

const RootLayout = ({children}: PropsWithChildren) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={css({
                    maxW: '2xl',
                    mx: 'auto',
                    p: '2.625rem 1.3125rem',
                    minH: '100vh',
                    bg: 'white',
                    color: 'gray.900',
                    _dark: {
                        bg: 'gray.950',
                        color: 'gray.100',
                    },
                })}
            >
                <Provider>{children}</Provider>
            </body>
        </html>
    );
};

export default RootLayout;
