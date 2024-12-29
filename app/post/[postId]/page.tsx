import * as fs from "fs/promises";
import * as path from "path";

interface PostPageProps {
  params: Promise<{
    postId: string;
  }>;
}

export default async function Page({ params }: PostPageProps) {
  const postId = (await params).postId;

  const { default: Post } = await import(`@/posts/${postId}.mdx`);

  return <Post />;
}

export async function generateStaticParams() {
  const posts = await fs.readdir(path.join(process.cwd(), "posts"));
  return posts.map((post) => ({
    postId: post.replace(/\.mdx$/, ""),
  }));
}

export const dynamicParams = false;
