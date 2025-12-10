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

export const typography = {
  h1: {
    fontSize: '6rem',
    fontWeight: 300,
    lineHeight: 1.167,
    letterSpacing: '-0.015625em',
  },
  h2: {
    fontSize: '3.75rem',
    fontWeight: 300,
    lineHeight: 1.2,
    letterSpacing: '-0.0083333333em',
  },
  h3: {
    fontSize: '3rem',
    fontWeight: 400,
    lineHeight: 1.167,
    letterSpacing: 'normal',
  },
  h4: {
    fontSize: '2.125rem',
    fontWeight: 400,
    lineHeight: 1.235,
    letterSpacing: '0.0073529412em',
  },
  h5: {
    fontSize: '1.5rem',
    fontWeight: 400,
    lineHeight: 1.334,
    letterSpacing: 'normal',
  },
  h6: {
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.0125em',
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.75,
    letterSpacing: '0.009375em',
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.57,
    letterSpacing: '0.0071428571em',
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.03125em',
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.43,
    letterSpacing: '0.0178571429em',
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.75,
    letterSpacing: '0.0892857143em',
    textTransform: 'uppercase',
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.66,
    letterSpacing: '0.0333333333em',
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 2.66,
    letterSpacing: '0.1666666667em',
    textTransform: 'uppercase',
  },
}

export const elevations: string[] = [
  'none',
  '0px 2px 1px -1px rgba(0,0,0,.2), 0px 1px 1px 0px rgba(0,0,0,.14), 0px 1px 3px 0px rgba(0,0,0,.12)',
  '0px 3px 1px -2px rgba(0,0,0,.2), 0px 2px 2px 0px rgba(0,0,0,.14), 0px 1px 5px 0px rgba(0,0,0,.12)',
  '0px 3px 3px -2px rgba(0,0,0,.2), 0px 3px 4px 0px rgba(0,0,0,.14), 0px 1px 8px 0px rgba(0,0,0,.12)',
  '0px 2px 4px -1px rgba(0,0,0,.2), 0px 4px 5px 0px rgba(0,0,0,.14), 0px 1px 10px 0px rgba(0,0,0,.12)',
  '0px 3px 5px -1px rgba(0,0,0,.2), 0px 5px 8px 0px rgba(0,0,0,.14), 0px 1px 14px 0px rgba(0,0,0,.12)',
  '0px 3px 5px -1px rgba(0,0,0,.2), 0px 6px 10px 0px rgba(0,0,0,.14), 0px 1px 18px 0px rgba(0,0,0,.12)',
  '0px 4px 5px -2px rgba(0,0,0,.2), 0px 7px 10px 1px rgba(0,0,0,.14), 0px 2px 16px 1px rgba(0,0,0,.12)',
  '0px 5px 5px -3px rgba(0,0,0,.2), 0px 8px 10px 1px rgba(0,0,0,.14), 0px 3px 14px 2px rgba(0,0,0,.12)',
  '0px 5px 6px -3px rgba(0,0,0,.2), 0px 9px 12px 1px rgba(0,0,0,.14), 0px 3px 16px 2px rgba(0,0,0,.12)',
  '0px 6px 6px -3px rgba(0,0,0,.2), 0px 10px 14px 1px rgba(0,0,0,.14), 0px 4px 18px 3px rgba(0,0,0,.12)',
  '0px 6px 7px -4px rgba(0,0,0,.2), 0px 11px 15px 1px rgba(0,0,0,.14), 0px 4px 20px 3px rgba(0,0,0,.12)',
  '0px 7px 8px -4px rgba(0,0,0,.2), 0px 12px 17px 2px rgba(0,0,0,.14), 0px 5px 22px 4px rgba(0,0,0,.12)',
  '0px 7px 8px -4px rgba(0,0,0,.2), 0px 13px 19px 2px rgba(0,0,0,.14), 0px 5px 24px 4px rgba(0,0,0,.12)',
  '0px 7px 9px -4px rgba(0,0,0,.2), 0px 14px 21px 2px rgba(0,0,0,.14), 0px 5px 26px 4px rgba(0,0,0,.12)',
  '0px 8px 9px -5px rgba(0,0,0,.2), 0px 15px 22px 2px rgba(0,0,0,.14), 0px 6px 28px 5px rgba(0,0,0,.12)',
  '0px 8px 10px -5px rgba(0,0,0,.2), 0px 16px 24px 2px rgba(0,0,0,.14), 0px 6px 30px 5px rgba(0,0,0,.12)',
  '0px 8px 11px -5px rgba(0,0,0,.2), 0px 17px 26px 2px rgba(0,0,0,.14), 0px 6px 32px 5px rgba(0,0,0,.12)',
  '0px 9px 11px -5px rgba(0,0,0,.2), 0px 18px 28px 2px rgba(0,0,0,.14), 0px 7px 34px 6px rgba(0,0,0,.12)',
  '0px 9px 12px -6px rgba(0,0,0,.2), 0px 19px 29px 2px rgba(0,0,0,.14), 0px 7px 36px 6px rgba(0,0,0,.12)',
  '0px 10px 13px -6px rgba(0,0,0,.2), 0px 20px 31px 3px rgba(0,0,0,.14), 0px 8px 38px 7px rgba(0,0,0,.12)',
  '0px 10px 13px -6px rgba(0,0,0,.2), 0px 21px 33px 3px rgba(0,0,0,.14), 0px 8px 40px 7px rgba(0,0,0,.12)',
  '0px 10px 14px -6px rgba(0,0,0,.2), 0px 22px 35px 3px rgba(0,0,0,.14), 0px 8px 42px 7px rgba(0,0,0,.12)',
  '0px 11px 14px -7px rgba(0,0,0,.2), 0px 23px 36px 3px rgba(0,0,0,.14), 0px 9px 44px 8px rgba(0,0,0,.12)',
  '0px 11px 15px -7px rgba(0,0,0,.2), 0px 24px 38px 3px rgba(0,0,0,.14), 0px 9px 46px 8px rgba(0,0,0,.12)',
]

export interface PresetVuetifyOptions {
  prefix?: string
  spacer?: number
  spacerSteps?: number
  breakpoints?: Record<string, string>
  important?: boolean
}
