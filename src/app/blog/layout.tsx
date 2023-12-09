import Link from 'next/link';
import {getMdxFiles} from '@/mdx/util';
import {Divider} from '@/mdx/divider';
import {Header} from '@/components/header';
import type {PropsWithChildren} from 'react';

/**
 * slice length
 */
const TOP = 3;

const MdxLayout = async ({children}: PropsWithChildren) => {
    const mdxFiles = await getMdxFiles();
    return (
        <>
            <Header />
            {children}
            <Divider />
            <ul>
                {
                    // slice by `TOP`
                    mdxFiles.slice(0, TOP).map(({data, name}) => (
                        <li key={name}>
                            <Link href={`/blog/${name}`}>{data.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default MdxLayout;
