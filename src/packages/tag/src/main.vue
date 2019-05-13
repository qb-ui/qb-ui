<script>
export default {
  name: 'qbTag',
  props: {
    text: String,
    closable: Boolean,
    type: String,
    hit: Boolean,
    disableTransitions: Boolean,
    color: String,
    size: String
  },
  methods: {
    handleClose(event) {
      event.stopPropagation()
      this.$emit('close', event)
    },
    handleClick(event) {
      event.stopPropagation()
      this.$emit('click', event)
    }
  },
  computed: {
    tagSize() {
      return this.size || (this.$ELEMENT || {}).size
    }
  },
  render(h) {
    const classes = [
      'qb-tag',
      this.type ? `qb-tag--${this.type}` : '',
      this.tagSize ? `qb-tag--${this.tagSize}` : '',
      { 'is-hit': this.hit }
    ]
    const tagElment = (
      <span
        class={classes}
        style={{ backgroundColor: this.color }}
        on-click={this.handleClick}
      >
        {this.$slots.default}
        {this.closable && (
          <i class="qb-tag__close qb-icon-x" on-click={this.handleClose} />
        )}
      </span>
    )
    return this.disableTransitions ? (
      tagElment
    ) : (
      <transition name="qb-zoom-in-center">{tagElment}</transition>
    )
  }
}
</script>
