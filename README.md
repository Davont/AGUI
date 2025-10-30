# AG-UI Widget Renderer (@hui/agui-render)

AG-UI Widget Renderer 是一个功能强大的渲染引擎，它可以将特定格式的 JSON 对象转换成干净、纯粹的 HTML 字符串。这个项目的核心目标是为AI驱动的UI生成提供一个可靠的、与前端框架无关的渲染层。

AI可以专注于生成结构化的JSON，而此渲染器负责将其转换为可以在任何Web环境（React, Vue, Svelte, Angular, 或纯粹的JavaScript项目）中使用的HTML。

## ✨ 特性

- **🤖 AI友好**: 专为AI生成UI的场景设计，使用直观的JSON结构。
- **🚀 框架无关**: 输出纯净的HTML和CSS，可以在任何前端框架中无缝集成。
- **🎨 按需样式**: 使用Tailwind CSS，但最终只打包项目中实际用到的样式，生成一个极小的CSS文件，避免样式污染。
- **🔒 类型安全**: 使用TypeScript编写，为JSON结构提供类型定义，确保健壮性。
- **⚛️ React驱动**: 底层使用React和React DOM Server进行渲染，让你能利用React强大的组件生态来扩展自定义组件。
- **🧪 经过测试**: 核心功能拥有完整的单元测试套件，确保质量和稳定性。

## 📦 安装

你可以使用你喜欢的包管理器进行安装：

```bash
# 使用 npm
npm install @hui/agui-render

# 使用 yarn
yarn add @hui/agui-render

# 使用 pnpm
pnpm add @hui/agui-render
```

## 🚀 使用方法

使用 `ag-ui-render` 非常简单，主要分为两步：导入 `renderToHtml` 函数和导入样式文件。

### 1. 导入和使用 `renderToHtml`

`renderToHtml` 是本库唯一导出的核心函数。它接收一个符合 `WidgetNode` 类型的JSON对象，并返回一个包含HTML字符串和错误信息的对象。

```javascript
import { renderToHtml } from '@hui/agui-render';

const myWidgetJson = {
  type: 'Card',
  children: [
    { type: 'Title', value: 'Hello, World!' },
    { type: 'Text', value: 'This is rendered from JSON.' }
  ]
};

// 生成HTML
const { html, errors } = renderToHtml(myWidgetJson);

if (errors.length > 0) {
  console.error('渲染时发生错误:', errors);
} else {
  // 现在，'html' 变量包含了可以使用的HTML字符串
  console.log(html);
  // 输出: <div class="..."><h2 class="...">Hello, World!</h2>...</div>
}
```

### 2. 导入CSS样式

为了让生成的HTML看起来正确，你需要在你的项目入口文件中，**全局导入一次**本库提供的CSS文件。

```javascript
// 例如，在你的 Vue 项目的 main.js 或 main.ts 中
import { createApp } from 'vue'
import App from './App.vue'

// 导入 AG-UI 的样式
import '@hui/agui-render/style.css'

createApp(App).mount('#app')
```

### 在 Vue 中使用的示例

在Vue组件中，你可以使用 `v-html` 指令来渲染 `renderToHtml` 函数返回的HTML字符串。

```vue
<template>
  <div class="my-container">
    <!-- 使用 v-html 来渲染动态生成的HTML -->
    <div v-if="widgetHtml" v-html="widgetHtml"></div>
    <!-- 如果有错误，则显示错误信息 -->
    <div v-else-if="renderErrors.length > 0" class="error-panel">
      <h3>渲染组件时出错：</h3>
      <ul>
        <li v-for="(error, index) in renderErrors" :key="index">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { renderToHtml } from '@hui/agui-render';

export default defineComponent({
  name: 'WidgetDisplay',
  setup() {
    const widgetHtml = ref('');
    const renderErrors = ref([]);

    onMounted(() => {
      // 在真实应用中，这个JSON可能来自API或AI服务
      const aiGeneratedJson = {
        type: 'Card',
        size: 'md',
        children: [
          { type: 'Title', value: '来自Vue的问候' },
          { type: 'Text', value: '这段HTML是由 @hui/agui-render 在Vue应用中渲染的。' }
        ]
      };

      const { html, errors } = renderToHtml(aiGeneratedJson);
      
      if (errors.length > 0) {
        renderErrors.value = errors;
      } else {
        widgetHtml.value = html;
      }
    });

    return {
      widgetHtml,
      renderErrors,
    };
  },
});
</script>

<style scoped>
.error-panel {
  color: red;
  border: 1px solid red;
  padding: 1rem;
  border-radius: 8px;
}
</style>
```

## 📚 API 参考

### `renderToHtml(json)`

- **参数**:
  - `json` (`WidgetNode`): 一个符合 `WidgetNode` 接口的JavaScript对象。
- **返回**: 一个对象，包含两个属性：
  - `html` (`string`): 渲染生成的HTML字符串。如果渲染过程中检测到任何错误（比如未知组件），此字符串将为空 `''`。
  - `errors` (`string[]`): 一个包含所有错误信息的字符串数组。如果没有错误，此数组将为空 `[]`。

## 📜 JSON 结构 (`WidgetNode`)

一个基础的 `WidgetNode` 结构如下：

```typescript
interface WidgetNode {
  type: string; // 必须，对应一个已注册的组件名，如 'Card', 'Text'
  children?: WidgetNode[]; // 可选，一个由子WidgetNode组成的数组
  [key: string]: any; // 其他任何合法的prop，如 'value', 'size', 'style' 等
}
```

## 🤝 贡献

欢迎提交问题和拉取请求！如果你发现了bug或有功能建议，请随时在项目的Issue中提出。

## 📄 许可证

本项目采用 [MIT](https://opensource.org/licenses/MIT) 许可证。
