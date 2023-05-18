const express = require('express');

const router = express.Router();
const axios = require('axios');

const url = process.env.API_ENDPOINT;
const token = process.env.TOKEN;

router.get('/:productID', (req, res) => {
  const productId = req.params.productID;
  const page = req.query.page || 1;
  const count = req.query.count || 2;
  const sort = req.query.sort || 'newest';
  const options = {
    method: 'get',
    url: `${url}/reviews?product_id=${productId}&page=${page}&count=${count}&sort=${sort}`,
    headers: {
      Authorization: token,
    },
  };

  axios(options)
    .then((result) => {
      res.json(result.data);
    })
    .catch((err) => {
      console.error('Server failed to GET data', err);
      res.sendStatus(err.response.status);
    });
});

router.get('/metadata/:productID', (req, res) => {
  const productId = req.params.productID;
  const options = {
    method: 'get',
    url: `${url}/reviews/meta?product_id=${productId}`,
    headers: {
      Authorization: token,
    },
  };

  axios(options)
    .then((result) => {
      res.json(result.data);
    })
    .catch((err) => {
      console.error('Server failed to GET metadata', err);
      res.sendStatus(err.response.status);
    });
});

router.post('/', (req, res) => {
  const data = {
    product_id: req.body.product_id,
    rating: req.body.rating || 5,
    summary: req.body.summary || '',
    body: req.body.body || '',
    recommend: req.body.recommend || false,
    name: req.body.name || '',
    email: req.body.email || '',
    photos: req.body.photos || [],
    characteristics: req.body.characteristics || {},
  };

  const options = {
    method: 'post',
    url: `${url}/reviews`,
    headers: {
      Authorization: token,
    },
    data,
  };

  axios(options)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error('Server failed to send POST request', err);
      res.sendStatus(err.response.status);
    });
});

router.put('/:reviewId/helpful', (req, res) => {
  const { reviewId } = req.params;
  const options = {
    method: 'put',
    url: `${url}/reviews/${reviewId}/helpful`,
    headers: {
      Authorization: token,
    },
  };

  axios(options)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error('Server failed to send PUT helpful request', err.message);
      res.sendStatus(err.response.status);
    });
});

router.put('/:reviewId/report', (req, res) => {
  const { reviewId } = req.params;
  const options = {
    method: 'put',
    url: `${url}/reviews/${reviewId}/report`,
    headers: {
      Authorization: token,
    },
  };

  axios(options)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error('Server failed to send PUT report request', err);
      res.sendStatus(err.response.status);
    });
});

module.exports = router;
