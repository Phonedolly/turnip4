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
  const postId = (await params).postId;
  const page = await import(`@/posts/${postId}/${postId}.mdx`);
  const { default: Post, frontmatter } = page;

  return (
    <PostContainer frontmatter={frontmatter}>
      <Post />
    </PostContainer>
  );
}

export async function generateStaticParams() {
  const posts = await fs.readdir(path.join(process.cwd(), "posts"));
  return posts
    .filter((post) => !post.includes(".obsidian"))
    .map((post) => ({
      postId: post.replace(/\.mdx$/, ""),
    }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PostPageProps) {
  const postId = (await params).postId;
  const { frontmatter } = await import(`@/posts/${postId}/${postId}.mdx`);
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  } as Metadata;
}
