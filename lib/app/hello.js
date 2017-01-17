'use strict';

function requestHandler(req, res) {
  res.send('Hello.');
};

module.exports = function(router) {
  router.use('/hello', requestHandler);
};
