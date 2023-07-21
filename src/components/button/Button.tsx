import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ href = "", children }) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center px-4 py-2 mr-2 bg-blue-500 hover:bg-blue-300 text-white text-sm rounded-md"
    >
      <h2 className="text-xl">{children}</h2>
    </Link>
  );
};
