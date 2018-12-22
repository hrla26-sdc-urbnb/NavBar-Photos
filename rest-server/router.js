const router = require('express').Router();
const controller = require('./controller.js');

router.route('/:listing_id')
  .get(controller.get);

module.exports = router;
