var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/nuevo', function(req, res, next) {
  res.send('este es una nueva ruta1');
});

router.get('/nuevo2', function(req, res, next) {
  res.send('este es una nueva ruta11');
});

router.get('/nuevo3', function(req, res, next) {
  res.send('este es una nueva ruta111');
});
module.exports = router;
