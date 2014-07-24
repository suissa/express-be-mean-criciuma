var express = require('express');
var router = express.Router();
var _beer = require('../controllers/beers');
/* GET home page. */
router.get('/', function(req, res) {
  _beer.renderList(req, res);
});

module.exports = router;
