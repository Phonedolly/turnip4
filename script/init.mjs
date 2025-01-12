import fs from "fs";
import path from "path";

const DEFAULT_FRONTMATTER = `---
title: 
description: 
tags:
  - 
categories:
  - 
titleId: 
readingTime: 0
createdAt: ${Date.now()}
updatedAt:
  - ${Date.now()}
---
`;

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

  const frontmatter = DEFAULT_FRONTMATTER;

  fs.writeFileSync(targetMdxPath, frontmatter + "\n\n");
};

init().catch(console.error);
