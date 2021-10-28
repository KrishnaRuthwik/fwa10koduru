var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Ruthwik Koduru',fact:'I live in USA' });
});

module.exports = router;
