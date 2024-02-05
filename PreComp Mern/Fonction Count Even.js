function even(number){
    if(number % 2 == 0) 
 return true;}

let x = [5,6,3,8,6,4];
function countEven(x){
  let count=0;
    for(let i=0 ; i<x.length ;i++){
        if (even(x[i]))
        count++;
    }
   return count;
}

countEven(x);