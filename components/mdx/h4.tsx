export default function H4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mt-5 sm:mt-4 text-lg sm:text-xl lg:text-2xl font-semibold text-black dark:text-white">
      {children}
    </h4>
  );
} 