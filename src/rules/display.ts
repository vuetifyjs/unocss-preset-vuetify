import type { Rule } from 'unocss'

const displayValues = [
  'none',
  'inline',
  'inline-block',
  'block',
  'table',
  'table-row',
  'table-cell',
  'flex',
  'inline-flex',
]

export function displayRules (): Rule[] {
  const rules: Rule[] = []

  // Standard display: d-{value}
  for (const value of displayValues) {
    rules.push([`d-${value}`, { display: value }])
  }

  // Print display: d-print-{value}
  for (const value of displayValues) {
    rules.push([
      `d-print-${value}`,
      { display: value },
      { layer: 'utilities', custom: { print: true } },
    ])
  }

  // Screen reader utilities
  rules.push([
    'd-sr-only',
    {
      'position': 'absolute',
      'width': '1px',
      'height': '1px',
      'padding': '0',
      'margin': '-1px',
      'overflow': 'hidden',
      'clip': 'rect(0, 0, 0, 0)',
      'white-space': 'nowrap',
      'border': '0',
    },
  ], [
    'd-sr-only-focusable',
    {
      'position': 'absolute',
      'width': '1px',
      'height': '1px',
      'padding': '0',
      'margin': '-1px',
      'overflow': 'hidden',
      'clip': 'rect(0, 0, 0, 0)',
      'white-space': 'nowrap',
      'border': '0',
    },
    { custom: { focusable: true } },
  ])

  return rules
}
