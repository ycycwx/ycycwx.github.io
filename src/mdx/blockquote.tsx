import {css} from '../../styled-system/css';
import type {ComponentProps} from 'react';

const styles = css({
    mt: {base: '6', _first: '0'},
    borderColor: 'gray.300',
    borderLeftWidth: 4,
    fontStyle: 'italic',
    borderInlineStartWidth: '2',
    paddingStart: '6',
});

export const Blockquote = (props: ComponentProps<'blockquote'>) => {
    return <blockquote className={styles} {...props} />;
};
