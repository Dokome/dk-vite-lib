import Theme from 'vitepress/theme'
import DokomUI from '../../../src/entry'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'

import 'vitepress-theme-demoblock/dist/theme/styles/index.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(DokomUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  },
}
