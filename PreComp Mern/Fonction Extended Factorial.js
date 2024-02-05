

function factor(num){

let factorial= num;
for (let i=1 ; i<num ; i++) {

    factorial = factorial * (num-i);

} 
return factorial;
}
let n=5;
let p=2;

function ExtendedFactorial(n,p){

    let c= factor(n)/(factor(p)*factor(n-p));
    return c;
}
console.log(ExtendedFactorial(n,p));