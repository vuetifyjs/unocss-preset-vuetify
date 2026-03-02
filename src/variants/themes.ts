import type { Variant } from 'unocss'

export function createThemeVariants (themes: string[], options?: { order: number }): Variant[] {
  return themes
    .map(theme => ({
      order: options ? options.order : -1,
      name: `vuetify-theme-${theme}`,
      match (matcher: string) {
        const prefix = `${theme}:`
        if (!matcher.startsWith(prefix)) {
          return
        }
        return {
          matcher: matcher.slice(prefix.length),
          handle: (input, next) => next({
            ...input,
            parent: `.v-theme--${theme}${input.parent ? ` $$ ${input.parent}` : ''}`,
          }),
        }
      },
    }))
}
