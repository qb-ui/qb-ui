export default {
  name: 'QbRow',

  componentName: 'QbRow',

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },

  computed: {
    style() {
      const ret = {}

      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`
        ret.marginRight = ret.marginLeft
      }

      return ret
    }
  },

  // https: //cn.vuejs.org/v2/guide/render-function.html
  render(h) {
    return h(this.tag, {
      class: [
        'qb-row',
        this.justify !== 'start' ? `is-justify-${this.justify}` : '',
        this.align !== 'top' ? `is-align-${this.align}` : '',
        {
          'qb-row--flex': this.type === 'flex'
        }
      ],
      style: this.style
    }, this.$slots.default)
  }
}
