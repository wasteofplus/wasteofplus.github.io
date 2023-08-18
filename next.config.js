/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  experimental: {
    mdxRs: true,
  },
  images: { unoptimized: true },

};

// module.exports = nextConfig

// /** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
  providerImportSource: "@mdx-js/react",
});
module.exports = withMDX(nextConfig);
