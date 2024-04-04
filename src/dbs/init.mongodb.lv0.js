'use restrict'

const mongoose = require('mongoose')

const connectionStr = 'mongodb+srv://tiendung14b:hikari19@ecommerce.bywu6qu.mongodb.net/?retryWrites=true&w=majority&appName=eCommerce'
mongoose.connect(connectionStr)
  .then(_ => {
    console.log('Connected to MongoDB');
  }) 
  .catch(err => {
    console.log('Error connecting to MongoDB');
    console.log(err);
  })


const dev = true
if (dev) {
  mongoose.set('debug', true)
  mongoose.set('debug', {color: true})
}

module.exports = mongoose