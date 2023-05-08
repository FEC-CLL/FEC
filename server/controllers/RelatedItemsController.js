const express = require('express');

const router = express.Router();
const axios = require('axios');

const API_URL = process.env.API_ENDPOINT;
const API_KEY = process.env.TOKEN;

// API request for related products based off a product ID
router.get('/:id', (req, res) => {
  axios.get(`${API_URL}/products/${req.params.id}/related`, { headers: { Authorization: API_KEY } })
    .then((response) => {
      // Need to loop thru related product id's and do a GET request for each
      // relatedProducts will be an array of product data objects
      const relatedProducts = [];
      response.data.forEach((item) => {
        axios.get(`${API_URL}/products/${item}`)
          .then((product) => {
            relatedProducts.push(product);
          })
          .catch((err) => {
            console.error(err);
          });
      });
      res.status(200).send(relatedProducts);
    })
    .catch((error) => {
      console.error(error);
      res.status(404).send(error);
    });
});

module.exports = router;
