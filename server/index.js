const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router');

const server = express();
const port = 3000;

server.use(morgan('dev'));
server.use(bodyParser.json());

server.use('/', express.static(path.join(__dirname + '/../client/dist')));

server.use('/api', router);

server.listen(port, () => console.log(`Connected to port ${port}`));