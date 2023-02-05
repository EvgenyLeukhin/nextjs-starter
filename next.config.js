/** @type {import('next').NextConfig} */

const CompressionPlugin = require('compression-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '/';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

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

  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: 'imgix',
    path: 'the "domain" of your Imigix source',
  },
});

module.exports = nextConfig;
