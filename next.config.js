/** @type {import('next').NextConfig} */

var ApiURI = process.env.NEXT_PUBLIC_URL;
const CompressionPlugin = require('compression-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true, // double re-render when useEffect() only in dev-mode
  sassOptions: {
    // includePaths: ["./styles"],
    prependData: '@import "styles/custom/variables.scss";',
  },
  webpack: config => {
    config.plugins.push(new CompressionPlugin());
    return config;
  },
  images: {
    // formats: ["image/webp"],
    domains: [new URL(ApiURI).host, 'drive.google.com', 'logo.clearbit.com'], // uproved domains
  },
});

module.exports = nextConfig;
