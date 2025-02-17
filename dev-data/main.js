const fs = require('fs');

// const x = fs.readFileSync('./dev-data/ay7aga.txt',"utf-8");
// console.log(x);
// console.log("readFile...");


const x = fs.readFile('./dev-data/ay7aga.txt',"utf-8",(err,data)={
    console.log(data);

});
console.log("readFile...");


