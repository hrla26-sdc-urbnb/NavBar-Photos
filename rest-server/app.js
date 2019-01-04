const express = require('express');
const path = require('path');
const { Photos } = require('../db/models');

const app = express();

app.use(express.static(path.join(__dirname, '../react-client/public')));

app.get('/api/photos/:id', (req, res) => {
  Photos.findAll({ where: { listing_id: req.params.id } })
    .then(data => res.status(200).send(data))
    .catch(err => console.log(err));
});

module.exports = app;
