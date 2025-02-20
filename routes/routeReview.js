const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

router.get('/', reviewController.getAllReview);
router.post('/', reviewController.createReview);
router.patch('/', reviewController.updateReview);
router.delete('/', reviewController.deleteeReview);

module.exports = router;
