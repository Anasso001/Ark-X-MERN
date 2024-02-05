let x = [234, 43, 55, 63, 5, 6, -235, 547];


function bubleSort(x) {
 
    for (let i = 0; i < x.length; i++) {
 
        for (let j = 0; j < (x.length-i-1); j++) {
 
            if (x[j] > x[j + 1]) {
 
            
                let temp = x[j]
                x[j] = x[j + 1]
                x[j + 1] = temp
            }
        }
    }
 
   
    console.log(x);
}
 


bubleSort(x);