var express = require('express');
var app = express();
//capital letter means constant in Javascript
var PORT = 3000;
var middleWare = {
  requireAuthentication: function(req, res, next){
     console.log(req.method);
  },
  logg: function(req, res, next){

    console.log(new Date().toString() + req.method + ' ' + req.originalUrl);
    next();
  }
};


app.get('/about',middleWare.logg, function(req, res){
   res.send('About us!!');
});

app.use(express.static(__dirname + '/public'));
app.listen(PORT, function(){
	console.log('express server started' + PORT);
});