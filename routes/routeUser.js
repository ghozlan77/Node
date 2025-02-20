const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getALLUser);
router.post('/', userController.createUser);
router.patch('/', userController.updateUser);
router.delete('/', userController.deleteUser);

module.exports = router;
