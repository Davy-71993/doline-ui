import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonStyles = cva(
  [
    "rounded-md",
    "w-full",
    "py-0",
    "my-0",
    "transition-colors",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "flex",
    "justify-center",
    "items-center",
  ],
  {
    variants: {
      variant: {
        defualt: "bg-slate-800 text-slate-200 hover:bg-slate-700 duration-300",
        outline:
          "bg-transparent border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-slate-200",
        primary: "bg-blue-800 hover:bg-blue-700 text-slate-200",
      },
      size: {
        sm: "px-3 text-sm h-8 ",
        md: "px-4 h-10 text-base",
        lg: "px-5 h-12 text-lg",
        xl: "px-5 h-14 text-xl",
      },
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

export default function Button({
  className,
  variant,
  children,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(buttonStyles({ variant, size, className }))}
    >
      {children}
    </button>
  );
}
