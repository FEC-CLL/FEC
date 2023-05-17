const express = require('express');

const router = express.Router();
const axios = require('axios');

const API_URL = process.env.API_ENDPOINT;
const API_KEY = process.env.TOKEN;

const options = {
  headers: {
    Authorization: API_KEY,
  },
};

// API request for related products based off a product ID
router.get('/:id', (req, res) => {
  axios.get(`${API_URL}/products/${req.params.id}/related`, options)
    .then(({ data }) => {
      const relatedProducts = Promise.all(data.map((id) => axios.get(`${API_URL}/products/${id}`, options)
        .then((product) => product.data)));
      return relatedProducts;
    })
    .then((result) => {
      // console.log('RESULT ', result);
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log('Unable to retrieve product data...', err);
      res.sendStatus(400);
    });
});

// TODO: API request for default style image for each product

// TODO: API request to get all ratings for each product and find average rating

module.exports = router;
