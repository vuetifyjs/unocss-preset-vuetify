import type { Variant } from 'unocss'
import type { PresetVuetifyOptions } from '../theme'
import { breakpointVariants } from './breakpoints'
import { printVariant } from './print'

export function createVariants (options: PresetVuetifyOptions): Variant[] {
  return [
    ...breakpointVariants(options),
    printVariant(),
  ]
}

export { createRtlRules } from './rtl'
