require('dotenv').config();
const path = require('path');

const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

// These two middlewares work hand-in-hand with one another
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

// ROUTES

// Product Reviews

// Q & A

// Related Products
// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40348/related


const PORT = process.env.PORT || 3000; // <-- 8080 is also common
app.listen(PORT, () => {
  console.log(`Server available at http://localhost${PORT}`);
});

