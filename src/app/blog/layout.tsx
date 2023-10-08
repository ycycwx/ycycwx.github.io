import {join, parse, resolve} from 'node:path';
import {readFile, readdir, stat} from 'node:fs/promises';
import matter from 'gray-matter';
import Link from 'next/link';
import type {ReactNode} from 'react';

/**
 * Traverse and get all mdx files
 */
const walkMdxFiles = async (dir: string): Promise<string[]> => {
    const subdirs = await readdir(dir);
    const mdx = await Promise.all(
        subdirs.map(async subdir => {
            const link = resolve(dir, subdir);
            const status = await stat(link);
            if (status.isDirectory()) {
                return walkMdxFiles(link);
            }
            if (link.endsWith('.mdx')) {
                return [link];
            }
            return [];
        })
    );
    return mdx.flatMap(files => files);
};

const MdxLayout = async ({children}: { children: ReactNode }) => {
    const mdxFiles = await walkMdxFiles(join('src', 'app', 'blog'));
    const matters = await Promise.all(
        mdxFiles.map(async file => ({
            name: parse(parse(file).dir).name,
            ...matter(await readFile(file)),
        }))
    );
    return (
        <>
            <div>{children}</div>
            <hr />
            <ul>
                {
                    matters
                        .toSorted((a, b) => (b.data.date > a.data.date ? 1 : -1))
                        // Top 10
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
