var Beer = require("../models/beer");

var cb = function(err, data, res, msg){
  var _msg = data;
  if (err){
    _msg = {'Erro': err};
  }
  console.log(_msg);
  res.json(_msg);
};

module.exports = {
  renderList: function(req, res){
    Beer.find({}, function(err, data){
      if(err){
        res.render('error', { error: err});
      }
      res.render('beers/list', { 
        title: 'Listagem das cervejas', 
        beers: data
      });
    })
  }
};




