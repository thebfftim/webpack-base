const express = require('express');
const path = require('path');
const logger = require('morgan'); // eslint-disable-line no-unused-vars
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const index = require('./routes/index');

const app = express();

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(helmet()); // protect from well known vulnerabilities
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', index);

module.exports = app;
