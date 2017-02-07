
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/Home', function(req, res, next) {
    res.render('Home');
});
router.get('/About', function(req, res, next) {
    res.render('About');
});
router.get('/Projects', function(req, res, next) {
    res.render('Projects');
});
router.get('/Service', function(req, res, next) {
    res.render('Service');
});
router.get('/Contact', function(req, res, next) {
    res.render('Contact');
});
module.exports = router;
