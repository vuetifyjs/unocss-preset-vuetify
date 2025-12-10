import type { Rule } from 'unocss'
import type { PresetVuetifyOptions } from '../theme'
import { defaultSpacer, defaultSpacerSteps } from '../theme'
import { spacerValue } from '../utils'

/**
 * RTL-aware rules using CSS logical properties.
 * These automatically handle RTL without needing .v-locale--is-ltr/rtl wrappers.
 */
export function createRtlRules (options: PresetVuetifyOptions): Rule[] {
  const spacer = options.spacer ?? defaultSpacer
  const steps = options.spacerSteps ?? defaultSpacerSteps
  const rules: Rule[] = []

  // Margin start/end using logical properties
  for (let i = 0; i <= steps; i++) {
    const value = spacerValue(i, spacer)
    rules.push([`ms-${i}`, { 'margin-inline-start': value }], [`me-${i}`, { 'margin-inline-end': value }])
  }

  // Negative margins
  for (let i = 1; i <= steps; i++) {
    const value = `-${spacerValue(i, spacer)}`
    rules.push([`ms-n${i}`, { 'margin-inline-start': value }], [`me-n${i}`, { 'margin-inline-end': value }])
  }

  // Auto margins
  rules.push(['ms-auto', { 'margin-inline-start': 'auto' }], ['me-auto', { 'margin-inline-end': 'auto' }])

  // Padding start/end using logical properties
  for (let i = 0; i <= steps; i++) {
    const value = spacerValue(i, spacer)
    rules.push([`ps-${i}`, { 'padding-inline-start': value }], [`pe-${i}`, { 'padding-inline-end': value }])
  }

  // Text alignment using logical values
  rules.push(['text-start', { 'text-align': 'start' }], ['text-end', { 'text-align': 'end' }], ['float-start', { float: 'inline-start' }], ['float-end', { float: 'inline-end' }])

  return rules
}
