const fs = require('fs');
const review = JSON.parse(
  fs.readFileSync(`${__dirname}/./dev-data/review.json`, 'utf-8'),
);

exports.getAllReview = (req, res) => {
  res.status(200).JSON({
    status: 'success',
    result: review.length,
    data: {
      review,
    },
  });
};

exports.createReview = (req, res) => {
  res.send('create review');
};
exports.updateReview = (req, res) => {
  res.send('update review');
};
exports.deleteReview = (req, res) => {
  res.send('delete review');
};
