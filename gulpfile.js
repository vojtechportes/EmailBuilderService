var gulp	= require('gulp'),
	fs		= require('fs'),
	module	= require('./custom_modules/module/'),
	express = require('express'),
	app = express.createServer();

app.use(express.BodyParser());

app.post('/', function(request, response){
  console.log(request.body);      // your JSON
  response.send(request.body);    // echo the result back
});

app.listen(3000);	

gulp.task('moduleCheck', function(){
	//var obj = {};
	var obj = css('body { font-size: 24px; &p { font-size: 14px; } }');
	//console.log(JSON.stringify(css));
	console.log(obj);
});

gulp.task('default', ['css'], function() {});