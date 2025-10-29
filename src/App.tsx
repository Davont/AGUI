import './App.css'
import { WidgetRenderer } from './components/WidgetRenderer'
import type { WidgetNode } from './components/WidgetRenderer'
import { Card } from './components/widget/Card'
import { Title, Text } from './components/ui/Typography'

// 示例 1: 天气卡片
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
          type: "Box",
          className: "text-6xl",
          children: [
            {
              type: "Text",
              value: "☀️",
              size: "xl"
            }
          ]
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

// 示例 2: 邮件卡片
const emailWidget: WidgetNode = {
  type: "Card",
  className: "w-[500px]",
  children: [
    {
      type: "Box",
      padding: 6,
      gap: 4,
      children: [
        {
          type: "Row",
          children: [
            {
              type: "Text",
              value: "FROM",
              width: 80,
              weight: "semibold",
              color: "tertiary",
              size: "xs"
            },
            {
              type: "Text",
              value: "zj@openai.com",
              color: "tertiary"
            }
          ]
        },
        {
          type: "Divider",
          flush: true
        },
        {
          type: "Row",
          children: [
            {
              type: "Text",
              value: "TO",
              width: 80,
              weight: "semibold",
              color: "tertiary",
              size: "xs"
            },
            {
              type: "Text",
              value: "weedon@openai.com",
              color: "tertiary"
            }
          ]
        },
        {
          type: "Divider",
          flush: true
        },
        {
          type: "Row",
          children: [
            {
              type: "Text",
              value: "SUBJECT",
              width: 80,
              weight: "semibold",
              color: "tertiary",
              size: "xs"
            },
            {
              type: "Text",
              value: "ChatKit Roadmap",
              color: "primary"
            }
          ]
        },
        {
          type: "Divider",
          flush: true
        },
        {
          type: "Text",
          value: "Hey David, \n\nHope you're doing well! Just wanted to check in and see if there are any updates on the ChatKit roadmap.",
          color: "primary",
          className: "whitespace-pre-wrap"
        }
      ]
    }
  ]
}

