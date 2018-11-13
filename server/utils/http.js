const util = require('util')
const request = util.promisify(require('request'))

exports.Http = {
    get: function(url, options = {}) {
        options = Object.assign({}, options, {url})
        return request(options)
    },

    post: (url, options = {}) => {
        options = Object.assign({}, options, {method: "POST", url})
        return request(options)
    }
}
