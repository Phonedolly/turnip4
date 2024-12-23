import Link from "next/link";

const Stardue128Identity = () => {
  return (
    <Link href="/" className="relative w-fit pr-2.5 group flex flex-col">
      <h1 className="text-4xl font-normal tracking-tight font-geist-mono text-santa-fe-900 select-none">
        stardue128
      </h1>
      <div className="group-hover:bg-santa-fe-900 w-full h-0.5 absolute bottom-0.5"></div>
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
    <Link href={href} className="text-santa-fe-700 font-normal text-base">
      {children}
    </Link>
  );
};

const Menu = () => {
  return (
    <div className="w-full flex flex-row space-x-4 justify-end">
      <MenuItem href="/">처음</MenuItem>
      <MenuItem href="/all-posts">모두 보기</MenuItem>
    </div>
  );
};

export default function Header() {
  return (
    <header className="w-full flex flex-row justify-between">
      <Stardue128Identity />
      <Menu />
    </header>
  );
}
