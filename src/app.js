require('dotenv').config()
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

//init db

require('./dbs/init.mongodb')
const { checkOverload } = require('./helpers/check.connect')
// checkOverload()

//init debug

// init routes
app.use('/', require('./routes'))
// handle error

module.exports = app
