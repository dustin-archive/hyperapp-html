
function vnode (a, b, c) {
  return {
    nodeName: a,
    attributes: b,
    children: Array.isArray(c) ? c : [c],
    key: b.key
  }
}

function h (a, b, c) {
  return typeof b === 'object' && !Array.isArray(b)
    ? vnode(a, b, c)
    : vnode(a, {}, b)
}

export default h
