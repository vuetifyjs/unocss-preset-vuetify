import type { Variant } from 'unocss'
import type { PresetVuetifyOptions } from '../theme'
import { breakpointVariants } from './breakpoints'
import { printVariant } from './print'
import { createThemeVariants } from './themes'
import { visibilityVariants } from './visibility'

export function createVariants (options: PresetVuetifyOptions, staticRuleNames: Set<string>): Variant[] {
  return [
    ...breakpointVariants(options, staticRuleNames),
    ...visibilityVariants(options),
    printVariant(),
    ...(options.themes ? createThemeVariants(options.themes) : []),
  ]
}

export { createRtlRules } from './rtl'
export { createThemeVariants } from './themes'
