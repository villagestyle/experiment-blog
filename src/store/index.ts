import { createStore } from 'vuex'
import getters from './getters'

interface Files {
  [s: string]: any
}

const modulesFiles: Files = import.meta.globEager('./modules/*.ts')

const modules = Object.keys(modulesFiles).reduce((modules: Files, modulePath: string) => {
  const value = modulesFiles[modulePath]

  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const key = moduleName.replace('modules/', '')
  modules[key] = value.default
  return modules
}, {})

const store = createStore({
  modules,
  getters
})

export default store