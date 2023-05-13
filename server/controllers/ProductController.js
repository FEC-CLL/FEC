require('dotenv').config();
const express = require('express');
const axios = require('axios');

const router = express.Router();

const instance = axios.create({
  baseURL: process.env.API_ENDPOINT,
  headers: { Authorization: process.env.TOKEN },
});

router.get('/', (req, res) => {
  instance.get('/products')
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(error.response.status);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const serverUrl = `${req.protocol}://${req.get('host')}`;
  Promise.all([
    instance.get(`/products/${id}`),
    axios.get(`${serverUrl}/products/${id}/styles`),
    axios.get(`${serverUrl}/reviews/${id}`),
  ])
    .then(([productResponse, stylesResponse, reviewsResponse]) => {
      res.send({
        ...productResponse.data,
        styles: stylesResponse.data,
        reviewCount: reviewsResponse.data.count,
      });
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(400);
    });
});

router.get('/:id/styles', (req, res) => {
  const { id } = req.params;
  instance.get(`/products/${id}/styles`)
    .then((response) => {
      res.send(response.data.results);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(error.response.status);
    });
});

module.exports = router;
