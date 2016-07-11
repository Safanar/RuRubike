var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://willy3364:c0806449@ds019491.mlab.com:19491/rurubike';

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/willywu', function(request, response) {
	var dick = {};
	dick.number = '102062124';
	dick.cm = 30;
	dick.name = 'willy';
  response.send(dick);
});

app.post('/willywu',function(request, response) {
	// body...
	var data = request.body;
	console.log(data);
	var answer = {};
	MongoClient.connect(url, function (err, db) {
		if (err) {
			console.log('Unable to connect to the mongoDB server. Error:', err);
		} 
		else {
			var courses = db.collection("courses");
			courses.find({className:{"$in":data.classes}},{_id:0}).toArray(function(err,callBack) {
				answer.courses = callBack;
				answer.number = data.number;
				response.send(answer);
				db.close();
			});
		}
	});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port2', app.get('port'));
});

