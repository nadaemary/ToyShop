var express = require('Express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Toy_shop' });
});

module.exports = router;
