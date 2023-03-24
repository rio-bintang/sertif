const express= require("express");
const readFromCsv = require("../utils/readFromCsv");
const router = express.Router();
// halaman riwayat
router.get("/", function(req,res, next) {
    const dataCsv = readFromCsv();
    res.render('riwayat', { locals: { dataCsv } });
});
// halaman riwayat dengan bangun datar segitiga
router.get("/segitiga", function(req, res, next) {
    const dataCsv = readFromCsv(" segitiga");
    res.render('riwayat', { locals: { dataCsv } });
});
// halaman riwayat dengan bangun datar persegi
router.get("/persegi", function(req, res, next) {
    const dataCsv = readFromCsv(" persegi");
    res.render('riwayat', { locals: { dataCsv } });
});
// halaman riwayat dengan bangun datar lingkaran
router.get("/lingkaran", function(req, res, next) {
    const dataCsv = readFromCsv(" lingkaran");
    res.render('riwayat', { locals: { dataCsv } });
});
module.exports = router;