var Beer = require("../../models/beer");

var cb = function(err, data, res, msg){
  var _msg = data;
  if (err){
    _msg = {'Erro': err};
  }
  console.log(_msg);
  res.json(_msg);
};

module.exports = {
  create: function(req, res){
    var dados = req.body;
    var model = new Beer(dados);

    model.save(function (err, data) {
      cb(err, data, res);        
    });
  },
  retrieve: function(req, res){
    Beer.find({}, function (err, data) {
      cb(err, data, res); 
    });
  },
  findOne: function(req, res){
    var query = {_id: req.params.id};

    Beer.findOne(query, function (err, data) {
      cb(err, data, res); 
    });
  },
  update: function(req, res){
    var query = {_id: req.params.id};
    var mod = req.body;
    Beer.update(query, mod, function (err, data) {
      cb(err, data, res); 
    });
  },
  delete: function(req, res){
    var query = {_id: req.params.id};
    Beer.remove(query, function(err, data) {
      cb(err, data, res); 
    });
  }
};