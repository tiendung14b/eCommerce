'use strict'

const jwt = require('jsonwebtoken')

const createTokenPair = async (payload, publicKey, privateKey) => {
  try {
    // accesstoken
    const accessToken = await jwt.sign(payload, privateKey, {
      algorithm: 'RS256',
      expiresIn: '2d'
    })
    // refreshtoken
    const refreshToken = await jwt.sign(payload, privateKey, {
      algorithm: 'RS256',
      expiresIn: '7d'
    })

    jwt.verify(accessToken, publicKey, (err, decoded) => {
      if (err) {
        return console.log("error verify::", err)
      }
      console.log("decoded::", decoded)
    })

    return { accessToken, refreshToken }
  } catch (err) {
    return err
  }
}

module.exports = {
  createTokenPair
}