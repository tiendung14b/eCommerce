const router = require('express').Router();
const accessController = require('../../controllers/access.controller');

router.post('/shop/signup', accessController.signUp)

module.exports = router;  