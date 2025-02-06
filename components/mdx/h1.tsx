export default function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mt-8 sm:mt-7 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground dark:text-white">
      {children}
    </h1>
  );
} 