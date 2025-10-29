import * as React from "react";
import { Box } from "./Box";
import type { RowProps } from "@/types/layout";

/**
 * A horizontal layout container, based on Box.
 * Equivalent to `<Box direction="row" {...props} />`
 */
export const Row: React.FC<RowProps> = (props) => {
  return <Box direction="row" {...props} />;
};
Row.displayName = "Row";
