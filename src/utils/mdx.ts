import {readFile, readdir, stat} from 'node:fs/promises';
import {join, parse, resolve} from 'node:path';
import matter from 'gray-matter';

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

export const getMdxFiles = async () => {
    const mdxFiles = await walkMdxFiles(join('src', 'app', 'blog'));
    const matters = await Promise.all(
        mdxFiles.map(async file => ({
            name: parse(parse(file).dir).name,
            ...matter(await readFile(file)),
        }))
    );

    return matters.toSorted((a, b) => (b.data.date > a.data.date ? 1 : -1));
};
