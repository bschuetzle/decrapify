
var express = require('express'), app = express();
//var controllers = require('./controllers');
var bodyParser = require('body-parser');
var moment = require('moment');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


/************
 * DATABASE *
 ************/

//var db = require('./models');


/**********
 * ROUTES *
 **********/

app.get('/', function homepage(req, res) {
   res.sendFile(__dirname + '/views/index.html');
});




/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
