import {Blockquote} from '@/mdx/blockquote';
import {Divider} from '@/mdx/divider';
import {Text} from '@/mdx/text';
import {createHeadings} from '@/mdx/heading';
import {ListItem, OrderedList, UnorderedList} from '@/mdx/list';
import type {MDXComponents} from 'mdx/types';

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        p: Text,
        blockquote: Blockquote,
        hr: Divider,
        ol: OrderedList,
        ul: UnorderedList,
        li: ListItem,
        ...createHeadings(),
        ...components,
    };
}
