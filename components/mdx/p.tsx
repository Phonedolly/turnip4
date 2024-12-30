export default function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-0 text-base leading-relaxed text-foreground sm:text-lg md:mt-0 lg:mt-2">
      {children}
    </p>
  );
}
