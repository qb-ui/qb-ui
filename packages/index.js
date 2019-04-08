import qbButton from './button/index'
import qbIcon from './icon/index'
import qbRow from './row/index'
import qbCol from './col/index'

const components = [
  qbButton,
  qbIcon,
  qbRow,
  qbCol
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  qbButton,
  qbIcon,
  qbRow,
  qbCol
}
