export default function P({ children }: { children: React.ReactNode }) {
  /* check if children is actually a text node */
  if (typeof children === "string") {
    return (
      <p className="mt-0 text-base md:text-lg tracking-normal leading-relaxed text-foreground md:mt-0 md:leading-loose lg:mt-4">
        {children}
      </p>
    );
  }
  return (
    <div className="mt-2 text-base md:text-lg leading-relaxed tracking-normal text-foreground md:mt-0 md:leading-loose lg:mt-4">
      {children}
    </div>
  );
}
