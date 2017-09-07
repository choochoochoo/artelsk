const path = require('path')

module.exports = (getModule) => ({
  "presets": [
    getModule("babel-preset-es2015"),
    getModule("babel-preset-react")
  ],
  "plugins": [
        getModule("babel-plugin-syntax-dynamic-import"),
        [getModule("babel-plugin-transform-runtime"), { "polyfill": false }],
        getModule("babel-plugin-transform-regenerator"),
        getModule("babel-plugin-transform-async-to-generator"),
        getModule("babel-plugin-transform-es5-property-mutators"),
        getModule("babel-plugin-syntax-class-properties"),
        getModule("babel-plugin-transform-object-rest-spread"),
        getModule("babel-plugin-syntax-decorators"),
        getModule("babel-plugin-transform-decorators-legacy"),
        getModule("babel-plugin-transform-class-properties"),
        getModule("babel-plugin-transform-es2015-block-scoping"),
        [getModule("babel-plugin-transform-es2015-classes"), { "loose": true }],
        getModule("babel-plugin-transform-proto-to-assign")
  ]
})
