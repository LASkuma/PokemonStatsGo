let assets

if (process.env.NODE_ENV === 'production') {
  assets = require('../../../assets.json')
} else {
  assets = {
    vendor: {
      js: '/static/vendor.js'
    },
    main: {
      js: '/static/main.js'
    }
  }
}

const render = () => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>PokemonStatsGo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="root"></div>
        <script src="${assets.vendor.js}"></script>
        <script src="${assets.main.js}"></script>
      </body>
    </html>
  `
}

export default render
