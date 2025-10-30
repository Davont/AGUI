import './App.css'
import type { WidgetNode } from './types/widget'
import { Button } from './components/ui/Button'
import { useState, useEffect } from 'react'
import { renderToHtml } from './index'
import { html as beautifyHtml } from 'js-beautify'
// We will now link to the final build artifact for a high-fidelity preview
// import styles from './index.css?raw' // No longer needed

// Helper function to create the full HTML document for the iframe
const createIframeHtml = (bodyContent: string): string => {
  // Use Vite's env variable to switch path based on dev vs. build
  const cssPath = import.meta.env.DEV ? '/dist/style.css' : './style.css';
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <link rel="stylesheet" href="${cssPath}">
    </head>
    <body style="margin: 0; padding: 1rem; background-color: hsl(var(--background)); color: hsl(var(--foreground));">
      ${bodyContent}
    </body>
  </html>
`};

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

// 示例 3: 音乐播放列表
const musicPlaylistWidget: WidgetNode = {
  "type": "Card",
  "size": "sm",
  "children": [
    {
      "type": "Image",
      "src": "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400",
      "alt": "K-POP",
      "height": 180,
      "fit": "cover",
      "flush": true
    },
    {
      "type": "Col",
      "padding": {
        "y": 2
      },
      "children": [
        {
          "type": "Row",
          "key": "retrovinyl",
          "align": "center",
          "gap": 3,
          "children": [
            {
              "type": "Caption",
              "value": "1"
            },
            {
              "type": "Image",
              "src": "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=40"
            },
            {
              "type": "Col",
              "flex": "auto",
              "gap": 0,
              "children": [
                {
                  "type": "Text",
                  "value": "retrovinyl",
                  "weight": "semibold"
                },
                {
                  "type": "Text",
                  "value": "Erik Mclean",
                  "size": "sm",
                  "color": "secondary"
                }
              ]
            },
            {
              "type": "Button",
              "iconStart": "play",
              "variant": "ghost"
            }
          ]
        },
        {
          "type": "Row",
          "key": "neon-polaroid",
          "align": "center",
          "gap": 3,
          "children": [
            {
              "type": "Caption",
              "value": "2"
            },
            {
              "type": "Image",
              "src": "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=40"
            },
            {
              "type": "Col",
              "flex": "auto",
              "gap": 0,
              "children": [
                {
                  "type": "Text",
                  "value": "Neon Polaroid",
                  "weight": "semibold"
                },
                {
                  "type": "Text",
                  "value": "Efe Kurnaz",
                  "size": "sm",
                  "color": "secondary"
                }
              ]
            },
            {
              "type": "Button",
              "iconStart": "play",
              "variant": "ghost"
            }
          ]
        },
        {
          "type": "Row",
          "key": "morning-grain",
          "align": "center",
          "gap": 3,
          "children": [
            {
              "type": "Caption",
              "value": "3"
            },
            {
              "type": "Image",
              "src": "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=40"
            },
            {
              "type": "Col",
              "flex": "auto",
              "gap": 0,
              "children": [
                {
                  "type": "Text",
                  "value": "Morning Grain",
                  "weight": "semibold"
                },
                {
                  "type": "Text",
                  "value": "Reinhart Julian",
                  "size": "sm",
                  "color": "secondary"
                }
              ]
            },
            {
              "type": "Button",
              "iconStart": "play",
              "variant": "ghost"
            }
          ]
        }
      ]
    },
    {
      "type": "Button",
      "label": "View playlist",
      "variant": "outline"
    }
  ]
}

// 示例 4: 球员卡片
const footballCardWidget: WidgetNode = {
  "type": "Card",
  "size": "md",
  "theme": "dark",
  "padding": 8,
  "background": "url(https://ik.imagekit.io/m998roxrr/footballfroge.png) no-repeat center / cover",
  "children": [
    {
      "type": "Row",
      "align": "center",
      "children": [
        {
          "type": "Box",
          "width": "40%",
          "minHeight": 160
        },
        {
          "type": "Col",
          "flex": "auto",
          "children": [
            {
              "type": "Title",
              "value": "Froge (#22)",
              "size": "xl",
              "color": "white",
              "weight": "normal"
            },
            {
              "type": "Row",
              "children": [
                {
                  "type": "Col",
                  "flex": 1,
                  "gap": 0,
                  "children": [
                    {
                      "type": "Text",
                      "value": "18",
                      "weight": "semibold"
                    },
                    {
                      "type": "Caption",
                      "value": "PTS",
                      "color": "blue-100"
                    }
                  ]
                },
                {
                  "type": "Col",
                  "flex": 1,
                  "gap": 0,
                  "children": [
                    {
                      "type": "Text",
                      "value": "141",
                      "weight": "semibold"
                    },
                    {
                      "type": "Caption",
                      "value": "YDS",
                      "color": "blue-100"
                    }
                  ]
                },
                {
                  "type": "Col",
                  "flex": 1,
                  "gap": 0,
                  "children": [
                    {
                      "type": "Text",
                      "value": "2",
                      "weight": "semibold"
                    },
                    {
                      "type": "Caption",
                      "value": "TKL",
                      "color": "blue-100"
                    }
                  ]
                },
                {
                  "type": "Col",
                  "flex": 1,
                  "gap": 0,
                  "children": [
                    {
                      "type": "Text",
                      "value": "17",
                      "weight": "semibold"
                    },
                    {
                      "type": "Caption",
                      "value": "LEAPS",
                      "color": "blue-100"
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
  const [jsonInput, setJsonInput] = useState(() => JSON.stringify(weatherWidget, null, 2));
  const [widgetNode, setWidgetNode] = useState<WidgetNode | null>(weatherWidget);
  const [parseError, setParseError] = useState<string | null>(null);
  const [renderErrors, setRenderErrors] = useState<string[] | null>(null);
  const [htmlOutput, setHtmlOutput] = useState<string>('');
  const [showHtmlSource, setShowHtmlSource] = useState<boolean>(false);
  const [iframeContent, setIframeContent] = useState<string>('');

  useEffect(() => {
    // This single effect now handles everything:
    // parsing, error checking, rendering, and updating the iframe.
    try {
      if (jsonInput.trim() === '') {
        setWidgetNode(null);
        setParseError(null);
        setRenderErrors(null);
        setHtmlOutput('');
        setIframeContent('');
        return;
      }

      const parsed = JSON.parse(jsonInput);
      setWidgetNode(parsed);
      setParseError(null);
      
      const { html, errors } = renderToHtml(parsed);

      setHtmlOutput(html);
      setRenderErrors(errors.length > 0 ? errors : null);

      if (html) {
        setIframeContent(createIframeHtml(html));
      } else {
        setIframeContent('');
      }

    } catch (err) {
      if (err instanceof Error) {
        setParseError(`JSON 格式错误: ${err.message}`);
      } else {
        setParseError('无效的 JSON');
      }
      setWidgetNode(null);
      setRenderErrors(null);
      setHtmlOutput('');
      setIframeContent('');
    }
  }, [jsonInput]);


  const loadExample = (widgetData: WidgetNode) => {
    const prettyJson = JSON.stringify(widgetData, null, 2);
    setJsonInput(prettyJson);
  };

  return (
    <div className="min-h-screen bg-background p-8 font-sans">
      <div className="max-w-screen-2xl mx-auto flex flex-col h-[calc(100vh-4rem)]">
        <div className="flex-shrink-0 mb-6">
          <h1 className="text-3xl font-bold mb-2">AG-UI Widget Renderer 演示</h1>
          <p className="text-muted-foreground">
            在左侧编辑 JSON，在右侧查看实时渲染结果。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow">
          {/* Left Panel: JSON Editor */}
          <div className="flex flex-col">
            <div className="flex-shrink-0 mb-3 flex items-center gap-2">
              <h3 className="text-sm font-medium text-muted-foreground">加载示例:</h3>
              <Button size="sm" variant="outline" onClick={() => loadExample(weatherWidget)}>
                天气卡片
              </Button>
              <Button size="sm" variant="outline" onClick={() => loadExample(emailWidget)}>
                邮件卡片
              </Button>
              <Button size="sm" variant="outline" onClick={() => loadExample(musicPlaylistWidget)}>
                音乐列表
              </Button>
              <Button size="sm" variant="outline" onClick={() => loadExample(footballCardWidget)}>
                球员卡片
              </Button>
            </div>
            <div className="flex-grow flex flex-col relative">
              <textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                className={`w-full h-full p-4 rounded-lg bg-muted font-mono text-sm border resize-none focus:outline-none focus:ring-2 ${parseError || (renderErrors && renderErrors.length > 0) ? 'border-destructive focus:ring-destructive' : 'border-transparent focus:ring-primary'
                  }`}
                placeholder="在此输入 JSON..."
                spellCheck="false"
              />
              {(parseError || (renderErrors && renderErrors.length > 0)) && (
                <div className="absolute bottom-2 left-2 right-2 bg-destructive/90 text-destructive-foreground p-2 text-xs rounded max-h-24 overflow-y-auto">
                  {parseError && <div>{parseError}</div>}
                  {renderErrors && renderErrors.map(err => <div key={err}>{err}</div>)}
                </div>
              )}
            </div>
          </div>

          {/* Right Panel: Rendered Preview */}
          <div className="bg-card rounded-lg border relative overflow-hidden flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-sm font-medium text-muted-foreground">渲染结果 (HTML 预览)</h3>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setShowHtmlSource(!showHtmlSource)}
                disabled={!htmlOutput || (renderErrors && renderErrors.length > 0) ? false : undefined}
              >
                {showHtmlSource ? '返回预览' : '查看源码'}
              </Button>
            </div>
            <div className="p-6 overflow-auto h-[calc(100%-3.5rem)] flex-grow">
              {widgetNode ? (
                <>
                  {renderErrors && renderErrors.length > 0 ? (
                    <div className="text-center text-destructive p-4 bg-destructive/10 rounded-lg">
                      <p className="font-semibold mb-2">渲染时遇到以下问题:</p>
                      <ul className="list-disc list-inside text-sm">
                        {renderErrors.map(e => <li key={e}>{e}</li>)}
                      </ul>
                    </div>
                  ) : (
                    showHtmlSource ? (
                      <pre className="bg-muted p-4 rounded-lg text-xs overflow-auto h-full">
                        <code>{beautifyHtml(htmlOutput, { indent_size: 2 })}</code>
                      </pre>
                    ) : (
                      <iframe
                        srcDoc={iframeContent}
                        title="HTML Preview"
                        className="w-full h-full border-0"
                        sandbox="allow-scripts"
                      />
                    )
                  )}
                </>
              ) : (
                <div className="text-center text-muted-foreground">
                  <p>{parseError ? '无法渲染，请检查 JSON 格式' : '请输入有效的 JSON 来渲染组件'}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
