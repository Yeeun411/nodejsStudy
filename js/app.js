var express = require('express');
var app = express();
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));

app.get('/template', function(req, res){
	res.render();
});
app.get('/', function(req, res){
	res.send('Hello home page');
});
app.get('/dynamic', function(req, res){
	var lis ='';
	for(var i=0; i<5; i++){
		lis = lis + '<li>coding</li>';
	}
	var time = Date();
	var output = '
	<!DOCTYPE html>
	<html>
		<head>
	'
});
app.listen(3000, function(){
	console.log('Connected 3000 port!');
});
