import {cva} from '../../styled-system/css';
import type {ComponentProps, FC} from 'react';

type HeadingTag = `h${1 | 2 | 3 | 4 | 5 | 6}`;

type Props = ComponentProps<'h2'> & {tag: HeadingTag};

const styles = cva({
    base: {
        fontWeight: 'semibold',
        letterSpacing: 'tight',
    },
    variants: {
        tag: {
            h1: {mt: '2', fontSize: '4xl', fontWeight: 'bold'},
            h2: {mt: '12', fontSize: '3xl'},
            h3: {mt: '10', fontSize: '2xl'},
            h4: {mt: '8', fontSize: 'xl'},
            h5: {mt: '8', fontSize: 'lg'},
            h6: {mt: '8', fontSize: 'base'},
        },
    },
});

export const Heading = (props: Props) => {
    const {tag: Tag, ...rest} = props;
    return <Tag className={styles({tag: Tag})} {...rest} />;
};

export function createHeadings(): Record<HeadingTag, FC<Omit<Props, 'tag'>>> {
    return {
        h1: props => <Heading {...props} tag="h1" />,
        h2: props => <Heading {...props} tag="h2" />,
        h3: props => <Heading {...props} tag="h3" />,
        h4: props => <Heading {...props} tag="h4" />,
        h5: props => <Heading {...props} tag="h5" />,
        h6: props => <Heading {...props} tag="h6" />,
    };
}
