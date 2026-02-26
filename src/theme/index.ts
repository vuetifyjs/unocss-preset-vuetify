import type { ElevationOptions } from '../rules/elevation'
import type { TypographyOptions } from '../rules/typography'

/* eslint-disable unicorn/numeric-separators-style */
export const defaultBreakpoints = {
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px',
  xxl: '2560px',
}

export const defaultSpacer = 4
export const defaultSpacerSteps = 16

export const fontWeights = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 900,
}

export const borderRadii = {
  '0': '0',
  'sm': '2px',
  '': '4px',
  'lg': '8px',
  'xl': '24px',
  'pill': '9999px',
  'circle': '50%',
  'shaped': '24px 0',
}

type TypographyPreset = Record<string, Record<string, string | number>>
export const typographyPresets: { md2: TypographyPreset, md3: TypographyPreset } = {
  md2: {
    h1: { fontFamily: 'var(--v-font-heading)', fontSize: '6rem', fontWeight: 300, lineHeight: 1.167, letterSpacing: '-0.015625em' },
    h2: { fontFamily: 'var(--v-font-heading)', fontSize: '3.75rem', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.0083333333em' },
    h3: { fontFamily: 'var(--v-font-heading)', fontSize: '3rem', fontWeight: 400, lineHeight: 1.167, letterSpacing: 'normal' },
    h4: { fontFamily: 'var(--v-font-heading)', fontSize: '2.125rem', fontWeight: 400, lineHeight: 1.235, letterSpacing: '0.0073529412em' },
    h5: { fontFamily: 'var(--v-font-heading)', fontSize: '1.5rem', fontWeight: 400, lineHeight: 1.334, letterSpacing: 'normal' },
    h6: { fontFamily: 'var(--v-font-heading)', fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.6, letterSpacing: '0.0125em' },
    subtitle1: { fontFamily: 'var(--v-font-body)', fontSize: '1rem', fontWeight: 400, lineHeight: 1.75, letterSpacing: '0.009375em' },
    subtitle2: { fontFamily: 'var(--v-font-body)', fontSize: '0.875rem', fontWeight: 500, lineHeight: 1.57, letterSpacing: '0.0071428571em' },
    body1: { fontFamily: 'var(--v-font-body)', fontSize: '1rem', fontWeight: 400, lineHeight: 1.5, letterSpacing: '0.03125em' },
    body2: { fontFamily: 'var(--v-font-body)', fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.43, letterSpacing: '0.0178571429em' },
    button: { fontFamily: 'var(--v-font-body)', fontSize: '0.875rem', fontWeight: 500, lineHeight: 1.75, letterSpacing: '0.0892857143em', textTransform: 'uppercase' },
    caption: { fontFamily: 'var(--v-font-body)', fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.66, letterSpacing: '0.0333333333em' },
    overline: { fontFamily: 'var(--v-font-body)', fontSize: '0.75rem', fontWeight: 500, lineHeight: 2.66, letterSpacing: '0.1666666667em', textTransform: 'uppercase' },
  },
  md3: {
    'display-large': { fontFamily: 'var(--v-font-heading)', fontSize: '3.5625rem', fontWeight: 400, lineHeight: 1.1228070175, letterSpacing: '-0.0043859649em' },
    'display-medium': { fontFamily: 'var(--v-font-heading)', fontSize: '2.8125rem', fontWeight: 400, lineHeight: 1.1555555556, letterSpacing: 'normal' },
    'display-small': { fontFamily: 'var(--v-font-heading)', fontSize: '2.25rem', fontWeight: 400, lineHeight: 1.2222222222, letterSpacing: 'normal' },
    'headline-large': { fontFamily: 'var(--v-font-heading)', fontSize: '2rem', fontWeight: 400, lineHeight: 1.25, letterSpacing: 'normal' },
    'headline-medium': { fontFamily: 'var(--v-font-heading)', fontSize: '1.75rem', fontWeight: 400, lineHeight: 1.2857142857, letterSpacing: 'normal' },
    'headline-small': { fontFamily: 'var(--v-font-heading)', fontSize: '1.5rem', fontWeight: 400, lineHeight: 1.3333333333, letterSpacing: 'normal' },
    'title-large': { fontFamily: 'var(--v-font-heading)', fontSize: '1.375rem', fontWeight: 400, lineHeight: 1.2727272727, letterSpacing: 'normal' },
    'title-medium': { fontFamily: 'var(--v-font-body)', fontSize: '1rem', fontWeight: 500, lineHeight: 1.5, letterSpacing: '0.009375em' },
    'title-small': { fontFamily: 'var(--v-font-body)', fontSize: '0.875rem', fontWeight: 500, lineHeight: 1.4285714286, letterSpacing: '0.0071428571em' },
    'body-large': { fontFamily: 'var(--v-font-body)', fontSize: '1rem', fontWeight: 400, lineHeight: 1.5, letterSpacing: '0.03125em' },
    'body-medium': { fontFamily: 'var(--v-font-body)', fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.4285714286, letterSpacing: '0.0178571429em' },
    'body-small': { fontFamily: 'var(--v-font-body)', fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.3333333333, letterSpacing: '0.0333333333em' },
    'label-large': { fontFamily: 'var(--v-font-body)', fontSize: '0.875rem', fontWeight: 500, lineHeight: 1.4285714286, letterSpacing: '0.0071428571em' },
    'label-medium': { fontFamily: 'var(--v-font-body)', fontSize: '0.75rem', fontWeight: 500, lineHeight: 1.3333333333, letterSpacing: '0.0416666667em' },
    'label-small': { fontFamily: 'var(--v-font-body)', fontSize: '0.6875rem', fontWeight: 500, lineHeight: 1.4545454545, letterSpacing: '0.0454545455em' },
  },
}

const elevationOverlayStep = 2 // %

type ElevationPreset = Record<string, Record<string, string>>
export const elevationPresets: { md2: ElevationPreset, md3: ElevationPreset } = {
  md2: Object.fromEntries([
    '0px  0px  0px  0px [1], 0px  0px  0px 0px [2], 0px 0px  0px 0px [3]',
    '0px  2px  1px -1px [1], 0px  1px  1px 0px [2], 0px 1px  3px 0px [3]',
    '0px  3px  1px -2px [1], 0px  2px  2px 0px [2], 0px 1px  5px 0px [3]',
    '0px  3px  3px -2px [1], 0px  3px  4px 0px [2], 0px 1px  8px 0px [3]',
    '0px  2px  4px -1px [1], 0px  4px  5px 0px [2], 0px 1px 10px 0px [3]',
    '0px  3px  5px -1px [1], 0px  5px  8px 0px [2], 0px 1px 14px 0px [3]',
    '0px  3px  5px -1px [1], 0px  6px 10px 0px [2], 0px 1px 18px 0px [3]',
    '0px  4px  5px -2px [1], 0px  7px 10px 1px [2], 0px 2px 16px 1px [3]',
    '0px  5px  5px -3px [1], 0px  8px 10px 1px [2], 0px 3px 14px 2px [3]',
    '0px  5px  6px -3px [1], 0px  9px 12px 1px [2], 0px 3px 16px 2px [3]',
    '0px  6px  6px -3px [1], 0px 10px 14px 1px [2], 0px 4px 18px 3px [3]',
    '0px  6px  7px -4px [1], 0px 11px 15px 1px [2], 0px 4px 20px 3px [3]',
    '0px  7px  8px -4px [1], 0px 12px 17px 2px [2], 0px 5px 22px 4px [3]',
    '0px  7px  8px -4px [1], 0px 13px 19px 2px [2], 0px 5px 24px 4px [3]',
    '0px  7px  9px -4px [1], 0px 14px 21px 2px [2], 0px 5px 26px 4px [3]',
    '0px  8px  9px -5px [1], 0px 15px 22px 2px [2], 0px 6px 28px 5px [3]',
    '0px  8px 10px -5px [1], 0px 16px 24px 2px [2], 0px 6px 30px 5px [3]',
    '0px  8px 11px -5px [1], 0px 17px 26px 2px [2], 0px 6px 32px 5px [3]',
    '0px  9px 11px -5px [1], 0px 18px 28px 2px [2], 0px 7px 34px 6px [3]',
    '0px  9px 12px -6px [1], 0px 19px 29px 2px [2], 0px 7px 36px 6px [3]',
    '0px 10px 13px -6px [1], 0px 20px 31px 3px [2], 0px 8px 38px 7px [3]',
    '0px 10px 13px -6px [1], 0px 21px 33px 3px [2], 0px 8px 40px 7px [3]',
    '0px 10px 14px -6px [1], 0px 22px 35px 3px [2], 0px 8px 42px 7px [3]',
    '0px 11px 14px -7px [1], 0px 23px 36px 3px [2], 0px 9px 44px 8px [3]',
    '0px 11px 15px -7px [1], 0px 24px 38px 3px [2], 0px 9px 46px 8px [3]',
  ]
    .map(line => line
      .replace('[1]', 'var(--v-shadow-key-umbra-opacity,    rgba(0, 0, 0, 0.2 ))')
      .replace('[2]', 'var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14))')
      .replace('[3]', 'var(--v-shadow-key-ambient-opacity,  rgba(0, 0, 0, 0.12))'),
    )
    .map((line, i) => [String(i), { 'box-shadow': line }]),
  ),
  md3: Object.fromEntries([
    '0px 0px 0px 0px [1], 0px 0px  0px 0px [2]',
    '0px 1px 2px 0px [1], 0px 1px  3px 1px [2]',
    '0px 1px 2px 0px [1], 0px 2px  6px 2px [2]',
    '0px 1px 3px 0px [1], 0px 4px  8px 3px [2]',
    '0px 2px 3px 0px [1], 0px 6px 10px 4px [2]',
    '0px 4px 4px 0px [1], 0px 8px 12px 6px [2]',
  ]
    .map(line => line
      .replace('[1]', 'rgba(var(--v-shadow-color), var(--v-shadow-key-opacity,     0.3 ))')
      .replace('[2]', 'rgba(var(--v-shadow-color), var(--v-shadow-ambient-opacity, 0.15))'),
    )
    .map((line, i) => [String(i), {
      'box-shadow': line,
      '--v-elevation-overlay': `color-mix(in srgb, var(--v-elevation-overlay-color, #000) ${i * elevationOverlayStep}%, transparent)`,
    }]),
  ),
}

export type RuleGroup
  = | 'borders'
    | 'grid'
    | 'colors'
    | 'cursor'
    | 'display'
    | 'elevation'
    | 'flex'
    | 'float'
    | 'opacity'
    | 'overflow'
    | 'pointerEvents'
    | 'position'
    | 'sizing'
    | 'spacing'
    | 'typography'

export interface PresetVuetifyOptions {
  prefix?: string
  spacer?: number
  spacerSteps?: number
  typography?: TypographyOptions
  elevation?: ElevationOptions
  breakpoints?: Record<string, string>
  important?: boolean
  font?: Record<string, string>
  themes?: string[]
  /** Rule groups to exclude from the preset */
  exclude?: RuleGroup[]
}
