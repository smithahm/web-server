var express = require('express');
var app = express();
//capital letter means constant in Javascript
var PORT = 3000;
var middleware = require('./middleware.js');


app.get('/about',middleware.logger, function(req, res){
   res.send('About us!!');
});

app.use(express.static(__dirname + '/public'));
app.listen(PORT, function(){
	console.log('express server started' + PORT);
});