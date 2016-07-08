module.exports=middleware;

var middleware = {
	 requireAuthentication: function(req, res, next){
     console.log(req.method);
  },
  logger: function(req, res, next){
    console.log(new Date().toString() + req.method + ' ' + req.originalUrl);
    next();
  }
}