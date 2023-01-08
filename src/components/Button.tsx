import React, { ReactNode, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  version: "PRIMARY" | "SECONDARY";
  className?: string;
}

export function Button({
  children,
  className,
  version = "PRIMARY",
  ...props
}: IButtonProps) {
  return (
    <button
      className={clsx(
        "flex items-center justify-center gap-2 bg-pomodoro-400 rounded font-semibold text-white w-32 h-12 text-md transition-colors outline-none focus:ring-2 ring-gray-100 hover:bg-pomodoro-300 disabled:opacity-70 disabled:cursor-auto disabled:hover:bg-gray-900 disabled:bg-gray-900",
        {
          "hover:bg-complementary-300": version === "SECONDARY",
          "w-16 h-16 rounded-full bg-complementary-500 disabled:opacity-70 disabled:cursor-auto disabled:hover:bg-gray-900":
            version === "SECONDARY",
          "ring-complementary-300": version === "SECONDARY",
          "text-gray-900 disabled:text-gray-100": version === "SECONDARY",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
