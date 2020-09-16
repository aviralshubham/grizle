var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ShuPro', { title: 'Express' });
});
router.get('/ShuPro', function(req, res, next) {
  res.render('ShuPro', { title: 'Express' });
});

router.get('/Aboutus', function(req, res, next) {
  res.render('Aboutus', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/MusicFestival', function(req, res, next) {
  res.render('MusicFestival', { title: 'Express' });
});

router.get('/MusicGenre', function(req, res, next) {
  res.render('MusicGenre', { title: 'Express' });
});

router.get('/team', function(req, res, next) {
  res.render('team', { title: 'Express' });
});

router.get('/latin', function(req, res, next) {
  res.render('latin', { title: 'Express' });
});
module.exports = router;
