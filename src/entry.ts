// 组件注册
import { App } from 'vue'
import DButton from './button'

export { DButton }

export default {
  install(app: App) {
    app.component(DButton.name, DButton)
  },
}
