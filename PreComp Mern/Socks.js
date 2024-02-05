let x=[1, 2, 1, 2, 1, 3, 2]; // 2

 let y=[10, 20, 20, 10, 10, 30, 50, 10, 20]; // 3
 
 let z=[1, 1, 3, 1, 2, 1, 3, 3, 3, 3]; // 4
 
 let a=[1, 2, 3, 4, 5, 6, 7, 8, 9]; // 0

 let b=[4,5,4,8,6,9,2,8,4,5,6,2,8]; //5

function pairSocks( x) {
    let count = 0;
    x = x.sort();
    for (let i=0; i < x.length-1; i++) {
      if(x[i] === x[i+1]){
        count++;
        i++;
      }
    }
    return count;
  }
  pairSocks(x);
  