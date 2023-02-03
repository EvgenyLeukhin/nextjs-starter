/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    // includePaths: ["./styles"],
    prependData: `@import "styles/custom/variables.scss";`,
  },
}

module.exports = nextConfig
