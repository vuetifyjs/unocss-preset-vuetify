import type { Rule } from 'unocss'

export function pointerEventsRules (): Rule[] {
  const rules: Rule[] = [['pointer-events-none', { 'pointer-events': 'none' }], ['pointer-events-auto', { 'pointer-events': 'auto' }]]

  return rules
}
