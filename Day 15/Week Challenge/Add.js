const user = require('./user.json')
const fs= require ('fs')
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
function add (){
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      let u = randomIntFromInterval(1000, 9999)
      let pin = u.toString()
     
    let a = user[user.length-1].accountID
    let b = a.split('|')
    b =parseInt(b[1])+1
    
    
    let accountID = 'ACC|'+b
    rl.question('What is your name? ', (name) => {
 
        user.push({accountID,name,pin})
       fs.writeFile("./user.json",JSON.stringify(user) , (err) => {
        if (err)
          console.log(err);
          
      });
  
         rl.close(); });
    
 
 rl.on('close', ()=> {console.log(user)})


}
add()