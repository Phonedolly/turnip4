import { epochToDateString } from "@/lib/epoch-to-datestring";
import { IFrontmatter } from "@/types/IFrontmatter";

type ContainerProps = {
  children: React.ReactNode;
  frontmatter: Promise<IFrontmatter>;
};

type UpdateDateProps = {
  createdAt: EpochTimeStamp;
  updatedAt: EpochTimeStamp;
};

const Title = ({ title }: { title: string }) => {
  return (
    <h1 className="py-0.5 text-3xl font-bold text-foreground lg:text-4xl">
      {title}
    </h1>
  );
};

const Description = ({ description }: { description: string }) => {
  return (
    <p className="text-lg font-normal text-foreground md:text-lg">
      {description}
    </p>
  );
};

const UpdateDate = ({ createdAt, updatedAt }: UpdateDateProps) => {
  const createdDate = epochToDateString(createdAt);
  const updatedDate = epochToDateString(updatedAt);

  return (
    <div className="flex w-1/2 max-w-fit flex-col border-b border-foreground">
      <p className="text-sm font-normal tracking-tight text-foreground sm:text-base">
        {createdDate}에 작성
      </p>
      <div className="flex w-fit flex-col">
        <p className="text-sm font-normal tracking-tight text-foreground sm:text-base">
          {updatedDate}에 업데이트
        </p>
        {/* <Divider /> */}
      </div>
    </div>
  );
};

const Info = ({ frontmatter }: { frontmatter: IFrontmatter }) => {
  const { description, createdAt, updatedAt } = frontmatter;

  return (
    <div className="flex flex-col md:gap-y-0.5">
      <Description description={description} />
      <UpdateDate
        createdAt={createdAt}
        updatedAt={updatedAt.at(-1) ?? createdAt}
      />
    </div>
  );
};

export default async function PostContainer({
  children,
  frontmatter,
}: ContainerProps) {
  const { title } = await frontmatter;

  return (
    <div className="relative flex w-full flex-col gap-y-2 md:gap-y-4 md:py-1 lg:gap-y-6">
      <div className="flex flex-col gap-y-0 md:gap-y-0.5">
        <Title title={title} />
        <Info frontmatter={await frontmatter} />
      </div>
      <div>{children}</div>
    </div>
  );
}
