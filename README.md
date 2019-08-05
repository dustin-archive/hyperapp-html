
# html#es5

JavaScript functions that return virtual nodes.

## Install

This project is only hosted on Github. Fortunately, you can still install via npm.

```
npm i github:whaaaley/html#es5
```

## Use

The tags used in this package are pulled from the [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/indices.html#elements-3).

```js
import { a, div, img } from 'html'

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
