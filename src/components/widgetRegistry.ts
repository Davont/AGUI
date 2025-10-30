import { Card } from "./widget/Card";
import { Box } from "./widget/Box";
import { Row } from "./widget/Row";
import { Col } from "./widget/Col";
import { Separator } from "./ui/separator";
import { Spacer } from "./ui/Spacer";
import { Divider } from "./ui/Divider";
import { Form } from "./ui/Form";
import { Transition } from "./ui/Transition";
import { Text, Title, Caption } from "./ui/Typography";
import { Button } from "./ui/Button";
import { Image } from "./ui/Image";
import type { WidgetNode } from "../types/widget";

// --- Component Registry ---

export const componentMap: { [key: string]: React.ComponentType<any> } = {
  Card,
  Separator,
  Box,
  Row,
  Col,
  Spacer,
  Divider,
  Form,
  Transition,
  Text,
  Title,
  Caption,
  Button,
  Image,
};

// --- Validation Logic ---

/**
 * Traverses a widget node tree and finds all component types that are not
 * present in the provided set of known component keys.
 *
 * @param node The root WidgetNode to start traversal from.
 * @param knownComponents A Set of strings containing the names of valid components.
 * @returns A Set of strings containing the names of all unknown component types found.
 */
export const findUnknownComponents = (node: WidgetNode, knownComponents: Set<string>): Set<string> => {
  const unknown = new Set<string>();
  const traverse = (currentNode: WidgetNode) => {
    if (!knownComponents.has(currentNode.type)) {
      unknown.add(currentNode.type);
    }
    if (currentNode.children) {
      currentNode.children.forEach(traverse);
    }
  };
  if (node) traverse(node);
  return unknown;
};
