const fs = require('fs');

// Menyimpan data ke csv

function saveToCsv(operation, data, result) {
    const date = new Date().toLocaleString().replace(",", "");
    const dataCsv= `${date}, ${data}, ${operation}, ${result}\r\n`;
    fs.appendFileSync("./public/data.csv", dataCsv);
}

module.exports = saveToCsv;