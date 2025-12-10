import type { Rule } from 'unocss'
import type { PresetVuetifyOptions } from '../theme'
import { defaultSpacer, defaultSpacerSteps } from '../theme'
import { directions, spacerValue } from '../utils'

export function spacingRules (options: PresetVuetifyOptions): Rule[] {
  const spacer = options.spacer ?? defaultSpacer
  const steps = options.spacerSteps ?? defaultSpacerSteps
  const rules: Rule[] = [[
    /^ga-(\d+)$/,
    ([, n]) => {
      const num = Number.parseInt(n)
      if (num > steps) {
        return
      }
      return { gap: spacerValue(num, spacer) }
    },
  ], [
    /^gr-(\d+)$/,
    ([, n]) => {
      const num = Number.parseInt(n)
      if (num > steps) {
        return
      }
      return { 'row-gap': spacerValue(num, spacer) }
    },
  ], [
    /^gc-(\d+)$/,
    ([, n]) => {
      const num = Number.parseInt(n)
      if (num > steps) {
        return
      }
      return { 'column-gap': spacerValue(num, spacer) }
    },
  ]]

  // Gap utilities: ga-{0-16}, gr-{0-16}, gc-{0-16}

  // Margin utilities
  // Standard directions: ma, mt, mr, mb, ml, mx, my
  for (const [dir, suffixes] of Object.entries(directions)) {
    const prop = suffixes[0] === '' ? 'margin' : suffixes.map(s => `margin${s}`)

    rules.push(
      // Positive values: m{dir}-{0-16}
      [
        new RegExp(String.raw`^m${dir}-(\d+)$`),
        ([, n]) => {
          const num = Number.parseInt(n)
          if (num > steps) {
            return
          }
          const value = spacerValue(num, spacer)
          if (Array.isArray(prop)) {
            return Object.fromEntries(prop.map(p => [p, value]))
          }
          return { [prop]: value }
        },
      ],
      // Negative values: m{dir}-n{1-16}
      [
        new RegExp(String.raw`^m${dir}-n(\d+)$`),
        ([, n]) => {
          const num = Number.parseInt(n)
          if (num < 1 || num > steps) {
            return
          }
          const value = `-${spacerValue(num, spacer)}`
          if (Array.isArray(prop)) {
            return Object.fromEntries(prop.map(p => [p, value]))
          }
          return { [prop]: value }
        },
      ],
      // Auto value: m{dir}-auto
      [
        new RegExp(`^m${dir}-auto$`),
        () => {
          if (Array.isArray(prop)) {
            return Object.fromEntries(prop.map(p => [p, 'auto']))
          }
          return { [prop]: 'auto' }
        },
      ],
    )
  }

  // Padding utilities
  // Standard directions: pa, pt, pr, pb, pl, px, py
  for (const [dir, suffixes] of Object.entries(directions)) {
    const prop = suffixes[0] === '' ? 'padding' : suffixes.map(s => `padding${s}`)

    rules.push([
      new RegExp(String.raw`^p${dir}-(\d+)$`),
      ([, n]) => {
        const num = Number.parseInt(n)
        if (num > steps) {
          return
        }
        const value = spacerValue(num, spacer)
        if (Array.isArray(prop)) {
          return Object.fromEntries(prop.map(p => [p, value]))
        }
        return { [prop]: value }
      },
    ])
  }

  return rules
}
