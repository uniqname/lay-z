import jit from './jit.js'

class LazImage extends HTMLElement {
  static get observedAttributes () {
    return ['src', 'alt', 'width', 'height']
  }
  constructor () {
    super()

    const shadow = this.attachShadow({ mode: 'open' })

    const img = this.querySelector('img') || document.createElement('img')
    img.alt = this.getAttribute('alt')
    img.width = this.getAttribute('width')
    img.height = this.getAttribute('height')

    shadow.appendChild(img)
  }

  attributeChangedCallback (attr, oldValue, newValue) {
    img[attr] = newValue
  }

  connectedCallback () {
    const root = this.getAttribute('root') || null
    const config = {
      rootMargin: this.getAttribute('root-margin') || '0',
      threshold: this.getAttribute('threshold') || 0
    }
    const observer = jit(config)(root)
    observer(this.shadow.querySelector('img'))
  }
}

// Define the new element
customElements.define('laz-img', LazImage)
