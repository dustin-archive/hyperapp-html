
const vnode = (tag, data, children) => ({
  nodeName: tag,
  attributes: data,
  children: Array.isArray(children) ? children : [children],
  key: data.key
})

const h = (tag, data, children) =>
  typeof data === 'object' && !Array.isArray(data)
    ? vnode(tag, data, children)
    : vnode(tag, {}, data)

const html = new Proxy({}, {
  get: (t, tag) => (data, children) => h(tag, data, children)
})

export default html
