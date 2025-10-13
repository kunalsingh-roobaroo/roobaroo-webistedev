import React from "react";
import { cn } from "@/utils/utils"; // Make sure your `cn` function is JS-compatible too

const Container = ({
  children,
  className,
  variant = "default",
  as: Component = "div",
}) => {
  const baseClasses = "mx-auto";

  const variantClasses = {
    default: "w-[90%]", // 5% gutter on each side
    narrow: "w-[95%]", // 2.5% gutter on each side  
    wide: "w-[85%]", // 7.5% gutter on each side
    none: "w-full",    // No gutters
  };

  return (
    <Component
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Container;
