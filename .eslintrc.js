module.exports = {
  "env": {
    "node": true,
  },
  "extends": "@antfu",
  "rules": {
    "vue/no-lone-template": "off",
    "vue/require-prop-types": "off",
    "vue/require-default-prop": "off",
    "import/named": "off",
    "no-tabs": ["error", { "allowIndentationTabs": true }]
  }
}
