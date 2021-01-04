const withPlugins = require("next-compose-plugins")

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
})

module.exports = {
  target: "serverless",
  reactStrictMode: true,
  webpack: config => ({
    ...config,
    externals: [...config.externals, "sharp"]
  }),
  experimental: {
    optimizeFonts: true,
    modern: true
  }
}
