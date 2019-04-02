/**
 * 扩展 VuePress 应用
 */
import qbUI from '../../packages'
import '../../packages/theme-default/lib/index.css'

export default ({
  Vue
}) => {
  Vue.use(qbUI)
}