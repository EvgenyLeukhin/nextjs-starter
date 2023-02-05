/** @type {import('next').NextConfig} */

const CompressionPlugin = require('compression-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const repo = 'nextjs-starter';
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = withBundleAnalyzer({
  images: {
    unoptimized: true,
    loader: 'imgix',
    path: 'public',
  },
  reactStrictMode: true,
  sassOptions: {
    // includePaths: ["./styles"],
    prependData: '@import "styles/custom/variables.scss";',
  },
  webpack: config => {
    config.plugins.push(new CompressionPlugin());
    return config;
  },

  assetPrefix: assetPrefix,
  basePath: basePath,
});

module.exports = nextConfig;
