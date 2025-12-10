import type { Variant } from 'unocss'
import type { PresetVuetifyOptions } from '../theme'
import { defaultBreakpoints } from '../theme'

export function breakpointVariants (options: PresetVuetifyOptions): Variant[] {
  const breakpoints = options.breakpoints ?? defaultBreakpoints
  const variants: Variant[] = []

  for (const [name, minWidth] of Object.entries(breakpoints)) {
    variants.push({
      name: `vuetify-${name}`,
      match (matcher) {
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
