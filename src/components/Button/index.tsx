import React from "react";

type Props = {
  type: "button" | "submit" | "reset";
  children?: any;
  className?: string;
  onClick?: () => void;
};

const Button = ({ type, children, className, onClick }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-auto px-3 py-2 border rounded-md cursor-pointer bg-black text-white border-black text-sm font-sans font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
