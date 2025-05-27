import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
    unoptimized: true,
    },
    basePath: '/steptimer',
    // assetPrefix: '/steptimer',
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
    webpack(config) {
    config.module.rules.push({
        test: /\.mdx?$/,
        use: [
        {
            loader: 'babel-loader',
        },
        {
            loader: '@mdx-js/loader',
            options: {
            remarkPlugins: [remarkGfm],
            },
        },
        ],
    });
    return config;
    },
};

export default nextConfig;
