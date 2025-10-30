export interface WidgetNode {
  type: string;
  children?: WidgetNode[];
  [key: string]: any;
}
