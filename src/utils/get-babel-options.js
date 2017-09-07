const babelRc = require('./babelrc')
const cacheDirectory = true

const getBabelOptions = (targetModernBrowsers, getModule) => {
    const babelOptions = Object.assign({ babelrc: false, cacheDirectory }, babelRc(getModule))
    if (targetModernBrowsers) {
        babelOptions.presets = babelOptions.presets.concat(["env", {
            "targets": {
                "chrome": 56,
            },
            debug: true
        }])
    }
    return babelOptions
}

module.exports = (targetModernBrowsers = false, getModule) => {
    const babelOptions = getBabelOptions(targetModernBrowsers, getModule)
    return babelOptions
}
