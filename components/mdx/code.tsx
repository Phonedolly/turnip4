export default function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 rounded-md bg-bone-200 dark:bg-bone-800 font-geist-mono text-sm sm:text-base">
      {children}
    </code>
  );
} 