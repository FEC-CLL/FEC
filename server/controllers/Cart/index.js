const express = require('express');
const cartController = require('./CartController');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const results = await cartController.getCartItems();
    res.send(results);
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
});

router.post('/', async (req, res) => {
  try {
    await cartController.addCartItem(req.body);
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(err.response.status);
  }
});

module.exports = router;
