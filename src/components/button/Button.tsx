import Link from "next/link";

interface ButtonProps {
  className?: string;
  href?: string;
  block?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  className = "",
  href = "",
  children,
  block,
}) => {
  const computedClassNames = `
    ${block ? "block" : "inline-flex"} 
    items-center 
    px-4 
    py-2 
    mr-2 
    mb-2
    bg-blue-500 
    hover:bg-blue-300 
    text-white 
    rounded-md
    ${className}
    `;
  return (
    <Link href={href} className={computedClassNames}>
      <h2 className="text-xl">{children}</h2>
    </Link>
  );
};
