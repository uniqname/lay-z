const loadImage = src => entries =>
  entries.forEach(({ target, intersectionRatio }) => {
    intersectionRatio && target.src !== (src || target.dataset.src) && (target.src = target.dataset.src)
  })

export default (config = {}) => (observeFrom = null) => {
  const observer = new IntersectionObserver(loadImage(src), { root: observeFrom, ...config })
  return imag => {
    observer.observe(imag)
  }
}
