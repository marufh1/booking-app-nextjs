const withPWA = require('next-pwa')({
  dest: 'public',
})

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    register: true,
    skipWaiting: true,
    disable:process.env.NODE_ENV === 'development'
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com'
    ],
  }
});
