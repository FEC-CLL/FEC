require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const productRoute = require('./controllers/Product');
const reviewsController = require('./controllers/ReviewsController');
const relatedController = require('./controllers/RelatedItemsController');
const questionsController = require('./controllers/QandA/QandARouter');
const cartRoute = require('./controllers/Cart');

const app = express();

app.use(morgan('dev'));

// These two middlewares work hand-in-hand with one another
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

// ROUTES
app.use('/products', productRoute);
app.use('/cart', cartRoute);
app.use('/reviews', reviewsController);
app.use('/qa', questionsController);
app.use('/related', relatedController);
// Product Reviews

// Q & A

// Related Products
// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40348/related

const PORT = process.env.PORT || 3000; // <-- 8080 is also common
app.listen(PORT, () => {
  console.log(`Server available at http://localhost${PORT}`);
});
