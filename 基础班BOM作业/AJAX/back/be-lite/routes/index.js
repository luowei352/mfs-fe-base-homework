var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello World' });
});

router.get('/json', function(req, res){
  res.json({data:"hello json"})
})

module.exports = router;
