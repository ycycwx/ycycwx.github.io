import './globals.css';
import {Provider} from '@/theme/provider';
import {css} from '../../styled-system/css';
import type {ReactNode} from 'react';
import type {Metadata} from 'next';

export const metadata = {
    title: 'Blog',
    description: 'Blog',
} satisfies Metadata;

const RootLayout = ({children}: { children: ReactNode }) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={css({
                    maxW: '2xl',
                    mx: 'auto',
                    p: '2.625rem 1.3125rem',
                })}
            >
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    );
};

export default RootLayout;
