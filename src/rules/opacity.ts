import type { Rule } from 'unocss'

export function opacityRules (): Rule[] {
  const rules: Rule[] = []

  // Standard opacity: opacity-{0|10|20|...|100}
  for (let i = 0; i <= 100; i += 10) {
    rules.push([`opacity-${i}`, { opacity: String(i / 100) }])
  }

  return rules
}
