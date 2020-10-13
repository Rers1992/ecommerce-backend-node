const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

//rutas de checkout
app.use('/checkout', require('./routes/routes.checkout'))

var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log('Express started on port ', port);
});

module.exports = server
