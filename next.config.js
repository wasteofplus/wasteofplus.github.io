/** @type {import('next').NextConfig} */
const remarkFrontmatter = import("remark-frontmatter");
const remarkMdxFrontmatter = import("remark-mdx-frontmatter");


const nextConfig = {
  swcMinify: true,
  output: "export",
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
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
  },
  providerImportSource: "@mdx-js/react",
});
module.exports = withMDX(nextConfig);
