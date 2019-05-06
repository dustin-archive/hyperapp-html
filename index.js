
var cache = new Map()

var vnode = function (tag, data, children) {
  return {
    nodeName: tag,
    attributes: data,
    children: Array.isArray(children) === true ? children : [children],
    key: data.key
  }
}

var h = (tag, data, children) => {
  if (typeof data === 'object' && Array.isArray(data) === false) {
    return vnode(tag, data, children)
  }

  return vnode(tag, {}, data)
}

var html = new Proxy({}, {
  get: function (target, name) {
    var fn = cache.get(name)

    if (fn) {
      return fn
    }

    fn = function (data, children) {
      return h(name, data, children)
    }

    cache.set(fn)

    return fn
  }
})

export default html
