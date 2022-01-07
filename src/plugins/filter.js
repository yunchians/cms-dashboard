// import './jquery'
// import './jquery.marquee.min'
import Vue from 'vue'
const requireComponent = require.context(
  '@/plugins/filters', true, /\.js$/
)

requireComponent.keys().forEach(path => {
  if (path === './build-pre.js') return;
  const componentConfig = requireComponent(path)
  const fileName = path.replace(/^\.\//, '').replace(/\.js/, '')

  Vue.filter(fileName, componentConfig.default[fileName] )
})
