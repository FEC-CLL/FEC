const express = require('express');
const productController = require('./ProductController');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const results = await productController.getProducts();
    res.send(results);
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const results = await productController.getProduct(req.params.id);
    res.send(results);
  } catch (err) {
    res.sendStatus(400);
  }
});

router.get('/:id/styles', async (req, res) => {
  try {
    const results = await productController.getProductStyle(req.params.id);
    res.send(results);
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
});

module.exports = router;
