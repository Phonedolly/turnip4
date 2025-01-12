import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
/**
 * @description append current timestamp to updatedAt array of frontmatter. argument is target mdx file path
 * @example
 * ```bash
 * npm run update-post [post-id]
 * ```
 */
const update = async () => {
  if (process.argv.length !== 3) {
    throw new Error("Please provide a target path");
  }

  const postId = process.argv[2];

  const targetMdxPath = path.resolve(
    process.cwd(),
    `posts/${postId}/${postId}.mdx`,
  );
  const fileContent = fs.readFileSync(targetMdxPath, "utf-8");
  const { content, data: frontmatter } = matter(fileContent);

  const time = readingTime(content);
  frontmatter.readingTime = time.minutes;

  frontmatter.updatedAt.push(Date.now());

  const updatedContent = matter.stringify(content, frontmatter);

  fs.writeFileSync(targetMdxPath, updatedContent);
};

update().catch(console.error);
