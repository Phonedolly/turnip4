export default function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground">
      {children}
    </p>
  );
} 