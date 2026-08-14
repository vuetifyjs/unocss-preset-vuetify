import type { PresetVuetifyOptions } from '../src'
import { createGenerator } from 'unocss'
import { describe, expect, it } from 'vitest'
import { defaultThemeColors, presetVuetify } from '../src'

async function gen (options: PresetVuetifyOptions, classes: string) {
  const uno = await createGenerator({ presets: [presetVuetify(options)] })
  const { css } = await uno.generate(classes, { preflights: false })
  return css
}

describe('borderRadius', () => {
  it('replaces the defaults', async () => {
    const css = await gen(
      { borderRadius: { '': '6px', 'lg': '10px', 'huge': '64px' } },
      'rounded rounded-lg rounded-huge rounded-t-huge rounded-te-huge rounded-lg-md rounded-shaped',
    )

    expect(css).toMatch(/\.rounded\{border-radius:6px/)
    expect(css).toMatch(/\.rounded-lg\{border-radius:10px/)
    expect(css).toMatch(/\.rounded-huge\{border-radius:64px/)
    expect(css).toMatch(/\.rounded-t-huge\{border-top-left-radius:64px;border-top-right-radius:64px/)
    expect(css).toMatch(/\.rounded-te-huge\{border-start-end-radius:64px/)
    expect(css).toMatch(/min-width: 960px\)\{\s*\.rounded-lg-md\{border-radius:10px/)
    expect(css).not.toMatch(/rounded-shaped/)
  })

  it('leaves the responsive reading of a dropped radius named after a breakpoint', async () => {
    const css = await gen({ borderRadius: { '': '6px' } }, 'rounded-xl')

    expect(css).not.toMatch(/border-radius:24px/)
    expect(css).toMatch(/min-width: 1920px\)\{\s*\.rounded-xl\{border-radius:6px/)
  })

  it('keeps the defaults when unset', async () => {
    const css = await gen({}, 'rounded rounded-xl rounded-shaped')

    expect(css).toMatch(/\.rounded\{border-radius:4px/)
    expect(css).toMatch(/\.rounded-xl\{border-radius:24px/)
    expect(css).toMatch(/\.rounded-shaped\{border-radius:24px 0/)
  })
})

describe('themeColors', () => {
  it('extends from the exported defaults', async () => {
    const css = await gen(
      { themeColors: [...defaultThemeColors, 'brand'], themes: ['dark'] },
      'bg-brand text-brand bg-primary dark:bg-brand bg-brand-md',
    )

    expect(css).toMatch(/\.bg-brand\{background-color:rgb\(var\(--v-theme-brand\)\)/)
    expect(css).toMatch(/\.text-brand\{color:rgb\(var\(--v-theme-brand\)\)/)
    expect(css).toMatch(/\.bg-primary\{background-color:rgb\(var\(--v-theme-primary\)\)/)
    expect(css).toMatch(/\.v-theme--dark\{\s*\.dark\\:bg-brand\{background-color:rgb\(var\(--v-theme-brand\)\)/)
    expect(css).toMatch(/min-width: 960px\)\{\s*\.bg-brand-md\{/)
  })

  it('replaces the defaults', async () => {
    const css = await gen({ themeColors: ['brand'] }, 'bg-brand bg-primary')

    expect(css).toMatch(/\.bg-brand\{/)
    expect(css).not.toMatch(/bg-primary/)
  })

  it('keeps the defaults when unset', async () => {
    const css = await gen({}, 'bg-primary text-on-surface')

    expect(css).toMatch(/\.bg-primary\{background-color:rgb\(var\(--v-theme-primary\)\)/)
    expect(css).toMatch(/\.text-on-surface\{color:rgb\(var\(--v-theme-on-surface\)\)/)
  })
})

describe('font', () => {
  it('reaches text-mono', async () => {
    const css = await gen({ font: { mono: 'Fira Code' } }, 'text-mono')

    expect(css).toMatch(/\.text-mono\{font-family:var\(--v-font-mono, monospace\)/)
  })
})
