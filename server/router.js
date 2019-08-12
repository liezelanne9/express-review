const router = require('express').Router();
const controller = require('./controller');

router
  .route('/')
  .get(controller.get)
  .post(controller.post)
router
  .route('/:index')
  .delete(controller.delete)
  .put(controller.put)

module.exports = router;