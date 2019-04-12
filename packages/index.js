import qbButton from './button/index'
import qbButtonGroup from './button-group/index'
import qbIcon from './icon/index'
import qbRow from './row/index'
import qbCol from './col/index'
import qbTag from './tag/index'

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

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  qbButton,
  qbButtonGroup,
  qbIcon,
  qbRow,
  qbCol,
  qbTag
}
