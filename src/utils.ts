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
