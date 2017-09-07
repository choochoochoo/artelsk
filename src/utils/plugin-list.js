const _ = require('lodash')

class PluginList {
    constructor () {
        this.list = []
    }

    if (condition, plugins) {
        if (condition) {
            this.add(plugins)
        }

        return this
    }

    add (plugins) {
        if (!_.isArray(plugins)) {
            plugins = [ plugins ]
        }

        this.list = this.list.concat(plugins)

        return this
    }
}

module.exports = PluginList
