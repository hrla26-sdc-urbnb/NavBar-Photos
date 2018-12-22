const express = require('express');
const parser = require('body-parser');
const path = require('path');
const router = require('./router.js');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/public')));

app.use('/api', router);

module.exports = app;
