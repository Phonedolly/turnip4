// import "./li.css";

export default function LI({ children }: { children: React.ReactNode }) {
  return (
    <li className="list-none text-base before:mr-2 before:content-['-']">
      {children}
    </li>
  );
}
