// my dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// express configuration
var app = express();
var PORT = process.env.PORT || 3001;


app.use(express.static(path.join(__dirname, './app/public')));

//middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

//listening on PORT
app.listen(PORT, function () {
    console.log('app is listening on PORT:' + PORT);
});