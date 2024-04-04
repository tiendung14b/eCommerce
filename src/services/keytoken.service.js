'use strict'

const keyModel = require('../models/keytoken.model')

class KeyTokenService {
  static createKeyToken = async ({ user_id, publicKey }) => {
    try {
      const publicKeyString = publicKey.toString()
      const tokens = await keyModel.create({
        user: user_id,
        publicKey: publicKeyString
      })
      return tokens ? publicKeyString : null
    } catch (err) {
      return err
    }
  }
}

module.exports = KeyTokenService