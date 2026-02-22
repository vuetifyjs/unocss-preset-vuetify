import type { Variant } from 'unocss'
import type { PresetVuetifyOptions } from '../theme'
import { defaultBreakpoints } from '../theme'

export function breakpointVariants (options: PresetVuetifyOptions, staticRuleNames: Set<string>): Variant[] {
  const breakpoints = options.breakpoints ?? defaultBreakpoints
  const variants: Variant[] = []

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
