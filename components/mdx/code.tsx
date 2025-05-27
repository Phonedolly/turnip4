import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as theme } from "react-syntax-highlighter/dist/esm/styles/prism";

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
  const match = /language-(\w+)/
    .exec(className || "")
    ?.map((m) => m.trim().toLowerCase());
  if (match) {
    return (
      <SyntaxHighlighter
        PreTag="div"
        language={language ?? match[1]}
        style={theme}
        codeTagProps={{
          className: "font-geist-mono text-sm sm:text-sm",
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
    <code className="font-geist-mono rounded-md bg-bone-200 px-1.5 py-0.5 font-[470] tracking-[-0.028em] text-foreground hover:bg-bone-100 dark:bg-bone-800">
      {children}
    </code>
  );
}
