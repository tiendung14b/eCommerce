const app = require('./src/app.js')

const PORT = 3055

const server = app.listen(PORT, () => {
  console.log(`Server starts with ${PORT}`);
})

process.on('SIGINT', () => {
  server.close(() => console.log('Exit Server Express'));
})