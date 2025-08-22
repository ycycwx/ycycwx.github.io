import createMDX from '@next/mdx';
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
    reactStrictMode: true,
};

export default createMDX({
    options: {
        remarkPlugins: ['remark-gfm', 'remark-frontmatter'],
        rehypePlugins: [],
    },
})(nextConfig);
