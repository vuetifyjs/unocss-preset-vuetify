import type { Variant } from 'unocss'

export function printVariant (): Variant {
  return {
    name: 'vuetify-print',
    match (matcher) {
      if (!matcher.startsWith('d-print-')) {
        return
      }

      const value = matcher.slice(8) // Remove 'd-print-' prefix
      return {
        matcher: `d-${value}`,
        handle: (input, next) => next({
          ...input,
          parent: `${input.parent ? `${input.parent} $$ ` : ''}@media print`,
        }),
      }
    },
    order: 100,
  }
}
