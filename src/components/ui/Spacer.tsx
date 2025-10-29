import * as React from "react";
import type { SpacerProps } from "@/types/ui";

export const Spacer: React.FC<SpacerProps> = ({ minSize = "auto" }) => {
  const style: React.CSSProperties = {
    flex: "1 1 auto",
    minWidth: typeof minSize === 'number' ? `${minSize}px` : minSize,
    minHeight: typeof minSize === 'number' ? `${minSize}px` : minSize,
  };
  return <div style={style} />;
};
Spacer.displayName = "Spacer";
