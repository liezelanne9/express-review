// Router here
const router = require('express').Router();
const controller = require('./controller');

router
  .route('/')
  .get(controller.get)
  .post(controller.post)
  // .delete(controller.delete)

router
  .route('/:index')
  .delete(controller.delete)

module.exports = router;