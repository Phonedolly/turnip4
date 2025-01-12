export default function OL({ children }: { children: React.ReactNode }) {
  return (
    <ol className="mt-4 list-decimal list-inside space-y-2 text-foreground">
      {children}
    </ol>
  );
} 