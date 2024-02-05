
let x = [2, 4, 67, 8, 44, 6, 12];

function linearSearch(x, num) {
    for (let i = 0; i < x.length; i++) {
      if (x[i] === num) {
        return i+1;
      }
    }
    return null;
  }
  
  linearSearch(x, 8); 
  