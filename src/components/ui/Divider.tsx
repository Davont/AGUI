import * as React from "react";
import { cn } from "@/lib/utils";
import type { DividerProps } from "@/types/ui";

export const Divider: React.FC<DividerProps> = ({ color, size = 1, spacing, flush, className }) => {
  const computedStyle: React.CSSProperties = {
    height: typeof size === 'number' ? `${size}px` : size,
    backgroundColor: typeof color === 'string' ? color : undefined,
    marginTop: spacing ? (typeof spacing === 'number' ? `${spacing * 0.25}rem` : spacing) : undefined,
    marginBottom: spacing ? (typeof spacing === 'number' ? `${spacing * 0.25}rem` : spacing) : undefined,
  };

  return <div className={cn("w-full bg-border", flush ? "my-0" : "my-4", className)} style={computedStyle} />;
};
Divider.displayName = "Divider";
