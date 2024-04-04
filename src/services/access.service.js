'use strict'
const shopModel = require('../models/shop.model')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const keyTokenService = require('./keytoken.service')
const {createTokenPair} = require('../auth/authUtils')

const roles = {
  SHOP: 'SHOP',
  WRITER: 'WRITER',
  EDITOR: 'EDITOR',
}

class AccessService {
  static signUp = async ({name, email, password}) => {
    try {
      // check if email already exists
      const holder = await shopModel.findOne({ email }).lean()
      if (holder) {
        return {
          code: 'xxxx',
          message: 'Email already exists',
        }
      }
      // create new shop
      const hashPwd = await bcrypt.hash(password, 10)
      const newShop = await shopModel.create({
        name,
        email,
        password: hashPwd,
        roles: [roles.SHOP]
      })
      // return refresh token and access token
      if (!newShop) {
        return {
          code: 'xxxx',
          message: 'Error creating shop',
          metadata: null
        }
      }

      const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096,
      })
      console.log({ privateKey, publicKey })

      const publicKeyString = await keyTokenService.createKeyToken({
        user_id: newShop._id,
        publicKey
      })

      if (!publicKeyString) {
        return {
          code: 'xxxx',
          message: 'publicKeyString error',
        }
      }
      const tokens = await createTokenPair({ id: newShop._id, email }, publicKey, privateKey)
      console.log('Create token pair::', token)
      return {
        code: '201',
        message: 'Success',
        metadata: {
          shop: newShop,
          tokens
        }
      }
    } catch (err) {
      return {
        code: 'xxx',
        message: err.message,
        status: 'error'
      }
    }
  }
}

module.exports = AccessService