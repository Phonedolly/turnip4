import Link from "next/link";

const Stardue128Identity = () => {
  return (
    <Link href="/" className="group relative flex w-fit flex-col">
      <h1 className="select-none font-roboto text-3xl font-black tracking-tight text-foreground hover:text-primary sm:text-4xl">
        stardue128
      </h1>
      {/* <div className="group-hover:bg-foreground w-full h-0.5 absolute -bottom-px ml-[2px]"></div> */}
    </Link>
  );
};

const MenuItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="text-sm font-semibold tracking-tight text-foreground hover:text-primary sm:text-base"
    >
      {children}
    </Link>
  );
};

const Menu = () => {
  return (
    <div className="flex w-full flex-row items-end justify-end space-x-2 sm:space-x-3 md:space-x-4">
      <MenuItem href="/">처음</MenuItem>
      <MenuItem href="/all-posts">모두 보기</MenuItem>
    </div>
  );
};

export default function Header() {
  return (
    <header className="flex w-full flex-row justify-between border-b-[1.5px] border-foreground py-0.5 md:py-0.5">
      <Stardue128Identity />
      <Menu />
    </header>
  );
}
