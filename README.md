
# tags

A [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) to create Hyperapp vnodes.

## Install

This project is only hosted on Github. Fortunately, you can still install via npm.

```
npm i whaaaley/tags
```

## Use

```js
import tags from 'tags'
const { a, div, img } = tags

const Bar = () => (s, actions) => {
  return div({ class: 'bar'}, [
    div({ class: 'bar-title' }, [
      a({ href: '/' }, [
        img({ src: '/logo.svg' })
      ])
    ]),
    div({ class: 'bar-main' }, [
      a({ href: '/search' }, 'Search'),
      a({ href: '/filter' }, 'Filter'),
    ])
  ])
}

export default Bar
```
