import * as React from "react";
import type { ThemeColor, Padding } from "./card";

// --- Auxiliary Types for Layout ---

export type Alignment = "start" | "center" | "end" | "stretch";
export type Justification = "start" | "center" | "end" | "between" | "around";

export type Border = {
  size?: number | string;
  color?: string;
  style?: React.CSSProperties['borderStyle'];
};

export type Borders = {
  top?: Border;
  right?: Border;
  bottom?: Border;
  left?: Border;
};

// Inferred from spec: common properties for block-level elements
export type BlockProps = React.HTMLAttributes<HTMLDivElement> & {
  width?: number | string;
  height?: number | string;
  minHeight?: number | string;
  radius?: string;
};

// --- Core Widget Layout Primitives ---

export type BoxProps = BlockProps & {
  children?: React.ReactNode;
  direction?: "row" | "col";
  align?: Alignment;
  justify?: Justification;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  flex?: number | string;
  gap?: number | string;
  padding?: number | string | Padding;
  border?: number | Border | Borders;
  background?: string | ThemeColor;
};

export type RowProps = Omit<BoxProps, "direction">;

export type ColProps = Omit<BoxProps, "direction">;
