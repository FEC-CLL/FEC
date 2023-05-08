require('dotenv').config();
const express = require('express');
const axios = require('axios');

const router = express.Router();

const API_URL = process.env.API_ENDPOINT;
const API_KEY = process.env.TOKEN;

router.get('/', (req, res) => {
  axios.get(`${API_URL}/products`, { headers: { Authorization: API_KEY } })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(error.response.status);
    });
});

router.get('/:id', (req, res) => {
  axios.get(`${API_URL}/products/${req.params.id}`, { headers: { Authorization: API_KEY } })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(error.response.status);
    });
});

router.get('/:id/styles', (req, res) => {
  axios.get(`${API_URL}/products/${req.params.id}/styles`, { headers: { Authorization: API_KEY } })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(error.response.status);
    });
});

module.exports = router;
