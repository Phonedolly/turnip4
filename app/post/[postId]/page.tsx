import * as fs from "fs/promises";
import * as path from "path";

import PostContainer from "./post-container";
import { Metadata } from "next";

interface PostPageProps {
  params: Promise<{
    postId: string;
  }>;
}

export default async function Page({ params }: PostPageProps) {
  const postId = decodeURIComponent((await params).postId);
  const page = await import(`@/posts/${postId}/${postId}.mdx`);
  const { default: Post, frontmatter } = page;

  return (
    <PostContainer frontmatter={frontmatter}>
      <Post />
    </PostContainer>
  );
}

// Function to recursively find all post IDs
async function getAllPostIds(dir: string, basePath: string = ""): Promise<string[]> {
  const items = await fs.readdir(dir, { withFileTypes: true });
  const postIds: string[] = [];

  for (const item of items) {
    if (item.name.startsWith('.') || item.name === '.obsidian') {
      continue;
    }

    const fullPath = path.join(dir, item.name);
    
    if (item.isDirectory()) {
      // Recursively explore directories
      const subPostIds = await getAllPostIds(fullPath, path.join(basePath, item.name));
      postIds.push(...subPostIds);
    } else if (item.name.endsWith('.mdx')) {
      // For .mdx files, use only basePath (exclude filename)
      postIds.push(basePath);
    }
  }

  return postIds;
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "posts");
  const postIds = await getAllPostIds(postsDir);
  
  return postIds
    .filter(postId => postId !== '') // Remove empty strings
    .map((postId) => ({
      postId: postId.replace(/\\/g, '/'), // Convert Windows path separators to Unix style
    }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PostPageProps) {
  const postId = decodeURIComponent((await params).postId);
  const { frontmatter } = await import(`@/posts/${postId}/${postId}.mdx`);
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  } as Metadata;
}
