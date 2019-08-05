
var cache = new Map()

function vnode (name, data, children) {
  return {
    nodeName: name,
    attributes: data,
    children: Array.isArray(children) ? children : [children],
    key: data.key
  }
}

var html = new Proxy({}, {
  get: function (_target, name) {
    var fn = cache.get(name)

    if (fn) {
      return fn
    }

    fn = function (data, children) {
      if (typeof data === 'object' && !Array.isArray(data)) {
        return vnode(name, data, children)
      }

      return vnode(name, {}, data)
    }

    cache.set(fn)

    return fn
  }
})

export default html
