export default function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-4 list-disc list-inside space-y-2 text-secondary">
      {children}
    </ul>
  );
} 