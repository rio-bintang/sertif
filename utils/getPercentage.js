const fs = require('fs');

// Untuk mendapatkan total data dan total dari setiap bangun datar
// Untuk menghitung persen setiap bangun datar
// Mengembalikkan nilai total data, total dan persen dari setiap bangun datar

function getPercentage(){
    const dataCsv = fs.readFileSync('./public/data.csv', 'utf-8').split('\r\n');
    const countSegitiga = dataCsv.filter((data) => data.includes("segitiga")).length;
    const countPersegi = dataCsv.filter((data) => data.includes("persegi")).length;
    const countLingkaran = dataCsv.filter((data) => data.includes("lingkaran")).length;
    

    const total = countSegitiga + countPersegi + countLingkaran;
    const percentageSegitiga = (countSegitiga / total) * 100;
    const percentagePersegi = (countPersegi / total) * 100;
    const percentageLingkaran = (countLingkaran / total) * 100;

    return {
        countSegitiga,
        countPersegi,
        countLingkaran,
        total,
        percentageSegitiga,
        percentagePersegi,
        percentageLingkaran,
    }
}

module.exports = getPercentage;