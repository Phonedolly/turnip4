export default function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-7 sm:mt-6 text-2xl sm:text-2xl lg:text-3xl font-bold text-black dark:text-white">
      {children}
    </h2>
  );
} 