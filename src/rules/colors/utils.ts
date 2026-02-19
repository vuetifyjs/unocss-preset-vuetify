export type RGB = { r: number, g: number, b: number, a?: number }

export function padEnd (str: string, length: number, char = '0') {
  return str + char.repeat(Math.max(0, length - str.length))
}

export function chunk (str: string, size = 1) {
  const chunked: string[] = []
  let index = 0
  while (index < str.length) {
    chunked.push(str.slice(index, size))
    index += size
  }
  return chunked
}

export function parseHex (hex: string): string {
  if (hex.startsWith('#')) {
    hex = hex.slice(1)
  }

  hex = hex.replace(/([^0-9a-f])/gi, 'F')

  if (hex.length === 3 || hex.length === 4) {
    hex = hex.split('').map(x => x + x).join('')
  }

  if (hex.length !== 6) {
    hex = padEnd(padEnd(hex, 6), 8, 'F')
  }

  return hex
}

export function HexToRGB (hex: string): RGB {
  hex = parseHex(hex)
  let [r, g, b, a] = chunk(hex, 2).map((c: string) => Number.parseInt(c, 16))
  a = a === undefined ? a : (a / 255)

  return { r, g, b, a }
}

export function parseColor (color: string | number): RGB {
  if (typeof color === 'number') {
    if (Number.isNaN(color) || color < 0 || color > 0xFF_FF_FF) { // int can't have opacity
      console.warn(`'${color}' is not a valid hex color`)
    }

    return {
      r: (color & 0xFF_00_00) >> 16,
      g: (color & 0xFF_00) >> 8,
      b: (color & 0xFF),
    }
  } else if (typeof color === 'string' && color.startsWith('#')) {
    let hex = color.slice(1)

    if ([3, 4].includes(hex.length)) {
      hex = hex.split('').map(char => char + char).join('')
    } else if (![6, 8].includes(hex.length)) {
      console.warn(`'${color}' is not a valid hex(a) color`)
    }

    const int = Number.parseInt(hex, 16)
    if (Number.isNaN(int) || int < 0 || int > 0xFF_FF_FF_FF) {
      console.warn(`'${color}' is not a valid hex(a) color`)
    }

    return HexToRGB(hex)
  }

  throw new TypeError(`Invalid color: ${color == null ? color : (String(color) || (color as any).constructor.name)}\nExpected #hex or number`)
}
