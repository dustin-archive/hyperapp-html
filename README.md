
# html

A JavaScript [proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) that returns virtual nodes.

## Install

This project is only hosted on Github. Fortunately, you can still install via npm.

```
npm i github:whaaaley/html
```

## Use

```js
import html from 'html'
const { a, div, img } = html

const Bar = () => (_state, actions) => {
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
