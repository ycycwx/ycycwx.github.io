import './globals.css';
import {Inter} from 'next/font/google';
import type {ReactNode} from 'react';
import type {Metadata} from 'next';

// eslint-disable-next-line new-cap
const inter = Inter({subsets: ['latin']});

export const metadata = {
    title: 'Blog',
    description: 'Blog',
} satisfies Metadata;

const RootLayout = ({children}: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
};

export default RootLayout;
