import type { Rule } from 'unocss'

const COLS = 12

function colPercent (n: number): string {
  return `${+(n / COLS * 100).toFixed(10)}%`
}

export function gridRules (): Rule[] {
  const rules: Rule[] = []

  // Shared base props that every col class receives
  const base = { width: '100%', padding: '12px' }

  // .v-col — fluid (flex-grow)
  rules.push(['v-col', { ...base, 'flex-basis': '0', 'flex-grow': '1', 'max-width': '100%' }], ['v-col-auto', { ...base, 'flex': '0 0 auto', 'width': 'auto', 'max-width': '100%' }])

  // .v-col-{1-12}
  for (let n = 1; n <= COLS; n++) {
    const pct = colPercent(n)
    rules.push([`v-col-${n}`, { ...base, 'flex': `0 0 ${pct}`, 'max-width': pct }])
  }

  // .offset-{1-11} — margin-inline-start, no offset-0 at base (matches Vuetify)
  for (let n = 1; n < COLS; n++) {
    rules.push([`offset-${n}`, { 'margin-inline-start': colPercent(n) }])
  }

  return rules
}
