const express = require('express');
const userRouter = require('./routes/routeUser');
const productRouter = require('./routes/routeproduct');
const reviewRouter = require('./routes/routeReview');
const cardRouter = require('./routes/routeCard');

const app = express();

app.use('/users', userRouter);

app.use('/products', productRouter);

app.use('/reviews', reviewRouter);

app.use('/cards', cardRouter);

app.listen(3000, () => {
  console.log('server is running');
});
