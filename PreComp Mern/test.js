

 
 let x=[1, 2, 1, 2, 1, 3, 2]; // 2

 let y=[10, 20, 20, 10, 10, 30, 50, 10, 20]; // 3
 
 let z=[1, 1, 3, 1, 2, 3, 3,3,3]; // 4
 
 let a=[1, 2, 3, 4, 5, 6, 7, 8, 9]; // 0
 
 function pairSocks(x){
    let count=0;
  for(let i=0; i<x.length ; i++){
      for(let j=i+1; j<x.length ; j++){
         if (x[i]==x[j]){
            count++;
            x.splice(i,1);
            x.splice(j,1);
            }
            
         }
     }
     return count;
 }
 
 pairSocks(x);
 
 
 
 