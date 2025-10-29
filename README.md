# Widget Renderer

一个基于 React + Vite + Tailwind CSS + shadcn/ui 的 Widget 渲染器，可以将 JSON 数据动态渲染成 React 组件。

## 功能特性

- 🎨 **声明式 UI**：使用 JSON 描述界面结构
- 🧩 **组件化设计**：支持多种布局和排版组件
- 💅 **现代化样式**：基于 shadcn/ui 和 Tailwind CSS
- 🔄 **动态渲染**：运行时解析 JSON 并渲染成真实的 React 组件

## 技术栈

- **React 18** - UI 框架
- **Vite** - 构建工具
- **TypeScript** - 类型安全
- **Tailwind CSS** - CSS 框架
- **shadcn/ui** - UI 组件库

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

## 使用示例

### 基础用法

```tsx
import { WidgetRenderer, WidgetNode } from './components/WidgetRenderer'

const weatherWidget: WidgetNode = {
  type: "Card",
  className: "w-[400px] p-6",
  children: [
    {
      type: "Row",
      gap: 4,
      align: "center",
      children: [
        {
          type: "Text",
          value: "☀️",
          size: "xl"
        },
        {
          type: "Col",
          gap: 0,
          children: [
            {
              type: "Title",
              value: "22°C",
              size: "2xl"
            },
            {
              type: "Text",
              value: "北京 · 晴",
              color: "tertiary"
            }
          ]
        }
      ]
    }
  ]
}

function App() {
  return <WidgetRenderer node={weatherWidget} />
}
```

## 支持的组件

### 布局组件

- **Card** - 卡片容器
- **Box** - 基础容器（默认为列方向）
- **Row** - 水平布局容器
- **Col** - 垂直布局容器
- **Spacer** - 弹性空白占位符
- **Divider** - 分隔线

### 排版组件

- **Title** - 标题
- **Text** - 文本
- **Caption** - 副标题/说明文字

### 交互组件

- **Button** - 按钮
- **Separator** - 分隔符

## 组件属性

### Row

```typescript
{
  type: "Row",
  gap?: number,              // 间距（单位：0.25rem）
  padding?: number | { x?: number, y?: number },
  align?: "start" | "center" | "end" | "stretch",
  justify?: "start" | "center" | "end" | "between" | "around",
  radius?: string,           // 圆角
  background?: string,       // 背景颜色
  border?: {                 // 边框
    size?: number,
    color?: string,
    style?: string
  }
}
```

### Text

```typescript
{
  type: "Text",
  value: string,             // 文本内容（必需）
  size?: "xs" | "sm" | "md" | "lg" | "xl",
  weight?: "normal" | "medium" | "semibold" | "bold",
  color?: "primary" | "secondary" | "tertiary" | string,
  italic?: boolean,
  width?: number
}
```

### Title

```typescript
{
  type: "Title",
  value: string,             // 标题内容（必需）
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl",
  weight?: "normal" | "medium" | "semibold" | "bold",
  color?: "primary" | "secondary" | string
}
```

## 核心原理

`WidgetRenderer` 的工作流程：

1. **接收 JSON 数据** - 接受一个符合 `WidgetNode` 接口的 JSON 对象
2. **解析节点类型** - 根据 `type` 字段查找对应的 React 组件
3. **递归渲染子节点** - 处理 `children` 数组，递归调用渲染逻辑
4. **组件映射** - 通过 `componentMap` 将字符串类型映射到真实的 React 组件
5. **属性传递** - 将 JSON 中的其他属性作为 props 传递给组件

```typescript
const componentMap = {
  Card,
  Button,
  Box,
  Row,
  Col,
  Text,
  Title,
  // ... 更多组件
}

// 核心渲染逻辑
const Component = componentMap[node.type]
return <Component {...props}>{children}</Component>
```

## 项目结构

```
src/
├── components/
│   ├── ui/                    # shadcn/ui 组件
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── separator.tsx
│   ├── widget/                # 自定义 Widget 组件
│   │   ├── Layout.tsx         # 布局组件（Box, Row, Col, etc.）
│   │   └── Typography.tsx     # 排版组件（Text, Title, Caption）
│   └── WidgetRenderer.tsx     # 核心渲染器
├── lib/
│   └── utils.ts               # 工具函数
├── App.tsx                    # 示例应用
└── main.tsx                   # 入口文件
```

## 扩展组件

要添加新的组件类型：

1. 创建新的 React 组件
2. 在 `WidgetRenderer.tsx` 的 `componentMap` 中注册
3. 更新 TypeScript 类型定义

```typescript
// 1. 创建组件
export const MyComponent: React.FC<Props> = (props) => {
  return <div>{/* ... */}</div>
}

// 2. 注册到 componentMap
const componentMap = {
  // ... 现有组件
  MyComponent,
}

// 3. 在 JSON 中使用
{
  type: "MyComponent",
  // ... props
}
```

## License

MIT
