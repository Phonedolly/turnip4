"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Code(props: {
  children: React.ReactNode;
  className?: string;
  wrapLines?: boolean;
  showLineNumbers?: boolean;
  wrapLongLines?: boolean;
  language?: string;
}) {
  const {
    children,
    className,
    wrapLines,
    showLineNumbers,
    wrapLongLines,
    language,
  } = props;
  const match = /language-(\w+)/.exec(className || "");

  if (match) {
    return (
      <SyntaxHighlighter
        PreTag="div"
        language={language || match[1]}
        style={gruvboxDark}
        codeTagProps={{
          className: "font-geist-mono text-sm sm:text-base",
        }}
        wrapLines={wrapLines ?? true}
        showLineNumbers={showLineNumbers ?? false}
        wrapLongLines={wrapLongLines ?? true}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    );
  }

  return (
    <code className="rounded-md bg-bone-200 px-1.5 py-0.5 font-geist-mono text-sm text-foreground sm:text-base dark:bg-bone-800">
      {children}
    </code>
  );
}
