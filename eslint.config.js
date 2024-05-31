import pluginVue from 'eslint-plugin-vue'
export default [
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
        "vue/prop-name-casing": ["error", "camelCase"]
    }
  }
]