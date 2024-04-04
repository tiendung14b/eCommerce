'use strict'

const dev = {
  app: {
    port: 3052
  },
  db: {
    host: process.env.DB_CONNECTION,
    port: null,
    name: 'db_ecommerce',
  }
}

const prod = {
  app: {
    port: 3055
  },
  db: {
    host: process.env.DB_CONNECTION,
    port: null,
    name: 'db_ecommerce',
  }
}

const config = { dev, prod }
const env = process.env.NODE_ENV

module.exports = config[env]