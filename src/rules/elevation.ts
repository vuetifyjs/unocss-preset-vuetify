import type { Rule } from 'unocss'
import { elevations } from '../theme'

export function elevationRules (): Rule[] {
  const rules: Rule[] = []

  for (let i = 0; i <= 24; i++) {
    rules.push([`elevation-${i}`, { 'box-shadow': elevations[i] }])
  }

  return rules
}
