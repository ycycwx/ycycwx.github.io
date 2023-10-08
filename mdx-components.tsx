import {css, cx} from './styled-system/css';
import type {MDXComponents} from 'mdx/types';

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: props => (
            <h1
                className={cx(
                    css({
                        fontSize: '3xl',
                        mt: 10,
                        scrollMargin: 20,
                        fontWeight: 'bold',
                    }),
                    props.className
                )}
                {...props}
            />
        ),
        h2: props => (
            <h2
                className={cx(
                    css({
                        mt: 8,
                        scrollMargin: 20,
                        pb: 2,
                        fontSize: '2xl',
                        fontWeight: 'bold',
                        '&:first-child': {mt: 0},
                    }),
                    props.className
                )}
                {...props}
            />
        ),
        h3: props => (
            <h3
                className={cx(
                    css({
                        mt: 4,
                        scrollMargin: 20,
                        fontSize: 'xl',
                        fontWeight: 'bold',
                    }),
                    props.className
                )}
                {...props}
            />
        ),
        p: props => (
            <p
                className={cx(
                    css({
                        lineHeight: '1.75rem',
                        '&:not(:first-child)': {mt: 6},
                    }),
                    props.className
                )}
                {...props}
            />
        ),
        code: props => (
            <code
                className={cx(
                    css({
                        position: 'relative',
                        borderRadius: '0.25rem',
                        px: '0.3rem',
                        py: '0.2rem',
                        fontFamily: 'mono',
                        fontSize: 'sm',
                        fontWeight: 'semibold',
                    }),
                    props.className
                )}
                {...props}
            />
        ),
        ...components,
    };
}
