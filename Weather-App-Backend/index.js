'use strict';
const express = require('express')
const PORT = 3001
const app = express();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Sreeja:Sreeju@97@cluster0.jxzhz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mDbClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });//connection
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.listen(PORT, () => console.log("listening", PORT));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  req.mDbClient = mDbClient;
  next();
})
app.use('/', require('./routes/app'))
module.exports = app