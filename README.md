
# tags

HTML vnode functions for Hyperapp.

# Install

This project is only hosted on Github. Fortunately, you can still install via npm.

```
npm i whaaaley/tags
```

## Use

The tags used in this package are pulled from the [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/indices.html#elements-3).

```js
import { a, div, img } from 'tags'

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
