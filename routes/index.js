var express = require('express');
const getPercentage = require('../utils/getPercentage');
const hitungLuasLingkaran = require('../utils/lingkaran');
const hitungLuasPersegi = require('../utils/persegi');
const saveToCsv = require('../utils/saveToCsv');
const hitungLuasSegitiga = require('../utils/segitiga');
var router = express.Router();

// halaman index
router.get('/', function(req, res, next) {
  res.render('index');
});
// halaman input segitiga
router.get('/segitiga', function(req, res, next) {
  res.render('segitiga');
});
// halaman post data segitiga
router.post('/segitiga', function(req, res, next) {
  const alas = req.body.alas;
  const tinggi = req.body.tinggi;
  const result = hitungLuasSegitiga(alas, tinggi);
  
  saveToCsv("segitiga", `alas=${alas} tinggi=${tinggi}`, result);
  res.render('segitiga', { locals: { result } });
})
// halaman input persegi
router.get('/persegi', function(req, res, next) {
  res.render('persegi');
});
// halaman post data persegi
router.post('/persegi', function(req, res, next) {
  const sisi = req.body.sisi;
  const result = hitungLuasPersegi(sisi);

  saveToCsv("persegi", `panjang=${sisi}`, result);
  res.render('persegi', { locals: { result } });
});
// halaman input lingkaran
router.get('/lingkaran', function(req, res, next) {
  res.render('lingkaran');
});
// halaman post data lingkaran
router.post('/lingkaran', function(req, res, next) {
  const jari = req.body.jari;
  const result = hitungLuasLingkaran(jari);

  saveToCsv("lingkaran", `jari-jari=${jari}`, result);
  res.render('lingkaran', { locals: { result } });
});
// mendapatkan data persentase dan total perhitungan, digunakan pada halaman index
router.get('/percentage', function(req, res, next) {
  const data = getPercentage();
  res.json(data);
});
module.exports = router;
