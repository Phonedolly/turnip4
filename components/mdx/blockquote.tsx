"use client";

import { cloneElement, isValidElement, ReactElement } from "react";

interface ChildProps {
  key?: string;
  parentComponent?: string;
}

export default function Blockquote({
  children,
}: {
  children: React.ReactNode;
}) {
  // Clone children and add parent information
  const childrenWithProps = Array.isArray(children)
    ? children.map((child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement<ChildProps>, {
            key: child.key || `blockquote-child-${index}`,
            parentComponent: "blockquote",
          });
        }
        return child;
      })
    : isValidElement(children)
      ? cloneElement(children as ReactElement<ChildProps>, {
          key: children.key || "blockquote-child",
          parentComponent: "blockquote",
        })
      : children;

  return (
    <blockquote className="mt-2 bg-bone-300 px-3 py-3 italic text-bone-900">
      {childrenWithProps}
    </blockquote>
  );
}
