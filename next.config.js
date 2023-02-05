/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  sassOptions: {
    // includePaths: ["./styles"],
    prependData: '@import "styles/custom/variables.scss";'
  },
});

module.exports = nextConfig;
