import * as fs from "fs/promises";
import * as path from "path";

import Container from "./container";

interface PostPageProps {
  params: Promise<{
    postId: string;
  }>;
}

export default async function Page({ params }: PostPageProps) {
  const postId = (await params).postId;
  const page = await import(`@/posts/${postId}.mdx`);
  const { default: Post, frontmatter } = page;

  return (
    <Container frontmatter={frontmatter}>
      <Post />
    </Container>
  );
}

export async function generateStaticParams() {
  const posts = await fs.readdir(path.join(process.cwd(), "posts"));
  return posts.map((post) => ({
    postId: post.replace(/\.mdx$/, ""),
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PostPageProps) {
  const postId = (await params).postId;
  const { frontmatter } = await import(`@/posts/${postId}.mdx`);
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}
