# AG-UI

AG-UI 是一个轻量级、零依赖的UI渲染库，它能将特定格式的JSON对象，在服务器端或浏览器端直接转换成干净、纯粹的HTML字符串。

它的核心使命是**连接AI与UI**，让后端、算法工程师或AI模型能够通过生成简单的JSON，来构建出丰富、一致的前端界面，而无需关心具体的前端框架和实现细节。

## ✨ 项目优势

- **🤖 AI 友好**: 专为AI生成UI的场景设计，使用直观、易于理解的JSON结构。AI可以专注于内容和布局，而不是繁琐的HTML标签。
- **🚀 零运行时依赖**: 最终打包的库文件不依赖任何第三方运行时库（如React），用户只需引入一个JS文件和一个CSS文件即可工作。
- **⚡️ 框架无关**: 输出纯净的HTML和CSS，可以在任何前端框架（Vue, React, Svelte, Angular）或纯HTML页面中无缝集成。
- **🎨 样式一致且可控**: 基于Tailwind CSS构建，确保了UI的一致性和高质量。最终只打包项目中实际用到的样式，生成一个极小的CSS文件，避免样式污染。
- **🔌 易于扩展**: 你可以轻松添加自定义组件，扩展渲染器的能力，以满足特定的业务需求。

## 🚀 快速入门

### 1. 安装

```bash
# 使用 npm
npm install ag-ui

# 使用 pnpm
pnpm add ag-ui
```

### 2. 使用

使用 `ag-ui` 非常简单，主要分为两步：导入 `renderToHtml` 函数和导入样式文件。

#### a. 渲染HTML

`renderToHtml` 是本库唯一导出的核心函数。它接收一个JSON对象，并返回一个包含HTML字符串和错误信息的对象。

```javascript
import { renderToHtml } from 'ag-ui';

const myWidgetJson = {
  type: 'Card',
  children: [
    { type: 'Title', value: 'Hello, AG-UI!' },
    { type: 'Text', value: 'This is rendered from JSON.' }
  ]
};

// 生成HTML
const { html, errors } = renderToHtml(myWidgetJson);

if (errors.length > 0) {
  console.error('渲染时发生错误:', errors);
} else {
  // 'html' 变量包含了最终的HTML字符串
  console.log(html);
  // document.getElementById('my-container').innerHTML = html;
}
```

#### b. 导入CSS

为了让生成的HTML看起来正确，你需要在你的项目入口文件中，**全局导入一次**本库提供的CSS文件。

```javascript
// 例如，在你的 Vue 项目的 main.js 或 main.ts 中
import { createApp } from 'vue'
import App from './App.vue'

// 导入 AG-UI 的样式
import 'ag-ui/dist/style.css'

createApp(App).mount('#app')
```
*（请注意，具体的CSS路径可能会因包管理器和构建工具而略有不同，`ag-ui/dist/style.css` 是一个常见的路径。）*

## 💬 如何反馈

我们非常欢迎来自社区的任何反馈！

- **🐛 报告Bug**: 如果你遇到了Bug，请通过 [GitHub Issues](https://github.com/your-repo/ag-ui/issues) 提交一个详细的报告，包括重现步骤、期望行为和实际行为。
- **💡 功能建议**: 如果你有任何关于新功能或改进的想法，也欢迎通过 [GitHub Issues](https://github.com/your-repo/ag-ui/issues) 提出，我们可以一起探讨。

## 🤝 如何贡献代码

我们欢迎所有形式的贡献！如果你希望为AG-UI贡献代码，请遵循以下步骤：

1.  **Fork仓库**: 将此仓库Fork到你自己的GitHub账户下。
2.  **创建分支**: 从 `main` 分支创建一个新的特性分支，例如 `feat/add-new-component` 或 `fix/button-style-bug`。
3.  **进行修改**: 在你的分支上进行代码修改。
4.  **提交代码**: 提交你的修改，并确保提交信息清晰地描述了你所做的改动。
5.  **创建Pull Request**: 将你的特性分支推送到你的Fork仓库，并创建一个Pull Request到主仓库的 `main` 分支。

我们会在收到PR后尽快进行Review。感谢你为AG-UI社区做出的贡献！

## 📄 许可证

本项目采用 [MIT](https://opensource.org/licenses/MIT) 许可证。
