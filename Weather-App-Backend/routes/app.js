const express = require('express');// functional constructor
const router =  new express.Router();

const app = require('../services/app.js');




router.get('/weather',function (req, res, next) {
  let options = {};  
  options.mDbClient = req.mDbClient;
  options.location = req.query.location;
    app.getWeatherReport(options).then((result) => {
      res.status(result.status).send(result.response)
    }).catch((result) =>
      res.status(result.status).send(result.response)
    )
});
module.exports = router;