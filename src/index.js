const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors(
  // {origin: "http://meuapp.com"}
));
app.use(express.json());
app.use(routes);

var port = process.env.PORT || 3333;
app.listen(port);