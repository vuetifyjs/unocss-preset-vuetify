import type { Rule } from 'unocss'
import type { PresetVuetifyOptions } from '../theme'
import { borderRules } from './borders'
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
  return [
    ...spacingRules(options),
    ...displayRules(),
    ...flexRules(),
    ...typographyRules(),
    ...borderRules(),
    ...sizingRules(),
    ...positionRules(),
    ...overflowRules(),
    ...floatRules(),
    ...opacityRules(),
    ...cursorRules(),
    ...elevationRules(),
    ...pointerEventsRules(),
  ]
}
