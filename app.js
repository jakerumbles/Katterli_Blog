var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, '/views'));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.get('/', function(req, res) {
    res.render('home');
});

//The server
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
