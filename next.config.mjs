import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm';


/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
        remarkPlugins: [remarkGfm],
    },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig);

// export default nextConfig;
