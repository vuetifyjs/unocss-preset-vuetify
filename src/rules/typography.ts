import type { Rule } from 'unocss'
import { fontWeights, typography } from '../theme'

export function typographyRules (): Rule[] {
  const rules: Rule[] = []

  // Typography styles: text-h1 to text-h6, text-body-1, etc.
  for (const [name, styles] of Object.entries(typography)) {
    const className = name.replace(/(\d)/, '-$1')
    const css: Record<string, string> = {
      'font-size': styles.fontSize,
      'font-weight': String(styles.fontWeight),
      'line-height': String(styles.lineHeight),
      'letter-spacing': styles.letterSpacing,
    }
    if ('textTransform' in styles) {
      css['text-transform'] = styles.textTransform as string
    }
    rules.push([`text-${className}`, css])
  }

  // Text alignment
  rules.push(['text-left', { 'text-align': 'left' }], ['text-right', { 'text-align': 'right' }], ['text-center', { 'text-align': 'center' }], ['text-justify', { 'text-align': 'justify' }], ['text-uppercase', { 'text-transform': 'uppercase' }], ['text-lowercase', { 'text-transform': 'lowercase' }], ['text-capitalize', { 'text-transform': 'capitalize' }], ['text-none', { 'text-transform': 'none' }], ['text-decoration-none', { 'text-decoration': 'none' }], ['text-decoration-underline', { 'text-decoration': 'underline' }], ['text-decoration-overline', { 'text-decoration': 'overline' }], ['text-decoration-line-through', { 'text-decoration': 'line-through' }], [
    'text-truncate',
    {
      'overflow': 'hidden',
      'text-overflow': 'ellipsis',
      'white-space': 'nowrap',
    },
  ], ['text-no-wrap', { 'white-space': 'nowrap' }], ['text-pre-wrap', { 'white-space': 'pre-wrap' }], ['text-break', { 'overflow-wrap': 'break-word' }])

  // Font weight
  for (const [name, weight] of Object.entries(fontWeights)) {
    rules.push([`font-weight-${name}`, { 'font-weight': String(weight) }])
  }

  // Font style
  rules.push(['font-italic', { 'font-style': 'italic' }], [
    'text-mono',
    { 'font-family': 'monospace' },
  ], [
    'text-high-emphasis',
    { opacity: 'var(--v-high-emphasis-opacity, 0.87)' },
  ], [
    'text-medium-emphasis',
    { opacity: 'var(--v-medium-emphasis-opacity, 0.6)' },
  ], [
    'text-disabled',
    { opacity: 'var(--v-disabled-opacity, 0.38)' },
  ])

  return rules
}
