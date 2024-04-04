const app = require('./src/app.js')

const PORT = process.env.PORT || 3055

const {app: {port}} = require('./src/configs/config.mongodb')

const server = app.listen(port, () => {
  console.log(`Server starts with ${port}`);  
})

process.on('SIGINT', () => {
  server.close(() => console.log('Exit Server Express'));
})