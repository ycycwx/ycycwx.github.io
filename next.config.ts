import createMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
    reactStrictMode: true,
};

export default createMDX({
    options: {
        remarkPlugins: [remarkGfm, remarkFrontmatter],
        rehypePlugins: [],
    },
})(nextConfig);
