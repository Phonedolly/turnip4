import { Children } from "react";

export default function P({ children }: { children: React.ReactNode }) {
  /* if it contains only one child AND it's not a text node, it may be block element */
  const isBlock =
    Children.toArray(children).length === 1 && typeof children !== "string";

  if (isBlock) {
    return (
      <div className="mt-2 text-base leading-relaxed text-foreground md:leading-loose">
        {children}
      </div>
    );
  }
  return (
    <p className="mt-2 text-base leading-loose text-foreground">{children}</p>
  );
}
