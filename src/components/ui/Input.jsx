import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import { INPUT_CLASS } from "@/lib/styles";

export const Input = forwardRef(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cn(INPUT_CLASS, className)}
      {...props}
    />
  );
});
