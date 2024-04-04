'use strict'

const { Schema, model } = require('mongoose')

const collectionName = 'keys'
const documentName = 'Key'

const keyTokenSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Shop'
  },
  publicKey: {
    type: String, required: true
  },
  refreshToken: {
    type: Array, default: []
  }
}, {
  timestamps: true,
  collection: collectionName
})

module.exports = model(documentName, keyTokenSchema)