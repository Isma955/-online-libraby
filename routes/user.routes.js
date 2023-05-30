const Router = require('express');

const { userController } = require('../controllers/user.controller')

const router = Router()

router.post('/user',userController.addUser)
router.get('/user',userController.allUser)

module.exports = router