# unocss-preset-vuetify

UnoCSS preset that replicates [Vuetify](https://vuetifyjs.com) utility classes.

## Installation

```bash
pnpm add -D unocss-preset-vuetify unocss
```

## Usage

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetVuetify } from 'unocss-preset-vuetify'

export default defineConfig({
  presets: [
    presetVuetify(),
  ],
})
```

## Features

This preset provides Vuetify-style utility classes:

### Spacing
- Margin: `ma-4`, `mt-2`, `mx-auto`, `ms-4` (RTL-aware)
- Padding: `pa-4`, `pt-2`, `px-4`, `ps-4` (RTL-aware)
- Gap: `ga-4`, `gr-2`, `gc-4`
- Negative margins: `ma-n4`, `mt-n2`

### Display
- `d-flex`, `d-block`, `d-none`, `d-inline-flex`
- Print: `d-print-none`, `d-print-flex`
- Screen reader: `d-sr-only`, `d-sr-only-focusable`

### Flexbox
- Direction: `flex-row`, `flex-column`, `flex-row-reverse`
- Wrap: `flex-wrap`, `flex-nowrap`
- Grow/Shrink: `flex-grow-1`, `flex-shrink-0`
- Shortcuts: `flex-fill`, `flex-1-1`, `flex-1-0`

### Alignment
- Justify: `justify-center`, `justify-space-between`
- Align: `align-center`, `align-start`
- Align self: `align-self-center`

### Typography
- Headings: `text-h1` through `text-h6`
- Body: `text-body-1`, `text-body-2`
- Subtitles: `text-subtitle-1`, `text-subtitle-2`
- Other: `text-caption`, `text-overline`, `text-button`
- Alignment: `text-left`, `text-center`, `text-start` (RTL-aware)
- Transform: `text-uppercase`, `text-capitalize`
- Decoration: `text-decoration-none`, `text-decoration-underline`
- Overflow: `text-truncate`, `text-no-wrap`
- Weight: `font-weight-bold`, `font-weight-medium`

### Borders
- Width: `border`, `border-thin`, `border-sm`, `border-md`
- Directional: `border-t`, `border-b`, `border-s` (RTL-aware)
- Radius: `rounded`, `rounded-lg`, `rounded-pill`, `rounded-circle`
- Style: `border-solid`, `border-dashed`

### Sizing
- Height: `h-100`, `h-screen`, `h-auto`
- Width: `w-100`, `w-50`, `w-auto`
- Fill: `fill-height`

### Position
- `position-relative`, `position-absolute`, `position-fixed`
- `top-0`, `right-0`, `bottom-0`, `left-0`

### Other
- Elevation: `elevation-0` through `elevation-24`
- Opacity: `opacity-0` through `opacity-100`
- Overflow: `overflow-hidden`, `overflow-auto`
- Cursor: `cursor-pointer`, `cursor-not-allowed`
- Float: `float-left`, `float-start` (RTL-aware)
- Pointer events: `pointer-events-none`

### Responsive

All utilities support responsive breakpoints:

- `sm` (600px)
- `md` (960px)
- `lg` (1280px)
- `xl` (1920px)
- `xxl` (2560px)

```html
<div class="d-none d-md-flex ma-4 ma-lg-8">
  Hidden on mobile, flex on md+, more margin on lg+
</div>
```

## Configuration

```ts
presetVuetify({
  // Base spacer unit (default: 4)
  spacer: 4,

  // Number of spacer steps, generates 0-N (default: 16)
  spacerSteps: 16,

  // Custom breakpoints
  breakpoints: {
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
    xxl: '2560px',
  },
})
```

## RTL Support

Directional utilities (`ms-*`, `me-*`, `ps-*`, `pe-*`, `text-start`, `text-end`, `float-start`, `float-end`, `rounded-s`, `rounded-e`) use CSS logical properties for automatic RTL support.

## License

[MIT](./LICENSE.md)

## Links

- [Vuetify](https://vuetifyjs.com)
- [UnoCSS](https://unocss.dev)
