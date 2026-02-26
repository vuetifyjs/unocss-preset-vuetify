import type { Variant } from 'unocss'

export function createThemeVariants (...themes: string[]): Variant[] {
  return themes
    .map(theme => ({
      name: `vuetify-theme-${theme}`,
      match (matcher: string) {
        const prefix = `${theme}:`
        if (!matcher.startsWith(prefix)) {
          return
        }
        return {
          matcher: matcher.slice(prefix.length),
          selector: (s: string) => `.v-theme--${theme} ${s}`,
        }
      },
    }))
}
