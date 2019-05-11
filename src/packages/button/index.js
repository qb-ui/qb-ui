import qbButton from './src/main.vue'

qbButton.install = function (Vue) {
  Vue.component(qbButton.name, qbButton)
}

export default qbButton
