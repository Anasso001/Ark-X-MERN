const list = require('./data.json')
const fs= require ('fs')
const readline = require('readline');

// Create the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question('What is your name? ', (name) => {
   


    rl.question('What is your phone number? ', (phone) => {
        list.push({name,phone})
       fs.writeFile("./data.json",JSON.stringify(list) , (err) => {
        if (err)
          console.log(err);
          
      });
  
         rl.close(); });
    
  });
 rl.on('close', ()=> {console.log(list)})
  
 
 rl.question('search a contact with name : ',(x) => {
  let arr= a.filter((s)=>s.name==x)
 if (arr.length>0)
  console.log(arr)
else
console.log('your contact its not found')
  rl.close()
})