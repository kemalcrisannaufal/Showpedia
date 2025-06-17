import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface Proptypes {
  children: ReactNode;
  classname?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = (props: Proptypes) => {
  const { children, classname, onClick = () => {}, type = "button" } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "bg-red-600 hover:bg-red-500 px-3 py-2 rounded-md text-white transition-colors duration-300 ease-in-out cursor-pointer",
        classname
      )}
    >
      {children}
    </button>
  );
};

export default Button;
