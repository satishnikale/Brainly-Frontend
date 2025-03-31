import { ReactElement } from "react";

export interface ButtonProps {
  varient: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const buttonVarientsStyles = {
  primary: "bg-indigo-200 text-indigo-600",
  secondary: "bg-indigo-600 text-white",
  
};
const buttonSizeStyle = {
  sm: "py-1 px-2",
  md: "py-2 px-3",
  lg: "py-3 px-4",
};
const defaultStyles = "rounded-md flex cursor-pointer flex justify-center items-center";

export const Button = ({varient, size,  text, startIcon, onClick, fullWidth, loading }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${buttonVarientsStyles[varient]} ${defaultStyles} ${
        buttonSizeStyle[size]
      } ${fullWidth ? "w-full" : "" } ${loading ? "opacity-45 " : ""}`}
    >
     {startIcon ? <div className="pr-2">{startIcon}</div> : null } {text}
    </button>
  );
};
