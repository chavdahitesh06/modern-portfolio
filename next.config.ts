module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '', // Leave empty for default ports (80/443)
        pathname: '/**', // Allow all paths under this hostname
      },
    ],
  },
};
