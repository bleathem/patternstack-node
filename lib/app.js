'use strict';

var express = require('express'),
  bodyParser = require('body-parser'),
  config = require('./config'),
  cors = require('cors'),
  app = express();

app.set('port', config.get('PORT'));
app.set('base url', config.get('IP'));

app.use(express.static('static'))
app.use('/dist', express.static('node_modules/patternfly/dist/'))

// Enable CORS for all requests
app.use(cors());

// app specific router
var router = express.Router();

app.use('/api', bodyParser.json());
app.use('/api', router);

// app modules
require('./app/hello')(router);

module.exports = exports = app;
