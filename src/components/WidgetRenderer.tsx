import * as React from "react"
import { Card } from "./widget/Card"
import { Box } from "./widget/Box"
import { Row } from "./widget/Row"
import { Col } from "./widget/Col"
import { Separator } from "./ui/separator"
import { Spacer } from "./ui/Spacer"
import { Divider } from "./ui/Divider"
import { Form } from "./ui/Form"
import { Transition } from "./ui/Transition"
import { Text, Title, Caption } from "./ui/Typography"

// 定义 Widget 节点的类型
export interface WidgetNode {
  type: string
  children?: WidgetNode[]
  [key: string]: any // 其他属性
}

// 组件映射表
const componentMap: { [key: string]: React.ComponentType<any> } = {
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
}

// WidgetRenderer 核心组件
interface WidgetRendererProps {
  node: WidgetNode
}

export const WidgetRenderer: React.FC<WidgetRendererProps> = ({ node }) => {
  // 处理数组映射 (map)
  const renderNode = (currentNode: WidgetNode, index?: number): React.ReactNode => {
    const { type, children, ...props } = currentNode

    // 从映射表中获取对应的组件
    const Component = componentMap[type]

    if (!Component) {
      console.warn(`Unknown component type: ${type}`)
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
      <Component key={index} {...props}>
        {renderedChildren}
      </Component>
    )
  }

  return <>{renderNode(node)}</>
}

WidgetRenderer.displayName = "WidgetRenderer"

