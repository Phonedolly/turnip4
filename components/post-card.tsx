import { epochToDateString } from "@/lib/epoch-to-datestring";
import { IFrontmatter } from "@/types/IFrontmatter";
import Link from "next/link";

const Title = ({ title }: { title: string }) => {
  return (
    <p className="text-xl group-hover:text-primary font-bold tracking-tight text-foreground lg:text-2xl lg:leading-tight">
      {title}
    </p>
  );
};

const Description = ({ description }: { description: string }) => {
  return (
    <p className="group-hover:text-primary text-base font-normal tracking-tight text-foreground md:text-lg lg:text-lg">
      {description}
    </p>
  );
};

const CreatedAt = ({ createdAt }: { createdAt: number }) => {
  return (
    <p className="text-sm group-hover:text-primary text-foreground">
      {epochToDateString(createdAt)}
    </p>
  );
};

export default function PostCard({
  frontmatter,
}: {
  frontmatter: IFrontmatter;
}) {
  return (
    <Link
      href={`/post/${frontmatter.titleId}`}
      className="group flex flex-col gap-y-1"
    >
      <Title title={frontmatter.title} />
      <div className="flex flex-col">
        <Description description={frontmatter.description} />
        <CreatedAt createdAt={frontmatter.createdAt} />
      </div>
    </Link>
  );
}
