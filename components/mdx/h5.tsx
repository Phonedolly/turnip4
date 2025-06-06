export default function H5({ children }: { children: React.ReactNode }) {
  return (
    <h5 className="mt-5 text-base sm:text-lg lg:text-xl font-semibold text-black dark:text-white">
      {children}
    </h5>
  );
} 