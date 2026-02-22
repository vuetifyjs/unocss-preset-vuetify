import type { Rule } from 'unocss'
import { APCAcontrast } from './APCA'
import { paletteColors, shades } from './palette'
import { parseColor } from './utils'

// Theme colors use Vuetify 3's CSS variable system
const themeColors = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
  'background',
  'surface',
  'surface-variant',
  'surface-bright',
  'on-primary',
  'on-secondary',
  'on-success',
  'on-info',
  'on-warning',
  'on-error',
  'on-background',
  'on-surface',
  'on-surface-variant',
]

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

export function colorRules (): Rule[] {
  const rules: Rule[] = []

  // Vuetify 3 theme colors via CSS variables
  for (const name of themeColors) {
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
