import PostList from "@/components/post-list";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center gap-y-8 py-2">
      <PostList />
    </main>
  );
}
