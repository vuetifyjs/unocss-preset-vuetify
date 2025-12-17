import type { Variant } from 'unocss'
import type { PresetVuetifyOptions } from '../theme'
import { breakpointVariants } from './breakpoints'
import { printVariant } from './print'
import { visibilityVariants } from './visibility'

export function createVariants (options: PresetVuetifyOptions): Variant[] {
  return [
    ...breakpointVariants(options),
    ...visibilityVariants(options),
    printVariant(),
  ]
}

export { createRtlRules } from './rtl'
