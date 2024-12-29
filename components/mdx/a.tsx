export default function A({ children, href }: { children: React.ReactNode; href?: string }) {
  return (
    <a 
      href={href} 
      className="text-primary hover:underline decoration-2 underline-offset-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
} 