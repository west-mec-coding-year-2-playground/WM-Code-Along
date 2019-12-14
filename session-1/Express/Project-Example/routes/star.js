var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
