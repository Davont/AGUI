import * as React from "react";
import type { FormProps } from "@/types/ui";
import { Box } from "@/components/widget/Box";

export const Form: React.FC<FormProps> = (props) => {
  const { onSubmitAction, ...boxProps } = props;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmitAction) {
      console.log("Form submitted, dispatching action:", onSubmitAction);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box {...boxProps} />
    </form>
  );
};
Form.displayName = "Form";
