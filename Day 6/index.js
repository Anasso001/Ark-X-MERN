const fs = require('fs')
let x='test.txt'
let y ="abdou & anas"
function writeFileAsync(a,b){

    return fs.writeFile(a,b, function (err) {
        if (err) throw err;
        console.log('Saved!');})
    }

    writeFileAsync(x,y)
  