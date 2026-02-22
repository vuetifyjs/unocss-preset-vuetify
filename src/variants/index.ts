import type { Variant } from 'unocss'
import type { PresetVuetifyOptions } from '../theme'
import { breakpointVariants } from './breakpoints'
import { printVariant } from './print'
import { visibilityVariants } from './visibility'

export function createVariants (options: PresetVuetifyOptions, staticRuleNames: Set<string>): Variant[] {
  return [
    ...breakpointVariants(options, staticRuleNames),
    ...visibilityVariants(options),
    printVariant(),
  ]
}

export { createRtlRules } from './rtl'
