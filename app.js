var express = require('express');
var path = require('path');
var index = require('./routes/index');
var tweets = require('./routes/tweets');
var app = express();

// serve static assets from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// look for view html in the views directory
app.set('views', path.join(__dirname, 'views'));

// use ejs to render 
app.set('view engine', 'ejs');

// setup routes
app.use('/', index);
app.use('/tweets', tweets);


module.exports = app;

var server_port = process.env.OPENSHIFT_NODEJS_PORT;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP;
app.listen(server_port, server_ip_address, function() {
  console.log('Listening on ' + port);
});
