import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { WidgetRenderer } from './components/WidgetRenderer';
import type { WidgetNode } from './types/widget';
import { findUnknownComponents, componentMap } from './components/widgetRegistry';
import './index.css';

// Dynamically create the set of known keys from the single source of truth.
const knownComponentKeys = new Set(Object.keys(componentMap));

/**
 * Renders a widget JSON node to a static HTML string and checks for errors.
 *
 * @param json The widget node JSON object.
 * @returns An object containing the HTML string and an array of error messages.
 */
export function renderToHtml(json: WidgetNode): { html: string; errors: string[] } {
  if (!json || typeof json.type !== 'string') {
    const error = "错误: 无效的JSON格式。";
    return { html: `<div style="color:red;">${error}</div>`, errors: [error] };
  }

  const unknownTypes = findUnknownComponents(json, knownComponentKeys);
  if (unknownTypes.size > 0) {
    const errors = Array.from(unknownTypes).map(type => `未知组件类型: "${type}"`);
    return { html: '', errors };
  }

  try {
    const reactElement = React.createElement(WidgetRenderer, { node: json });
    const html = renderToStaticMarkup(reactElement);
    return { html, errors: [] };
  } catch (error) {
    const errorMessage = "错误: 渲染JSON时发生意外。"
    console.error("Error rendering widget JSON to HTML:", error);
    return { html: `<div style="color:red;">${errorMessage}</div>`, errors: [errorMessage] };
  }
}
