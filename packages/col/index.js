import QbCol from './src/col'

/* istanbul ignore next */
QbCol.install = function (Vue) {
  Vue.component(QbCol.name, QbCol)
}

export default QbCol
