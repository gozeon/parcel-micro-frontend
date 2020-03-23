var path = require('path')
var glob = require('glob')
const files = glob.sync('src/pug/*.pug', {})
const pages = files.map((item) => path.basename(item, '.pug'))

module.exports = {
  locals: {
    pages: pages,
  },
}
