let $
let tag

export default {
  name: 'fixed-header',

  props: {
    threshold: {
      type: Number,
      default: 0,
      required: false
    }
  },

  mounted () {
    $ = (e) => document.querySelector(e)
    tag = (!window.chrome && 'WebkitAppearance' in document.documentElement.style) ? 'body' : 'html'
    this.main()
  },

  methods: {
    main () {
      this.check = () => {
        this.$emit('update:fixed', $(tag).scrollTop > this.threshold)
      }
      window.addEventListener('scroll', this.check)
    }
  },

  beforeDestory () {
    window.removeEventListener('scroll', this.check)
  },

  render (h) {
    const children = this.$slots.default
    return children[0]
  }
}
