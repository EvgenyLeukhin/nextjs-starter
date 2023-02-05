/** @type {import('next').NextConfig} */

const CompressionPlugin = require('compression-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  sassOptions: {
    // includePaths: ["./styles"],
    prependData: '@import "styles/custom/variables.scss";',
  },
  webpack: config => {
    config.plugins.push(new CompressionPlugin());
    return config;
  },
});

module.exports = nextConfig;
