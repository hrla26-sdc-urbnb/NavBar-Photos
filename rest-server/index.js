const app = require('./app.js');
const http = require('http');
const db = require('../db/index');
const { Listings, Photos } = require('../db/models');

const port = 3000;

const server = http.createServer(app);

server.listen(port, () => console.log('server connected'));
