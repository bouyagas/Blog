'use strict';
require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const path = require('path');

const server = express();
const PORT = process.argv[2] || process.env.PORT || 3000;
const articleRoute = require('./routes/api/article.js');
const userRoute = require('./routes/api/user.js');
server.use(logger('dev'));

server.use(bodyParser.json());

server.use(helmet());

server.use(express.static(path.join(__dirname, 'dist')));

server.use((req, res, next)  => {
  res.status(404).sendFile(path.join(__dirname, 'public/notFound.html'));
});


server.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500).sendFile(path.join(__dirname, 'public/serverError.html'));
});

server.use('/api/articles', articleRoute);
server.use('/api/users', userRoute);

server.listen(PORT, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`=====> 🌎  Listening on port ${PORT}. Open up http://localhost:${PORT}/ in your browser.`)
  }
})
