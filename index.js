
var cache = new Map()

var vnode = function (name, data, children) {
  return {
    nodeName: name,
    attributes: data,
    children: Array.isArray(children) === true ? children : [children],
    key: data.key
  }
}

var h = (name, data, children) => {
  if (typeof data === 'object' && Array.isArray(data) === false) {
    return vnode(name, data, children)
  }

  return vnode(name, {}, data)
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
