import { Children } from "react";

export default function P({ children }: { children: React.ReactNode }) {
  /* if it contains only one child, it may be block element */
  const isBlock = Children.toArray(children).length === 1;

  if (isBlock) {
    return (
      <div className="mt-2 text-base leading-normal text-foreground md:mt-0 md:leading-loose lg:mt-1">
        {children}
      </div>
    );
  }
  return (
    <p className="mt-0 text-base leading-relaxed text-foreground md:mt-0 lg:mt-2">
      {children}
    </p>
  );
}
