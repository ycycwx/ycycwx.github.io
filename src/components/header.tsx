import Link from 'next/link';
import {css} from '../../styled-system/css';

export const Header = () => {
    return (
        <div
            className={css({
                mb: '2.625rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: '4',
            })}
        >
            <Link
                href="/"
                className={css({
                    fontSize: '4xl',
                    lineHeight: '2.625rem',
                    fontWeight: 'black',
                })}
            >
                Ycycwx
            </Link>
            <nav
                className={css({
                    display: 'flex',
                    gap: '4',
                    fontSize: 'sm',
                })}
            >
                <Link href="/">Blog</Link>
                <Link href="/tier-list">Tier List</Link>
            </nav>
        </div>
    );
};
