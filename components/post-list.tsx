import { globby } from "globby";

import { IFrontmatter } from "@/types/IFrontmatter";

import PostCard from "./post-card";

export default async function PostList() {
  const postFiles = await globby("posts/**/*.mdx");
  const postMdxNames = postFiles.map((post) => post.split("/")[1]);
  const posts = (
    await Promise.all(
      postMdxNames.map(async (postId) => {
        const page = await import(`@/posts/${postId}/${postId}.mdx`);
        const { frontmatter: _frontmatter } = page;
        const frontmatter = _frontmatter as IFrontmatter;
        return {
          post: postId,
          frontmatter,
        };
      }),
    )
  )
    .filter(
      (post) => post.frontmatter !== null && post.frontmatter !== undefined,
    )
    .sort((a, b) => {
      return b.frontmatter.createdAt - a.frontmatter.createdAt;
    });

  return (
    <div className="flex w-full flex-col gap-y-8">
      {posts.map((post) => (
        <PostCard key={post.post} frontmatter={post.frontmatter} />
      ))}
    </div>
  );
}
