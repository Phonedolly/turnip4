export default function Pre({ children }: { children: React.ReactNode }) {
  return (
    <pre className="mt-4 p-4 rounded-lg bg-bone-100 dark:bg-bone-900 overflow-x-auto">
      {children}
    </pre>
  );
} 