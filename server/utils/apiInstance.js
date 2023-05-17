require('dotenv').config();
const axios = require('axios');

const apiInstance = axios.create({
  baseURL: process.env.API_ENDPOINT,
  headers: { Authorization: process.env.TOKEN },
});

module.exports = apiInstance;
