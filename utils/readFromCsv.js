const fs = require('fs');
// Membaca file csv
// Dapat menerima parameter bangun datar
// Mengembalikkan isi sesuai parameter dari csv

function readFromCsv(filter = "") {
    const dataCSV = fs.readFileSync('./public/data.csv', 'utf-8').split("\r\n");
    const arrayCsv = [];
    for (let x = 0; x < dataCSV.length; x++) {
        const arrayCSV2 = dataCSV[x].split(",");
        if (filter == "") {
            arrayCsv.push(arrayCSV2);
        } else if (arrayCSV2[2] == filter) {
            arrayCsv.push(arrayCSV2);
        }
    }
    return arrayCsv;

}

module.exports = readFromCsv;