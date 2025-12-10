import type { Rule } from 'unocss'

const cursorValues = [
  'auto',
  'default',
  'pointer',
  'wait',
  'text',
  'move',
  'help',
  'not-allowed',
  'progress',
  'grab',
  'grabbing',
  'none',
  'context-menu',
  'cell',
  'crosshair',
  'vertical-text',
  'alias',
  'copy',
  'no-drop',
  'all-scroll',
  'col-resize',
  'row-resize',
  'n-resize',
  'e-resize',
  's-resize',
  'w-resize',
  'ne-resize',
  'nw-resize',
  'se-resize',
  'sw-resize',
  'ew-resize',
  'ns-resize',
  'nesw-resize',
  'nwse-resize',
  'zoom-in',
  'zoom-out',
]

export function cursorRules (): Rule[] {
  const rules: Rule[] = []

  for (const value of cursorValues) {
    rules.push([`cursor-${value}`, { cursor: value }])
  }

  return rules
}
