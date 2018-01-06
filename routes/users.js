var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.send('copiasaaaaaaaaaaaaaaaaaa');
});
router.get('/copia', function(req, res, next) {
  res.send('trabajando solo para adelantar');
=======
  res.send('este es el original y no esta copiado');
});

router.get('/origen', function(req, res, next) {
  res.send('este es una nueva ruta');
>>>>>>> ff9cbfd3ffb316f4779ef562aab528ff178c2688
});

module.exports = router;
