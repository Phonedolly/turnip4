import { PostMetadata } from "@/types/post-metadata";

type ContainerProps = {
  children: React.ReactNode;
  frontmatter: Promise<PostMetadata>;
};

type UpdateDateProps = {
  createdAt: EpochTimeStamp;
  updatedAt: EpochTimeStamp;
};

const Title = ({ title }: { title: string }) => {
  return (
    <h1 className="py-0.5 font-geist text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
      {title}
    </h1>
  );
};

const Description = ({ description }: { description: string }) => {
  return (
    <p className="font-geist text-xl font-normal tracking-tighter text-foreground md:text-2xl lg:text-2xl">
      {description}
    </p>
  );
};

const UpdateDate = ({ createdAt, updatedAt }: UpdateDateProps) => {
  const createdDate = new Date(createdAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const updatedDate = new Date(updatedAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="flex flex-col py-0.5 md:py-1">
      <p className="font-geist text-sm font-normal tracking-tight text-foreground sm:text-base">
        {createdDate}에 작성
      </p>
      <div className="flex w-fit flex-col">
        <p className="font-geist text-sm font-normal tracking-tight text-foreground sm:text-base">
          {updatedDate}에 업데이트
        </p>
        <Divider />
      </div>
    </div>
  );
};

const Divider = () => {
  return <div className="relative bottom-px h-px w-full bg-foreground"></div>;
};

const Info = ({ frontmatter }: { frontmatter: PostMetadata }) => {
  const { description, createdAt, updatedAt } = frontmatter;

  return (
    <div className="flex flex-col py-0.5 md:gap-y-0.5 md:py-1">
      <Description description={description} />
      <UpdateDate createdAt={createdAt} updatedAt={updatedAt} />
    </div>
  );
};

export default async function Container({
  children,
  frontmatter,
}: ContainerProps) {
  const { title } = await frontmatter;

  return (
    <div className="relative flex w-full flex-col gap-y-0 py-1 md:gap-y-1.5">
      <div className="flex flex-col gap-y-0 md:gap-y-0.5">
        <Title title={title} />
        <Info frontmatter={await frontmatter} />
      </div>
      {children}
    </div>
  );
}
