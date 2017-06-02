var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({data: 'respond with a resource'});
});
// Loads all other routes here
router.use('/notes', require('./noteRoutes'));

module.exports = router;
