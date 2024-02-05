

let x=[2, 1, 3, 7, 5];

function insertionSort(x) {
    for (let i = 1; i < x.length; i++) {
      let currentValue = x[i];
      
      for ( let j = i - 1; j >= 0 && x[j] > currentValue; j--) 
        x[j + 1] = x[j];
      
      x[j + 1] = currentValue;
    }
    return x;
  }
 insertionSort(x); 

 