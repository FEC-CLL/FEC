require('dotenv').config();
const axios = require('axios');

const api = process.env.API_ENDPOINT;

// import axios from 'axios';
module.exports = {
  get(req, res) {
    const question_id = req.query.question_id;
    const count = req.query.count || 5;
    const page = req.query.page || 1;
    axios.get(`${api}/qa/questions/${question_id}/answers?`, {
      params: {
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
        console.log(err);
        res.status(404).send(err);
      });
  },
  post(req, res) {
    const { question_id } = req.body;
    axios.post(
      `${api}/qa/questions/${question_id}/answers`,
      {
        body: req.body.body,
        name: req.body.name,
        email: req.body.email,
        photos: req.body.photos,
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
    const { answer_id } = req.body;
    axios.put(`${api}/qa/answers/${answer_id}/helpful`, {}, {
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
    const { answer_id } = req.body;
    axios.put(`${api}/qa/answers/${answer_id}/report`, {}, {
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
