/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {       // if you want to use an image from a remote URL, you have to add it to remotePatterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/400x600/png',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/20x20/png',
      },
    ],
  },
}


module.exports = nextConfig
