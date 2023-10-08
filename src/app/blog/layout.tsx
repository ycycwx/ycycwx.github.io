import Link from 'next/link';
import {getMdxFiles} from '@/utils/mdx';
import type {ReactNode} from 'react';

const MdxLayout = async ({children}: { children: ReactNode }) => {
    const mdxFiles = await getMdxFiles();
    return (
        <>
            <div>{children}</div>
            <hr />
            <ul>
                {
                    // Top 10
                    mdxFiles
                        .slice(0, 10)
                        .map(({data, name}) => (
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
