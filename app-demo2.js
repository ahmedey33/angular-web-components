const merge = require('concat');

const files = [
  './dist/app-demo2/main.js',
  './dist/app-demo2/polyfills.js',
  './dist/app-demo2/runtime.js'
]

merge(files, './dist/app-demo2/app-demo2-web.js');
console.info('file generated');
