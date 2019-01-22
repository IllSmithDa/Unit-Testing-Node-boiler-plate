const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const routes = require('./routes/routes');
const port = 3030;

routes(server);

server.use(bodyParser.json());
server.listen(process.env.PORT || port, () => {
  console.log(`server listening on port ${port}`);
});