import path from 'path'
import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import compression from 'compression'

import renderFullPage from './utils/renderFullPage'
import getPokemonList from './utils/getPokemonList'

const __PROD__ = process.env.NODE_ENV === 'production'
const __TEST__ = process.env.NODE_ENV === 'test'
const port = process.env.PORT || 3000
const server = express()

server.disable('x-powered-by')
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

if (__PROD__ || __TEST__) {
  const config = require('../tools/webpack.client.prod')
  server.use(morgan('combined'))
  server.use(helmet())
  server.use(compression())
  server.use(config.output.publicPath, express.static(config.output.path))
} else {
  server.use(morgan('dev'))
  const config = require('../tools/webpack.client.dev')
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(config)
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src/client',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: true,
      modules: false
    }
  })
  server.use(middleware)
  server.use(webpackHotMiddleware(compiler, {
    log: console.log
  }))
}

server.post('/stats', (req, res) => {
  let username = req.body.username
  let password = req.body.password

  getPokemonList(username, password)
    .then((list) => {
      res.status(200).json(list)
    }, (err) => {
      if (err.statusCode == 403) {
        return res.status(403).json({ errorCode: 403, message: 'Authentication failed' })
      }
      console.log(err)
      res.status(500).send({ errorCode: 500, message: 'Internal Server Error' })
    })
})

server.get('*', (req, res) => {
  // if (__PROD__ || __TEST__) {
  //   // TODO: send file
  //   res.status(200).send()
  // } else {
  //   res.status(200).send(renderFullPage())
  // }
  res.status(200).send(renderFullPage())
})

console.log(__PROD__)
// Listen
server.listen(port, function onStart (err) {
  if (err) {
    console.log(err)
  }

  console.info('==> 🌎 Listening on port %s.' +
    'Open up http://localhost:%s/ in your browser.', port, port)
})

module.exports = server
