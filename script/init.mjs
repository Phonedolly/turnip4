import fs from "fs";
import path from "path";

/**
 * @description initialize mdx file with frontmatter
 * @example
 * ```bash
 * npm run init-post [post-id]
 * ```
 */
const init = async () => {
  if (process.argv.length !== 3) {
    throw new Error("Please provide a target path");
  }

  const postId = process.argv[2];
  const targetDir = path.resolve(process.cwd(), `posts/${postId}`);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const targetMdxPath = path.resolve(targetDir, `${postId}.mdx`);

  const DEFAULT_FRONTMATTER = `---
title: 
description: 
tags:
  - 
categories:
  - 
titleId: ${postId}
readingTime: 0
createdAt: ${Date.now()}
updatedAt:
  - ${Date.now()}
---
`;

  fs.writeFileSync(targetMdxPath, DEFAULT_FRONTMATTER);
};

init().catch(console.error);
