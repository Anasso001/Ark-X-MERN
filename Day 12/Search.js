const a= require('./data.json')
const readline = require('readline');

// Create the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// let arr= []
//  rl.question('search a contact with name : ',(x) => {
//     for (let i = 0 ;i< a.length ; i++){
//         if(a[i].name == x)
//         arr.push(a[i])
//         }
//         rl.close();
//  }
      
//  )
//  rl.on('close', ()=> {if (arr.length>0){ console.log(arr)}
//  else {console.log('your contact its not found')}})
 


rl.question('search a contact with name : ',(x) => {
   let arr= a.filter((s)=>s.name==x)
  if (arr.length>0)
   console.log(arr)
else
console.log('your contact its not found')
   rl.close()
})

