
let x= [4, 5, 1, 7,6];
function selectionSort(x) {
    for (let i = 0; i < x.length; i++) {
      let low = i
      for (let j = i + 1; j < x.length; j++) {
        if (x[j] < x[low]) {
          low = j
        }
      }
      if (low !== i) {
        
        [x[i], x[low]] = [x[low], x[i]];
      }
    }
    return x;
  }
    selectionSort(x);