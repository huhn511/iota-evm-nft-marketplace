module.exports = {
  reactStrictMode: true,
  basePath: '/iota-evm-nft-marketplace',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://assets.iotabots.io/:path*',
      },
    ]
  },
}
