import * as React from "react";
import type { ThemeColor, Padding, ActionConfig } from "./card";

// --- UI Components Type Definitions ---

export type FormProps = BoxProps & {
  onSubmitAction?: ActionConfig;
};

export type SpacerProps = {
  minSize?: number | string;
};

export type DividerProps = {
  color?: string | ThemeColor;
  size?: number | string;
  spacing?: number | string;
  flush?: boolean;
  className?: string;
};

export type TransitionProps = {
  children: React.ReactNode;
};

export type TextProps = {
  value: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  color?: "primary" | "secondary" | "tertiary" | string;
  italic?: boolean;
  className?: string;
  width?: number;
};

export type TitleProps = {
  value: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  color?: "primary" | "secondary" | string;
  className?: string;
};

export type CaptionProps = {
  value: string;
  size?: "xs" | "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "tertiary" | string;
  weight?: "normal" | "medium" | "semibold" | "bold";
  className?: string;
};
