var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('este es el original y no esta copiado');
});

module.exports = router;
