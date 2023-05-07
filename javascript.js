const testFolder = './gifs/';
import fs from 'fs';

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

function randomfile(){
    const testFolder = './gifs/';
    const lista = []
    fs.readdirSync(testFolder).forEach(file => {
        lista.push('gifs/' + file)
    });
    return randomChoice(lista)
}

console.log(randomfile())
