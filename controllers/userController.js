const fs = require('fs');
const user = JSON.parse(
  fs.readFileSync(`${__dirname}/./dev-data/user.json`, 'utf-8'),
);

exports.getAllUsers = (req, res) => {
  res.status(200).JSON({
    status: 'success',
    result: user.length,
    data: {
      user,
    },
  });
};

exports.createUser = (req, res) => {
  res.send('create user');
};
exports.updateUser = (req, res) => {
  res.send('update user');
};
exports.deleteUser = (req, res) => {
  res.send('delete user');
};
