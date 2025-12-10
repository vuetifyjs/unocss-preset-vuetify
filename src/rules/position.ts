import type { Rule } from 'unocss'

export function positionRules (): Rule[] {
  const rules: Rule[] = [['position-static', { position: 'static' }], ['position-relative', { position: 'relative' }], ['position-absolute', { position: 'absolute' }], ['position-fixed', { position: 'fixed' }], ['position-sticky', { position: 'sticky' }], ['top-0', { top: '0' }], ['right-0', { right: '0' }], ['bottom-0', { bottom: '0' }], ['left-0', { left: '0' }], ['inset-0', { top: '0', right: '0', bottom: '0', left: '0' }]]

  // Position property

  return rules
}
