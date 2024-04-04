'use restrict'

const mongoose = require('mongoose')
const {countConnection} = require('../helpers/check.connect')

class Database {
  static instance = null
  static connectionStr = process.env.DB_CONNECTION
  static dev = true
  constructor() {
    this.connect()
  }

  connect() {
    if (Database.dev) {
      mongoose.set('debug', true)
      mongoose.set('debug', {color: true})
    }
    mongoose.connect(Database.connectionStr, {maxPoolSize: 50})
    .then(_ => {
      countConnection()
    }) 
    .catch(err => {
      console.log('Error connecting to MongoDB');
      console.log(err);
    })
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }
}

module.exports = Database.getInstance()