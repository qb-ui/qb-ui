// 基本组件
import qbButton from './packages/button'
import qbButtonGroup from './packages/button-group'
import qbIcon from './packages/icon'
import qbRow from './packages/row'
import qbCol from './packages/col'
import qbTag from './packages/tag'

const components = [
  qbButton,
  qbButtonGroup,
  qbIcon,
  qbRow,
  qbCol,
  qbTag
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

/**
 * Global Install
 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
