/**
 * 扩展 VuePress 应用
 */
import VueHighlight from 'vue-highlight.js'
import 'vue-highlight.js/lib/allLanguages'
import 'highlight.js/styles/atom-one-dark.css'
import qbUI from '../../src'
import '../../src/packages/theme-default/lib/index.css'
import VueClipboard from 'vue-clipboard2'

export default ({
  Vue
}) => {
  Vue.use(VueHighlight)
  Vue.use(qbUI)
  Vue.use(VueClipboard)
}