export default function A({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="tracking-tight text-foreground text-primary underline underline-offset-[2px] hover:decoration-2 hover:underline-offset-[2px]"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
