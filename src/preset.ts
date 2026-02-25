import type { Preset } from 'unocss'
import type { PresetVuetifyOptions } from './theme'
import { createRules } from './rules'
import { createRtlRules, createVariants } from './variants'

export function presetVuetify (options: PresetVuetifyOptions = {}): Preset {
  const rules = [...createRules(options), ...createRtlRules(options)]

  const staticRuleNames = new Set(
    rules
      .filter(r => typeof r[0] === 'string')
      .map(r => r[0] as string),
  )

  return {
    name: 'unocss-preset-vuetify',
    layers: {
      typography: -1,
      utilities: 0,
    },
    rules,
    variants: createVariants(options, staticRuleNames),
    postprocess (util) {
      if (!options.important) {
        return
      }
      for (const entry of util.entries) {
        if (entry[1] != null && !String(entry[1]).endsWith('!important')) {
          ;(entry as [string, string])[1] = `${entry[1]} !important`
        }
      }
    },
  }
}
