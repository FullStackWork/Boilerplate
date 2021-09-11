const express = require('express');
const mainRouter = express.Router();
// const specificRouter = require('.path/specificRouter');

// mainRouter.use('./path1', specificRouter);
// mainRouter.use('./path2', specificRouter);

mainRouter.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});
module.exports = mainRouter;
