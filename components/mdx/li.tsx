export default function LI({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-base sm:text-lg leading-relaxed">
      {children}
    </li>
  );
} 