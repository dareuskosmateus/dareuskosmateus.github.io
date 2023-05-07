import * as fs from 'fs';

function randomindex() {
    return Math.floor(Math.random())
}

let files = fs.readdir('./gifs')
console.log(files)