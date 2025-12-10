import type { Rule } from 'unocss'
import { borderRadii } from '../theme'

const borderWidths: Record<string, string> = {
  0: '0',
  thin: 'thin',
  sm: '1px',
  md: '2px',
  lg: '4px',
  xl: '8px',
}

export function borderRules (): Rule[] {
  const rules: Rule[] = [['border', { 'border-style': 'solid', 'border-width': 'thin' }]]

  // Border width: border, border-0, border-thin, border-sm, etc.
  for (const [name, width] of Object.entries(borderWidths)) {
    rules.push([`border-${name}`, { 'border-width': width }])
  }

  // Directional borders (physical)
  const borderDirections: Record<string, string> = {
    t: 'border-top',
    b: 'border-bottom',
    l: 'border-left',
    r: 'border-right',
  }

  for (const [dir, prop] of Object.entries(borderDirections)) {
    rules.push([`border-${dir}`, { [`${prop}-style`]: 'solid', [`${prop}-width`]: 'thin' }])
    for (const [name, width] of Object.entries(borderWidths)) {
      rules.push([`border-${dir}-${name}`, { [`${prop}-width`]: width }])
    }
  }

  // RTL-aware borders using logical properties: border-s (start), border-e (end)
  rules.push(['border-s', { 'border-inline-start-style': 'solid', 'border-inline-start-width': 'thin' }], ['border-e', { 'border-inline-end-style': 'solid', 'border-inline-end-width': 'thin' }])

  for (const [name, width] of Object.entries(borderWidths)) {
    rules.push([`border-s-${name}`, { 'border-inline-start-width': width }], [`border-e-${name}`, { 'border-inline-end-width': width }])
  }

  // Border style
  const borderStyles = ['solid', 'dashed', 'dotted', 'double', 'none']
  for (const style of borderStyles) {
    rules.push([`border-${style}`, { 'border-style': style }])
  }

  // Border opacity
  for (const opacity of [0, 25, 50, 75, 100]) {
    rules.push([`border-opacity-${opacity}`, { '--v-border-opacity': String(opacity / 100) }])
  }

  // Border current color
  rules.push(['border-current', { 'border-color': 'currentColor' }])

  // Border radius (all corners)
  for (const [name, value] of Object.entries(borderRadii)) {
    const className = name === '' ? 'rounded' : `rounded-${name}`
    rules.push([className, { 'border-radius': value }])
  }

  // Directional border radius (physical)
  const radiusDirections: Record<string, string[]> = {
    t: ['border-top-left-radius', 'border-top-right-radius'],
    b: ['border-bottom-left-radius', 'border-bottom-right-radius'],
    l: ['border-top-left-radius', 'border-bottom-left-radius'],
    r: ['border-top-right-radius', 'border-bottom-right-radius'],
    tl: ['border-top-left-radius'],
    tr: ['border-top-right-radius'],
    bl: ['border-bottom-left-radius'],
    br: ['border-bottom-right-radius'],
  }

  for (const [dir, props] of Object.entries(radiusDirections)) {
    for (const [name, value] of Object.entries(borderRadii)) {
      const className = name === '' ? `rounded-${dir}` : `rounded-${dir}-${name}`
      const css = Object.fromEntries(props.map(p => [p, value]))
      rules.push([className, css])
    }
  }

  // RTL-aware border radius using logical properties
  // s = start, e = end, ts = top-start, te = top-end, bs = bottom-start, be = bottom-end
  const logicalRadiusDirections: Record<string, string[]> = {
    s: ['border-start-start-radius', 'border-end-start-radius'],
    e: ['border-start-end-radius', 'border-end-end-radius'],
    ts: ['border-start-start-radius'],
    te: ['border-start-end-radius'],
    bs: ['border-end-start-radius'],
    be: ['border-end-end-radius'],
  }

  for (const [dir, props] of Object.entries(logicalRadiusDirections)) {
    for (const [name, value] of Object.entries(borderRadii)) {
      const className = name === '' ? `rounded-${dir}` : `rounded-${dir}-${name}`
      const css = Object.fromEntries(props.map(p => [p, value]))
      rules.push([className, css])
    }
  }

  return rules
}
