import * as React from "react";
import { Box } from "./Box";
import type { ColProps } from "@/types/layout";

/**
 * A vertical layout container, based on Box.
 * Equivalent to `<Box direction="col" {...props} />`
 */
export const Col: React.FC<ColProps> = (props) => {
  return <Box direction="col" {...props} />;
};
Col.displayName = "Col";
