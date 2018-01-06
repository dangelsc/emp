var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('este es el original y no esta copiado');
});

router.get('/origen', function(req, res, next) {
  res.send('este es una nueva ruta');
});

module.exports = router;
