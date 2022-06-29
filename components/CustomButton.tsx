import React from "react";

type CustomButtonProps = {
  label: string;
  fill: boolean;
  href: string;
  className?: string;
};

const CustomButton = ({ label, fill, href, className }: CustomButtonProps) => {
  return (
    <a
      href={href}
      className={`w-full py-3 ${
        fill
          ? "bg-black hover:bg-transparent text-white hover:text-black"
          : "bg-transparent hover:bg-black text-black hover:text-white"
      } ${className} rounded-md font-semibold border border-black transition-colors text-center`}
    >
      {label}
    </a>
  );
};

export default CustomButton;
