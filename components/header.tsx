import Link from "next/link";

const Stardue128Identity = () => {
  return (
    <Link href="/" className="relative w-fit group flex flex-col">
      <h1 className="text-3xl sm:text-4xl font-normal font-geist tracking-tight text-foreground hover:text-primary select-none">
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
      className="text-foreground font-semibold tracking-tight text-base sm:text-lg hover:text-primary"
    >
      {children}
    </Link>
  );
};

const Menu = () => {
  return (
    <div className="w-full flex flex-row space-x-3 sm:space-x-4 md:space-x-6 justify-end items-end">
      <MenuItem href="/">처음</MenuItem>
      <MenuItem href="/all-posts">모두 보기</MenuItem>
    </div>
  );
};

export default function Header() {
  return (
    <header className="w-full py-0.5 md:py-0.5 flex flex-row justify-between border-b-[1.5px] border-foreground">
      <Stardue128Identity />
      <Menu />
    </header>
  );
}