const jsondata = {
  "type": "Card",
  "size": "md",
  "confirm": {
    "label": "Add to calendar",
    "action": {
      "type": "calendar.add"
    }
  },
  "cancel": {
    "label": "Discard",
    "action": {
      "type": "calendar.discard"
    }
  },
  "children": [
    {
      "type": "Row",
      "align": "start",
      "children": [
        {
          "type": "Col",
          "align": "start",
          "gap": 1,
          "width": 80,
          "children": [
            {
              "type": "Caption",
              "value": "Friday",
              "size": "lg",
              "color": "secondary"
            },
            {
              "type": "Title",
              "value": "28",
              "size": "3xl"
            }
          ]
        },
        {
          "type": "Col",
          "flex": "auto",
          "children": [
            {
              "type": "Row",
              "key": "lunch",
              "padding": {
                "x": 3,
                "y": 2
              },
              "gap": 3,
              "radius": "xl",
              "background": "surface-secondary",
              "children": [
                {
                  "type": "Icon",
                  "width": 4,
                  "height": "40px",
                  "radius": "full",
                  "background": "red-400"
                },
                {
                  "type": "Col",
                  "children": [
                    {
                      "type": "Text",
                      "value": "Lunch"
                    },
                    {
                      "type": "Text",
                      "value": "12:00 - 12:45 PM",
                      "size": "sm",
                      "color": "tertiary"
                    }
                  ]
                }
              ]
            },
            {
              "type": "Row",
              "key": "q1-roadmap-review",
              "padding": {
                "x": 3,
                "y": 2
              },
              "gap": 3,
              "radius": "xl",
              "background": "none",
              "border": {
                "size": 1,
                "color": "blue-400",
                "style": "dashed"
              },
              "children": [
                {
                  "type": "Box",
                  "width": 4,
                  "height": "40px",
                  "radius": "full",
                  "background": "blue-400"
                },
                {
                  "type": "Col",
                  "children": [
                    {
                      "type": "Text",
                      "value": "Q1 roadmap review"
                    },
                    {
                      "type": "Text",
                      "value": "1:00 - 2:00 PM",
                      "size": "sm",
                      "color": "tertiary"
                    }
                  ]
                }
              ]
            },
            {
              "type": "Row",
              "key": "team-standup",
              "padding": {
                "x": 3,
                "y": 2
              },
              "gap": 3,
              "radius": "xl",
              "background": "surface-secondary",
              "children": [
                {
                  "type": "Box",
                  "width": 4,
                  "height": "40px",
                  "radius": "full",
                  "background": "red-400"
                },
                {
                  "type": "Col",
                  "children": [
                    {
                      "type": "Text",
                      "value": "Team standup"
                    },
                    {
                      "type": "Text",
                      "value": "3:30 - 4:00 PM",
                      "size": "sm",
                      "color": "tertiary"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Widget Renderer 演示</h1>
          <p className="text-muted-foreground">
            将 JSON 数据渲染成 React 组件
          </p>
        </div>

        <div className="space-y-12">
          {/* 示例 1: 天气卡片 */}
          <div>
            <h2 className="text-xl font-semibold mb-4">示例 1: 天气卡片</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">渲染结果</h3>
                <WidgetRenderer node={weatherWidget} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">JSON 数据</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-auto text-xs">
                  <code>{JSON.stringify(weatherWidget, null, 2)}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* 示例 2: 邮件预览卡片 */}
          <div>
            <h2 className="text-xl font-semibold mb-4">示例 2: 邮件预览卡片</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">渲染结果</h3>
                <WidgetRenderer node={emailWidget} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">JSON 数据</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-auto text-xs max-h-[600px]">
                  <code>{JSON.stringify(emailWidget, null, 2)}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* 新增：Card 组件功能演示 */}
        <div>
          <h2 className="text-xl font-semibold mb-4 mt-12">Card 组件功能演示</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            
            {/* 示例 1: 基础卡片 */}
            <div className="flex flex-col items-center">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">基础卡片 (size="sm")</h3>
              <Card>
                <Title value="基础卡片" size="lg" />
                <Text value="这是一个标准的卡片，拥有默认的内边距和尺寸。" color="secondary" />
              </Card>
            </div>

            {/* 示例 2: 带操作按钮 */}
            <div className="flex flex-col items-center">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">带操作按钮</h3>
              <Card
                size="md"
                confirm={{ label: "确认", action: { type: "submit" } }}
                cancel={{ label: "取消", action: { type: "close" } }}
              >
                <Title value="需要您的确认" size="lg" />
                <Text value="您确定要执行这个操作吗？这个操作是不可逆的。" color="secondary" />
              </Card>
            </div>
            
            {/* 示例 3: 可折叠卡片 (带 ChevronDown/Up 图标) */}
            <div className="flex flex-col items-center">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">可折叠卡片 (含图标)</h3>
              <Card collapsed={true} className="ring-2 ring-offset-2 ring-blue-500">
                <Title value="这是一个可折叠的卡片" size="lg" />
                <Text value="点击下方的按钮可以展开或收起内容。注意观察 ChevronDown/Up 图标的变化。" color="secondary" />
              </Card>
            </div>

            {/* 示例 4: 自定义尺寸和内边距 */}
            <div className="flex flex-col items-center">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">大尺寸 & 自定义 Padding</h3>
              <Card size="lg" padding={{ top: 8, right: 6, bottom: 8, left: 6 }}>
                <Title value="大尺寸卡片 (size='lg')" size="xl" />
                <Text value="这个卡片的尺寸更大，并且通过 padding 对象精确控制了上下和左右的内边距。" color="secondary" />
              </Card>
            </div>
            
            {/* 示例 5: 自定义背景 */}
            <div className="flex flex-col items-center">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">自定义背景</h3>
              <Card background="hsl(210 40% 96.1%)" theme="light">
                <Title value="自定义背景颜色" size="lg" />
                <Text value="这张卡片的背景色是直接通过 CSS HSL 值设置的。同时强制使用了 'light' 主题。" color="secondary" />
              </Card>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default App
