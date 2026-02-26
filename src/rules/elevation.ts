import type { Rule } from 'unocss'
import { elevationPresets } from '../theme'
import { kebabCase } from '../utils'

export type ElevationOptions = 'md2' | 'md3' | Record<string, Record<string, string>>

export function elevationRules (elevation: ElevationOptions = 'md3'): Rule[] {
  const preset = elevation === 'md2'
    ? elevationPresets.md2
    : (elevation === 'md3'
        ? elevationPresets.md3
        : elevation)

  const rules: Rule[] = []

  for (const [level, styles] of Object.entries(preset)) {
    const css: Record<string, string | number> = Object.entries(styles)
      .reduce(
        (o, [key, value]) => ({ ...o, [kebabCase(key)]: value }),
        {} as Record<string, string>,
      )
    rules.push([`elevation-${level}`, css])
  }

  rules.push(['elevation-overlay', { 'background-image': 'linear-gradient(var(--v-elevation-overlay), var(--v-elevation-overlay))' }])

  return rules
}
