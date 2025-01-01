import { epochToDateString } from "@/lib/epoch-to-datestring";
import { IFrontmatter } from "@/types/IFrontmatter";
import Link from "next/link";

const Title = ({ title }: { title: string }) => {
  return (
    <p className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl lg:leading-tight">
      {title}
    </p>
  );
};

const Description = ({ description }: { description: string }) => {
  return (
    <p className="text-xl font-normal tracking-tighter text-foreground md:text-2xl lg:text-2xl">
      {description}
    </p>
  );
};

const CreatedAt = ({ createdAt }: { createdAt: number }) => {
  return <p>{epochToDateString(createdAt)}</p>;
};

export default function PostCard({
  frontmatter,
}: {
  frontmatter: IFrontmatter;
}) {
  return (
    <Link
      href={`/post/${frontmatter.titleId}`}
      className="flex flex-col gap-y-1 hover:underline"
    >
      <Title title={frontmatter.title} />
      <div className="flex flex-col gap-y-0.5">
        <Description description={frontmatter.description} />
        <CreatedAt createdAt={frontmatter.createdAt} />
      </div>
    </Link>
  );
}
