import { globby } from "globby";


import PostCard from "./post-card";

const AlertCard = () => (
  <div className="flex h-16 w-full flex-row items-center bg-red-300/20 justify-center">
    <p className="text-center text-foreground text-sm font-medium text-neutral-600">
      블로그를 마이그레이션했습니다. 일부 포스트에서 내용 오류가 있을 수
      있습니다.
    </p>
  </div>
);

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
      <AlertCard />
      {posts.map((post) => (
        <PostCard key={post.post} frontmatter={post.frontmatter} />
      ))}
    </div>
  );
}
