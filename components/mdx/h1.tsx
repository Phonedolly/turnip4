export default function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mt-6 sm:mt-8 text-3xl sm:text-4xl lg:text-5xl font-semibold text-black dark:text-white">
      {children}
    </h1>
  );
} 