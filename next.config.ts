import type { NextConfig } from "next";
import rehypeKatex from "rehype-katex";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { visit } from "unist-util-visit";

import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
    rehypePlugins: [
      [rehypeKatex, { strict: true, throwOnError: true }],
      () => (tree) => {
        let postId = "";
        visit(tree, "root", (node) => {
          visit(node, "mdxjsEsm", (node) => {
            const estree = node.data.estree.body.at(0);
            if (!estree) {
              return;
            }
            visit(estree, "ExportNamedDeclaration", (node) => {
              const variableDeclarator = node.declaration.declarations.at(0);
              if (!variableDeclarator) {
                return;
              }
              const objectExpression = variableDeclarator.init.properties;
              for (const property of objectExpression) {
                if (property.key.value === "titleId") {
                  postId = property.value.value;
                }
              }
            });
          });
        });

        visit(tree, "element", (node) => {
          if (node.tagName === "img") {
            const src = node.properties.src.replace(/^\.\//, "");
            const newSrc = `/posts/${postId}/${src}`;
            node.properties.src = newSrc;
          }
        });
        return tree;
      },
    ],
  },
});

export default withMDX(nextConfig);
