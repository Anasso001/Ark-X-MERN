
let x= [1,4,5,7,9,13];
function binarySearch(x, num) {
    let start = 0;
    let end = x.length - 1;
    while (start <= end) {
      let middle = Math.floor((start + end) / 2)
      if (x[middle] < num) {
        start = middle + 1;
      } else if (x[middle] > num) {
        end = middle - 1;
      } else if (x[middle] === num) {
        return middle+1;
      }
    }
    
    return null;
  }
  binarySearch(x, 7);
  