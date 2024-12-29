export default function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-6 sm:mt-8 text-xl sm:text-2xl lg:text-3xl font-semibold text-black dark:text-white">
      {children}
    </h3>
  );
} 