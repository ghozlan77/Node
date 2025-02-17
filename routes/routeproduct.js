const express = require('express');
const prodctController=require('../controllers/productController')

const router = express.Router();

// befor prodctController
// router.get('/', (req, res) => {
//   res.send('hello');
// });
// router.post('/', (req, res) => {
//   res.send('create product');
// });
// router.patch('/', (req, res) => {
//   res.send('update product');
// });
// router.delete('/', (req, res) => {
//   res.send('no products');
// });

router.get("/",prodctController.getProduct);
router.post("/",prodctController.createProduct);




module.exports = router;
