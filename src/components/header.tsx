import Link from 'next/link';
import {css} from '../../styled-system/css';

export const Header = () => {
    return (
        <div
            className={css({
                mb: '2.625rem',
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
        </div>
    );
};
