import * as React from "react";
import { cn } from "@/lib/utils";
import type { BoxProps } from "@/types/layout";

export const Box: React.FC<BoxProps> = (props) => {
  const {
    className,
    direction = "col",
    align,
    justify,
    wrap,
    children,
    style,
    gap,
    padding,
    width,
    height,
    minHeight,
    radius,
    background,
    border,
    flex,
    ...rest
  } = props;

  // --- Style and Class Calculation ---

  const directionClass = direction === "row" ? "flex-row" : "flex-col";
  
  const alignMap = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  };

  const justifyMap = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
  };

  const wrapMap = {
    nowrap: "flex-nowrap",
    wrap: "flex-wrap",
    "wrap-reverse": "flex-wrap-reverse",
  };

  const getPaddingStyles = (): React.CSSProperties => {
    if (typeof padding === "number") return { padding: `${padding * 0.25}rem` };
    if (typeof padding === "string") return { padding };
    if (typeof padding === "object" && padding !== null) {
      return {
        paddingTop: padding.top ? `${padding.top * 0.25}rem` : undefined,
        paddingRight: padding.right ? `${padding.right * 0.25}rem` : undefined,
        paddingBottom: padding.bottom ? `${padding.bottom * 0.25}rem` : undefined,
        paddingLeft: padding.left ? `${padding.left * 0.25}rem` : undefined,
      };
    }
    return {};
  };

  const getBorderStyles = (): React.CSSProperties => {
    if (typeof border === 'number') {
      return { borderWidth: `${border}px` };
    }
    if (typeof border === 'object' && border !== null && ('size' in border || 'color' in border || 'style' in border)) {
      return {
        borderWidth: typeof border.size === 'number' ? `${border.size}px` : border.size,
        borderColor: border.color,
        borderStyle: border.style,
      };
    }
    // Note: Does not handle the complex `Borders` type for individual sides yet.
    return {};
  }

  const computedStyle: React.CSSProperties = {
    ...style,
    ...getPaddingStyles(),
    ...getBorderStyles(),
    gap: typeof gap === 'number' ? `${gap * 0.25}rem` : gap,
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    minHeight: typeof minHeight === 'number' ? `${minHeight}px` : minHeight,
    borderRadius: radius,
    backgroundColor: typeof background === 'string' ? background : undefined,
    flex: flex,
  };

  return (
    <div
      className={cn(
        "flex",
        directionClass,
        align && alignMap[align],
        justify && justifyMap[justify],
        wrap && wrapMap[wrap],
        className
      )}
      style={computedStyle}
      {...rest}
    >
      {children}
    </div>
  );
};
Box.displayName = "Box";
