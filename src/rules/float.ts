import type { Rule } from 'unocss'

export function floatRules (): Rule[] {
  const rules: Rule[] = [['float-none', { float: 'none' }], ['float-left', { float: 'left' }], ['float-right', { float: 'right' }], ['clear-none', { clear: 'none' }], ['clear-left', { clear: 'left' }], ['clear-right', { clear: 'right' }], ['clear-both', { clear: 'both' }]]

  // Float

  // Clear

  return rules
}
