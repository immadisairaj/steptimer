import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkGfm],
    },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    basePath: '/step-timer',
    assetPrefix: '/step-timer',
};

export default withMDX(nextConfig);
