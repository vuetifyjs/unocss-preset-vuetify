import type { CSSObject } from 'unocss'

export function spacerValue (n: number, spacer: number): string {
  return `${n * spacer}px`
}

export function withImportant (css: CSSObject, important: boolean): CSSObject {
  if (!important) {
    return css
  }
  const result: CSSObject = {}
  for (const [key, value] of Object.entries(css)) {
    result[key] = `${value} !important`
  }
  return result
}

export const directions: Record<string, string[]> = {
  a: [''],
  t: ['-top'],
  b: ['-bottom'],
  l: ['-left'],
  r: ['-right'],
  x: ['-left', '-right'],
  y: ['-top', '-bottom'],
}

export function kebabCase (str: string) {
  return (str ?? '')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .trim()
    .split(/\s+/)
    .map(p => p.toLowerCase())
    .join('-')
}
