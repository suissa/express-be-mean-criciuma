var express = require('express');
var router = express.Router();
var _beer = require('../../controllers/api/beers');

/* GET users listing. */
router.get('/', function(req, res) {
  _beer.retrieve(req, res);
});

router.get('/:id', function(req, res) {
  _beer.findOne(req, res);
});

router.post('/', function(req, res) {
  _beer.create(req, res);
});

router.put('/:id', function(req, res) {
  _beer.update(req, res);
});

router.delete('/:id', function(req, res) {
  _beer.delete(req, res);
});

module.exports = router;





