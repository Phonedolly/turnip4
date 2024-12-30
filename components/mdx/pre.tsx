export default function Pre({ children }: { children: React.ReactNode }) {
  return (
    <pre className="rounded-lg bg-transparent overflow-x-auto">
      {children}
    </pre>
  );
} 