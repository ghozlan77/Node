const fs = require('fs');
const product = JSON.parse(
  fs.readFileSync(`${__dirname}/./dev-data/product.json`, 'utf-8'),
);

exports.getAllProduct = (req, res) => {
  res.status(200).JSON({
    status: 'success',
    result: product.length,
    data: {
      product,
    },
  });
};
exports.createProduct = (req, res) => {
  res.send('create product');
};
exports.updateteProduct = (req, res) => {
  res.send('update product');
};
exports.deleteProduct = (req, res) => {
  res.send('delete prodct');
};
