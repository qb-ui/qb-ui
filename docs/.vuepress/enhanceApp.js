/**
 * 扩展 VuePress 应用
 */
import VueHighlight from 'vue-highlight.js'
import 'vue-highlight.js/lib/allLanguages'
import 'highlight.js/styles/atom-one-dark.css'
import qbUI from '../../packages'
import '../../packages/theme-default/lib/index.css'

export default ({
  Vue
}) => {
  Vue.use(VueHighlight)
  Vue.use(qbUI)
}