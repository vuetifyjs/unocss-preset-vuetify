import type { Rule } from 'unocss'
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

export function colorRules (): Rule[] {
  const rules: Rule[] = []

  for (const [name, value] of Object.entries(shades)) {
    rules.push(
      [`bg-${name}`, bgCss(value)],
      [`text-${name}`, textCss(value)],
    )
  }

  for (const [colorName, shades] of Object.entries(paletteColors)) {
    for (const [shade, value] of Object.entries(shades)) {
      const suffix = shade === 'base' ? colorName : `${colorName}-${shade}`
      rules.push(
        [`bg-${suffix}`, bgCss(value)],
        [`text-${suffix}`, textCss(value)],
      )
    }
  }

  return rules
}
