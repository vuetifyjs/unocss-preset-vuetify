import type { PresetVuetifyOptions } from '.'

export function preflights (options: PresetVuetifyOptions) {
  if (!options.font) {
    return undefined
  }

  return [
    {
      layer: 'typography',
      getCSS () {
        if (options.font) {
          const variables = Object.entries(options.font)
            .map(([key, value]) => `--v-font-${key}: ${value};`)
            .join('\n')

          return `:root {\n${variables}\n}`
        } else {
          return ''
        }
      },
    },
  ]
}
