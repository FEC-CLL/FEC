require('dotenv').config();
const axios = require('axios');

const apiInstance = axios.create({
  baseURL: process.env.PRODUCTS_API_ENDPOINT,
  // headers: { Authorization: process.env.TOKEN },
});

module.exports = apiInstance;
