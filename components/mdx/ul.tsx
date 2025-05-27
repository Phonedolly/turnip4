export default function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-2 list-disc list-inside space-y-2 text-foreground">
      {children}
    </ul>
  );
}
