require('dotenv').config();
const axios = require('axios');

const api = process.env.API_ENDPOINT;

module.exports = {
  get(req, res) {
    const productId = req.body.product_id;
    const count = req.body.count || 5;
    const page = req.body.page || 1;
    axios.get(`${api}/qa/questions?`, {
      params: {
        product_id: productId,
        count,
        page,
      },
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send(err);
      });
  },
  post(req, res) {
    axios.post(
      `${api}/qa/questions`,
      {
        body: req.body.body,
        name: req.body.name,
        email: req.body.email,
        product_id: req.body.product_id,
      },
      {
        headers: {
          Authorization: process.env.TOKEN,
        },
      },
    )
      .then(() => {
        res.status(201).send();
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send(err);
      });
  },
  putHelpful(req, res) {
    const { question_id } = req.body;
    axios.put(`${api}/qa/questions/${question_id}/helpful`, {}, {
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then(() => {
        res.status(204).send();
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send(err);
      });
  },
  putReport(req, res) {
    const { question_id } = req.body;
    axios.put(`${api}/qa/questions/${question_id}/report`, {}, {
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then(() => {
        res.status(204).send();
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send(err);
      });
  },
};
