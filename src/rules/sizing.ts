import type { Rule } from 'unocss'

export function sizingRules (): Rule[] {
  const rules: Rule[] = [['h-auto', { height: 'auto' }], ['h-screen', { height: '100vh' }], ['h-screen-dvh', { height: '100dvh' }], ['h-0', { height: '0' }], ['h-25', { height: '25%' }], ['h-50', { height: '50%' }], ['h-75', { height: '75%' }], ['h-100', { height: '100%' }], ['w-auto', { width: 'auto' }], ['w-0', { width: '0' }], ['w-25', { width: '25%' }], ['w-33', { width: '33.3333%' }], ['w-50', { width: '50%' }], ['w-66', { width: '66.6667%' }], ['w-75', { width: '75%' }], ['w-100', { width: '100%' }], ['fill-height', { height: '100%' }], ['max-w-100', { 'max-width': '100%' }], ['max-h-100', { 'max-height': '100%' }], ['min-w-0', { 'min-width': '0' }], ['min-h-0', { 'min-height': '0' }]]

  // Height utilities

  return rules
}
