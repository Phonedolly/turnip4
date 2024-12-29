import type { NextConfig } from "next";
// import rehypeKatex from "rehype-katex";
// import remarkGfm from "remark-gfm";

import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    // remarkPlugins: [remarkGfm],
    // rehypePlugins: [[rehypeKatex, { strict: true, throwOnError: true }]],
  },
});

export default withMDX(nextConfig);
