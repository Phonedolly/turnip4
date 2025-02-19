import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

/**
 * @description write or update the createdAt of mdx file to posts directory. if
 * createdAt is already exists, it will be overwritten. All of updatedAts will
 * be cleared to current timestamp (equal to (new) createdAt)
 * @example
 * ```bash
 * npm run publish [post-id]
 * ```
 */
const publish = async () => {
  if (process.argv.length !== 3) {
    throw new Error("Please provide a target path");
  }

  const postId = process.argv[2];

  const targetMdxPath = path.resolve(process.cwd(), `posts/${postId}/${postId}.mdx`);
  const fileContent = fs.readFileSync(targetMdxPath, "utf-8");
  const { content, data: frontmatter } = matter(fileContent);

  const time = readingTime(content);
  frontmatter.readingTime = time.minutes;

  const now = Date.now();
  frontmatter.createdAt = now;
  frontmatter.updatedAt = [now];

  const updatedContent = matter.stringify(content, frontmatter);
  fs.writeFileSync(targetMdxPath, updatedContent);
};

publish().catch(console.error);
