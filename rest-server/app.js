const express = require('express');
const path = require('path');
const cors = require('cors');
const { Photos } = require('../db/models');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../react-client/public')));

app.get('/api/photos/:id', (req, res) => {
  if (req.params.id < 101) {
    Photos.findAll({ attributes: ['url'], where: { listing_id: req.params.id }, limit: 5 })
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  } else {
    Photos.findAll({ where: { listing_id: (req.params.id - 100) } })
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  }
});

module.exports = app;
