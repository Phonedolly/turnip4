"use client";

import { Children } from "react";

interface PProps {
  children: React.ReactNode;
  parentComponent?: string;
}

export default function P({ children, parentComponent }: PProps) {
  /* if it contains only one child AND it's not a text node, it may be block element */
  const isBlock =
    Children.toArray(children).length === 1 && typeof children !== "string";

  // If parent is blockquote, always treat as block
  if (parentComponent === "blockquote") {
    return <>{children}</>;
  } else if (isBlock) {
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
