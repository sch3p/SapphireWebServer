var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('code', { title: 'CODE PAGE' });
});

module.exports = router;