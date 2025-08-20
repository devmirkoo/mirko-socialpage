/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    basePath: '',
    reactStrictMode: true,
    swcMinify: true,
    poweredByHeader: false,
    
    images: {
        unoptimized: true
    },

    // Compiler optimizations
    compiler: {
        removeConsole: isProd,
    }
};

export default nextConfig;
