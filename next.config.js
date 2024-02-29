/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['media.graphassets.com'], // List of domains your images will be loaded from
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.graphassets.com',
            },
        ],
    },
};

module.exports = nextConfig
