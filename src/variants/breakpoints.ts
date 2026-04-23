import type { Rule, Variant } from 'unocss'
import type { PresetVuetifyOptions } from '../theme'
import { defaultBreakpoints } from '../theme'

export function breakpointVariants (options: PresetVuetifyOptions, rules: Rule[]): Variant[] {
  const breakpoints = options.breakpoints ?? defaultBreakpoints
  const variants: Variant[] = []

  const matchers = rules.map(rule => rule[0])
  const staticRuleNames = new Set<string>(matchers.filter(key => typeof key === 'string'))
  const dynamicRulePatterns: RegExp[] = matchers.filter(key => key instanceof RegExp)

  function isVuetifyRule (name: string) {
    return staticRuleNames.has(name)
      || dynamicRulePatterns.some(pattern => pattern.test(name))
  }

  for (const [name, minWidth] of Object.entries(breakpoints)) {
    variants.push({
      name: `vuetify-${name}`,
      match (matcher) {
        // Skip if the full class is itself a registered static rule.
        // This prevents e.g. `rounded-xl` from being treated as `rounded` at
        // the `xl` breakpoint, since `xl` is both a breakpoint and a radius size.
        if (staticRuleNames.has(matcher)) {
          return
        }

        const regex = new RegExp(`^(.+)-${name}$`)
        const match = matcher.match(regex)
        if (!match) {
          return
        }

        // Only apply the breakpoint variant when the base is a Vuetify rule.
        // Otherwise classes like `text-lg` / `text-xl` from other presets would
        // be stripped to `text` and fail to resolve.
        if (!isVuetifyRule(match[1])) {
          return
        }

        return {
          matcher: match[1],
          handle: (input, next) => next({
            ...input,
            parent: `${input.parent ? `${input.parent} $$ ` : ''}@media (min-width: ${minWidth})`,
          }),
        }
      },
      order: 1000,
      multiPass: true,
    })
  }

  return variants
}
