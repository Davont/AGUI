import * as React from "react"
import { componentMap, findUnknownComponents } from "./widgetRegistry"
import type { WidgetNode } from "../types/widget"

// WidgetRenderer 核心组件
interface WidgetRendererProps {
  node: WidgetNode
  onError?: (messages: string[]) => void
}

export const WidgetRenderer: React.FC<WidgetRendererProps> = ({ node, onError }) => {
  const knownComponentSet = React.useMemo(() => new Set(Object.keys(componentMap)), [])
  
  // Perform validation inside the component body
  const unknownTypes = findUnknownComponents(node, knownComponentSet);

  React.useEffect(() => {
    if (onError) {
      if (unknownTypes.size > 0) {
        const errorMessages = Array.from(unknownTypes).map(
          (type) => `未知组件类型: "${type}"`
        )
        onError(errorMessages)
      } else {
        onError([])
      }
    }
  }, [unknownTypes, onError])

  if (unknownTypes.size > 0) {
    // This will be caught by the error boundary in a real app,
    // but for now, it prevents rendering a broken tree.
    return null
  }

  // 处理数组映射 (map)
  const renderNode = (currentNode: WidgetNode, index?: number): React.ReactNode => {
    const { type, children, label, key, ...props } = currentNode

    // 从映射表中获取对应的组件
    const Component = componentMap[type]

    if (!Component) {
      // This is now a safeguard, the main check happens before rendering.
      return null
    }

    // 递归渲染子节点
    const renderedChildren = children?.map((child, idx) => (
      <React.Fragment key={child.key || idx}>
        {renderNode(child, idx)}
      </React.Fragment>
    ))

    // 渲染组件
    return (
      <Component key={key || index} {...props}>
        {label || renderedChildren}
      </Component>
    )
  }

  return <>{renderNode(node)}</>
}

WidgetRenderer.displayName = "WidgetRenderer"

