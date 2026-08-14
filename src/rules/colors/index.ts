import type { Rule } from 'unocss'
import type { PresetVuetifyOptions } from '../../theme'
import { defaultThemeColors } from '../../theme'
import { APCAcontrast } from './APCA'
import { paletteColors, shades } from './palette'
import { parseColor } from './utils'

function getForeground (color: string) {
  const blackContrast = Math.abs(APCAcontrast(parseColor(0), parseColor(color)))
  const whiteContrast = Math.abs(APCAcontrast(parseColor(0xff_ff_ff), parseColor(color)))

  return whiteContrast > Math.min(blackContrast, 50) ? '#fff' : '#000'
}

function bgCss (color: string): Record<string, string> {
  return {
    'background-color': color,
    'color': getForeground(color),
  }
}

function textCss (color: string) {
  return { color }
}

export function colorRules (options: PresetVuetifyOptions = {}): Rule[] {
  const rules: Rule[] = []

  // Vuetify 3 theme colors via CSS variables
  for (const name of options.themeColors ?? defaultThemeColors) {
    rules.push(
      [`bg-${name}`, {
        'background-color': `rgb(var(--v-theme-${name}))`,
        'color': `rgba(var(--v-theme-on-${name}), var(--v-high-emphasis-opacity))`,
      }],
      [`text-${name}`, {
        color: `rgb(var(--v-theme-${name}))`,
      }],
    )
  }

  // Black, white, transparent
  for (const [name, value] of Object.entries(shades)) {
    if (value === 'transparent') {
      rules.push(
        [`bg-${name}`, { 'background-color': value }],
        [`text-${name}`, textCss(value)],
      )
    } else {
      rules.push(
        [`bg-${name}`, bgCss(value)],
        [`text-${name}`, textCss(value)],
      )
    }
  }

  // Material Design palette colors
  for (const [colorName, colorShades] of Object.entries(paletteColors)) {
    for (const [shade, value] of Object.entries(colorShades)) {
      const suffix = shade === 'base' ? colorName : `${colorName}-${shade}`
      rules.push(
        [`bg-${suffix}`, bgCss(value)],
        [`text-${suffix}`, textCss(value)],
      )
    }
  }

  return rules
}
