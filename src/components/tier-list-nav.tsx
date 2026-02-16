'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {css, cx} from '../../styled-system/css';

const linkBase = css({
    pb: '1',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'transparent',
    color: 'gray.600',
    _dark: {color: 'gray.300'},
});

const linkActive = css({
    fontWeight: 'semibold',
    borderBottomColor: 'currentColor',
    color: 'gray.900',
    _dark: {color: 'white'},
});

export const TierListNav = () => {
    const pathname = usePathname();
    const isWriter = pathname === '/tier-list' || pathname === '/tier-list/writer';

    return (
        <nav
            className={css({
                mt: '6',
                display: 'flex',
                gap: '4',
                fontSize: 'sm',
            })}
        >
            <Link
                href="/tier-list/writer"
                aria-current={isWriter ? 'page' : undefined}
                className={cx(linkBase, isWriter && linkActive)}
            >
                作家
            </Link>
        </nav>
    );
};
