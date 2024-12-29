export default function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-6 sm:mt-8 text-2xl sm:text-3xl lg:text-4xl font-semibold text-black dark:text-white">
      {children}
    </h2>
  );
} 