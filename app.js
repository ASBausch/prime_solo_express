var express = require('express');
var soloAccountBal = require('./modules/soloAccountBal.js');
var app = express();
var path = require('path'); //research this, makes it easier to get to the file you want

//serves this file to the basic page this is creating a path
app.get('/', function(request, response, next) {
  //renders html file on that domain
  response.sendFile(path.join(__dirname, './index.html'));

});

//sets a page that holds the solution to the function- this is actually what the ajax calls
app.get('/balance', function(request, response, next) {
  response.send(soloAccountBal());
});

//no response needed because they aren't changed
app.use('/static', express.static(__dirname + '/static'));

//stars server listening
var server = app.listen(3000, function() {

  console.log('I am Listening');
});
