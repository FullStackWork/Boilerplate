const express = require('express');
const path = require('path');
const mainRouter = require('./mainRouter');
const morgan = require('morgan');
const app = express();

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join('/Users/rohan/boilerMaker/public')));
app.use(morgan('dev'));

//main entry point for routes
app.use('/api', mainRouter);

// Send index.html for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

// app.listen(3000, function () {
//   console.log('Listening on port 3000');
// });
module.exports = app;
