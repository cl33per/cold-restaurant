var path = require('path');
var coldRes = require('./data/data');


module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/view.html"));
  });
  
  app.get("/add", function(req, res){
    res.sendFile(path.join(__dirname, "/public/add.html"))
  })

  app.get('api/tables',function(re,res){
    res.json(coldRes)
  });

  app.get('api/waiting',function(re,res){
    res.json(waitRes)
  });

  app.post('api/tables'), function(req, res){
    if(coldRes.length<5){
      coldRes.push(req.body)
      res.json(true);
    }else{waitRes.push(req.body)
    res.json(false)}
  };
}