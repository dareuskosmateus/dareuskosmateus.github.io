const testFolder = './gifs/';
const fs = require('fs');
var lol

function randomfile() {
    const lista = []
    fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
        lista.push(file);
    });
    });
};

randomfile()