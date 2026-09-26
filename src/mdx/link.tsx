import {css, cx} from '../../styled-system/css';
import type {ComponentProps} from 'react';

const styles = css({
    '--link-underline': '{colors.gray.400}',
    _dark: {'--link-underline': '{colors.gray.500}'},
    color: 'inherit',
    textDecoration: 'underline',
    textDecorationColor: 'var(--link-underline)',
    textDecorationThickness: '1px',
    textUnderlineOffset: '0.2em',
    overflowWrap: 'anywhere',
    _hover: {textDecorationColor: 'currentColor'},
    _focusVisible: {
        textDecorationColor: 'currentColor',
        outline: '2px solid currentColor',
        outlineOffset: '4px',
        borderRadius: '2px',
    },
});

export const Link = ({className, ...props}: ComponentProps<'a'>) => (
    <a {...props} className={cx(styles, className)} />
);
