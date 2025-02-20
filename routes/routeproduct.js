const express = require('express');
const prodctController = require('../controllers/productController');

const router = express.Router();

router.get('/', prodctController.getAllProduct);
router.post('/', prodctController.createProduct);
router.patch('/', prodctController.updateProduct);
router.delete('/', prodctController.deleteProduct);

module.exports = router;
