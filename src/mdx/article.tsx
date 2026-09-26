import {css, cx} from '../../styled-system/css';
import type {ComponentProps} from 'react';

const styles = css({
    // Explicit JSX tags in MDX bypass the component map, so style native details here.
    '& details': {
        my: '6',
        paddingInlineStart: '4',
        borderInlineStartWidth: '2px',
        borderInlineStartStyle: 'solid',
        borderInlineStartColor: {base: 'gray.300', _dark: 'gray.700'},
        _first: {mt: '0'},
        '&[open]': {pb: '4'},
        '& > summary': {
            cursor: 'pointer',
            py: '2',
            _focusVisible: {
                outline: '2px solid currentColor',
                outlineOffset: '4px',
                borderRadius: '2px',
            },
        },
    },
});

export const Article = ({className, ...props}: ComponentProps<'article'>) => (
    <article {...props} className={cx(styles, className)} />
);
