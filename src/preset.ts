import type { Preset } from 'unocss'
import type { PresetVuetifyOptions } from './theme'
import { createRules } from './rules'
import { createRtlRules, createVariants } from './variants'

export function presetVuetify (options: PresetVuetifyOptions = {}): Preset {
  return {
    name: 'unocss-preset-vuetify',
    rules: [
      ...createRules(options),
      ...createRtlRules(options),
    ],
    variants: createVariants(options),
    options: {
      // Vuetify utilities typically use !important
      // Can be overridden via options
    },
  }
}
