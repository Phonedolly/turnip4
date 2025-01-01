export default function Pre({ children }: { children: React.ReactNode }) {
  return <pre className="overflow-x-auto bg-transparent mt-2">{children}</pre>;
}
