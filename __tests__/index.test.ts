import { describe, it, expect } from 'vitest';
import { renderToHtml } from 'ag-ui';
import type { WidgetNode } from '@/types/widget';

describe('renderToHtml', () => {
  it('should render a simple Text component to HTML', () => {
    const simpleJson: WidgetNode = {
      type: 'Text',
      value: 'Hello, World!',
    };
    const { html, errors } = renderToHtml(simpleJson);

    expect(errors).toEqual([]);
    expect(html).toContain('Hello, World!');
    expect(html).toBe('<span class="text-base font-normal">Hello, World!</span>');
  });

  it('should report an error for an unknown component type', () => {
    const invalidJson: WidgetNode = {
      type: 'UnknownComponent',
      value: 'This should fail.',
    };
    const { html, errors } = renderToHtml(invalidJson);

    expect(html).toBe('');
    expect(errors).toHaveLength(1);
    expect(errors[0]).toBe('未知组件类型: "UnknownComponent"');
  });

  it('should correctly render a complex card layout and match the snapshot', () => {
    const complexJson: WidgetNode = {
      type: 'Card',
      size: 'md',
      children: [
        {
          type: 'Title',
          value: 'Complex Card',
        },
        {
          type: 'Row',
          gap: 4,
          children: [
            {
              type: 'Image',
              src: '/test.png',
              alt: 'Test Image',
            },
            {
              type: 'Text',
              value: 'This is a complex layout.',
            },
          ],
        },
      ],
    };
    const { html, errors } = renderToHtml(complexJson);
    
    expect(errors).toEqual([]);
    // Snapshot testing: The first time this runs, it creates a snapshot file.
    // Subsequent runs will compare the output to this snapshot.
    expect(html).toMatchSnapshot();
  });

  it('should handle invalid JSON format gracefully', () => {
    // @ts-ignore
    const malformedJson: WidgetNode = { not_a_type: 'Card' };
    const { html, errors } = renderToHtml(malformedJson);
    
    expect(html).toContain('错误: 无效的JSON格式。');
    expect(errors).toHaveLength(1);
    expect(errors[0]).toBe('错误: 无效的JSON格式。');
  });
});
