import { Children } from "react";

export default function P({ children }: { children: React.ReactNode }) {

  if (isBlock) {
    return (
      <div className="mt-2 text-lg leading-relaxed text-foreground md:mt-0 md:leading-10 lg:mt-1">
        {children}
      </div>
    );
  }
  return (
    <p className="mt-0 text-lg leading-relaxed text-foreground md:mt-0 lg:mt-2">
      {children}
    </p>
  );
}
