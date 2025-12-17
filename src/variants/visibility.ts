import type { Variant } from 'unocss'
import type { PresetVuetifyOptions } from '../theme'
import { defaultBreakpoints } from '../theme'

export function visibilityVariants (options: PresetVuetifyOptions): Variant[] {
  const breakpoints = options.breakpoints ?? defaultBreakpoints
  const breakpointEntries = Object.entries(breakpoints)
  const variants: Variant[] = []

  // hidden-{breakpoint}-only: hidden at exactly that breakpoint
  for (const [index, [name, min]] of breakpointEntries.entries()) {
    const max = breakpointEntries[index + 1]?.[1]

    variants.push({
      name: `vuetify-hidden-${name}-only`,
      match (matcher) {
        if (matcher !== `hidden-${name}-only`) {
          return
        }

        const mediaQuery = max
          ? `(min-width: ${min}) and (max-width: ${Number.parseFloat(max) - 0.02}px)`
          : `(min-width: ${min})`

        return {
          matcher: 'd-none',
          handle: (input, next) => next({
            ...input,
            parent: `${input.parent ? `${input.parent} $$ ` : ''}@media ${mediaQuery}`,
          }),
        }
      },
      order: 100,
    })
  }

  // hidden-{breakpoint}-and-down: hidden at breakpoint and below
  for (const [index, [name]] of breakpointEntries.entries()) {
    const max = breakpointEntries[index + 1]?.[1]

    variants.push({
      name: `vuetify-hidden-${name}-and-down`,
      match (matcher) {
        if (matcher !== `hidden-${name}-and-down`) {
          return
        }

        if (max) {
          return {
            matcher: 'd-none',
            handle: (input, next) => next({
              ...input,
              parent: `${input.parent ? `${input.parent} $$ ` : ''}@media (max-width: ${Number.parseFloat(max) - 0.02}px)`,
            }),
          }
        }

        // Last breakpoint - always applies
        return { matcher: 'd-none' }
      },
      order: 100,
    })
  }

  // hidden-{breakpoint}-and-up: hidden at breakpoint and above
  for (const [name, min] of breakpointEntries) {
    variants.push({
      name: `vuetify-hidden-${name}-and-up`,
      match (matcher) {
        if (matcher !== `hidden-${name}-and-up`) {
          return
        }

        return {
          matcher: 'd-none',
          handle: (input, next) => next({
            ...input,
            parent: `${input.parent ? `${input.parent} $$ ` : ''}@media (min-width: ${min})`,
          }),
        }
      },
      order: 100,
    })
  }

  // hidden-screen-only and hidden-print-only
  variants.push(
    {
      name: 'vuetify-hidden-screen-only',
      match (matcher) {
        if (matcher !== 'hidden-screen-only') {
          return
        }

        return {
          matcher: 'd-none',
          handle: (input, next) => next({
            ...input,
            parent: `${input.parent ? `${input.parent} $$ ` : ''}@media screen`,
          }),
        }
      },
      order: 100,
    },
    {
      name: 'vuetify-hidden-print-only',
      match (matcher) {
        if (matcher !== 'hidden-print-only') {
          return
        }

        return {
          matcher: 'd-none',
          handle: (input, next) => next({
            ...input,
            parent: `${input.parent ? `${input.parent} $$ ` : ''}@media print`,
          }),
        }
      },
      order: 100,
    },
  )

  return variants
}
