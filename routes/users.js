var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('copiasaaaaaaaaaaaaaaaaaa');
});
router.get('/copia', function(req, res, next) {
  res.send('trabajando solo para adelantar');
});

module.exports = router;
