import * as React from "react";

// --- Auxiliary Types (Shared across components) ---

/** Theme-aware color object */
export type ThemeColor = { light: string; dark: string };

/** Padding object for precise spacing control */
export type Padding = { top?: number; right?: number; bottom?: number; left?: number };

/** Configuration for status header */
export type WidgetStatus = {
  label: string;
  color?: string;
};

/** Declarative action configuration */
export type ActionConfig = { 
  type: string; 
  [key: string]: any 
};

// --- Card Component Type Definition ---

export type CardProps = {
  children: React.ReactNode;
  asForm?: boolean;
  background?: string | ThemeColor;
  size?: "sm" | "md" | "lg" | "full";
  padding?: number | string | Padding;
  status?: WidgetStatus;
  collapsed?: boolean;
  confirm?: {
    label: string;
    action: ActionConfig;
  };
  cancel?: {
    label: string;
    action: ActionConfig;
  };
  theme?: "light" | "dark";
  className?: string;
  style?: React.CSSProperties;
};
