const merge = require('concat');

const files = [
  './dist/app-demo1/main.js',
  './dist/app-demo1/polyfills.js',
  './dist/app-demo1/runtime.js'
]

merge(files, './dist/app-demo1/app-demo1-web.js');
console.info('file generated');
