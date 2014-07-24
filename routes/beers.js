var express = require('express');
var router = express.Router();
var _beer = require('../controllers/beers');
/* GET home page. */
router.get('/', function(req, res) {
  _beer.renderList(req, res);
});

router.get('/create', function(req, res) {
  _beer.renderCreate(req, res);
});

router.get('/:id', function(req, res) {
  _beer.renderBeer(req, res);
});

router.get('/:id/edit', function(req, res) {
  _beer.renderEdit(req, res);
});

module.exports = router;
