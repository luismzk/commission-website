require('./config/config');

const express = require('express');
const port = process.env.PORT || 5000; // LocalHost Port
const session = require('express-session')
const bodyParser = require('body-parser');
const pool = require('./db/pg');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true,
    parameterLimit: 100
}));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(session({
	secret: 'secretsalt',
	resave: false,
	saveUninitialized: false,
  cookie: {
    maxAge: 1000*60*60*24*31
  }
}));

// Routes
require('./routes.js')(app);

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
