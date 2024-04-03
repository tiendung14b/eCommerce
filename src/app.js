const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const app = express()

//init middleware
// morgan have 5 mode: dev, common, combined, short, tiny
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
//init debug

// init routes
app.get('/', (req, res, next) => {
  const strConp = 'hello from ecomerce app'
  res.status(200).json({
    message: 'success',
    metadata: strConp.repeat(10000)
  })
})
// handle error

module.exports = app
