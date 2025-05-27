import { epochToDateString } from "@/lib/epoch-to-datestring";
import { IFrontmatter } from "@/types/IFrontmatter";
import Link from "next/link";

const Title = ({ title }: { title: string }) => {
  return (
    <h1 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary lg:text-2xl lg:leading-tight">
      {title}
    </h1>
  );
};

const Description = ({ description }: { description: string }) => {
  return (
    <p className="text-base font-normal tracking-tight text-foreground group-hover:text-primary md:text-lg lg:text-lg">
      {description}
    </p>
  );
};

const CreatedAt = ({ createdAt }: { createdAt: number }) => {
  return (
    <p className="text-sm text-foreground font-semibold group-hover:text-primary">
      {epochToDateString(createdAt)}
    </p>
  );
};

const ReadingTime = ({ readingTime }: { readingTime: number }) => {
  return (
    <p className="text-sm font-medium text-neutral-500">
      읽는 시간 {Math.floor(readingTime)}분
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
      className="group flex flex-col"
    >
      <Title title={frontmatter.title} />
      <div className="flex flex-col">
        <Description description={frontmatter.description} />
        <div className="flex flex-row gap-x-2">
          <CreatedAt createdAt={frontmatter.createdAt} />
          <ReadingTime readingTime={frontmatter.readingTime} />
        </div>
      </div>
    </Link>
  );
}
