const{Router} = require('express')
const router = Router()
const {checkout} = require('../controllers/controller.checkout')

router.route('/')
     .post(checkout)

module.exports = router