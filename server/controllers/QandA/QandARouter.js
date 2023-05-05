const controller = require('./controllers')
const router = require('express').Router();

router.get('/questions', controller.questions.get);

router.get('/answers', controller.answers.get);

router.post('/questions', controller.questions.post);

router.post('/answers', controller.answers.post);

router.put('/questions/helpful', controller.questions.putHelpful);

router.put('/questions/report', controller.questions.putReport);

router.put('/answers/helpful', controller.answers.putHelpful);

router.put('/answers/report', controller.answers.putReport);

module.exports = router;