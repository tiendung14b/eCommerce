'use strict'

const mongoose = require('mongoose')
const os = require('os')
const process = require('process')
const _CHECKTIME = 5000

const countConnection = () => {
  const numConnection = mongoose.connections.length
  console.log(`Number of connections::${numConnection}`)
}

const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length
    const numCore = os.cpus().length
    const memoUse = process.memoryUsage().rss
    const maxConnection = numCore * 5
    console.log(`Active connections::${numConnection}`)
    console.log(`Memory usage::${Math.round(memoUse / 1024**2)}MB`)
    if (numConnection > maxConnection) {
      console.log('Overload connection')
    }
  }, _CHECKTIME) // monitor every 5s
}

module.exports = {
  countConnection,
  checkOverload
}