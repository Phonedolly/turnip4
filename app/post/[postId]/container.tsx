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
    <h1 className="text-3xl sm:text-3xl py-1 md:text-4xl lg:text-5xl font-bold tracking-tight font-geist text-foreground">
      {title}
    </h1>
  );
};

const Description = ({ description }: { description: string }) => {
  return (
    <p className="text-2xl md:text-2xl lg:text-2xl font-normal font-geist text-foreground tracking-tighter">
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
    <div className="flex flex-col md:py-0.5">
      <p className="text-base font-normal font-geist text-foreground tracking-tight">
        {createdDate}에 작성
      </p>
      <div className="w-fit flex flex-col">
        <p className="text-base font-normal font-geist text-foreground tracking-tight">
          {updatedDate}에 업데이트
        </p>
        <Divider />
      </div>
    </div>
  );
};

const Divider = () => {
  return <div className="relative bottom-px w-full h-px bg-foreground"></div>;
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
    <div className="relative w-full px-0.5 py-1.5 flex flex-col gap-y-0.5 md:gap-y-1.5">
      <div className="flex flex-col gap-y-0.5 md:gap-y-2">
        <Title title={title} />
        <Info frontmatter={await frontmatter} />
      </div>
      {children}
    </div>
  );
}
