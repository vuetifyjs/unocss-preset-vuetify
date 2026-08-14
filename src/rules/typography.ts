import type { Rule } from 'unocss'
import { fontWeights, typographyPresets } from '../theme'
import { kebabCase } from '../utils'

export type TypographyOptions = 'md2' | 'md3' | Record<string, Record<string, string | number>>

export function typographyRules (typography: TypographyOptions = 'md3'): Rule[] {
  const rules: Rule[] = []

  const baseShortcuts = typography === 'md2'
    ? typographyPresets.md2
    : (typography === 'md3'
        ? typographyPresets.md3
        : typography)

  for (const [name, styles] of Object.entries(baseShortcuts)) {
    const className = name.replace(/([a-z]{2,})(\d)/, '$1-$2')
    const css: Record<string, string | number> = Object.entries(styles)
      .reduce(
        (o, [key, value]) => ({ ...o, [kebabCase(key)]: value }),
        {} as Record<string, string | number>,
      )
    rules.push([`text-${className}`, css, { layer: 'typography' }])
  }

  rules.push(
    ['text-left', { 'text-align': 'left' }],
    ['text-right', { 'text-align': 'right' }],
    ['text-center', { 'text-align': 'center' }],
    ['text-justify', { 'text-align': 'justify' }],
    ['text-uppercase', { 'text-transform': 'uppercase' }],
    ['text-lowercase', { 'text-transform': 'lowercase' }],
    ['text-capitalize', { 'text-transform': 'capitalize' }],
    ['text-none', { 'text-transform': 'none' }],
    ['text-decoration-none', { 'text-decoration': 'none' }],
    ['text-decoration-underline', { 'text-decoration': 'underline' }],
    ['text-decoration-overline', { 'text-decoration': 'overline' }],
    ['text-decoration-line-through', { 'text-decoration': 'line-through' }],
    ['text-truncate', { 'overflow': 'hidden', 'text-overflow': 'ellipsis', 'white-space': 'nowrap' }],
    ['text-no-wrap', { 'white-space': 'nowrap' }],
    ['text-pre-wrap', { 'white-space': 'pre-wrap' }],
    ['text-break', { 'overflow-wrap': 'break-word' }],
  )

  // Font weight (named)
  for (const [name, weight] of Object.entries(fontWeights)) {
    rules.push([`font-weight-${name}`, { 'font-weight': String(weight) }])
  }

  // Font weight (numeric)
  for (const weight of [100, 300, 400, 500, 600, 700, 900]) {
    rules.push([`font-weight-${weight}`, { 'font-weight': String(weight) }])
  }

  // Font style
  rules.push(
    ['font-italic', { 'font-style': 'italic' }],
    ['text-italic', { 'font-style': 'italic' }],
    ['text-mono', { 'font-family': 'var(--v-font-mono, monospace)' }],
    ['text-high-emphasis', { opacity: 'var(--v-high-emphasis-opacity, 0.87)' }],
    ['text-medium-emphasis', { opacity: 'var(--v-medium-emphasis-opacity, 0.6)' }],
    ['text-disabled', { opacity: 'var(--v-disabled-opacity, 0.38)' }],
  )

  return rules
}
