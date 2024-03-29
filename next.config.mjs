import createMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
    reactStrictMode: true,
    swcMinify: true,
};

export default createMDX({
    options: {
        remarkPlugins: [remarkGfm, remarkFrontmatter],
        rehypePlugins: [],
    },
})(nextConfig);
