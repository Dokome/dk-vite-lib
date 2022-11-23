import Unocss from 'unocss/vite'
import { presetAttributify, presetUno, presetIcons } from 'unocss'

const colors = ['red', 'yellow', 'blue', 'green', 'purple']
const safelist = [
  ...colors.map(v => `bg-${v}-500`),
  ...colors.map(v => `hover:bg-${v}-700`),
]

export default () =>
  Unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()],
  })
