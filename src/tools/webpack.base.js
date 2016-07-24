const path = require('path')

module.exports = {
  CLIENT_ENTRY:  path.join(process.cwd(), 'src/client'),
  CLIENT_OUTPUT: path.join(process.cwd(), 'build'),
  SERVER_ENTRY:  path.join(process.cwd(), 'src/server/server.js'),
  SERVER_OUTPUT: path.join(process.cwd(), 'build'),
  PUBLIC_PATH: '/static/'
}
