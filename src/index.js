
const tags = require('./tags')

let file = `\nimport h from './h'`

for (let i = 0; i < tags.length; i++) {
  file += `\n\nfunction ${tags[i]} (a, b) {\n  return h('${tags[i]}', a, b)\n}`
}

file += `\n\nexport {\n  h,\n  ${tags.join(',\n  ')}\n}\n`

process.stdout.write(file)
