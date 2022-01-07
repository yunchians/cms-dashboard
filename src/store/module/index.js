
const requireModule = require.context('.', true, /\.js$/)
const modules = {}

requireModule.keys().forEach(fileName => {
  console.log(fileName)
  if (fileName === './build-pre.js') return

  // Replace ./ and .js
  const path = fileName.replace(/(\.\/|\.js)/g, '')
  const [moduleName, imported] = path.split('/')
  console.log(moduleName, imported)
  if (!modules[moduleName]) {
    modules[moduleName] = {
      namespaced: true
    }
  }

  modules[moduleName][imported] = requireModule(fileName).default
})

export default modules
