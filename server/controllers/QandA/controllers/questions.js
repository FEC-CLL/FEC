require('dotenv').config();
const axios = require('axios');

const api = process.env.API_ENDPOINT;

module.exports = {
  get(req, res) {
    const productId = req.query.product_id;
    const count = req.query.count || 5;
    const page = req.query.page || 1;
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
        console.log(data.data.results);
        res.status(200).send(data.data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  post(req, res) {
    console.log(req.body.body);
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
    // eslint-disable-next-line
    const { question_id } = req.body;
    // eslint-disable-next-line
    axios.put(`${api}/qa/questions/${question_id}/helpful`, {}, {
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then(() => {
        console.log('hi0');
        res.status(204).send();
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send(err);
      });
  },
  putReport(req, res) {
    // eslint-disable-next-line
    const { question_id } = req.body;
    // eslint-disable-next-line
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
