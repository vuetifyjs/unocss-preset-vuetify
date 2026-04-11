import type { Rule } from 'unocss'
import type { PresetVuetifyOptions } from '../theme'
import { borderRules } from './borders'
import { colorRules } from './colors'
import { cursorRules } from './cursor'
import { displayRules } from './display'
import { elevationRules } from './elevation'
import { flexRules } from './flex'
import { floatRules } from './float'
import { opacityRules } from './opacity'
import { overflowRules } from './overflow'
import { pointerEventsRules } from './pointer-events'
import { positionRules } from './position'
import { sizingRules } from './sizing'
import { spacingRules } from './spacing'
import { typographyRules } from './typography'

export function createRules (options: PresetVuetifyOptions): Rule[] {
  const exclude = new Set(options.exclude)

  return [
    ...(exclude.has('spacing') ? [] : spacingRules(options)),
    ...(exclude.has('display') ? [] : displayRules()),
    ...(exclude.has('flex') ? [] : flexRules()),
    ...(exclude.has('typography') ? [] : typographyRules(options.typography)),
    ...(exclude.has('borders') ? [] : borderRules()),
    ...(exclude.has('sizing') ? [] : sizingRules()),
    ...(exclude.has('position') ? [] : positionRules()),
    ...(exclude.has('overflow') ? [] : overflowRules()),
    ...(exclude.has('float') ? [] : floatRules()),
    ...(exclude.has('opacity') ? [] : opacityRules()),
    ...(exclude.has('cursor') ? [] : cursorRules()),
    ...(exclude.has('elevation') ? [] : elevationRules(options.elevation)),
    ...(exclude.has('pointerEvents') ? [] : pointerEventsRules()),
    ...(exclude.has('colors') ? [] : colorRules()),
  ]
    .map(([key, styles, options]) => [key, styles, options ?? { layer: 'utilities' }] as Rule)
}
