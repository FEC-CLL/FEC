const express = require('express');
const router = express.Router();
const axios = require('axios');

let url = process.env.API_ENDPOINT;
let token = process.env.TOKEN;


router.get('/:productID', (req, res) => {
  let productId = req.params.productID;
  let options = {
    method: 'get',
    url: url + '/reviews?product_id=' + productId,
    headers: {
      Authorization: token
    }
  };

  axios(options)
    .then((result) => {
      res.json(result.data);
    })
    .catch((err) => {
      console.error('Server failed to GET data', err);
      res.sendStatus(500);
    })
})


router.get('/metadata/:productID', (req, res) => {
    let productId = req.params.productID;
    let options = {
      method: 'get',
      url: url + '/reviews/meta?product_id=' + productId,
      headers: {
        Authorization: token
      }
    };

    axios(options)
      .then((result) => {
        res.json(result.data);
      })
      .catch((err) => {
        console.error('Server failed to GET metadata', err);
        res.sendStatus(500);
      })
})


router.post('/', (req, res) => {
let data = {
  product_id: req.body.product_id,
  rating: req.body.rating || 5,
  summary: req.body.summary || '',
  body: req.body.body || '',
  recommend: req.body.recommend || false,
  name: req.body.name || '',
  email: req.body.email || '',
  photos: req.body.photos || [],
  characteristics: req.body.characteristics || {}
}

  let options = {
    method: 'post',
    url: url + '/reviews',
    headers: {
      Authorization: token
    },
    data: data,
  };

  axios(options)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error('Server failed to send POST request', err);
      res.sendStatus(500);
    })
})


router.put('/:reviewId/helpful', (req, res) => {
  let reviewId = req.params.reviewId;
  let options = {
    method: 'put',
    url: url + '/reviews/' + reviewId + '/helpful',
    headers: {
      Authorization: token
    }
  };

  axios(options)
  .then((result) => {
    res.sendStatus(201);
  })
  .catch((err) => {
    console.error('Server failed to send PUT helpful request', err.message);
    res.sendStatus(500);
  })
})


router.put('/:reviewId/report', (req, res) => {
  let reviewId = req.params.reviewId;
  let options = {
    method: 'put',
    url: url + '/reviews/' + reviewId + '/report',
    headers: {
      Authorization: token
    }
  };

  axios(options)
  .then((result) => {
    res.sendStatus(201);
  })
  .catch((err) => {
    console.error('Server failed to send PUT report request', err);
    res.sendStatus(500);
  })
})


module.exports = router;