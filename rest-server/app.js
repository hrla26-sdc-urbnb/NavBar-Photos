// require('newrelic');
const express = require('express');
const path = require('path');
const cors = require('cors');
const parser = require('body-parser');
const { Photos } = require('../db/models');


const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../react-client/public')));



app.get('/loaderio-f3929ec5e029861abcafea0e45c74b0c.txt', function(req, res) {
  res.sendFile("/home/ubuntu/NavBar-Photos/loaderio-27a37d419f897c66b562697d53b60235.txt");
});
app.get('/api/photos/:id', (req, res) => {
  if (req.params.id < 2000000) {
    Photos.findAll({ attributes: ['img_url'], where: { listing_id: req.params.id }, limit: 5 })
      .then(data => {
        console.log("haha")
        res.status(200).send(data)
      })
      .catch(err => console.log(err));
  } else {
    Photos.findAll({ where: { listing_id: (req.params.id - 10000000) } })
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  }
});

app.post("/api/photos",(req, res) => {
  let listing_id = req.body.listing_id;
  let img_url = req.body.img_url;
  Photos.create({listing_id,img_url}).then(()=>{res.end()}).catch(function(err) {
    console.log(err, req.body.email);
});
});





app.put('/api/photos',(req, res)=> {
  console.log("PARAMS,", req.body)
  let newData = {img_url: req.body.img_url}
  let id = req.body.id;
  Photos.update(newData, {where:{id}})
  .then(()=> {
    res.end();
    console.log("updated")
  });
});


app.delete('/api/photos/:id', (req, res) => {
  let id = req.params.id;
  Photos.destroy({where:{id}}).then(()=>{
    console.log("deleted");
    res.end()
  })
})
module.exports = app;
