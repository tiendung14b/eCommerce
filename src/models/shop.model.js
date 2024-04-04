const {Schema, Types, model} = require('mongoose')

const collectionName = 'shops'
const documentName = 'Shop'

const shopSchema = new Schema({
  name: {
    type: String,
    trim: true,
    maxLength: 150
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }, 
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  verify: {
    type: Boolean,
    default: false
  },
  roles: {
    type: Array,
    default: []
  },
}, {
  timestamps: true,
  collection: collectionName
})

module.exports = model(documentName, shopSchema)